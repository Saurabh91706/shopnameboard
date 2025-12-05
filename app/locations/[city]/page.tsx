import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { citiesData, CitySlug } from '@/lib/cities-data'
import { servicesData } from '@/lib/services-data'

// Generate static paths for all 20 cities
export async function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({
    city: city,
  }))
}

// Generate SEO-optimized metadata for each city
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = citiesData[params.city as CitySlug]

  if (!cityData) {
    return {
      title: 'City Not Found',
    }
  }

  const title = `#1 Shop Name Board Manufacturer in ${cityData.name} | ACP, LED, GSB Boards`
  const description = `Leading shop name board manufacturer in ${cityData.name}, ${cityData.state}. Expert in ACP 2D/3D boards, LED signage, GSB boards, arch gates, fabric boxes. ✓ Free Quote ✓ Fast Installation ✓ 2 Year Warranty. Call 9580088540`

  return {
    title,
    description,
    keywords: `shop name board manufacturer ${cityData.name.toLowerCase()}, shop name board marketing ${cityData.name.toLowerCase()}, ACP board manufacturer ${cityData.name.toLowerCase()}, LED signage ${cityData.name.toLowerCase()}, GSB board manufacturer ${cityData.name.toLowerCase()}, ${cityData.name.toLowerCase()} signage, shop branding ${cityData.name.toLowerCase()}`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Shop Name Board by The Mediaverse',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://shopnameboard.com/locations/${params.city}`,
    },
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityData = citiesData[params.city as CitySlug]

  if (!cityData) {
    notFound()
  }

  const whyChooseUs = [
    {
      title: 'Local Expertise',
      description: `Over 150+ successful installations across ${cityData.name}`,
      icon: '🎯'
    },
    {
      title: 'Fast Delivery',
      description: '5-7 days manufacturing + installation in major areas',
      icon: '⚡'
    },
    {
      title: '2 Year Warranty',
      description: 'Comprehensive warranty on materials and LED modules',
      icon: '🛡️'
    },
    {
      title: 'Free Site Visit',
      description: `Professional team visits your location in ${cityData.name}`,
      icon: '🚗'
    }
  ]

  const faqData = [
    {
      question: `How much does a shop name board cost in ${cityData.name}?`,
      answer: `Prices in ${cityData.name} range from ₹2,000 for basic non-lit boards to ₹50,000+ for premium arch gates. Factors include size, materials, lighting, and installation complexity. We offer free quotes with transparent pricing.`
    },
    {
      question: `Do you provide installation in all areas of ${cityData.name}?`,
      answer: `Yes! We cover all major areas of ${cityData.name} including ${cityData.landmarks.join(', ')} and surrounding neighborhoods. Our installation team is experienced with local regulations and building requirements.`
    },
    {
      question: `What is the delivery time for shop boards in ${cityData.name}?`,
      answer: `Standard boards: 5-7 working days. Custom designs: 10-14 days. We manufacture locally near ${cityData.name} for faster delivery. Rush orders available for urgent requirements.`
    },
    {
      question: `Which type of shop name board is best for ${cityData.name} weather?`,
      answer: `For ${cityData.name}'s climate, we recommend ACP boards with weather-resistant coating or GSB boards. LED signage with IP65 waterproofing works excellently year-round. We use materials tested for local weather conditions.`
    },
    {
      question: `Do I need permission for installing shop boards in ${cityData.name}?`,
      answer: `Yes, most areas in ${cityData.name} require municipal approval. We assist with documentation and liaise with local authorities. Our team knows the specific requirements for ${cityData.state} regulations.`
    },
    {
      question: `Can you design a custom board for my ${cityData.name} shop?`,
      answer: `Absolutely! Our design team creates custom boards matching your brand. We've designed for 150+ businesses across ${cityData.name}. Share your logo and vision - we'll create 3D mockups before manufacturing.`
    }
  ]

  // LocalBusiness Schema for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://shopnameboard.com/locations/${params.city}#business`,
    name: `Shop Name Board by The Mediaverse - ${cityData.name}`,
    description: `Leading shop name board manufacturer in ${cityData.name}. ACP boards, LED signage, GSB boards, arch gates, fabric boxes manufacturing and installation services.`,
    url: `https://shopnameboard.com/locations/${params.city}`,
    telephone: '+91-9580088540',
    email: 'contact@themediaverse.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.name,
      addressRegion: cityData.state,
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'City',
      name: cityData.name,
      '@id': `https://en.wikipedia.org/wiki/${cityData.name.replace(' ', '_')}`
    },
    priceRange: '₹₹',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
    openingHours: 'Mo-Sa 09:00-19:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Shop Name Board Services',
      itemListElement: Object.values(servicesData).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${service.name} in ${cityData.name}`,
          description: service.description
        }
      }))
    }
  }

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-orange-500 via-orange-600 to-black text-white overflow-hidden flex items-center pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/city-pattern.svg)', backgroundSize: 'cover' }} />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-sm font-semibold">📍 {cityData.state} • {cityData.population} Population</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              #1 Shop Name Board Manufacturer in{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                {cityData.name}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              Expert shop name board manufacturing by <strong>Shop Name Board by The Mediaverse</strong>. Specializing in ACP 2D/3D boards, LED signage, GSB boards, arch gates, and fabric boxes. ✓ Free Quote ✓ 2 Year Warranty ✓ Fast Installation
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919580088540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Now
              </a>
              <a
                href="tel:+919580088540"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                📞 9580088540
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>150+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>5-7 Days Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Services in <span className="text-orange-600">{cityData.name}</span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete shop name board manufacturing and installation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(servicesData).map(([slug, service], index) => (
              <Link
                key={index}
                href={`/locations/${params.city}/${slug}`}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold">{service.priceRange}</span>
                  <span className="text-orange-600 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Us in {cityData.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              We Serve All Areas of {cityData.name}
            </h2>
            <p className="text-xl text-gray-600">
              Professional shop name board installation across {cityData.name}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 border-2 border-orange-200">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cityData.landmarks.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-600 text-xl">✓</span>
                  <span className="font-semibold">{area}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-600 text-xl">✓</span>
                <span className="font-semibold">And all surrounding areas</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Don't see your area? We likely serve it too!</p>
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
              >
                Check Service Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about shop boards in {cityData.name}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-orange-300 transition-all group"
              >
                <summary className="px-6 py-5 font-bold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors flex items-center justify-between">
                  {faq.question}
                  <span className="text-orange-600 text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-orange-700 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Shop in {cityData.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Get a free quote for premium shop name boards. Our team will visit your location in {cityData.name} for accurate measurements and consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300"
            >
              Get Free Quote Now
            </Link>
            <a
              href="tel:+919580088540"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              📞 9580088540
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
