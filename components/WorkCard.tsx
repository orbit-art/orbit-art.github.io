'use client'

import Image from 'next/image'
import { Work } from '@/lib/data'

export function WorkCard({ work, onOpen }: { work: Work; onOpen: (work: Work) => void }) {
  return (
    <button
      aria-label={`Open ${work.type} work`}
      className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface"
      onClick={() => onOpen(work)}
      type="button"
    >
      <Image alt={`${work.type} work preview`} className="object-cover transition-transform duration-300 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 33vw" src={work.image} />
    </button>
  )
}
