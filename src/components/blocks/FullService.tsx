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
    <section className="flex flex-col items-center self-stretch bg-white py-20 md:py-32">
      {/* Figma: max 1780, gap 56, align flex-start, padding 128 */}
      <div className="mx-auto flex w-full max-w-[1780px] flex-col items-start gap-10 px-5 sm:px-8 md:gap-14">
        <div className="flex w-full flex-col items-start gap-6 md:gap-14">
          {eyebrow ? (
            <p className="font-poppins text-sm font-bold uppercase tracking-[0.12em] text-brand-on-light md:text-base">
              {eyebrow}
            </p>
          ) : null}

          {/* Unbounded 56/800, lh 115% */}
          <h2 className="heading-section w-full whitespace-pre-line text-brand-black md:text-[56px] md:leading-[1.15] md:tracking-[-0.56px]">
            {ueberschrift}
          </h2>

          {text ? (
            /* Poppins 32/400 brand-on-light, max 1400 */
            <p className="max-w-[1400px] whitespace-pre-line font-poppins text-base font-normal leading-[1.5] text-brand-on-light md:text-[28px] xl:text-[32px]">
              {text}
            </p>
          ) : null}
        </div>

        {steps.length ? (
          <ol className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
            {steps.map((step, i) => {
              const nummer = String(i + 1).padStart(2, '0')
              return (
                <li
                  key={`${step.titel}-${i}`}
                  className="@container flex min-w-0 flex-col items-start gap-4 rounded-[24px] bg-brand-card-light p-6 sm:p-8 xl:p-10"
                >
                  {/* Unbounded 40/900 yellow */}
                  <span
                    className="font-unbounded text-[clamp(1.75rem,12cqi,2.5rem)] font-black leading-none text-brand-yellow"
                    aria-hidden
                  >
                    {nummer}
                  </span>
                  {/* Unbounded 24/800 */}
                  <h3 className="w-full font-unbounded text-[clamp(1.05rem,7cqi,1.5rem)] font-extrabold leading-[1.2] text-brand-black">
                    {step.titel}
                  </h3>
                  {step.text ? (
                    /* Poppins 20/400 brand-on-light, lh 145% */
                    <p className="w-full font-poppins text-[clamp(0.85rem,5.5cqi,1.25rem)] font-normal leading-[1.45] text-brand-on-light">
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
