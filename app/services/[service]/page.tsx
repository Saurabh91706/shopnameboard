import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Service data with complete SEO optimization
const services = {
  'acp-board-manufacturer': {
    title: 'ACP Board Manufacturer',
    shortTitle: 'ACP Boards',
    description: 'Leading ACP (Aluminium Composite Panel) board manufacturer in India. We design and manufacture premium ACP 3D boards for shop name boards with superior quality materials and expert installation.',
    longDescription: 'Our ACP boards are manufactured using high-quality aluminium composite panels that ensure durability, weather resistance, and a premium finish. Perfect for shop name boards, building signage, and outdoor advertising.',
    keywords: 'ACP board manufacturer, ACP 3D boards, aluminium composite panel, shop name board ACP, ACP signage',
    features: [
      'Premium Quality Aluminium Composite Panels',
      '3D Raised Letter Designs',
      'Weather Resistant & Durable',
      'UV Protected Coating',
      'Customizable Colors & Sizes',
      'Professional Installation',
      'Lightweight Yet Strong',
      '10+ Year Lifespan',
    ],
    benefits: [
      'Superior finish and appearance',
      'Excellent weather resistance',
      'Low maintenance requirements',
      'Cost-effective solution',
      'Quick installation process',
      'Eco-friendly materials',
    ],
    pricing: '₹1,500 - ₹5,000 per sq ft',
    deliveryTime: '7-15 days',
    warranty: '5 years',
  },
  'led-signage-boards': {
    title: 'LED Signage Boards',
    shortTitle: 'LED Signage',
    description: 'Top LED signage board manufacturer in India. Energy-efficient LED signage solutions with vibrant colors, long-lasting performance, and 24/7 visibility for your business.',
    longDescription: 'Our LED signage boards use the latest LED technology to provide bright, energy-efficient illumination. Perfect for shops, restaurants, hotels, and commercial establishments.',
    keywords: 'LED signage boards, LED sign boards, LED shop boards, LED name board, LED advertising boards',
    features: [
      'Energy-Efficient LED Technology',
      'Vibrant RGB Color Options',
      'Programmable & Customizable',
      '24/7 Visibility',
      'Long-Lasting (50,000+ hours)',
      'Low Power Consumption',
      'Remote Control Options',
      'Weather-Proof Design',
    ],
    benefits: [
      'Reduces electricity costs by 80%',
      'Attracts more customers',
      'Highly visible day and night',
      'Minimal maintenance required',
      'Eco-friendly lighting solution',
      'Customizable messages',
    ],
    pricing: '₹3,000 - ₹8,000 per sq ft',
    deliveryTime: '10-20 days',
    warranty: '3 years',
  },
  'gsb-board-manufacturer': {
    title: 'GSB Board Manufacturer',
    shortTitle: 'GSB Boards',
    description: 'Premium GSB (Glow Sign Board) manufacturer in India. Superior illumination, weather-resistant glow sign boards for maximum visibility and brand impact.',
    longDescription: 'Our GSB boards are designed to provide superior illumination using fluorescent tubes or LED backlighting. Perfect for shops, showrooms, and commercial establishments.',
    keywords: 'GSB board manufacturer, glow sign board, illuminated signage, backlit boards, shop glow boards',
    features: [
      'Superior Illumination Quality',
      'Acrylic Face with LED/Fluorescent',
      'Weather-Resistant Construction',
      'Uniform Light Distribution',
      'Custom Shapes & Sizes',
      'Energy-Efficient Options',
      'Powder-Coated Frame',
      'Day & Night Visibility',
    ],
    benefits: [
      'Enhanced brand visibility',
      'Attracts attention 24/7',
      'Professional appearance',
      'Long-lasting illumination',
      'Low maintenance costs',
      'Customizable designs',
    ],
    pricing: '₹2,000 - ₹6,000 per sq ft',
    deliveryTime: '7-15 days',
    warranty: '3 years',
  },
  '3d-letter-boards': {
    title: '3D Letter Boards',
    shortTitle: '3D Letters',
    description: 'Expert 3D letter board manufacturer in India. Create stunning dimensional signage with premium materials including acrylic, metal, and LED-lit 3D letters.',
    longDescription: 'Our 3D letter boards add depth and dimension to your signage, creating an eye-catching display that stands out. Available in various materials and finishes.',
    keywords: '3D letter boards, dimensional letters, 3D signage, raised letters, channel letters',
    features: [
      'Premium Acrylic/Metal Materials',
      'Raised 3D Effect (10mm-50mm)',
      'LED Backlighting Options',
      'Multiple Finish Options',
      'Custom Fonts & Designs',
      'Precision CNC Cutting',
      'Mounting Systems Included',
      'Indoor & Outdoor Use',
    ],
    benefits: [
      'Creates premium brand image',
      'Highly visible and attractive',
      'Versatile design options',
      'Durable and long-lasting',
      'Easy to maintain',
      'Professional appearance',
    ],
    pricing: '₹2,500 - ₹7,000 per sq ft',
    deliveryTime: '10-20 days',
    warranty: '5 years',
  },
  'non-lit-board-manufacturer': {
    title: 'Non-Lit Board Manufacturer',
    shortTitle: 'Non-Lit Boards',
    description: 'Quality non-lit board manufacturer in India. Durable, professional-finish non-illuminated boards for shop names, offices, and commercial spaces.',
    longDescription: 'Our non-lit boards offer a professional, cost-effective solution for businesses that don\'t require illumination. Available in various materials and finishes.',
    keywords: 'non-lit boards, non-illuminated signage, shop name boards, office boards, flat signage',
    features: [
      'Multiple Material Options',
      'Professional Vinyl Graphics',
      'Weather-Resistant Coating',
      'UV Protected Printing',
      'Customizable Designs',
      'Durable Construction',
      'Easy Installation',
      'Cost-Effective Solution',
    ],
    benefits: [
      'Lower initial investment',
      'No electricity costs',
      'Minimal maintenance',
      'Professional appearance',
      'Quick installation',
      'Versatile applications',
    ],
    pricing: '₹500 - ₹2,000 per sq ft',
    deliveryTime: '5-10 days',
    warranty: '3 years',
  },
  'backlit-signage': {
    title: 'Backlit Signage',
    shortTitle: 'Backlit Signs',
    description: 'Premium backlit signage manufacturer in India. Create stunning illuminated displays with LED backlit boards for 24/7 visibility and brand impact.',
    longDescription: 'Our backlit signage uses LED backlighting to create a stunning visual effect, perfect for high-traffic areas and premium brand displays.',
    keywords: 'backlit signage, LED backlit boards, illuminated signage, light box signage, backlit displays',
    features: [
      'LED Backlighting System',
      'Translucent Acrylic Face',
      'Uniform Light Distribution',
      'Energy-Efficient LEDs',
      'Slim Profile Design',
      'Custom Sizes Available',
      'Easy Graphic Changes',
      'Magnetic/Snap Frame Options',
    ],
    benefits: [
      'Eye-catching illumination',
      'Energy-efficient operation',
      'Professional appearance',
      'Long-lasting LEDs',
      'Easy maintenance',
      '24/7 visibility',
    ],
    pricing: '₹3,500 - ₹9,000 per sq ft',
    deliveryTime: '10-20 days',
    warranty: '3 years',
  },
  'acrylic-signage': {
    title: 'Acrylic Signage',
    shortTitle: 'Acrylic Signs',
    description: 'Expert acrylic signage manufacturer in India. High-quality acrylic boards with premium finish for shop names, offices, and commercial displays.',
    longDescription: 'Our acrylic signage offers a sleek, modern look with excellent clarity and durability. Available in various thicknesses and colors.',
    keywords: 'acrylic signage, acrylic boards, acrylic name boards, acrylic letters, perspex signage',
    features: [
      'Premium Cast Acrylic',
      'Multiple Thickness Options (3mm-25mm)',
      'Crystal Clear Finish',
      'UV Resistant',
      'Laser Cutting Available',
      'LED Edge Lighting Options',
      'Custom Colors & Designs',
      'Easy to Clean & Maintain',
    ],
    benefits: [
      'Premium appearance',
      'Excellent clarity',
      'Durable and lightweight',
      'Weather resistant',
      'Versatile design options',
      'Easy installation',
    ],
    pricing: '₹1,800 - ₹5,000 per sq ft',
    deliveryTime: '7-15 days',
    warranty: '5 years',
  },
  'metal-letters': {
    title: 'Metal Letter Signage',
    shortTitle: 'Metal Letters',
    description: 'Premium metal letter manufacturer in India. Stainless steel, brass, and aluminium letters for elegant, durable shop signage.',
    longDescription: 'Our metal letters are crafted from high-quality stainless steel, brass, or aluminium, providing an elegant and durable signage solution.',
    keywords: 'metal letters, stainless steel letters, brass letters, aluminium letters, metal signage',
    features: [
      'Stainless Steel/Brass/Aluminium',
      'Brushed/Mirror/PVD Finishes',
      'Precision Cut & Polished',
      'Multiple Mounting Options',
      'Custom Sizes & Fonts',
      'LED Halo Lighting Available',
      'Corrosion Resistant',
      'Premium Quality Finish',
    ],
    benefits: [
      'Elegant appearance',
      'Extremely durable',
      'Corrosion resistant',
      'Timeless design',
      'Low maintenance',
      'Premium brand image',
    ],
    pricing: '₹4,000 - ₹12,000 per sq ft',
    deliveryTime: '15-25 days',
    warranty: '10 years',
  },
  'neon-signs': {
    title: 'Neon Signs',
    shortTitle: 'Neon Signs',
    description: 'Modern LED neon sign manufacturer in India. Eye-catching, energy-efficient LED neon signs for shops, cafes, and businesses.',
    longDescription: 'Our LED neon signs provide the classic neon look with modern LED technology - safer, more efficient, and more durable.',
    keywords: 'neon signs, LED neon signs, neon signage, custom neon signs, neon shop signs',
    features: [
      'LED Neon Flex Technology',
      'Custom Designs & Shapes',
      'Multiple Color Options',
      'Low Heat Generation',
      'Shatterproof & Safe',
      'Energy Efficient',
      'Indoor & Outdoor Use',
      'Easy Installation',
    ],
    benefits: [
      'Eye-catching design',
      'Energy-efficient',
      'Safe to touch',
      'Long-lasting',
      'Vibrant colors',
      'Customizable',
    ],
    pricing: '₹5,000 - ₹15,000 per sq ft',
    deliveryTime: '15-30 days',
    warranty: '2 years',
  },
  'glow-sign-boards': {
    title: 'Glow Sign Boards',
    shortTitle: 'Glow Signs',
    description: 'Top glow sign board manufacturer in India. Premium glow sign boards with LED/fluorescent illumination for shops, showrooms, and businesses.',
    longDescription: 'Our glow sign boards provide superior illumination and visibility, perfect for attracting customers day and night.',
    keywords: 'glow sign boards, illuminated sign boards, glow boards, shop glow signs, LED glow boards',
    features: [
      'LED/Fluorescent Illumination',
      'Acrylic Face Panel',
      'Powder-Coated Frame',
      'Weatherproof Construction',
      'Uniform Light Distribution',
      'Custom Sizes Available',
      'Single/Double Sided Options',
      'Energy Efficient',
    ],
    benefits: [
      'Maximum visibility',
      'Attracts customers 24/7',
      'Weather resistant',
      'Energy efficient',
      'Professional appearance',
      'Long-lasting',
    ],
    pricing: '₹2,200 - ₹6,500 per sq ft',
    deliveryTime: '7-15 days',
    warranty: '3 years',
  },
}

