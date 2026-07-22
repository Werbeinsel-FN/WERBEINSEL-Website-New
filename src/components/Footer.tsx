import Link from 'next/link'
import { Logo } from '@/components/Logo'

export type FooterLink = { label: string; url: string }
export type FooterColumn = { titel: string; links?: FooterLink[] | null }
export type FooterSocial = { plattform: string; url: string }

export type FooterProps = {
  tagline?: string | null
  spalten?: FooterColumn[] | null
  rechtslinks?: FooterLink[] | null
  socials?: FooterSocial[] | null
}

function socialInitial(plattform: string) {
  return (plattform.trim()[0] || '•').toUpperCase()
}

export function Footer({ tagline, spalten, rechtslinks, socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="container-site section-pad">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_2fr]">
          <div>
            <Logo tone="dark" />
            {tagline ? (
              <p className="mt-5 max-w-[28ch] font-poppins text-base leading-relaxed text-brand-muted">
                {tagline}
              </p>
            ) : null}
            {socials?.length ? (
              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social Media">
                {socials.map((s) => (
                  <li key={`${s.plattform}-${s.url}`}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="circle grid h-11 w-11 place-items-center rounded-full bg-brand-yellow font-unbounded text-sm font-black text-brand-black transition hover:scale-105"
                      aria-label={s.plattform}
                      title={s.plattform}
                    >
                      {socialInitial(s.plattform)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {spalten?.length ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {spalten.map((col) => (
                <div key={col.titel}>
                  <h3 className="font-unbounded text-sm font-extrabold tracking-wide text-brand-yellow">
                    {col.titel}
                  </h3>
                  {col.links?.length ? (
                    <ul className="mt-4 space-y-3">
                      {col.links.map((link) => (
                        <li key={`${link.label}-${link.url}`}>
                          <Link
                            href={link.url}
                            className="font-poppins text-sm text-white/80 transition hover:text-brand-yellow"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-poppins text-sm text-brand-muted">
            © {year} WERBEINSEL. Alle Rechte vorbehalten.
          </p>
          {rechtslinks?.length ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {rechtslinks.map((link) => (
                <li key={`${link.label}-${link.url}`}>
                  <Link
                    href={link.url}
                    className="font-poppins text-sm text-brand-muted transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
