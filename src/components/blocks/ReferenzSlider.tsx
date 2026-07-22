'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { resolveMedia, type MediaLike } from '@/lib/media'

export type ReferenzSlideItem = {
  titel: string
  kurztext?: string | null
  bild?: MediaLike
  link?: string | null
  kategorie?: string | null
}

export type ReferenzSliderProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  kategorie?: string | null
  items?: ReferenzSlideItem[] | null
}

export function ReferenzSlider({
  eyebrow,
  ueberschrift = 'UNSERE ARBEITEN',
  untertitel,
  items,
}: ReferenzSliderProps) {
  const slides = items?.filter((i) => i?.titel) ?? []
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
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
      id="arbeiten"
      className="section-pad bg-white"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Referenzen'}
    >
      <div className="container-site">
        <div className="mb-10">
          {eyebrow ? (
            <p className="mb-3 text-center font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="heading-section whitespace-pre-line text-center text-brand-black">
            {ueberschrift}
          </h2>
          {untertitel ? (
            <p className="body-lead mx-auto mt-4 max-w-[42ch] whitespace-pre-line text-center text-brand-black/80">
              {untertitel}
            </p>
          ) : null}
          <div className="mt-8 hidden justify-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Vorherige Referenz"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-brand-yellow text-brand-black disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Nächste Referenz"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-brand-yellow text-brand-black disabled:opacity-40"
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
              const inner = (
                <article className="overflow-hidden rounded-[24px] bg-brand-card-light">
                  <div className="relative aspect-[3/4] overflow-hidden bg-brand-muted/30">
                    {media ? (
                      <Image
                        src={media.url}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 28vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-brand-card-dark" />
                    )}
                  </div>
                </article>
              )

              return (
                <div
                  key={`${slide.titel}-${i}`}
                  className="min-w-0 flex-[0_0_78%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} von ${slides.length}`}
                >
                  {slide.link ? <Link href={slide.link}>{inner}</Link> : inner}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
