import Link from 'next/link'

export const metadata = {
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
  twitter: {
    card: 'summary_large_image',
    title: 'ORBIT | Visuals & Code',
    description: 'Портфолио скинмейкера, пиксель-артиста и вайбкодера.',
    images: ['/og-image.svg'],
  },
}

export default function HomePage() {
  return (
    <section className="space-y-8">
      <p className="font-code text-sm uppercase tracking-[0.3em] text-accent">SKIN MAKER • PIXEL ARTIST • VIBE CODER</p>
      <h1 className="whitespace-pre-line text-5xl leading-tight md:text-6xl">Visuals in Orbit.{`\n`}Code as Art.</h1>
      <p className="max-w-2xl text-lg text-text-secondary">Создаю визуальные ассеты для игр и веб-эксперименты.</p>
      <div className="flex gap-3">
        <Link className="rounded bg-accent px-5 py-3 font-medium text-white" href="/works">Смотреть работы</Link>
        <Link className="rounded border border-border px-5 py-3 font-medium" href="/contact">Контакты</Link>
      </div>
    </section>
  )
}
