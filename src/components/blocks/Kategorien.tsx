import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type KategorieItem = {
  name: string
  link?: string | null
  icon?: unknown
}

export type KategorienProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  text?: string | null
  kategorien?: KategorieItem[] | null
  /** Figma Section / Anlässe: gelb, schwarze Chips mit gelbem Text */
  gelb?: boolean | null
}

export function Kategorien({
  eyebrow,
  ueberschrift,
  text,
  kategorien,
  gelb,
}: KategorienProps) {
  const list = kategorien?.filter((k) => k?.name) ?? []
  if (!list.length) return null

  const isYellow = Boolean(gelb)

  return (
    <Section
      background={isYellow ? 'yellow' : 'white'}
      className="flex flex-col items-stretch self-stretch"
    >
      <Container className="flex flex-col items-center">
        {(eyebrow || ueberschrift || text) && (
          <div className="flex w-full max-w-[1500px] flex-col items-center text-center">
            {eyebrow ? (
              <p
                className={`mb-3 font-poppins text-small font-bold tracking-[0.2em] uppercase ${
                  isYellow ? 'text-brand-black/60' : 'text-brand-muted'
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <Heading size="section" className="w-full max-w-[1500px] whitespace-pre-line text-brand-black">
                {ueberschrift}
              </Heading>
            ) : null}
            {text ? (
              <p className="body-lead mx-auto mt-6 max-w-[1100px] whitespace-pre-line text-brand-black">
                {text}
              </p>
            ) : null}
          </div>
        )}

        {/* Figma: gap 12, pt 24, chips padding 12×24, Label/Tag 14/600 gelb */}
        <ul
          className={`flex w-full flex-wrap content-start items-start justify-center gap-3 self-stretch ${
            ueberschrift || text || eyebrow ? 'pt-6' : ''
          }`}
        >
          {list.map((kat) => {
            const className = isYellow
              ? 'inline-flex items-center justify-center rounded-pill bg-brand-black px-6 py-3 font-poppins text-small font-semibold leading-[1.5] text-brand-yellow'
              : 'inline-flex items-center justify-center rounded-pill bg-brand-black px-6 py-3 font-poppins text-small font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black'
            return (
              <li key={kat.name}>
                {kat.link ? (
                  <Link href={kat.link} className={className}>
                    {kat.name}
                  </Link>
                ) : (
                  <span className={className}>{kat.name}</span>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
