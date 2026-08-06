'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Logo } from '@/components/Logo'

export type NavChild = { label: string; url: string }
export type NavItem = { label: string; url: string; children?: NavChild[] }

type HeaderProps = {
  items: NavItem[]
  sticky?: boolean
  /** Überschreibt automatische Variante aus der Route */
  variant?: 'light' | 'dark' | 'yellow'
}

type FlatLink = { label: string; url: string }

/** Leistungen-Kinder auf dieselbe Ebene wie Jobs/Kontakt heben (kein Untermenü). */
function flattenNav(items: NavItem[]): FlatLink[] {
  const out: FlatLink[] = [{ label: 'Startseite', url: '/' }]
  for (const item of items) {
    if (item.children?.length) {
      for (const child of item.children) {
        out.push({ label: child.label, url: child.url })
      }
    } else {
      out.push({ label: item.label, url: item.url })
    }
  }
  return out
}

function linkActive(pathname: string, url: string) {
  if (url === '/') return pathname === '/'
  return pathname === url || pathname.startsWith(`${url}/`)
}

/**
 * Navigation im Stil von zwetschke.de:
 * schwebender MENÜ-Pill + vollflächiges Overlay (schwarz/gelb invertiert).
 */
export function Header({ items }: HeaderProps) {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  const [entered, setEntered] = useState(false)
  const drawerId = useId()
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const links = useMemo(() => flattenNav(items), [items])

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!open) {
      setEntered(false)
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const enterId = window.setTimeout(() => setEntered(true), 20)

    const panel = panelRef.current
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    focusables?.[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        menuBtnRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !focusables?.length) return
      const list = Array.from(focusables)
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(enterId)
    }
  }, [open, close])

  return (
    <>
      {/* Nur Logo – schwebend, kein Burger oben rechts */}
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-50">
        <div className="container-site pointer-events-auto flex h-[88px] items-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-brand-yellow px-4 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.18)] ring-2 ring-brand-black transition hover:-translate-y-0.5"
            aria-label="WERBEINSEL Startseite"
          >
            <Logo tone="light" href={null} />
          </Link>
        </div>
      </header>

      {/* Schwebender MENÜ-Pill – ausgeblendet wenn Overlay offen (X oben rechts) */}
      <button
        ref={menuBtnRef}
        type="button"
        className={`wi-menu-pill fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full bg-brand-yellow py-2 pl-2 pr-5 text-brand-black shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-black sm:bottom-8 sm:right-8 sm:pr-6 ${
          open ? 'pointer-events-none scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label="Menü öffnen"
        tabIndex={open ? -1 : 0}
        onClick={toggle}
      >
        <span
          className="grid h-11 w-11 place-items-center rounded-full bg-brand-black sm:h-12 sm:w-12"
          aria-hidden
        >
          <span className="relative block h-3.5 w-[18px]">
            <span className="absolute left-0 top-0 h-[2.5px] w-full rounded-full bg-brand-yellow" />
            <span className="absolute left-0 top-[6px] h-[2.5px] w-full rounded-full bg-brand-yellow" />
            <span className="absolute left-0 top-[12px] h-[2.5px] w-full rounded-full bg-brand-yellow" />
          </span>
        </span>
        <span className="font-unbounded text-sm font-extrabold uppercase tracking-[0.06em] sm:text-base">
          Menü
        </span>
      </button>

      {/* Vollflächiges Overlay: schwarz, Akzente gelb */}
      <div
        className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          ref={panelRef}
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className={`wi-menu-panel absolute inset-0 flex flex-col overflow-hidden bg-brand-black text-brand-yellow transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            entered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-yellow text-brand-black transition hover:scale-105 sm:right-8 sm:top-8 sm:h-14 sm:w-14"
            aria-label="Menü schließen"
          >
            <span className="font-unbounded text-3xl leading-none sm:text-4xl" aria-hidden>
              ×
            </span>
          </button>

          <nav
            className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-24 sm:px-8"
            aria-label="Hauptnavigation"
          >
            <ul className="flex w-full max-w-xl flex-col items-center gap-1 sm:gap-1.5">
              {links.map((link, i) => {
                const active = linkActive(pathname, link.url)
                return (
                  <li
                    key={`${link.url}-${link.label}`}
                    className={`wi-menu-item w-full transition-all duration-500 ${
                      entered
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: entered ? `${80 + i * 45}ms` : '0ms' }}
                  >
                    <Link
                      href={link.url}
                      onClick={close}
                      className={`group mx-auto flex w-fit max-w-full items-center justify-center rounded-full px-6 py-2.5 text-center font-unbounded text-[clamp(1.35rem,4.5vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-tight transition duration-200 sm:px-8 sm:py-3 ${
                        active
                          ? 'bg-brand-yellow text-brand-black'
                          : 'text-brand-yellow hover:bg-brand-yellow hover:text-brand-black'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
