import { CTA } from '@/components/blocks/CTA'
import { ServicesGrid } from '@/components/blocks/ServicesGrid'
import { getServicesContent } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Unsere Leistungen: Plakatwerbung, Folierung & Beschriftung, digitale Werbemittel und Drucksachen – alles aus einer Hand.',
  path: '/services',
})

export default async function ServicesPage() {
  const servicesPage = await getServicesContent()

  return (
    <>
      <section className="flex flex-col items-stretch bg-brand-yellow py-20 text-brand-black md:py-32">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-8 text-center">
          <h1 className="heading-hero mx-auto max-w-[1400px] whitespace-pre-line text-center font-black uppercase text-brand-black">
            {servicesPage.hero.titel}
          </h1>
          <p className="body-lead mx-auto mt-6 max-w-[900px] whitespace-pre-line text-brand-black md:mt-8">
            {servicesPage.hero.untertitel}
          </p>
        </div>
      </section>

      <ServicesGrid ueberschrift={servicesPage.sectionTitle} items={servicesPage.items} />

      <CTA {...servicesPage.cta} yellow={false} />
    </>
  )
}
