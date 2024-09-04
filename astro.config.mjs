import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
  ],
});
