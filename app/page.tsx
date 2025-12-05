import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import CitySection from '@/components/CitySection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: '#1 Shop Name Board Manufacturer in India | ACP, LED, GSB Boards',
  description: 'India\'s leading shop name board manufacturer serving Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata & 50+ cities. Expert in ACP 3D boards, LED signage, GSB boards. Fast delivery, best prices, 10+ years experience.',
  keywords: 'shop name board manufacturer, shop name board manufacturer in India, ACP board manufacturer, LED signage boards, GSB board manufacturer, shop name boards, signage boards India, 3D letter boards, glow sign boards',
  openGraph: {
    title: '#1 Shop Name Board Manufacturer in India | ACP, LED, GSB Boards',
    description: 'Premium shop name boards, ACP 3D boards, LED signage, and GSB boards across India. Fast delivery, expert installation, competitive pricing.',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Shop Name Board Manufacturer in India',
    description: 'Premium shop name boards, ACP boards, LED signage across India',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CitySection />
      <Gallery />
      <FAQSection />
      <CTA />

      {/* Schema.org JSON-LD for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Shop Name Boards',
            description: 'Leading shop name board manufacturer in India',
            url: 'https://shopnameboard.vercel.app',
            logo: 'https://shopnameboard.vercel.app/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              areaServed: 'IN',
            },
            sameAs: [
              // Add your social media URLs here
              // 'https://facebook.com/yourpage',
              // 'https://instagram.com/yourpage',
              // 'https://linkedin.com/company/yourpage',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Shop Name Board Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'ACP Board Manufacturing',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'LED Signage Boards',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'GSB Board Manufacturing',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

