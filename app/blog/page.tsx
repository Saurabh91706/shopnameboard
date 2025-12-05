import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client, blogQueries } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Shop Name Board Blog | Expert Guides, Tips & Industry Insights',
  description: 'Expert blog on shop name boards, ACP boards, LED signage, and signage solutions. Get installation guides, design tips, maintenance advice, and industry insights for businesses across India.',
  keywords: 'shop name board blog, signage blog, ACP board guides, LED signage tips, shop board installation, signage design, business signage, signage maintenance',
  openGraph: {
    title: 'Shop Name Board Blog | Expert Guides & Industry Insights',
    description: 'Expert articles on shop name boards, ACP boards, LED signage, and signage solutions for businesses.',
    type: 'website',
  },
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author: {
    name: string
    image: any
    slug: { current: string }
  }
  categories: string[]
  mainImage: any
  estimatedReadingTime: number
  featured: boolean
}

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(blogQueries.allPosts)
  return posts
}

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shop Name Board Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Expert guides, installation tips, design ideas, and industry insights for shop name boards, ACP boards, LED signage, and all signage solutions.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {post.mainImage && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          ⭐ Featured
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        {post.author?.image && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={urlFor(post.author.image).width(32).height(32).url()}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span>{post.author?.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {post.estimatedReadingTime} min read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300"
              >
                {post.mainImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((category, index) => (
                        <span
                          key={index}
                          className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.estimatedReadingTime} min read
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Advice on Shop Name Boards?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of signage experts is ready to help you choose the perfect shop name board for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
