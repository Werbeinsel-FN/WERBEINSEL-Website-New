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

function SocialIcon({ plattform }: { plattform: string }) {
  const p = plattform.toLowerCase()
  if (p.includes('instagram')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    )
  }
  if (p.includes('facebook')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    )
  }
  if (p.includes('tiktok')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14.5 3c.4 2.4 1.9 4.2 4.5 4.5v3c-1.6 0-3-.5-4.2-1.3v5.5A6.2 6.2 0 1 1 9 8.6v3.2a3 3 0 1 0 2.3 2.9V3h3.2z" />
      </svg>
    )
  }
  return <span className="font-unbounded text-sm font-black">{plattform[0]?.toUpperCase()}</span>
}

export function Footer({ tagline, spalten, socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="container-site section-pad !pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <Logo tone="dark" />
            {tagline ? (
              <p className="mt-5 max-w-[28ch] font-poppins text-base leading-relaxed text-brand-muted">
                {tagline}
              </p>
            ) : null}
          </div>

          {spalten?.map((col) => (
            <div key={col.titel}>
              <h3 className="font-poppins text-xs font-bold tracking-[0.18em] text-white uppercase">
                {col.titel}
              </h3>
              {col.links?.length ? (
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${link.label}-${link.url}`}>
                      <Link
                        href={link.url}
                        className="font-poppins text-sm text-white/75 transition hover:text-brand-yellow"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {socials?.length ? (
            <div>
              <h3 className="font-poppins text-xs font-bold tracking-[0.18em] text-white uppercase">
                Social Media
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3" aria-label="Social Media">
                {socials.map((s) => (
                  <li key={`${s.plattform}-${s.url}`}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="circle grid h-11 w-11 place-items-center rounded-full bg-brand-yellow text-brand-black transition hover:scale-105"
                      aria-label={s.plattform}
                      title={s.plattform}
                    >
                      <SocialIcon plattform={s.plattform} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 text-center">
          <p className="font-poppins text-sm text-brand-muted">
            © {year} WERBEINSEL. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
