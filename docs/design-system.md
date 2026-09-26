# WERBEINSEL Designsystem

Kurzanleitung für alle, die Seiten oder CMS-Blöcke bauen. Hintergrund und Entscheidungen stehen in [designfundament-auftrag.md](designfundament-auftrag.md).

**Grundregel:** Farben, Schriftgrößen, Abstände, Breiten und Rundungen kommen nur aus den Tokens. Keine Hex-Farben, keine `text-[…px]`, keine festen Seitenbreiten und keine `rounded-[…]` im Code.

| Datei | Inhalt |
|---|---|
| `src/styles/tokens.css` | alle Tokens als CSS-Variablen (einzige Quelle der Werte) |
| `src/styles/globals.css` | Breakpoints, Anbindung der Tokens an Tailwind, `container-site` / `container-text` |
| `src/components/ui/` | `Container`, `Section`, `Heading`, `Button` |

---

## 1. Breakpoints

| Name | ab | Bedeutung |
|---|---|---|
| `sm` | 660 px | Ende Handy |
| `md` | 768 px | Tablet hochkant |
| `lg` | 1024 px | Desktop |
| `xl` | 1280 px | großer Desktop |
| `2xl` | 1400 px | sehr großer Desktop |

Eigene Media Queries nutzen nur diese Werte. Geprüft wird in **390, 810, 1024, 1440 und 1920 px**.

## 2. Farben

| Tailwind-Klasse | Wert | Einsatz |
|---|---|---|
| `brand-yellow` | #FFED00 | Markenfarbe |
| `brand-black` / `brand-white` | #000 / #FFF | Grundfarben (`black`/`white` von Tailwind zeigen auf dieselben Tokens) |
| `brand-card-dark` / `brand-card-light` | #1A1A1A / #F5F5F5 | Karten auf Schwarz / auf Weiß |
| `brand-muted` | #B3B3B3 | Fließtext auf Schwarz |
| `brand-subtle` | #808080 | Nebeninfos |
| `brand-on-light` | #666666 | Nebentext auf Weiß/Hellgrau |
| `brand-divider` | #333333 | Linien auf Schwarz |
| `brand-control` / `brand-control-hover` | #595959 / #6A6A6A | Slider-Steuerung auf Schwarz |
| `brand-error` | #8A0000 | Fehlermeldungen |
| `brand-whatsapp` | #25D366 | nur WhatsApp |

Nutzbar mit allen Farb-Utilities, z. B. `bg-brand-yellow`, `text-brand-muted`, `border-brand-divider`, `fill-brand-yellow` (SVG).
Hero ohne Bild: `style={{ background: 'var(--gradient-hero-fallback)' }}`.

## 3. Schrift

Überschriften in **Unbounded** (800/900), alles andere in **Poppins** (400–700), beide lokal eingebunden.

### 3.1 Mitwachsend mit der Bildschirmbreite (390 → 1920 px)

| Klasse | Klein → Groß | Einsatz |
|---|---|---|
| `text-hero` | 32 → 88 px | Seitentitel (über `<Heading size="hero">`) |
| `text-section` | 28 → 56 px | Sektionsüberschriften (`<Heading size="section">`) |
| `text-sub` | 22 → 32 px | große Einleitungen, Unterüberschriften |
| `text-card` | 20 → 28 px | Kartentitel mit fester Kartenbreite |
| `text-step` | 18 → 24 px | kleine Titel, FAQ-Fragen, Eyebrows im Slider |
| `text-lead` | 16 → 22 px | Einleitungstexte |
| `text-body` | 16 → 18 px | Fließtext |
| `text-small` | 14 px | Eyebrows, Labels, Footer |
| `text-button` | 16 → 20 px | Buttons (`<Button>` setzt das selbst) |
| `text-client` | 14 → 18 px | Kundennamen im Laufband |

### 3.2 Relativ zur Kartenbreite (`cqi`)

