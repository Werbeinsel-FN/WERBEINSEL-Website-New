'use client'

import { useState } from 'react'
import Link from 'next/link'

type Job = {
  id: string
  titel: string
  badges?: string[]
  standort?: string
  pensum?: string
  intro?: string
  aufgaben?: string[]
  anforderungen?: string[]
  benefits?: string[]
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M7 10.5L14 17.5L21 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function JobAccordion({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<string | null>(
    jobs.find((j) => j.id === 'praktikum')?.id ?? jobs[0]?.id ?? null,
  )

  return (
    <div className="flex w-full flex-col gap-4">
      {jobs.map((job) => {
        const isOpen = open === job.id
        return (
          <article
            key={job.id}
            className="w-full overflow-hidden rounded-card border-[1.7px] border-brand-black bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-8"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : job.id)}
            >
              <div className="min-w-0">
                <h3 className="font-poppins text-xl font-bold leading-[1.5] text-brand-black md:text-2xl">
                  {job.titel}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.badges?.map((b, i) => (
                    <span
                      key={b}
                      className={`inline-flex items-center rounded-pill px-4 py-2 font-poppins text-sm font-semibold leading-none ${
                        i === 0
                          ? 'bg-brand-yellow text-brand-black'
                          : 'bg-brand-card-light text-brand-black'
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <ChevronIcon open={isOpen} />
            </button>

            {isOpen ? (
              <div className="px-6 pb-8 md:px-8">
                {job.intro ? (
                  <p className="mb-6 font-poppins text-base font-normal leading-[1.5] text-brand-black md:whitespace-nowrap md:text-lg">
                    {job.intro}
                  </p>
                ) : null}

                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  <List title="Deine Aufgaben" items={job.aufgaben} />
                  <List title="Das bringst du mit" items={job.anforderungen} />
                </div>

                <div className="mt-6 flex items-center justify-center border-t-[1.7px] border-brand-black pt-6 md:mt-8 md:pt-[26px] lg:justify-start">
                  <Link
                    href="#bewerbung"
                    className="inline-flex h-[54px] items-center justify-center rounded-pill bg-brand-black px-8 font-poppins text-base font-bold text-brand-yellow transition hover:bg-black/90"
                  >
                    Jetzt bewerben
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
      <p className="font-poppins text-base font-bold text-brand-black md:text-lg">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 font-poppins text-sm leading-[1.5] text-brand-black md:text-base"
          >
            <span
              className="mt-2 size-2 shrink-0 rounded-pill bg-brand-yellow"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
