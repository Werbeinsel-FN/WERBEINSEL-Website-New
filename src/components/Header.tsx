'use client'

import Link from 'next/link'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Logo } from '@/components/Logo'

export type NavChild = { label: string; url: string }
export type NavItem = { label: string; url: string; children?: NavChild[] }

type HeaderProps = {
  items: NavItem[]
  sticky?: boolean
  variant?: 'light' | 'dark' | 'yellow'
}

const variantStyles = {
  light: {
    bar: 'bg-white text-brand-black',
    logoTone: 'light' as const,
    link: 'text-brand-black hover:text-brand-black/70',
    burger: 'bg-brand-black',
    drawer: 'bg-white text-brand-black',
  },
  dark: {
    bar: 'bg-brand-black text-white',
    logoTone: 'dark' as const,
    link: 'text-white hover:text-brand-yellow',
    burger: 'bg-white',
    drawer: 'bg-brand-black text-white',
  },
  yellow: {
    bar: 'bg-brand-yellow text-brand-black',
    logoTone: 'light' as const,
    link: 'text-brand-black hover:text-brand-black/70',
    burger: 'bg-brand-black',
    drawer: 'bg-brand-yellow text-brand-black',
  },
} as const

export function Header({ items, sticky = true, variant = 'light' }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const drawerId = useId()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const styles = variantStyles[variant]

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((v) => !v), [])

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
    }
  }, [open, close])

  return (
    <header className={`${styles.bar} ${sticky ? 'sticky top-0 z-50' : 'relative z-50'}`}>
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo tone={styles.logoTone} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {items.map((item) =>
            item.children?.length ? (
              <div key={item.label} className="group relative">
                <Link href={item.url} className={`font-poppins text-sm font-semibold ${styles.link}`}>
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-10 min-w-[12rem] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="rounded-2xl bg-white py-2 text-brand-black shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <li key={child.url}>
                        <Link
                          href={child.url}
                          className="block px-4 py-2 font-poppins text-sm hover:bg-brand-yellow"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.url}
                href={item.url}
                className={`font-poppins text-sm font-semibold ${styles.link}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          ref={burgerRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls={drawerId}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={toggle}
        >
          <span className="sr-only">{open ? 'Schließen' : 'Menü'}</span>
          <span className="relative block h-4 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-full ${styles.burger} transition ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full ${styles.burger} transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-full ${styles.burger} transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
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
          <div className="flex h-16 items-center justify-between px-5 sm:h-20">
            <span className="font-unbounded text-sm font-extrabold">Menü</span>
            <button
              type="button"
              onClick={close}
              className="grid h-10 w-10 place-items-center rounded-full font-unbounded text-2xl leading-none"
              aria-label="Menü schließen"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 pb-10" aria-label="Mobile Navigation">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    onClick={close}
                    className="block py-3 font-unbounded text-xl font-extrabold"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <ul className="mb-2 ml-3 space-y-1 border-l-2 border-current/20 pl-4">
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
