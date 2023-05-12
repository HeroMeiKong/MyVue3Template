import UnoCSS from 'unocss/vite'

export default function setupUnoCSS() {
  return UnoCSS({
    configFile: '~/uno.config.ts',
  })
}