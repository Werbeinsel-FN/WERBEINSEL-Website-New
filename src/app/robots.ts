import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { isSiteGateEnabled } from '@/lib/site-gate'

export default function robots(): MetadataRoute.Robots {
  if (isSiteGateEnabled()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
