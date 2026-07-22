import { home } from '@/data/seed'
import { Hero } from '@/components/blocks/Hero'
import { Textblock } from '@/components/blocks/Textblock'
import { ServicesSlider } from '@/components/blocks/ServicesSlider'
import { ReferenzSlider } from '@/components/blocks/ReferenzSlider'
import { Marquee } from '@/components/blocks/Marquee'
import { Testimonials } from '@/components/blocks/Testimonials'
import { CTA } from '@/components/blocks/CTA'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Startseite',
  description:
    'WERBEINSEL – Ihre Agentur für klassische Werbung. Plakat, Folie, Digital – Sichtbarkeit für Marken in der Region.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero {...home.hero} />
      <Textblock {...home.about} />
      <ServicesSlider {...home.services} />
      <ReferenzSlider {...home.referenzen} />
      <Marquee {...home.kunden} />
      <Testimonials {...home.testimonials} />
      <CTA {...home.cta} />
    </>
  )
}
