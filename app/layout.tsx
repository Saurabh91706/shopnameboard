import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '#1 Shop Name Board Manufacturer in India | 2D ACP, 3D ACP, GSB, Arch Gates | Shop Name Board by The Mediaverse',
  description: 'India\'s #1 Shop Name Board Manufacturer - Shop Name Board by The Mediaverse. Expert in 2D ACP Boards, 3D ACP Boards, GSB Boards, Non-Lit Boards, Arch Gates, Fabric Boxes, Lit/Non-Lit Flange Boards. Serving 20 cities across India. ✓ Free Quote ✓ 2 Year Warranty ✓ Fast Installation. Call 9580088540',
  keywords: 'shop name board manufacturer, shop name board marketing, shop name board, 2d acp board, 3d acp board, gsb board, arch gate, fabric box, lit flange board, non lit board, shop name boards Bangalore, shop name boards Mumbai, shop name boards Delhi, shop name boards Chennai, shop name boards Pune, shop name boards Kolkata, shop name boards Hyderabad, shop name boards Ahmedabad, shop name boards Jaipur, shop name boards Lucknow, shop name boards Indore, shop name boards Chandigarh, shop name boards Coimbatore, shop name boards Kochi, shop name boards Nagpur, shop name boards Bhubaneswar, shop name boards Visakhapatnam, shop name boards Guwahati, shop name boards Mysore, shop name boards Surat',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '#1 Shop Name Board Manufacturer in India | Shop Name Board by The Mediaverse',
    description: 'Leading shop name board manufacturer in India. 2D ACP, 3D ACP, GSB Boards, Arch Gates, Fabric Boxes. Serving 20 cities. Call 9580088540',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shop Name Board by The Mediaverse',
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
              "alternateName": "The Mediaverse Shop Name Board",
              "url": "https://shopnameboard.com",
              "logo": "https://shopnameboard.com/logo.png",
              "image": "https://shopnameboard.com/logo.png",
              "description": "India's #1 Shop Name Board Manufacturer. Expert in 2D ACP Boards, 3D ACP Boards, GSB Boards, Non-Lit Boards, Arch Gates, Fabric Boxes, Lit & Non-Lit Flange Boards. Serving 20 major cities across India with 2 year warranty and fast installation.",
              "email": "contact@themediaverse.in",
              "telephone": "+91-9580088540",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "India"
              },
              "areaServed": [
                {"@type": "City", "name": "Bangalore"},
                {"@type": "City", "name": "Mumbai"},
                {"@type": "City", "name": "Delhi"},
                {"@type": "City", "name": "Chennai"},
                {"@type": "City", "name": "Pune"},
                {"@type": "City", "name": "Kolkata"},
                {"@type": "City", "name": "Hyderabad"},
                {"@type": "City", "name": "Ahmedabad"},
                {"@type": "City", "name": "Jaipur"},
                {"@type": "City", "name": "Lucknow"}
              ],
              "serviceType": [
                "2D ACP Board Manufacturing",
                "3D ACP Board Manufacturing",
                "GSB Board Manufacturing",
                "Non-Lit Board Manufacturing",
                "Arch Gate Manufacturing",
                "Fabric Box Manufacturing",
                "Lit Flange Board Manufacturing",
                "Non-Lit Flange Board Manufacturing"
              ],
              "priceRange": "$$",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9580088540",
                "contactType": "Customer Service",
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

