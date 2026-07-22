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
        <div className="container-site pb-14 pt-6 text-center sm:pb-16 sm:pt-8 md:pb-20">
          <h1 className="font-unbounded text-[clamp(2.1rem,6.5vw,5rem)] font-extrabold uppercase leading-[1.08]">
            {jobs.hero.titel}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-poppins text-base leading-relaxed text-black/80 md:text-xl">
            {jobs.hero.untertitel}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="mb-10 text-center font-unbounded text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase">
            {jobs.openingsTitle}
          </h2>
          <JobAccordion jobs={active} />
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="container-site">
          <h2 className="mb-12 text-center font-unbounded text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase">
            {jobs.process.ueberschrift}
          </h2>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.process.schritte.map((s, i) => (
              <li key={s.titel} className="text-center lg:text-left">
                <span className="circle mx-auto mb-5 grid size-16 place-items-center rounded-full bg-brand-yellow font-unbounded text-xl font-extrabold text-black lg:mx-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-unbounded text-xl font-extrabold">{s.titel}</h3>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-white/65 md:text-base">
                  {s.kurztext}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-white" id="bewerbung">
        <div className="container-site max-w-3xl">
          <h2 className="text-center font-unbounded text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase">
            {jobs.formTitle}
          </h2>
          <p className="mx-auto mt-3 mb-10 max-w-xl text-center font-poppins text-base text-black/65">
            {jobs.formSubtitle}
          </p>
          <ApplicationForm positions={positions} />
        </div>
      </section>

      <CTA {...jobs.cta} yellow />
    </>
  )
}
