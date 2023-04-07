# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 配置

开发：Vue3 + TypeScript + Vite
功能：

- UI: 自定义配置
- 模拟数据：[MockJS](http://mockjs.com/)
- 国际化：[vue-i18n](https://github.com/kazupon/vue-i18n)
- Vue3-JSX：[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

结构：

- build：生产工具
  - vite：`Vite` 的插件配置
- mock：模拟数据
- public：公共的文件
- src：源码
  - api：接口
  - assets：静态文件
  - components：组件
  - design：样式设计
  - directives： 命令
  - enums：枚举
  - hooks：钩子函数
  - locales：语言支持
  - logics：逻辑处理
  - pages：页面
  - router：路由
  - settings：设置
  - store：共享数据
  - tests：测试
  - utils：工具库
- types：类型声明

解决方案：

- 如何解决切换语言？
- 如何提供主题色选择？（自定义配置）
