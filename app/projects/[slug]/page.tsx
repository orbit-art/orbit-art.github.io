import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug)
  if (!project) notFound()

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <div className="relative h-[600px] w-full overflow-hidden rounded-xl border border-border">
        <Image alt={`${project.title} main image`} className="object-cover" fill sizes="(max-width: 1200px) 100vw, 1200px" src={project.mainImage} />
      </div>
      <p className="max-w-4xl leading-relaxed text-text-secondary">{project.description}</p>
      <ul className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <li key={link.label}>
            <a className="rounded border border-border px-3 py-2" href={link.url} rel="noopener noreferrer" target="_blank">{link.label}</a>
          </li>
        ))}
      </ul>
      <Link className="inline-block rounded border border-border px-4 py-2" href="/projects">Назад к проектам</Link>
    </article>
  )
}
