import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '#1 Shop Name Board Manufacturer in India | All Services | The Mediaverse',
  description: 'Complete shop name board manufacturing services: ACP boards, LED signage, GSB boards, 3D letters, glow signs, backlit signage, acrylic & metal letters. ✓ Free Quote ✓ Pan-India Service ✓ 2 Year Warranty',
  keywords: 'shop name board manufacturer, shop name board marketing, ACP board manufacturer, LED signage boards, GSB board manufacturer, non-lit boards, 3D letter signage, glow sign board, backlit signage, acrylic signage, metal letters, neon signs',
  openGraph: {
    title: '#1 Shop Name Board Manufacturer in India | All Services',
    description: 'Professional shop name board manufacturing and marketing services across India',
    type: 'website',
  },
}

const services = [
  {
    name: 'ACP Board Manufacturing',
    slug: 'acp-board-manufacturer',
    description: 'Premium ACP 3D boards with LED lights, weather-resistant and long-lasting',
    price: '₹8,000 - ₹25,000',
    icon: '🏢',
    popular: true,
    keywords: ['ACP board manufacturer', 'shop name board manufacturing']
  },
  {
    name: 'LED Signage Boards',
    slug: 'led-signage-boards',
    description: 'Bright, energy-efficient LED boards that attract customers 24/7',
    price: '₹12,000 - ₹40,000',
    icon: '💡',
    popular: true,
    keywords: ['LED signage boards', 'shop name board marketing']
  },
  {
    name: 'GSB Board Manufacturing',
    slug: 'gsb-board-manufacturer',
    description: 'Galvanized Steel Boards for durability and professional look',
    price: '₹6,000 - ₹20,000',
    icon: '⚡',
    popular: true,
    keywords: ['GSB board manufacturer', 'galvanized steel boards']
  },
  {
    name: 'Non-Lit Board Manufacturing',
    slug: 'non-lit-boards',
    description: 'Cost-effective non-illuminated boards for indoor and outdoor use',
    price: '₹3,000 - ₹12,000',
    icon: '📋',
    popular: true,
    keywords: ['non-lit board manufacturer', 'sunboard printing']
  },
  {
    name: '3D Letter Signage',
    slug: '3d-letter-signage',
    description: 'Eye-catching 3D letters in acrylic, metal, or LED backlit options',
    price: '₹10,000 - ₹35,000',
    icon: '🔤',
    popular: false,
    keywords: ['3D letter signage', '3D acrylic letters']
  },
  {
    name: 'Glow Sign Boards',
    slug: 'glow-sign-boards',
    description: 'Traditional neon-style glow signs for classic shop branding',
    price: '₹8,000 - ₹22,000',
    icon: '✨',
    popular: false,
    keywords: ['glow sign board', 'LED neon signs']
  },
  {
    name: 'Backlit Signage',
    slug: 'backlit-signage',
    description: 'Illuminated from behind for stunning day and night visibility',
    price: '₹9,000 - ₹28,000',
    icon: '🌟',
    popular: false,
    keywords: ['backlit signage', 'light box signage']
  },
  {
    name: 'Acrylic Signage',
    slug: 'acrylic-signage',
    description: 'Modern, sleek acrylic boards in various colors and finishes',
    price: '₹5,000 - ₹18,000',
    icon: '💎',
    popular: false,
    keywords: ['acrylic signage', 'acrylic name board']
  },
  {
    name: 'Metal Letter Signage',
    slug: 'metal-letter-signage',
    description: 'Premium stainless steel or brass letters for luxury branding',
    price: '₹15,000 - ₹50,000',
    icon: '🏆',
    popular: false,
    keywords: ['metal letter signage', 'SS letters', 'brass letters']
  },
  {
    name: 'Neon Signs',
    slug: 'neon-signs',
    description: 'Vibrant LED neon signs for trendy, modern businesses',
    price: '₹7,000 - ₹25,000',
    icon: '🎨',
    popular: false,
    keywords: ['neon signs', 'LED neon flex', 'custom neon signs']
  }
]

const popularServices = services.filter(s => s.popular)
const otherServices = services.filter(s => !s.popular)

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden flex items-center pt-24">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <p className="text-sm font-semibold">⭐ Complete Signage Solutions</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Shop Name Board Manufacturing &{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              India's #1 shop name board manufacturer. Expert in ACP boards, LED signage, GSB boards, 3D letters, and all types of signage solutions. ✓ Free Quote ✓ 2 Year Warranty ✓ 5-7 Days Delivery
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-red-700 transition-all duration-300"
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
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Most Popular <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our top-rated shop name board manufacturing and marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {popularServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border-2 border-red-300 hover:border-red-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-sm">{service.price}</span>
                  <span className="text-red-600 group-hover:translate-x-2 transition-transform">→</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {service.keywords.map((keyword, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-2 mb-2">
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of signage manufacturing and marketing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 font-bold text-sm">{service.price}</span>
                  <span className="text-red-600 group-hover:translate-x-2 transition-transform">→</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  {service.keywords.map((keyword, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-2 mb-2">
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why We're India's #1 Choice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: '150+ Happy Clients', desc: 'Trusted by businesses across India' },
              { icon: '⚡', title: '5-7 Days Delivery', desc: 'Fast manufacturing and installation' },
              { icon: '🛡️', title: '2 Year Warranty', desc: 'Complete peace of mind' },
              { icon: '💰', title: 'Best Pricing', desc: 'Transparent, competitive rates' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border-2 border-red-200 text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Shop?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Get a free quote for professional shop name board manufacturing and marketing. Our experts will guide you through design, materials, and installation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-red-700 transition-all duration-300"
            >
              Get Free Quote Now
            </Link>
            <a
              href="tel:+919580088540"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              📞 +91 9580088540
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
