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
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-[1780px] flex-col items-center gap-12 px-5 sm:px-8 md:gap-16">
        <h2 className="heading-section w-full max-w-[1716px] text-center text-brand-yellow md:text-[56px] md:leading-none md:tracking-[-0.56px]">
          {ueberschrift}
        </h2>

        <ol className="flex w-full max-w-[1716px] flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {steps.map((step, i) => {
            const nummer = String(i + 1).padStart(2, '0')
            return (
              <li
                key={`${step.titel}-${i}`}
                className="@container flex min-w-0 flex-1 flex-col items-center gap-5 text-center"
              >
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-yellow sm:size-[76px]"
                  aria-hidden
                >
                  <span className="font-unbounded text-xl font-extrabold leading-[1.1] text-brand-black sm:text-[28px]">
                    {nummer}
                  </span>
                </span>
                <h3 className="font-unbounded text-[clamp(1.125rem,6cqi,1.75rem)] font-extrabold leading-[1.1] tracking-normal text-white [text-transform:none]">
                  {step.titel}
                </h3>
                {step.text ? (
                  <p className="max-w-[405px] font-poppins text-[clamp(0.8125rem,4cqi,1rem)] font-normal leading-[1.5] text-brand-muted">
                    {step.text}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
