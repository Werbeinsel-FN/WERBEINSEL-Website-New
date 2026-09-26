# WERBEINSEL Website – Designfundament

**Status:** Entwurf, Werte nach zwetschke.de ausgerichtet (von Kristijan so gewünscht). Umsetzung erst nach Freigabe.
**Repository:** `Werbeinsel-FN/WERBEINSEL-Website-New` (Next.js 16, Payload 3, Tailwind 4)
**Stand der Analyse:** Commit `39c328f` („Use brand color tokens for menu hover pill styles“)

---

## 1. Ziel

Ein einziges, verbindliches Designsystem im Code, auf dem alle Seiten aufbauen. Farben, Schriftgrößen, Abstände, Breiten und Rundungen kommen nur noch aus zentralen Tokens. Raster, Umbruchpunkte und das Mitwachsen der Größen folgen dem System von **zwetschke.de**. Farben, Schriften und Inhalte bleiben die der WERBEINSEL. Die Seite soll auf Handy, Tablet und Desktop ohne Darstellungsfehler funktionieren und keine neuen Vercel-spezifischen Abhängigkeiten bekommen.

**Grundsatz:** Der Umbau verändert das Aussehen nur an den Stellen, die in Abschnitt 5 ausdrücklich als Korrektur genannt sind.

---

## 2. Befund (Ausgangslage)

Das Fundament ist angelegt, wird aber kaum genutzt.

| Bereich | Vorhanden | Tatsächliche Nutzung |
|---|---|---|
| Farb-Tokens | `src/styles/tokens.css`, in `globals.css` als `brand-*` an Tailwind gebunden | `#FFED00` steht 291-mal fest im Code, `#B8B8B8` 14-mal statt Token `#B3B3B3` |
| Mitwachsende Schriftgrößen | `--text-hero`, `--text-section`, `--text-lead` und Klassen `.heading-hero`, `.heading-section`, `.body-lead` | Zusätzlich feste Pixelwerte: `md:text-[56px]` 23-mal, `md:text-[22px]` 14-mal, `md:text-[88px]` 3-mal – sie stehen immer zusammen mit der Token-Klasse und greifen nicht (siehe unten) |
| Container | Komponente `components/ui/Container.tsx` und Klasse `.container-site` | Komponente wird **nirgends** verwendet; 25 Dateien setzen `max-w-[1780px]`, `max-w-[1716px]` oder `max-w-[1700px]` direkt |
| Sektionsabstände | Klasse `.section-pad` mit Tokens | Sektionen nutzen direkt `py-32` (29-mal), `py-20` (28-mal) und weitere Werte |
| Breakpoints | Tailwind-Standard (640 / 768 / 1024 / 1280 / 1536) | Eigene Media Queries in `globals.css` mit 641 px und 1025 px |
| Rundungen | keine Tokens | `rounded-[24px]`, `rounded-3xl`, `rounded-[20px]`, `[16px]`, `[28px]`, `[40px]` gemischt |

**Überschriften (korrigiert nach Prüfung im Browser):** Die festen Werte `md:text-[56px]`, `md:text-[88px]` und `md:text-[22px]` stehen ausnahmslos zusammen mit `.heading-section`, `.heading-hero` bzw. `.body-lead`. Diese Klassen stehen in der CSS-Reihenfolge später und **überschreiben die festen Pixelwerte**. Die Überschriften springen also nicht auf 56 bzw. 88 px, sondern folgen schon heute den bisherigen, mitwachsenden Token-Werten. Die festen Werte sind wirkungslos und nur Ballast im Code.

Gemessene Größen heute (bisherige Token-Werte) im Vergleich zu den neuen Werten aus Abschnitt 5.2:

| Token | 810 px | 1024 px | 1440 px | 1920 px |
|---|---|---|---|---|
| `--text-section` heute → neu | 29,8 → 35,7 | 34,5 → 39,6 | 43,7 → 47,2 | 54,2 → 56 |
| `--text-hero` heute → neu | 42,0 → 47,4 | 51,0 → 55,2 | 68,5 → 70,4 | 88 → 88 |
| `--text-lead` heute → neu | 17,2 → 17,7 | 18,0 → 18,5 | 19,4 → 20,1 | 21,1 → 22 |

