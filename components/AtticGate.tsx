'use client'

import { FormEvent, useEffect, useState } from 'react'

const KEY = 'OLDORB026'

export function AtticGate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const value = localStorage.getItem('orbit-attic-unlocked')
    if (value === 'true') {
      setUnlocked(true)
      document.body.classList.add('attic-unlocked')
    }
  }, [])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (input === KEY) {
      setUnlocked(true)
      localStorage.setItem('orbit-attic-unlocked', 'true')
      document.body.classList.add('attic-unlocked')
      setError('')
      return
    }

    setError('Неверный ключ. Попробуйте снова.')
  }

  const lockAgain = () => {
    setUnlocked(false)
    localStorage.removeItem('orbit-attic-unlocked')
    document.body.classList.remove('attic-unlocked')
    setInput('')
    setError('')
  }

  if (!unlocked) {
    return (
      <section className="mx-auto max-w-lg rounded-xl border border-border bg-surface p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold">ACCESS RESTRICTED</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="attic-key">Attic access key</label>
          <input
            aria-invalid={Boolean(error)}
            className="w-full rounded border border-border bg-bg px-3 py-2"
            id="attic-key"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter key"
            required
            type="password"
            value={input}
          />
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button className="w-full rounded bg-accent px-3 py-2 font-medium text-white" type="submit">Unlock</button>
        </form>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-4">
        <p className="font-semibold text-green-500">ACCESS GRANTED</p>
        <button className="rounded border border-border px-3 py-2 text-sm" onClick={lockAgain} type="button">LOCK AGAIN</button>
      </div>
      {children}
    </section>
  )
}
