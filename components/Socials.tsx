interface SocialItem {
  label: string
  url: string
}

export function Socials({ title, items }: { title: string; items: SocialItem[] }) {
  return (
    <section aria-labelledby={title} className="rounded-xl border border-border bg-surface p-5">
      <h2 className="mb-4 text-xl font-semibold" id={title}>{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a className="text-accent" href={item.url} rel="noopener noreferrer" target="_blank">{item.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
