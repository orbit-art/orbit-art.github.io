'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { WorkCard } from './WorkCard'
import { Work, works } from '@/lib/data'

const filters = ['все', 'скины', 'пиксель-арты', 'модели', 'рендеры'] as const

export function WorksGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('все')
  const [selected, setSelected] = useState<Work | null>(null)

  const filtered = useMemo(
    () => works.filter((work) => (filter === 'все' ? true : work.type === filter)),
    [filter],
  )

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist">
        {filters.map((item) => (
          <button
            aria-selected={filter === item}
            className="rounded border border-border px-3 py-1.5 text-sm capitalize"
            key={item}
            onClick={() => setFilter(item)}
            role="tab"
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {filtered.map((work) => (
          <WorkCard key={work.id} onOpen={setSelected} work={work} />
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
          <button aria-label="Close modal" className="absolute right-6 top-6 rounded bg-surface px-3 py-2" onClick={() => setSelected(null)} type="button">Close</button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image alt={`${selected.type} full image`} className="object-contain" fill sizes="100vw" src={selected.image} />
          </div>
        </div>
      ) : null}
    </>
  )
}
