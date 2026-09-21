import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: true
    }),
    sitemap(),
  ],
  output: 'static',
  site: 'https://jimmyliuzg.github.io/',
});
