import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// All service types with complete SEO data
const services = {
  'acp-board-manufacturer': {
    name: 'ACP Board Manufacturing',
    shortName: 'ACP Boards',
    description: 'Premium Aluminum Composite Panel (ACP) 3D boards with LED lights',
    fullDescription: 'ACP boards are the most popular choice for modern shop name boards. Made from high-quality aluminum composite panels, these boards offer excellent durability, weather resistance, and a premium look. Our ACP 3D boards come with optional LED lighting for stunning 24/7 visibility.',
    priceRange: '₹8,000 - ₹25,000',
    icon: '🏢',
    features: [
      'Weather-resistant aluminum composite panels',
      'Available with LED backlighting or frontlighting',
      '3D raised letters for premium appearance',
      'Lightweight yet extremely durable',
      'Available in multiple colors and finishes',
      '5-7mm thickness for optimal strength',
      'UV-protected coating prevents fading',
      'Easy to maintain and clean'
    ],
    benefits: [
      'Attracts 3x more customers than non-lit boards',
      'Last 7-10 years with minimal maintenance',
      'Energy-efficient LED modules save electricity',
      'Withstands all weather conditions',
      'Premium look increases brand value',
      'Quick installation (1-2 days)'
    ],
    useCases: [
      'Retail shops and showrooms',
      'Restaurants and cafes',
      'Corporate offices',
      'Shopping malls and complexes',
      'Medical clinics and hospitals',
      'Educational institutions'
    ],
    process: [
      'Free site visit and measurement',
      'Design mockup with your logo',
      'Material selection (color, finish, lighting)',
      'Manufacturing (3-5 days)',
      'Professional installation',
      '2 year warranty activation'
    ]
  },
  'led-signage-boards': {
    name: 'LED Signage Boards',
    shortName: 'LED Signage',
    description: 'Bright, energy-efficient LED boards that attract customers 24/7',
    fullDescription: 'LED signage boards are the future of shop advertising. With brilliant illumination that works day and night, LED boards ensure your shop stands out in any environment. Our LED modules are energy-efficient, long-lasting, and available in multiple colors.',
    priceRange: '₹12,000 - ₹40,000',
    icon: '💡',
    features: [
      'Super-bright LED modules (SMD 2835)',
      'Available in white, red, blue, green, RGB',
      'IP65 waterproof rating',
      'Energy consumption: Only 10-15W per foot',
      'Lifespan: 50,000+ hours',
      'Uniform brightness across entire board',
      'Remote control option for RGB boards',
      'Auto on/off timer available'
    ],
    benefits: [
      'Visible from 500+ meters away',
      '90% less electricity than traditional neon',
      'Works perfectly in rain and heat',
      'Increases footfall by 250%',
      'Low maintenance costs',
      'Instant on/off (no warm-up time)'
    ],
    useCases: [
      'Shops in high-competition areas',
      'Restaurants and food courts',
      'Pharmacies and medical stores',
      'Mobile and electronics shops',
      'Jewelry and fashion stores',
      'Gyms and fitness centers'
    ],
    process: [
      'Consultation on LED type and color',
      '3D design with lighting preview',
      'Custom LED module manufacturing',
      'Quality testing (48 hours)',
      'Installation with electrical wiring',
      'Demo and training on operation'
    ]
  },
  'gsb-board-manufacturer': {
    name: 'GSB Board Manufacturing',
    shortName: 'GSB Boards',
    description: 'Galvanized Steel Boards for durability and professional appearance',
    fullDescription: 'GSB (Galvanized Steel Boards) are constructed from high-grade galvanized steel sheets that resist rust and corrosion. Perfect for businesses that want a professional, industrial look with exceptional longevity.',
    priceRange: '₹6,000 - ₹20,000',
    icon: '⚡',
    features: [
      'Rust-proof galvanized steel',
      'Available in 18-24 gauge thickness',
      'Powder-coated finish in any color',
      'Can be backlit or frontlit',
      'Extremely durable (10+ years)',
      'Weather and corrosion resistant',
      'Professional matte or glossy finish',
      'Customizable in any shape'
    ],
    benefits: [
      'Lowest maintenance cost',
      'Withstands extreme weather',
      'Industrial-grade durability',
      'Premium professional appearance',
      'Cost-effective for large boards',
      'Fire-resistant material'
    ],
    useCases: [
      'Automobile showrooms',
      'Industrial units and factories',
      'Warehouses and logistics',
      'Petrol pumps and service stations',
      'Large retail stores',
      'Corporate buildings'
    ],
    process: [
      'Site survey and design finalization',
      'Steel cutting and shaping',
      'Galvanization and rust-proofing',
      'Powder coating in selected color',
      'LED installation (if opted)',
      'Heavy-duty mounting installation'
    ]
  },
  'non-lit-boards': {
    name: 'Non-Lit Board Manufacturing',
    shortName: 'Non-Lit Boards',
    description: 'Cost-effective non-illuminated boards for indoor and outdoor use',
    fullDescription: 'Non-lit boards are the most economical option for shop branding. Made from durable materials like Sunboard, flex, or vinyl, these boards are perfect for indoor shops, kiosks, and businesses in well-lit areas.',
    priceRange: '₹3,000 - ₹12,000',
    icon: '📋',
    features: [
      'Multiple material options (Sunboard, Flex, Vinyl)',
      'UV-protected printing',
      'Lightweight and easy to install',
      'Available in all sizes',
      'High-resolution printing (1440 DPI)',
      'Laminated for weather protection',
      'Mounting options: Wall, pole, frame',
      'Quick turnaround (2-3 days)'
    ],
    benefits: [
      'Most affordable option',
      'No electricity cost',
      'Perfect for indoor locations',
      'Easy to replace and update',
      'Lightweight installation',
      'Great for temporary setups'
    ],
    useCases: [
      'Indoor shops and kiosks',
      'Mall counters and stalls',
      'Exhibition and trade shows',
      'Real estate site boards',
      'Directional signage',
      'Promotional boards'
    ],
    process: [
      'Design and size finalization',
      'Material selection',
      'High-quality printing',
      'Lamination and finishing',
      'Mounting preparation',
      'Quick installation'
    ]
  },
  '3d-letter-signage': {
    name: '3D Letter Signage',
    shortName: '3D Letters',
    description: 'Eye-catching 3D letters in acrylic, metal, or LED backlit options',
    fullDescription: '3D letter signage creates a premium, dimensional look for your brand. Individual letters are crafted from acrylic, stainless steel, or brass and can be backlit with LEDs for stunning visual impact.',
    priceRange: '₹10,000 - ₹35,000',
    icon: '🔤',
    features: [
      'Materials: Acrylic, SS, brass, PVC foam',
      'Thickness: 10mm to 50mm',
      'LED halo lighting option',
      'Front-lit or back-lit variants',
      'Laser-cut precision',
      'Mirror finish or matte options',
      'Customizable fonts and sizes',
      'Indoor and outdoor rated'
    ],
    benefits: [
      'Premium 3D appearance',
      'Highly customizable',
      'Creates brand prestige',
      'Excellent for corporate branding',
      'Long-lasting materials',
      'Easy to maintain'
    ],
    useCases: [
      'Corporate reception areas',
      'Hotel lobbies',
      'Premium retail stores',
      'Spa and salons',
      'Fine dining restaurants',
      'Medical and dental clinics'
    ],
    process: [
      'Font and material selection',
      'Laser cutting and fabrication',
      'LED installation (if opted)',
      'Quality check and finishing',
      'Professional mounting',
      'Final alignment and testing'
    ]
  },
  'glow-sign-boards': {
    name: 'Glow Sign Boards',
    shortName: 'Glow Signs',
    description: 'Traditional neon-style glow signs for classic shop branding',
    fullDescription: 'Glow sign boards use LED neon flex technology to create the classic neon look without the high cost and maintenance. These boards glow uniformly and are perfect for creating a retro or premium ambiance.',
    priceRange: '₹8,000 - ₹22,000',
    icon: '✨',
    features: [
      'LED neon flex technology',
      'Available in 20+ colors',
      'Uniform glow (no dark spots)',
      'Flexible and durable',
      'Low voltage (12V DC)',
      'Waterproof IP67 rated',
      'Energy-efficient operation',
      'Long lifespan (30,000+ hours)'
    ],
    benefits: [
      'Classic neon look at 1/3rd cost',
      'No fragile glass tubes',
      'Safe low-voltage operation',
      'Weather-resistant',
      'Vibrant colors',
      'Easy to repair'
    ],
    useCases: [
      'Bakeries and dessert shops',
      'Bars and pubs',
      'Cafes and coffee shops',
      'Beauty parlors',
      'Ice cream shops',
      'Fashion boutiques'
    ],
    process: [
      'Design and color selection',
      'Neon flex bending and shaping',
      'Mounting board preparation',
      'Installation and wiring',
      'Testing and demonstration',
      'Warranty card issuance'
    ]
  },
  'backlit-signage': {
    name: 'Backlit Signage',
    shortName: 'Backlit Signs',
    description: 'Illuminated from behind for stunning day and night visibility',
    fullDescription: 'Backlit signage uses translucent acrylic or flex material illuminated from behind with LED modules. This creates an even, glowing effect that makes your brand stand out both day and night.',
    priceRange: '₹9,000 - ₹28,000',
    icon: '🌟',
    features: [
      'Translucent acrylic face',
      'Even LED backlighting',
      'Aluminum frame construction',
      'Multiple depth options (50-150mm)',
      'Changeable graphics',
      'Energy-efficient LEDs',
      'Slim profile design',
      'Weather-sealed edges'
    ],
    benefits: [
      'Uniform illumination',
      'Professional appearance',
      'Easy graphic updates',
      'Excellent visibility',
      'Modern aesthetic',
      'Durable construction'
    ],
    useCases: [
      'Shopping mall stores',
      'Airport and metro stations',
      'Brand showrooms',
      'Multiplexes and theaters',
      'Fast food chains',
      'Retail chains'
    ],
    process: [
      'Size and design finalization',
      'Aluminum frame fabrication',
      'Acrylic cutting and printing',
      'LED module installation',
      'Assembly and testing',
      'Wall mounting installation'
    ]
  },
  'acrylic-signage': {
    name: 'Acrylic Signage',
    shortName: 'Acrylic Signs',
    description: 'Modern, sleek acrylic boards in various colors and finishes',
    fullDescription: 'Acrylic signage offers a contemporary, high-end look for businesses. Available in clear, frosted, or colored acrylic sheets, these signs can be laser-cut, printed, or engraved for maximum customization.',
    priceRange: '₹5,000 - ₹18,000',
    icon: '💎',
    features: [
      'Premium acrylic sheets (3-10mm)',
      'Available in 50+ colors',
      'Laser cutting and engraving',
      'UV printing option',
      'Mirror or matte finish',
      'Edge polishing',
      'Standoff mounting',
      'Indoor and outdoor use'
    ],
    benefits: [
      'Premium modern look',
      'Highly versatile',
      'Easy to clean',
      'Lightweight',
      'Scratch-resistant',
      'Crystal clear transparency'
    ],
    useCases: [
      'Corporate offices',
      'Art galleries',
      'Designer boutiques',
      'Salons and spas',
      'Tech companies',
      'Modern retail stores'
    ],
    process: [
      'Design and acrylic selection',
      'Laser cutting or printing',
      'Edge polishing',
      'Mounting hardware installation',
      'Quality inspection',
      'Professional installation'
    ]
  },
  'metal-letter-signage': {
    name: 'Metal Letter Signage',
    shortName: 'Metal Letters',
    description: 'Premium stainless steel or brass letters for luxury branding',
    fullDescription: 'Metal letter signage represents the pinnacle of premium branding. Crafted from stainless steel or brass, these individual letters create an elegant, prestigious appearance perfect for high-end businesses.',
    priceRange: '₹15,000 - ₹50,000',
    icon: '🏆',
    features: [
      'SS 304 grade stainless steel',
      'Brass with gold/bronze finish',
      'Brushed or mirror polish',
      'Laser-cut precision',
      'LED backlighting option',
      'Waterjet cutting available',
      'Custom thickness (5-20mm)',
      'Rust and corrosion proof'
    ],
    benefits: [
      'Ultimate premium appearance',
      'Exceptional durability (20+ years)',
      'Luxury brand positioning',
      'Minimal maintenance',
      'Timeless aesthetic',
      'High resale value'
    ],
    useCases: [
      'Luxury hotels and resorts',
      'Premium car dealerships',
      'High-end jewelry stores',
      'Corporate headquarters',
      '5-star restaurants',
      'Exclusive clubs'
    ],
    process: [
      'Design and metal selection',
      'Laser/waterjet cutting',
      'Polishing and finishing',
      'LED installation (if opted)',
      'Mounting template creation',
      'Precision installation'
    ]
  },
  'neon-signs': {
    name: 'Neon Sign Manufacturing',
    shortName: 'Neon Signs',
    description: 'Vibrant LED neon signs for trendy, modern businesses',
    fullDescription: 'Modern LED neon signs combine the classic appeal of neon with LED technology. These flexible, colorful signs are perfect for creating Instagram-worthy spaces and attracting younger demographics.',
    priceRange: '₹7,000 - ₹25,000',
    icon: '🎨',
    features: [
      'Flexible LED neon tubes',
      'RGB color changing options',
      'Custom shapes and designs',
      'Remote control operation',
      'Dimmable brightness',
      'Safe 12V DC operation',
      'Acrylic backing board',
      'Easy wall mounting'
    ],
    benefits: [
      'Trendy Instagram appeal',
      'Attracts younger audience',
      'Safe and cool to touch',
      'Endless design possibilities',
      'Energy-efficient',
      'Easy to relocate'
    ],
    useCases: [
      'Cafes and bubble tea shops',
      'Instagram-worthy restaurants',
      'Youth fashion stores',
      'Gaming zones',
      'Modern co-working spaces',
      'Nightclubs and bars'
    ],
    process: [
      'Custom design creation',
      'Neon tube bending',
      'Acrylic board preparation',
      'Electrical assembly',
      'Remote setup (if opted)',
      'Installation and demo'
    ]
  }
}

