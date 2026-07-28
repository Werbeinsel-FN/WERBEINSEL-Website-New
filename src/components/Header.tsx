'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Logo } from '@/components/Logo'

export type NavChild = { label: string; url: string }
export type NavItem = { label: string; url: string; children?: NavChild[] }

type HeaderProps = {
  items: NavItem[]
  sticky?: boolean
  /** Überschreibt automatische Variante aus der Route */
  variant?: 'light' | 'dark' | 'yellow'
}

/**
 * Figma Header: gelber Balken (#FFED00) + schwarzer Burger.
 * Logo: gleiches Motiv, Wortmarke schwarz (Kontrast auf Gelb).
 */
function variantFromPath(_pathname: string): 'yellow' {
  return 'yellow'
}

const variantStyles = {
  yellow: {
    bar: 'bg-brand-yellow text-brand-black',
    logoTone: 'light' as const,
    burger: 'bg-brand-black',
    drawer: 'bg-brand-yellow text-brand-black',
  },
  dark: {
    bar: 'bg-brand-black text-white',
    logoTone: 'dark' as const,
    burger: 'bg-white',
    drawer: 'bg-brand-black text-white',
  },
  light: {
    bar: 'bg-white text-brand-black',
    logoTone: 'light' as const,
    burger: 'bg-brand-black',
    drawer: 'bg-white text-brand-black',
  },
} as const

/**
 * Figma: Logo links, Burger rechts (auch Desktop) – Navigation im Overlay.
 */
export function Header({ items, sticky = true, variant }: HeaderProps) {
  const pathname = usePathname() || '/'
  const resolved = variant ?? variantFromPath(pathname)
  const [open, setOpen] = useState(false)
  const drawerId = useId()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const styles = variantStyles[resolved]

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const drawer = drawerRef.current
    const focusables = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    focusables?.[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        burgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !focusables?.length) return
      const list = Array.from(focusables)
      const first = list[0]
      const last = list[lastIndex(list)]
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
    }
  }, [open, close])

  return (
    <header className={`${styles.bar} ${sticky ? 'sticky top-0 z-50' : 'relative z-50'}`}>
      <div className="relative flex h-[88px] w-full items-center">
        <div className="container-site flex items-center">
          <Logo tone={styles.logoTone} />
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="absolute right-5 top-1/2 grid h-8 w-8 shrink-0 -translate-y-1/2 place-items-center sm:right-6 lg:right-8"
          aria-expanded={open}
          aria-controls={drawerId}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={toggle}
        >
          <span className="relative block h-3.5 w-[21px]" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-full ${styles.burger} transition ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full ${styles.burger} transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-full ${styles.burger} transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Menü schließen"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />
        <div
          ref={drawerRef}
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col ${styles.drawer} shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex h-[88px] items-center justify-between px-5 sm:px-8">
            <Logo tone={styles.logoTone} href={null} />
            <button
              type="button"
              onClick={close}
              className="grid h-10 w-10 place-items-center rounded-full font-unbounded text-2xl leading-none"
              aria-label="Menü schließen"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 pb-10" aria-label="Hauptnavigation">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={close}
                  className="block py-3 font-unbounded text-xl font-extrabold uppercase"
                >
                  Startseite
                </Link>
              </li>
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    onClick={close}
                    className="block py-3 font-unbounded text-xl font-extrabold uppercase"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <ul className="mb-2 ml-1 space-y-1 border-l-2 border-current/20 pl-4">
                      {item.children.map((child) => (
                        <li key={child.url}>
                          <Link
                            href={child.url}
                            onClick={close}
                            className="block py-2 font-poppins text-base"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

function lastIndex<T>(arr: T[]) {
  return Math.max(0, arr.length - 1)
}
