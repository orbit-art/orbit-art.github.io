'use client'

import { useState } from 'react'
import { useSettings } from './ThemeProvider'

export function SettingsModal() {
  const [open, setOpen] = useState(false)
  const { theme, accent, language, setTheme, setAccent, setLanguage, t } = useSettings()

  return (
    <div>
      <button
        aria-expanded={open}
        aria-haspopup="dialog"
        className="rounded border border-border px-3 py-2 text-sm"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        ⚙️
        <span className="sr-only">Open settings</span>
      </button>
      {open ? (
        <div
          aria-label={t.settings.title}
          aria-modal="true"
          className="absolute right-4 top-16 z-40 w-72 rounded-xl border border-border bg-surface p-4 shadow-lg"
          role="dialog"
        >
          <h2 className="mb-3 text-lg font-semibold">{t.settings.title}</h2>

          <fieldset className="mb-4">
            <legend className="mb-2 text-sm text-text-secondary">{t.settings.theme}</legend>
            <div className="flex gap-2">
              <button className="rounded border border-border px-2 py-1 text-sm" onClick={() => setTheme('dark')} type="button">{t.theme.dark}{theme === 'dark' ? ' ✓' : ''}</button>
              <button className="rounded border border-border px-2 py-1 text-sm" onClick={() => setTheme('light')} type="button">{t.theme.light}{theme === 'light' ? ' ✓' : ''}</button>
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <legend className="mb-2 text-sm text-text-secondary">{t.settings.accent}</legend>
            <div className="grid grid-cols-2 gap-2">
              {(['purple', 'blue', 'green', 'orange'] as const).map((color) => (
                <button className="rounded border border-border px-2 py-1 text-sm" key={color} onClick={() => setAccent(color)} type="button">
                  {t.colors[color]}{accent === color ? ' ✓' : ''}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm text-text-secondary">{t.settings.language}</legend>
            <div className="flex gap-2">
              <button className="rounded border border-border px-2 py-1 text-sm" onClick={() => setLanguage('ru')} type="button">RU{language === 'ru' ? ' ✓' : ''}</button>
              <button className="rounded border border-border px-2 py-1 text-sm" onClick={() => setLanguage('en')} type="button">EN{language === 'en' ? ' ✓' : ''}</button>
            </div>
          </fieldset>
        </div>
      ) : null}
    </div>
  )
}
