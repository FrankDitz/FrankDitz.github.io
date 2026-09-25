// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankditz.github.io',
  integrations: [react(), sitemap({ filter: (page) => !page.endsWith('/404.html') })],
});
