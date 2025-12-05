import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shopnameboard.com'

  // All cities
  const cities = [
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai',
    'kolkata', 'pune', 'ahmedabad', 'jaipur', 'surat',
    'lucknow', 'kanpur', 'nagpur', 'indore', 'thane',
    'bhopal', 'visakhapatnam', 'patna', 'vadodara', 'ghaziabad'
  ]

  // All services
  const services = [
    'acp-board-manufacturer',
    'led-signage-boards',
    'gsb-board-manufacturer',
    'non-lit-boards',
    '3d-letter-signage',
    'glow-sign-boards',
    'backlit-signage',
    'acrylic-signage',
    'metal-letter-signage',
    'neon-signs'
  ]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...cityPages, ...servicePages]
}
