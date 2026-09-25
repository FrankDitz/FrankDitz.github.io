// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankditz.github.io',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404.html') })],
});
