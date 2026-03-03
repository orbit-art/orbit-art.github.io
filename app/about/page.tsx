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

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Обо мне</h1>
      <article className="space-y-3 rounded-xl border border-border bg-surface p-5">
        <h2 className="text-xl font-semibold">Биография</h2>
        <p className="text-text-secondary">Я визуальный художник, совмещающий скинмейкинг, пиксель-арт и 3D-рендеры для игровых и web-проектов.</p>
      </article>
      <article className="space-y-3 rounded-xl border border-border bg-surface p-5">
        <h2 className="text-xl font-semibold">Стек инструментов</h2>
        <p className="text-text-secondary">Blockbench, Blender, Aseprite, Photoshop, Figma, Next.js.</p>
      </article>
      <article className="space-y-3 rounded-xl border border-border bg-surface p-5">
        <h2 className="text-xl font-semibold">Философия</h2>
        <p className="text-text-secondary">Каждый пиксель и каждый луч света — часть истории. Я делаю визуал, который ощущается живым.</p>
      </article>
    </section>
  )
}
