import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import 'dotenv/config'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Referenzbilder der Screenshot-Tests: lokal, nicht im Repository (siehe docs/design-system.md) */
  snapshotPathTemplate: 'screenshots/baseline/{platform}/{arg}{ext}',
  expect: {
    /* Ganzseitige Aufnahmen langer Seiten brauchen länger als die Standard-5-Sekunden */
    timeout: 60_000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      testIgnore: /visual\.e2e\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    },
    {
      /* Screenshot-Tests aller Seiten in den fünf Prüfbreiten (npm run test:visual) */
      name: 'visual',
      testMatch: /visual\.e2e\.spec\.ts/,
      timeout: 180_000,
      /* Standard-Chromium von Playwright (headless), wie scripts/screenshots.mjs */
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    reuseExistingServer: true,
    url: 'http://localhost:3000',
  },
})
