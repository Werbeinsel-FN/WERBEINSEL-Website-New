# WERBEINSEL – Payload CMS

Content-Backend (Payload CMS 3 auf Neon/Postgres) laut Lastenheft.
Collections, Globals und Section-Blöcke mit deutschen Labels.

## Schnellstart

1. `.env` aus `.env.example` – mindestens `DATABASE_URL` (Neon) und `PAYLOAD_SECRET`.
2. `npm run dev` → http://localhost:3000
3. Ersten Admin-User anlegen unter http://localhost:3000/admin
4. Inhalte laden: `npm run seed:cms`
5. Texte/Bilder im Admin ändern – Design bleibt gleich.

Ohne `DATABASE_URL` läuft die Website mit Fallback aus `src/data/seed.ts`.

## Was wo bearbeiten?

| Was ändern? | Im Admin unter |
|---|---|
| Startseite + Leistungsseiten | **Seiten** (`home`, `plakatwerbung`, …) → „Sektionen“ |
| Header-Menü / Labels | **Globals → Navigation** |
| Footer | **Globals → Footer** |
| Telefon, E-Mail, Adresse, Social, Formular-Chips | **Globals → Einstellungen** |
| Jobs-Seitentexte | **Globals → Seite: Jobs** |
| Offene Stellen | **Sammlungen → Stellen** |
| Kontakt-Texte | **Globals → Seite: Kontakt** |
| Services-Übersicht | **Globals → Seite: Services** |
| Impressum / Datenschutz | **Globals → Impressum / Datenschutz** |
| Portfolio-Bilder | **Sammlungen → Referenzen** (+ Medien) |
| Kunden-Namen (Marquee) | **Sammlungen → Kundenlogos** |
| Testimonials | **Sammlungen → Testimonials** |
| Leistungs-Karten (Slider) | **Sammlungen → Leistungen** |
| Fotos hochladen | **Sammlungen → Medien** |

Nach dem Speichern Seite neu laden. Auf Vercel: Env-Vars setzen (`DATABASE_URL`, `PAYLOAD_SECRET`, ggf. `BLOB_READ_WRITE_TOKEN`).

## Struktur

```
src/
  payload.config.ts
  collections/     # Users, Media, Pages, Referenzen, Leistungen, Jobs, …
  globals/         # Einstellungen, Footer, Navigation, Seiten-Texte
  blocks/          # Hero, Zahlen, USP, SchrittSlider, FAQ, CTA, …
  lib/content.ts   # Frontend liest CMS, Fallback = seed.ts
  scripts/seed-cms.ts
```

## Seiten (slug → Route)

| Titel | slug | Route |
|---|---|---|
| Startseite | `home` | `/` | fertig (Inhalte) |
| Plakatwerbung | `plakatwerbung` | `/leistungen/plakatwerbung` | **STRUKTUR** (Vorlage + Platzhalter) |
| Foto & Video | `foto-video` | `/leistungen/foto-video` | **STRUKTUR** |
| Folierung | `folierung` | `/leistungen/folierung` | **STRUKTUR** |

Leistungsseiten: laut Lastenheft nur Routen + Block-Gerüst. Echte Texte/Bilder später im Admin unter **Seiten** nachpflegen.

Jobs, Kontakt, Impressum, Datenschutz und Services-Übersicht liegen in **Globals** (feste Layouts), nicht als Block-Seiten.
