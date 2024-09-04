import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Roboto', 'Noto Sans JP', 'Noto Emoji'],
        mono: ['Roboto Mono'],
        strong: ['ABeeZee', 'Noto Serif JP'],
      },
    }),
    presetIcons(),
  ],
  shortcuts: {
    button:
      'flex-inline items-center justify-center h-12 px-6 py-4 mt-4 text-2xl transition rounded-full bg-gradient-to-rb from-orange-600 to-purple-600 hover:scale-130',
    card: 'border-t-8 rounded bg-gray-950 border-green transition hover:scale-110',
    cardParent: 'grid gap-8 cols-1 lg:cols-3',
  },
  transformers: [transformerDirectives()],
});
