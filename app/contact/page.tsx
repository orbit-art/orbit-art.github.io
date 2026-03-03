import { Socials } from '@/components/Socials'
import { socialLinks } from '@/lib/data'

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

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Связь</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Socials items={socialLinks.communication} title="Communication" />
        <Socials items={socialLinks.support} title="Support & Socials" />
      </div>
    </section>
  )
}
