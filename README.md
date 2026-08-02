# WERBEINSEL Website

Next.js (App Router) · Payload CMS 3 · Neon Postgres · Tailwind CSS · Vercel

Offizielle Website der Werbeagentur **WERBEINSEL** (Friedrichshafen / Bodensee).

## Stack

| Schicht | Technologie |
|--------|-------------|
| Frontend | Next.js 16 (App Router, TypeScript), Tailwind CSS |
| CMS | Payload CMS 3 (`/admin`) |
| Datenbank | Neon (Postgres) via `@payloadcms/db-postgres` |
| E-Mail | Resend |
| Spam-Schutz | Cloudflare Turnstile |
| Storage | Vercel Blob (optional, wenn `BLOB_READ_WRITE_TOKEN` gesetzt) |
| Deploy | Vercel · Code auf GitHub |

## Schnellstart

```bash
npm install
cp .env.example .env
# DATABASE_URL (Neon), PAYLOAD_SECRET und weitere Keys setzen
npm run dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- CMS Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

> **Ohne Neon:** Das Frontend läuft mit Seed-/Platzhalter-Inhalten aus `src/data/seed.ts`. Admin und Persistenz brauchen `DATABASE_URL`.

## Routen

| Route | Status |
|-------|--------|
| `/` | Startseite (fertig, Figma) |
| `/kontakt` | Kontakt + Formular |
| `/jobs` | Stellen + Bewerbung |
| `/impressum` | Fertig (Rechtstext Platzhalter) |
| `/datenschutz` | Fertig (Rechtstext Platzhalter) |
| `/leistungen/plakatwerbung` | Struktur / Vorlage |
| `/leistungen/foto-video` | Struktur |
| `/leistungen/grafikdesign` | Struktur |
| `/leistungen/folierung` | Struktur |
| `/leistungen/social-media` | Struktur |
| `/admin` | Payload CMS |

## Projektstruktur

```
src/
  app/(frontend)/     # öffentliche Seiten
  app/(payload)/      # Admin + API
  blocks/definitions/ # Payload Section-Blöcke
  collections/        # Pages, Jobs, Medien, …
  components/         # UI, Blöcke, Formulare
  data/seed.ts        # Fallback-Inhalte ohne DB
  globals/            # Navigation, Footer, Einstellungen
  lib/                # fonts, seo, validation, turnstile
  styles/             # tokens + globals (Tailwind)
  fonts/              # Unbounded + Poppins (lokal, DSGVO)
```

## Environment

Siehe `.env.example`. Mindestens:

- `DATABASE_URL` – Neon pooled connection string
- `PAYLOAD_SECRET` – langer Zufallsstring
- `NEXT_PUBLIC_SERVER_URL` – z. B. `https://werbeinsel.de`
- `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO_AGENTUR`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`
- `BLOB_READ_WRITE_TOKEN` (required on Vercel for Media uploads — Storage → Blob)

## Design & DSGVO

- Fonts **lokal** (kein Google CDN)
- Farben: Gelb `#FFED00`, Schwarz, Weiß
- Karte (falls aktiv): OpenStreetMap, kein Google Maps
- Cookie-Consent: Analytics erst nach Einwilligung
- Alle Zahlen/Aussagen im Seed sind **Platzhalter**

## Scripts

```bash
npm run dev              # Entwicklung
npm run build            # Production-Build
npm run generate:types   # payload-types.ts
npm run generate:importmap
npm run lint
```

## Dokumentation

- `README-CMS.md` – Payload-Gerüst
- `README-Frontend.md` – Frontend-Bausteine
- Lastenheft: `Lastenheft_WERBEINSEL_komplett_DE_SR.md` (Desktop)

## Nächste Schritte (Accounts nötig)

1. Neon-Projekt anlegen → `DATABASE_URL`
2. Vercel mit diesem Repo verbinden → Env-Vars setzen
3. Resend + verifizierte Domain
4. Cloudflare Turnstile Keys
5. Vercel Blob (oder S3/R2)
6. Domain / DNS
