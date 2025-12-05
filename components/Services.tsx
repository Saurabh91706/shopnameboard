'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: '2D ACP Board',
      description: 'Flat aluminum composite panel boards ideal for budget-conscious businesses. Lightweight, weather-resistant, and available in multiple colors.',
      price: '₹3K-₹10K',
      gradient: 'from-primary-400 via-primary-500 to-primary-600',
      link: '/services/2d-acp-board',
      icon: '🎨',
    },
    {
      title: '3D ACP Board',
      description: 'Premium boards with raised letters creating depth and shadow effects. Available in backlit and non-backlit variants for maximum visibility.',
      price: '₹8K-₹25K',
      gradient: 'from-primary-500 via-primary-600 to-primary-700',
      link: '/services/3d-acp-board',
      icon: '✨',
    },
    {
      title: 'GSB Board',
      description: 'Galvanized Steel Boards offering industrial-grade durability. Perfect for areas with harsh weather conditions. 10+ years lifespan.',
      price: '₹6K-₹18K',
      gradient: 'from-primary-600 via-primary-700 to-orange-600',
      link: '/services/gsb-board',
      icon: '🛡️',
    },
    {
      title: 'Non-Lit Board',
      description: 'Flex printing on iron frames. Most affordable option, suitable for well-lit shopping complexes and indoor locations.',
      price: '₹2K-₹8K',
      gradient: 'from-primary-400 via-orange-500 to-orange-600',
      link: '/services/non-lit-board',
      icon: '📋',
    },
    {
      title: 'Arch Gate',
      description: 'Grand arch gates for shops, events, and promotions. Custom designs with eye-catching appeal. Perfect for shop entrances.',
      price: '₹15K-₹50K',
      gradient: 'from-orange-500 via-primary-500 to-primary-600',
      link: '/services/arch-gate',
      icon: '🏛️',
    },
    {
      title: 'Fabric Light Box',
      description: 'Premium fabric light boxes with LED backlighting for soft, even illumination. Modern design with tool-free graphic changes.',
      price: '₹8K-₹22K',
      gradient: 'from-primary-500 via-orange-500 to-orange-600',
      link: '/services/fabric-box',
      icon: '💡',
    },
    {
      title: 'Lit Flange Board',
      description: 'Double-sided lit flange boards with LED. Visible from both directions. Perfect for main roads and high-traffic areas.',
      price: '₹10K-₹30K',
      gradient: 'from-primary-600 via-orange-600 to-orange-700',
      link: '/services/lit-flange-board',
      icon: '🔆',
    },
    {
      title: 'Non-Lit Flange Board',
      description: 'Classic non-lit flange boards for well-lit areas. Double-sided visibility without electricity costs. Cost-effective solution.',
      price: '₹5K-₹15K',
      gradient: 'from-orange-500 via-primary-600 to-primary-700',
      link: '/services/non-lit-flange-board',
      icon: '📍',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-orange-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            8 specialized <strong>shop name board manufacturing</strong> solutions designed for superior performance,
            maximum visibility, and flawless integration. Serving <strong>Mumbai, Delhi, Bangalore, Chennai, Pune</strong>,
            and 15+ cities with premium ACP boards, GSB boards, fabric light boxes, and comprehensive signage solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200">
                {/* Icon & Gradient Background */}
                <div className={`relative w-full h-32 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative z-10"
                  >
                    <Link
                      href={service.link}
                      className="text-primary-600 font-bold hover:text-primary-700 transition-colors inline-flex items-center gap-2 group/link text-sm"
                    >
                      Learn more
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Hover Gradient Effect */}
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
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 transition-all duration-300"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
