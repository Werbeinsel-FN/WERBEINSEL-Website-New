import type { ReactNode } from 'react'

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
    <section className="section-pad bg-brand-black text-white">
      <div className="container-site">
        {eyebrow ? (
          <p className="mb-4 font-poppins text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-[18ch] font-unbounded text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white">
          {ueberschrift}
        </h2>
        {typeof text === 'string' && text ? (
          <p className="mt-5 max-w-[52ch] font-poppins text-base leading-relaxed text-white/70 md:text-lg">
            {text}
          </p>
        ) : text && typeof text !== 'string' ? (
          <div className="mt-5 max-w-[52ch] font-poppins text-base leading-relaxed text-white/70 md:text-lg">
            {text}
          </div>
        ) : null}

        {points.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {points.map((point, i) => (
              <article
                key={`${point.titel}-${i}`}
                className="rounded-3xl bg-brand-card-dark p-7 md:p-8"
              >
                <span
                  className="circle mb-6 grid h-12 w-12 place-items-center rounded-full bg-brand-yellow font-unbounded text-sm font-black text-brand-black"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-unbounded text-xl font-extrabold text-white">{point.titel}</h3>
                {point.text ? (
                  <p className="mt-3 font-poppins text-sm leading-relaxed text-white/65 md:text-base">
                    {point.text}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
