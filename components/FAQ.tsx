'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is shop name boards manufacturing and where can I get the best shop name boards in Bangalore, Mumbai, Delhi?',
      answer: 'Shop name boards manufacturing is the process of creating custom signage solutions for retail stores, shops, and businesses. The Mediaverse is India\'s #1 shop name boards manufacturer serving Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities. We specialize in ACP 3D Boards, LED Signage, Fabric Light Boxes, and 14+ premium signage solutions with fast delivery and expert installation.',
    },
    {
      question: 'How much does shop name board manufacturing cost in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata?',
      answer: 'Shop name board manufacturing costs vary based on size, material (ACP, LED, Fabric), design complexity, and installation requirements. At The Mediaverse, we offer competitive pricing for shop name boards in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and all major Indian cities. Basic ACP boards start from ₹8,000, while premium 3D LED boards range from ₹15,000-50,000+. Contact us for a free quote tailored to your city and requirements.',
    },
    {
      question: 'What are the best materials for shop name boards manufacturing?',
      answer: 'The best materials for shop name boards manufacturing include: 1) Aluminium Composite Panel (ACP) - weather-resistant, durable, ideal for outdoor signage; 2) 3D Acrylic Letters with LED modules - premium look with face-lit illumination; 3) Fabric Light Boxes - ultra-thin, tool-free graphic changes; 4) LED modules (Samsung/OSRAM grade) - energy-efficient, long-lasting; 5) Stainless Steel frames - rust-proof, structural support. The Mediaverse uses only premium-grade materials for all shop name boards manufacturing projects.',
    },
    {
      question: 'How long does shop name board manufacturing and installation take?',
      answer: 'Shop name board manufacturing typically takes 5-7 business days for standard designs, while custom 3D LED boards may take 10-14 days. Installation is completed within 1-2 days after manufacturing. The Mediaverse offers fast-track manufacturing (3-5 days) for urgent projects in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and other cities. We provide end-to-end service from design to installation.',
    },
    {
      question: 'What is the difference between shop name boards marketing and manufacturing?',
      answer: 'Shop name boards manufacturing refers to the physical creation of signage using materials like ACP, LED, acrylic, and fabric. Shop name boards marketing involves strategic placement, design optimization for maximum visibility, brand positioning, and ensuring your signage attracts customers effectively. The Mediaverse provides both services - we manufacture premium shop name boards and offer marketing expertise to maximize your brand visibility in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and nationwide.',
    },
    {
      question: 'Which cities does The Mediaverse serve for shop name boards manufacturing?',
      answer: 'The Mediaverse serves 50+ cities across India for shop name boards manufacturing and marketing, including: Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, Hyderabad, Ahmedabad, Jaipur, Lucknow, Indore, Patna, Bhopal, Visakhapatnam, Surat, Kanpur, Nagpur, Coimbatore, Vadodara, Ghaziabad, and many more. We offer nationwide delivery and installation services with local expertise in each city.',
    },
    {
      question: 'What types of shop name boards do you manufacture?',
      answer: 'The Mediaverse manufactures 14+ types of shop name boards: 1) ACP 3D Boards (Lit) - Premium 3D acrylic letters with LED; 2) ACP 2D Boards - Flat, cost-effective signage; 3) Fabric Light Boxes - Modern, tool-free graphic changes; 4) LED Clip-ons - Ultra-slim, energy-efficient; 5) Flange Boards (2D & 3D) - Double-sided projecting signs; 6) Arch Gates (2D & 3D) - Grand entrance signage; 7) Glow Sign Boards - Ultra-bright backlit signage; 8) Non-Lit Boards - Budget-friendly static displays. All available for manufacturing in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and nationwide.',
    },
    {
      question: 'Do you provide shop name boards marketing services along with manufacturing?',
      answer: 'Yes! The Mediaverse provides comprehensive shop name boards marketing services including: strategic placement analysis, design optimization for maximum visibility, brand positioning, competitor analysis, and marketing consultation. We combine manufacturing expertise with marketing strategy to ensure your shop name boards in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, or any city effectively attract customers and enhance brand recall.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-red-50/20 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
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
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Frequently Asked Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
          >
            Everything you need to know about shop name boards manufacturing and marketing
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-red-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Structured Data for FAQ */}
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
    </section>
  )
}

