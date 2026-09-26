'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/ui/Container'

export type NavChild = { label: string; url: string }
export type NavItem = { label: string; url: string; children?: NavChild[] }

type HeaderProps = {
  items: NavItem[]
  sticky?: boolean
}

type FlatLink = { label: string; url: string }

/** Menüpunkte ohne Untermenü: ein Eintrag mit Unterpunkten wird durch seine Unterpunkte ersetzt. */
export function flattenNav(items: NavItem[]): FlatLink[] {
  const out: FlatLink[] = []
  for (const item of items) {
    if (item.children?.length) {
      for (const child of item.children) out.push({ label: child.label, url: child.url })
    } else {
      out.push({ label: item.label, url: item.url })
    }
  }
  return out
}

/** Ab dieser Länge bricht eine Bezeichnung mit „&“ fest nach dem „&“ um (z. B. „Folierung & Beschriftung“). */
const MENU_BREAK_MIN_LENGTH = 17

/**
 * Menübeschriftung: lange Bezeichnungen mit „&“ brechen auf jedem Gerät fest nach dem „&“ um,
 * kurze („Foto & Video“) bleiben zusammen; vor dem „&“ nie ein Umbruch (geschütztes Leerzeichen).
 */
export function menuLabel(label: string): ReactNode {
  const glued = label.replace(/ &/g, ' &')
  const at = glued.indexOf('& ')
  if (label.length < MENU_BREAK_MIN_LENGTH || at < 0) return glued
  return (
    <>
      {glued.slice(0, at + 1)}
      <br />
      {glued.slice(at + 2)}
    </>
  )
}

function isCurrentPage(pathname: string, url: string): boolean {
  if (!url.startsWith('/') || url.includes('#')) return false
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)
  return clean(pathname) === clean(url)
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Header mit Logo links und Burger rechts; der Burger öffnet ein schwarzes Vollbild-Menü. */
export function Header({ items, sticky = true }: HeaderProps) {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)
  const menuId = useId()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const links = useMemo(() => flattenNav(items), [items])

  // Seitenwechsel (z. B. Zurück-Taste) schließt das Menü
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const burger = burgerRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const focusables = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
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
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      burger?.focus()
    }
  }, [open])

  return (
    <>
      <header
        className={`bg-brand-yellow text-brand-black ${sticky ? 'sticky top-0 z-50' : 'relative z-50'}`}
      >
        <div className="flex h-[88px] w-full items-center">
          <Container className="flex items-center justify-between">
            <Logo tone="light" />
            <button
              ref={burgerRef}
              type="button"
              className="wi-menu-button text-brand-black"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              onClick={() => setOpen(true)}
            >
              <span className="wi-menu-icon" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </Container>
        </div>
      </header>

      {/* Vollbild-Menü: schwarz, Schrift weiß, gelb bei Hover, Fokus, Antippen und für die aktuelle Seite */}
      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className="wi-menu fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-brand-black text-white"
        onClick={(e) => {
          // Jeder Link im Menü (auch das Logo) schließt es
          if ((e.target as HTMLElement).closest('a')) close()
        }}
      >
        <div className="flex h-[88px] w-full shrink-0 items-center">
          <Container className="flex items-center justify-between">
            <Logo tone="dark" />
            <button
              ref={closeRef}
              type="button"
              className="wi-menu-button wi-menu-close rounded-pill bg-brand-yellow text-brand-black"
              aria-label="Menü schließen"
              onClick={close}
            >
              <span className="wi-menu-icon wi-menu-icon--close" aria-hidden>
                <span />
                <span />
              </span>
            </button>
          </Container>
        </div>

        {/* Menüpunkte horizontal und vertikal mittig; die Kopfzeile oben wird unten als Abstand gespiegelt */}
        <nav aria-label="Hauptnavigation" className="flex flex-1 flex-col justify-center pb-[88px]">
          <Container>
            <ul className="flex flex-col items-center py-stack text-center">
              {links.map((link) => {
                const current = isCurrentPage(pathname, link.url)
                return (
                  <li key={`${link.url}-${link.label}`}>
                    <Link
                      href={link.url}
                      aria-current={current ? 'page' : undefined}
                      className="wi-menu-hover block py-2 font-unbounded text-section font-extrabold uppercase leading-[1.15] tracking-tight"
                    >
                      {menuLabel(link.label)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </nav>
      </div>
    </>
  )
}
