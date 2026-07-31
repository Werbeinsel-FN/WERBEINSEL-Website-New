import type { ReactNode } from 'react'
import Script from 'next/script'
import { unbounded, poppins } from '@/lib/fonts'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { JsonLd } from '@/components/JsonLd'
import { buildMetadata, localBusinessJsonLd } from '@/lib/seo'
import { getSiteChrome } from '@/lib/content'

export const metadata = buildMetadata({
  title: undefined,
  description:
    'WERBEINSEL – Außenwerbung, Plakat, Folierung, Grafikdesign, Foto & Video und Social Media.',
  path: '/',
})

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  const { navigation, footer, einstellungen } = await getSiteChrome()

  return (
    <html lang="de" className={`${unbounded.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white font-poppins text-brand-black antialiased">
        <JsonLd data={localBusinessJsonLd(einstellungen)} />
        <Header items={navigation.items} />
        <main>{children}</main>
        <Footer
          tagline={footer.tagline}
          spalten={footer.spalten}
          rechtslinks={footer.rechtslinks}
          socials={footer.socials}
        />
        <CookieConsent />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          strategy="afterInteractive"
        />
        <span className="sr-only">
          {einstellungen.telefon} · {einstellungen.email}
        </span>
      </body>
    </html>
  )
}
