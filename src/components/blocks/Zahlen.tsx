import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

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
    <Section
      background={isDark ? 'black' : 'white'}
      className="flex flex-col items-center self-stretch"
    >
      <Container className="flex flex-col items-center">
        {(eyebrow || ueberschrift) && (
          <div className="mb-12 text-center">
            {eyebrow ? (
              <p
                className={`mb-3 font-poppins text-small font-bold tracking-[0.2em] uppercase ${
                  isDark ? 'text-brand-yellow' : 'text-brand-muted'
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {ueberschrift ? (
              <Heading size="section" className={isDark ? 'text-white' : 'text-brand-black'}>
                {ueberschrift}
              </Heading>
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
                className={`w-full max-w-full whitespace-nowrap font-unbounded font-black leading-none tracking-tight text-cq-stat ${
                  isDark ? 'text-brand-yellow' : 'text-brand-black'
                }`}
              >
                {stat.zahl}
              </p>
              <p className="max-w-[360px] font-poppins font-medium leading-[1.3] text-cq-label text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
