# wocwin-admin项目
>  是一个后台管理系统模板；
> 此项目集成的qiankun（即可以当做一个子应用）

### 前言
wocwin-admin，基于 Vue3.2、TypeScript、Vite3、Pinia、Element-Plus 开源的一套后台管理模板。


### 项目功能

-  使用 Vue3.2 开发，单文件组件 `setup语法糖`
-  采用 Vite3 作为项目开发、打包工具（配置了 Gzip 打包、TSX 语法、跨域代理、打包预览工具）
-  整个项目集成了 TypeScript
-  使用 Pinia 替代 Vuex，轻量、简单、易用（ 集成了持久化插件）
-  使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截、常用请求封装）
-  基于 Element-plus 二次封装 [t-ui-plus 组件](https://gitee.com/wocwin/t-ui-plus) ，里面有常用的table、条件查询、form表单、弹窗、下拉选择组件等
-  使用 vue-router 进行路由权限拦截、路由懒加载
-  使用 keep-alive 对整个页面进行缓存，支持多级嵌套页面（缓存路由里可配置、页面切换带动画）

### 安装使用
> #### 注意: 本地环境需要安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell script
# Gitee
git clone https://gitee.com/wocwin/wocwin-admin.git
# GitHub
git clone https://github.com/wocwin/wocwin-admin.git

# 安装依赖
pnpm install


# 启动服务
npm run serve
```