type ServiceSlug = keyof typeof services

export async function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service: service,
  }))
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceData = services[params.service as ServiceSlug]

  if (!serviceData) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${serviceData.title} in India | Shop Name Boards`,
    description: serviceData.description,
    keywords: serviceData.keywords,
    openGraph: {
      title: `${serviceData.title} in India | Premium Quality`,
      description: serviceData.description,
      images: [`/images/services/${params.service}.jpg`],
    },
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = services[params.service as ServiceSlug]

  if (!serviceData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">/</span>
            <span>{serviceData.shortTitle}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {serviceData.title} in India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            {serviceData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition"
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

      {/* Quick Info */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Starting From</p>
              <p className="text-2xl font-bold text-red-600">{serviceData.pricing}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Delivery Time</p>
              <p className="text-2xl font-bold text-gray-900">{serviceData.deliveryTime}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Warranty</p>
              <p className="text-2xl font-bold text-gray-900">{serviceData.warranty}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About {serviceData.shortTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {serviceData.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-800">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our {serviceData.shortTitle}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Covered */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Available Across India
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We provide {serviceData.shortTitle} in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, and 15+ major cities across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/locations"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              View All Cities
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: serviceData.title,
            description: serviceData.description,
            provider: {
              '@type': 'Organization',
              name: 'Shop Name Boards',
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: serviceData.title,
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: serviceData.title,
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
