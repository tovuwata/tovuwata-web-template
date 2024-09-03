import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
});
