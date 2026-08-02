export type ZahlenStat = { zahl: string; label: string }

export type ZahlenProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  stats?: ZahlenStat[] | null
  /** Figma Plakatwerbung: schwarzer Hintergrund, gelbe Zahlen */
  dunkel?: boolean | null
}

export function Zahlen({ eyebrow, ueberschrift, stats, dunkel }: ZahlenProps) {
  const list = stats?.filter((s) => s?.zahl && s?.label)?.slice(0, 4) ?? []
  if (!list.length) return null

  const isDark = Boolean(dunkel)
  const cols =
    list.length === 2
      ? 'sm:grid-cols-2'
      : list.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2 xl:grid-cols-4'

  return (
    <section
      className={`flex flex-col items-center self-stretch py-20 md:py-32 ${
        isDark ? 'bg-brand-black' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-5 sm:px-8">
        {(eyebrow || ueberschrift) && (
          <div className="mb-12 text-center">
            {eyebrow ? (
              <p
                className={`mb-3 font-poppins text-sm font-bold tracking-[0.2em] uppercase ${
                  isDark ? 'text-brand-yellow' : 'text-brand-muted'
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <h2
                className={`heading-section ${isDark ? 'text-white' : 'text-brand-black'}`}
              >
                {ueberschrift}
              </h2>
            ) : null}
          </div>
        )}

        {/* Skaliert mit Spaltenbreite – kein Überlappen (Figma Desktop: bis 130px) */}
        <div className={`grid w-full gap-8 sm:gap-6 md:gap-8 ${cols}`}>
          {list.map((stat, i) => (
            <div
              key={`stat-${i}`}
              className="@container flex min-w-0 flex-col items-center gap-3 text-center sm:gap-4"
            >
              <p
                className={`w-full max-w-full whitespace-nowrap font-unbounded font-black leading-none tracking-tight text-[clamp(2.5rem,22cqi,8.125rem)] ${
                  isDark ? 'text-brand-yellow' : 'text-brand-black'
                }`}
              >
                {stat.zahl}
              </p>
              <p
                className={`max-w-[360px] font-poppins font-medium leading-[1.3] text-[clamp(0.875rem,6cqi,1.75rem)] ${
                  isDark ? 'text-[#B8B8B8]' : 'text-brand-muted'
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
