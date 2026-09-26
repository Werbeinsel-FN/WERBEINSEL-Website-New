import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload'
import { leistungenSlugs } from '@/data/leistungen-struktur'
import { ALL_SITE_PATHS, revalidateSite } from '@/lib/revalidate'

function pagePathFromSlug(slug: string | null | undefined): string {
  if (!slug || slug === 'home') return '/'
  if ((leistungenSlugs as readonly string[]).includes(slug)) {
    return `/leistungen/${slug}`
  }
  return `/${slug}`
}

export const revalidatePagesAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  const slug = typeof doc?.slug === 'string' ? doc.slug : ''
  revalidateSite([pagePathFromSlug(slug), ...ALL_SITE_PATHS])
  return doc
}

export const revalidateCollectionAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  revalidateSite(ALL_SITE_PATHS)
  return doc
}

export const revalidateGlobalAfterChange: GlobalAfterChangeHook = ({ doc }) => {
  revalidateSite(ALL_SITE_PATHS)
  return doc
}
