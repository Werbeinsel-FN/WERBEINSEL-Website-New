import Image from 'next/image'
import Link from 'next/link'
import { resolveMedia, type MediaLike } from '@/lib/media'

export type ServiceGridItem = {
  nr?: string | null
  kategorie?: string | null
  titel: string
  kurztext?: string | null
  link?: string | null
  bild?: MediaLike
}

export type ServicesGridProps = {
  ueberschrift: string
  items: ServiceGridItem[]
}

function ServiceOverviewCard({ item }: { item: ServiceGridItem }) {
  const media = resolveMedia(item.bild, item.titel)
  const multiLineSub = Boolean(item.kurztext?.includes('\n'))

  const card = (
    <article className="@container relative flex h-auto min-h-[420px] w-full min-w-0 flex-col justify-between overflow-hidden rounded-[24px] bg-brand-black p-5 sm:min-h-[520px] sm:p-6 xl:h-[720px] xl:min-h-0 xl:p-8">
      {media ? (
        <Image
          src={media.url}
          alt={media.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-card-dark" />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.2) 100%)',
        }}
        aria-hidden
      />

      <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-brand-yellow font-poppins text-xs font-semibold leading-[1.5] tracking-[0.7px] text-brand-black sm:size-10 sm:text-sm">
        {item.nr}
      </span>

      <div className="relative z-10 flex w-full min-w-0 flex-col items-start self-stretch">
        <p className="w-full truncate font-poppins text-small font-semibold uppercase leading-[1.5] tracking-[0.7px] text-brand-yellow">
          {item.kategorie}
        </p>
        {/* Skaliert mit Kartenbreite – keine Wortzerstückelung */}
        <h3 className="mt-1.5 w-full max-w-full whitespace-pre-line font-unbounded text-[clamp(1.05rem,7.2cqi,1.75rem)] font-extrabold leading-[1.15] text-white [overflow-wrap:normal] [word-break:keep-all] hyphens-none">
          {item.titel}
        </h3>
        {item.kurztext ? (
          <p
            className={`mt-1.5 w-full font-poppins font-medium leading-[1.3] text-brand-muted text-[clamp(0.65rem,3.4cqi,1rem)] ${
              multiLineSub ? 'whitespace-pre-line' : 'whitespace-nowrap'
            }`}
          >
            {item.kurztext}
          </p>
        ) : null}
      </div>
    </article>
  )

  if (item.link) {
    return (
      <Link href={item.link} className="group block min-w-0 focus-visible:outline-offset-4">
        {card}
      </Link>
    )
  }

  return card
}

export function ServicesGrid({ ueberschrift, items }: ServicesGridProps) {
  return (
    <section className="flex flex-col items-stretch self-stretch bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-[1716px] flex-col items-center px-5 sm:px-8">
        <h2 className="heading-section max-w-full text-center text-brand-black">
          {ueberschrift}
        </h2>

        {/* 4 Spalten erst ab xl – mehr Platz pro Karte */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:mt-16 xl:grid-cols-4">
          {items.map((item) => (
            <ServiceOverviewCard key={item.nr} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
