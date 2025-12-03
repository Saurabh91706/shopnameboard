'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'ACP 3D Boards',
      description: 'Premium 3D lit boards with laser-cut acrylic letters and industrial-grade LED modules',
      gradient: 'from-red-500 via-red-600 to-red-700',
      link: '/services#acp-3d',
      image: '/services/out-shop/acp-3d-board-lit.webp',
    },
    {
      title: 'Fabric Light Boxes',
      description: 'Ultra-thin tension fabric system with tool-free graphic changes and premium visual output',
      gradient: 'from-red-600 via-red-700 to-red-800',
      link: '/services#fabric-lit',
      image: '/services/in-shop/fabric-lit-board.webp',
    },
    {
      title: 'Flange Signs',
      description: 'Double-sided projecting signs for maximum visibility from both directions',
      gradient: 'from-red-700 via-red-800 to-red-900',
      link: '/services#flange',
      image: '/services/out-shop/3d-flange-board-lit.webp',
    },
    {
      title: 'LED Clip-ons',
      description: 'Ultra-slim snap frames with instant graphic changes and energy-efficient edge-lit LEDs',
      gradient: 'from-red-500 via-red-700 to-red-900',
      link: '/services#led-clip',
      image: '/services/in-shop/led-clip-on-board.webp',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
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
            <span className="gradient-text">Our Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            14+ specialized shop name boards manufacturing solutions designed for superior performance, maximum visibility, and flawless integration. 
            Serving Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities with premium ACP 3D Boards, LED Signage, 
            Fabric Light Boxes, and comprehensive shop name boards marketing services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 50, rotateY: -15 }
              }
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-red-200">
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative z-10"
                  >
                    <Link
                      href={service.link}
                      className="text-red-600 font-bold hover:text-red-700 transition-colors inline-flex items-center gap-2 group/link"
                    >
                      Learn more
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xl"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className="btn-primary">
              View All 14+ Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
