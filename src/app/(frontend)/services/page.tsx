import { CTA } from '@/components/blocks/CTA'
import { ServicesGrid } from '@/components/blocks/ServicesGrid'
import { getServicesContent } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Unsere Leistungen: Plakatwerbung, Folierung & Beschriftung sowie Foto & Video – alles aus einer Hand.',
  path: '/services',
})

export default async function ServicesPage() {
  const servicesPage = await getServicesContent()

  return (
    <>
      <Section background="yellow" className="flex flex-col items-stretch">
        <Container className="flex flex-col items-center text-center">
          <Heading size="hero" className="mx-auto max-w-[1400px] whitespace-pre-line text-center text-brand-black">
            {servicesPage.hero.titel}
          </Heading>
          <p className="body-lead mx-auto mt-6 max-w-[900px] whitespace-pre-line text-brand-black md:mt-8">
            {servicesPage.hero.untertitel}
          </p>
        </Container>
      </Section>

      <ServicesGrid ueberschrift={servicesPage.sectionTitle} items={servicesPage.items} />

      <CTA {...servicesPage.cta} yellow={false} />
    </>
  )
}
