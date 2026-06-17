import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://orbit-art.github.io',
  base: '/',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
