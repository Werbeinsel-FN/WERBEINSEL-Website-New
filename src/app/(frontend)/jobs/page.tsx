import { ApplicationForm } from '@/components/forms/ApplicationForm'
import { JobAccordion } from '@/components/JobAccordion'
import { CTA } from '@/components/blocks/CTA'
import { JsonLd } from '@/components/JsonLd'
import { jobs } from '@/data/seed'
import { buildMetadata, jobPostingJsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Jobs',
  description: 'Karriere bei WERBEINSEL – offene Stellen und Initiativbewerbung.',
  path: '/jobs',
})

export default function JobsPage() {
  const active = jobs.list.filter((j) => j.aktiv)
  const positions = active.map((j) => j.titel)

  return (
    <>
      {active.map((job) => (
        <JsonLd
          key={job.id}
          data={jobPostingJsonLd({
            titel: job.titel,
            standort: job.standort,
            pensum: job.pensum,
            beschreibung: [
              job.aufgaben?.map((a) => `• ${a}`).join('\n'),
              job.anforderungen?.map((a) => `• ${a}`).join('\n'),
            ]
              .filter(Boolean)
              .join('\n\n'),
          })}
        />
      ))}

      <section className="bg-brand-yellow text-black">
        <div className="container-site section-pad">
          <h1 className="font-unbounded text-4xl font-extrabold uppercase leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            {jobs.hero.titel}
          </h1>
          <p className="mt-6 max-w-2xl font-poppins text-lg md:text-xl">
            {jobs.hero.untertitel}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="mb-8 font-unbounded text-3xl font-extrabold md:text-4xl">
            Offene Stellen
          </h2>
          <JobAccordion jobs={active} />
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="container-site">
          <p className="mb-3 font-poppins text-xs font-bold tracking-[0.2em] text-brand-yellow">
            {jobs.process.eyebrow}
          </p>
          <h2 className="mb-12 font-unbounded text-3xl font-extrabold md:text-4xl">
            {jobs.process.ueberschrift}
          </h2>
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {jobs.process.schritte.map((s, i) => (
              <li key={s.titel}>
                <span className="circle mb-4 grid size-14 place-items-center rounded-full bg-brand-yellow font-unbounded text-lg font-extrabold text-black">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-unbounded text-xl font-extrabold">{s.titel}</h3>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-white/65">
                  {s.kurztext}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="mb-8 font-unbounded text-3xl font-extrabold md:text-4xl">Bewerbung</h2>
          <ApplicationForm positions={positions} />
        </div>
      </section>

      <CTA {...jobs.cta} yellow />
    </>
  )
}
