'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What types of shop name boards do you manufacture?',
    answer: 'We manufacture all types of shop name boards including ACP 3D boards, LED signage, GSB (Glow Sign Boards), 3D letter boards, non-lit boards, backlit signage, acrylic signage, metal letters, neon signs, and custom designs.',
  },
  {
    question: 'Which cities do you serve across India?',
    answer: 'We serve 20+ major cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Jaipur, Surat, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Patna, Vadodara, and Pimpri-Chinchwad.',
  },
  {
    question: 'How much does a shop name board cost?',
    answer: 'Pricing varies: Non-lit boards from ₹500/sq ft, ACP boards from ₹1,500/sq ft, LED signage from ₹3,000/sq ft, metal letters from ₹4,000/sq ft. Contact us for a free quote.',
  },
  {
    question: 'What is the delivery time?',
    answer: 'Delivery varies by type: Non-lit boards 5-10 days, ACP/GSB 7-15 days, LED signage 10-20 days. Expedited service available for urgent requirements.',
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Yes, we provide complete end-to-end service including design, manufacturing, delivery, and professional installation with all necessary mounting hardware.',
  },
  {
    question: 'What is the warranty on shop name boards?',
    answer: 'Warranties range from 2-10 years depending on product type. ACP boards: 5 years, LED signage: 3 years, Metal letters: 10 years. All products include warranty against manufacturing defects.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about shop name boards
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-red-600 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-red-600 flex-shrink-0"
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
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
