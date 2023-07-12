import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { AntDesignVueResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';

export default function setupVueComponents() {
  return Components({
    // directoryAsNamespace: true, // 不使用，自己控制命名
    dirs: ['src/components', 'src/**/components'],
    extensions: ['vue', 'md'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'types/components.d.ts',
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
      IconsResolver({
        customCollections: ['m-icons']
      }),
      VueUseComponentsResolver()
    ]
  })
};