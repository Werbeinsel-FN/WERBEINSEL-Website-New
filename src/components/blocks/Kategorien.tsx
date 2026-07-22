import Link from 'next/link'

export type KategorieItem = {
  name: string
  link?: string | null
  icon?: unknown
}

export type KategorienProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  kategorien?: KategorieItem[] | null
}

export function Kategorien({ eyebrow, ueberschrift, kategorien }: KategorienProps) {
  const list = kategorien?.filter((k) => k?.name) ?? []
  if (!list.length) return null

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        {(eyebrow || ueberschrift) && (
          <div className="mb-10 text-center">
            {eyebrow ? (
              <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <h2 className="font-unbounded text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-brand-black">
                {ueberschrift}
              </h2>
            ) : null}
          </div>
        )}
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {list.map((kat) => {
            const className =
              'inline-flex items-center rounded-full bg-brand-black px-6 py-3 font-poppins text-sm font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black md:px-8 md:py-3.5 md:text-base'
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
      </div>
    </section>
  )
}
