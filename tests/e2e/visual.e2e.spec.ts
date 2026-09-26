import { expect, test } from '@playwright/test'
import config from './pages.json' with { type: 'json' }

/*
 * Screenshot-Tests (T8): alle Seiten und /test-bloecke in den fünf Prüfbreiten.
 *
 *   npm run test:visual:update   Referenzbilder vom aktuellen Stand anlegen (vor einer Änderung)
 *   npm run test:visual          nach der Änderung vergleichen; Abweichungen im HTML-Bericht
 *
 * Referenzbilder liegen unter screenshots/baseline/ (nicht im Repository, siehe docs/design-system.md).
 */

// Während der Aufnahme: Kopfzeile fest oben statt sticky, schwebende Elemente ausblenden
const STABLE_CSS = `
  header { position: static !important; }
  nextjs-portal { display: none !important; }
`

for (const width of config.widths) {
  test.describe(`${width} px`, () => {
    test.use({ viewport: { width, height: 900 }, contextOptions: { reducedMotion: 'reduce' } })

    test.beforeEach(async ({ context }) => {
      // Cookie-Banner als entschieden markieren, damit er keinen Inhalt verdeckt
      await context.addInitScript(() => {
        localStorage.setItem(
          'werbeinsel-cookie-consent',
          JSON.stringify({ necessary: true, analytics: false, decided: true }),
        )
      })
    })

    for (const [name, url] of config.pages) {
      test(`${name}`, async ({ page }) => {
        const response = await page.goto(url, { waitUntil: 'networkidle' })
        expect(response?.status()).toBe(200)

        // Einmal durchscrollen, damit Lazy-Bilder laden
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) {
            window.scrollTo(0, y)
            await new Promise((r) => setTimeout(r, 50))
          }
          window.scrollTo(0, 0)
        })
        await page.waitForLoadState('networkidle')
        await page.addStyleTag({ content: STABLE_CSS })
        await page.evaluate(() => document.fonts.ready)
        // Warten, bis alle Bilder geladen und dekodiert sind (sonst unterscheiden sich zwei Aufnahmen).
        // Lazy-Bilder außerhalb des Sichtbereichs (z. B. weitere Slides) sofort laden; je Bild max. 10 s.
        await page.evaluate(() =>
          Promise.all(
            [...document.images].map((img) => {
              if (img.complete) return img.decode().catch(() => undefined)
              img.loading = 'eager'
              return Promise.race([
                new Promise((resolve) => {
                  img.addEventListener('load', resolve, { once: true })
                  img.addEventListener('error', resolve, { once: true })
                }),
                new Promise((resolve) => setTimeout(resolve, 10_000)),
              ])
            }),
          ),
        )

        // Keine Seite darf breiter als der Bildschirm sein
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        )
        expect(overflow, 'Seite breiter als der Bildschirm').toBeLessThanOrEqual(0)

        await expect(page).toHaveScreenshot(`${name}_${width}.png`, {
          fullPage: true,
          animations: 'disabled',
          // Kopfzeile und Menü sind stabilisiert: strenge Schwellen, damit auch kleine Farb- und
          // Rundungsänderungen auffallen (max. 100 abweichende Pixel, Farbtoleranz 0,05)
          maxDiffPixels: 100,
          threshold: 0.05,
        })
      })
    }
  })
}

// Geöffnetes Vollbild-Menü in allen Prüfbreiten, auf einer Leistungsseite (aktuelle Seite gelb markiert)
test.describe('Menü offen', () => {
  for (const width of config.widths) {
    test(`${width} px`, async ({ page, context }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await context.addInitScript(() => {
        localStorage.setItem(
          'werbeinsel-cookie-consent',
          JSON.stringify({ necessary: true, analytics: false, decided: true }),
        )
      })
      await page.goto('/leistungen/plakatwerbung', { waitUntil: 'networkidle' })
      await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' })
      await page.getByRole('button', { name: 'Menü öffnen' }).click()
      const dialog = page.getByRole('dialog', { name: 'Menü' })
      await expect(dialog).toBeVisible()
      await page.evaluate(() => document.fonts.ready)
      // Maus aus dem Bild, damit kein Hover-Gelb auf dem X mit aufgenommen wird
      await page.mouse.move(0, 899)

      await expect(page).toHaveScreenshot(`menu-offen_${width}.png`, {
        animations: 'disabled',
        maxDiffPixels: 100,
        threshold: 0.05,
      })
    })
  }
})
