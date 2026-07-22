# WERBEINSEL – Payload CMS Gerüst

TypeScript-Gerüst für das Content-Backend (Payload CMS 3 auf **Neon/Postgres**),
passend zum Lastenheft. Enthält Collections, Globals und alle Section-Blöcke
mit deutschen Labels und Hilfetexten.

## Struktur
```
src/
  payload.config.ts     # Zentrale Konfiguration (Postgres/Neon, Collections, Globals)
  collections/          # Users, Media, Pages, Referenzen, Leistungen, Jobs, Testimonials, Kundenlogos, Anfragen
  globals/              # Einstellungen (Kontakt/Social), Footer, Navigation
  blocks/               # Section-Baukasten (Hero, Zahlen, USP, SchrittSlider, FAQ, CTA …)
  fields/               # Wiederverwendbare Felder (link, seo)
```

## Einbau in ein Next.js-Projekt (Kurzfassung)
1. Next.js + Payload 3 aufsetzen (z. B. `npx create-payload-app@latest` mit Next.js-Template
   oder Payload in ein bestehendes Next.js-Projekt integrieren).
2. Diesen `src/`-Inhalt übernehmen bzw. mit dem generierten `payload.config.ts` zusammenführen.
3. Pakete: `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical` (+ Storage-Adapter
   `@payloadcms/storage-vercel-blob` **oder** `@payloadcms/storage-s3`).
4. `.env` aus `.env.example` befüllen (Neon `DATABASE_URL`, `PAYLOAD_SECRET`, Resend, Storage, Turnstile).
5. `payload generate:types` → `payload-types.ts`. Dev starten, Admin unter `/admin`.

## Backend-Bedienung (so ist es gedacht)
- **Seiten** werden im Feld „Sektionen" aus **Blöcken** zusammengesetzt (Baukasten).
- **Wiederkehrende Inhalte** (Referenzen, Leistungen, Jobs, Testimonials, Kundenlogos)
  liegen in eigenen Sammlungen und werden von den Slidern automatisch gezogen.
- **Kontaktdaten/Footer/Navigation** liegen in **Globals** – einmal pflegen, überall.

## Automatik (im Frontend umzusetzen)
- Schritt-Slider: Nummer aus Reihenfolge; ≤5 Schritte → Punkte, ≥6 → Balken + Zähler;
  ohne Foto → gelbes Feld mit Zahl (Fallback).
- Icon-/Nummern-Kreise per CSS immer quadratisch (rund).
- FAQ zusätzlich als FAQPage-JSON-LD; Jobs als JobPosting-JSON-LD; LocalBusiness global.

## Wichtige Hinweise
- Alle Beispielinhalte/Zahlen sind Platzhalter → real & belegbar befüllen.
- Fonts lokal hosten (kein Google-CDN); Karte via OpenStreetMap (kein Google Maps).
- Impressum/Datenschutz rechtlich prüfen.

## Empfohlene Seiten (im Admin anzulegen)
| Titel | slug | Route | Status |
|---|---|---|---|
| Startseite | `home` | `/` | fertig |
| Plakatwerbung | `plakatwerbung` | `/leistungen/plakatwerbung` | Struktur (Vorlage) |
| Foto & Video | `foto-video` | `/leistungen/foto-video` | Struktur |
| Grafikdesign | `grafikdesign` | `/leistungen/grafikdesign` | Struktur |
| Folierung | `folierung` | `/leistungen/folierung` | Struktur |
| Social Media | `social-media` | `/leistungen/social-media` | Struktur |
| Kontakt | `kontakt` | `/kontakt` | fertig |
| Jobs | `jobs` | `/jobs` | fertig |
| Impressum | `impressum` | `/impressum` | fertig (Rechtstext) |
| Datenschutz | `datenschutz` | `/datenschutz` | fertig (Rechtstext) |
