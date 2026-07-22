export type StadtItem = { name: string; region?: string | null }

export type ReichweiteProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  text?: string | null
  staedte?: StadtItem[] | null
  karteZeigen?: boolean | null
}

export function Reichweite({
  eyebrow,
  ueberschrift = 'Unsere Reichweite',
  text,
  staedte,
  karteZeigen = false,
}: ReichweiteProps) {
  const cities = staedte?.filter((s) => s?.name) ?? []

  return (
    <section className="section-pad bg-brand-yellow">
      <div className="container-site">
        <div className={`grid gap-12 ${karteZeigen ? 'lg:grid-cols-2 lg:items-start' : ''}`}>
          <div>
            {eyebrow ? (
              <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/55 uppercase">
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <h2 className="heading-section text-brand-black">
                {ueberschrift}
              </h2>
            ) : null}
            {text ? (
              <p className="mt-5 max-w-[42ch] font-poppins text-base leading-relaxed text-brand-black/80 md:text-lg">
                {text}
              </p>
            ) : null}

            {cities.length ? (
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {cities.map((stadt) => (
                  <li
                    key={`${stadt.name}-${stadt.region || ''}`}
                    className="font-poppins text-base font-medium text-brand-black md:text-lg"
                  >
                    {stadt.name}
                    {stadt.region ? (
                      <span className="text-brand-black/50"> · {stadt.region}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="mt-8 max-w-[48ch] font-poppins text-sm leading-relaxed text-brand-black/55">
              Kartendarstellung ggf. über OpenStreetMap – ohne Google Maps (DSGVO).
            </p>
          </div>

          {karteZeigen ? (
            <div
              className="flex min-h-[280px] items-center justify-center rounded-3xl bg-brand-black/10 ring-1 ring-brand-black/10 md:min-h-[360px]"
              role="img"
              aria-label="Kartenplatzhalter – OpenStreetMap"
            >
              <p className="px-6 text-center font-poppins text-sm text-brand-black/60">
                Karte folgt
                <br />
                <span className="text-xs">(OpenStreetMap / Leaflet)</span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
