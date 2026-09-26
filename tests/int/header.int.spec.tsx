import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { flattenNav, Header, menuLabel, type NavItem } from '@/components/Header'

vi.mock('next/navigation', () => ({
  usePathname: () => '/leistungen/plakatwerbung',
}))

afterEach(cleanup)

const items: NavItem[] = [
  {
    label: 'Leistungen',
    url: '/services',
    children: [
      { label: 'Plakatwerbung', url: '/leistungen/plakatwerbung' },
      { label: 'Folierung & Beschriftung', url: '/leistungen/folierung' },
      { label: 'Foto & Video', url: '/leistungen/foto-video' },
    ],
  },
  { label: 'Jobs', url: '/jobs' },
  { label: 'Kontakt', url: '/kontakt' },
]

function renderHeader() {
  render(<Header items={items} />)
  const burger = screen.getByRole('button', { name: 'Menü öffnen' })
  const dialog = document.getElementById(burger.getAttribute('aria-controls')!)!
  return { burger, dialog }
}

function openMenu() {
  const result = renderHeader()
  fireEvent.click(result.burger)
  return result
}

describe('flattenNav', () => {
  it('ersetzt einen Eintrag mit Unterpunkten durch seine Unterpunkte', () => {
    expect(flattenNav(items).map((l) => l.label)).toEqual([
      'Plakatwerbung',
      'Folierung & Beschriftung',
      'Foto & Video',
      'Jobs',
      'Kontakt',
    ])
  })
})

describe('menuLabel', () => {
  it('bricht lange Bezeichnungen fest nach dem „&“ um', () => {
    const { container } = render(<span>{menuLabel('Folierung & Beschriftung')}</span>)
    expect(container.innerHTML).toBe('<span>Folierung&nbsp;&amp;<br>Beschriftung</span>')
  })

  it('lässt kurze Bezeichnungen zusammen, ohne Umbruch vor dem „&“', () => {
    expect(menuLabel('Foto & Video')).toBe('Foto & Video')
    expect(menuLabel('Jobs')).toBe('Jobs')
  })
})

describe('Header-Menü', () => {
  it('ist anfangs geschlossen und über aria-controls mit dem Menü verbunden', () => {
    const { burger, dialog } = renderHeader()
    expect(burger.getAttribute('aria-expanded')).toBe('false')
    expect(dialog.getAttribute('role')).toBe('dialog')
    expect(dialog.hidden).toBe(true)
  })

  it('öffnet per Burger, sperrt das Scrollen und setzt den Fokus ins Menü', () => {
    const { burger, dialog } = openMenu()
    expect(burger.getAttribute('aria-expanded')).toBe('true')
    expect(dialog.hidden).toBe(false)
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.activeElement).toBe(within(dialog).getByRole('button', { name: 'Menü schließen' }))
  })

  it('zeigt die Menüpunkte in der richtigen Reihenfolge und markiert die aktuelle Seite', () => {
    const { dialog } = openMenu()
    const nav = within(dialog).getByRole('navigation', { name: 'Hauptnavigation' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((a) => a.textContent?.replace(/ /g, ' '))).toEqual([
      'Plakatwerbung',
      'Folierung &Beschriftung',
      'Foto & Video',
      'Jobs',
      'Kontakt',
    ])
    expect(links[0].getAttribute('aria-current')).toBe('page')
    expect(links.slice(1).every((a) => !a.hasAttribute('aria-current'))).toBe(true)
  })

  it('schließt per X und gibt den Fokus an den Burger zurück', () => {
    const { burger, dialog } = openMenu()
    fireEvent.click(within(dialog).getByRole('button', { name: 'Menü schließen' }))
    expect(dialog.hidden).toBe(true)
    expect(burger.getAttribute('aria-expanded')).toBe('false')
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(burger)
  })

  it('schließt per Esc und gibt den Fokus an den Burger zurück', () => {
    const { burger, dialog } = openMenu()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(dialog.hidden).toBe(true)
    expect(document.activeElement).toBe(burger)
  })

  it('schließt beim Klick auf einen Menüpunkt', () => {
    const { dialog } = openMenu()
    fireEvent.click(within(dialog).getByRole('link', { name: 'Jobs' }))
    expect(dialog.hidden).toBe(true)
  })

  it('hält den Fokus im Menü gefangen (Tab und Umschalt+Tab)', () => {
    const { dialog } = openMenu()
    const focusables = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button'))
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    last.focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(document.activeElement).toBe(first)

    first.focus()
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(last)
  })
})
