import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default function setupAutoImport() {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // 找不到引入的时候改为 true，成功后改为 false，不用一直 true 消耗性能
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    // Auto import functions from Vue, e.g. ref, reactive, toRef...
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ['pinia', 'vue', 'vue-i18n', 'vue-router', '@vueuse/core'],
    include: [
      /\.[t]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    resolvers: [AntDesignVueResolver()]
  });
}
