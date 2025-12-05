import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shop Name Board Manufacturer in 20+ Indian Cities | The Mediaverse',
  description: 'Leading shop name board manufacturer serving Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and 15+ major Indian cities. ACP boards, LED signage, GSB boards. ✓ Free Quote ✓ Pan-India Service',
  keywords: 'shop name board manufacturer India, shop name board marketing, ACP board manufacturer, LED signage India, GSB board manufacturer, pan India service',
  openGraph: {
    title: 'Shop Name Board Manufacturer in 20+ Indian Cities',
    description: 'Professional shop name board manufacturing and marketing in 20+ cities across India',
    type: 'website',
  },
}

const cities = [
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    slug: 'mumbai',
    population: '20M+',
    icon: '🏙️',
    description: 'Financial capital with 150+ installations'
  },
  {
    name: 'Delhi',
    state: 'Delhi NCR',
    slug: 'delhi',
    population: '18M+',
    icon: '🏛️',
    description: 'Capital territory, major business hub'
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    slug: 'bangalore',
    population: '12M+',
    icon: '💻',
    description: 'IT capital, startup hub'
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    slug: 'hyderabad',
    population: '10M+',
    icon: '💎',
    description: 'City of Pearls, HITEC City'
  },
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    slug: 'chennai',
    population: '10M+',
    icon: '🏖️',
    description: 'Gateway to South India'
  },
  {
    name: 'Kolkata',
    state: 'West Bengal',
    slug: 'kolkata',
    population: '14M+',
    icon: '🎭',
    description: 'Cultural capital of India'
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    slug: 'pune',
    population: '7M+',
    icon: '🎓',
    description: 'Oxford of the East'
  },
  {
    name: 'Ahmedabad',
    state: 'Gujarat',
    slug: 'ahmedabad',
    population: '8M+',
    icon: '🏭',
    description: 'Manchester of India'
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    slug: 'jaipur',
    population: '4M+',
    icon: '🕌',
    description: 'The Pink City'
  },
  {
    name: 'Surat',
    state: 'Gujarat',
    slug: 'surat',
    population: '6M+',
    icon: '💍',
    description: 'The Diamond City'
  },
  {
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    slug: 'lucknow',
    population: '3.5M+',
    icon: '👑',
    description: 'City of Nawabs'
  },
  {
    name: 'Kanpur',
    state: 'Uttar Pradesh',
    slug: 'kanpur',
    population: '3M+',
    icon: '🏢',
    description: 'The Leather City'
  },
  {
    name: 'Nagpur',
    state: 'Maharashtra',
    slug: 'nagpur',
    population: '3M+',
    icon: '🍊',
    description: 'The Orange City'
  },
  {
    name: 'Indore',
    state: 'Madhya Pradesh',
    slug: 'indore',
    population: '3M+',
    icon: '🧹',
    description: 'Cleanest City of India'
  },
  {
    name: 'Thane',
    state: 'Maharashtra',
    slug: 'thane',
    population: '2M+',
    icon: '🌊',
    description: 'City of Lakes'
  },
  {
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    slug: 'bhopal',
    population: '2M+',
    icon: '🏞️',
    description: 'City of Lakes'
  },
  {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    slug: 'visakhapatnam',
    population: '2M+',
    icon: '⚓',
    description: 'City of Destiny'
  },
  {
    name: 'Patna',
    state: 'Bihar',
    slug: 'patna',
    population: '2M+',
    icon: '🏛️',
    description: 'The Ancient City'
  },
  {
    name: 'Vadodara',
    state: 'Gujarat',
    slug: 'vadodara',
    population: '2M+',
    icon: '🎨',
    description: 'Cultural Capital of Gujarat'
  },
  {
    name: 'Ghaziabad',
    state: 'Uttar Pradesh',
    slug: 'ghaziabad',
    population: '2M+',
    icon: '🚪',
    description: 'Gateway of UP'
  }
]

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden flex items-center pt-24">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <p className="text-sm font-semibold">📍 Pan-India Service</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Shop Name Board Manufacturer in{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                20+ Indian Cities
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Professional shop name board manufacturing and marketing services across India. Expert in ACP boards, LED signage, GSB boards, and all types of signage solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-red-700 transition-all duration-300"
              >
                Check Your City
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
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>150+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>20+ Cities Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>2 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              We Serve These <span className="gradient-text">Cities</span>
            </h2>
            <p className="text-xl text-gray-600">
              Click on your city to see local services, pricing, and portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={`/locations/${city.slug}`}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{city.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{city.state}</p>
                <p className="text-gray-600 mb-3 text-sm">{city.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{city.population}</span>
                  <span className="text-red-600 group-hover:translate-x-2 transition-transform text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pan-India */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why We're India's #1 Choice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-red-500 hover:shadow-xl transition-all">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">We understand local regulations, weather conditions, and customer preferences in each city</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-red-500 hover:shadow-xl transition-all">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Local manufacturing units ensure quick production and installation in 5-7 days</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-red-500 hover:shadow-xl transition-all">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Pricing</h3>
              <p className="text-gray-600">Competitive local pricing with transparent quotes and no hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Don't See Your City?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            We're expanding rapidly! Contact us to check if we serve your area. Even if we don't have a local office yet, we can arrange installation through our partner network.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:text-red-700 transition-all duration-300"
            >
              Contact Us
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
