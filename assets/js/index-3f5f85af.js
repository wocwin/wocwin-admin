import{u as e}from"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import{u as s,L as t,_ as i}from"./index-282eed5f.js";import{e as o,t as r,_ as p,E as a,o as m,P as u,Q as n,c as l,b as j,J as _,D as v}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{O as d}from"./@vue_shared@3.2.47-177e1703.js";import{u as c}from"./@vue_reactivity@3.2.47-bf31ab22.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const f=o({name:"anthMenu"}),y=i(o({...f,setup(i){const o=e(),f=s(),y=r((()=>f.loginName)),g=async()=>{await f.LogOut(),o.push(t)};return(e,s)=>{const t=p("el-alert"),i=p("el-divider"),o=p("el-button"),r=p("t-layout-page-item"),f=p("t-layout-page"),b=a("hasPermi");return m(),u(f,{class:"anth_button"},{default:n((()=>[l(r,{class:"anth_button_item"},{default:n((()=>[l(t,{title:"目前按钮权限是根据登录账号实现，模拟后台根据不同用户角色返回对应数据按钮集合，（wocwin 账号可查看所有按钮、user 账号只可查看部分按钮---系统管理模块）",closable:!1,type:"success",effect:"dark"}),j("div",null," 当前登陆账号是："+d("user"===c(y)?`${c(y)}（即：游客账号---\x3e 系统管理--没有部分按钮（新增/删除按钮））`:`${c(y)}（即：超管账号）`),1),l(i,{"content-position":"left"},{default:n((()=>[_("使用 v-hasPermi=\"'root:web:sys:user:add'\" 方式绑定权限————此按钮权限下分到每个菜单页面的按钮级别；此按钮解析：当前项目(web)系统管理模块（sys）用户页面（user）新增按钮（add）")])),_:1}),v((m(),u(o,{type:"primary"},{default:n((()=>[_("用户新增按钮")])),_:1})),[[b,"root:web:sys:user:add"]]),l(o,{type:"primary",icon:"Promotion",onClick:g},{default:n((()=>[_("登录其他账号")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f2e140f2"],["__file","index.vue"]]);export{y as default};
