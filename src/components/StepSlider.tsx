'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { resolveMedia, type MediaLike } from '@/lib/media'

type Step = {
  titel: string
  kurztext: string
  foto?: MediaLike
}

type Props = {
  eyebrow?: string
  schritte: Step[]
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="h-[42%] w-[42%]"
    >
      <path
        d={dir === 'left' ? 'M15 6L9 12L15 18' : 'M9 6L15 12L9 18'}
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Figma Prozess-Slider – volle Maße erst ab 2xl,
 * auf Mittelbreiten kompakt (Titel, Body, Zahl, Buttons).
 */
export function StepSlider({ eyebrow, schritte }: Props) {
  const [selected, setSelected] = useState(0)
  const total = schritte?.length ?? 0

  const prev = useCallback(() => setSelected((i) => Math.max(0, i - 1)), [])
  const next = useCallback(
    () => setSelected((i) => Math.min(total - 1, i + 1)),
    [total],
  )

  if (!total) return null

  const step = schritte[selected]
  const nummer = String(selected + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')
  const foto = resolveMedia(step?.foto, step?.titel)

  return (
    <section
      className="bg-brand-black text-white outline-none"
      aria-roledescription="carousel"
      aria-label={eyebrow || 'Prozess'}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
      tabIndex={0}
    >
      <div className="mx-auto w-full max-w-[1780px] px-5 py-14 sm:px-8 md:py-20 xl:py-24 2xl:py-[200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14 2xl:gap-[120px]">
          <div className="relative w-full min-w-0 overflow-hidden rounded-[20px] lg:w-[min(48%,420px)] lg:shrink-0 xl:w-[min(46%,520px)] 2xl:w-[min(100%,760px)] 2xl:rounded-[24px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:aspect-[3/4] lg:aspect-[3/4] 2xl:aspect-[760/1013] 2xl:rounded-[24px]">
              {foto ? (
                <>
                  <Image
                    src={foto.url}
                    alt={foto.alt || step.titel}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 45vw, 760px"
                    className="object-cover"
                    priority={selected === 0}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
                    }}
                    aria-hidden
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-brand-card-dark" />
              )}
              <span
                className="absolute bottom-1 left-3 font-unbounded text-[clamp(2.75rem,14vw,4.5rem)] font-black leading-[0.9] text-brand-yellow sm:left-4 lg:text-6xl xl:text-7xl 2xl:bottom-4 2xl:left-11 2xl:text-[clamp(6rem,14vw,18.75rem)]"
                aria-hidden
              >
                {nummer}
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {eyebrow ? (
              <p className="font-poppins text-xs font-bold uppercase leading-normal tracking-[0.08em] text-brand-yellow sm:text-sm lg:text-base xl:text-lg 2xl:text-[30px] 2xl:tracking-[1.8px]">
                {eyebrow}
              </p>
            ) : null}

            <h3 className="mt-3 max-w-full whitespace-pre-line break-words font-unbounded text-[clamp(1.25rem,3.2vw,1.75rem)] font-extrabold leading-[1.15] text-white hyphens-none sm:mt-4 lg:text-[1.75rem] xl:text-[2rem] 2xl:mt-8 2xl:text-[clamp(2.5rem,3.5vw,4rem)] 2xl:leading-[1.08]">
              {step?.titel}
            </h3>
            <p className="mt-3 max-w-[900px] whitespace-pre-line font-poppins text-sm font-normal leading-[1.5] text-brand-muted sm:text-[15px] lg:mt-4 lg:text-base xl:text-lg 2xl:mt-8 2xl:text-[clamp(1.25rem,2vw,2.25rem)]">
              {step?.kurztext}
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6 lg:mt-auto lg:pt-8 2xl:pt-16">
              <div className="min-w-0 w-full max-w-[420px] flex-1">
                <p className="mb-2 font-poppins text-[11px] font-bold tracking-widest text-brand-yellow sm:text-xs lg:text-sm">
                  {`SCHRITT ${nummer} / ${totalLabel}`}
                </p>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-brand-control sm:h-2"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={total}
                  aria-valuenow={selected + 1}
                >
                  <div
                    className="h-full rounded-full bg-brand-yellow transition-[width] duration-300"
                    style={{ width: `${((selected + 1) / total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex shrink-0 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={prev}
                  disabled={selected === 0}
                  aria-label="Vorheriger Schritt"
                  className="grid size-11 place-items-center rounded-full bg-brand-control text-white transition hover:bg-brand-control-hover disabled:opacity-40 sm:size-12 lg:size-14 xl:size-16 2xl:size-[130px]"
                >
                  <Chevron dir="left" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={selected === total - 1}
                  aria-label="Nächster Schritt"
                  className="grid size-11 place-items-center rounded-full bg-brand-yellow text-brand-black transition hover:bg-brand-yellow/90 disabled:opacity-40 sm:size-12 lg:size-14 xl:size-16 2xl:size-[130px]"
                >
                  <Chevron dir="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
