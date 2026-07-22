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
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-4 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-unbounded text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-brand-black">
            {ueberschrift}
          </h2>
          {text ? (
            <p className="mt-5 font-poppins text-base leading-relaxed text-brand-black/75 md:text-lg">
              {text}
            </p>
          ) : null}
        </div>

        {steps.length ? (
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => {
              const nummer = String(i + 1).padStart(2, '0')
              return (
                <li
                  key={`${step.titel}-${i}`}
                  className="rounded-3xl bg-brand-card-light p-7 md:p-8"
                >
                  <span
                    className="font-unbounded text-4xl font-black leading-none text-brand-yellow md:text-5xl"
                    aria-hidden
                  >
                    {nummer}
                  </span>
                  <h3 className="mt-5 font-unbounded text-xl font-extrabold text-brand-black">
                    {step.titel}
                  </h3>
                  {step.text ? (
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-brand-black/70 md:text-base">
                      {step.text}
                    </p>
                  ) : null}
                </li>
              )
            })}
          </ol>
        ) : null}
      </div>
    </section>
  )
}
