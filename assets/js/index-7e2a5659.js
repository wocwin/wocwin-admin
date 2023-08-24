import"./vue@3.2.47-8ce7078f.js";import{M as o}from"./map-d6b1e3c9.js";import{e,i as t,$ as s,o as a,R as r,U as i,b as l,c as n,M as p,am as m,al as u}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{k as d,u as c}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as v}from"./index-0cfdedbb.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const j=o=>(m("data-v-99b0db5b"),o=o(),u(),o),_=j((()=>l("div",{id:"container"},null,-1))),w={class:"control-item"},h=j((()=>l("h5",null,"地图控件",-1))),f=e({name:"MapControl"}),V=v(e({...f,setup(e){const m=d({map:null,scale:null,toolBar:null,controlBar:null,overView:null,scaleStatus:!0,toolBarStatus:!0,controlBarStatus:!0,overViewStatus:!0});t((()=>{u()}));const u=()=>{o().then((o=>{m.scale=new o.Scale,m.toolBar=new o.ToolBar({position:{top:"110px",right:"40px"}}),m.controlBar=new o.ControlBar({position:{top:"10px",right:"10px"}}),m.overView=new o.HawkEye({opened:!1}),m.map=new o.Map("container",{viewMode:"3D",zoom:11,pitch:30}),m.map.addControl(m.scale),m.map.addControl(m.toolBar),m.map.addControl(m.controlBar),m.map.addControl(m.overView)}))},v=()=>{m.scaleStatus?m.scale.show():m.scale.hide()},j=()=>{m.toolBarStatus?m.toolBar.show():m.toolBar.hide()},f=()=>{m.controlBarStatus?m.controlBar.show():m.controlBar.hide()},V=()=>{m.overViewStatus?m.overView.show():m.overView.hide()};return(o,e)=>{const t=s("el-checkbox"),u=s("t-layout-page");return a(),r(u,{class:"map_control"},{default:i((()=>[_,l("div",w,[h,n(t,{class:"control",modelValue:c(m).scaleStatus,"onUpdate:modelValue":e[0]||(e[0]=o=>c(m).scaleStatus=o),onChange:v},{default:i((()=>[p("比例尺")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).toolBarStatus,"onUpdate:modelValue":e[1]||(e[1]=o=>c(m).toolBarStatus=o),onChange:j},{default:i((()=>[p("工具条")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).controlBarStatus,"onUpdate:modelValue":e[2]||(e[2]=o=>c(m).controlBarStatus=o),onChange:f},{default:i((()=>[p("工具条方向盘")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).overViewStatus,"onUpdate:modelValue":e[3]||(e[3]=o=>c(m).overViewStatus=o),onChange:V},{default:i((()=>[p("显示鹰眼")])),_:1},8,["modelValue"])])])),_:1})}}}),[["__scopeId","data-v-99b0db5b"],["__file","F:/Wrok/Me/wocwin-admin/src/views/map/mapControl/index.vue"]]);export{V as default};