Bei 390 px sind alte und neue Werte gleich.

**Nicht betroffen:** `src/app/coming-soon/ComingSoonClient.tsx` hat bewusst eigene, in sich geschlossene Variablen. Diese Seite bleibt unverändert.

---

## 3. Referenz: Messwerte von zwetschke.de

Ausgelesen am 26.09.2026 aus den Stylesheets von zwetschke.de.

| Bereich | zwetschke.de |
|---|---|
| Inhaltsbreite | max. 1780 px |
| Seitenrand | 3,5 % der Bildschirmbreite; bis 659 px fest 20 px |
| Umbruchpunkte | Handy bis 659 px, Tablet bis 1023 px, Desktop ab 1024 px; einzelne Anpassungen bei 1280 und 1400 px |
| Sektionsüberschrift | mitwachsend 35 → 75 px (ca. 430 → 2000 px Breite), bei 1440 px ca. 60 px |
| Hero | mitwachsend 42 → 75 px; Tablet 37 → 60 px |
| Überschriften-Typografie | Laufweite −2 %, Zeilenhöhe 0,95 (Hero) bis 1,15 |
| Fließtext | 23 px Desktop, 17 px bis 1023 px |
| Sektionsabstand | ca. 115 px Desktop, ca. 68 px Tablet, ca. 51 px Handy |

**Übernommen wird das System** (Breite, Seitenrand, Umbruchpunkte, durchgehendes Mitwachsen, Abstände). **Nicht übernommen werden die absoluten Schriftgrößen**, weil Unbounded deutlich breiter läuft als die Schrift von zwetschke. Die WERBEINSEL-Größen aus Figma bleiben die Obergrenze. Fließtext bleibt bei max. 18 px, weil 23 px in Poppins zu groß wirken.

---

## 4. Arbeitsweise

1. Arbeiten ausschließlich im Zweig `develop`. Kein direkter Push auf `main`.
2. Vercel erzeugt für `develop` eine Vorschau-Adresse. Freigabe durch Kristijan dort, erst danach Merge nach `main`.
3. Ein Commit pro Aufgabe aus Abschnitt 6, mit klarer Beschreibung.
4. **Vorher/Nachher-Screenshots** mit dem vorhandenen Playwright von allen Seiten in den Breiten **390, 810, 1024, 1440 und 1920 px**. Abweichungen, die nicht in Abschnitt 6 als Korrektur beschrieben sind, gelten als Fehler.
5. `npx tsc --noEmit`, `npm run lint` und `npm run build` müssen nach jeder Aufgabe fehlerfrei durchlaufen.

---

## 5. Die Tokens

Alle Werte stehen in `src/styles/tokens.css` und werden in `globals.css` per `@theme inline` an Tailwind gebunden, sodass Klassen wie `bg-brand-yellow`, `text-section` oder `p-card` entstehen.

### 5.1 Farben

| Token | Wert | Hinweis |
|---|---|---|
| `--color-yellow` | `#FFED00` | Markenfarbe |
| `--color-black` | `#000000` | |
| `--color-white` | `#FFFFFF` | |
| `--color-card-dark` | `#1A1A1A` | Karten auf Schwarz |
| `--color-card-light` | `#F5F5F5` | Karten auf Weiß |
| `--color-text-muted` | `#B3B3B3` | Fließtext auf Schwarz; ersetzt `#B8B8B8` |
| `--color-text-subtle` | `#808080` | Nebeninfos |
| `--color-text-on-light` | `#666666` | Nebentext auf Weiß/Hellgrau (Kontrast 5,7:1); nicht „text-secondary“, das ist in Figma `#B3B3B3` |
| `--color-divider` | `#333333` | Linien auf Schwarz |
| `--color-control` | `#595959` | Slider-Steuerung auf Schwarz (Fortschrittsbalken, Zurück-Pfeil) |
| `--color-control-hover` | `#6A6A6A` | Hover dazu |
| `--color-error` | `#8A0000` | Fehlermeldungen in Formularen |
| `--color-whatsapp` | `#25D366` | nur WhatsApp |
| `--gradient-hero-fallback` | `radial-gradient(… #3a3a3a → #111 → #000)` | Ersatzhintergrund für Hero ohne Bild |

