'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const STORAGE_KEY = 'werbeinsel-cookie-consent'

type Consent = {
  necessary: true
  analytics: boolean
  decided: boolean
}

const defaultConsent: Consent = { necessary: true, analytics: false, decided: false }

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        setConsent(JSON.parse(raw) as Consent)
      } else {
        setConsent(defaultConsent)
      }
    } catch {
      setConsent(defaultConsent)
    }
  }, [])

  function save(next: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setConsent(next)
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: next }))
  }

  if (!consent || consent.decided) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/10 bg-white p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] md:p-6"
    >
      <Container className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-unbounded text-sm font-extrabold">Cookies</p>
          <p className="mt-2 font-poppins text-sm leading-relaxed text-black/70">
            Wir nutzen notwendige Cookies für den Betrieb der Website. Optionale Analyse-Cookies
            setzen wir nur mit Ihrer Zustimmung. Mehr in der{' '}
            <Link href="/datenschutz" className="underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => save({ necessary: true, analytics: false, decided: true })}
            className="rounded-full border border-black/20 px-5 py-3 font-poppins text-sm font-semibold"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => save({ necessary: true, analytics: true, decided: true })}
            className="rounded-full bg-black px-5 py-3 font-poppins text-sm font-bold text-brand-yellow"
          >
            Analyse erlauben
          </button>
        </div>
      </Container>
    </div>
  )
}
