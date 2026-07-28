export type MarqueeProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  names?: string[] | null
}

/** Figma: Section / Clients → genau 3 Marquee-Reihen. */
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
    <div className="overflow-hidden py-1">
      <div
        className={`flex w-max items-center gap-6 md:gap-[72px] ${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        } ${offset ? 'marquee-track-offset' : ''}`}
      >
        {doubled.map((name, i) => {
          const dark = (startIndex + i) % 2 === 0
          return (
            <span
              key={`${name}-${i}`}
              className={`inline-flex h-[95px] w-[180px] shrink-0 items-center justify-center rounded-full px-5 text-center font-poppins text-[13px] font-bold leading-[1.2] tracking-[0.03em] uppercase sm:h-[120px] sm:w-[240px] sm:px-8 sm:text-[15px] md:h-[190px] md:w-[360px] md:px-10 md:text-lg ${
                dark
                  ? 'bg-brand-black text-white'
                  : 'bg-white text-brand-black ring-1 ring-brand-black'
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

  /*
   * Figma Section / Clients:
   * - padding 96px, bg yellow
   * - Heading/Section 56 · Body/Lead 22, gap 24 title→lead, 80 to pills
   * - 3 rows · Label/Client Poppins 18/700 · pill padding 32×40
   */
  return (
    <section className="overflow-hidden bg-brand-yellow py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1780px] px-5 text-center sm:px-8">
        {eyebrow ? (
          <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/55 uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="heading-section text-brand-black md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {ueberschrift}
          </h2>
        ) : null}
        {untertitel ? (
          <p className="body-lead mx-auto mt-6 max-w-[480px] whitespace-pre-line text-brand-black md:text-[22px]">
            {untertitel}
          </p>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-5 md:mt-20 md:gap-8" aria-hidden>
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
