import Image from 'next/image'
import Link from 'next/link'
import { resolveMedia, type MediaLike } from '@/lib/media'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

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
    <article className="@container relative flex h-auto min-h-[420px] w-full min-w-0 flex-col justify-between overflow-hidden rounded-card bg-brand-black p-card sm:min-h-[520px] xl:h-[720px] xl:min-h-0">
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

      <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-pill bg-brand-yellow font-poppins text-small font-semibold leading-[1.5] tracking-[0.7px] text-brand-black sm:size-10">
        {item.nr}
      </span>

      <div className="relative z-10 flex w-full min-w-0 flex-col items-start self-stretch">
        <p className="w-full truncate font-poppins text-small font-semibold uppercase leading-[1.5] tracking-[0.7px] text-brand-yellow">
          {item.kategorie}
        </p>
        {/* Skaliert mit Kartenbreite – keine Wortzerstückelung */}
        <h3 className="mt-1.5 w-full max-w-full whitespace-pre-line font-unbounded text-cq-title font-extrabold leading-[1.15] text-white [overflow-wrap:normal] [word-break:keep-all] hyphens-none">
          {item.titel}
        </h3>
        {item.kurztext ? (
          <p
            className={`mt-1.5 w-full font-poppins font-medium leading-[1.3] text-brand-muted text-cq-body ${
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
    <Section background="white" className="flex flex-col items-stretch self-stretch">
      <Container className="flex flex-col items-center">
        <Heading size="section" className="max-w-full text-center text-brand-black">
          {ueberschrift}
        </Heading>

        {/* 4 Spalten erst ab xl – mehr Platz pro Karte */}
        <div className="mt-stack grid w-full grid-cols-1 gap-gap sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <ServiceOverviewCard key={item.nr} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
