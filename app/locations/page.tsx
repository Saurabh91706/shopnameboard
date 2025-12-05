import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shop Name Board Manufacturer in India - All Cities | ACP, LED, GSB Boards',
  description: 'Leading shop name board manufacturer serving 20+ major cities across India. Expert in ACP boards, LED signage, GSB boards, and all types of shop name boards. Fast delivery, best prices.',
  keywords: 'shop name board manufacturer india, signage boards india, ACP board manufacturer, LED signage india, GSB board manufacturer',
}

const cities = [
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra' },
  { slug: 'delhi', name: 'Delhi', state: 'Delhi NCR' },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat' },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan' },
  { slug: 'surat', name: 'Surat', state: 'Gujarat' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh' },
  { slug: 'kanpur', name: 'Kanpur', state: 'Uttar Pradesh' },
  { slug: 'nagpur', name: 'Nagpur', state: 'Maharashtra' },
  { slug: 'indore', name: 'Indore', state: 'Madhya Pradesh' },
  { slug: 'thane', name: 'Thane', state: 'Maharashtra' },
  { slug: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh' },
  { slug: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { slug: 'patna', name: 'Patna', state: 'Bihar' },
  { slug: 'vadodara', name: 'Vadodara', state: 'Gujarat' },
  { slug: 'pimpri-chinchwad', name: 'Pimpri-Chinchwad', state: 'Maharashtra' },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Locations</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shop Name Board Manufacturer Across India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Serving 20+ major cities with premium ACP boards, LED signage, GSB boards, and all types of shop name boards. Fast delivery, expert installation, competitive pricing.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Cities We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Click on your city to view our services, portfolio, and get a free quote for shop name boards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
                    {city.name}
                  </h3>
                  <svg className="w-6 h-6 text-red-600 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">{city.state}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-red-600 font-semibold">
                    View Services →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services in All Cities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ACP Board Manufacturer',
                description: 'Premium ACP 3D boards with high-quality materials and expert installation.',
                icon: '🏢',
              },
              {
                title: 'LED Signage Boards',
                description: 'Energy-efficient LED signage with vibrant colors and long-lasting performance.',
                icon: '💡',
              },
              {
                title: 'GSB Board Manufacturer',
                description: 'Glow Sign Boards with superior illumination for maximum visibility.',
                icon: '✨',
              },
              {
                title: '3D Letter Boards',
                description: 'Eye-catching 3D letter boards that make your business stand out.',
                icon: '🔤',
              },
              {
                title: 'Non-Lit Boards',
                description: 'Durable non-lit boards with professional finishes for all businesses.',
                icon: '📋',
              },
              {
                title: 'Backlit Signage',
                description: 'Premium backlit signage solutions for 24/7 visibility.',
                icon: '🌟',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Shop Name Board Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Select your city above and get a free quote for premium shop name boards. Fast delivery across India!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
