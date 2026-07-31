import type { ReactNode } from 'react'
import { Hero } from '@/components/blocks/Hero'
import { getImpressumContent } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Impressum',
  description: 'Impressum – WERBEINSEL.',
  path: '/impressum',
})

const heading =
  'whitespace-pre-line font-unbounded text-[clamp(1.375rem,3vw,2rem)] font-extrabold leading-[1.2] tracking-normal text-brand-black [text-transform:none]'
const step =
  'whitespace-pre-line font-unbounded text-xl font-bold leading-[1.5] tracking-normal text-brand-black [text-transform:none] md:text-2xl'
const label = 'font-poppins text-lg font-bold leading-[1.5] text-brand-black'
const body =
  'whitespace-pre-line font-poppins text-lg font-normal leading-[1.5] text-brand-black'

function Block({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className={heading}>{title}</h2>
      {children}
    </div>
  )
}

export default async function ImpressumPage() {
  const impressum = await getImpressumContent()

  return (
    <>
      <Hero variante="einfach" titel={impressum.hero.titel} />

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto flex w-full max-w-[840px] flex-col items-center gap-12 px-5 text-center sm:px-8 md:gap-16">
          <Block title={impressum.angabenTitel}>
            <p className={label}>{impressum.firma}</p>
            <div className={body}>
              {impressum.adresse.map((zeile) => (
                <p key={zeile}>{zeile}</p>
              ))}
            </div>
          </Block>

          <Block title={impressum.kontaktTitel}>
            <div className={body}>
              {impressum.kontaktZeilen.map((zeile) => (
                <p key={zeile}>{zeile}</p>
              ))}
            </div>
          </Block>

          <Block title={impressum.ustTitel}>
            <p className={body}>{impressum.ustText}</p>
          </Block>

          <Block title={impressum.verantwortlichTitel}>
            <div className={body}>
              {impressum.verantwortlichZeilen.map((zeile) => (
                <p key={zeile}>{zeile}</p>
              ))}
            </div>
          </Block>

          <div className="flex w-full flex-col items-center gap-10 md:gap-12">
            <h2 className={heading}>{impressum.disclaimerTitel}</h2>
            {impressum.disclaimerAbschnitte.map((abschnitt) => (
              <div
                key={abschnitt.titel}
                className="flex w-full flex-col items-center gap-4"
              >
                <h3 className={step}>{abschnitt.titel}</h3>
                {abschnitt.absatze.map((absatz) => (
                  <p key={absatz.slice(0, 48)} className={body}>
                    {absatz}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
