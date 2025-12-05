'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PortableText from '@/components/PortableText'
import { urlFor } from '@/lib/sanity'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  body: any[] // Portable Text from Sanity
  publishedAt: string
  updatedAt?: string
  author: {
    name: string
    image?: string
    slug?: { current: string }
    bio?: string
  }
  categories: string[]
  mainImage?: any
  estimatedReadingTime?: number
  featured?: boolean
  tldr?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
  howToSteps?: Array<{
    name: string
    text: string
  }>
  review?: {
    author: string
    date: string
    rating: number
    body: string
  }
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { client, blogQueries } = await import('@/lib/sanity')
        const data: BlogPost | null = await client.fetch(blogQueries.postBySlug, { slug })
        setPost(data)
        
        // Fetch related posts
        if (data && data.categories) {
          const related: BlogPost[] = await client.fetch(blogQueries.relatedPosts, {
            slug: data.slug.current,
            categories: data.categories,
          })
          setRelatedPosts(related)
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  // Helper to count words safely from Portable Text
  const getWordCount = () => {
    if (!post?.body || !Array.isArray(post.body)) return "0"
    
    try {
      const textContent = post.body
        .filter((block: any) => block._type === 'block')
        .map((block: any) => {
          if (block.children && Array.isArray(block.children)) {
            return block.children
              .map((child: any) => child.text || '')
              .join(' ')
          }
          return ''
        })
        .join(' ')
      
      const wordCount = textContent.split(/\s+/).filter(Boolean).length
      return String(wordCount)
    } catch (error) {
      console.error('Error counting words:', error)
      return "0"
    }
  }

  // Generate JSON-LD schema
  const generateSchema = () => {
    if (!post) return null

    // Calculate image URL BEFORE creating the schema object
    let mainImageUrl: string[] = []
    if (post.mainImage) {
      try {
        const imageBuilder = urlFor(post.mainImage)
        if (imageBuilder) {
          const url = imageBuilder.width(1200).url()
          if (url) {
            mainImageUrl = [url]
          }
        }
      } catch (error) {
        console.error('Error generating image URL for schema:', error)
      }
    }

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://shopnameboard.com/#site",
          "url": "https://shopnameboard.com/",
          "name": "The Mediaverse",
          "publisher": {
            "@id": "https://shopnameboard.com/#org"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://shopnameboard.com/#org",
          "name": "The Mediaverse",
          "url": "https://shopnameboard.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shopnameboard.com/images/logo.png"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://shopnameboard.com/#local",
          "name": "The Mediaverse - Shop Name Boards",
          "url": "https://shopnameboard.com",
          "telephone": "+91 9580088540",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "areaServed": [
            "Bangalore", "Mumbai", "Delhi", "Chennai", "Pune",
            "Kolkata", "Hyderabad", "Ahmedabad", "Jaipur", "Lucknow"
          ],
          "priceRange": "₹₹",
          "description": "Premium shop name boards manufacturing and marketing: ACP 3D Boards, LED signage and Fabric Light Boxes."
        },
        {
          "@type": "Service",
          "@id": "https://shopnameboard.com/#service-signage",
          "name": "Shop Name Boards Manufacturing",
          "serviceType": "Signage manufacturing and installation",
          "provider": {
            "@id": "https://shopnameboard.com/#local"
          }
        },
        {
          "@type": "Article",
          "@id": `https://shopnameboard.com/blog/${post.slug.current}/#article`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://shopnameboard.com/blog/${post.slug.current}/`
          },
          "headline": post.title,
          "image": mainImageUrl,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "url": post.author.slug ? `https://shopnameboard.com/author/${post.author.slug.current}` : undefined
          },
          "publisher": {
            "@id": "https://shopnameboard.com/#org"
          },
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt || post.publishedAt,
          "description": post.excerpt,
          "articleSection": post.categories,
          "keywords": post.categories.join(", "),
          "wordCount": getWordCount(),
          "isAccessibleForFree": "True"
        },
        ...(post.faqs && post.faqs.length > 0 ? [{
          "@type": "FAQPage",
          "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }] : []),
        ...(post.howToSteps && post.howToSteps.length > 0 ? [{
          "@type": "HowTo",
          "name": `How to ${post.title}`,
          "description": post.excerpt,
          "step": post.howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text
          }))
        }] : []),
        ...(post.review ? [{
          "@type": "Review",
          "itemReviewed": {
            "@type": "Service",
            "name": "Shop Name Boards Manufacturing"
          },
          "author": {
            "@type": "Person",
            "name": post.review.author
          },
          "datePublished": post.review.date,
          "reviewBody": post.review.body,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": String(post.review.rating),
            "bestRating": "5"
          }
        }] : []),
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://shopnameboard.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://shopnameboard.com/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://shopnameboard.com/blog/${post.slug.current}/`
            }
          ]
        }
      ]
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-red-600 hover:text-red-700 font-semibold">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }


  // Only generate schema when post is fully loaded
  const schema = post && !loading ? generateSchema() : null

  return (
    <>
      {/* JSON-LD Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      )}

      <article className="min-h-screen bg-white">
        {/* Hero Image */}
        {post.mainImage && (() => {
          // Calculate the URL FIRST
          const builder = urlFor(post.mainImage)
          const heroImageUrl = builder ? builder.width(1920).url() : ''
          
          if (!heroImageUrl) return null
          
          return (
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={heroImageUrl}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="container-custom">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((cat) => (
                      <span key={cat} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-3">
                      {post.author.image ? (() => {
                        const authorImageBuilder = urlFor(post.author.image)
                        const authorImageUrl = authorImageBuilder ? authorImageBuilder.width(96).height(96).url() : ''
                        
                        if (authorImageUrl) {
                          return (
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30 backdrop-blur-sm">
                              <Image
                                src={authorImageUrl}
                                alt={post.author.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )
                        }
                        
                        return (
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-white font-bold">
                              {post.author.name.charAt(0)}
                            </span>
                          </div>
                        )
                      })() : (
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-white font-bold">
                            {post.author.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{post.author.name}</p>
                        <p className="text-sm text-white/80">
                          {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                          {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Content */}
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            {/* TL;DR Section */}
            {post.tldr && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-8 border-2 border-blue-200"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">⚡</span>
                  Quick Answer (TL;DR)
                </h2>
                {typeof post.tldr === 'string' ? (
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {post.tldr}
                  </p>
                ) : Array.isArray(post.tldr) ? (
                  <div className="text-gray-700 leading-relaxed text-lg">
                    <PortableText content={post.tldr} />
                  </div>
                ) : null}
              </motion.div>
            )}

            {/* Main Content */}
            {post.body && Array.isArray(post.body) && post.body.length > 0 && (
              <div className="mb-12">
                <PortableText content={post.body} />
              </div>
            )}

            {/* How-To Section */}
            {post.howToSteps && post.howToSteps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-6">How To Guide</h2>
                <ol className="space-y-6">
                  {post.howToSteps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.name}</h3>
                        {typeof step.text === 'string' ? (
                          <p className="text-gray-700 leading-relaxed">{step.text}</p>
                        ) : Array.isArray(step.text) ? (
                          <div className="text-gray-700 leading-relaxed">
                            <PortableText content={step.text} />
                          </div>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      {typeof faq.answer === 'string' ? (
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      ) : Array.isArray(faq.answer) ? (
                        <div className="text-gray-700 leading-relaxed">
                          <PortableText content={faq.answer} />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Review Section */}
            {post.review && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-2 border-green-200"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-4">Customer Review</h2>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < post.review!.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-700 font-semibold ml-2">{post.review.rating}/5</span>
                </div>
                {typeof post.review.body === 'string' ? (
                  <p className="text-gray-700 leading-relaxed mb-4">{post.review.body}</p>
                ) : Array.isArray(post.review.body) ? (
                  <div className="text-gray-700 leading-relaxed mb-4">
                    <PortableText content={post.review.body} />
                  </div>
                ) : null}
                <p className="text-gray-600 font-semibold">— {post.review.author}</p>
                <p className="text-gray-500 text-sm mt-2">{new Date(post.review.date).toLocaleDateString('en-IN')}</p>
              </motion.div>
            )}

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200"
            >
              <div className="flex items-start gap-6">
                {post.author.image ? (() => {
                  const authorImageBuilder = urlFor(post.author.image)
                  const authorImageUrl = authorImageBuilder ? authorImageBuilder.width(160).height(160).url() : ''
                  
                  if (authorImageUrl) {
                    return (
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                        <Image
                          src={authorImageUrl}
                          alt={post.author.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  }
                  
                  return (
                    <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {post.author.name.charAt(0)}
                    </div>
                  )
                })() : (
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                  {post.author.bio && (
                    Array.isArray(post.author.bio) ? (
                      <div className="text-gray-700 leading-relaxed">
                        <PortableText content={post.author.bio} />
                      </div>
                    ) : typeof post.author.bio === 'string' ? (
                      <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
                    ) : null
                  )}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center mb-12"
            >
              <h3 className="text-3xl font-black mb-4">Need Shop Name Boards?</h3>
              <p className="text-xl text-red-100 mb-6">
                Get a free quote for premium signage solutions in your city
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                Get Free Quote
              </Link>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    // Calculate image URL outside JSX
                    const builder = relatedPost.mainImage ? urlFor(relatedPost.mainImage) : null
                    const relatedImageUrl = builder ? builder.width(600).url() : ''
                    
                    return (
                      <Link
                        key={relatedPost._id}
                        href={`/blog/${relatedPost.slug.current}`}
                        className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                      >
                        {relatedImageUrl && (
                          <div className="relative h-40">
                            <Image
                              src={relatedImageUrl}
                              alt={relatedPost.mainImage?.alt || relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <p className="text-red-600 font-semibold text-sm">Read More →</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  )
}

