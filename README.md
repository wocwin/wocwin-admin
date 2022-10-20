# vite+vue3+ts+pinia+element-plus+qiankun项目
> vite+vue3+ts+pinia+element-plus+qiankun 是一个后台管理系统模板；
> 此项目集成的qiankun（即可以当做一个子应用）

### 前言
wocwin-admin，基于 Vue3.2、TypeScript、Vite3、Pinia、Element-Plus 开源的一套后台管理模板。项目中很多样式都是借鉴其它的管理系统，后期会持续更新，希望大家能多提意见。


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

```shell script
# Gitee
git clone https://gitee.com/wocwin/wocwin-admin.git
# GitHub
git clone https://github.com/wocwin/wocwin-admin.git

# 安装依赖
npm install

# 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```
### 在线预览地址

- Link：https://wocwin.github.io/wocwin-admin/


### 搭建教程

#### 第一步、[vite+vue3+ts项目搭建](https://blog.csdn.net/cwin8951/article/details/127242816)
#### 第二步、[集成vue-router、axios封装、sass、element-plus及icon](https://blog.csdn.net/cwin8951/article/details/127314953)
> ##### [配置eslint&prettier参考](https://juejin.cn/post/6975442828386107400)
> 
> ##### [部分vite实用插件介绍](https://blog.csdn.net/cwin8951/article/details/127323394)

#### 第三步、[以Pinia代替vuex及Pinia持久化处理](https://blog.csdn.net/cwin8951/article/details/127365114)
#### 第四步、[Layout组件搭建、如何全局自动注册基础组件、缓存页面](https://blog.csdn.net/cwin8951/article/details/127413956)
#### 第五步、[qiankun引入并让其主子应用之间切换](https://blog.csdn.net/cwin8951/article/details/127431084)
#### 第六步、[条件查询基础组件讲解](https://blog.csdn.net/cwin8951/article/details/126894087)
#### 第七步、[TTable基础组件讲解](https://blog.csdn.net/cwin8951/article/details/126939128)

#### 最终效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb942d11225f45439cae39acedb65440.gif)

#### 相关文章
[基于ElementUi再次封装基础组件文档](https://wocwin.github.io/t-ui/)

[vue3+ts基于Element-plus再次封装基础组件文档](https://wocwin.github.io/t-ui-plus/)
****

