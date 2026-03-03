import type { Metadata } from 'next'
import './globals.css'
import { ClientShell } from '@/components/ClientShell'

export const metadata: Metadata = {
  title: 'ORBIT | Visuals & Code',
  description: 'Портфолио скинмейкера, пиксель-артиста и вайбкодера.',
  openGraph: {
    type: 'website',
    url: 'https://rerowros.ru/',
    title: 'ORBIT | Visuals & Code',
    description: 'Портфолио скинмейкера, пиксель-артиста и вайбкодера.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    siteName: 'ORBIT',
    locale: 'ru_RU',
  },
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORBIT | Visuals & Code',
    description: 'Портфолио скинмейкера, пиксель-артиста и вайбкодера.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
