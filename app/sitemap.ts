import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shopnameboard.vercel.app' // Update with your domain

  // Cities
  const cities = [
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'pune',
    'ahmedabad', 'kolkata', 'jaipur', 'surat', 'lucknow', 'kanpur',
    'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'patna',
    'vadodara', 'pimpri-chinchwad'
  ]

  // Services
  const services = [
    'acp-board-manufacturer',
    'led-signage-boards',
    'gsb-board-manufacturer',
    '3d-letter-boards',
    'non-lit-board-manufacturer',
    'backlit-signage',
    'acrylic-signage',
    'metal-letters',
    'neon-signs',
    'glow-sign-boards'
  ]

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/blog',
    '/contact',
    '/locations',
  ]

  // Generate city pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Generate service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Generate static pages
  const staticPagesSitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
    priority: page === '' ? 1 : 0.7,
  }))

  return [...staticPagesSitemap, ...cityPages, ...servicePages]
}