Tailwind-Klassen: `brand-yellow`, `brand-black`, `brand-white`, `brand-card-dark`, `brand-card-light`, `brand-muted`, `brand-subtle`, `brand-on-light`, `brand-divider`, `brand-control`, `brand-control-hover`, `brand-error`, `brand-whatsapp` (z. B. `bg-brand-control`, `text-brand-on-light`, `fill-brand-yellow`).

### 5.2 Schriftgrößen

Durchgehend mitwachsend von **390 px bis 1920 px** Bildschirmbreite, wie bei zwetschke.

| Token | Klein → Groß | Wert | bei 810 / 1440 px |
|---|---|---|---|
| `--text-hero` | 32 → 88 px | `clamp(2rem, 1.108rem + 3.66vw, 5.5rem)` | 47 / 70 |
| `--text-section` | 28 → 56 px | `clamp(1.75rem, 1.304rem + 1.83vw, 3.5rem)` | 36 / 47 |
| `--text-sub` | 22 → 32 px | `clamp(1.375rem, 1.216rem + 0.6536vw, 2rem)` | 25 / 29 |
| `--text-card` | 20 → 28 px | `clamp(1.25rem, 1.123rem + 0.5229vw, 1.75rem)` | 22 / 25 |
| `--text-step` | 18 → 24 px | `clamp(1.125rem, 1.029rem + 0.3922vw, 1.5rem)` | 20 / 22 |
| `--text-lead` | 16 → 22 px | `clamp(1rem, 0.9044rem + 0.3922vw, 1.375rem)` | 18 / 20 |
| `--text-body` | 16 → 18 px | `clamp(1rem, 0.9681rem + 0.1307vw, 1.125rem)` | 17 / 17 |
| `--text-small` | 14 px | `0.875rem` | 14 / 14 |
| `--text-button` | 16 → 20 px | `clamp(1rem, 0.9363rem + 0.2614vw, 1.25rem)` | 17 / 19 |
| `--text-client` | 14 → 18 px | `clamp(0.875rem, 0.8113rem + 0.2614vw, 1.125rem)` | 15 / 17 |

Überschriften: Laufweite `-0.02em`; Zeilenhöhe `0.95` (Hero), `1.1` (Sektion), `1.15` (kleinere Überschriften).
Schriften: **Unbounded** (800, 900) für Überschriften, **Poppins** (400, 500, 600, 700) für alles andere. Beide bleiben lokal eingebunden (`next/font/local`).

### 5.3 Abstände

**Sektionsabstand** in Stufen, wie bei zwetschke:

| Token | bis 659 px | 660–1023 px | ab 1024 px |
|---|---|---|---|
| `--space-section` | 52 px | 68 px | 115 px |

**Weitere Abstände**, mitwachsend von 390 bis 1920 px:

| Token | Klein → Groß | Wert | Einsatz |
|---|---|---|---|
| `--space-stack` | 32 → 64 px | `clamp(2rem, 1.49rem + 2.092vw, 4rem)` | Überschrift → Inhalt |
| `--space-gap` | 16 → 32 px | `clamp(1rem, 0.7451rem + 1.046vw, 2rem)` | zwischen Karten und Slides |
| `--space-card` | 24 → 40 px | `clamp(1.5rem, 1.245rem + 1.046vw, 2.5rem)` | Innenabstand Karten |

### 5.4 Breiten und Seitenrand

