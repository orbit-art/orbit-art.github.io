'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Language, translations } from '@/lib/translations'

type Theme = 'dark' | 'light'
type Accent = 'purple' | 'blue' | 'green' | 'orange'

interface SettingsContextType {
  theme: Theme
  accent: Accent
  language: Language
  setTheme: (theme: Theme) => void
  setAccent: (accent: Accent) => void
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

const SettingsContext = createContext<SettingsContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [accent, setAccent] = useState<Accent>('purple')
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    const storedTheme = localStorage.getItem('orbit-theme') as Theme | null
    const storedAccent = localStorage.getItem('orbit-accent') as Accent | null
    const storedLang = localStorage.getItem('orbit-lang') as Language | null

    if (storedTheme) setTheme(storedTheme)
    if (storedAccent) setAccent(storedAccent)
    if (storedLang) setLanguage(storedLang)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('orbit-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent)
    localStorage.setItem('orbit-accent', accent)
  }, [accent])

  useEffect(() => {
    localStorage.setItem('orbit-lang', language)
  }, [language])

  const value = useMemo(
    () => ({ theme, accent, language, setTheme, setAccent, setLanguage, t: translations[language] }),
    [theme, accent, language],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used inside ThemeProvider')
  }

  return context
}
