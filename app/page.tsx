import { Metadata } from 'next'
import Link from 'next/link'
import { citiesData } from '@/lib/cities-data'
import { servicesData } from '@/lib/services-data'

export const metadata: Metadata = {
  title: '#1 Shop Name Board Manufacturer in India | 2D ACP, 3D ACP, GSB, Arch Gates | Shop Name Board by The Mediaverse',
  description: 'India\'s #1 Shop Name Board Manufacturer - Shop Name Board by The Mediaverse. Expert in 2D ACP Boards, 3D ACP Boards, GSB Boards, Non-Lit Boards, Arch Gates, Fabric Boxes, Lit/Non-Lit Flange Boards. Serving 20 cities. ✓ Free Quote ✓ 2 Year Warranty ✓ Fast 5-7 Days Installation. Call 9580088540',
  keywords: 'shop name board manufacturer, shop name board, 2d acp board, 3d acp board, gsb board, arch gate, fabric box, lit flange board, shop signage manufacturer India, best shop board company',
}

export default function Home() {
  // FAQ Data for AEO
  const faqData = [
    {
      question: 'What is the cost of a shop name board in India?',
      answer: 'Shop name board costs in India range from ₹2,000 for basic non-lit boards to ₹50,000+ for premium arch gates. Factors affecting price include size, material (ACP, GSB, acrylic), lighting (LED/non-lit), complexity of design, and installation requirements. We offer transparent pricing with free quotes. Call 9580088540 for exact pricing.'
    },
    {
      question: 'Which type of shop name board is best for outdoor use?',
      answer: '3D ACP boards and GSB boards are best for outdoor use. 3D ACP boards offer weather resistance with LED lighting for 24/7 visibility (₹8K-₹25K). GSB (Galvanized Steel Boards) provide industrial-grade durability with 10-15 year lifespan (₹6K-₹18K). Both withstand rain, heat, and Indian weather conditions perfectly.'
    },
    {
      question: 'How long does it take to manufacture and install a shop board?',
      answer: 'Standard shop name boards: 5-7 working days (manufacturing 3-5 days + installation 1-2 days). Custom designs: 10-14 days. Arch gates and complex structures: 7-10 days manufacturing + 1 day installation. Rush orders available. We serve 20 cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and more.'
    },
    {
      question: 'Do you provide warranty on shop name boards?',
      answer: 'Yes! We provide comprehensive 2-year warranty covering: manufacturing defects, LED module failures, material degradation, and installation issues. GSB boards come with 3-year warranty. Warranty includes free repairs and replacements. Terms and conditions apply.'
    },
    {
      question: 'What is the difference between 2D and 3D ACP boards?',
      answer: '2D ACP boards are flat panels (₹3K-₹10K) perfect for budget-conscious businesses, offering clean modern look. 3D ACP boards have raised letters with depth (₹8K-₹25K), creating premium dimensional appearance with optional LED backlighting. 3D boards attract 3x more attention and are ideal for high-end retail, corporate offices, and premium restaurants.'
    },
    {
      question: 'Do I need municipal permission for shop board installation?',
      answer: 'Yes, most Indian cities require municipal approval for external shop boards, especially projecting/flange boards. Requirements vary by city - Mumbai BMC, Delhi MCD, Bangalore BBMP each have different rules. We assist with documentation, know local regulations for all 20 cities we serve, and liaise with authorities for hassle-free approval.'
    },
    {
      question: 'Can shop name boards be customized with my brand colors and logo?',
      answer: 'Absolutely! Full customization available: any color combination, your exact logo and branding, custom fonts and typography, specific sizes and shapes, LED color options (white/RGB), and material finish (glossy/matte). Our design team creates 3D mockups before manufacturing for your approval.'
    },
    {
      question: 'Which cities do you serve for shop name board installation?',
      answer: 'We serve 20 major cities across India: Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Surat, Lucknow, Indore, Chandigarh, Coimbatore, Kochi, Nagpur, Bhubaneswar, Visakhapatnam, Guwahati, and Mysore. Pan-India service with local installation teams who know area-specific regulations and requirements.'
    },
    {
      question: 'What materials are used in shop name board manufacturing?',
      answer: 'We use premium materials: ACP (Aluminum Composite Panel) 3mm-4mm thickness, Galvanized Steel 18-24 gauge rust-proof, LED modules SMD 2835 with 50,000+ hour lifespan, Acrylic sheets 3-10mm, High-quality flex with UV protection, Powder coating in 500+ colors, and IP65 waterproof components. All materials tested for Indian climate conditions.'
    },
    {
      question: 'How energy-efficient are LED shop name boards?',
      answer: 'Extremely efficient! LED boards consume only 10-15W per foot, 90% less than traditional neon. A standard 4×3 ft LED board costs just ₹50-100 per month in electricity. LEDs have 50,000+ hour lifespan (5-7 years of continuous operation). Auto on/off timers available. Lower electricity bills while maintaining brilliant 24/7 visibility.'
    }
  ]

  // Organization Schema for GEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://shopnameboard.com#organization',
    name: 'Shop Name Board by The Mediaverse',
    url: 'https://shopnameboard.com',
    logo: 'https://shopnameboard.com/logo.png',
    description: 'India\'s #1 shop name board manufacturer specializing in 2D ACP, 3D ACP, GSB boards, arch gates, fabric boxes, and flange boards.',
    telephone: '+91-9580088540',
    email: 'contact@themediaverse.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    areaServed: Object.values(citiesData).map(city => ({
      '@type': 'City',
      name: city.name
    })),
    serviceType: Object.values(servicesData).map(service => service.name),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: '₹₹'
  }

  // FAQPage Schema for AEO
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section - Animated */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-black text-white overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat animate-pulse" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm font-bold tracking-wide">⭐ India's #1 Shop Name Board Manufacturer • 150+ Happy Clients</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
              Premium Shop Name Boards
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-orange-200 bg-clip-text text-transparent animate-gradient">
                Across India
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-3xl text-orange-100 mb-6 leading-relaxed max-w-5xl mx-auto animate-fade-in">
              Expert manufacturer of <strong>2D ACP Boards • 3D ACP Boards • GSB Boards • Arch Gates • Fabric Boxes • Lit/Non-Lit Flange Boards</strong>
            </p>

            <p className="text-lg md:text-xl text-orange-200 mb-10 max-w-4xl mx-auto animate-fade-in animation-delay-200">
              Serving <strong>20 major cities</strong> with world-class signage solutions. From budget-friendly non-lit boards (₹2K) to premium arch gates (₹50K+), we deliver excellence with <strong>2-year warranty</strong> and lightning-fast <strong>5-7 days installation</strong>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up animation-delay-300">
                <div className="text-4xl font-black mb-2">150+</div>
                <div className="text-sm text-orange-200">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up animation-delay-400">
                <div className="text-4xl font-black mb-2">20</div>
                <div className="text-sm text-orange-200">Cities Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up animation-delay-500">
                <div className="text-4xl font-black mb-2">5-7</div>
                <div className="text-sm text-orange-200">Days Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up animation-delay-600">
                <div className="text-4xl font-black mb-2">2 Year</div>
                <div className="text-sm text-orange-200">Warranty</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up animation-delay-700">
              <Link
                href="/contact"
                className="group bg-white text-orange-600 px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-yellow-300 hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                Get Free Quote
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
              <a
                href="https://wa.me/919580088540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 hover:scale-110"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: 9580088540
              </a>
              <a
                href="tel:+919580088540"
                className="bg-white/10 backdrop-blur-sm border-4 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center text-lg animate-fade-in animation-delay-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>Free Design Mockup</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span>Expert Installation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section - Comprehensive */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              8 Premium Shop Name Board Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From budget-friendly options to premium signage, we offer complete shop name board manufacturing and installation services across India. Every board comes with 2-year warranty and expert installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(servicesData).map(([slug, service], index) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-black text-xl">{service.priceRange}</span>
                  <span className="text-orange-600 text-3xl group-hover:translate-x-3 transition-transform duration-300">→</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>✓ 2 Year Warranty</div>
                    <div>✓ 5-7 Days Delivery</div>
                    <div>✓ Expert Installation</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-700 hover:scale-105 transition-all shadow-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              India's Most Trusted Shop Name Board Manufacturer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With over 10 years of experience and 150+ successful installations, Shop Name Board by The Mediaverse has established itself as the #1 choice for businesses across 20 major Indian cities. Here's why businesses trust us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Premium Quality Materials',
                description: 'We use only the highest grade materials: premium ACP panels, galvanized steel, LED modules with 50,000+ hour lifespan, and weather-resistant coatings. Every component is tested for Indian climate conditions including monsoons and extreme heat.'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast Delivery',
                description: '5-7 days standard delivery! Our efficient manufacturing process and streamlined logistics ensure you get your shop name board faster than anyone else. Rush orders available for urgent requirements with 3-day turnaround.'
              },
              {
                icon: '🛡️',
                title: 'Comprehensive 2-Year Warranty',
                description: 'Industry-leading 2-year warranty covering manufacturing defects, LED failures, weather damage, and installation issues. GSB boards come with 3-year warranty. Free repairs and replacements included.'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'No hidden costs! Get upfront pricing with detailed breakdowns. We offer the best value in the industry with competitive rates from ₹2,000 to ₹50,000+ depending on your requirements. Free quotes provided within 24 hours.'
              },
              {
                icon: '🎨',
                title: 'Free Design Service',
                description: 'Our expert design team creates stunning 3D mockups of your shop name board before manufacturing. See exactly how it will look with your branding, colors, and logo. Unlimited revisions until you\'re 100% satisfied.'
              },
              {
                icon: '👷',
                title: 'Expert Installation',
                description: 'Professional installation by certified technicians who know local building codes and municipal requirements. We handle all permits and approvals in Mumbai, Delhi, Bangalore, and 17 other cities.'
              },
              {
                icon: '🌍',
                title: '20 Cities Coverage',
                description: 'Pan-India presence with local teams in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Surat, Lucknow, Indore, Chandigarh, Coimbatore, Kochi, Nagpur, Bhubaneswar, Visakhapatnam, Guwahati, Mysore.'
              },
              {
                icon: '💚',
                title: 'Eco-Friendly LED Technology',
                description: 'Save 90% on electricity with our energy-efficient LED modules. Only 10-15W consumption per foot means your board costs just ₹50-100/month to run 24/7. Good for your wallet and the environment.'
              },
              {
                icon: '🔧',
                title: 'Lifetime Support',
                description: 'Even after warranty expires, we provide ongoing support and maintenance services. Need repairs, updates, or modifications? We\'re just a phone call away at 9580088540.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold mb-4">
              Service Locations
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Serving 20 Major Cities Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From metros to tier-2 cities, we provide professional shop name board manufacturing and installation services with local teams who understand your city's regulations, weather conditions, and business landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Object.entries(citiesData).map(([slug, city]) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{city.state}</p>
                  <p className="text-xs text-gray-500">{city.population}</p>
                  <div className="mt-4 text-orange-600 text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-block bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-700 hover:scale-105 transition-all shadow-lg"
            >
              View All Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold mb-4">
              Pricing Guide
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Transparent Pricing for Every Budget
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect shop name board solution that fits your budget and requirements. All prices include manufacturing, materials, and professional installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Budget',
                price: '₹2K-8K',
                service: 'Non-Lit Board',
                features: [
                  'Flex on Iron Frame',
                  'High-resolution printing',
                  'UV protected lamination',
                  'Indoor/outdoor use',
                  '2-3 days delivery',
                  '1 year warranty'
                ],
                ideal: 'Indoor shops, kiosks, temporary setups'
              },
              {
                name: 'Standard',
                price: '₹3K-10K',
                service: '2D ACP Board',
                features: [
                  '3-4mm ACP panel',
                  'Flat professional design',
                  'Weather resistant',
                  'Any color/finish',
                  '5-7 days delivery',
                  '2 year warranty'
                ],
                ideal: 'Small to medium retail shops',
                popular: true
              },
              {
                name: 'Premium',
                price: '₹8K-25K',
                service: '3D ACP Board',
                features: [
                  '3D raised letters',
                  'LED backlighting option',
                  'Premium depth effect',
                  '24/7 visibility',
                  '7-10 days delivery',
                  '2 year warranty'
                ],
                ideal: 'Premium retail, corporate offices'
              },
              {
                name: 'Enterprise',
                price: '₹15K-50K',
                service: 'Arch Gate',
                features: [
                  'Up to 20ft wide',
                  'Custom structure',
                  'LED illumination',
                  'Grand entrance design',
                  '10-14 days delivery',
                  '3 year warranty'
                ],
                ideal: 'Showrooms, events, malls'
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 transform scale-105 shadow-2xl'
                    : 'bg-white/5 backdrop-blur-sm border-2 border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <div className="text-5xl font-black mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90">{plan.service}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs opacity-75 mb-6">
                  <strong>Ideal for:</strong> {plan.ideal}
                </div>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-4 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'bg-white text-orange-600 hover:bg-yellow-300'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Extensive */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold mb-4">
              FAQs
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about shop name board manufacturing, installation, pricing, and maintenance. Can't find your answer? Call us at 9580088540
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-orange-400 transition-all group"
              >
                <summary className="px-10 py-8 font-bold text-xl text-gray-900 cursor-pointer hover:text-orange-600 transition-colors flex items-center justify-between">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-orange-600 text-4xl group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="px-10 pb-8 text-gray-700 text-lg leading-relaxed border-t-2 border-gray-100 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-orange-700 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat" />
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to Get Your Shop Name Board?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-orange-100 leading-relaxed">
            Join 150+ satisfied businesses across India. Get your free quote today and transform your shop's visibility with professional name boards manufactured by <strong>Shop Name Board by The Mediaverse</strong>.
          </p>

          <div className="flex flex-wrap gap-8 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-16 py-8 rounded-full font-black text-3xl shadow-2xl hover:bg-yellow-300 hover:scale-110 transition-all duration-300"
            >
              Get Free Quote Now
            </Link>
            <a
              href="tel:+919580088540"
              className="bg-white/10 backdrop-blur-sm border-4 border-white text-white px-16 py-8 rounded-full font-black text-3xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              📞 9580088540
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '✓', text: 'Free Design Mockup' },
              { icon: '✓', text: '2 Year Warranty' },
              { icon: '✓', text: '5-7 Days Delivery' },
              { icon: '✓', text: 'Expert Installation' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <span className="text-5xl">{item.icon}</span>
                <span className="font-bold text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
