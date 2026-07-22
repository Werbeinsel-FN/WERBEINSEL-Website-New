'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { sendApplication, type FormState } from '@/app/actions'
import { formOptions } from '@/data/seed'

const initial: FormState = { ok: false }

type Props = {
  positions: string[]
}

export function ApplicationForm({ positions }: Props) {
  const [state, action, pending] = useActionState(sendApplication, initial)
  const [position, setPosition] = useState('')
  const [verfuegbarAb, setVerfuegbarAb] = useState('')
  const [fileName, setFileName] = useState('')

  const allPositions = [...positions, 'Initiativ']

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-brand-yellow p-8 text-black">
        <p className="font-poppins text-lg font-semibold">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-6" id="bewerbung">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Name *" error={state.errors?.name} />
        <Field name="email" type="email" label="E-Mail *" error={state.errors?.email} />
        <Field name="telefon" label="Telefon *" error={state.errors?.telefon} className="md:col-span-2" />
      </div>

      <fieldset>
        <legend className="mb-3 font-poppins text-sm font-semibold tracking-wide">
          Gewünschte Position *
        </legend>
        <div className="flex flex-wrap gap-2">
          {allPositions.map((p) => {
            const active = position === p
            return (
              <label
                key={p}
                className={`cursor-pointer rounded-full border px-4 py-2 font-poppins text-sm font-medium transition ${
                  active
                    ? 'border-black bg-black text-brand-yellow'
                    : 'border-black/20 bg-white text-black hover:border-black'
                }`}
              >
                <input
                  type="radio"
                  name="position"
                  value={p}
                  checked={active}
                  onChange={() => setPosition(p)}
                  className="sr-only"
                />
                {p}
              </label>
            )
          })}
        </div>
        {state.errors?.position && (
          <p className="mt-2 text-sm text-red-600">{state.errors.position[0]}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-poppins text-sm font-semibold tracking-wide">
          Verfügbar ab
        </legend>
        <div className="flex flex-wrap gap-2">
          {formOptions.verfuegbarAb.map((v) => {
            const active = verfuegbarAb === v
            return (
              <label
                key={v}
                className={`cursor-pointer rounded-full border px-4 py-2 font-poppins text-sm font-medium transition ${
                  active
                    ? 'border-black bg-black text-brand-yellow'
                    : 'border-black/20 bg-white text-black hover:border-black'
                }`}
              >
                <input
                  type="radio"
                  name="verfuegbarAb"
                  value={v}
                  checked={active}
                  onChange={() => setVerfuegbarAb(v)}
                  className="sr-only"
                />
                {v}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label className="mb-3 block font-poppins text-sm font-semibold tracking-wide">
          Unterlagen * (PDF, JPG, PNG, ZIP – max. 10 MB)
        </label>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-black/25 bg-brand-card-light px-6 py-10 text-center transition hover:border-black">
          <span className="font-unbounded text-sm font-extrabold">Datei auswählen</span>
          <span className="font-poppins text-sm text-brand-muted">
            {fileName || 'Zum Hochladen klicken oder Datei ablegen'}
          </span>
          <input
            type="file"
            name="datei"
            accept=".pdf,.jpg,.jpeg,.png,.zip,application/pdf,image/jpeg,image/png,application/zip"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
          />
        </label>
        {state.errors?.datei && (
          <p className="mt-2 text-sm text-red-600">{state.errors.datei[0]}</p>
        )}
      </div>

      <Field name="portfolio" type="url" label="Portfolio-URL (optional)" error={state.errors?.portfolio} />

      <textarea
        name="nachricht"
        placeholder="Kurze Nachricht (optional)"
        rows={4}
        className="rounded-2xl border border-black/15 bg-white p-4 font-poppins outline-none focus:border-black"
      />

      <label className="flex items-start gap-3 font-poppins text-sm">
        <input type="checkbox" name="consent" className="mt-1 size-4 accent-black" />
        <span>
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und stimme der Verarbeitung meiner Bewerbungsdaten zu. *
        </span>
      </label>
      {state.errors?.consent && (
        <p className="text-sm text-red-600">{state.errors.consent[0]}</p>
      )}

      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
      />

      {state.message && !state.ok && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 self-center rounded-full bg-black px-10 py-4 font-poppins text-sm font-bold tracking-wide text-brand-yellow transition hover:scale-[1.02] disabled:opacity-50"
      >
        {pending ? 'WIRD GESENDET …' : 'BEWERBUNG ABSENDEN'}
      </button>
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  error,
  className = '',
}: {
  name: string
  label: string
  type?: string
  error?: string[]
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <input
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        className="rounded-2xl border border-black/15 bg-white p-4 font-poppins outline-none focus:border-black"
      />
      {error && <p className="text-sm text-red-600">{error[0]}</p>}
    </div>
  )
}
