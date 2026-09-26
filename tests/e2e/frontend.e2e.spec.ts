import { expect, test } from '@playwright/test'
import config from './pages.json' with { type: 'json' }

/*
 * Grundtest aller öffentlichen Seiten (ohne Datenbank, mit den Seed-Inhalten):
 * Seite lädt, Titel mit WERBEINSEL, genau eine h1, keine Fehler in der Konsole.
 * Seitenliste aus pages.json; die Testseite /test-bloecke gehört nicht dazu.
 */

const pages = config.pages.filter(([name]) => name !== 'test-bloecke')

test.describe('Seiten', () => {
  for (const [name, url] of pages) {
    test(`${name} lädt fehlerfrei`, async ({ page }) => {
      const consoleErrors: string[] = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })
      page.on('pageerror', (err) => consoleErrors.push(err.message))

      const response = await page.goto(url, { waitUntil: 'networkidle' })
      expect(response?.status()).toBe(200)

      await expect(page).toHaveTitle(/WERBEINSEL/)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('h1')).toBeVisible()

      expect(consoleErrors).toEqual([])
    })
  }
})