Für Karten, deren Breite nicht direkt von der Bildschirmbreite abhängt. **Die Karte braucht die Klasse `@container`**, sonst beziehen sich die Werte auf den Bildschirm.

| Klasse | Klein → Groß | Einsatz |
|---|---|---|
| `text-cq-title` | 20 → 28 px | Kartentitel |
| `text-cq-body` | 14 → 18 px | Kartentext |
| `text-cq-label` | 14 → 28 px | Beschriftung unter großen Zahlen |
| `text-cq-caption` | 11 → 14 px | kleine Bildunterschriften |
| `text-cq-number` | 28 → 40 px | Schrittnummern „01“ in Karten |
| `text-cq-stat` | 40 → 130 px | große Kennzahlen |

```tsx
<article className="@container rounded-card bg-brand-card-dark p-card">
  <h3 className="font-unbounded font-extrabold text-cq-title text-brand-yellow">Titel</h3>
  <p className="font-poppins text-cq-body text-brand-muted">Text</p>
</article>
```

### 3.3 Silbentrennung

Alle Überschriften `h1`–`h4` trennen lange Wörter automatisch (Seitensprache Deutsch): nur Wörter ab 12 Zeichen, mindestens 6 Zeichen vor und nach dem Trennstrich, z. B. „PLAKAT-WERBUNG“. Browser ohne Trennwörterbuch brechen im Notfall ohne Trennstrich um. Nicht mit `hyphens-none` abschalten.

## 4. Abstände

| Klasse | Wert | Einsatz |
|---|---|---|
| `py-section` | 52 / 68 / 115 px (bis 659 / bis 1023 / ab 1024 px) | oben und unten in jeder Sektion (`<Section>` setzt das selbst) |
| `mt-stack`, `gap-stack`, `mb-stack` | 32 → 64 px | Sektionskopf → Inhalt |
| `gap-gap` | 16 → 32 px | zwischen Karten und Slides |
| `p-card` | 24 → 40 px | Innenabstand von Karten |
| `px-gutter` | 20 px bis 659 px, darüber 3,5 % | Seitenrand (`<Container>` setzt das selbst) |

## 5. Breiten und Rundungen

| Klasse | Wert | Einsatz |
|---|---|---|
| `container-site` | Inhalt max. 1780 px, Seitenrand außen | alle Sektionen (`<Container>`) |
| `container-text` | Inhalt max. 840 px, Seitenrand außen | lange Texte, Rechtstexte (`<Container variant="text">`) |
| `max-w-text` | 840 px | Textbreite innerhalb eines Containers, ohne eigenen Seitenrand |
| `rounded-pill` | rund | Buttons, Pillen, Pfeile, Kreise |
| `rounded-card` | 24 px | Karten, Bilder in Karten, Formularfelder |
| `rounded-panel` | 40 px | große Flächen (Hero-Karte) |

`max-w-[…px]` ist nur noch für Zeilenlängen von Überschriften und Absätzen erlaubt, nie für Seitenbreiten.

## 6. Komponenten

```tsx
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'

<Section background="black">
  <Container className="flex flex-col items-center">
    <Heading size="section" className="text-center text-brand-yellow">Häufige Fragen</Heading>
    <div className="mt-stack grid gap-gap sm:grid-cols-2 lg:grid-cols-3">…</div>
    <Button href="/kontakt" size="lg">Jetzt anfragen</Button>
  </Container>
</Section>
```

| Komponente | Props | Hinweise |
|---|---|---|
| `Section` | `background`: `'yellow' \| 'black' \| 'white' \| null` (Standard `'white'`), `as`, `className` | setzt `py-section`, Hintergrund über die volle Breite und passende Textfarbe; `null` = eigener Hintergrund per `style` |
| `Container` | `variant`: `'site' \| 'text'`, `as`, `className` | begrenzt den Inhalt, Seitenrand außen |
| `Heading` | `size`: `'hero' \| 'section' \| 'sub' \| 'card' \| 'step'`, `as`: `'h1'`–`'h4'` | Ebene unabhängig von der Größe; hero und section in Versalien; Zeilenhöhe 0,95 / 1,1 / 1,15, Laufweite −0,02 em |
| `Button` | `variant`: `'primary' \| 'secondary' \| 'ghost'`, `size`: `'sm' \| 'md' \| 'lg'`, `href`, `onYellow` | Schrift `text-button`, Rundung `rounded-pill` |

