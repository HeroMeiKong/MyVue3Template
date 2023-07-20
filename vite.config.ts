import dayjs from 'dayjs';
import path from 'path';
import pkg from './package.json';

import { defineConfig, loadEnv } from 'vite';

import { createProxy } from './build/vite/proxy';
import createVitePlugins from './build/vite/plugins';
import { wrapperEnv } from './build/utils';

const pathTypes = path.resolve(__dirname, 'types');

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  
  const isBuild = command === 'build';

  return {
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // 重点在这里哦
          // entryFileNames: `assets/[name].${timestamp}.js`,
          // chunkFileNames: `assets/[name].${timestamp}.js`,
          // assetFileNames: `assets/[name].${timestamp}.[ext]`
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }
      }
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    esbuild: {
      // pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
      pure: VITE_DROP_CONSOLE ? ['debugger'] : []
    },
    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: createVitePlugins(viteEnv, isBuild, pathTypes),
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
        '@': path.resolve(__dirname, 'src'),
        '#': pathTypes
      }
    },
    // server: {
    //   proxy: {
    //     '/rest': {
    //       target: 'http://workflow.bigquant.ai',
    //       changeOrigin: true,
    //     }
    //   }
    // }
    server: {
      // https: true,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load Proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
    }
  }
})