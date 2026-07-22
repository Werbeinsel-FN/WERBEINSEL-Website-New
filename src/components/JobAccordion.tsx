'use client'

import { useState } from 'react'
import Link from 'next/link'

type Job = {
  id: string
  titel: string
  badges?: string[]
  standort?: string
  pensum?: string
  aufgaben?: string[]
  anforderungen?: string[]
  benefits?: string[]
}

export function JobAccordion({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<string | null>(
    jobs.find((j) => j.id === 'praktikum')?.id ?? jobs[0]?.id ?? null,
  )

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isOpen = open === job.id
        return (
          <article
            key={job.id}
            className="overflow-hidden rounded-2xl border border-black/15 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : job.id)}
            >
              <div className="min-w-0">
                <h3 className="font-unbounded text-lg font-extrabold sm:text-xl md:text-2xl">
                  {job.titel}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.badges?.map((b, i) => (
                    <span
                      key={b}
                      className={`rounded-full px-3 py-1 font-poppins text-xs font-semibold ${
                        i === 0
                          ? 'bg-brand-yellow text-brand-black'
                          : 'bg-brand-card-light text-brand-black/70'
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`shrink-0 text-2xl leading-none text-brand-black transition ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              >
                ⌄
              </span>
            </button>

            {isOpen ? (
              <div className="border-t border-black/10 px-5 pb-6 pt-2 sm:px-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <List title="Deine Aufgaben" items={job.aufgaben} />
                  <List title="Das bringst du mit" items={job.anforderungen} />
                </div>
                <div className="mt-8">
                  <Link
                    href="#bewerbung"
                    className="inline-flex rounded-full bg-brand-black px-7 py-3.5 font-poppins text-sm font-bold tracking-wide text-white transition hover:scale-[1.02]"
                  >
                    JETZT BEWERBEN
                  </Link>
                </div>
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

function List({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <div>
      <p className="font-poppins text-sm font-bold text-brand-black">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 font-poppins text-sm leading-relaxed text-black/75">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
