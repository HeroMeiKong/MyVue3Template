import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { PluginOption } from 'vite'

import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, pathTypes: string) {
  const {
    VITE_USE_MOCK
  } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    Components({
      resolvers: []
    }),
    vue(),
    vueJsx(),
  ]

  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  return vitePlugins
}