'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

export default function CitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const cities = [
    {
      name: 'Bangalore',
      slug: 'bangalore',
      landmarks: 'MG Road, Koramangala, Electronic City, Whitefield, Indiranagar, Jayanagar, Malleswaram, Basavanagudi',
      description: 'Premium shop name boards manufacturer in Bangalore. Expert ACP 3D Boards, LED Signage, Fabric Light Boxes. Fast delivery across Bangalore.',
      detailedDescription: 'Bangalore, India\'s Silicon Valley, demands premium shop name boards that reflect the city\'s modern business landscape. The Mediaverse specializes in shop name boards manufacturing and shop name boards marketing in Bangalore, serving high-traffic commercial areas from MG Road to Electronic City. Our Bangalore clients benefit from weather-resistant ACP 3D Boards designed for the city\'s moderate climate, premium LED Signage for maximum visibility in bustling IT corridors, and modern Fabric Light Boxes for retail spaces. We understand Bangalore\'s unique retail ecosystem, from traditional markets in Basavanagudi to modern shopping malls in Whitefield, and provide tailored signage solutions for each.',
      services: [
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Bangalore', description: 'Premium 3D acrylic letter signage with LED illumination, perfect for high-visibility locations in Bangalore\'s commercial districts.' },
        { name: 'LED Signage', keyword: 'LED Signage Bangalore', description: 'Energy-efficient LED displays with Samsung/OSRAM-grade modules, ideal for Bangalore\'s modern retail and IT corridors.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Bangalore', description: 'Ultra-thin tension fabric systems with tool-free graphic changes, perfect for Bangalore\'s shopping malls and retail spaces.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Bangalore', description: 'Ultra-bright backlit signage for maximum visibility in Bangalore\'s busy commercial areas and high-traffic locations.' },
        { name: 'Flange Board', keyword: 'Flange Board Bangalore', description: 'Double-sided projecting signs for two-way visibility, ideal for Bangalore\'s market lanes and side-street businesses.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Bangalore involves precision engineering with premium materials. We use 3MM thick acrylic for 3D letters, weather-resistant ACP panels, and industrial-grade LED modules. Our Bangalore manufacturing facility ensures fast turnaround times of 5-7 days, with expert installation across all areas including Koramangala, Indiranagar, and Jayanagar.',
      marketing: 'Shop name boards marketing in Bangalore requires strategic placement analysis for maximum visibility. We analyze foot traffic patterns in areas like MG Road and Electronic City, optimize signage placement for brand recall, and provide color-correct LED lighting for enhanced visibility. Our marketing expertise helps Bangalore businesses stand out in competitive commercial districts.',
      outshop: 'Outshop branding solutions in Bangalore include premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and grand 3D Arch Gates for flagship locations. Our outshop branding in Bangalore is designed to withstand the city\'s moderate climate while maximizing brand visibility in commercial hubs.',
      inshop: 'Inshop branding in Bangalore features modern Fabric Light Boxes for shopping malls, energy-efficient LED Clip-ons for retail stores, and premium Standees for product promotion. Our inshop branding solutions enhance customer experience in Bangalore\'s modern retail spaces, from luxury malls to traditional markets.',
    },
    {
      name: 'Mumbai',
      slug: 'mumbai',
      landmarks: 'Linking Road, Colaba, Bandra, Andheri, Powai, Juhu, Vashi, Kurla, Dadar, Borivali',
      description: 'Leading shop name boards manufacturing company in Mumbai. Professional signage solutions for retail stores, shops, and businesses.',
      detailedDescription: 'Mumbai, India\'s financial capital, requires shop name boards that can withstand coastal humidity while maintaining premium aesthetics. The Mediaverse excels in shop name boards manufacturing and shop name boards marketing in Mumbai, serving prime commercial locations from Colaba to Borivali. Our Mumbai signage solutions are specifically designed for the city\'s humid coastal climate, with weather-resistant ACP panels and corrosion-resistant hardware. We serve high-traffic retail areas like Linking Road in Bandra, commercial hubs in Andheri, and premium locations in Colaba, providing signage that reflects Mumbai\'s dynamic business environment.',
      services: [
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Mumbai', description: 'Ultra-bright backlit signage designed for Mumbai\'s humid coastal climate, perfect for high-visibility locations like Linking Road and Colaba.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Mumbai', description: 'Premium 3D acrylic signage with weather-resistant ACP base, ideal for Mumbai\'s coastal environment and commercial districts.' },
        { name: 'LED Signage', keyword: 'LED Signage Mumbai', description: 'Energy-efficient LED displays with premium modules, designed for Mumbai\'s bustling retail areas and shopping streets.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Mumbai', description: 'Modern tension fabric systems for Mumbai\'s shopping malls and retail spaces, with easy graphic replacement capabilities.' },
        { name: 'Arch Gate', keyword: 'Arch Gate Mumbai', description: 'Grand entrance signage for flagship stores in Mumbai, creating imposing facades for premium retail locations.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Mumbai requires special attention to coastal climate conditions. We use corrosion-resistant materials, weather-sealed LED modules, and premium ACP panels that withstand Mumbai\'s humidity. Our manufacturing process ensures fast delivery across all Mumbai areas, from South Mumbai to the suburbs, with installation expertise in prime commercial locations.',
      marketing: 'Shop name boards marketing in Mumbai focuses on maximizing visibility in high-traffic areas like Linking Road, Colaba, and Bandra. We provide strategic placement analysis, optimize signage for Mumbai\'s unique retail landscape, and ensure brand positioning that stands out in competitive commercial districts. Our marketing services help Mumbai businesses capture attention in the city\'s bustling retail environment.',
      outshop: 'Outshop branding in Mumbai features weather-resistant ACP 3D Boards designed for coastal humidity, premium Glow Sign Boards for maximum visibility, and grand Arch Gates for flagship locations. Our outshop branding solutions are engineered to withstand Mumbai\'s humid climate while maintaining premium aesthetics in prime commercial areas.',
      inshop: 'Inshop branding solutions in Mumbai include ultra-thin Fabric Light Boxes for shopping malls, energy-efficient LED Clip-ons for retail stores, and modern Standees for product displays. Our inshop branding enhances customer experience in Mumbai\'s diverse retail spaces, from luxury malls to traditional markets.',
    },
    {
      name: 'Delhi',
      slug: 'delhi',
      landmarks: 'Connaught Place, Karol Bagh, Lajpat Nagar, Saket, Dwarka, Rohini, Janakpuri, Rajouri Garden, Greater Kailash',
      description: 'Top-rated shop name boards manufacturer in Delhi. Custom ACP boards, LED signage, and comprehensive branding solutions.',
      detailedDescription: 'Delhi, India\'s capital, experiences extreme temperature variations requiring robust shop name boards. The Mediaverse specializes in shop name boards manufacturing and shop name boards marketing in Delhi, serving commercial hubs from Connaught Place to Greater Kailash. Our Delhi signage solutions are engineered for extreme weather conditions, with temperature-resistant materials and premium LED modules that perform in both scorching summers and cold winters. We serve traditional markets like Karol Bagh, modern shopping districts in Saket, and commercial areas across Delhi NCR.',
      services: [
        { name: 'Non-Lit Board', keyword: 'Non-Lit Board Delhi', description: 'Cost-effective static signage perfect for Delhi\'s traditional markets and areas with strong ambient lighting, ideal for Karol Bagh and Lajpat Nagar.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Delhi', description: 'Premium 3D acrylic signage with temperature-resistant materials, designed for Delhi\'s extreme climate variations in commercial areas.' },
        { name: 'LED Signage', keyword: 'LED Signage Delhi', description: 'High-performance LED displays with weather-resistant modules, perfect for Delhi\'s commercial hubs like Connaught Place and Saket.' },
        { name: 'Flange Board', keyword: 'Flange Board Delhi', description: 'Double-sided projecting signs for maximum visibility, ideal for Delhi\'s market lanes and side-street businesses.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Delhi', description: 'Ultra-bright backlit signage for high-visibility locations in Delhi\'s commercial districts and shopping areas.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Delhi requires materials that withstand extreme temperature variations. We use temperature-resistant ACP panels, weather-sealed LED modules, and premium acrylic that maintains clarity in Delhi\'s harsh climate. Our manufacturing ensures fast delivery across all Delhi areas, from Old Delhi markets to modern commercial hubs, with expert installation in prime locations.',
      marketing: 'Shop name boards marketing in Delhi focuses on strategic positioning in high-traffic commercial areas. We analyze visibility patterns in locations like Connaught Place and Karol Bagh, optimize signage placement for maximum brand recall, and provide solutions that stand out in Delhi\'s competitive retail landscape. Our marketing expertise helps Delhi businesses capture attention in traditional markets and modern shopping districts.',
      outshop: 'Outshop branding in Delhi features premium ACP 3D Boards designed for extreme temperatures, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust Flange Boards for market lanes. Our outshop branding solutions are engineered to withstand Delhi\'s climate extremes while maximizing brand visibility in commercial hubs.',
      inshop: 'Inshop branding solutions in Delhi include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Delhi\'s diverse retail spaces, from luxury malls to traditional markets.',
    },
    {
      name: 'Chennai',
      slug: 'chennai',
      landmarks: 'T Nagar, Anna Nagar, Adyar, OMR, Velachery, Porur, Ambattur, Chrompet, Tambaram',
      description: 'Expert shop name boards manufacturing in Chennai. Premium signage solutions with fast installation and competitive pricing.',
      detailedDescription: 'Chennai, the cultural capital of South India, requires shop name boards that combine traditional aesthetics with modern functionality. The Mediaverse excels in shop name boards manufacturing and shop name boards marketing in Chennai, serving commercial areas from T Nagar to OMR. Our Chennai signage solutions are designed for the city\'s tropical climate, with humidity-resistant materials and premium LED modules. We serve traditional shopping areas like T Nagar, modern IT corridors along OMR, and commercial hubs across Chennai.',
      services: [
        { name: 'ACP 2D Board', keyword: 'ACP 2D Board Chennai', description: 'Cost-effective flat signage perfect for Chennai\'s traditional markets and commercial areas, ideal for T Nagar and Anna Nagar.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Chennai', description: 'Modern tension fabric systems for Chennai\'s shopping malls and retail spaces, with easy graphic replacement for seasonal promotions.' },
        { name: 'LED Signage', keyword: 'LED Signage Chennai', description: 'Energy-efficient LED displays designed for Chennai\'s tropical climate, perfect for commercial areas and IT corridors.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Chennai', description: 'Premium 3D acrylic signage with humidity-resistant materials, ideal for Chennai\'s high-visibility commercial locations.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Chennai', description: 'Ultra-bright backlit signage for maximum visibility in Chennai\'s bustling commercial districts and shopping areas.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Chennai requires materials that withstand tropical humidity. We use humidity-resistant ACP panels, weather-sealed LED modules, and premium acrylic that maintains clarity in Chennai\'s climate. Our manufacturing ensures fast delivery across all Chennai areas, from traditional markets to modern IT corridors, with expert installation in prime commercial locations.',
      marketing: 'Shop name boards marketing in Chennai focuses on maximizing visibility in high-traffic commercial areas. We analyze foot traffic patterns in locations like T Nagar and OMR, optimize signage placement for brand recall, and provide solutions that stand out in Chennai\'s competitive retail landscape. Our marketing expertise helps Chennai businesses capture attention in traditional markets and modern commercial districts.',
      outshop: 'Outshop branding in Chennai features premium ACP 3D Boards designed for tropical humidity, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions are engineered to withstand Chennai\'s climate while maximizing brand visibility in commercial hubs.',
      inshop: 'Inshop branding solutions in Chennai include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Chennai\'s diverse retail spaces, from luxury malls to traditional markets.',
    },
    {
      name: 'Pune',
      slug: 'pune',
      landmarks: 'FC Road, Koregaon Park, Hinjewadi, Viman Nagar, Kothrud, Aundh, Baner, Hadapsar, Pimpri',
      description: 'Professional shop name boards manufacturer in Pune. Quality ACP 3D Boards, LED displays, and custom signage solutions.',
      detailedDescription: 'Pune, the Oxford of the East, combines traditional Marathi culture with modern IT development. The Mediaverse specializes in shop name boards manufacturing and shop name boards marketing in Pune, serving diverse commercial areas from FC Road to Hinjewadi. Our Pune signage solutions cater to both traditional markets and modern IT corridors, with premium materials and expert installation. We serve educational hubs, IT parks, traditional markets, and modern shopping districts across Pune.',
      services: [
        { name: 'LED Signage', keyword: 'LED Signage Pune', description: 'Energy-efficient LED displays perfect for Pune\'s IT corridors and modern commercial areas, ideal for Hinjewadi and Viman Nagar.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Pune', description: 'Premium 3D acrylic signage for high-visibility locations in Pune\'s commercial districts and shopping areas.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Pune', description: 'Modern tension fabric systems for Pune\'s shopping malls and retail spaces, with easy graphic replacement capabilities.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Pune', description: 'Ultra-bright backlit signage for maximum visibility in Pune\'s bustling commercial areas like FC Road and Koregaon Park.' },
        { name: 'Flange Board', keyword: 'Flange Board Pune', description: 'Double-sided projecting signs for two-way visibility, ideal for Pune\'s market lanes and side-street businesses.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Pune requires versatility to serve both traditional markets and modern IT corridors. We use premium materials suitable for Pune\'s moderate climate, with fast manufacturing and expert installation across all areas. Our Pune facility ensures quality signage for educational institutions, IT companies, retail stores, and commercial establishments.',
      marketing: 'Shop name boards marketing in Pune focuses on strategic positioning for diverse business types. We provide solutions for IT corridors in Hinjewadi, traditional markets, educational areas, and modern shopping districts. Our marketing expertise helps Pune businesses stand out in competitive commercial areas while maintaining cultural sensitivity.',
      outshop: 'Outshop branding in Pune features premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions maximize brand visibility in Pune\'s diverse commercial landscape.',
      inshop: 'Inshop branding solutions in Pune include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Pune\'s diverse retail spaces.',
    },
    {
      name: 'Kolkata',
      slug: 'kolkata',
      landmarks: 'Park Street, Salt Lake, New Market, Howrah, Sealdah, Gariahat, Esplanade, Ballygunge, Alipore',
      description: 'Reliable shop name boards manufacturing company in Kolkata. End-to-end signage solutions from design to installation.',
      detailedDescription: 'Kolkata, the City of Joy, blends colonial heritage with modern commerce. The Mediaverse excels in shop name boards manufacturing and shop name boards marketing in Kolkata, serving commercial areas from Park Street to Salt Lake. Our Kolkata signage solutions respect the city\'s heritage while incorporating modern materials and technology. We serve traditional markets, modern shopping malls, commercial hubs, and heritage business districts across Kolkata.',
      services: [
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Kolkata', description: 'Premium 3D acrylic signage perfect for Kolkata\'s heritage commercial areas and modern shopping districts, ideal for Park Street and Salt Lake.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Kolkata', description: 'Modern tension fabric systems for Kolkata\'s shopping malls and retail spaces, with easy graphic replacement for seasonal promotions.' },
        { name: 'LED Signage', keyword: 'LED Signage Kolkata', description: 'Energy-efficient LED displays designed for Kolkata\'s humid climate, perfect for commercial areas and shopping districts.' },
        { name: 'Non-Lit Board', keyword: 'Non-Lit Board Kolkata', description: 'Cost-effective static signage perfect for Kolkata\'s traditional markets and areas with strong ambient lighting, ideal for New Market.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Kolkata', description: 'Ultra-bright backlit signage for maximum visibility in Kolkata\'s bustling commercial districts and heritage shopping areas.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Kolkata requires materials that withstand humid conditions. We use humidity-resistant ACP panels, weather-sealed LED modules, and premium materials suitable for Kolkata\'s climate. Our manufacturing ensures fast delivery across all Kolkata areas, from heritage markets to modern commercial hubs, with expert installation in prime locations.',
      marketing: 'Shop name boards marketing in Kolkata focuses on balancing heritage aesthetics with modern functionality. We provide solutions for traditional markets like New Market, modern shopping areas in Salt Lake, and heritage commercial districts. Our marketing expertise helps Kolkata businesses maintain cultural relevance while maximizing brand visibility.',
      outshop: 'Outshop branding in Kolkata features premium ACP 3D Boards designed for humid conditions, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions respect Kolkata\'s heritage while incorporating modern materials and technology.',
      inshop: 'Inshop branding solutions in Kolkata include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Kolkata\'s diverse retail spaces, from heritage markets to modern malls.',
    },
    {
      name: 'Hyderabad',
      slug: 'hyderabad',
      landmarks: 'Banjara Hills, Hitech City, Jubilee Hills, Secunderabad, Gachibowli, Kukatpally, Miyapur, Kondapur, Madhapur',
      description: 'Trusted shop name boards manufacturer in Hyderabad. Premium quality signage with expert installation and maintenance.',
      detailedDescription: 'Hyderabad, the City of Pearls, is India\'s major IT and pharma hub. The Mediaverse specializes in shop name boards manufacturing and shop name boards marketing in Hyderabad, serving IT corridors from Hitech City to Gachibowli. Our Hyderabad signage solutions cater to modern IT companies, traditional markets, luxury retail, and commercial establishments. We serve premium locations in Banjara Hills, IT corridors in Hitech City, and commercial areas across Hyderabad.',
      services: [
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Hyderabad', description: 'Premium 3D acrylic signage perfect for Hyderabad\'s IT corridors and luxury retail areas, ideal for Hitech City and Banjara Hills.' },
        { name: 'LED Signage', keyword: 'LED Signage Hyderabad', description: 'Energy-efficient LED displays designed for Hyderabad\'s modern commercial areas and IT corridors, perfect for Gachibowli and Kondapur.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Hyderabad', description: 'Modern tension fabric systems for Hyderabad\'s shopping malls and retail spaces, with easy graphic replacement capabilities.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Hyderabad', description: 'Ultra-bright backlit signage for maximum visibility in Hyderabad\'s bustling commercial districts and IT corridors.' },
        { name: 'Arch Gate', keyword: 'Arch Gate Hyderabad', description: 'Grand entrance signage for flagship stores in Hyderabad, creating imposing facades for premium retail locations.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Hyderabad requires materials suitable for the city\'s moderate climate. We use premium ACP panels, high-quality LED modules, and materials that maintain clarity in Hyderabad\'s conditions. Our manufacturing ensures fast delivery across all Hyderabad areas, from IT corridors to traditional markets, with expert installation in prime locations.',
      marketing: 'Shop name boards marketing in Hyderabad focuses on serving diverse business types from IT companies to luxury retail. We provide solutions for IT corridors in Hitech City, premium locations in Banjara Hills, and commercial areas across Hyderabad. Our marketing expertise helps Hyderabad businesses stand out in competitive commercial districts.',
      outshop: 'Outshop branding in Hyderabad features premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and grand Arch Gates for flagship locations. Our outshop branding solutions maximize brand visibility in Hyderabad\'s diverse commercial landscape.',
      inshop: 'Inshop branding solutions in Hyderabad include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Hyderabad\'s diverse retail spaces.',
    },
    {
      name: 'Ahmedabad',
      slug: 'ahmedabad',
      landmarks: 'CG Road, SG Highway, Satellite, Maninagar, Vastrapur, Navrangpura, Paldi, Bopal, Gota',
      description: 'Leading shop name boards manufacturing in Ahmedabad. Custom designs, premium materials, and professional installation.',
      detailedDescription: 'Ahmedabad, Gujarat\'s largest city, is a major commercial and industrial hub. The Mediaverse excels in shop name boards manufacturing and shop name boards marketing in Ahmedabad, serving commercial areas from CG Road to SG Highway. Our Ahmedabad signage solutions cater to traditional businesses, modern retail, industrial establishments, and commercial districts. We serve prime locations in CG Road, modern areas along SG Highway, and commercial hubs across Ahmedabad.',
      services: [
        { name: 'ACP 2D Board', keyword: 'ACP 2D Board Ahmedabad', description: 'Cost-effective flat signage perfect for Ahmedabad\'s traditional markets and commercial areas, ideal for CG Road and Maninagar.' },
        { name: 'LED Signage', keyword: 'LED Signage Ahmedabad', description: 'Energy-efficient LED displays designed for Ahmedabad\'s commercial areas and modern retail districts, perfect for SG Highway and Satellite.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Ahmedabad', description: 'Modern tension fabric systems for Ahmedabad\'s shopping malls and retail spaces, with easy graphic replacement capabilities.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Ahmedabad', description: 'Premium 3D acrylic signage for high-visibility locations in Ahmedabad\'s commercial districts and shopping areas.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Ahmedabad', description: 'Ultra-bright backlit signage for maximum visibility in Ahmedabad\'s bustling commercial areas and retail districts.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Ahmedabad requires materials suitable for the city\'s climate. We use premium ACP panels, high-quality LED modules, and materials that maintain clarity in Ahmedabad\'s conditions. Our manufacturing ensures fast delivery across all Ahmedabad areas, from traditional markets to modern commercial hubs, with expert installation in prime locations.',
      marketing: 'Shop name boards marketing in Ahmedabad focuses on serving diverse business types from traditional markets to modern retail. We provide solutions for commercial areas like CG Road, modern districts along SG Highway, and traditional markets. Our marketing expertise helps Ahmedabad businesses stand out in competitive commercial districts.',
      outshop: 'Outshop branding in Ahmedabad features premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions maximize brand visibility in Ahmedabad\'s diverse commercial landscape.',
      inshop: 'Inshop branding solutions in Ahmedabad include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Ahmedabad\'s diverse retail spaces.',
    },
    {
      name: 'Jaipur',
      slug: 'jaipur',
      landmarks: 'MI Road, C Scheme, Vaishali Nagar, Malviya Nagar, Tonk Road, Raja Park, Bapu Nagar, Mansarovar',
      description: 'Expert shop name boards manufacturer in Jaipur. Quality signage solutions for shops, retail stores, and businesses.',
      detailedDescription: 'Jaipur, the Pink City, is Rajasthan\'s capital and a major tourist destination. The Mediaverse specializes in shop name boards manufacturing and shop name boards marketing in Jaipur, serving commercial areas from MI Road to modern residential-commercial zones. Our Jaipur signage solutions blend traditional aesthetics with modern functionality, serving tourist areas, traditional markets, modern shopping districts, and commercial hubs. We understand Jaipur\'s unique retail ecosystem and provide tailored signage solutions.',
      services: [
        { name: 'LED Signage', keyword: 'LED Signage Jaipur', description: 'Energy-efficient LED displays perfect for Jaipur\'s tourist areas and commercial districts, ideal for MI Road and C Scheme.' },
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Jaipur', description: 'Premium 3D acrylic signage for high-visibility locations in Jaipur\'s commercial districts and tourist shopping areas.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Jaipur', description: 'Modern tension fabric systems for Jaipur\'s shopping malls and retail spaces, with easy graphic replacement for seasonal promotions.' },
        { name: 'Non-Lit Board', keyword: 'Non-Lit Board Jaipur', description: 'Cost-effective static signage perfect for Jaipur\'s traditional markets and areas with strong ambient lighting, ideal for traditional bazaars.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Jaipur', description: 'Ultra-bright backlit signage for maximum visibility in Jaipur\'s bustling commercial districts and tourist areas.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Jaipur requires balancing traditional aesthetics with modern functionality. We use premium materials suitable for Jaipur\'s climate, with fast manufacturing and expert installation across all areas. Our Jaipur facility ensures quality signage for tourist areas, traditional markets, modern shopping districts, and commercial establishments.',
      marketing: 'Shop name boards marketing in Jaipur focuses on serving both tourist areas and local commercial districts. We provide solutions for tourist shopping areas like MI Road, traditional markets, and modern commercial zones. Our marketing expertise helps Jaipur businesses stand out while maintaining cultural relevance.',
      outshop: 'Outshop branding in Jaipur features premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions blend traditional aesthetics with modern materials and technology.',
      inshop: 'Inshop branding solutions in Jaipur include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Jaipur\'s diverse retail spaces.',
    },
    {
      name: 'Lucknow',
      slug: 'lucknow',
      landmarks: 'Hazratganj, Gomti Nagar, Alambagh, Indira Nagar, Aminabad, Chowk, Mahanagar, Aashiyana',
      description: 'Professional shop name boards manufacturing company in Lucknow. Fast delivery, competitive pricing, expert installation.',
      detailedDescription: 'Lucknow, the City of Nawabs, is Uttar Pradesh\'s capital with rich cultural heritage. The Mediaverse excels in shop name boards manufacturing and shop name boards marketing in Lucknow, serving commercial areas from Hazratganj to modern residential-commercial zones. Our Lucknow signage solutions respect the city\'s heritage while incorporating modern materials and technology. We serve traditional markets, modern shopping areas, commercial hubs, and heritage business districts across Lucknow.',
      services: [
        { name: 'ACP 3D Board', keyword: 'ACP 3D Board Lucknow', description: 'Premium 3D acrylic signage perfect for Lucknow\'s heritage commercial areas and modern shopping districts, ideal for Hazratganj and Gomti Nagar.' },
        { name: 'Fabric Light Box', keyword: 'Fabric Light Box Lucknow', description: 'Modern tension fabric systems for Lucknow\'s shopping malls and retail spaces, with easy graphic replacement capabilities.' },
        { name: 'LED Signage', keyword: 'LED Signage Lucknow', description: 'Energy-efficient LED displays designed for Lucknow\'s commercial areas and shopping districts, perfect for modern retail spaces.' },
        { name: 'Glow Sign Board', keyword: 'Glow Sign Board Lucknow', description: 'Ultra-bright backlit signage for maximum visibility in Lucknow\'s bustling commercial districts and heritage shopping areas.' },
        { name: 'Non-Lit Board', keyword: 'Non-Lit Board Lucknow', description: 'Cost-effective static signage perfect for Lucknow\'s traditional markets and areas with strong ambient lighting, ideal for Aminabad and Chowk.' },
      ],
      manufacturing: 'Shop name boards manufacturing in Lucknow requires materials suitable for the city\'s climate. We use premium ACP panels, high-quality LED modules, and materials that maintain clarity in Lucknow\'s conditions. Our manufacturing ensures fast delivery across all Lucknow areas, from traditional markets to modern commercial hubs, with expert installation in prime locations.',
      marketing: 'Shop name boards marketing in Lucknow focuses on balancing heritage aesthetics with modern functionality. We provide solutions for traditional markets like Aminabad, modern shopping areas in Gomti Nagar, and heritage commercial districts. Our marketing expertise helps Lucknow businesses maintain cultural relevance while maximizing brand visibility.',
      outshop: 'Outshop branding in Lucknow features premium ACP 3D Boards for exterior facades, weather-resistant Glow Sign Boards for high-visibility storefronts, and robust signage for commercial areas. Our outshop branding solutions respect Lucknow\'s heritage while incorporating modern materials and technology.',
      inshop: 'Inshop branding solutions in Lucknow include modern Fabric Light Boxes for shopping malls, energy-efficient LED displays for retail stores, and premium Standees for product promotion. Our inshop branding enhances customer experience in Lucknow\'s diverse retail spaces.',
    },
  ]

  const faqs = [
    {
      question: 'What is shop name boards manufacturing and where can I get the best shop name boards in Bangalore, Mumbai, Delhi?',
      answer: 'Shop name boards manufacturing is the process of creating custom signage solutions for retail stores, shops, and businesses using premium materials like Aluminium Composite Panel (ACP), acrylic, LED modules, and fabric. The Mediaverse is India\'s #1 shop name boards manufacturer serving Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and 50+ cities. We specialize in ACP 3D Boards, LED Signage, Fabric Light Boxes, and 14+ premium signage solutions with fast delivery and expert installation. Our manufacturing process involves precision engineering with 3MM thick acrylic for 3D letters, weather-resistant ACP panels, and industrial-grade LED modules.',
    },
    {
      question: 'How long does shop name board manufacturing and installation take in different cities?',
      answer: 'Shop name board manufacturing typically takes 5-7 business days for standard designs, while custom 3D LED boards may take 10-14 days. Installation is completed within 1-2 days after manufacturing. The Mediaverse offers fast-track manufacturing (3-5 days) for urgent projects in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and other cities. We provide end-to-end service from design to installation, ensuring fast delivery across all major cities in India.',
    },
    {
      question: 'What are the best materials for shop name boards manufacturing?',
      answer: 'The best materials for shop name boards manufacturing include: 1) Aluminium Composite Panel (ACP) - weather-resistant, durable, ideal for outdoor signage; 2) 3D Acrylic Letters with LED modules - premium look with face-lit illumination; 3) Fabric Light Boxes - ultra-thin, tool-free graphic changes; 4) LED modules (Samsung/OSRAM grade) - energy-efficient, long-lasting; 5) Stainless Steel frames - rust-proof, structural support. The Mediaverse uses only premium-grade materials for all shop name boards manufacturing projects, ensuring durability and premium aesthetics.',
    },
    {
      question: 'What is the difference between shop name boards marketing and manufacturing?',
      answer: 'Shop name boards manufacturing refers to the physical creation of signage using materials like ACP, LED, acrylic, and fabric. Shop name boards marketing involves strategic placement, design optimization for maximum visibility, brand positioning, and ensuring your signage attracts customers effectively. The Mediaverse provides both services - we manufacture premium shop name boards and offer marketing expertise to maximize your brand visibility in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and nationwide. Our marketing services include strategic placement analysis, color-correct LED lighting optimization, and brand recall enhancement.',
    },
    {
      question: 'What is outshop branding and how is it different from inshop branding?',
      answer: 'Outshop branding refers to exterior signage solutions like ACP 3D Boards, Glow Sign Boards, 3D Arch Gates, and Flange Boards designed for outdoor visibility and weather resistance. Inshop branding includes interior signage like Fabric Light Boxes, LED Clip-ons, Standees, and Dropdowns for indoor retail spaces. The Mediaverse specializes in both outshop and inshop branding solutions across 50+ cities. Outshop branding maximizes street visibility and brand recall, while inshop branding enhances customer experience and drives impulse sales in retail environments.',
    },
    {
      question: 'Which cities does The Mediaverse serve for shop name boards manufacturing?',
      answer: 'The Mediaverse serves 50+ cities across India for shop name boards manufacturing and marketing, including: Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, Hyderabad, Ahmedabad, Jaipur, Lucknow, Indore, Patna, Bhopal, Visakhapatnam, Surat, Kanpur, Nagpur, Coimbatore, Vadodara, Ghaziabad, and many more. We offer nationwide delivery and installation services with local expertise in each city, ensuring fast turnaround times and expert installation.',
    },
    {
      question: 'What types of shop name boards do you manufacture?',
      answer: 'The Mediaverse manufactures 14+ types of shop name boards: 1) ACP 3D Boards (Lit) - Premium 3D acrylic letters with LED; 2) ACP 2D Boards - Flat, cost-effective signage; 3) Fabric Light Boxes - Modern, tool-free graphic changes; 4) LED Clip-ons - Ultra-slim, energy-efficient; 5) Flange Boards (2D & 3D) - Double-sided projecting signs; 6) Arch Gates (2D & 3D) - Grand entrance signage; 7) Glow Sign Boards - Ultra-bright backlit signage; 8) Non-Lit Boards - Budget-friendly static displays. All available for manufacturing in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and nationwide.',
    },
    {
      question: 'Do you provide shop name boards marketing services along with manufacturing?',
      answer: 'Yes! The Mediaverse provides comprehensive shop name boards marketing services including: strategic placement analysis, design optimization for maximum visibility, brand positioning, competitor analysis, and marketing consultation. We combine manufacturing expertise with marketing strategy to ensure your shop name boards in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, or any city effectively attract customers and enhance brand recall. Our marketing services help optimize signage placement, color-correct LED lighting, and brand positioning for maximum impact.',
    },
    {
      question: 'What makes ACP 3D Boards the best choice for shop name boards?',
      answer: 'ACP 3D Boards are the industry standard for prestige signage because they feature individual, laser-cut acrylic letters (3"-5" depth) mounted on a solid Aluminium Composite Panel (ACP) base, internally illuminated by industrial-grade LED modules. This creates a stunning face-lit effect with high visual depth, excellent night-time brand recall, and customizable glow (color and intensity). ACP 3D Boards are weather-resistant, durable, and perfect for high-visibility locations in all major cities.',
    },
    {
      question: 'How do I choose between LED Signage and Non-Lit Boards for my shop?',
      answer: 'LED Signage is ideal for maximum visibility, especially in low-light conditions, and creates a premium, modern look. It\'s perfect for high-traffic commercial areas and businesses that operate during evening hours. Non-Lit Boards are cost-effective, require no electricity, and are ideal for areas with strong ambient street lighting or tight budgets. The Mediaverse can help you choose the right solution based on your location, budget, and visibility requirements in your city.',
    },
    {
      question: 'How much does shop name board manufacturing cost in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata?',
      answer: 'Shop name board manufacturing costs vary based on size, material (ACP, LED, Fabric), design complexity, and installation requirements. At The Mediaverse, we offer competitive pricing for shop name boards in Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and all major Indian cities. Contact us for a free quote tailored to your city and specific requirements. We provide transparent pricing with no hidden costs.',
    },
    {
      question: 'What is a 3D Flange Board and why should I use it for my shop?',
      answer: 'A 3D Flange Board, also known as a "Lollipop Board," is a double-sided sign mounted perpendicular to your wall. Its key benefit is providing two-way visibility, effectively capturing traffic approaching from both directions, which is ideal for businesses in busy market lanes. The 3D element adds depth and flair, making your shop stand out. The Mediaverse manufactures premium 3D Flange Boards with LED illumination for maximum visibility in all major cities.',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Main Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="gradient-text">Shop Name Boards Manufacturing & Marketing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium mb-4"
          >
            Serving 50+ Cities Across India
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            The Mediaverse is India's #1 shop name boards manufacturer and marketing company, providing premium signage solutions in{' '}
            <strong>Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, Hyderabad, Ahmedabad, Jaipur, Lucknow</strong> and 40+ more cities.
            We specialize in <strong>shop name boards manufacturing</strong> and <strong>shop name boards marketing</strong> with fast delivery and expert installation.
          </motion.p>
        </motion.div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cities.map((city, index) => {
            const isExpanded = selectedCity === city.name
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                whileHover={!isExpanded ? { y: -8, transition: { duration: 0.2 } } : {}}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'shadow-2xl md:col-span-2 lg:col-span-3 border-2 border-red-200' 
                    : 'border border-gray-200 hover:border-red-300 hover:shadow-xl'
                }`}
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

                {/* Compact View */}
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-4">
                      Shop Name Boards Manufacturing & Marketing
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    {city.description}
                  </p>

                  {/* Services Preview */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {city.services.slice(0, 3).map((service, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-50 text-gray-700 px-3 py-1.5 rounded-md font-medium border border-gray-200"
                        >
                          {service.name}
                        </span>
                      ))}
                      {city.services.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md font-medium border border-gray-200">
                          +{city.services.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Areas Preview */}
                  <div className="mb-5 pb-5 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Service Areas</p>
                    <p className="text-sm text-gray-600">
                      {city.landmarks.split(',').slice(0, 3).join(', ')}
                      {city.landmarks.split(',').length > 3 && (
                        <span className="text-gray-500"> and more</span>
                      )}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/contact?city=${city.slug}`}
                      className="flex-1 text-center bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors duration-200"
                    >
                      Get Quote
                    </Link>
                    <button
                      onClick={() => setSelectedCity(isExpanded ? null : city.name)}
                      className="flex-1 text-center bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors duration-200 border border-gray-200"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-200 space-y-8">
                      {/* Detailed Description */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">About {city.name}</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {city.detailedDescription}
                        </p>
                      </div>

                      {/* All Services */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">All Services in {city.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {city.services.map((service, i) => (
                            <div
                              key={i}
                              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-red-300 hover:bg-red-50/30 transition-all duration-200"
                            >
                              <div className="font-semibold text-gray-900 mb-2">{service.name}</div>
                              <div className="text-sm text-gray-600 leading-relaxed">{service.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Manufacturing & Marketing */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                          <h4 className="text-base font-bold text-gray-900 mb-3">Manufacturing</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{city.manufacturing}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                          <h4 className="text-base font-bold text-gray-900 mb-3">Marketing</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{city.marketing}</p>
                        </div>
                      </div>

                      {/* Outshop & Inshop Branding */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                          <h4 className="text-base font-bold text-gray-900 mb-3">Outshop Branding</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{city.outshop}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                          <h4 className="text-base font-bold text-gray-900 mb-3">Inshop Branding</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{city.inshop}</p>
                        </div>
                      </div>

                      {/* All Service Areas */}
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-3">Complete Service Areas</h4>
                        <p className="text-sm text-gray-700">{city.landmarks}</p>
                      </div>

                      {/* Expanded Service Tags */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Keywords</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            `Shop Name Boards ${city.name}`,
                            `Signage ${city.name}`,
                            `ACP Board ${city.name}`,
                            `LED Signage ${city.name}`,
                            `Outshop Branding ${city.name}`,
                            `Inshop Branding ${city.name}`
                          ].map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md font-medium border border-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons in Expanded View */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href={`/contact?city=${city.slug}`}
                            className="flex-1 text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                          >
                            Get Quote for {city.name}
                          </Link>
                          <button
                            onClick={() => setSelectedCity(null)}
                            className="flex-1 text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 border border-gray-200"
                          >
                            Show Less
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Service Definitions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
            Shop Name Boards Manufacturing & Marketing Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Outshop Branding */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Outshop Branding Solutions
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>What is Outshop Branding?</strong> Outshop branding refers to exterior signage solutions designed for maximum outdoor visibility. 
                Our outshop branding services include ACP 3D Boards, Glow Sign Boards, 3D Arch Gates, Flange Boards, and weather-resistant signage 
                perfect for retail storefronts, shop facades, and commercial buildings. Outshop branding is essential for businesses that need to attract 
                customers from the street and create a strong first impression.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Why Choose Our Outshop Branding?</strong> We provide strategic placement analysis, weather-resistant materials (ACP, premium LEDs), 
                and expert installation across all major cities. Our outshop branding solutions are designed to withstand extreme weather conditions 
                while maximizing brand visibility and customer recall. We use premium materials like 3MM thick acrylic, industrial-grade LED modules, 
                and weather-sealed components to ensure durability and premium aesthetics.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Outshop Branding Services:</strong> Our comprehensive outshop branding includes ACP 3D Boards for premium storefronts, 
                Glow Sign Boards for maximum visibility, 3D Arch Gates for grand entrances, Flange Boards for two-way visibility, and Non-Lit Boards 
                for cost-effective solutions. Each solution is customized for your city's climate and commercial environment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Outshop Branding Bangalore</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Outshop Branding Mumbai</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Outshop Branding Delhi</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Outshop Branding Chennai</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Outshop Branding Pune</span>
              </div>
            </div>

            {/* Inshop Branding */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Inshop Branding Solutions
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>What is Inshop Branding?</strong> Inshop branding includes interior signage solutions for retail stores, shopping malls, and commercial spaces. 
                Our inshop branding services feature Fabric Light Boxes, LED Clip-ons, Standees, Dropdowns, and modern retail signage designed 
                for indoor environments with tool-free graphic changes. Inshop branding enhances customer experience, improves wayfinding, and drives impulse sales.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Why Choose Our Inshop Branding?</strong> We offer ultra-thin tension fabric systems, energy-efficient LED displays, and easy graphic 
                replacement solutions. Our inshop branding enhances customer experience, improves wayfinding, and drives impulse sales in retail environments. 
                We use premium materials like tension fabric, edge-lit LEDs, and snap-frame systems for easy maintenance and graphic updates.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Inshop Branding Services:</strong> Our comprehensive inshop branding includes Fabric Light Boxes for modern retail spaces, 
                LED Clip-ons for energy-efficient displays, Standees for product promotion, Dropdowns for wayfinding, and custom retail signage. 
                Each solution is designed for easy graphic replacement and maximum visual impact in indoor environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Inshop Branding Bangalore</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Inshop Branding Mumbai</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Inshop Branding Delhi</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Inshop Branding Chennai</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Inshop Branding Pune</span>
              </div>
            </div>
          </div>

          {/* Manufacturing & Marketing Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Shop Name Boards Manufacturing
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>What is Shop Name Boards Manufacturing?</strong> Shop name boards manufacturing is the process of creating custom signage solutions 
                using premium materials like Aluminium Composite Panel (ACP), acrylic, LED modules, and fabric. Our manufacturing process involves precision 
                engineering with 3MM thick acrylic for 3D letters, weather-resistant ACP panels, and industrial-grade LED modules from Samsung and OSRAM.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Our Manufacturing Expertise:</strong> We use only premium-grade materials including 3MM thick acrylic, weather-resistant ACP panels, 
                industrial-grade LED modules, and stainless steel frames. Our manufacturing facilities ensure fast turnaround times of 5-7 days for standard 
                designs, with expert quality control and precision engineering for every project.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Manufacturing Services:</strong> We manufacture 14+ types of shop name boards including ACP 3D Boards, LED Signage, Fabric Light Boxes, 
                Flange Boards, Arch Gates, Glow Sign Boards, and Non-Lit Boards. Each product is manufactured with precision engineering and premium materials 
                to ensure durability and premium aesthetics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Shop Name Boards Marketing
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>What is Shop Name Boards Marketing?</strong> Shop name boards marketing involves strategic placement analysis, design optimization 
                for maximum visibility, brand positioning, and ensuring your signage effectively attracts customers. Our marketing services help maximize your 
                brand visibility and customer recall across all major cities in India.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Our Marketing Expertise:</strong> We provide comprehensive marketing services including strategic placement analysis, design optimization 
                for maximum visibility, brand positioning, competitor analysis, and marketing consultation. We analyze foot traffic patterns, optimize signage 
                placement for brand recall, and provide color-correct LED lighting for enhanced visibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Marketing Services:</strong> Our marketing services include placement strategy optimization, material consultation, brand recall optimization 
                through color-correct LED lighting, visibility analysis, and competitor positioning. We help businesses stand out in competitive commercial districts 
                while maintaining brand consistency and maximizing customer attraction.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Everything you need to know about shop name boards manufacturing and marketing
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border-2 border-red-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors"
                >
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Need Shop Name Boards in Your City?
          </h3>
          <p className="text-xl md:text-2xl mb-6 text-red-100">
            We serve 50+ cities across India for shop name boards manufacturing and marketing.
            Get a free quote today for your city!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-red-50 transition-colors shadow-xl"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}
