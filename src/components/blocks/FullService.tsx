import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type FullServiceSchritt = { titel: string; text?: string | null }

export type FullServiceProps = {
  eyebrow?: string | null
  ueberschrift: string
  text?: string | null
  schritte?: FullServiceSchritt[] | null
}

export function FullService({ eyebrow, ueberschrift, text, schritte }: FullServiceProps) {
  const steps = schritte?.filter((s) => s?.titel) ?? []

  return (
    <Section background="white" className="flex flex-col items-center self-stretch">
      {/* Figma: max 1780, gap 56, align flex-start, padding 128 */}
      <Container className="flex flex-col items-start gap-stack">
        <div className="flex w-full flex-col items-start gap-6 md:gap-14">
          {eyebrow ? (
            <p className="font-poppins text-small font-bold uppercase tracking-[0.12em] text-brand-on-light">
              {eyebrow}
            </p>
          ) : null}

          {/* Unbounded 56/800, lh 115% */}
          <Heading size="section" className="w-full whitespace-pre-line text-brand-black">
            {ueberschrift}
          </Heading>

          {text ? (
            /* Poppins 32/400 brand-on-light, max 1400 */
            <p className="max-w-[1400px] whitespace-pre-line font-poppins text-sub font-normal leading-[1.5] text-brand-on-light">
              {text}
            </p>
          ) : null}
        </div>

        {steps.length ? (
          <ol className="grid w-full grid-cols-1 gap-gap sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => {
              const nummer = String(i + 1).padStart(2, '0')
              return (
                <li
                  key={`${step.titel}-${i}`}
                  className="@container flex min-w-0 flex-col items-start gap-4 rounded-card bg-brand-card-light p-card"
                >
                  {/* Unbounded 40/900 yellow */}
                  <span
                    className="font-unbounded text-cq-number font-black leading-none text-brand-yellow"
                    aria-hidden
                  >
                    {nummer}
                  </span>
                  {/* Unbounded 24/800 */}
                  <h3 className="w-full font-unbounded text-cq-title font-extrabold leading-[1.2] text-brand-black">
                    {step.titel}
                  </h3>
                  {step.text ? (
                    /* Poppins 20/400 brand-on-light, lh 145% */
                    <p className="w-full font-poppins text-cq-body font-normal leading-[1.45] text-brand-on-light">
                      {step.text}
                    </p>
                  ) : null}
                </li>
              )
            })}
          </ol>
        ) : null}
      </Container>
    </Section>
  )
}