type ServiceSlug = keyof typeof services

// Generate static paths for all services
export async function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service: service,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceData = services[params.service as ServiceSlug]

  if (!serviceData) {
    return {
      title: 'Service Not Found',
    }
  }

  const title = `${serviceData.name} India | ${serviceData.priceRange} | The Mediaverse`
  const description = `Professional ${serviceData.name.toLowerCase()} services across India. ${serviceData.description}. ✓ Free Quote ✓ 2 Year Warranty ✓ Expert Installation. Call +91 9580088540`

  return {
    title,
    description,
    keywords: `${serviceData.shortName.toLowerCase()}, ${serviceData.name.toLowerCase()}, shop name board, signage manufacturer, ${serviceData.shortName.toLowerCase()} price, ${serviceData.shortName.toLowerCase()} India, LED signage, shop branding`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'The Mediaverse',
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
  const serviceData = services[params.service as ServiceSlug]

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
      name: 'The Mediaverse',
      telephone: '+91-9580088540',
      email: 'contact@themediaverse.in'
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
        priceCurrency: 'INR'
      }]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150'
    }
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden flex items-center pt-24">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-sm font-semibold">{serviceData.icon} Professional Service</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {serviceData.name}
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Across India
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-4 leading-relaxed">
              {serviceData.fullDescription}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
              <p className="text-sm text-red-100 mb-2">Starting from</p>
              <p className="text-4xl font-black">{serviceData.priceRange}</p>
            </div>

            <div className="flex flex-wrap gap-4">
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

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              What makes our {serviceData.shortName.toLowerCase()} stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">✓</div>
                <p className="text-gray-700 font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose {serviceData.shortName}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-red-600">★</div>
                <p className="text-lg font-semibold text-gray-900">{benefit}</p>
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
              Businesses that benefit most from {serviceData.shortName.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border-2 border-red-200 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <span className="text-3xl">{serviceData.icon}</span>
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
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
                  <p className="text-lg font-semibold text-gray-900">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Get a free quote for {serviceData.name.toLowerCase()}. Our experts will guide you through material selection, design, and installation.
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

          <div className="mt-12 flex flex-wrap gap-8 justify-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Expert Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Pan-India Service</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
