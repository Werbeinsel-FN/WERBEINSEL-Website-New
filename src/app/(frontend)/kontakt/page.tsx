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
  const address = `${einstellungen.adresse.strasse}, ${einstellungen.adresse.plz} ${einstellungen.adresse.ort}`
  const mapsQuery = encodeURIComponent(address)

  return (
    <>
      {/* Hero – gelb, schließt an Header an */}
      <section className="bg-brand-yellow text-black">
        <div className="container-site pb-14 pt-6 text-center sm:pb-16 sm:pt-8 md:pb-20">
          <h1 className="font-unbounded text-[clamp(2.25rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.08]">
            {kontakt.hero.titel}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-poppins text-base leading-relaxed text-black/80 md:text-xl">
            {kontakt.hero.untertitel}
          </p>
        </div>
      </section>

      {/* Formular – zentriert, volle Breite wie Figma */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>

      {/* Direktkontakt – schwarzer Block mit 4 Spalten */}
      <section className="bg-brand-black text-white">
        <div className="container-site section-pad !pb-16">
          <h2 className="mb-12 text-center font-unbounded text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase text-brand-yellow">
            {kontakt.contactTitle}
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <ContactCol
              label={kontakt.cards.telefonLabel}
              href={`tel:${einstellungen.telefon}`}
              value={einstellungen.telefon}
              icon="phone"
            />
            <ContactCol
              label={kontakt.cards.emailLabel}
              href={`mailto:${einstellungen.email}`}
              value={einstellungen.email}
              icon="mail"
            />
            <div className="flex flex-col items-center text-center">
              <span className="circle mb-4 grid size-16 place-items-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon />
              </span>
              <p className="mb-3 font-poppins text-xs font-bold tracking-[0.18em] text-white/60">
                {kontakt.cards.whatsappLabel}
              </p>
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-6 py-3 font-poppins text-sm font-bold text-white transition hover:brightness-110"
              >
                {kontakt.cards.whatsappCta}
              </a>
            </div>
            <ContactCol
              label={kontakt.cards.adresseLabel}
              href={`https://www.openstreetmap.org/search?query=${mapsQuery}`}
              value={address}
              icon="pin"
              external
            />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCol({
  label,
  href,
  value,
  icon,
  external,
}: {
  label: string
  href: string
  value: string
  icon: 'phone' | 'mail' | 'pin'
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex flex-col items-center text-center transition hover:opacity-90"
    >
      <span className="circle mb-4 grid size-16 place-items-center rounded-full bg-brand-yellow text-brand-black">
        {icon === 'phone' && <PhoneIcon />}
        {icon === 'mail' && <MailIcon />}
        {icon === 'pin' && <PinIcon />}
      </span>
      <p className="mb-2 font-poppins text-xs font-bold tracking-[0.18em] text-white/60">{label}</p>
      <p className="max-w-[16ch] font-poppins text-base font-semibold leading-snug text-white">
        {value}
      </p>
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.8-.37-4.01-1.06l-.29-.17-3.12.82.83-3.04-.18-.31a8.05 8.05 0 0 1-1.23-4.33c0-4.46 3.63-8.09 8.09-8.09zm4.5 10.4c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.1-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.05-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.05-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36 2.24.97 2.24.65 2.64.61.4-.04 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.15-.42-.26z" />
    </svg>
  )
}
