import { Hero } from '@/components/blocks/Hero'
import { getDatenschutzContent } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata = buildMetadata({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung – WERBEINSEL.',
  path: '/datenschutz',
})

const heading =
  'whitespace-pre-line font-unbounded text-[clamp(1.375rem,3vw,2rem)] font-extrabold leading-[1.2] tracking-normal text-brand-black [text-transform:none]'
const step =
  'whitespace-pre-line font-unbounded text-xl font-bold leading-[1.5] tracking-normal text-brand-black [text-transform:none] md:text-2xl'
const body =
  'whitespace-pre-line font-poppins text-lg font-normal leading-[1.5] text-brand-black'

export default async function DatenschutzPage() {
  const { hero, abschnitte } = await getDatenschutzContent()

  return (
    <>
      <Hero variante="einfach" titel={hero.titel} />

      <Section background="white">
        <Container variant="text" className="flex flex-col items-center gap-12 pb-12 text-center md:gap-16">
          {abschnitte.map((abschnitt) => (
            <div
              key={abschnitt.titel}
              className="flex w-full flex-col items-center gap-10 md:gap-12"
            >
              <h2 className={heading}>{abschnitt.titel}</h2>
              {abschnitt.unterabschnitte.map((unter) => (
                <div
                  key={unter.titel}
                  className="flex w-full flex-col items-center gap-4"
                >
                  <h3 className={step}>{unter.titel}</h3>
                  {unter.text
                    .split(/\n{2,}/)
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={`${unter.titel}-${i}`} className={body}>
                        {para.trim()}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </Container>
      </Section>
    </>
  )
}
