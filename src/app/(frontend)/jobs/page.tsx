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

      {/* Hero – Figma Display/Hero + Body/Lead */}
      <section className="flex flex-col items-stretch bg-brand-yellow py-20 text-brand-black md:py-32">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-8 text-center">
          <h1 className="heading-hero mx-auto max-w-[675px] whitespace-pre-line uppercase text-brand-black md:text-[88px] md:leading-[0.95] md:tracking-[-1.76px]">
            {jobs.hero.titel}
          </h1>
          <p className="body-lead mx-auto mt-6 max-w-[700px] whitespace-pre-line text-brand-black md:text-[22px]">
            {jobs.hero.untertitel}
          </p>
        </div>
      </section>

      {/* Offene Stellen – Figma: padding 128, title → list 64 */}
      <section className="flex flex-col items-stretch bg-white py-20 md:py-32">
        <div className="mx-auto flex w-full max-w-[1716px] flex-col items-center px-8">
          <h2 className="heading-section text-center text-brand-black md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {jobs.openingsTitle}
          </h2>
          <div className="mt-10 w-full md:mt-16">
            <JobAccordion jobs={active} />
          </div>
        </div>
      </section>

      {/* Prozess – Figma: padding 128, circles 80, gap 64 / 32 */}
      <section className="flex flex-col items-stretch bg-brand-black py-20 text-white md:py-32">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-8">
          <h2 className="heading-section text-center text-white md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {jobs.process.ueberschrift}
          </h2>

          <ol className="mt-10 grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {jobs.process.schritte.map((s, i) => (
              <li key={s.titel} className="flex min-w-0 flex-col items-center px-1 text-center">
                <span className="circle mb-4 grid size-20 shrink-0 place-items-center rounded-full bg-brand-yellow font-unbounded text-[22px] font-extrabold leading-none text-brand-black">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Heading/Step: Unbounded 24/700 – nicht h3 (Base = extrabold) */}
                <p className="font-unbounded text-[24px] font-bold leading-[1.5] text-white">
                  {s.titel}
                </p>
                {/* Body/Base: Poppins 16/400 – bewusst leicht, damit 1 Zeile wie Figma */}
                <p
                  className="mt-0 w-full whitespace-pre-line font-poppins text-[16px] font-normal leading-[1.5] text-white"
                  style={{ fontWeight: 400, fontSize: 16, lineHeight: 1.5 }}
                >
                  {s.kurztext}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bewerbung – Figma: padding 128, form max 900 */}
      <section className="flex flex-col items-stretch bg-white py-20 md:py-32" id="bewerbung">
        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-8">
          <h2 className="heading-section text-center text-brand-black md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {jobs.formTitle}
          </h2>
          <p className="body-lead mx-auto mt-4 max-w-[537px] text-center text-brand-black md:text-[22px]">
            {jobs.formSubtitle}
          </p>
          <div className="mt-10 w-full md:mt-12">
            <ApplicationForm positions={positions} />
          </div>
        </div>
      </section>

      <CTA {...jobs.cta} yellow={false} />
    </>
  )
}
