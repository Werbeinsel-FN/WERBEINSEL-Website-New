import type { Metadata } from 'next'
import { einstellungen } from '@/data/seed'

const SITE_NAME = 'WERBEINSEL'
const DEFAULT_DESCRIPTION =
  'WERBEINSEL – Außenwerbung, Plakat, Folierung, Grafikdesign, Foto & Video und Social Media.'

export function absoluteUrl(path = '/'): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || einstellungen.url).replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = absoluteUrl(path)
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(absoluteUrl('/')),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
    },
  }
}

export function localBusinessJsonLd() {
  const a = einstellungen.adresse
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: einstellungen.firma,
    url: absoluteUrl('/'),
    telephone: einstellungen.telefon,
    email: einstellungen.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.strasse,
      postalCode: a.plz,
      addressLocality: a.ort,
      addressCountry: 'DE',
    },
  }
}

export function faqPageJsonLd(fragen: { frage: string; antwort: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.antwort,
      },
    })),
  }
}

export function jobPostingJsonLd(job: {
  titel: string
  standort?: string
  pensum?: string
  beschreibung?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.titel,
    description: job.beschreibung || job.titel,
    hiringOrganization: {
      '@type': 'Organization',
      name: einstellungen.firma,
      sameAs: absoluteUrl('/'),
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.standort || einstellungen.adresse.ort,
        addressCountry: 'DE',
      },
    },
    employmentType: job.pensum?.toLowerCase().includes('teil') ? 'PART_TIME' : 'FULL_TIME',
  }
}
