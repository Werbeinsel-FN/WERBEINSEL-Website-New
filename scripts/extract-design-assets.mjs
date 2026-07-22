import sharp from 'sharp'
import path from 'path'

const src = 'C:/Users/PC/Desktop/dizajn/Page/Startseite.png'
const out = 'public/images/home'
const { width: W, height: H } = await sharp(src).metadata()

async function extract(name, topPct, heightPct, leftPct = 0, widthPct = 1) {
  const left = Math.max(0, Math.round(W * leftPct))
  const top = Math.max(0, Math.round(H * topPct))
  const width = Math.min(W - left, Math.round(W * widthPct))
  const height = Math.min(H - top, Math.round(H * heightPct))
  const file = path.join(out, name)
  await sharp(src).extract({ left, top, width, height }).jpeg({ quality: 86 }).toFile(file)
  console.log(name, `${width}x${height}`)
}

// Hero photo only: left billboard side (avoid yellow card center)
await extract('hero-bg.jpg', 0.02, 0.14, 0.0, 0.38)
await extract('hero-bg-wide.jpg', 0.02, 0.14, 0.0, 1.0)

// Service cards – tighter vertical crop inside yellow "WAS WIR MACHEN"
// Four cards in content column
const left = 0.195
const totalW = 0.61
const gap = 0.018
const cw = (totalW - 3 * gap) / 4
const sty = 0.305
const sh = 0.095
for (let i = 0; i < 4; i++) {
  await extract(`service-${i + 1}.jpg`, sty, sh, left + i * (cw + gap), cw)
}

// Portfolio cards
const pty = 0.47
const ph = 0.095
const pg = 0.012
const pw = (totalW - 4 * pg) / 5
for (let i = 0; i < 5; i++) {
  await extract(`work-${i + 1}.jpg`, pty, ph, left + i * (pw + pg), pw)
}

console.log('ok')
