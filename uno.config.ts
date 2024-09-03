import { defineConfig, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Roboto', 'Noto Sans JP', 'Noto Emoji'],
        mono: ['Roboto Mono'],
        alpha: ['ABeeZee'],
      },
    }),
  ],
});
