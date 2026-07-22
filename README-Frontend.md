# WERBEINSEL – Frontend-Bausteine (Next.js + Tailwind)

Zentrale React-Bausteine passend zum Payload-CMS-Gerüst und zum Lastenheft.

## Dateien
```
components/
  StepSlider.tsx     # Schritt-Slider „So läuft's" (adaptive Anzeige, Scrim, Foto-Fallback)
  RenderBlocks.tsx   # mappt Payload-Blöcke (blockType) auf React-Komponenten
  ContactForm.tsx    # Kontaktformular (Client) mit useActionState
app/
  actions.ts         # Server Action: sendContact (Zod + Turnstile + Resend)
lib/
  validation.ts      # Zod-Schemas (Kontakt, Bewerbung)
  turnstile.ts       # Cloudflare-Turnstile-Serverprüfung
  fonts.ts           # lokale Fonts (Unbounded, Poppins) – DSGVO
styles/tokens.css    # Design-Tokens (CSS-Variablen)
tailwind.config.ts   # Brand-Farben & Font-Families
```

## Pakete
`embla-carousel-react`, `resend`, `zod` (Tailwind, next/font sind Teil von Next.js).

## Einbau (Kurz)
1. Dateien nach `src/…` übernehmen (Pfad-Alias `@/` = `src/`).
2. In `app/layout.tsx` Fonts einbinden:
   ```tsx
   import { unbounded, poppins } from '@/lib/fonts'
   import '@/styles/tokens.css'
   // <html className={`${unbounded.variable} ${poppins.variable}`}>
   ```
3. Turnstile-Script global laden (im Layout):
   `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />`
   und `NEXT_PUBLIC_TURNSTILE_SITE_KEY` setzen.
4. Seiten rendern die Payload-Blöcke via `<RenderBlocks blocks={page.layout} />`.
   Fehlende Section-Komponenten (Hero, Zahlen, USP, FAQ, CTA …) nach demselben Muster
   ergänzen und in `RenderBlocks.tsx` in die `BLOCK_MAP` eintragen.

## Enthaltene Automatik (Schritt-Slider)
- Nummer aus Reihenfolge (`padStart(2,'0')`)
- ≤ 5 Schritte → Punkte, ≥ 6 → Balken + Zähler
- ohne Foto → gelbes Feld mit Zahl (Fallback)
- Tastatur (←/→), Swipe, ARIA (progressbar / slide-Labels)

## Noch zu bauen (gleiches Muster)
- Section-Komponenten für die restlichen Blöcke
- Peek-Slider (Services/Portfolio) & Marquee
- Header/Footer aus den Globals
- Bewerbungsformular inkl. Datei-Upload (analog ContactForm)
- SEO/JSON-LD (LocalBusiness/FAQPage/JobPosting), sitemap.ts, robots.ts, Consent-Banner
