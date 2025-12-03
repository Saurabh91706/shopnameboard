import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import CitySection from '@/components/CitySection'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CitySection />
      <Gallery />
      <CTA />
    </>
  )
}

