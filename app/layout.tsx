import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '#1 Shop Name Board Manufacturer in India | Shop Name Board by The Mediaverse',
  description: 'Leading shop name board manufacturer in India. Expert in ACP, GSB, Non-Lit boards across 20 cities. ✓ Free Quote ✓ Fast Installation. Call 9580088540',
  keywords: 'shop name board manufacturer, shop name board marketing, shop name board, ACP board, GSB board, 2d acp board, 3d acp board, shop boards, name board for shop, shop signage, shop name boards near me, best shop name board manufacturer India',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '#1 Shop Name Board Manufacturer in India | The Mediaverse',
    description: 'Leading shop name board manufacturer in India. Expert in ACP, GSB, Non-Lit boards across 20 cities. Free Quote & Fast Installation.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://shopnameboard.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://shopnameboard.com",
              "name": "Shop Name Board by The Mediaverse",
              "alternateName": "The Mediaverse",
              "url": "https://shopnameboard.com",
              "logo": "https://shopnameboard.com/logo.png",
              "image": "https://shopnameboard.com/logo.png",
              "description": "India's #1 shop name board manufacturer serving 20+ cities. Expert in ACP, GSB, and all types of signage solutions.",
              "email": "contact@themediaverse.in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "India"
              },
              "areaServed": [
                {"@type": "City", "name": "Mumbai"},
                {"@type": "City", "name": "Delhi"},
                {"@type": "City", "name": "Bangalore"},
                {"@type": "City", "name": "Hyderabad"},
                {"@type": "City", "name": "Chennai"},
                {"@type": "City", "name": "Kolkata"},
                {"@type": "City", "name": "Pune"},
                {"@type": "City", "name": "Ahmedabad"},
                {"@type": "City", "name": "Jaipur"},
                {"@type": "City", "name": "Surat"},
                {"@type": "City", "name": "Lucknow"},
                {"@type": "City", "name": "Indore"},
                {"@type": "City", "name": "Chandigarh"},
                {"@type": "City", "name": "Coimbatore"},
                {"@type": "City", "name": "Kochi"},
                {"@type": "City", "name": "Nagpur"},
                {"@type": "City", "name": "Bhubaneswar"},
                {"@type": "City", "name": "Visakhapatnam"},
                {"@type": "City", "name": "Guwahati"},
                {"@type": "City", "name": "Mysore"}
              ],
              "serviceType": [
                "2D ACP Board Manufacturing",
                "3D ACP Board Manufacturing",
                "GSB Board Manufacturing",
                "Non-Lit Board Manufacturing",
                "Arch Gate Manufacturing",
                "Fabric Light Box Manufacturing",
                "Lit Flange Board Manufacturing",
                "Non-Lit Flange Board Manufacturing"
              ],
              "priceRange": "₹₹",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9580088540",
                "contactType": "Customer Service",
                "email": "contact@themediaverse.in",
                "availableLanguage": ["English", "Hindi"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

