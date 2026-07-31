import { CTA } from '@/components/blocks/CTA'
import { ServicesGrid } from '@/components/blocks/ServicesGrid'
import { servicesPage } from '@/data/seed'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Unsere Leistungen: Plakatwerbung, Folierung & Beschriftung, digitale Werbemittel und Drucksachen – alles aus einer Hand.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      {/* Hero – Figma Section / Services Hero: padding 128 */}
      <section className="flex flex-col items-stretch bg-brand-yellow py-20 text-brand-black md:py-32">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-8 text-center">
          {/* Display/Hero: UNSERE / LEISTUNGEN – je eine Zeile */}
          <h1 className="heading-hero mx-auto max-w-[1400px] whitespace-pre-line text-center font-black uppercase text-brand-black md:text-[88px] md:leading-[0.95] md:tracking-[-1.76px]">
            {servicesPage.hero.titel}
          </h1>
          {/* Body/Lead: Poppins 22/500, lh 160%, max 900 */}
          <p className="body-lead mx-auto mt-6 max-w-[900px] whitespace-pre-line text-brand-black md:mt-8 md:text-[22px] md:leading-[1.6]">
            {servicesPage.hero.untertitel}
          </p>
        </div>
      </section>

      <ServicesGrid ueberschrift={servicesPage.sectionTitle} items={servicesPage.items} />

      <CTA {...servicesPage.cta} yellow={false} />
    </>
  )
}
