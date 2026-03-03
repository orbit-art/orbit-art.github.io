export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      works: 'Works',
      projects: 'Projects',
      attic: 'Чердак 🔒',
      contact: 'Контакты',
      about: 'Обо мне',
    },
    hero: {
      title: 'Visuals in Orbit.\nCode as Art.',
      desc: 'Создаю визуальные ассеты для игр и веб-эксперименты.',
      btn1: 'Смотреть работы',
      btn2: 'Контакты',
    },
    works: { title: 'Works', filters: ['Все', 'Скины', 'Пиксель-арты', 'Модели', 'Рендеры'] },
    projects: { title: 'Projects', back: 'Назад к проектам' },
    attic: {
      title: 'Чердак',
      locked: 'ACCESS RESTRICTED',
      unlocked: 'ACCESS GRANTED',
      lockAgain: 'LOCK AGAIN',
    },
    contact: { title: 'Связь', comm: 'Communication', support: 'Support & Socials' },
    settings: { title: 'Настройки', theme: 'Тема', accent: 'Акцент', language: 'Язык' },
    theme: { dark: 'Тёмная', light: 'Светлая' },
    colors: { purple: 'Фиолетовый', blue: 'Синий', green: 'Зелёный', orange: 'Оранжевый' },
    about: { title: 'Обо мне', stack: 'Инструменты', philosophy: 'Философия' },
    notFound: 'Страница не найдена',
  },
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
      projects: 'Projects',
      attic: 'Attic 🔒',
      contact: 'Contact',
      about: 'About',
    },
    hero: {
      title: 'Visuals in Orbit.\nCode as Art.',
      desc: 'Creating visual assets for games and web experiments.',
      btn1: 'View Works',
      btn2: 'Contact',
    },
    works: { title: 'Works', filters: ['All', 'Skins', 'Pixel Art', 'Models', 'Renders'] },
    projects: { title: 'Projects', back: 'Back to Projects' },
    attic: {
      title: 'Attic',
      locked: 'ACCESS RESTRICTED',
      unlocked: 'ACCESS GRANTED',
      lockAgain: 'LOCK AGAIN',
    },
    contact: { title: 'Connect', comm: 'Communication', support: 'Support & Socials' },
    settings: { title: 'Settings', theme: 'Theme', accent: 'Accent', language: 'Language' },
    theme: { dark: 'Dark', light: 'Light' },
    colors: { purple: 'Purple', blue: 'Blue', green: 'Green', orange: 'Orange' },
    about: { title: 'About', stack: 'Tool stack', philosophy: 'Philosophy' },
    notFound: 'Page not found',
  },
}

export type Language = keyof typeof translations
