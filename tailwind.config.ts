import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        surface: 'var(--surface-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent-color)',
        'accent-glow': 'var(--accent-glow)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        headings: ['var(--font-dune)', 'Impact', 'sans-serif'],
        ui: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        code: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
