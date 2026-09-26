import { revalidatePath } from 'next/cache'
import { leistungenSlugs } from '@/data/leistungen-struktur'

/** Nach CMS-Änderungen Frontend-Cache leeren. */
export function revalidateSite(paths: string[] = ['/']) {
  const unique = Array.from(new Set(['/', ...paths]))
  for (const path of unique) {
    try {
      revalidatePath(path)
    } catch (err) {
      console.warn('[revalidate]', path, err)
    }
  }
  // Layout / alle dynamischen Leistung-Routen
  try {
    revalidatePath('/leistungen', 'layout')
    revalidatePath('/', 'layout')
  } catch {
    /* ignore outside Next request context */
  }
}

export const ALL_SITE_PATHS = [
  '/',
  '/services',
  '/kontakt',
  '/jobs',
  '/impressum',
  '/datenschutz',
  ...leistungenSlugs.map((slug) => `/leistungen/${slug}`),
]
