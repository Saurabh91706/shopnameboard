'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true) // Start muted by default
  const [videoLoaded, setVideoLoaded] = useState(false)
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
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
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-4 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 border-4 border-white/20 transform rotate-45"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 lg:mb-8"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
                    <div className="block text-white mb-1">#1 Shop Name</div>
                    <div className="block text-white mb-1">Boards</div>
                    <div className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent animate-shimmer mb-1">
                      Manufacturing &
                    </div>
                    <div className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent animate-shimmer mb-4">
                      Marketing Company
                    </div>
                    <div className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-100 font-bold mt-6 leading-tight">
                      in Bangalore, Mumbai,
                    </div>
                    <div className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-100 font-bold leading-tight">
                      Delhi & More
                    </div>
                  </div>
                </motion.h1>
              </motion.div>

              {/* Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6 lg:mb-8"
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-50 leading-relaxed font-normal">
                  India's leading <span className="font-semibold text-white">shop name boards manufacturer</span> serving{' '}
                  <span className="font-semibold text-white">Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, Hyderabad, Ahmedabad, Jaipur, Lucknow</span> and 50+ cities. 
                  We specialize in <span className="font-semibold text-white">shop name boards manufacturing</span> and{' '}
                  <span className="font-semibold text-white">shop name boards marketing</span> with premium ACP 3D Boards, LED Signage, 
                  Fabric Light Boxes, and 14+ signage solutions. Fast delivery, competitive pricing, expert installation.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="btn-secondary text-base sm:text-lg px-8 py-4 inline-block text-center"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/gallery"
                    className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl hover:shadow-white/30 inline-block text-center"
                  >
                    View Gallery
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Video Space (Instagram Reel Size) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
                {/* Video Container - Instagram Reel Size (9:16 aspect ratio) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/20 backdrop-blur-sm"
                >
                  {/* Video element */}
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    controls={false}
                    onLoadedData={() => {
                      setVideoLoaded(true)
                      // Video loaded, try to play
                      if (videoRef.current) {
                        videoRef.current.play().catch((error) => {
                          console.log('Autoplay prevented:', error)
                        })
                      }
                    }}
                    onCanPlay={() => {
                      setVideoLoaded(true)
                      if (videoRef.current) {
                        videoRef.current.play().catch((error) => {
                          console.log('Autoplay prevented:', error)
                        })
                      }
                    }}
                    onError={(e) => {
                      console.error('Video error:', e)
                      setVideoLoaded(false)
                    }}
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    <source src="/hero-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Placeholder - Only shows if video fails to load */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/30 to-red-800/30 z-0">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-white/80 text-sm font-medium">Video Space</p>
                      <p className="text-white/60 text-xs mt-1">Instagram Reel Size</p>
                    </div>
                  </div>
                  )}
                  
                  {/* Sound Toggle Button - Top Right */}
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        const newMutedState = !isMuted
                        videoRef.current.muted = newMutedState
                        setIsMuted(newMutedState)
                        // Try to play if unmuting
                        if (!newMutedState) {
                          videoRef.current.play().catch((error) => {
                            console.log('Play prevented:', error)
                          })
                        }
                      }
                    }}
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center border-2 border-white/30 transition-all duration-300 z-20"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </motion.div>

                {/* Decorative elements around video */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/10 rounded-full pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-white/10 rounded-full pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 md:h-32"
        >
          <motion.path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </section>
  )
}
