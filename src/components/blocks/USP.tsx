import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type USPBeleg = { titel: string; text: string }

export type USPProps = {
  eyebrow?: string | null
  ueberschrift: string
  text?: string | ReactNode | null
  belegpunkte?: USPBeleg[] | null
}

export function USP({ eyebrow, ueberschrift, text, belegpunkte }: USPProps) {
  const points = belegpunkte?.filter((b) => b?.titel)?.slice(0, 3) ?? []

  return (
    <Section background="black" className="flex flex-col items-center self-stretch">
      <Container className="flex flex-col items-start gap-stack">
        {/* Figma: gap 56 zwischen Blöcken */}
        <div className="flex w-full flex-col items-start gap-6 md:gap-14">
          {eyebrow ? (
            /* Poppins 28/700 yellow, tracking 1.68 */
            <p className="font-poppins text-card font-bold uppercase leading-normal tracking-[0.06em] text-brand-yellow">
              {eyebrow}
            </p>
          ) : null}

          {/* Unbounded 56/800 white, lh 118% */}
          <Heading size="section" className="w-full max-w-full whitespace-pre-line text-white">
            {ueberschrift}
          </Heading>

          {typeof text === 'string' && text ? (
            /* Poppins 32/400 brand-muted, max 1400 */
            <p className="max-w-[1400px] whitespace-pre-line font-poppins text-sub font-normal leading-[1.5] text-brand-muted">
              {text}
            </p>
          ) : text && typeof text !== 'string' ? (
            <div className="max-w-[1400px] font-poppins text-sub leading-[1.5] text-brand-muted">
              {text}
            </div>
          ) : null}
        </div>

        {points.length ? (
          <div className="grid w-full grid-cols-1 items-stretch gap-gap lg:grid-cols-3">
            {points.map((point, i) => (
              <article
                key={`${point.titel}-${i}`}
                className="@container flex h-full min-w-0 flex-col items-start gap-4 overflow-hidden rounded-card bg-brand-card-dark p-card md:gap-5"
              >
                <span
                  className="block size-5 shrink-0 rounded-pill bg-brand-yellow xl:size-6"
                  aria-hidden
                />
                {/* min-w-0 + cqi: lange Wörter bleiben in der Karte, keine Auto-Silbentrennung */}
                <h3 className="w-full min-w-0 max-w-full whitespace-pre-line font-unbounded text-cq-title font-extrabold leading-[1.2] text-white hyphens-none [hyphenate-character:''] [overflow-wrap:normal] [word-break:normal]">
                  {point.titel}
                </h3>
                {point.text ? (
                  <p className="w-full min-w-0 max-w-full whitespace-pre-line font-poppins text-cq-body font-normal leading-[1.45] text-brand-muted hyphens-none">
                    {point.text}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  )
}
