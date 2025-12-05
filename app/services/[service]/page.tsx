import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { servicesData, ServiceSlug } from '@/lib/services-data'
import { citiesData } from '@/lib/cities-data'

// Generate static paths for all 8 services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }))
}

// Generate SEO-optimized metadata for each service page
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceData = servicesData[params.service as ServiceSlug]

  if (!serviceData) {
    return {
      title: 'Service Not Found',
    }
  }

  const title = `${serviceData.name} India | ${serviceData.priceRange} | Shop Name Board by The Mediaverse`
  const description = `Professional ${serviceData.name.toLowerCase()} manufacturing across India by Shop Name Board by The Mediaverse. ${serviceData.description}. ✓ Free Quote ✓ 2 Year Warranty ✓ Expert Installation in 20 cities. Call 9580088540`

  return {
    title,
    description,
    keywords: `${serviceData.name.toLowerCase()}, ${serviceData.slug}, shop name board, signage manufacturer India, ${serviceData.slug} price, LED signage, shop branding, The Mediaverse`,
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
      canonical: `https://shopnameboard.com/services/${params.service}`,
    },
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = servicesData[params.service as ServiceSlug]

  if (!serviceData) {
    notFound()
  }

  // Service Schema for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://shopnameboard.com/services/${params.service}#service`,
    name: serviceData.name,
    description: serviceData.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'Shop Name Board by The Mediaverse',
      telephone: '+91-9580088540',
      email: 'contact@themediaverse.in',
      url: 'https://shopnameboard.com'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceData.name,
      itemListElement: [{
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceData.name,
          description: serviceData.description
        },
        priceRange: serviceData.priceRange,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      }]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  }

  // FAQPage Schema for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faq.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-orange-500 via-orange-600 to-black text-white overflow-hidden flex items-center pt-24">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <p className="text-sm font-bold tracking-wide">{serviceData.icon} Professional Service • Pan-India</p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              {serviceData.name}
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                Across India
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-6 leading-relaxed max-w-3xl mx-auto">
              {serviceData.fullDescription}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
              <p className="text-sm text-orange-100 mb-2">Starting Price</p>
              <p className="text-5xl font-black">{serviceData.priceRange}</p>
              <p className="text-sm text-orange-200 mt-2">✓ Free Consultation ✓ 2 Year Warranty</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919580088540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: 9580088540
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              What makes our {serviceData.name.toLowerCase()} stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-orange-600">✓</div>
                <p className="text-gray-800 font-semibold leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose {serviceData.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">⭐</div>
                <p className="text-xl font-bold text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              Businesses that benefit most from {serviceData.name.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-4xl">{serviceData.icon}</span>
                <p className="text-lg font-semibold text-gray-900">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to installation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {serviceData.process.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 mb-6 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-black">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
                  <p className="text-lg font-semibold text-gray-900">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for AEO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about {serviceData.name.toLowerCase()}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {serviceData.faq.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-orange-400 transition-all group"
              >
                <summary className="px-8 py-6 font-bold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-orange-600 text-3xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-8 pb-6 text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {serviceData.name} Available in 20 Cities
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Object.entries(citiesData).map(([slug, city]) => (
              <Link
                key={slug}
                href={`/locations/${slug}/${params.service}`}
                className="group bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all text-center"
              >
                <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {city.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">{city.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-orange-700 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto text-orange-100 leading-relaxed">
            Get a free quote for {serviceData.name.toLowerCase()}. Our experts will guide you through material selection, design, and installation.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Get Free Quote Now
            </Link>
            <a
              href="tel:+919580088540"
              className="bg-white/10 backdrop-blur-sm border-4 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              📞 9580088540
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-10 justify-center text-lg">
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span className="font-bold">Free Consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span className="font-bold">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span className="font-bold">Expert Installation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">✓</span>
              <span className="font-bold">Pan-India Service</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