Standard-Ebene von `Heading`: hero → h1, section → h2, sub/card → h3, step → h4. Pro Seite genau ein `h1`.

## 7. Neue Seite oder neuer CMS-Block – Checkliste

1. Außen `<Section>`, innen `<Container>`; keine eigenen `py-*`, `px-*` oder `max-w-[…px]` für Sektion und Seite.
2. Überschriften mit `<Heading>`, Texte mit den Schrift-Tokens aus Abschnitt 3.
3. Karten: `rounded-card`, `p-card`, `@container` und `text-cq-*`; Raster mit `gap-gap`.
4. Farben nur über `brand-*`.
5. Neuen Block in `src/components/RenderBlocks.tsx` eintragen **und** mit Beispielinhalt in `src/data/block-test.ts` aufnehmen.
6. `/test-bloecke` in allen fünf Breiten ansehen und die Screenshot-Tests laufen lassen (Abschnitt 8).

## 8. Prüfen

### Testseite `/test-bloecke`

Zeigt alle CMS-Blöcke mit Beispielinhalten (`src/data/block-test.ts`). Erreichbar nur lokal (`npm run dev`) und in Vorschau-Umgebungen (`VERCEL_ENV=preview` oder `SITE_ENV=preview`), in Produktion 404, `noindex`, nicht verlinkt.

### Screenshot-Tests

Ganzseitige Aufnahmen aller Seiten und der Testseite in den fünf Prüfbreiten (`tests/e2e/visual.e2e.spec.ts`, Seitenliste in `tests/e2e/pages.json`). Jeder Test prüft zusätzlich, dass die Seite nicht breiter als der Bildschirm ist.

```bash
npm run test:visual:update   # 1. Referenzbilder vom Stand VOR der Änderung anlegen
# … Änderung umsetzen …
npm run test:visual          # 2. vergleichen; Abweichungen im Bericht:
npx playwright show-report   #    Vorher/Nachher/Differenz je Seite und Breite
```

- Die Tests starten den Dev-Server bei Bedarf selbst (`npm run dev`).
- Während der Aufnahme wird die Kopfzeile fest oben gezeigt und die Menü-Pille ausgeblendet, damit die Bilder stabil sind.
- **Referenzbilder liegen in `screenshots/baseline/<Betriebssystem>/` und bewusst nicht im Repository:** Sie sind zusammen rund 25 MB groß und hängen von Betriebssystem und Schriftdarstellung ab; unter Linux (CI) weichen sie von Windows ab. Jede:r legt sie vor einer Änderung lokal an.
- Einzelne Seite oder Breite: `npm run test:visual -- --grep "1440 px › start"`.

`node scripts/screenshots.mjs <ordner>` erstellt dieselben Aufnahmen als einfache Dateien (z. B. für Vorher/Nachher-Ordner).

### Tests und CI

| Befehl | Inhalt |
|---|---|
| `npm run lint` | ESLint |
| `npm run test:unit` | Komponententests ohne Datenbank (`tests/int/ui.int.spec.tsx`) |
| `npm run test:int` | alle Integrationstests, inkl. DB-Test (braucht Datenbank) |
| `npm run build` | Produktions-Build |

Die GitHub-CI (`.github/workflows/ci.yml`) führt Typprüfung, Lint, Unit-Tests und Build aus; jeder Fehler dort bricht ab. Ein bekannter, noch offener Fehler (DB-Test ohne Datenbank) läuft in einem eigenen, klar benannten Schritt sichtbar mit, blockiert aber nicht (siehe Abschnitt 9 im Auftrag). Wird er behoben, den Schritt in `ci.yml` blockierend machen.
