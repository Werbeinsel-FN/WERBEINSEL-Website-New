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
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!slides.length) return null

  return (
    <section
      id="leistungen"
      className="section-pad bg-brand-yellow"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Leistungen'}
    >
      <div className="container-site">
        <div className="mb-10 text-center">
          {eyebrow ? (
            <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-black/60 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-unbounded text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold uppercase text-brand-black">
            {ueberschrift || 'WAS WIR MACHEN'}
          </h2>
          <div className="mt-8 hidden justify-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Vorherige Leistung"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-brand-black text-brand-yellow disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Nächste Leistung"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-brand-black text-brand-yellow disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="pl-5 sm:pl-6 lg:pl-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6 lg:pr-8">
            {slides.map((slide, i) => {
              const media = resolveMedia(slide.bild, slide.titel)
              const card = (
                <article
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-brand-black"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} von ${slides.length}: ${slide.titel}`}
                  aria-hidden={i !== selected}
                >
                  {media ? (
                    <Image
                      src={media.url}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 28vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-brand-card-dark" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-unbounded text-xl font-extrabold text-brand-yellow md:text-2xl">
                      {slide.titel}
                    </h3>
                    {slide.kurztext ? (
                      <p className="mt-2 line-clamp-2 font-poppins text-sm text-white md:text-base">
                        {slide.kurztext}
                      </p>
                    ) : null}
                  </div>
                </article>
              )

              return (
                <div
                  key={`${slide.titel}-${i}`}
                  className="group min-w-0 flex-[0_0_78%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                >
                  {slide.link ? (
                    <Link href={slide.link} className="block focus-visible:outline-offset-4">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
