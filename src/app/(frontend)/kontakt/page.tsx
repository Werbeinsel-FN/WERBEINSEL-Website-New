import { ContactForm } from '@/components/forms/ContactForm'
import { kontakt, einstellungen } from '@/data/seed'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Kontakt',
  description: 'Projekt anfragen bei WERBEINSEL – Telefon, E-Mail, WhatsApp.',
  path: '/kontakt',
})

export default function KontaktPage() {
  const wa = einstellungen.whatsapp.replace(/\D/g, '')
  const mapsQuery = encodeURIComponent(
    `${einstellungen.adresse.strasse}, ${einstellungen.adresse.plz} ${einstellungen.adresse.ort}`,
  )

  return (
    <>
      <section className="bg-brand-yellow text-black">
        <div className="container-site section-pad">
          <h1 className="font-unbounded text-4xl font-extrabold uppercase leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            {kontakt.hero.titel}
          </h1>
          <p className="mt-6 max-w-2xl font-poppins text-lg md:text-xl">
            {kontakt.hero.untertitel}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-8 max-w-xl font-poppins text-lg text-black/70">{kontakt.intro}</p>
            <ContactForm />
          </div>
          <aside className="lg:pt-2">
            <div className="sticky top-28 space-y-4 rounded-[2rem] bg-brand-black p-6 text-white md:p-8">
              <ContactCard
                label={kontakt.cards.telefonLabel}
                href={`tel:${einstellungen.telefon}`}
                value={einstellungen.telefon}
              />
              <ContactCard
                label={kontakt.cards.emailLabel}
                href={`mailto:${einstellungen.email}`}
                value={einstellungen.email}
              />
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-brand-whatsapp px-5 py-4 text-white transition hover:brightness-110"
              >
                <span className="circle grid size-12 place-items-center rounded-full bg-white/20 font-unbounded text-lg font-extrabold">
                  W
                </span>
                <span>
                  <span className="block font-poppins text-xs font-bold tracking-wider opacity-80">
                    {kontakt.cards.whatsappLabel}
                  </span>
                  <span className="font-unbounded text-lg font-extrabold">
                    {kontakt.cards.whatsappCta}
                  </span>
                </span>
              </a>
              <a
                href={`https://www.openstreetmap.org/search?query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl bg-brand-card-dark px-5 py-4 transition hover:bg-white/10"
              >
                <span className="circle grid size-12 place-items-center rounded-full bg-brand-yellow font-unbounded text-sm font-extrabold text-black">
                  A
                </span>
                <span>
                  <span className="block font-poppins text-xs font-bold tracking-wider text-white/50">
                    {kontakt.cards.adresseLabel}
                  </span>
                  <span className="mt-1 block font-poppins leading-relaxed">
                    {einstellungen.adresse.strasse}
                    <br />
                    {einstellungen.adresse.plz} {einstellungen.adresse.ort}
                  </span>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  label,
  href,
  value,
}: {
  label: string
  href: string
  value: string
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 rounded-2xl bg-brand-card-dark px-5 py-4 transition hover:bg-white/10"
    >
      <span className="circle grid size-12 place-items-center rounded-full bg-brand-yellow font-unbounded text-sm font-extrabold text-black">
        {label.slice(0, 1)}
      </span>
      <span>
        <span className="block font-poppins text-xs font-bold tracking-wider text-white/50">
          {label}
        </span>
        <span className="mt-1 block font-poppins text-lg font-semibold">{value}</span>
      </span>
    </a>
  )
}
