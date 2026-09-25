import { ContactForm } from '@/components/forms/ContactForm'
import { getKontaktContent, getSiteChrome, getFormOptions } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { Container } from '@/components/ui/Container'

export const metadata = buildMetadata({
  title: 'Kontakt',
  description: 'Projekt anfragen bei WERBEINSEL – Telefon, E-Mail, WhatsApp.',
  path: '/kontakt',
})

export default async function KontaktPage() {
  const [kontakt, { einstellungen }, formOptions] = await Promise.all([
    getKontaktContent(),
    getSiteChrome(),
    getFormOptions(),
  ])
  const wa = einstellungen.whatsapp.replace(/\D/g, '')
  const mapsQuery = encodeURIComponent(
    `${einstellungen.adresse.strasse}, ${einstellungen.adresse.plz} ${einstellungen.adresse.ort}`,
  )

  return (
    <>
      {/* Hero – gelb, Display/Hero + Body/Lead (Figma) */}
      <section className="flex flex-col items-stretch bg-brand-yellow py-section text-brand-black">
        <Container className="flex flex-col items-center text-center">
          <h1 className="heading-hero mx-auto max-w-[640px] whitespace-pre-line uppercase text-brand-black">
            {kontakt.hero.titel}
          </h1>
          <p className="body-lead mx-auto mt-6 max-w-[625px] whitespace-pre-line text-brand-black">
            {kontakt.hero.untertitel}
          </p>
        </Container>
      </section>

      {/* Formular – Figma: max 1700, padding 0 32 */}
      <section className="bg-white py-section">
        <Container className="flex flex-col items-center">
          <ContactForm formOptions={formOptions} />
        </Container>
      </section>

      {/* Direktkontakt – Figma: padding 128, icons 80, Label/Meta + Body/Lead */}
      <section className="flex flex-col items-stretch bg-brand-black py-section text-white">
        <Container className="flex flex-col items-center">
          <h2 className="heading-section mb-12 whitespace-pre-line text-center text-brand-yellow md:mb-16">
            {kontakt.contactTitle}
          </h2>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="circle grid size-20 shrink-0 place-items-center rounded-full bg-brand-whatsapp text-white">
                <ChatBubbleIcon />
              </span>
              <p className="font-unbounded text-lg font-extrabold leading-[1.5] uppercase text-brand-yellow">
                {kontakt.cards.whatsappLabel}
              </p>
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-whatsapp px-6 py-3 font-poppins text-base font-semibold text-white transition hover:brightness-110"
              >
                {kontakt.cards.whatsappCta}
              </a>
            </div>
            <ContactCol
              label={kontakt.cards.adresseLabel}
              href={`https://www.openstreetmap.org/search?query=${mapsQuery}`}
              value={`${einstellungen.adresse.strasse}\n${einstellungen.adresse.plz} ${einstellungen.adresse.ort}`}
              icon="pin"
              external
            />
          </div>
        </Container>
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
      className="flex flex-col items-center gap-4 text-center transition hover:opacity-90"
    >
      <span className="circle grid size-20 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-black">
        {icon === 'phone' && <PhoneIcon />}
        {icon === 'mail' && <MailIcon />}
        {icon === 'pin' && <PinIcon />}
      </span>
      <p className="font-unbounded text-lg font-extrabold leading-[1.5] uppercase text-brand-yellow">
        {label}
      </p>
      <p className="whitespace-pre-line font-poppins text-lead font-medium leading-[1.6] text-white">
        {value}
      </p>
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  )
}

function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden>
      <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.4 1.2 4.55 3.1 6.05L5 21l4.35-1.75c.85.25 1.73.4 2.65.4 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
    </svg>
  )
}
