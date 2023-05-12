import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default function setupVueComponents() {
  return Components({
    dirs: ['src/components', 'src/**/components'],
    extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
    include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
    dts: 'types/components.d.ts',
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
      IconsResolver({
        customCollections: ['m-icons']
      })
    ]
  })
};