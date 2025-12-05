'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Helper function to generate anchor ID from service title
  const getAnchorId = (title: string): string => {
    const idMap: { [key: string]: string } = {
      'ACP 3D Board (Lit)': 'acp-3d',
      'ACP 3D Boards': 'acp-3d',
      'Fabric Light Boxes': 'fabric-lit',
      'Fabric Lit Board': 'fabric-lit',
      'Flange Signs': 'flange',
      '3D Flange Boards (Lit)': 'flange',
      '2D Flange Boards': 'flange',
      'LED Clip-ons': 'led-clip',
      'LED Clip-ons Board': 'led-clip',
      'Glow Sign Board': 'glow',
      'Arch Gates': 'arch',
      '2D Arch Gate': 'arch',
      '3D Arch Gate (Lit)': 'arch',
    }
    
    // Check if we have a direct mapping
    if (idMap[title]) {
      return idMap[title]
    }
    
    // Otherwise, generate from title
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const outShopBranding = [
    {
      id: 1,
      title: 'ACP 2D Board',
      question: 'What is the most cost-effective and durable option for flat shop boards?',
      description: 'The foundation of durable exterior signage. Features a robust Aluminium Composite Panel (ACP) base. Ideal for simple, large-format branding where illumination isn\'t essential.',
      usp: 'Extreme weather resistance and superior finish quality (Matte/Gloss)',
      keywords: ['flat acp sign board', 'non-lit acp board', 'acp fascia sign'],
      gradient: 'from-red-500 to-red-600',
      image: '/services/out-shop/acp-2d-board.webp',
    },
    {
      id: 2,
      title: 'ACP 3D Board (Lit)',
      question: 'How does an ACP 3D Lit Board provide a premium, dynamic storefront look?',
      description: 'The industry standard for prestige. Features 3D laser-cut acrylic letters (3" to 5" thickness) mounted on a solid ACP base. Internally illuminated by industrial-grade LED modules, providing a stunning face-lit effect.',
      usp: 'High visual depth, excellent night-time brand recall, customizable glow (color and intensity)',
      keywords: ['3d acp letter signage', 'acrylic 3d glow sign', 'premium shop hoarding'],
      gradient: 'from-red-600 to-red-700',
      image: '/services/out-shop/acp-3d-board-lit.webp',
    },
    {
      id: 3,
      title: 'Glow Sign Board',
      question: 'What makes a Glow Sign Board the brightest option for busy areas?',
      description: 'A generic but powerful term for ultra-bright, edge-to-edge illuminated signage. Typically uses translucent Flex or Acrylic sheets with a back-lighting system, ensuring maximum radiance.',
      usp: 'Uniform, powerful illumination that dominates high-traffic locations',
      keywords: ['backlit flex board', 'led glow sign board manufacturer', 'outdoor illuminated sign'],
      gradient: 'from-red-500 to-red-700',
      image: '/services/out-shop/glow-shine-board.webp',
    },
    {
      id: 4,
      title: 'Non Lit Board',
      question: 'When is a Non-Lit Sign Board the right choice for exterior display?',
      description: 'Simple, static display solutions including painted metal, vinyl pasted ACP, or high-definition prints. Best suited for areas with strong ambient street lighting or tight budgets.',
      usp: 'Zero electricity cost, easy installation, and minimal maintenance',
      keywords: ['outdoor non-lit signboard', 'metal fascia sign', 'hoarding without light'],
      gradient: 'from-red-400 to-red-600',
      image: '/services/out-shop/non-lit-board.webp',
    },
    {
      id: 5,
      title: '3D Flange Boards (Lit)',
      question: 'Why are 3D Lit Flange Boards essential for maximizing visibility on sidewalks?',
      description: 'Also known as "Lollipop Boards." These are double-sided, round or square signs mounted perpendicular to the wall. Constructed from Aluminum profiles and Acrylic faces with internal LEDs.',
      usp: 'Two-way visibility—capturing traffic approaching from both directions. The 3D element adds depth and flair',
      keywords: ['double-sided flange sign', 'led lollipop board price', 'projecting signage'],
      gradient: 'from-red-600 to-red-800',
      image: '/services/out-shop/3d-flange-board-lit.webp',
    },
    {
      id: 6,
      title: '2D Flange Boards',
      question: 'What is the benefit of using 2D Flange Signs for local businesses?',
      description: 'The non-lit, budget-friendly version of the Flange Board. Uses metal or PVC sheets for a simple, wall-projected sign.',
      usp: 'Low-cost, easy-to-install directional signage for businesses located inside complexes or lanes',
      keywords: ['non-lit projecting sign', 'outdoor bracket sign', 'side-mounted sign board'],
      gradient: 'from-red-500 to-red-700',
      image: '/services/out-shop/2d-flange-board.webp',
    },
    {
      id: 7,
      title: '2D Arch Gate',
      question: 'How does a 2D Arch Gate define a grand entrance?',
      description: 'A large, flat, rectangular structure spanning the width of a shop entrance, often fabricated using mild steel (MS) frame and ACP cladding.',
      usp: 'Creates a distinct, imposing fascia and serves as a major branding anchor',
      keywords: ['shop entrance arch design', 'ms frame acp gate', 'storefront canopy sign'],
      gradient: 'from-red-700 to-red-900',
      image: '/services/out-shop/2d-arch-gate.webp',
    },
    {
      id: 8,
      title: '3D Arch Gate (Lit)',
      question: 'What materials are used to create a stunning, illuminated 3D Arch Gate?',
      description: 'Combines the grand structure of an Arch Gate with the premium feel of 3D lit letters. The Arch structure is cladded in ACP with internal wiring to power the highly visible 3D acrylic signage mounted on the front.',
      usp: 'The ultimate statement for flagship stores and high-end retail, providing monumental night-time visibility',
      keywords: ['illuminated arch gate', '3d acp arch signage', 'retail entrance branding'],
      gradient: 'from-red-600 to-red-900',
      image: '/services/out-shop/3d-arch-gate-lit.webp',
    },
  ]

  const inShopBranding = [
    {
      id: 1,
      title: 'Fabric Lit Board',
      question: 'Why is a Fabric Light Box the modern alternative to a traditional backlit board?',
      description: 'Features ultra-thin Aluminum profiles holding a tensioned, printed imported fabric. Backlit by high-efficiency LEDs, the fabric eliminates glare, folds seamlessly, and produces a richer, photo-realistic color depth compared to traditional vinyl.',
      usp: 'Tool-free graphic change, sleek frameless look, and premium visual output',
      keywords: ['fabric tension system', 'seamless light box', 'cloth backlit frame'],
      gradient: 'from-red-500 to-red-700',
      image: '/services/in-shop/fabric-lit-board.webp',
    },
    {
      id: 2,
      title: 'Dropdown',
      question: 'What are overhead Dropdowns used for in retail stores?',
      description: 'Overhead signs suspended from the ceiling. Typically made of lightweight PVC or foam board with high-quality vinyl printing. Used for departmental segmentation, promotions, or directional cues.',
      usp: 'Excellent for maximizing vertical space and guiding customer flow',
      keywords: ['ceiling suspended signage', 'retail hanging sign', 'overhead display'],
      gradient: 'from-red-600 to-red-800',
      image: '/services/in-shop/dropdown.webp',
    },
    {
      id: 3,
      title: 'Standees',
      question: 'What is the best portable solution for product launch advertising?',
      description: 'Freestanding, retractable display units (Roll-up Standees). Constructed with lightweight Aluminum or fiber bodies and printed vinyl/PP material.',
      usp: 'Extreme portability, rapid setup (under 60 seconds), and high-impact temporary promotion',
      keywords: ['roll up standee', 'portable banner display', 'x banner stand'],
      gradient: 'from-red-500 to-red-800',
      image: '/services/in-shop/standees.webp',
    },
    {
      id: 4,
      title: 'LED Clip-ons Board',
      question: 'What are the key features of an LED Clip-on Frame (Snap Frame)?',
      description: 'The most versatile indoor display. Features a slim, openable aluminum profile (Snap Frame) that allows for instant, tool-free graphic changes. The graphic is printed on translite film and backlit by edge-lit LEDs.',
      usp: 'Energy-efficient, ultra-slim design (typically 12mm thick), and perfect for quick campaign updates',
      keywords: ['led snap frame price', 'easy change poster frame', 'slim light box'],
      gradient: 'from-red-600 to-red-700',
      image: '/services/in-shop/led-clip-on-board.webp',
    },
    {
      id: 5,
      title: 'Table Tops',
      question: 'How can Table Tops enhance Point-of-Sale (POS) promotion?',
      description: 'Small, acrylic or metal display holders used on counters, checkout desks, or tables. Perfect for showcasing pricing, QR codes, current offers, or menus.',
      usp: 'Drives impulse purchases and reinforces branding at critical decision points (POS)',
      keywords: ['acrylic table display', 'pos signage', 'counter top sign holder'],
      gradient: 'from-red-500 to-red-600',
      image: '/services/in-shop/table-tops.webp',
    },
    {
      id: 6,
      title: 'One Way Vision',
      question: 'What is One Way Vision film and where is it installed?',
      description: 'A perforated vinyl film applied to glass surfaces (windows, doors, vehicle glass). The printing is visible from the outside, while visibility from the inside remains largely unobstructed.',
      usp: 'Provides exterior advertising space while maintaining privacy/natural light inside',
      keywords: ['perforated vinyl film', 'window branding solution', 'one way window graphics'],
      gradient: 'from-red-600 to-red-900',
      image: '/services/in-shop/one-way-vision.webp',
    },
  ]

  const faqs = [
    {
      question: 'What is the lifespan of LED lighting used in your boards?',
      answer: 'We use industrial-grade LED modules (e.g., Samsung/OSRAM equivalent) with a minimum operating life of 50,000 to 70,000 hours, ensuring your illuminated sign remains bright and maintenance-free for 5 to 7 years.',
    },
    {
      question: 'What is ACP material and why is it preferred for outdoor signage?',
      answer: 'ACP stands for Aluminium Composite Panel. It is a lightweight, durable, and weather-resistant material consisting of two aluminum sheets bonded to a non-aluminum core. It offers excellent rigidity, flatness, and resistance to UV and corrosion, making it ideal for exterior use.',
    },
    {
      question: 'How quickly can the graphics be changed on a Fabric Lit Board?',
      answer: 'Graphics on our Fabric Lit Boards (Tension Fabric System) can typically be changed by a single person in under two minutes without the need for specialized tools or technicians, making it perfect for rapid promotional cycles.',
    },
    {
      question: 'What is the standard thickness for a slim LED Clip-on Board?',
      answer: 'Our standard LED Clip-on Boards are engineered to be ultra-slim, with frame thicknesses typically ranging from 10mm to 18mm. This minimal profile gives a sleek, modern, and high-end aesthetic perfect for corporate interiors and retail displays.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/20 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden py-24">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Shop Name Boards Manufacturing & Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              The Mediaverse is India's #1 shop name boards manufacturer and marketing company serving{' '}
              <strong className="text-white">Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, Hyderabad, Ahmedabad, Jaipur, Lucknow</strong> and 50+ cities. 
              We specialize in shop name boards manufacturing with 14+ premium signage solutions including ACP 3D Boards, LED Signage, 
              Fabric Light Boxes, and comprehensive shop name boards marketing services. Fast delivery, expert installation, competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Out Shop Branding Section */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Outdoor Shop Name Boards Manufacturing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Premium outdoor shop name boards manufacturing for maximum visibility. We specialize in robust, high-impact exterior signage 
              built to withstand weather elements while maximizing brand visibility. Expert shop name boards manufacturing and marketing 
              services in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {outShopBranding.map((service, index) => (
              <motion.div
                key={service.id}
                id={getAnchorId(service.title)}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 group scroll-mt-20"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.description.substring(0, 60)}...`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-red-600 mb-2">Key Benefit:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.usp}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In Shop Branding Section */}
      <section className="section-padding bg-gradient-to-b from-white to-red-50/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Indoor Shop Name Boards Manufacturing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Premium indoor shop name boards manufacturing for enhanced customer experience and impulse sales. Interior branding is crucial for product promotion, 
              wayfinding, and improving the buying experience. Our shop name boards manufacturing solutions focus on portability, ease of graphic change, 
              and high-definition visual appeal. Serving Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {inShopBranding.map((service, index) => (
              <motion.div
                key={service.id}
                id={getAnchorId(service.title)}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-200 group scroll-mt-20"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.description.substring(0, 60)}...`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-red-600 mb-2">Key Benefit:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.usp}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about our signage solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-red-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Get a free quote today and let us create the perfect signage solution for you
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 hover:bg-red-50 hover:text-red-700 hover:border-2 hover:border-red-700 transition-all duration-300 inline-block"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
