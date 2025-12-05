import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client, blogQueries } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

async function getPost(slug: string) {
  const post = await client.fetch(blogQueries.postBySlug, { slug })
  return post
}

async function getRelatedPosts(slug: string, categories: string[]) {
  const posts = await client.fetch(blogQueries.relatedPosts, { slug, categories })
  return posts
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription = post.seo?.metaDescription || post.excerpt
  const keywords = post.seo?.keywords || []
  const ogImage = post.social?.ogImage
    ? urlFor(post.social.ogImage).width(1200).height(630).url()
    : urlFor(post.mainImage).width(1200).height(630).url()

  return {
    title: `${metaTitle} | Shop Name Boards Blog`,
    description: metaDescription,
    keywords: keywords.join(', '),
    openGraph: {
      title: post.social?.ogTitle || metaTitle,
      description: post.social?.ogDescription || metaDescription,
      images: [ogImage],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author?.name],
    },
    twitter: {
      card: post.social?.twitterCard || 'summary_large_image',
      title: post.social?.ogTitle || metaTitle,
      description: post.social?.ogDescription || metaDescription,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.slug, post.categories || [])

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: urlFor(post.mainImage).url(),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shop Name Boards',
      logo: {
        '@type': 'ImageObject',
        url: 'https://shopnameboard.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://shopnameboard.vercel.app/blog/${params.slug}`,
    },
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  const howToSchema = post.howToSteps && post.howToSteps.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.excerpt,
    step: post.howToSteps.map((step: any, index: number) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? urlFor(step.image).url() : undefined,
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shopnameboard.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://shopnameboard.vercel.app/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://shopnameboard.vercel.app/blog/${params.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-red-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>

            {/* TL;DR for AEO/GEO */}
            {post.tldr && (
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  Quick Answer (TL;DR)
                </h2>
                <p className="text-gray-800 leading-relaxed">{post.tldr}</p>
              </div>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              {/* Author */}
              {post.author && (
                <div className="flex items-center space-x-3">
                  {post.author.image && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(post.author.image).width(48).height(48).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
              )}

              {/* Published Date */}
              <div>
                <p className="font-semibold text-gray-900">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-sm text-gray-500">Published</p>
              </div>

              {/* Reading Time */}
              {post.estimatedReadingTime && (
                <div>
                  <p className="font-semibold text-gray-900">{post.estimatedReadingTime} min</p>
                  <p className="text-sm text-gray-500">Read time</p>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(800).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
                {post.mainImage.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p className="text-sm">{post.mainImage.caption}</p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Facts for AEO */}
            {post.quickFacts && post.quickFacts.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-2">💡</span>
                  Key Points
                </h2>
                <ul className="space-y-2">
                  {post.quickFacts.map((fact: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <PortableText value={post.body} />
            </div>

            {/* How-To Steps */}
            {post.howToSteps && post.howToSteps.length > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="text-4xl mr-3">📋</span>
                  Step-by-Step Guide
                </h2>
                <div className="space-y-6">
                  {post.howToSteps.map((step: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.name}</h3>
                          <p className="text-gray-700 leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="text-4xl mr-3">❓</span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16 mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost: any) => (
                  <Link
                    key={relatedPost._id}
                    href={`/blog/${relatedPost.slug.current}`}
                    className="group bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition"
                  >
                    {relatedPost.mainImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={urlFor(relatedPost.mainImage).width(400).height(300).url()}
                          alt={relatedPost.mainImage.alt || relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-red-600 transition line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
    </div>
  )
}
