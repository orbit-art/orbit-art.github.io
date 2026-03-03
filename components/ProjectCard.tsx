import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-4">
      <Link className="block" href={`/projects/${project.slug}`}>
        <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
        <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-border">
          <Image alt={`${project.title} preview image`} className="object-cover" fill sizes="(max-width: 768px) 100vw, 600px" src={project.previewImage} />
        </div>
      </Link>
    </article>
  )
}
