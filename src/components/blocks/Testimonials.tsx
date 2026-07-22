'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export type TestimonialItem = {
  zitat: string
  /** CMS-Feld */
  autor?: string | null
  /** Seed-/Alias-Feld für Autor */
  name?: string | null
  firma?: string | null
  rolle?: string | null
}

export type TestimonialsProps = {
  ueberschrift?: string | null
  testimonials?: TestimonialItem[] | null
  items?: TestimonialItem[] | null
}

export function Testimonials({ ueberschrift, testimonials, items }: TestimonialsProps) {
  const raw = testimonials ?? items ?? []
  const list = raw
    .map((t) => ({
      zitat: t.zitat,
      autor: t.autor || t.name || '',
      firma: t.firma || t.rolle || null,
    }))
    .filter((t) => t.zitat && t.autor)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap())
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

  if (!list.length) return null

  return (
    <section
      className="section-pad bg-brand-black text-white"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Kundenstimmen'}
    >
      <div className="container-site">
        {ueberschrift ? (
          <h2 className="mb-12 text-center font-unbounded text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold">
            {ueberschrift}
          </h2>
        ) : null}

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {list.map((item, i) => (
                <div
                  key={`${item.autor}-${i}`}
                  className="min-w-0 flex-[0_0_100%] px-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} von ${list.length}`}
                  aria-hidden={i !== selected}
                >
                  <blockquote className="text-center">
                    <p className="font-poppins text-[clamp(1.25rem,3vw,1.85rem)] font-medium leading-[1.45] text-white">
                      „{item.zitat}“
                    </p>
                    <footer className="mt-8">
                      <cite className="not-italic">
                        <span className="block font-poppins text-base font-semibold text-brand-yellow">
                          {item.autor}
                        </span>
                        {item.firma ? (
                          <span className="mt-1 block font-poppins text-sm text-brand-muted">
                            {item.firma}
                          </span>
                        ) : null}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Vorheriges Zitat"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            >
              ‹
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {list.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={`Zitat ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === selected ? 'w-8 bg-brand-yellow' : 'w-2.5 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Nächstes Zitat"
              className="circle grid h-12 w-12 place-items-center rounded-full bg-brand-yellow text-brand-black"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
