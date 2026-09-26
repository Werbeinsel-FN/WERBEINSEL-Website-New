import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

afterEach(cleanup)

describe('Container', () => {
  it('begrenzt standardmäßig auf die Inhaltsbreite mit Seitenrand', () => {
    render(<Container data-testid="c">Inhalt</Container>)
    const el = screen.getByTestId('c')
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveProperty('className', 'container-site')
  })

  it('nutzt in der Variante text die Textbreite', () => {
    render(
      <Container data-testid="c" variant="text">
        Inhalt
      </Container>,
    )
    const el = screen.getByTestId('c')
    expect(el.className).toBe('container-text')
  })

  it('übernimmt Tag und zusätzliche Klassen', () => {
    render(
      <Container data-testid="c" as="footer" className="flex">
        Inhalt
      </Container>,
    )
    const el = screen.getByTestId('c')
    expect(el.tagName).toBe('FOOTER')
    expect(el.className).toContain('flex')
  })
})

describe('Section', () => {
  it('ist standardmäßig eine weiße <section> mit Sektionsabstand', () => {
    render(<Section data-testid="s">Inhalt</Section>)
    const el = screen.getByTestId('s')
    expect(el.tagName).toBe('SECTION')
    expect(el.className).toContain('py-section')
    expect(el.className).toContain('bg-brand-white')
  })

  it.each([
    ['yellow', 'bg-brand-yellow', 'text-brand-black'],
    ['black', 'bg-brand-black', 'text-brand-white'],
    ['white', 'bg-brand-white', 'text-brand-black'],
  ] as const)('setzt Hintergrund %s', (background, bg, text) => {
    render(
      <Section data-testid="s" background={background}>
        Inhalt
      </Section>,
    )
    const el = screen.getByTestId('s')
    expect(el.className).toContain(bg)
    expect(el.className).toContain(text)
  })

  it('setzt bei background={null} keine Hintergrund- und Textfarbe', () => {
    render(
      <Section data-testid="s" background={null} style={{ backgroundColor: '#123456' }}>
        Inhalt
      </Section>,
    )
    const el = screen.getByTestId('s')
    expect(el.className).toBe('py-section')
    expect(el.style.backgroundColor).toBe('rgb(18, 52, 86)')
  })

  it('übernimmt Tag und zusätzliche Klassen', () => {
    render(
      <Section data-testid="s" as="div" className="relative" id="kontakt">
        Inhalt
      </Section>,
    )
    const el = screen.getByTestId('s')
    expect(el.tagName).toBe('DIV')
    expect(el.id).toBe('kontakt')
    expect(el.className).toContain('relative')
  })
})

describe('Heading', () => {
  it.each([
    ['hero', 'H1', 'text-hero'],
    ['section', 'H2', 'text-section'],
    ['sub', 'H3', 'text-sub'],
    ['card', 'H3', 'text-card'],
    ['step', 'H4', 'text-step'],
  ] as const)('Größe %s: Standard-Ebene %s und Token %s', (size, tag, token) => {
    render(<Heading size={size}>Titel</Heading>)
    const el = screen.getByText('Titel')
    expect(el.tagName).toBe(tag)
    expect(el.className).toContain(token)
    expect(el.className).toContain('tracking-[-0.02em]')
  })

  it('wählt die semantische Ebene unabhängig von der Größe', () => {
    render(
      <Heading size="hero" as="h2">
        Titel
      </Heading>,
    )
    const el = screen.getByRole('heading', { level: 2 })
    expect(el.className).toContain('text-hero')
  })

  it('setzt Versalien nur für hero und section', () => {
    render(
      <>
        <Heading size="section">Groß</Heading>
        <Heading size="card" as="h2">
          Klein
        </Heading>
      </>,
    )
    expect(screen.getByText('Groß').className).toContain('uppercase')
    expect(screen.getByText('Klein').className).toContain('normal-case')
  })

  it('setzt die Zeilenhöhe je Größe', () => {
    render(
      <>
        <Heading size="hero">A</Heading>
        <Heading size="section">B</Heading>
        <Heading size="step">C</Heading>
      </>,
    )
    expect(screen.getByText('A').className).toContain('leading-[0.95]')
    expect(screen.getByText('B').className).toContain('leading-[1.1]')
    expect(screen.getByText('C').className).toContain('leading-[1.15]')
  })
})

describe('Button', () => {
  it.each(['sm', 'md', 'lg'] as const)('Größe %s nutzt --text-button und --radius-pill', (size) => {
    render(<Button size={size}>Los</Button>)
    const el = screen.getByRole('button', { name: 'Los' })
    expect(el.className).toContain('text-button')
    expect(el.className).toContain('rounded-pill')
    expect(el.className).not.toMatch(/\btext-(sm|base|xl)\b/)
    expect(el.className).not.toContain('rounded-full')
  })

  it('rendert mit href einen Link, extern in neuem Tab', () => {
    render(<Button href="https://example.com">Extern</Button>)
    const el = screen.getByRole('link', { name: 'Extern' })
    expect(el.getAttribute('target')).toBe('_blank')
    expect(el.getAttribute('rel')).toBe('noopener noreferrer')
  })
})
