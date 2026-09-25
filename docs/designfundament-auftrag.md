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
| Mitwachsende Schriftgrößen | `--text-hero`, `--text-section`, `--text-lead` und Klassen `.heading-hero`, `.heading-section`, `.body-lead` | Überwiegend feste Pixelwerte: `md:text-[56px]` 23-mal, `md:text-[22px]` 14-mal, `md:text-[88px]` 3-mal |
| Container | Komponente `components/ui/Container.tsx` und Klasse `.container-site` | Komponente wird **nirgends** verwendet; 25 Dateien setzen `max-w-[1780px]`, `max-w-[1716px]` oder `max-w-[1700px]` direkt |
| Sektionsabstände | Klasse `.section-pad` mit Tokens | Sektionen nutzen direkt `py-32` (29-mal), `py-20` (28-mal) und weitere Werte |
| Breakpoints | Tailwind-Standard (640 / 768 / 1024 / 1280 / 1536) | Eigene Media Queries in `globals.css` mit 641 px und 1025 px |
| Rundungen | keine Tokens | `rounded-[24px]`, `rounded-3xl`, `rounded-[20px]`, `[16px]`, `[28px]`, `[40px]` gemischt |

**Folge mit sichtbarer Wirkung:** Überschriften springen ab 768 px (`md:`) sofort auf die volle Desktopgröße von 56 px bzw. 88 px. Auf Tablets und kleinen Laptops sind sie dadurch zu groß und brechen unschön um.

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
| `--color-divider` | `#333333` | Linien auf Schwarz |
| `--color-error` | `#8A0000` | Fehlermeldungen in Formularen |
| `--color-whatsapp` | `#25D366` | nur WhatsApp |

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

### T1 – Tokens und Breakpoints
- `tokens.css` gemäß Abschnitt 5 ergänzen, `globals.css` per `@theme inline` binden.
- Breakpoints gemäß 5.5 setzen; Media Queries in `globals.css` von 641/1025 auf die neuen Werte umstellen.
- **Fertig, wenn:** alle Tokens als Tailwind-Klassen nutzbar sind.

### T2 – Basis-Komponenten
- `Container`: max. 1780 px, Seitenrand über `--gutter`; Variante `text` mit 840 px.
- Neue Komponente `Section` mit Hintergrund `yellow | black | white`, Abstand über `--space-section`.
- Neue Komponente `Heading` mit den Größen `hero | section | sub | card | step`; semantische Ebene (h1–h4) unabhängig von der Größe wählbar.
- `Button` nutzt `--text-button` und `--radius-pill`.
- **Fertig, wenn:** Komponenten vorhanden und mit Unit-Tests abgedeckt sind.

### T3 – Farben umstellen
- Alle festen Farbwerte in `.tsx` durch Token-Klassen ersetzen (`#FFED00` → `brand-yellow` usw.).
- `#B8B8B8` → `text-muted` (#B3B3B3); `#595959` prüfen und einem Token zuordnen.
- **Fertig, wenn:** `grep -rE "#[0-9A-Fa-f]{6}" src --include=*.tsx` außerhalb von `coming-soon` keine Treffer mehr liefert.

### T4 – Schriftgrößen umstellen (**sichtbare Korrektur**)
- Alle `text-[…px]` und `md:text-[…px]` durch die Tokens aus 5.2 ersetzen.
- **Erwartete Änderung:** Überschriften wachsen gleichmäßig mit und erreichen ihre volle Größe erst bei 1920 px. Auf Tablets werden sie deutlich kleiner als heute. **Auch bei 1440 px werden sie kleiner** (Sektionsüberschrift ca. 47 statt 56 px, Hero ca. 70 statt 88 px). Das entspricht dem Verhalten von zwetschke und wird auf der Vorschau gemeinsam geprüft.
- **Fertig, wenn:** keine festen Pixel-Schriftgrößen mehr in `.tsx`.

### T5 – Container und Sektionen umstellen (**sichtbare Korrektur**)
- Alle `max-w-[1780px]`, `[1716px]`, `[1700px]`, `[1400px]`, `[1100px]` usw. für Seitenbreiten durch `Container` ersetzen.
- Alle Sektions-`py-*` durch `Section` bzw. `--space-section` ersetzen.
- **Erwartete Änderung:** Seitenrand wächst mit (3,5 %), Sektionsabstände folgen den Stufen 52 / 68 / 115 px.
- **Fertig, wenn:** keine festen `max-w-[…px]`-Werte für Seitenbreiten mehr im Code.

### T6 – Abstände und Rundungen
- Karten-Innenabstände, Abstände zwischen Überschrift und Inhalt sowie zwischen Karten auf die Tokens aus 5.3 umstellen.
- Rundungen auf die drei Tokens aus 5.6 vereinheitlichen.
- **Fertig, wenn:** keine `rounded-[…]`-Sonderwerte mehr vorhanden sind.

### T7 – CMS-Blöcke prüfen
- Alle 24 Blöcke unter `src/components/blocks/` mit den neuen Komponenten gegenprüfen, damit neue Leistungsseiten im CMS automatisch sauber aussehen.
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
