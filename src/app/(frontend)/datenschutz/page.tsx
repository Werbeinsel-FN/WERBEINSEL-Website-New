import { Hero } from '@/components/blocks/Hero'
import { datenschutz } from '@/data/seed'
import { buildMetadata } from '@/lib/seo'

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
  'font-poppins text-lg font-normal leading-[1.5] text-brand-black'

export default function DatenschutzPage() {
  const { platzhalter, abschnitte } = datenschutz

  return (
    <>
      <Hero variante="einfach" titel={datenschutz.hero.titel} />

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto flex w-full max-w-[840px] flex-col items-center gap-12 px-5 pb-12 text-center sm:px-8 md:gap-16">
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
                  {Array.from({ length: unter.absatze }, (_, i) => (
                    <p key={`${unter.titel}-${i}`} className={body}>
                      {platzhalter}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
