import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop Name Boards Manufacturing & Marketing in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata | The Mediaverse',
  description: 'India\'s #1 Shop Name Boards Manufacturer & Marketing Company. Premium ACP 3D Boards, LED Signage, Fabric Light Boxes in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata. 14+ Signage Solutions. Free Quote. Fast Delivery.',
  keywords: 'shop name boards manufacturing, shop name boards marketing, shop name board manufacturer, signage company, ACP board manufacturer, LED sign board, 3D letter signage, shop hoarding, retail signage, corporate branding, shop name boards Bangalore, shop name boards Mumbai, shop name boards Delhi, shop name boards Chennai, shop name boards Pune, shop name boards Kolkata, shop name boards Hyderabad, shop name boards Ahmedabad, shop name boards Jaipur, shop name boards Lucknow, shop name boards Indore, shop name boards Patna, shop name boards Bhopal, shop name boards Visakhapatnam, shop name boards Surat, shop name boards Kanpur, shop name boards Nagpur, shop name boards Coimbatore, shop name boards Vadodara, shop name boards Ghaziabad',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Shop Name Boards Manufacturing & Marketing | The Mediaverse',
    description: 'Premium Shop Name Boards & Signage Solutions in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata. ACP 3D Boards, LED Signage, Fabric Light Boxes.',
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
              "name": "The Mediaverse - Shop Name Boards Manufacturing & Marketing",
              "alternateName": "The Mediaverse",
              "url": "https://shopnameboard.com",
              "logo": "https://shopnameboard.com/logo.png",
              "image": "https://shopnameboard.com/logo.png",
              "description": "India's #1 Shop Name Boards Manufacturer & Marketing Company. Premium ACP 3D Boards, LED Signage, Fabric Light Boxes in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata. 14+ Signage Solutions.",
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
                "Shop Name Boards Manufacturing",
                "Shop Name Boards Marketing",
                "ACP 3D Board Manufacturing",
                "LED Signage Manufacturing",
                "Fabric Light Box Manufacturing",
                "Retail Signage Solutions",
                "Corporate Branding Solutions"
              ],
              "priceRange": "$$",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
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