| Token | Wert | Einsatz |
|---|---|---|
| `--container-max` | 1780 px | Inhaltsbreite aller Sektionen |
| `--container-text` | 840 px | lange Fließtexte, Rechtstexte |
| `--gutter` | 20 px bis 659 px, darüber `3.5vw` | Seitenrand des Containers |

Farbige Hintergrundflächen laufen immer über die volle Breite, nur der Inhalt wird begrenzt.

**Seitenrand liegt außen (festgelegt in T5):** 1780 px bzw. 840 px sind die Breite des *Inhalts*; der Seitenrand kommt außen dazu. Das entspricht der Messung bei zwetschke.de (bei 1920 px: 1920 − 2 × 3,5 % ≈ 1786 px Inhalt). Umgesetzt als Klassen `container-site` und `container-text` in `globals.css` (`max-width: calc(Inhaltsbreite + 2 × --gutter)`, `padding-inline: --gutter`); die Komponente `Container` nutzt diese Klassen.

### 5.5 Breakpoints

In `globals.css` per `@theme` festlegen, angelehnt an zwetschke:

| Name | ab | Bedeutung |
|---|---|---|
| `sm` | 660 px | Ende Handy |
| `md` | 768 px | Tablet hochkant |
| `lg` | 1024 px | Desktop |
| `xl` | 1280 px | großer Desktop |
| `2xl` | 1400 px | sehr großer Desktop |

Eigene Media Queries verwenden ausschließlich diese Werte.

### 5.6 Rundungen

| Token | Wert | Einsatz |
|---|---|---|
| `--radius-pill` | 9999 px | Buttons, Kunden-Pillen, Slider-Pfeile, Tags |
| `--radius-card` | 24 px | Karten, Bilder in Karten |
| `--radius-panel` | 40 px | große Flächen |

---

## 6. Aufgaben

### T1 – Tokens
- `tokens.css` gemäß Abschnitt 5 ergänzen, `globals.css` per `@theme inline` binden.
- `--text-hero`, `--text-section` und `--text-lead` behalten ihre bisherigen Werte; die neuen Werte aus 5.2 setzt erst T4.
- Breakpoints und Media Queries bleiben unverändert (Umstellung in T5).
- **Fertig, wenn:** alle Tokens als Tailwind-Klassen nutzbar sind und die Screenshots keine sichtbare Änderung zeigen.

### T2 – Basis-Komponenten
- `Container`: max. 1780 px, Seitenrand über `--gutter`; Variante `text` mit 840 px.
- Neue Komponente `Section` mit Hintergrund `yellow | black | white`, Abstand über `--space-section`.
- Neue Komponente `Heading` mit den Größen `hero | section | sub | card | step`; semantische Ebene (h1–h4) unabhängig von der Größe wählbar.
- `Button` nutzt `--radius-pill`. Die Schriftgrößen bleiben vorerst fest (`text-sm` / `text-base` / `text-xl`); die Umstellung auf `--text-button` folgt in T4, weil sie sichtbar ist (Hero- und CTA-Buttons bei 390 px 16 statt 20 px).
- **Fertig, wenn:** Komponenten vorhanden und mit Unit-Tests abgedeckt sind und die Screenshots keine sichtbare Änderung zeigen.

