import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {}
  },
  presets: [
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi').then((i) => i.icons as any)
      },
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetRemToPx(),
    presetTypography(),
    presetUno(),
    presetWebFonts({
      fonts: {}
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
