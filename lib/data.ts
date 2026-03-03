export interface Work {
  id: string
  type: 'скины' | 'пиксель-арты' | 'модели' | 'рендеры'
  image: string
}

export interface Project {
  id: string
  slug: string
  title: string
  previewImage: string
  mainImage: string
  description: string
  links: { label: string; url: string }[]
}

export interface AtticItem {
  id: string
  title: string
  description: string
}

export const works: Work[] = [
  { id: 'w1', type: 'скины', image: '/images/work-skin-1.svg' },
  { id: 'w2', type: 'скины', image: '/images/work-skin-2.svg' },
  { id: 'w3', type: 'пиксель-арты', image: '/images/work-pixel-1.svg' },
  { id: 'w4', type: 'пиксель-арты', image: '/images/work-pixel-2.svg' },
  { id: 'w5', type: 'модели', image: '/images/work-model-1.svg' },
  { id: 'w6', type: 'рендеры', image: '/images/work-render-1.svg' },
]

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'neo-skinline',
    title: 'Neo Skinline',
    previewImage: '/images/project-neo-preview.svg',
    mainImage: '/images/project-neo-main.svg',
    description:
      'Задача: разработать единую серию sci-fi скинов. Процесс: moodboard, цветовые тесты, ручной пиксель-пасс и рендер проверка. Результат: консистентный набор ассетов для промо и игры.',
    links: [
      { label: 'Live Demo', url: 'https://example.com/neo-demo' },
      { label: 'GitHub', url: 'https://github.com/example/neo-skinline' },
    ],
  },
  {
    id: 'p2',
    slug: 'astral-courtyard',
    title: 'Astral Courtyard',
    previewImage: '/images/project-astral-preview.svg',
    mainImage: '/images/project-astral-main.svg',
    description:
      'Задача: создать атмосферный environment art. Процесс: блокинг в 3D, ручной свет, пост-обработка и детализация пиксельными вставками. Результат: промо-сцена и набор кадров для портфолио.',
    links: [
      { label: 'Download', url: 'https://example.com/astral-download' },
    ],
  },
]

export const atticItems: AtticItem[] = [
  {
    id: 'a1',
    title: 'Early Concept Board',
    description: 'Ранние концепты и пробные палитры до финального визуального языка ORBIT.',
  },
  {
    id: 'a2',
    title: 'WIP Render Pack',
    description: 'Набор промежуточных рендеров с комментариями по свету и композиции.',
  },
]

export const socialLinks = {
  communication: [
    { label: 'Telegram', url: 'https://telegram.org' },
    { label: 'Discord', url: 'https://discord.com' },
  ],
  support: [
    { label: 'Boosty', url: 'https://boosty.to' },
    { label: 'Donation Alerts', url: 'https://donationalerts.com' },
    { label: 'Pinterest', url: 'https://pinterest.com' },
  ],
}
