import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type BetreuungSchritt = {
  titel: string
  text?: string | null
}

export type BetreuungProps = {
  ueberschrift?: string | null
  schritte?: BetreuungSchritt[] | null
}

export function Betreuung({
  ueberschrift = 'SO LÄUFT DIE BETREUUNG',
  schritte,
}: BetreuungProps) {
  const steps = schritte?.filter((s) => s?.titel) ?? []
  if (!steps.length) return null

  return (
    <Section background="black">
      <Container className="flex flex-col items-center gap-stack">
        <Heading size="section" className="w-full text-center text-brand-yellow">
          {ueberschrift}
        </Heading>

        <ol className="flex w-full flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {steps.map((step, i) => {
            const nummer = String(i + 1).padStart(2, '0')
            return (
              <li
                key={`${step.titel}-${i}`}
                className="@container flex min-w-0 flex-1 flex-col items-center gap-5 text-center"
              >
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-pill bg-brand-yellow sm:size-[76px]"
                  aria-hidden
                >
                  <span className="font-unbounded text-card font-extrabold leading-[1.1] text-brand-black">
                    {nummer}
                  </span>
                </span>
                <h3 className="font-unbounded text-cq-title font-extrabold leading-[1.1] tracking-normal text-white [text-transform:none]">
                  {step.titel}
                </h3>
                {step.text ? (
                  <p className="max-w-[405px] font-poppins text-cq-body font-normal leading-[1.5] text-brand-muted">
                    {step.text}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}
