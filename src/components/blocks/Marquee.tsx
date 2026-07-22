export type MarqueeProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  names?: string[] | null
}

function chunkRows(names: string[], rowCount: number): string[][] {
  if (!names.length) return Array.from({ length: rowCount }, () => [])
  const rows: string[][] = Array.from({ length: rowCount }, () => [])
  names.forEach((name, i) => {
    rows[i % rowCount].push(name)
  })
  return rows.map((row) => {
    if (row.length === 0) return names
    const filled = [...row]
    while (filled.length < 6) filled.push(...row)
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
    <div className="overflow-hidden py-2">
      <div
        className={`flex w-max gap-3 ${reverse ? 'marquee-track-reverse' : 'marquee-track'} ${offset ? 'marquee-track-offset' : ''}`}
      >
        {doubled.map((name, i) => {
          const dark = (startIndex + i) % 2 === 0
          return (
            <span
              key={`${name}-${i}`}
              className={`inline-flex aspect-[1.9/1] min-w-[9.5rem] items-center justify-center rounded-full px-6 font-poppins text-sm font-semibold tracking-wide sm:min-w-[11rem] sm:text-base ${
                dark
                  ? 'bg-brand-black text-white'
                  : 'bg-white text-brand-black ring-1 ring-brand-black/10'
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

  const mobileRows = chunkRows(list, 3)
  const desktopRows = chunkRows(list, 5)

  return (
    <section className="section-pad overflow-hidden bg-brand-yellow">
      <div className="container-site mb-10 text-center">
        {eyebrow ? (
          <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/55 uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="font-unbounded text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold uppercase text-brand-black">
            {ueberschrift}
          </h2>
        ) : null}
        {untertitel ? (
          <p className="mx-auto mt-4 max-w-[40ch] font-poppins text-base text-brand-black/75 md:text-lg">
            {untertitel}
          </p>
        ) : null}
      </div>

      <div className="space-y-1 md:hidden" aria-hidden>
        {mobileRows.map((row, i) => (
          <MarqueeRow
            key={`m-${i}`}
            names={row}
            reverse={i % 2 === 1}
            offset={i === 1}
            startIndex={i}
          />
        ))}
      </div>

      <div className="hidden space-y-1 md:block" aria-hidden>
        {desktopRows.map((row, i) => (
          <MarqueeRow
            key={`d-${i}`}
            names={row}
            reverse={i % 2 === 1}
            offset={i === 1 || i === 3}
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
