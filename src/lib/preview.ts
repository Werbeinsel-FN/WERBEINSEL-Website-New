/**
 * Test- und Prüfseiten (z. B. /test-bloecke) nur lokal und in Vorschau-Umgebungen zeigen,
 * nie in Produktion.
 * - lokal: `next dev`
 * - Vercel-Vorschau: VERCEL_ENV=preview (setzt Vercel automatisch)
 * - andere Hosts (z. B. später AWS): SITE_ENV=preview explizit setzen
 */
export function isPreviewEnvironment(): boolean {
  if (process.env.NODE_ENV === 'development') return true
  if (process.env.SITE_ENV === 'preview') return true
  return process.env.VERCEL_ENV === 'preview'
}
