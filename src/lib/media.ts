/** Payload-Media oder bereits aufgelöstes Bild. */
export type MediaLike =
  | { url?: string | null; alt?: string | null }
  | number
  | string
  | null
  | undefined

export function resolveMedia(
  media: MediaLike,
  fallbackAlt = '',
): { url: string; alt: string } | null {
  if (!media || typeof media === 'number' || typeof media === 'string') return null
  if (!media.url) return null
  return { url: media.url, alt: media.alt || fallbackAlt }
}
