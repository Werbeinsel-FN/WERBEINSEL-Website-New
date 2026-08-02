import Image from 'next/image'

export type MarqueeItem = {
  name: string
  logoUrl?: string | null
  logoAlt?: string | null
}

export type MarqueeProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  /** @deprecated Prefer `items` – kept for seed/text-only fallbacks */
  names?: string[] | null
  items?: MarqueeItem[] | null
}

/** Figma: Section / Clients → genau 3 Marquee-Reihen. */
const ROW_COUNT = 3

function normalizeItems(items?: MarqueeItem[] | null, names?: string[] | null): MarqueeItem[] {
  if (items?.length) return items.filter((i) => i?.name)
  return (names || []).filter(Boolean).map((name) => ({ name }))
}

function chunkRows(items: MarqueeItem[], rowCount: number): MarqueeItem[][] {
  if (!items.length) return Array.from({ length: rowCount }, () => [])
  const rows: MarqueeItem[][] = Array.from({ length: rowCount }, () => [])
  items.forEach((item, i) => {
    rows[i % rowCount].push(item)
  })
  return rows.map((row) => {
    if (row.length === 0) return items
    const filled = [...row]
    while (filled.length < 8) filled.push(...row)
    return filled
  })
}

function MarqueePill({
  item,
  dark,
}: {
  item: MarqueeItem
  dark: boolean
}) {
  const hasLogo = Boolean(item.logoUrl)

  return (
    <span
      className={`inline-flex h-[95px] w-[180px] shrink-0 items-center justify-center rounded-full px-6 sm:h-[120px] sm:w-[240px] sm:px-8 md:h-[190px] md:w-[360px] md:px-12 ${
        dark
          ? 'bg-brand-black text-white'
          : 'bg-white text-brand-black ring-1 ring-brand-black'
      }`}
    >
      {hasLogo ? (
        <span className="relative flex h-[42%] w-[72%] items-center justify-center sm:h-[44%] sm:w-[70%] md:h-[46%] md:w-[68%]">
          <Image
            src={item.logoUrl!}
            alt={item.logoAlt || item.name}
            fill
            className={`object-contain ${
              dark
                ? 'brightness-0 invert'
                : 'brightness-0'
            }`}
            sizes="(max-width: 640px) 130px, (max-width: 768px) 170px, 240px"
          />
        </span>
      ) : (
        <span className="text-center font-poppins text-[13px] font-bold leading-[1.2] tracking-[0.03em] uppercase sm:text-[15px] md:text-lg">
          {item.name}
        </span>
      )}
    </span>
  )
}

function MarqueeRow({
  items,
  reverse,
  offset,
  startIndex,
}: {
  items: MarqueeItem[]
  reverse?: boolean
  offset?: boolean
  startIndex: number
}) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-1">
      <div
        className={`flex w-max items-center gap-6 md:gap-[72px] ${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        } ${offset ? 'marquee-track-offset' : ''}`}
      >
        {doubled.map((item, i) => {
          const dark = (startIndex + i) % 2 === 0
          return (
            <MarqueePill
              key={`${item.name}-${item.logoUrl || 'text'}-${i}`}
              item={item}
              dark={dark}
            />
          )
        })}
      </div>
    </div>
  )
}

export function Marquee({ eyebrow, ueberschrift, untertitel, names, items }: MarqueeProps) {
  const list = normalizeItems(items, names)
  if (!list.length) return null

  const rows = chunkRows(list, ROW_COUNT)

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
            items={row}
            reverse={i % 2 === 1}
            offset={i === 1}
            startIndex={i}
          />
        ))}
      </div>

      <ul className="sr-only">
        {list.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  )
}
