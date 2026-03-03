'use client'

import Link from 'next/link'
import { Nav } from './Nav'
import { SettingsModal } from './SettingsModal'
import { ThemeProvider } from './ThemeProvider'

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-surface focus:px-2 focus:py-1" href="#main-content">
        Skip to content
      </a>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link aria-label="ORBIT homepage" className="dune-heading text-xl font-bold text-accent" href="/">ORBIT</Link>
          <div className="flex items-center gap-4">
            <Nav />
            <SettingsModal />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-10" id="main-content">{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-text-secondary">© {new Date().getFullYear()} ORBIT. All rights reserved.</div>
      </footer>
    </ThemeProvider>
  )
}
