# 配置

开发：`Vue3 + TypeScript + Vite + AntDesignVue + Pinia + Vue-Router` 功能：

- 增量打包 + 构建：[Turbo](https://github.com/vercel/turbo) 待完善
- `UI`: [AntDesignVue](https://next.antdv.com/components/overview-cn) Done
- 模拟数据：[MockJS](http://mockjs.com/) Done
- 国际化：[vue-i18n](https://github.com/kazupon/vue-i18n)：Done
- `Vue3-JSX`：[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx) Done
- 改进 `Git Hooks`：[husky](https://github.com/typicode/husky) Done
- 代码美化：[`Prettier`](https://github.com/prettier/prettier) Done
- `Lint`: [ESLint](https://github.com/eslint/eslint)、styleLint、commitLint Done
- 提交规范：[`Commitizen`](https://github.com/commitizen/cz-cli) + [`CZ-Git`](https://github.com/Zhengqbbb/cz-git) Done
  - 平时可多用 `cz-git` 的命令代替 `git commit`：`cz / git cz`
- 自动引入：`unplugin-auto-import`、`unplugin-icons`、`unplugin-vue-components` Done
- 更好的使用 `CSS`：`Unocss` - [重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh) Done
- 更多的 `Icon`：`@iconify/json`（全量）、`@iconify-json/mdi（Material Design Icons）`等，[查询所有 Icon](https://icones.js.org/) Done
- `Vueuse`：待完善
- `pinia`：Done
- `Vue-Router`：Done
- `Axios`: Done
- 单元测试：待完善
- 自动部署：Done
- 基础组件：待完善
- 加解密：Done
- i18n-ally 兼容：待完善
- 其他功能
  - `lodash`：[`lodash-es`](https://github.com/lodash/lodash) Done
  - `Pinia` 持久化存储：[`pinia-plugin-persistedstate`](https://github.com/prazdevs/pinia-plugin-persistedstate) Done
  - 可视化图表功能：`ECharts` 待完善
  - `Swiper`：[`Swiper`](https://github.com/nolimits4web/swiper/tree/master) 待完善
  - `Float`：[`Floating-ui`](https://github.com/floating-ui/floating-ui) 待完善
  - `Mars3D`：[`Mars3D`](https://github.com/marsgis/mars3d)(其它方案？) 待完善
  - `PDF`：[`PDFjs`](https://github.com/mozilla/pdf.js)、[`jsPDF`](https://github.com/parallax/jsPDF) 待完善
  - `Console`：[`Xtermjs`](https://github.com/xtermjs/xterm.js) 待完善
  - 图片压缩：[`Squoosh`](https://github.com/GoogleChromeLabs/squoosh) 待完善
  - 剪贴板：[`clipboard.js`](https://github.com/zenorocha/clipboard.js)
  - 滚动效果：[`FullPagejs`](https://github.com/alvarotrigo/fullPage.js)、[`GSAP`](https://github.com/greensock/GSAP)、[`scrollreveal`](https://github.com/jlmakes/scrollreveal) 待完善
  - 本地存储：[`localForage`](https://github.com/localForage/localForage)(替代方案？) 待完善
  - 数据可视化：[`d3`](https://github.com/d3/d3)(替代方案？) 待完善
  - `3D`：[`threejs`](https://github.com/mrdoob/three.js)、[`pixijs`](https://github.com/pixijs/pixijs) 待完善
  - 拖动：[`draggable`](https://github.com/Shopify/draggable) 待完善
  - 浏览器兼容：[`polyfill-service`](https://github.com/Financial-Times/polyfill-service) 待完善
  - 照片墙：[`PhotoSwipe`](https://github.com/dimsemenov/PhotoSwipe) 待完善
  - 小文件上传：[`filepond`](https://github.com/pqina/filepond) 待完善
  - 大文件分片上传：[`webuploader`](http://fex.baidu.com/webuploader/)(替代方案？) 待完善
  - 动画/动态效果：[`animate.css`](https://github.com/animate-css/animate.css)、[`anime`](https://github.com/juliangarnier/anime)、[`tweenjs`](https://github.com/tweenjs/tween.js)、[`motionone`](https://github.com/motiondivision/motionone) 待完善
  - 下载：[`html2canvas`](https://github.com/niklasvh/html2canvas) 待完善
  - 新手导航：[`intro.js`](https://github.com/usablica/intro.js) 待完善
  - `Lottie`：[`lottie-player`](https://github.com/LottieFiles/lottie-player)、[`lottie-web`](https://github.com/airbnb/lottie-web) 待完善
  - 照片处理：[`AlloyImage`](https://github.com/AlloyTeam/AlloyImage) 待完善
  - 视频播放：[`flv.js`](https://github.com/bilibili/flv.js)(替代方案？) 待完善
  - `SVG/Canvas`：[`Fabric.js`](https://github.com/fabricjs/fabric.js) 待完善

结构：

- `build`：生产工具
  - `vite`：`Vite` 的插件配置
- `mock`：模拟数据
- `public`：公共的文件
- `src`：源码
  - `api`：接口
  - `assets`：静态文件
  - `components`：组件
  - `design`：样式设计
  - `directives`： 命令
  - `enums`：枚举
  - `hooks`：钩子函数
  - `locales`：语言支持
  - `logics`：逻辑处理
  - `pages`：页面
  - `router`：路由
  - `settings`：设置
  - `store`：共享数据
  - `tests`：测试
  - `utils`：工具库
- `types`：类型声明

解决方案：

- 如何解决切换语言？
- 如何提供主题色选择？（自定义配置）

插件推荐：

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)：自动关闭标签
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)：自动查找、解析并为所有可用导入提供代码操作和代码完成
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)：重命名标签
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)：更人性化的注释
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)：单词拼写检查
- [Codelf](https://marketplace.visualstudio.com/items?itemName=unbug.codelf)：变量名神器
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)：`.env` 语法高亮
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)：代码 `ESLint` 扩展
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)：查看存储库的 `Git` 图，并从图中轻松执行 `Git` 操作
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)：`Git` 历史、搜索等（包括`git log`）
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)：对 `Tailwind CSS` 的固定排序
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)：多合一 `i18n` 扩展
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)：智能图标预览和搜索
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)：`ES6` 代码片段
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)：更好的支持 `JS/TS`
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)：`Jest` 代码测试
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)：`Jest` 代码测试代码片段
- [Less IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-less)：对 `Less` 的高级自动完成和重构支持
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)：更好的支持 `Markdown`
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)：`Markdown => PDF`
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)：`Markdown` 预览增强
- [Mithril Emmet](https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet)：`HTML` 标签快捷操作

  ```json
  // setting.json
  {
    "editor.quickSuggestions": {
      "other": "on",
      "comments": "on",
      "strings": "on"
    },
    "emmet.showSuggestionsAsSnippets": true,
    "emmet.triggerExpansionOnTab": true
  }
  ```

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)：`Markdown linting` 和样式检查
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)：自动完成文件名
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)：代码美化/格式化程序
- [Sass (.sass only)](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)：缩进的 `Sass` 语法突出显示、自动完成和格式化程序
- [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)：格式化 `SCSS`
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)：对 `SCSS` 的高级自动完成和重构支持
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)：对 `style` 的规则检查
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg)：`SVG` 编码、缩小、漂亮、预览多合一
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)：`SVG` 文件预览
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)：`Tailwind CSS` 智能工具
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)：用于 `TypeScript` 服务器的 `Vue` 插件
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)：`Visual Studio Code` 的图标
- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)：`Vue3` 和 `Vue2` 代码片段扩展
- [Vue 3 Support - All In One](https://marketplace.visualstudio.com/items?itemName=Wscats.vue)：`Vue 2/3` 代码语法突出显示、代码段、模板生成器和代码格式化
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：`Vue3` 的语言支持
- [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)：查看和转到 `Vue` 单文件组件定义
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)：`Vue` 代码片段增强
