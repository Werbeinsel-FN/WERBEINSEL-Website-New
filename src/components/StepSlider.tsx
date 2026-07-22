'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type Step = {
  titel: string
  kurztext: string
  foto?: { url: string; alt?: string | null } | null
}

type Props = {
  eyebrow?: string
  schritte: Step[]
}

/**
 * Geführter Schritt-Slider „So läuft's".
 * - Nummer automatisch aus Reihenfolge (01, 02, …)
 * - <= 5 Schritte  -> Punkte-Anzeige
 * - >= 6 Schritte  -> Fortschrittsbalken + Zähler „Schritt X / Y"
 * - ohne Foto      -> Fallback: gelbes Feld mit Zahl
 * - Tastatur (←/→), Swipe (Embla), reduced-motion-freundlich (kein Autoplay)
 */
export function StepSlider({ eyebrow, schritte }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selected, setSelected] = useState(0)
  const total = schritte?.length ?? 0
  const useDots = total <= 5

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

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const goTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  if (!total) return null

  return (
    <section
      className="bg-brand-black text-white"
      aria-roledescription="carousel"
      aria-label={eyebrow || "So läuft's"}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
    >
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:py-24">
        {eyebrow && (
          <p className="mb-8 font-poppins font-bold tracking-[0.2em] text-brand-yellow">
            {eyebrow}
          </p>
        )}

        {/* Slider-Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {schritte.map((step, i) => {
              const nummer = String(i + 1).padStart(2, '0')
              return (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Schritt ${i + 1} von ${total}`}
                >
                  <div className="grid items-stretch gap-8 md:grid-cols-[minmax(0,42%)_1fr] md:gap-16">
                    {/* Foto mit Overlay-Zahl (oder Fallback) */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                      {step.foto?.url ? (
                        <>
                          <Image
                            src={step.foto.url}
                            alt={step.foto.alt || step.titel}
                            fill
                            sizes="(max-width: 768px) 100vw, 42vw"
                            className="object-cover"
                          />
                          {/* Scrim für garantierte Lesbarkeit */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0" />
                        </>
                      ) : (
                        // Fallback: gelbes Feld
                        <div className="absolute inset-0 bg-brand-yellow" />
                      )}
                      <span
                        className={`absolute bottom-4 left-6 font-unbounded font-black leading-none text-[clamp(88px,14vw,220px)] ${
                          step.foto?.url ? 'text-brand-yellow' : 'text-black'
                        }`}
                        aria-hidden="true"
                      >
                        {nummer}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center">
                      <h3 className="font-unbounded text-3xl font-extrabold leading-[1.15] md:text-5xl">
                        {step.titel}
                      </h3>
                      <p className="mt-6 max-w-[46ch] font-poppins text-lg leading-relaxed text-white/70 md:text-2xl">
                        {step.kurztext}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Steuerung: Fortschritt + Navigation */}
        <div className="mt-10 flex items-center justify-between gap-6">
          {/* Fortschritt (adaptiv) */}
          <div className="min-w-0 flex-1">
            {useDots ? (
              <div className="flex items-center gap-3" role="tablist" aria-label="Schritte">
                {schritte.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Zu Schritt ${i + 1}`}
                    aria-selected={i === selected}
                    onClick={() => goTo(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === selected ? 'w-10 bg-brand-yellow' : 'w-3 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            ) : (
              <div>
                <p className="mb-3 font-poppins text-sm font-bold tracking-widest text-brand-yellow">
                  {`SCHRITT ${String(selected + 1).padStart(2, '0')} / ${total}`}
                </p>
                <div
                  className="h-3 w-full overflow-hidden rounded-full bg-white/20"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={total}
                  aria-valuenow={selected + 1}
                >
                  <div
                    className="h-full rounded-full bg-brand-yellow transition-[width]"
                    style={{ width: `${((selected + 1) / total) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex shrink-0 gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={selected === 0}
              aria-label="Vorheriger Schritt"
              className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              disabled={selected === total - 1}
              aria-label="Nächster Schritt"
              className="grid h-14 w-14 place-items-center rounded-full bg-brand-yellow text-black disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
