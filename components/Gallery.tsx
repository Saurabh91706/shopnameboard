'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  // 8 images for 4x2 layout
  const galleryImages = [
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.51 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.52 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.53 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.54 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.55 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.56 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.57 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.58 PM.jpeg',
  ]

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section className="section-padding bg-gradient-to-b from-white via-red-50/20 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Our Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            Explore our portfolio of premium shop name boards manufactured for businesses in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities. 
            See our expert shop name boards manufacturing and marketing work.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 4}
                  loading={index < 4 ? undefined : 'lazy'}
                  quality={80}
                  onLoad={() => setLoadedImages((prev) => new Set([...prev, index]))}
                />
                {/* Loading skeleton */}
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null)
            }
          }}
        >
          <div
            className="relative max-w-7xl w-full h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={selectedImage}
                alt="Full size gallery image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={100}
                unoptimized={false}
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-300 z-10 shadow-lg hover:scale-110"
              aria-label="Close image"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full pointer-events-none">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
