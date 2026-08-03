import type { MetadataRoute } from 'next'
import { getLeistungSlugs } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'
import { isSiteGateEnabled } from '@/lib/site-gate'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isSiteGateEnabled()) {
    return [
      {
        url: absoluteUrl('/coming-soon'),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }

  const now = new Date()
  const staticRoutes = ['', '/services', '/kontakt', '/jobs', '/impressum', '/datenschutz']
  const leistungenSlugs = await getLeistungSlugs()

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
