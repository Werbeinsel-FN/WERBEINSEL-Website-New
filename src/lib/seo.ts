import type { Metadata } from 'next'
import { einstellungen as seedEinstellungen } from '@/data/seed'

const SITE_NAME = 'WERBEINSEL'
const DEFAULT_DESCRIPTION =
  'WERBEINSEL – Plakatwerbung, Folierung & Beschriftung sowie Foto & Video.'

type EinstellungenLike = {
  firma?: string
  url?: string
  telefon?: string
  email?: string
  adresse?: { strasse?: string; plz?: string; ort?: string }
}

export function absoluteUrl(path = '/', siteUrl?: string): string {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    siteUrl ||
    seedEinstellungen.url
  ).replace(/\/$/, '')
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

export function localBusinessJsonLd(einstellungen: EinstellungenLike = seedEinstellungen) {
  const a = einstellungen.adresse || seedEinstellungen.adresse
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: einstellungen.firma || seedEinstellungen.firma,
    url: absoluteUrl('/', einstellungen.url),
    telephone: einstellungen.telefon || seedEinstellungen.telefon,
    email: einstellungen.email || seedEinstellungen.email,
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

export function jobPostingJsonLd(
  job: {
    titel: string
    standort?: string
    pensum?: string
    beschreibung?: string
  },
  einstellungen: EinstellungenLike = seedEinstellungen,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.titel,
    description: job.beschreibung || job.titel,
    hiringOrganization: {
      '@type': 'Organization',
      name: einstellungen.firma || seedEinstellungen.firma,
      sameAs: absoluteUrl('/', einstellungen.url),
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality:
          job.standort || einstellungen.adresse?.ort || seedEinstellungen.adresse.ort,
        addressCountry: 'DE',
      },
    },
    employmentType: job.pensum?.toLowerCase().includes('teil') ? 'PART_TIME' : 'FULL_TIME',
  }
}
