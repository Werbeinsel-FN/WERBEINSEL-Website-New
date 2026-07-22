export type MarqueeProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  names?: string[] | null
}

/** Figma: Section / Clients → genau 3 Marquee-Reihen (Desktop + Mobile). */
const ROW_COUNT = 3

function chunkRows(names: string[], rowCount: number): string[][] {
  if (!names.length) return Array.from({ length: rowCount }, () => [])
  const rows: string[][] = Array.from({ length: rowCount }, () => [])
  names.forEach((name, i) => {
    rows[i % rowCount].push(name)
  })
  return rows.map((row) => {
    if (row.length === 0) return names
    const filled = [...row]
    while (filled.length < 8) filled.push(...row)
    return filled
  })
}

function MarqueeRow({
  names,
  reverse,
  offset,
  startIndex,
}: {
  names: string[]
  reverse?: boolean
  offset?: boolean
  startIndex: number
}) {
  const doubled = [...names, ...names]
  return (
    /* Horizontal clip + vertikales Padding, damit Pills nicht oben/unten abgeschnitten werden */
    <div className="overflow-hidden py-2 md:py-3">
      <div
        className={`flex w-max items-center gap-6 md:gap-[clamp(2rem,2.5vw,4.5rem)] ${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        } ${offset ? 'marquee-track-offset' : ''}`}
      >
        {doubled.map((name, i) => {
          const dark = (startIndex + i) % 2 === 0
          return (
            <span
              key={`${name}-${i}`}
              className={`box-border inline-flex h-[120px] w-[240px] shrink-0 items-center justify-center rounded-full border border-brand-black px-[22px] text-center font-poppins text-[15px] font-bold leading-tight tracking-[0.03em] uppercase md:h-[clamp(95px,6.53vw,190px)] md:w-[clamp(180px,12.38vw,360px)] md:px-8 md:text-[clamp(0.875rem,0.6vw+0.5rem,1.125rem)] ${
                dark ? 'bg-brand-black text-white' : 'bg-white text-brand-black'
              }`}
            >
              {name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export function Marquee({ eyebrow, ueberschrift, untertitel, names }: MarqueeProps) {
  const list = names?.filter(Boolean) ?? []
  if (!list.length) return null

  const rows = chunkRows(list, ROW_COUNT)

  return (
    <section className="bg-brand-yellow py-14 md:py-24">
      <div className="container-site mb-6 text-center md:mb-10">
        {eyebrow ? (
          <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/55 uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="heading-section text-brand-black">{ueberschrift}</h2>
        ) : null}
        {untertitel ? (
          <p className="body-lead mx-auto mt-4 max-w-[36ch] whitespace-pre-line text-brand-black md:mt-6">
            {untertitel}
          </p>
        ) : null}
      </div>

      {/* Mobile: gap 24px · Desktop: gap skaliert zu 72px */}
      <div className="mt-6 flex flex-col gap-6 md:mt-20 md:gap-[clamp(2rem,2.5vw,4.5rem)]" aria-hidden>
        {rows.map((row, i) => (
          <MarqueeRow
            key={`row-${i}`}
            names={row}
            reverse={i % 2 === 1}
            offset={i === 1}
            startIndex={i}
          />
        ))}
      </div>

      <ul className="sr-only">
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
