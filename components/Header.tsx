'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: '2D ACP Board', slug: '2d-acp-board', price: '₹3K-₹10K' },
    { name: '3D ACP Board', slug: '3d-acp-board', price: '₹8K-₹25K' },
    { name: 'GSB Board', slug: 'gsb-board', price: '₹6K-₹18K' },
    { name: 'Non-Lit Board', slug: 'non-lit-board', price: '₹2K-₹8K' },
    { name: 'Arch Gate', slug: 'arch-gate', price: '₹15K-₹50K' },
    { name: 'Fabric Box', slug: 'fabric-box', price: '₹8K-₹22K' },
    { name: 'Lit Flange Board', slug: 'lit-flange-board', price: '₹10K-₹30K' },
    { name: 'Non-Lit Flange Board', slug: 'non-lit-flange-board', price: '₹5K-₹15K' },
  ]

  const cities = [
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Delhi', slug: 'delhi' },
    { name: 'Bangalore', slug: 'bangalore' },
    { name: 'Hyderabad', slug: 'hyderabad' },
    { name: 'Chennai', slug: 'chennai' },
    { name: 'Kolkata', slug: 'kolkata' },
    { name: 'Pune', slug: 'pune' },
    { name: 'Ahmedabad', slug: 'ahmedabad' },
    { name: 'Jaipur', slug: 'jaipur' },
    { name: 'Surat', slug: 'surat' },
    { name: 'Lucknow', slug: 'lucknow' },
    { name: 'Indore', slug: 'indore' },
    { name: 'Chandigarh', slug: 'chandigarh' },
    { name: 'Coimbatore', slug: 'coimbatore' },
    { name: 'Kochi', slug: 'kochi' },
    { name: 'Nagpur', slug: 'nagpur' },
    { name: 'Bhubaneswar', slug: 'bhubaneswar' },
    { name: 'Visakhapatnam', slug: 'visakhapatnam' },
    { name: 'Guwahati', slug: 'guwahati' },
    { name: 'Mysore', slug: 'mysore' },
  ]

  return (
    <>
      {/* Top Info Bar - Black */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:9580088540" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">9580088540</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:contact@themediaverse.in" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@themediaverse.in</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs">Follow us:</span>
            <a href="#" className="hover:text-primary-500 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/919580088540" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black group-hover:text-primary-500 transition-colors">
                  Shop Name Board
                </span>
                <span className="text-xs text-gray-600">by The Mediaverse</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between px-4 py-3 hover:bg-primary-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <span className="font-semibold text-gray-700">{service.name}</span>
                          <span className="text-sm text-primary-500 font-semibold">{service.price}</span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block px-4 py-3 text-center bg-primary-500 text-white font-bold hover:bg-primary-600 transition-colors"
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCitiesOpen(true)}
                onMouseLeave={() => setCitiesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                  Cities
                  <svg className={`w-4 h-4 transition-transform ${citiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {citiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-100 p-6"
                    >
                      <div className="grid grid-cols-4 gap-3">
                        {cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/cities/${city.slug}`}
                            className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded transition-colors"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/cities"
                        className="block mt-4 py-2 text-center bg-primary-500 text-white font-bold rounded hover:bg-primary-600 transition-colors"
                      >
                        View All Cities →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                Blog
              </Link>

              <Link href="/about" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                About
              </Link>

              <Link href="/contact" className="text-gray-700 hover:text-primary-500 font-semibold transition-colors">
                Contact
              </Link>

              {/* CTA Button */}
              <a
                href="tel:9580088540"
                className="bg-primary-500 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-600 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to Expert
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link href="/" className="block py-2 font-semibold hover:text-primary-500">Home</Link>
                <Link href="/services" className="block py-2 font-semibold hover:text-primary-500">Services</Link>
                <Link href="/cities" className="block py-2 font-semibold hover:text-primary-500">Cities</Link>
                <Link href="/blog" className="block py-2 font-semibold hover:text-primary-500">Blog</Link>
                <Link href="/about" className="block py-2 font-semibold hover:text-primary-500">About</Link>
                <Link href="/contact" className="block py-2 font-semibold hover:text-primary-500">Contact</Link>
                <a
                  href="tel:9580088540"
                  className="block w-full bg-primary-500 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors text-center"
                >
                  📞 Talk to Expert
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
