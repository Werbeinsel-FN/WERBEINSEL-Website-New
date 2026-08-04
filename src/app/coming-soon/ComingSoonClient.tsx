'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

const LAUNCH_DATE = new Date('2026-09-01T10:00:00')

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function ComingSoonClient() {
  const router = useRouter()
  const [d, setD] = useState('00')
  const [h, setH] = useState('00')
  const [m, setM] = useState('00')
  const [s, setS] = useState('00')
  const [done, setDone] = useState(false)
  const [year, setYear] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mailTest, setMailTest] = useState('')
  const [mailTesting, setMailTesting] = useState(false)

  useEffect(() => {
    setYear(String(new Date().getFullYear()))

    const tick = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now()
      if (diff <= 0) {
        setDone(true)
        return
      }
      setDone(false)
      setD(pad(Math.floor(diff / 86400000)))
      setH(pad(Math.floor(diff / 3600000) % 24))
      setM(pad(Math.floor(diff / 60000) % 60))
      setS(pad(Math.floor(diff / 1000) % 60))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const spot = document.getElementById('spot')
      if (!spot) return
      spot.style.setProperty('--mx', `${e.clientX}px`)
      spot.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  async function onUnlock(e: FormEvent) {
    e.preventDefault()
    setError('')
    setMailTest('')
    setLoading(true)
    try {
      const res = await fetch('/coming-soon/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setError(data.error || 'Zugang fehlgeschlagen.')
        return
      }
      router.replace('/')
      router.refresh()
    } catch {
      setError('Netzwerkfehler. Bitte erneut versuchen.')
    } finally {
      setLoading(false)
    }
  }

  async function onMailTest() {
    setError('')
    setMailTest('')
    setMailTesting(true)
    try {
      const res = await fetch('/coming-soon/mail-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = (await res.json()) as {
        ok?: boolean
        error?: string
        id?: string
        to?: string
        from?: string
      }
      if (!res.ok || !data.ok) {
        setError(data.error || 'Mail-Test fehlgeschlagen.')
        return
      }
      setMailTest(`OK → ${data.to} (id: ${data.id})`)
    } catch {
      setError('Netzwerkfehler beim Mail-Test.')
    } finally {
      setMailTesting(false)
    }
  }

  return (
    <>
      <style>{`
  :root{ --yellow:#FFED00; --black:#000; --wa:#25D366;
    --unb:var(--font-unbounded), system-ui, sans-serif; --pop:var(--font-poppins), system-ui, sans-serif; }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{min-height:100%}
  .cs-body{
    font-family:var(--pop); color:var(--black);
    min-height:100dvh; display:flex; align-items:center; justify-content:center;
    padding:clamp(20px,5vw,64px); overflow-x:hidden; position:relative;
    background:#1c1c1c;
    background-image:
      radial-gradient(1200px circle at 20% 10%, #2a2a2a, transparent 55%),
      radial-gradient(900px circle at 85% 90%, #232323, transparent 55%),
      linear-gradient(#1b1b1b,#161616);
  }
  .noise{position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.05;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");}
  .spot{position:fixed; inset:0; z-index:0; pointer-events:none;
    background:radial-gradient(700px circle at var(--mx,50%) var(--my,40%), rgba(255,237,0,.10), transparent 60%); transition:background .2s ease;}
  .poster{
    position:relative; z-index:2; width:min(760px,100%);
    background:var(--yellow); color:var(--black);
    padding:clamp(34px,5vw,64px);
    transform:rotate(-1.3deg);
    box-shadow:0 40px 80px rgba(0,0,0,.55), 0 8px 20px rgba(0,0,0,.4);
  }
  .tape{position:absolute; width:130px; height:34px; background:rgba(230,230,230,.35);
    backdrop-filter:blur(1px); box-shadow:0 2px 6px rgba(0,0,0,.25); border-left:1px dashed rgba(255,255,255,.4); border-right:1px dashed rgba(255,255,255,.4)}
  .tape.tl{top:-14px; left:-26px; transform:rotate(-24deg)}
  .tape.tr{top:-14px; right:-26px; transform:rotate(22deg)}
  .tape.bl{bottom:-12px; left:30px; transform:rotate(14deg)}
  .brandline{display:flex; align-items:center; justify-content:space-between; gap:14px; font-size:clamp(11px,1.5vw,13px); letter-spacing:.22em; text-transform:uppercase; font-weight:700}
  .brandline .live{display:inline-flex; align-items:center; gap:8px}
  .brandline .live b{width:9px;height:9px;border-radius:50%;background:#000;animation:blink 1.6s infinite}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
  .rule{height:3px; background:#000; margin:22px 0 clamp(20px,3vw,30px)}
  .poster h1{font-family:var(--unb); font-weight:900; text-transform:uppercase;
    font-size:clamp(34px,6.6vw,74px); line-height:.98; letter-spacing:-.01em}
  .poster h1 em{font-style:normal; background:#000; color:var(--yellow); padding:0 .12em; display:inline-block; transform:rotate(-.5deg)}
  .lead{margin-top:clamp(20px,3vw,28px); font-size:clamp(15px,1.9vw,20px); line-height:1.5; font-weight:500; max-width:48ch}
  .count{display:flex; gap:clamp(10px,2vw,18px); margin-top:clamp(26px,3.5vw,38px); flex-wrap:wrap}
  .seg{border:2.5px solid #000; border-radius:14px; padding:12px clamp(12px,2vw,20px); min-width:clamp(66px,10vw,104px); text-align:center}
  .seg b{display:block; font-family:var(--unb); font-weight:900; font-size:clamp(26px,4vw,46px); line-height:1; font-variant-numeric:tabular-nums}
  .seg span{display:block; margin-top:6px; font-size:clamp(9px,1.1vw,11px); letter-spacing:.16em; text-transform:uppercase; font-weight:600}
  .cta{display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-top:clamp(26px,3.5vw,36px)}
  .cta .hint{font-weight:600; font-size:15px}
  .btn{display:inline-flex; align-items:center; gap:8px; padding:12px 24px; border-radius:999px; font-weight:600; font-size:15px; text-decoration:none; transition:transform .15s ease; border:none; cursor:pointer; font-family:inherit}
  .btn:hover{transform:translateY(-2px)}
  .btn-dark{background:#000; color:var(--yellow)}
  .btn-wa{background:var(--wa); color:#fff}
  .btn-line{background:transparent; color:#000; border:2px solid #000}
  .foot{display:flex; flex-wrap:wrap; justify-content:space-between; gap:8px; margin-top:clamp(26px,3.5vw,34px); padding-top:18px; border-top:2px solid #000; font-size:12px; font-weight:500; align-items:center}
  .foot button{background:none; border:none; padding:0; font:inherit; color:#000; text-decoration:underline; cursor:pointer; opacity:.55}
  .foot button:hover{opacity:1}
  .login{margin-top:18px; display:flex; flex-wrap:wrap; gap:8px; align-items:center}
  .login input{
    flex:1; min-width:160px; padding:10px 14px; border:2.5px solid #000; border-radius:999px;
    font:inherit; font-size:14px; background:#fff;
  }
  .login .err{width:100%; font-size:13px; font-weight:600; color:#8a0000}
  @media (max-width:560px){
    .poster{transform:none}
    .tape.tl{transform:rotate(-16deg)} .tape.tr{transform:rotate(14deg)}
    .foot{flex-direction:column; align-items:flex-start}
  }
  @media (prefers-reduced-motion:reduce){ .brandline .live b{animation:none} .spot{display:none} }
      `}</style>

      <div className="cs-body">
        <div className="noise" />
        <div className="spot" id="spot" />

        <article className="poster">
          <span className="tape tl" />
          <span className="tape tr" />
          <span className="tape bl" />

          <div className="brandline">
            <span>WERBEINSEL · Außenwerbung am Bodensee</span>
            <span className="live">
              <b /> Coming Soon
            </span>
          </div>
          <div className="rule" />

          <h1>
            Demnächst
            <br />
            an dieser
            <br />
            <em>Stelle:</em>
            <br />
            unsere neue Seite.
          </h1>

          <p className="lead">
            Wir kleben sonst Plakate – diesmal bauen wir eine Website. Der Relaunch kommt in
            Kürze. Bis dahin hängt hier unser bestes Plakat.
          </p>

          <div className="count" aria-label="Countdown bis zum Launch">
            {done ? (
              <div className="seg" style={{ minWidth: 'auto' }}>
                <b style={{ fontSize: 'clamp(22px,4vw,40px)' }}>Fast&nbsp;live!</b>
                <span>Gleich geht&apos;s los</span>
              </div>
            ) : (
              <>
                <div className="seg">
                  <b>{d}</b>
                  <span>Tage</span>
                </div>
                <div className="seg">
                  <b>{h}</b>
                  <span>Std</span>
                </div>
                <div className="seg">
                  <b>{m}</b>
                  <span>Min</span>
                </div>
                <div className="seg">
                  <b>{s}</b>
                  <span>Sek</span>
                </div>
              </>
            )}
          </div>

          <div className="cta">
            <span className="hint">Schon ein Projekt?</span>
            <a
              className="btn btn-wa"
              href="https://wa.me/491752000227"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="btn btn-dark" href="tel:+4975417005744">
              Anrufen
            </a>
            <a className="btn btn-line" href="mailto:hallo@werbeinsel.de">
              E-Mail
            </a>
          </div>

          <div className="foot">
            <span>© {year} WERBEINSEL · Friedrichshafen</span>
            <button type="button" onClick={() => setShowLogin((v) => !v)}>
              Team-Zugang
            </button>
          </div>

          {showLogin ? (
            <form className="login" onSubmit={onUnlock}>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="btn btn-dark" type="submit" disabled={loading}>
                {loading ? '…' : 'Öffnen'}
              </button>
              <button
                className="btn btn-line"
                type="button"
                disabled={mailTesting || !password}
                onClick={onMailTest}
              >
                {mailTesting ? '…' : 'Mail-Test'}
              </button>
              {error ? <p className="err">{error}</p> : null}
              {mailTest ? <p className="err" style={{ color: '#0a5' }}>{mailTest}</p> : null}
            </form>
          ) : null}
        </article>
      </div>
    </>
  )
}
