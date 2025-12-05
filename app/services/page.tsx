import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shop Name Board Services | ACP, LED, GSB Board Manufacturer in India',
  description: 'Complete shop name board manufacturing services across India. Expert in ACP boards, LED signage, GSB boards, 3D letters, non-lit boards, and all types of signage solutions.',
  keywords: 'shop name board services, ACP board manufacturer, LED signage, GSB boards, signage services India',
}

const services = [
  {
    slug: 'acp-board-manufacturer',
    title: 'ACP Board Manufacturer',
    description: 'Premium ACP 3D boards with high-quality aluminium composite panels.',
    icon: '🏢',
    price: '₹1,500 - ₹5,000',
  },
  {
    slug: 'led-signage-boards',
    title: 'LED Signage Boards',
    description: 'Energy-efficient LED signage with vibrant colors and 24/7 visibility.',
    icon: '💡',
    price: '₹3,000 - ₹8,000',
  },
  {
    slug: 'gsb-board-manufacturer',
    title: 'GSB Board Manufacturer',
    description: 'Glow Sign Boards with superior illumination for maximum visibility.',
    icon: '✨',
    price: '₹2,000 - ₹6,000',
  },
  {
    slug: '3d-letter-boards',
    title: '3D Letter Boards',
    description: 'Eye-catching dimensional signage with premium acrylic/metal materials.',
    icon: '🔤',
    price: '₹2,500 - ₹7,000',
  },
  {
    slug: 'non-lit-board-manufacturer',
    title: 'Non-Lit Board Manufacturer',
    description: 'Durable non-illuminated boards with professional vinyl graphics.',
    icon: '📋',
    price: '₹500 - ₹2,000',
  },
  {
    slug: 'backlit-signage',
    title: 'Backlit Signage',
    description: 'Premium LED backlit displays for stunning visual impact.',
    icon: '🌟',
    price: '₹3,500 - ₹9,000',
  },
  {
    slug: 'acrylic-signage',
    title: 'Acrylic Signage',
    description: 'Crystal clear acrylic boards with premium finish and edge lighting.',
    icon: '💎',
    price: '₹1,800 - ₹5,000',
  },
  {
    slug: 'metal-letters',
    title: 'Metal Letter Signage',
    description: 'Elegant stainless steel, brass, and aluminium letters.',
    icon: '⚡',
    price: '₹4,000 - ₹12,000',
  },
  {
    slug: 'neon-signs',
    title: 'Neon Signs',
    description: 'Modern LED neon signs with vibrant colors and custom designs.',
    icon: '🎨',
    price: '₹5,000 - ₹15,000',
  },
  {
    slug: 'glow-sign-boards',
    title: 'Glow Sign Boards',
    description: 'Premium glow sign boards with uniform LED/fluorescent illumination.',
    icon: '🔆',
    price: '₹2,200 - ₹6,500',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shop Name Board Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Complete shop name board manufacturing and installation services across India. Expert in all types of signage solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-red-600 font-bold text-sm">
                    {service.price}/sq ft
                  </span>
                  <span className="text-red-600 font-semibold flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '10+ Years Experience',
                description: 'Trusted by 1000+ businesses',
                icon: '🏆',
              },
              {
                title: 'Premium Quality',
                description: 'High-grade materials & craftsmanship',
                icon: '✨',
              },
              {
                title: 'Fast Delivery',
                description: 'Quick turnaround across India',
                icon: '⚡',
              },
              {
                title: 'Best Prices',
                description: 'Competitive rates without compromise',
                icon: '💰',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Shop Name Board?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We serve all major cities across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </Link>
            <Link
              href="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              View All Cities
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
