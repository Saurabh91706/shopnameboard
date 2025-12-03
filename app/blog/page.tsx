'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author: {
    name: string
    image?: any
    slug?: { current: string }
  }
  categories: string[]
  mainImage?: any
  estimatedReadingTime?: number
  featured?: boolean
}

export default function BlogPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest')

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { client, blogQueries } = await import('@/lib/sanity')
        const data: BlogPost[] = await client.fetch(blogQueries.allPosts)
        setPosts(data)
        setFilteredPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter and sort posts
  useEffect(() => {
    let filtered = [...posts]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }


    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      } else if (sortBy === 'oldest') {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      } else {
        // Featured first, then by date
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    setFilteredPosts(filtered)
  }, [posts, searchQuery, sortBy])

  const featuredPost = filteredPosts.find((p) => p.featured && sortBy === 'featured')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/20 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto">
              Expert guides, tips, and insights on shop name boards manufacturing, marketing, and installation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Enhanced Search */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles, topics, guides..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-6 py-5 pl-16 pr-6 rounded-2xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-lg font-medium bg-white shadow-lg hover:shadow-xl focus:shadow-2xl"
                    />
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                {searchQuery && (
                  <p className="mt-3 text-sm text-gray-600 text-center">
                    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                )}
              </div>

              {/* Sort */}
              <div className="w-full md:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'featured')}
                  className="w-full md:w-auto px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-red-500 focus:outline-none font-semibold bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found. Try adjusting your filters.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-auto">
                        {featuredPost.mainImage ? (() => {
                          // Calculate image URL BEFORE JSX
                          const builder = urlFor(featuredPost.mainImage)
                          const featuredImageUrl = builder ? builder.width(1200).url() : ''
                          
                          if (!featuredImageUrl) {
                            return (
                              <div className="w-full h-full bg-red-800 flex items-center justify-center">
                                <div className="text-white/50 text-4xl">📸</div>
                              </div>
                            )
                          }
                          
                          return (
                            <Image
                              src={featuredImageUrl}
                              alt={featuredPost.mainImage.alt || featuredPost.title}
                              fill
                              className="object-cover"
                            />
                          )
                        })() : (
                          <div className="w-full h-full bg-red-800 flex items-center justify-center">
                            <div className="text-white/50 text-4xl">📸</div>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.categories.map((cat) => (
                            <span key={cat} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {cat}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black mb-4">
                          {featuredPost.title}
                        </h2>
                        <p className="text-red-100 mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            {featuredPost.author.image ? (() => {
                              const authorImageBuilder = urlFor(featuredPost.author.image)
                              const authorImageUrl = authorImageBuilder ? authorImageBuilder.width(80).height(80).url() : ''
                              
                              if (authorImageUrl) {
                                return (
                                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
                                    <Image
                                      src={authorImageUrl}
                                      alt={featuredPost.author.name}
                                      width={40}
                                      height={40}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )
                              }
                              
                              return (
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                  <span className="text-white font-bold">
                                    {featuredPost.author.name.charAt(0)}
                                  </span>
                                </div>
                              )
                            })() : (
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="text-white font-bold">
                                  {featuredPost.author.name.charAt(0)}
                                </span>
                              </div>
                            )}
                            <span className="text-white/90 font-medium">
                              {featuredPost.author.name}
                            </span>
                          </div>
                          <span className="text-white/70 text-sm">
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.slug.current}`}
                          className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter((p) => !p.featured || sortBy !== 'featured')
                  .map((post, index) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          {post.mainImage ? (() => {
                            // Calculate image URL BEFORE JSX
                            const builder = urlFor(post.mainImage)
                            const postImageUrl = builder ? builder.width(800).url() : ''
                            
                            if (!postImageUrl) {
                              return (
                                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                                  <div className="text-red-400 text-3xl">📸</div>
                                </div>
                              )
                            }
                            
                            return (
                              <Image
                                src={postImageUrl}
                                alt={post.mainImage.alt || post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            )
                          })() : (
                            <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                              <div className="text-red-400 text-3xl">📸</div>
                            </div>
                          )}
                          {post.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((cat) => (
                              <span key={cat} className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                                {cat}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              {post.author.image ? (() => {
                                const authorImageBuilder = urlFor(post.author.image)
                                const authorImageUrl = authorImageBuilder ? authorImageBuilder.width(64).height(64).url() : ''
                                
                                if (authorImageUrl) {
                                  return (
                                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                                      <Image
                                        src={authorImageUrl}
                                        alt={post.author.name}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )
                                }
                                
                                return (
                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-600 font-semibold text-xs">
                                      {post.author.name.charAt(0)}
                                    </span>
                                  </div>
                                )
                              })() : (
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-600 font-semibold text-xs">
                                    {post.author.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                              <span>{post.author.name}</span>
                            </div>
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
