import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import setupAutoImport from './auto-import';
import setupIcons from './icons';
import setupMockServer from './mock';
import setupUnoCSS from './unocss';
import setupVueComponents from './vue-components';

import type { PluginOption } from 'vite';

export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, pathTypes: string) {
  console.log('pathTypes: ', pathTypes);
  const { VITE_USE_MOCK } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];

  // unplugin-auto-import
  vitePlugins.push(setupAutoImport());

  // unplugin-icons
  vitePlugins.push(setupIcons());

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(setupMockServer(isBuild));

  // unocss
  vitePlugins.push(setupUnoCSS());

  // unplugin-vue-components
  vitePlugins.push(setupVueComponents());

  return vitePlugins;
}
