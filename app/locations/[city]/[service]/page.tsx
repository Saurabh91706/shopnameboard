import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { citiesData, CitySlug } from '@/lib/cities-data'
import { servicesData, ServiceSlug } from '@/lib/services-data'

// Generate all 160 static paths (20 cities × 8 services)
export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = []

  const cities = Object.keys(citiesData)
  const services = Object.keys(servicesData)

  cities.forEach(city => {
    services.forEach(service => {
      paths.push({ city, service })
    })
  })

  return paths
}

// Generate SEO-optimized metadata for each city-service page
export async function generateMetadata({
  params
}: {
  params: { city: string; service: string }
}): Promise<Metadata> {
  const cityData = citiesData[params.city as CitySlug]
  const serviceData = servicesData[params.service as ServiceSlug]

  if (!cityData || !serviceData) {
    return { title: 'Page Not Found' }
  }

  const title = `${serviceData.name} in ${cityData.name} | ${serviceData.priceRange} | Shop Name Board`
  const description = `Professional ${serviceData.name.toLowerCase()} manufacturer in ${cityData.name}, ${cityData.state}. ${serviceData.description}. ✓ Free Quote ✓ Fast Installation ✓ 2 Year Warranty. Serving ${cityData.landmarks.slice(0, 3).join(', ')}. Call 9580088540`

  return {
    title,
    description,
    keywords: `${serviceData.name.toLowerCase()} ${cityData.name.toLowerCase()}, ${serviceData.slug} manufacturer ${cityData.name.toLowerCase()}, shop name board ${cityData.name.toLowerCase()}, ${serviceData.slug} price ${cityData.name.toLowerCase()}, ${serviceData.slug} ${cityData.state.toLowerCase()}`,
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
      canonical: `https://shopnameboard.com/locations/${params.city}/${params.service}`,
    },
  }
}

export default function CityServicePage({
  params
}: {
  params: { city: string; service: string }
}) {
  const cityData = citiesData[params.city as CitySlug]
  const serviceData = servicesData[params.service as ServiceSlug]

  if (!cityData || !serviceData) {
    notFound()
  }

  // LocalBusiness + Service Schema for maximum SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Service'],
    '@id': `https://shopnameboard.com/locations/${params.city}/${params.service}#business`,
    name: `${serviceData.name} in ${cityData.name} - Shop Name Board by The Mediaverse`,
    description: `Professional ${serviceData.name.toLowerCase()} manufacturing in ${cityData.name}. ${serviceData.fullDescription}`,
    url: `https://shopnameboard.com/locations/${params.city}/${params.service}`,
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
      name: cityData.name
    },
    priceRange: serviceData.priceRange,
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
    openingHours: 'Mo-Sa 09:00-19:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    serviceType: serviceData.name,
    provider: {
      '@type': 'Organization',
      name: 'Shop Name Board by The Mediaverse',
      telephone: '+91-9580088540'
    }
  }

  // FAQPage Schema for AEO (Answer Engine Optimization)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faq.map(faq => ({
      '@type': 'Question',
      name: `${faq.question} in ${cityData.name}`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  // BreadcrumbList Schema for GEO (Generative Engine Optimization)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shopnameboard.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://shopnameboard.com/locations'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityData.name,
        item: `https://shopnameboard.com/locations/${params.city}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: serviceData.name,
        item: `https://shopnameboard.com/locations/${params.city}/${params.service}`
      }
    ]
  }

  return (
    <>
      {/* Triple Schema Markup for SEO/AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs for SEO */}
      <div className="bg-gray-100 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>→</span>
            <Link href="/locations" className="hover:text-orange-600 transition-colors">Locations</Link>
            <span>→</span>
            <Link href={`/locations/${params.city}`} className="hover:text-orange-600 transition-colors">{cityData.name}</Link>
            <span>→</span>
            <span className="text-orange-600 font-semibold">{serviceData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Optimized for Conversions */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-orange-500 via-orange-600 to-black text-white overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat" />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <p className="text-sm font-bold tracking-wide">
                {serviceData.icon} {cityData.name}, {cityData.state} • {cityData.population}
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Professional {serviceData.name}
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                in {cityData.name}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-4 leading-relaxed max-w-4xl mx-auto">
              {serviceData.fullDescription}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
              <p className="text-sm text-orange-100 mb-2">Pricing in {cityData.name}</p>
              <p className="text-5xl font-black tracking-tight">{serviceData.priceRange}</p>
              <p className="text-sm text-orange-200 mt-2">✓ Free Quote ✓ Fast Installation ✓ 2 Year Warranty</p>
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
              <a
                href="tel:+919580088540"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 justify-center text-base">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>Serving {cityData.landmarks[0]}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>150+ Installations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>5-7 Days Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in City */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              We Serve All Areas of {cityData.name}
            </h2>
            <p className="text-xl text-gray-600">
              Professional {serviceData.name.toLowerCase()} installation across {cityData.name}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 border-2 border-orange-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cityData.landmarks.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-orange-600 text-2xl font-bold">✓</span>
                  <span className="font-semibold text-sm">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4 text-lg">
                <strong>Don't see your area?</strong> We serve the entire {cityData.name} region!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 hover:scale-105 transition-all shadow-lg"
              >
                Check Service Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Our {serviceData.name} in {cityData.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-orange-600">✓</div>
                <p className="text-gray-800 font-semibold leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Key Benefits in {cityData.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">⭐</div>
                <p className="text-xl font-bold text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for AEO */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about {serviceData.name.toLowerCase()} in {cityData.name}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {serviceData.faq.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-orange-400 transition-all group"
              >
                <summary className="px-8 py-6 font-bold text-lg text-gray-900 cursor-pointer hover:text-orange-600 transition-colors flex items-center justify-between">
                  <span>{faq.question} in {cityData.name}</span>
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Other Services in {cityData.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(servicesData)
              .filter(([slug]) => slug !== params.service)
              .slice(0, 4)
              .map(([slug, service]) => (
                <Link
                  key={slug}
                  href={`/locations/${params.city}/${slug}`}
                  className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold text-lg">{service.priceRange}</span>
                    <span className="text-orange-600 text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/locations/${params.city}`}
              className="inline-block text-orange-600 font-bold text-lg hover:underline"
            >
              View All Services in {cityData.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-orange-700 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Get Your {serviceData.name}?
          </h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto text-orange-100 leading-relaxed">
            Get a free quote for {serviceData.name.toLowerCase()} in {cityData.name}. Our expert team will visit your location for accurate measurements and professional consultation.
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
              <span className="font-bold">Trusted in {cityData.name}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
