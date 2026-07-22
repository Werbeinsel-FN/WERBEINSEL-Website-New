export type ZahlenStat = { zahl: string; label: string }

export type ZahlenProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  stats?: ZahlenStat[] | null
}

export function Zahlen({ eyebrow, ueberschrift, stats }: ZahlenProps) {
  const list = stats?.filter((s) => s?.zahl && s?.label)?.slice(0, 4) ?? []
  if (!list.length) return null

  const cols =
    list.length === 2
      ? 'sm:grid-cols-2'
      : list.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        {(eyebrow || ueberschrift) && (
          <div className="mb-12 text-center">
            {eyebrow ? (
              <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <h2 className="heading-section text-brand-black">
                {ueberschrift}
              </h2>
            ) : null}
          </div>
        )}
        <div className={`grid gap-10 ${cols}`}>
          {list.map((stat) => (
            <div key={`${stat.zahl}-${stat.label}`} className="text-center">
              <p className="font-unbounded text-[clamp(2.75rem,7vw,4.5rem)] font-black leading-none text-brand-black">
                {stat.zahl}
              </p>
              <p className="mt-3 font-poppins text-base text-brand-muted md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