### T3 – Farben umstellen
- Alle festen Farbwerte in `.tsx` durch Token-Klassen ersetzen (`#FFED00` → `brand-yellow` usw.).
- `#B8B8B8` → `brand-muted` (#B3B3B3); `#595959` → `brand-control`, Hover `#6A6A6A` → `brand-control-hover`; `#666` → `brand-on-light`; Hero-Verlauf → `var(--gradient-hero-fallback)`.
- SVG-Illustrationen: `fill="#FFED00"` / `stroke="#FFED00"` → `className="fill-brand-yellow"` / `"stroke-brand-yellow"`.
- **Fertig, wenn:** `grep -rnE "#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b" src --include=*.tsx | grep -v "src/app/coming-soon/"` keine Treffer mehr liefert (sechs- und dreistellige Hex-Werte).

### T4 – Schriftgrößen umstellen (**sichtbare Korrektur**)
- `--text-hero`, `--text-section` und `--text-lead` auf die neuen Werte aus 5.2 setzen.
- `Button` für alle Größen auf `--text-button` umstellen (aus T2 verschoben) und den Unit-Test in `tests/int/ui.int.spec.tsx` anpassen. **Erwartete Änderung:** Button-Schrift 20 → 16 px bei 390, ca. 17 px bei 810, ca. 18,7 px bei 1440, unverändert 20 px bei 1920.
- Alle `text-[…px]` und `md:text-[…px]` durch die Tokens aus 5.2 ersetzen. Die wirkungslosen `md:text-[56px]`, `md:text-[88px]` und `md:text-[22px]` (siehe Abschnitt 2) entfallen ersatzlos.
- **Erwartete Änderung:** Überschriften und Einleitungstexte werden ab ca. 800 px **etwas größer** als heute (Tabelle in Abschnitt 2, z. B. Sektionsüberschrift bei 810 px ca. 36 statt 30 px, bei 1440 px ca. 47 statt 44 px). Längere Überschriften können dadurch eine Zeile mehr brauchen (z. B. „VIER DISZIPLINEN, EIN ANSPRUCH“ auf `/services` bei 810 px). Wird auf der Vorschau gemeinsam geprüft.
- **Fertig, wenn:** keine festen Pixel-Schriftgrößen mehr in `.tsx`.

**Stand der Umsetzung (auf der Vorschau geprüft und freigegeben)**

Aufgeräumt ohne sichtbare Wirkung: 103 wirkungslose Klassen neben `.heading-section`, `.heading-hero` und `.body-lead` entfernt (`md:text-[…]`, `md:leading-*`, `md:tracking-*` sowie Größe, Zeilenhöhe und Laufweite im Hero). Diese Klassen setzen Größe, Zeilenhöhe und Laufweite selbst und stehen in der CSS-Reihenfolge später.

Sichtbare Änderungen, Größen in px (vorher → nachher):

| Stelle | Token | 390 | 810 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|---|
| Sektionsüberschriften | section | 28 → 28 | 30 → 36 | 34 → 40 | 44 → 47 | 54 → 56 |
| Hero-Überschriften | hero | 32 → 32 | 42 → 47 | 51 → 55 | 68 → 70 | 88 → 88 |
| Einleitungstexte (`body-lead`) | lead | 16 → 16 | 17 → 18 | 18 → 18,5 | 19 → 20 | 21 → 22 |
| Buttons (Hero, CTA) | button | 20 → 16 | 20 → 17 | 20 → 18 | 20 → 19 | 20 → 20 |
| USP- und Full-Service-Einleitung (Figma 32) ✅ | sub | **16 → 22** | 28 → 25 | 28 → 26 | 32 → 29 | 32 → 32 |
| USP-Label „USP“ | card | 18 → 20 | 28 → 22 | 28 → 23 | 28 → 25,5 | 28 → 28 |
| Betreuung-Titel | card | 20 → 20 | 28 → 22 | 28 → 23 | 28 → 25,5 | 28 → 28 |
| Kunden-Laufband | client | 13 → 14 | 18 → 15 | 18 → 16 | 18 → 17 | 18 → 18 |
| Schritt-Slider: Label „SO LÄUFT'S“ ✅ | step | **12 → 18** | 14 → 20 | 16 → 20,5 | 18 → 22 | **30 → 24** |
| Schritt-Slider: Fließtext ✅ | lead | 14 → 16 | 15 → 18 | 16 → 18,5 | 18 → 20 | **36 → 22** |
| Schritt-Slider „SCHRITT 01 / 03“, Services-Tags | small | 11 → 14 | 12 → 14 | 14 → 14 | 14 → 14 | 14 → 14 |
| Footer-Texte / Footer-Überschriften | small | 15 / 13 → 14 | gleich | gleich | gleich | gleich |
| Jobs: Nummernkreis / Titel / Text | lead / step / body | 22 → 16 · 24 → 18 · 16 → 16 | | | | 22 · 24 · 18 |
| Kontakt: Einleitung | lead | 22 → 16 | 22 → 18 | 22 → 18,5 | 22 → 20 | 22 → 22 |

✅ **Auf der Vorschau geprüft und freigegeben** (bleiben wie umgesetzt):
1. **USP- und Full-Service-Einleitung auf dem Handy:** `text-sub` beginnt bei 22 px, also deutlich größer als bisher 16 px. Alternative: `text-lead` (16 → 22 px), dann aber auf dem Desktop 22 statt 32 px.
2. **Label „SO LÄUFT'S“:** mit `text-step` auf dem Handy 18 statt 12 px. Alternative: `text-small` (fest 14 px).
3. **Schritt-Slider bei 1920 px:** Label und Fließtext werden kleiner (24 statt 30 px bzw. 22 statt 36 px), weil die bisherige große 2xl-Variante der Schrift entfällt.

Seiten werden bei 810–1440 px um 20–75 px länger; bei 390 px teils kürzer (`/jobs`, `/kontakt`). Keine neuen Überläufe, kein abgeschnittener Text.

### T5 – Breakpoints, Container und Sektionen umstellen (**sichtbare Korrektur**)
- Breakpoints gemäß 5.5 setzen (sm 660, 2xl 1400); Media Queries in `globals.css` von 640/641/1025 auf die neuen Werte umstellen.
- Alle `max-w-[1780px]`, `[1716px]`, `[1700px]`, `[1400px]`, `[1100px]` usw. für Seitenbreiten durch `Container` ersetzen.
- Alle Sektions-`py-*` durch `Section` bzw. `--space-section` ersetzen.
- **Erwartete Änderung:** Seitenrand wächst mit (3,5 %), Sektionsabstände folgen den Stufen 52 / 68 / 115 px.
- **Achtung 1440 px:** Mit 2xl ab 1400 px greifen dort alle bisherigen `2xl:`-Stile. Ohne Anpassung rückt der Inhalt von Kopfzeile, Reichweite, Formate und FAQ (`.container-site`) von ca. 112 auf 32 px an den Rand, der Schritt-Slider (`StepSlider.tsx`) springt in die große Variante (Bild bis 760 px, Pfeile 130 px, 200 px Innenabstand) und die USP-Karten erhalten `2xl:p-14`. Diese Stellen gemeinsam mit den Containern umstellen und gezielt prüfen.
- **Fertig, wenn:** keine festen `max-w-[…px]`-Werte für Seitenbreiten mehr im Code.

**Stand der Umsetzung (auf der Vorschau geprüft und freigegeben)**

- **Umgesetzt:**
  - Breakpoints sm 660 / 2xl 1400, Menü-Media-Query 640 → 660.
  - 39 Seiten-Wrapper → `<Container>` (davon 2 × `variant="text"` für Impressum und Datenschutz), innere `max-w-[1716px]` bzw. `[1700px]` entfernt.
  - 35 Sektionen und der Schritt-Slider → `py-section`; `.section-pad` und die alten `--space-section-*`-Tokens entfallen.
  - Seitenrand der Hero-Bildvariante → `px-gutter`.
- **Bewusst belassen:**
  - `max-w-[1000–1500px]` an Überschriften und Absätzen (Zeilenlänge, keine Seitenbreite) und an der gelben Hero-Karte.
  - Innenabstand des Hero-Blocks.
  - `Testimonials`: eigener Innen-Wrapper `max-w-[900px]` mit festen Rändern; prüfen in T7.

Sichtbare Änderungen:

| | 390 | 810 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|
| Seitenrand der meisten Blöcke (vorher `px-5 sm:px-8`) | 20 → 20 | 32 → 28 | 32 → 36 | 32 → 50 | 102 → 70 |
| Seitenrand Kopfzeile, Reichweite, Formate, FAQ, Cookie-Banner (vorher `.container-site`) | 20 → 20 | 24 → 28 | 32 → 36 | **112 → 50** | 102 → 70 |
| Seitenrand Seiten-Köpfe Jobs/Kontakt/Services, Kategorien, Footer (vorher `max-w-[1700px] px-8`) | 32 → 20 | 32 → 28 | 32 → 36 | 32 → 50 | 142 → 70 |
| Inhaltsbreite bei 1920 px | | | | | 1636–1716 → 1780 |
| Impressum/Datenschutz Textbreite | 350 → 350 | 746 → 753 | 776 → 840 | 776 → 840 | 776 → 840 |
| Sektionsabstand (vorher meist `py-20 md:py-32`) | 80 → 52 | 128 → 68 | 128 → 115 | 128 → 115 | 128 → 115 |
| Sektionsabstand FAQ, Formate, Reichweite (vorher `.section-pad`) | 56 → 52 | 96 → 68 | 96 → 115 | 96 → 115 | 96 → 115 |
| Kundenstimmen (vorher 64/96/160, Mindesthöhen bleiben) | 64 → 52 | 96 → 68 | 160 → 115 | 160 → 115 | 160 → 115 |
| Schritt-Slider oben/unten (vorher 56/80/96/200) | 56 → 52 | 80 → 68 | 80 → 115 | 96 → 115 | 200 → 115 |

✅ **Auf der Vorschau geprüft und freigegeben (1440 px)** (bleiben wie umgesetzt):
1. **Schritt-Slider:** springt durch 2xl ab 1400 px in die große Variante – Bild bis 760 px breit, sehr große „01“, Pfeile 130 px, Abstand Bild–Text 120 px. Leistungsseiten werden bei 1440 px dadurch ca. 230–330 px länger.
2. **USP-Karten:** Innenabstand 40 → 56 px (`2xl:p-14`).
3. **Seitenrand:** überall einheitlich 50 px; Kopfzeile, Reichweite, Formate und FAQ rücken von 112 auf 50 px nach außen und fluchten jetzt mit dem restlichen Inhalt.

Seitenlängen: bei 390 px 100–420 px kürzer, bei 810 px 300–1000 px kürzer (Sektionsabstände), bei 1920 px 70–300 px kürzer.

**Bekannter Fehler, verstärkt:** Die Hero-Überschrift „PLAKATWERBUNG“ ist bei 390 px 378 px breit und läuft über; durch den einheitlichen Seitenrand (20 statt 16 px) wuchs der Überlauf der Seite von 4 auf 8 px. Behoben direkt nach T5 per Silbentrennung für Überschriften:

- `h1`–`h4` erhalten in `globals.css` `hyphens: auto` (Seitensprache `de`) mit `hyphenate-limit-chars: 12 6 6` – nur Wörter ab 12 Zeichen, mindestens 6 Zeichen vor und nach dem Trennstrich. Ergebnis: „PLAKAT-WERBUNG“; kurze Wörter wie „WERBUNG.“ oder „dieser“ werden nie getrennt.
- Rückfall `overflow-wrap: break-word` für Browser ohne deutsches Trennwörterbuch: Wörter brechen dort notfalls ohne Trennstrich um, laufen aber nie über den Rand.
- Nebenwirkungen: Die Kartentitel „Plakatwerbung“ im Leistungs-Slider der Startseite (1024–1920 px) waren breiter als ihre Überschrift und liefen über; sie trennen jetzt „Plakat-werbung“. Auf `/datenschutz` trennt Chrome bei 390 px „verantwort-lichen“, obwohl das Wort auch in die nächste Zeile passen würde (Chrome trennt am Zeilenende, sobald ein langes Wort nicht mehr ganz passt).
- Geprüft: alle 133 Überschriften auf allen 11 Seiten bei 390 px ohne Überlauf, keine Seite breiter als der Bildschirm. Getestet in Chromium; Safari und Firefox noch auf echten Geräten prüfen.

### T6 – Abstände und Rundungen
- Karten-Innenabstände, Abstände zwischen Überschrift und Inhalt sowie zwischen Karten auf die Tokens aus 5.3 umstellen.
- Rundungen auf die drei Tokens aus 5.6 vereinheitlichen.
- **Fertig, wenn:** keine `rounded-[…]`-Sonderwerte mehr vorhanden sind.

### T7 – CMS-Blöcke prüfen
- Alle 24 Blöcke unter `src/components/blocks/` mit den neuen Komponenten gegenprüfen, damit neue Leistungsseiten im CMS automatisch sauber aussehen.
- **Testseite** anlegen, die alle 24 CMS-Blöcke mit Beispielinhalten zeigt (ohne Datenbank, aus den Seed-Daten), und in `scripts/screenshots.mjs` aufnehmen. Viele Blöcke – darunter alle mit SVG-Illustrationen (Kanäle, Online-Kampagnen, Was wir aufnehmen/bekleben/gestalten, Ein Motiv, Echt nicht generiert, Transporter) – kommen auf keiner Seed-Seite vor und fehlen deshalb bisher in den Screenshot-Vergleichen. Die Testseite darf nicht öffentlich erreichbar oder indexiert sein (z. B. nur im Entwicklungsmodus oder mit `noindex` und ohne Link).
- Bekannt aus T5: Hero-Überschrift „PLAKATWERBUNG“ läuft bei 390 px über (Seite 8 px zu breit); `Testimonials` hat noch einen eigenen Wrapper `max-w-[900px]` mit festen Rändern.
- **Fertig, wenn:** jeder Block in allen fünf Prüfbreiten ohne Überlauf und ohne abgeschnittenen Text dargestellt wird.

### T8 – Absicherung
- Playwright-Screenshot-Tests für alle Seiten in den fünf Prüfbreiten dauerhaft einrichten.
- GitHub-Workflow `ci.yml` erweitern: Lint, Unit-Tests, `npm run build`.
- Kurze Dokumentation `docs/design-system.md`: welche Tokens es gibt und wie neue Seiten sie nutzen.

---

## 7. Nicht Teil dieses Schritts

- Inhalte, Texte und neue Leistungsseiten
- Leistungsstruktur (drei statt fünf Leistungen)
- Umstellung der Medienablage auf S3 und Container-Build (folgt in Schritt 3)
- Die Seite `coming-soon`
- Jede Art von Umzug zu AWS

---

## 8. Entscheidungen

| Punkt | Festlegung |
|---|---|
| Inhaltsbreite | 1780 px mit Seitenrand 3,5 % (wie zwetschke) |
| Sektionsabstand | 52 / 68 / 115 px (wie zwetschke) |
| Überschriften | durchgehend mitwachsend bis 1920 px (wie zwetschke), WERBEINSEL-Größen als Obergrenze |
| Fließtext | 16 → 18 px (bewusst kleiner als zwetschke) |
| Feinabstimmung Schriftgrößen | gemeinsam auf der Vorschau-Adresse nach T4 |
| T1 ohne sichtbare Änderung | Neue Werte für hero/section/lead erst in T4, neue Breakpoints erst in T5 |
| T2 ohne sichtbare Änderung | `Button` auf `--text-button` erst in T4 |

---

## 9. Offene Punkte für eine eigene Aufgabe nach dem Designfundament

- **Lint-Fehler** in `src/components/forms/FormFeedback.tsx`, Zeilen 111–112 (`react-hooks/refs`: „Cannot access refs during render“). Bestanden schon vor T1; `npm run lint` läuft deshalb bis dahin nicht fehlerfrei.
- **npm-audit-Hinweise** aus `npm ci` prüfen und beheben.
- **Test `tests/int/api.int.spec.ts` schlägt lokal fehl:** Ohne `DATABASE_URL` versucht Payload eine Postgres-Verbindung zu `localhost:5432` („cannot connect to Postgres“). `npm run test:int` läuft deshalb lokal nicht vollständig durch. Test so anpassen, dass er ohne Datenbank übersprungen wird oder eine eigene Testdatenbank nutzt – nie die Produktionsdatenbank.
