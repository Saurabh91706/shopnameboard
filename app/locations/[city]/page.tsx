import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Top 20 Indian Cities Data
const cities = {
  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'Leading shop name board manufacturer in Mumbai. We provide premium ACP boards, LED signage, 3D letter boards, and all types of shop name boards across Mumbai, Navi Mumbai, and Thane.',
    keywords: 'shop name board manufacturer mumbai, signage boards mumbai, ACP board mumbai, LED signage mumbai',
    areas: ['Andheri', 'Bandra', 'Borivali', 'Dadar', 'Goregaon', 'Kurla', 'Malad', 'Powai', 'Thane', 'Vashi'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/mumbai/shop-name-board-mumbai.jpg'
  },
  delhi: {
    name: 'Delhi',
    state: 'Delhi NCR',
    description: 'Top shop name board manufacturer in Delhi NCR. Specializing in ACP boards, GSB boards, LED signage, and non-lit boards for businesses across Delhi, Noida, Gurgaon, and Faridabad.',
    keywords: 'shop name board manufacturer delhi, signage boards delhi ncr, ACP board delhi, LED signage delhi',
    areas: ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Nehru Place', 'Noida', 'Gurgaon', 'Faridabad', 'Dwarka', 'Rohini', 'Saket'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/delhi/shop-name-board-delhi.jpg'
  },
  bangalore: {
    name: 'Bangalore',
    state: 'Karnataka',
    description: '#1 shop name board manufacturer in Bangalore. Expert in ACP 3D boards, LED signage, glow sign boards, and all types of shop name boards for businesses across Bengaluru.',
    keywords: 'shop name board manufacturer bangalore, signage boards bengaluru, ACP board bangalore, LED signage bangalore',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Electronic City', 'JP Nagar', 'Malleshwaram', 'Jayanagar', 'MG Road', 'Marathahalli'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/bangalore/shop-name-board-bangalore.jpg'
  },
  hyderabad: {
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'Premium shop name board manufacturer in Hyderabad. We design and install ACP boards, LED signage, 3D letter boards, and custom shop name boards across Hyderabad and Secunderabad.',
    keywords: 'shop name board manufacturer hyderabad, signage boards hyderabad, ACP board hyderabad, LED signage hyderabad',
    areas: ['Madhapur', 'Hitech City', 'Banjara Hills', 'Jubilee Hills', 'Secunderabad', 'Kukatpally', 'LB Nagar', 'Ameerpet', 'Gachibowli', 'Kondapur'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/hyderabad/shop-name-board-hyderabad.jpg'
  },
  chennai: {
    name: 'Chennai',
    state: 'Tamil Nadu',
    description: 'Leading shop name board manufacturer in Chennai. Providing high-quality ACP boards, GSB boards, LED signage, and shop name boards for businesses across Chennai and Tamil Nadu.',
    keywords: 'shop name board manufacturer chennai, signage boards chennai, ACP board chennai, LED signage chennai',
    areas: ['T Nagar', 'Anna Nagar', 'Velachery', 'Adyar', 'Porur', 'Tambaram', 'Vadapalani', 'Nungambakkam', 'Mylapore', 'Guindy'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/chennai/shop-name-board-chennai.jpg'
  },
  pune: {
    name: 'Pune',
    state: 'Maharashtra',
    description: 'Top-rated shop name board manufacturer in Pune. Expert in ACP 3D boards, LED signage, acrylic boards, and all types of shop signage for Pune and Pimpri-Chinchwad.',
    keywords: 'shop name board manufacturer pune, signage boards pune, ACP board pune, LED signage pune',
    areas: ['Hinjewadi', 'Kothrud', 'Aundh', 'Baner', 'Wakad', 'Viman Nagar', 'Kharadi', 'Pimpri Chinchwad', 'Deccan', 'Camp'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/pune/shop-name-board-pune.jpg'
  },
  ahmedabad: {
    name: 'Ahmedabad',
    state: 'Gujarat',
    description: 'Premium shop name board manufacturer in Ahmedabad. Specializing in ACP boards, LED signage, glow sign boards, and custom shop name boards across Ahmedabad city.',
    keywords: 'shop name board manufacturer ahmedabad, signage boards ahmedabad, ACP board ahmedabad, LED signage ahmedabad',
    areas: ['Satellite', 'Prahlad Nagar', 'Vastrapur', 'Maninagar', 'Naranpura', 'Thaltej', 'Bodakdev', 'Navrangpura', 'CG Road', 'SG Highway'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/ahmedabad/shop-name-board-ahmedabad.jpg'
  },
  kolkata: {
    name: 'Kolkata',
    state: 'West Bengal',
    description: 'Leading shop name board manufacturer in Kolkata. We provide ACP boards, LED signage, 3D boards, and all types of shop name boards for businesses across Kolkata.',
    keywords: 'shop name board manufacturer kolkata, signage boards kolkata, ACP board kolkata, LED signage kolkata',
    areas: ['Salt Lake', 'Park Street', 'Gariahat', 'New Town', 'Rajarhat', 'Howrah', 'Ballygunge', 'Alipore', 'Behala', 'Dum Dum'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/kolkata/shop-name-board-kolkata.jpg'
  },
  jaipur: {
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'Top shop name board manufacturer in Jaipur. Expert in ACP boards, GSB boards, LED signage, and custom shop name boards for businesses across Jaipur.',
    keywords: 'shop name board manufacturer jaipur, signage boards jaipur, ACP board jaipur, LED signage jaipur',
    areas: ['Malviya Nagar', 'Vaishali Nagar', 'C-Scheme', 'MI Road', 'Mansarovar', 'Jagatpura', 'Tonk Road', 'Sitapura', 'Ajmer Road', 'Jhotwara'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/jaipur/shop-name-board-jaipur.jpg'
  },
  surat: {
    name: 'Surat',
    state: 'Gujarat',
    description: 'Premium shop name board manufacturer in Surat. Providing ACP boards, LED signage, glow sign boards, and shop name boards for textile and diamond businesses in Surat.',
    keywords: 'shop name board manufacturer surat, signage boards surat, ACP board surat, LED signage surat',
    areas: ['Adajan', 'Vesu', 'Pal', 'Piplod', 'Athwa Lines', 'Surat', 'Varachha', 'Rander', 'Katargam', 'Udhna'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/surat/shop-name-board-surat.jpg'
  },
  lucknow: {
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    description: 'Leading shop name board manufacturer in Lucknow. We design and install ACP boards, LED signage, and all types of shop name boards across Lucknow city.',
    keywords: 'shop name board manufacturer lucknow, signage boards lucknow, ACP board lucknow, LED signage lucknow',
    areas: ['Gomti Nagar', 'Hazratganj', 'Aliganj', 'Indira Nagar', 'Alambagh', 'Mahanagar', 'Chowk', 'Aminabad', 'Ashiyana', 'Rajajipuram'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/lucknow/shop-name-board-lucknow.jpg'
  },
  kanpur: {
    name: 'Kanpur',
    state: 'Uttar Pradesh',
    description: 'Top shop name board manufacturer in Kanpur. Specializing in ACP boards, LED signage, and custom shop signage for industrial and commercial businesses in Kanpur.',
    keywords: 'shop name board manufacturer kanpur, signage boards kanpur, ACP board kanpur, LED signage kanpur',
    areas: ['Civil Lines', 'Kakadeo', 'Swaroop Nagar', 'Kalyanpur', 'Panki', 'Kidwai Nagar', 'Govind Nagar', 'Barra', 'Shyam Nagar', 'Arya Nagar'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/kanpur/shop-name-board-kanpur.jpg'
  },
  nagpur: {
    name: 'Nagpur',
    state: 'Maharashtra',
    description: 'Premium shop name board manufacturer in Nagpur. Expert in ACP 3D boards, LED signage, and all types of shop name boards for businesses in Nagpur.',
    keywords: 'shop name board manufacturer nagpur, signage boards nagpur, ACP board nagpur, LED signage nagpur',
    areas: ['Dharampeth', 'Sadar', 'Sitabuldi', 'Wardha Road', 'CA Road', 'Trimurti Nagar', 'Hingna', 'Manish Nagar', 'Kasturchand Park', 'Ramdaspeth'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/nagpur/shop-name-board-nagpur.jpg'
  },
  indore: {
    name: 'Indore',
    state: 'Madhya Pradesh',
    description: 'Leading shop name board manufacturer in Indore. Providing ACP boards, GSB boards, LED signage, and shop name boards for commercial businesses in Indore.',
    keywords: 'shop name board manufacturer indore, signage boards indore, ACP board indore, LED signage indore',
    areas: ['Vijay Nagar', 'AB Road', 'MG Road', 'Palasia', 'Rau', 'Sudama Nagar', 'LIG Colony', 'Bhanwar Kuwa', 'Sapna Sangeeta', 'Treasure Island'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/indore/shop-name-board-indore.jpg'
  },
  thane: {
    name: 'Thane',
    state: 'Maharashtra',
    description: 'Top shop name board manufacturer in Thane. We provide ACP boards, LED signage, 3D letter boards, and all shop signage solutions for Thane and nearby areas.',
    keywords: 'shop name board manufacturer thane, signage boards thane, ACP board thane, LED signage thane',
    areas: ['Ghodbunder Road', 'Majiwada', 'Naupada', 'Vartak Nagar', 'Kopri', 'Wagle Estate', 'Manpada', 'Kolshet Road', 'Pokhran Road', 'Teen Hath Naka'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/thane/shop-name-board-thane.jpg'
  },
  bhopal: {
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    description: 'Premium shop name board manufacturer in Bhopal. Expert in ACP boards, LED signage, glow sign boards, and custom shop name boards across Bhopal.',
    keywords: 'shop name board manufacturer bhopal, signage boards bhopal, ACP board bhopal, LED signage bhopal',
    areas: ['MP Nagar', 'Arera Colony', 'New Market', 'Kolar Road', 'Hoshangabad Road', 'Berasia Road', 'Ayodhya Bypass', 'BHEL', 'Bairagarh', 'Katara Hills'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/bhopal/shop-name-board-bhopal.jpg'
  },
  visakhapatnam: {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    description: 'Leading shop name board manufacturer in Visakhapatnam. Providing ACP boards, LED signage, and all types of shop signage for businesses in Vizag.',
    keywords: 'shop name board manufacturer visakhapatnam, signage boards vizag, ACP board visakhapatnam, LED signage vizag',
    areas: ['MVP Colony', 'Dwaraka Nagar', 'Siripuram', 'Gajuwaka', 'Madhurawada', 'Rushikonda', 'NAD Kotha Road', 'Jagadamba Junction', 'Akkayyapalem', 'Pendurthi'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/visakhapatnam/shop-name-board-visakhapatnam.jpg'
  },
  patna: {
    name: 'Patna',
    state: 'Bihar',
    description: 'Top shop name board manufacturer in Patna. We specialize in ACP boards, LED signage, and shop name boards for businesses across Patna and Bihar.',
    keywords: 'shop name board manufacturer patna, signage boards patna, ACP board patna, LED signage patna',
    areas: ['Boring Road', 'Fraser Road', 'Kankarbagh', 'Rajendra Nagar', 'Patliputra', 'Bailey Road', 'Saguna More', 'Danapur', 'Phulwari Sharif', 'Khagaul'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/patna/shop-name-board-patna.jpg'
  },
  vadodara: {
    name: 'Vadodara',
    state: 'Gujarat',
    description: 'Premium shop name board manufacturer in Vadodara. Expert in ACP 3D boards, GSB boards, LED signage, and custom shop name boards in Vadodara.',
    keywords: 'shop name board manufacturer vadodara, signage boards vadodara, ACP board vadodara, LED signage vadodara',
    areas: ['Alkapuri', 'Vasna', 'Akota', 'Manjalpur', 'Sayajigunj', 'Fatehgunj', 'Gotri', 'Old Padra Road', 'RC Dutt Road', 'Waghodia Road'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/vadodara/shop-name-board-vadodara.jpg'
  },
  pimpri-chinchwad: {
    name: 'Pimpri-Chinchwad',
    state: 'Maharashtra',
    description: 'Leading shop name board manufacturer in Pimpri-Chinchwad. We provide ACP boards, LED signage, and all types of shop name boards for industrial and commercial areas.',
    keywords: 'shop name board manufacturer pimpri chinchwad, signage boards pcmc, ACP board pimpri, LED signage chinchwad',
    areas: ['Pimpri', 'Chinchwad', 'Akurdi', 'Nigdi', 'Bhosari', 'Chakan', 'Pimpri Station', 'MIDC', 'Moshi', 'Ravet'],
    phone: '+91-XXXXXXXXXX',
    image: '/images/cities/pimpri-chinchwad/shop-name-board-pimpri.jpg'
  },
}

type CitySlug = keyof typeof cities

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city: city,
  }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = cities[params.city as CitySlug]

  if (!cityData) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `Shop Name Board Manufacturer in ${cityData.name} | ACP Boards, LED Signage`,
    description: cityData.description,
    keywords: cityData.keywords,
    openGraph: {
      title: `#1 Shop Name Board Manufacturer in ${cityData.name} | ${cityData.state}`,
      description: cityData.description,
      images: [cityData.image],
    },
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityData = cities[params.city as CitySlug]

  if (!cityData) {
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
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">/</span>
            <span>{cityData.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shop Name Board Manufacturer in {cityData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            {cityData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${cityData.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Call Now: {cityData.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services in {cityData.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ACP Board Manufacturer',
                description: `Premium ACP 3D boards with high-quality materials and expert installation across ${cityData.name}.`,
                link: '/services/acp-board-manufacturer',
              },
              {
                title: 'LED Signage Boards',
                description: `Energy-efficient LED signage with vibrant colors and long-lasting performance for ${cityData.name} businesses.`,
                link: '/services/led-signage-boards',
              },
              {
                title: 'GSB Board Manufacturer',
                description: `Glow Sign Boards (GSB) with superior illumination for maximum visibility in ${cityData.name}.`,
                link: '/services/gsb-board-manufacturer',
              },
              {
                title: '3D Letter Boards',
                description: `Eye-catching 3D letter boards that make your business stand out in ${cityData.name}.`,
                link: '/services/3d-letter-boards',
              },
              {
                title: 'Non-Lit Board Manufacturer',
                description: `Durable non-lit boards with professional finishes for businesses in ${cityData.name}.`,
                link: '/services/non-lit-board-manufacturer',
              },
              {
                title: 'Backlit Signage',
                description: `Premium backlit signage solutions for 24/7 visibility in ${cityData.name}.`,
                link: '/services/backlit-signage',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-red-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Areas We Serve in {cityData.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {cityData.areas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-gray-800">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us for Shop Name Boards in {cityData.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'High-quality materials and expert craftsmanship',
                icon: '✨',
              },
              {
                title: 'Fast Delivery',
                description: `Quick installation across ${cityData.name}`,
                icon: '⚡',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best rates without compromising quality',
                icon: '💰',
              },
              {
                title: 'Expert Team',
                description: '10+ years of experience in signage',
                icon: '🏆',
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
            Ready to Get Your Shop Name Board in {cityData.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We serve all areas of {cityData.name}, {cityData.state}.
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
              View Our Work
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
            '@type': 'LocalBusiness',
            name: `Shop Name Boards - ${cityData.name}`,
            description: cityData.description,
            address: {
              '@type': 'PostalAddress',
              addressLocality: cityData.name,
              addressRegion: cityData.state,
              addressCountry: 'IN',
            },
            telephone: cityData.phone,
            areaServed: {
              '@type': 'City',
              name: cityData.name,
            },
            priceRange: '₹₹',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Shop Name Board Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'ACP Board Manufacturing',
                    description: 'Premium ACP 3D boards for shop name boards',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'LED Signage Boards',
                    description: 'Energy-efficient LED signage solutions',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'GSB Board Manufacturing',
                    description: 'Glow Sign Boards with superior illumination',
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
