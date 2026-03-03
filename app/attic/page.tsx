import { AtticGate } from '@/components/AtticGate'
import { atticItems } from '@/lib/data'

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

export default function AtticPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Чердак</h1>
      <AtticGate>
        <div className="grid gap-3">
          {atticItems.map((item) => (
            <article className="rounded-xl border border-border bg-surface p-4" key={item.id}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </AtticGate>
    </section>
  )
}
