// Vorher/Nachher-Screenshots aller Seiten in den Prüfbreiten (Abschnitt 4 des Auftrags).
// Aufruf (Dev-Server muss auf localhost:3000 laufen):
//   node scripts/screenshots.mjs screenshots/vorher
import path from 'node:path'
import fs from 'node:fs'
import { chromium } from '@playwright/test'

const outDir = process.argv[2]
if (!outDir) {
  console.error('Ausgabeordner fehlt, z. B.: node scripts/screenshots.mjs screenshots/nachher')
  process.exit(1)
}

const BASE = 'http://localhost:3000'
// Seiten und Prüfbreiten gemeinsam mit den Screenshot-Tests (tests/e2e/visual.e2e.spec.ts)
const { widths: WIDTHS, pages: PAGES } = JSON.parse(
  fs.readFileSync(new URL('../tests/e2e/pages.json', import.meta.url), 'utf8'),
)

fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const errors = []

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
  // Cookie-Banner vorab als entschieden markieren, damit er keinen Inhalt verdeckt
  await context.addInitScript(() => {
    localStorage.setItem(
      'werbeinsel-cookie-consent',
      JSON.stringify({ necessary: true, analytics: false, decided: true }),
    )
  })
  const page = await context.newPage()
  page.on('pageerror', (e) => errors.push(`${width} ${page.url()}: ${e.message}`))

  for (const [name, url] of PAGES) {
    const res = await page.goto(BASE + url, { waitUntil: 'networkidle' })
    // Einmal durchscrollen, damit Lazy-Bilder laden
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 80))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForLoadState('networkidle')
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(500)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    const file = path.join(outDir, `${name}_${width}.png`)
    await page.screenshot({ path: file, fullPage: true, animations: 'disabled' })
    console.log(`${res.status()} ${String(width).padStart(4)} ${name}${overflow > 0 ? `  ÜBERLAUF ${overflow}px` : ''}`)
  }
  await context.close()
}

await browser.close()
if (errors.length) console.log('\nJS-Fehler:\n' + errors.join('\n'))
