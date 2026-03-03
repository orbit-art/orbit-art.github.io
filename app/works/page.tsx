import { WorksGallery } from '@/components/WorksGallery'

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

export default function WorksPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Works</h1>
      <WorksGallery />
    </section>
  )
}
