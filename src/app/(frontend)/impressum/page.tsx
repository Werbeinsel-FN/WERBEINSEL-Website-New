import { impressum } from '@/data/seed'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Impressum',
  description: 'Impressum – WERBEINSEL (Platzhalter).',
  path: '/impressum',
})

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-brand-yellow text-black">
        <div className="container-site section-pad text-center">
          <h1 className="font-unbounded text-4xl font-extrabold uppercase md:text-6xl">
            {impressum.hero.titel}
          </h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-site max-w-2xl">
          <pre className="whitespace-pre-wrap font-poppins text-base leading-relaxed text-black/80">
            {impressum.text}
          </pre>
        </div>
      </section>
    </>
  )
}
