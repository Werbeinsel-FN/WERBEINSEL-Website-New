/** Payload-Media oder bereits aufgelöstes Bild. */
export type MediaLike =
  | {
      url?: string | null
      alt?: string | null
      filename?: string | null
    }
  | number
  | string
  | null
  | undefined

/** Seed-Uploads liegen lokal unter /media – auf Vercel fehlen die Dateien.
 *  Deshalb auf die vorhandenen public/-Assets zurückfallen. */
const PUBLIC_BY_FILENAME: Record<string, string> = {
  'hero-bg.png': '/images/figma/hero-bg.png',
  'service-plakat.png': '/images/figma/service-plakat.png',
  'service-folie.png': '/images/figma/service-folie.png',
  'service-digital.png': '/images/figma/service-digital.png',
  'service-druck.png': '/images/figma/service-druck.png',
  'service-foto.png': '/images/figma/service-foto.png',
  'work-1.png': '/images/figma/work-1.png',
  'work-2.png': '/images/figma/work-2.png',
  'work-3.png': '/images/figma/work-3.png',
  'work-4.png': '/images/figma/work-4.png',
  'work-5.png': '/images/figma/work-5.png',
  'work-6.png': '/images/figma/work-6.png',
}

function stripPayloadSuffix(filename: string): string {
  // hero-bg-1.png → hero-bg.png
  return filename.replace(/-\d+(?=\.[^.]+$)/, '')
}

function publicFallbackFor(filename: string | null | undefined): string | null {
  if (!filename) return null
  const decoded = decodeURIComponent(filename)
  return (
    PUBLIC_BY_FILENAME[decoded] ||
    PUBLIC_BY_FILENAME[stripPayloadSuffix(decoded)] ||
    null
  )
}

function filenameFromUrl(url: string): string | null {
  const api = url.match(/\/api\/media\/file\/([^/?#]+)/i)
  if (api?.[1]) return api[1]
  try {
    if (url.startsWith('http')) {
      const u = new URL(url)
      const base = u.pathname.split('/').pop()
      return base || null
    }
  } catch {
    /* ignore */
  }
  return null
}

export function resolveMedia(
  media: MediaLike,
  fallbackAlt = '',
): { url: string; alt: string } | null {
  if (!media || typeof media === 'number' || typeof media === 'string') return null

  const alt = media.alt || fallbackAlt
  const url = media.url || null

  // Bereits öffentlicher /images- oder /brand-Pfad
  if (url && (url.startsWith('/images/') || url.startsWith('/brand/') || url.startsWith('/icons/'))) {
    return { url, alt }
  }

  // Vercel Blob / absolute CDN-URL
  if (url && /^https?:\/\//i.test(url) && !url.includes('/api/media/file/')) {
    return { url, alt }
  }

  const filename = media.filename || (url ? filenameFromUrl(url) : null)
  const publicUrl = publicFallbackFor(filename)
  if (publicUrl) return { url: publicUrl, alt }

  // Fallback: Payload-API (funktioniert lokal, wenn /media vorhanden)
  if (url) return { url, alt }

  return null
}
