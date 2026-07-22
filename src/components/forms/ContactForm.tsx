'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { sendContact, type FormState } from '@/app/actions'
import { formOptions } from '@/data/seed'

const initial: FormState = { ok: false }

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial)
  const [services, setServices] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [zeitraum, setZeitraum] = useState('')

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-brand-yellow p-8 text-black">
        <p className="font-poppins text-lg font-semibold">{state.message}</p>
      </div>
    )
  }

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Name *" error={state.errors?.name} />
        <Field name="email" type="email" label="E-Mail *" error={state.errors?.email} />
        <Field name="unternehmen" label="Unternehmen" />
        <Field name="telefon" label="Telefon *" error={state.errors?.telefon} />
      </div>

      <fieldset>
        <legend className="mb-3 font-poppins text-sm font-semibold tracking-wide">
          Interessierte Leistungen
        </legend>
        <div className="flex flex-wrap gap-2">
          {formOptions.services.map((s) => {
            const active = services.includes(s)
            return (
              <label
                key={s}
                className={`cursor-pointer rounded-full border px-4 py-2 font-poppins text-sm font-medium transition ${
                  active
                    ? 'border-black bg-black text-brand-yellow'
                    : 'border-black/20 bg-white text-black hover:border-black'
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={s}
                  checked={active}
                  onChange={() => toggleService(s)}
                  className="sr-only"
                />
                {s}
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-poppins text-sm font-semibold tracking-wide">Budget</legend>
        <div className="flex flex-wrap gap-2">
          {formOptions.budgets.map((b) => {
            const active = budget === b
            return (
              <label
                key={b}
                className={`cursor-pointer rounded-full border px-4 py-2 font-poppins text-sm font-medium transition ${
                  active
                    ? 'border-black bg-black text-brand-yellow'
                    : 'border-black/20 bg-white text-black hover:border-black'
                }`}
              >
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={active}
                  onChange={() => setBudget(b)}
                  className="sr-only"
                />
                {b}
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-poppins text-sm font-semibold tracking-wide">Zeitraum</legend>
        <div className="flex flex-wrap gap-2">
          {formOptions.zeitraeume.map((z) => {
            const active = zeitraum === z
            return (
              <label
                key={z}
                className={`cursor-pointer rounded-full border px-4 py-2 font-poppins text-sm font-medium transition ${
                  active
                    ? 'border-black bg-black text-brand-yellow'
                    : 'border-black/20 bg-white text-black hover:border-black'
                }`}
              >
                <input
                  type="radio"
                  name="zeitraum"
                  value={z}
                  checked={active}
                  onChange={() => setZeitraum(z)}
                  className="sr-only"
                />
                {z}
              </label>
            )
          })}
        </div>
      </fieldset>

      <textarea
        name="nachricht"
        placeholder="Ihre Nachricht"
        rows={5}
        className="rounded-2xl border border-black/15 bg-white p-4 font-poppins outline-none focus:border-black"
      />

      <label className="flex items-start gap-3 font-poppins text-sm">
        <input type="checkbox" name="consent" className="mt-1 size-4 accent-black" />
        <span>
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und stimme der Verarbeitung zu. *
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
        {pending ? 'WIRD GESENDET …' : 'ANFRAGE SENDEN'}
      </button>
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  error,
}: {
  name: string
  label: string
  type?: string
  error?: string[]
}) {
  return (
    <div className="flex flex-col gap-1">
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
