import type { MetadataRoute } from 'next'
import { leistungenSlugs } from '@/data/seed'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/kontakt', '/jobs', '/impressum', '/datenschutz']

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || '/'),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...leistungenSlugs.map((slug) => ({
      url: absoluteUrl(`/leistungen/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
