import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1vvt3xz5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN, // For write operations (optional)
})

// Create the image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ Queries
export const blogQueries = {
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{
      name,
      image,
      slug
    },
    categories,
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    featured
  }`,
  
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    _updatedAt,
    author->{
      name,
      image,
      slug,
      bio
    },
    categories,
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    featured,
    tldr,
    faqs[]{
      question,
      answer
    },
    howToSteps[]{
      name,
      text
    },
    review{
      author,
      date,
      rating,
      body
    }
  }`,
  
  relatedPosts: `*[_type == "post" && slug.current != $slug && count(categories[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`,
}

