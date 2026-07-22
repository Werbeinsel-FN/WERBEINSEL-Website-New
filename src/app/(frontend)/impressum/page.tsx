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
        <div className="container-site pb-14 pt-6 text-center sm:pb-20 sm:pt-10">
          <h1 className="font-unbounded text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold uppercase leading-[1.05]">
            {impressum.hero.titel}
          </h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-site mx-auto max-w-2xl text-center">
          <pre className="whitespace-pre-wrap font-poppins text-base leading-relaxed text-black/80 md:text-lg">
            {impressum.text}
          </pre>
        </div>
      </section>
    </>
  )
}
