# wocwin-admin 项目

> 是基于 Vue3.2、TypeScript、Vite4、Pinia、Element-Plus 开源的一套后台管理模板
>
> 此项目集成了微前端 qiankun（即可以当做一个子应用）


### 在线预览

- Link：<https://wocwin.github.io/wocwin-admin/>

### 代码仓库

- GitHub：<https://github.com/wocwin/wocwin-admin>
- Gitee：<https://gitee.com/wocwin/wocwin-admin>

### 项目功能

- 使用 Vue3.2 + TypeScript 开发，单文件组件 `setup语法糖`
- 采用 Vite 作为项目开发、打包工具（配置了 Gzip 打包、TSX 语法、跨域代理）
- 整个项目集成了 TypeScript、i18n 国际化
- 使用 Pinia 替代 Vuex，轻量、简单、易用（ 集成了持久化插件）
- 使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截）
- 使用了基于 [Element-plus 二次封装 t-ui-plus 组件](https://github.com/wocwin/t-ui-plus) ，里面有常用的 table、条件查询、form 表单、下拉选择组件等
- 使用 vue-router 进行路由权限拦截、路由懒加载
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套页面缓存
- 使用 Prettier 统一格式化代码，集成 Eslint 代码校验规范
- 项目支持多种常规的布局模式；同时支持主题切换、暗黑模式、灰色模式。

### 动态效果图

- Link：<https://blog.csdn.net/cwin8951/article/details/130269505>

### 安装使用

> #### 注意: 本地环境需要安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell script
# Gitee
git clone https://gitee.com/wocwin/wocwin-admin.git
# GitHub
git clone https://github.com/wocwin/wocwin-admin.git

# 安装pnpm

npm install pnpm -g

# 安装依赖
pnpm install

# 启动服务
pnpm serve

# build
pnpm dev

# prettier 格式化代码
pnpm lint:prettier

```

### 项目结构目录

```text
Wocwin-Admin
├─ build                  # Vite 配置项
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ languages           # 语言国际化 i18n
│  ├─ layout              # 框架布局模块
│  ├─ router              # 路由管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式文件
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  ├─ auto-import.d.ts    # 自动导入vue、vue-router、pinia相关API（无需import引入）
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
├─ .env.dev               # 开发环境配置
├─ .env.prod              # 生产环境配置
├─ .env.sit               # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.cjs        # Prettier 格式化配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.cjs       # stylelint 样式格式化配置
├─ index.html             # 入口 html
├─ stats.html             # Rollup Visualizer html
├─ deploy.sh              # 发布GitHub Pages指令
├─ LICENSE                # 开源协议文件
├─ pnpm-lock.yaml         # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.cjs     # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件
```

### Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;

### 微信交流

|                微信二维码                 |
| :---------------------------------------: |
| <img src="./public/wocwin.jpg" width=170> |
