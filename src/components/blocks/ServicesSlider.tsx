'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { resolveMedia, type MediaLike } from '@/lib/media'

export type ServiceSlideItem = {
  titel: string
  kurztext?: string | null
  bild?: MediaLike
  link?: string | null
}

export type ServicesSliderProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  items?: ServiceSlideItem[] | null
}

function ServiceCard({
  slide,
  index,
  total,
  selected,
}: {
  slide: ServiceSlideItem
  index: number
  total: number
  selected?: boolean
}) {
  const media = resolveMedia(slide.bild, slide.titel)
  const card = (
    <article
      className="relative h-full w-full overflow-hidden rounded-[24px] bg-brand-black"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} von ${total}: ${slide.titel}`}
      aria-hidden={selected === false}
    >
      {media ? (
        <Image
          src={media.url}
          alt={media.alt}
          fill
          sizes="(max-width: 1024px) 70vw, 382px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-card-dark" />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)',
        }}
        aria-hidden
      />
      {/* Figma: padding 32, flex-end, Heading/Card 28 yellow · Label/Card 16 white */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-6 xl:p-8">
        <h3 className="w-full whitespace-pre-line text-center font-unbounded text-[clamp(1.1rem,1.5vw,1.75rem)] font-extrabold leading-[1.1] text-brand-yellow">
          {slide.titel}
        </h3>
        {slide.kurztext ? (
          <p className="mt-1 w-full text-center font-poppins text-[clamp(0.8rem,1vw,1rem)] font-medium leading-[1.3] text-white">
            {slide.kurztext}
          </p>
        ) : null}
      </div>
    </article>
  )

  if (slide.link) {
    return (
      <Link href={slide.link} className="group block h-full focus-visible:outline-offset-4">
        {card}
      </Link>
    )
  }
  return card
}

export function ServicesSlider({
  eyebrow,
  ueberschrift = 'WAS WIR MACHEN',
  items,
}: ServicesSliderProps) {
  const slides = items?.filter((i) => i?.titel) ?? []
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!slides.length) return null

  /*
   * Figma Section / Services:
   * - padding 128px, bg yellow
   * - title max 840px, gap 80px to cards
   * - cards 382×679, radius 24, gap 24, padding 32
   * - Heading/Card 28 Unbounded yellow · Label/Card 16 Poppins white
   */
  return (
    <section
      id="leistungen"
      className="bg-brand-yellow py-14 md:py-32"
      aria-label={ueberschrift || 'Leistungen'}
    >
      <div className="mx-auto w-full max-w-[1780px] px-5 sm:px-8">
        <div className="mx-auto max-w-[840px] text-center">
          {eyebrow ? (
            <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/60 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="heading-section text-brand-black md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {ueberschrift || 'Was wir machen'}
          </h2>
        </div>

        {/* Desktop: 4 cards, skaliert (Figma 382×679 auf Artboard 2908 → kleiner auf Laptop) */}
        <div className="mt-12 hidden justify-center gap-4 overflow-x-auto px-2 md:mt-16 md:gap-5 lg:flex xl:gap-6">
          {slides.map((slide, i) => (
            <div
              key={`${slide.titel}-${i}`}
              className="aspect-[382/679] w-[clamp(200px,18vw,300px)] shrink-0"
            >
              <ServiceCard slide={slide} index={i} total={slides.length} />
            </div>
          ))}
        </div>

        {/* Tablet / Mobile: carousel */}
        <div className="mt-12 md:mt-20 lg:hidden" aria-roledescription="carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {slides.map((slide, i) => (
                <div
                  key={`${slide.titel}-m-${i}`}
                  className="min-w-0 flex-[0_0_78%] sm:flex-[0_0_45%]"
                >
                  <div className="aspect-[382/679]">
                    <ServiceCard
                      slide={slide}
                      index={i}
                      total={slides.length}
                      selected={i === selected}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
