'use client'

import { useState } from 'react'

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
  const [open, setOpen] = useState<string | null>(jobs[0]?.id ?? null)

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {jobs.map((job) => {
        const isOpen = open === job.id
        return (
          <article key={job.id} className="py-2">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : job.id)}
            >
              <div>
                <h3 className="font-unbounded text-xl font-extrabold md:text-2xl">{job.titel}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.badges?.map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-brand-yellow px-3 py-1 font-poppins text-xs font-bold"
                    >
                      {b}
                    </span>
                  ))}
                  {job.standort && (
                    <span className="rounded-full border border-black/15 px-3 py-1 font-poppins text-xs">
                      {job.standort}
                    </span>
                  )}
                </div>
              </div>
              <span
                className="circle grid size-10 shrink-0 place-items-center rounded-full bg-black font-unbounded text-lg text-brand-yellow"
                aria-hidden
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="grid gap-8 pb-8 md:grid-cols-3">
                <List title="Aufgaben" items={job.aufgaben} />
                <List title="Anforderungen" items={job.anforderungen} />
                <List title="Benefits" items={job.benefits} />
              </div>
            )}
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
      <p className="font-poppins text-xs font-bold tracking-[0.15em] text-black/45">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 font-poppins text-sm leading-relaxed">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
