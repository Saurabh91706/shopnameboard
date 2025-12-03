'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setLoadedImages((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before image enters viewport for faster loading
        threshold: 0.01,
      }
    )

    // Observe all image refs
    const timeoutId = setTimeout(() => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // All images from the Gallery directory (URL encoded for special characters)
  const galleryImages = [
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.51 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.52 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.53 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.54 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.54 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.55 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.56 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.57 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.58 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.58 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.40.59 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.28 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.29 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.30 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.31 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.31 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.33 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.34 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.34 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.35 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.35 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.36 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.36 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.37 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.37 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.39 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.40 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.40 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.41 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.42 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.43 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.44 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.45 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.46 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.46 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.47 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.47 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.49 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.51 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.53 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.54 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.54 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.55 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.55 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.58 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.42.59 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.00 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.00 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.03 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.06 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.06 PM.jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.07 PM (1).jpeg',
    '/Gallery/WhatsApp Image 2025-11-29 at 5.43.07 PM.jpeg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Our Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Explore our portfolio of premium shop name boards and signage solutions
            </p>
            <div className="mt-4 text-gray-600 text-lg font-medium">
              Our Featured Projects
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => {
              // Load all images, but prioritize first 12 for faster initial load
              const isPriority = index < 12 // Priority for above-the-fold images

              return (
                <div
                  key={`${image}-${index}`}
                  ref={(el) => {
                    if (el) imageRefs.current[index] = el
                  }}
                  data-index={index}
                  className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedImage(image)
                  }}
                >
                  <div className="relative aspect-square w-full bg-gray-100">
                    <>
                      <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        priority={isPriority}
                        loading={isPriority ? undefined : 'lazy'}
                        quality={100}
                        unoptimized={false}
                        style={{ imageRendering: 'auto' }}
                        onLoad={() => {
                          setLoadedImages((prev) => new Set([...prev, index]))
                        }}
                        onError={(e) => {
                          console.error(`Failed to load image ${index}:`, image)
                          // Mark as loaded to prevent infinite retry
                          setLoadedImages((prev) => new Set([...prev, index]))
                        }}
                      />
                      {/* Loading skeleton that fades out */}
                      {!loadedImages.has(index) && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 pointer-events-none" />
                      )}
                    </>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Want to create something amazing for your business?
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
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
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
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
    </div>
  )
}
