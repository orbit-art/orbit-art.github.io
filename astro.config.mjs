import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
