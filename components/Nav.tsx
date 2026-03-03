'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSettings } from './ThemeProvider'

const links = [
  { href: '/', key: 'home' },
  { href: '/works', key: 'works' },
  { href: '/projects', key: 'projects' },
  { href: '/attic', key: 'attic' },
  { href: '/contact', key: 'contact' },
  { href: '/about', key: 'about' },
] as const

export function Nav() {
  const pathname = usePathname()
  const { t } = useSettings()

  return (
    <nav aria-label="Primary">
      <ul className="m-0 flex list-none flex-wrap gap-4 p-0 text-sm md:text-base">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <li key={link.href}>
              <Link aria-current={isActive ? 'page' : undefined} className="hover:text-accent" href={link.href}>
                {t.nav[link.key]}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
