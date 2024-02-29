import{_ as e}from"./TIcon.vue_vue_type_script_setup_true_name_TIcon_lang-429c7363.js";import{u as t}from"./useApi-a3664480.js";import{c as s,_ as i}from"./index-b629b982.js";import{b as o,E as r}from"./element-plus@2.4.2_vue@3.2.47-0fdf09cc.js";import{e as a,c as n,t as m,f as p,Z as l,E as u,o as c,P as j,Q as d,D as _,J as v}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as h,v as f,u as b}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_runtime-dom@3.2.47-7b31c7d0.js";import"./@vue_shared@3.2.47-177e1703.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-c6cc609e.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./vue-router@4.1.6_vue@3.2.47-86cdb6f8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-036cf3d1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-30c8f2b7.js";import"./dayjs@1.11.7-9bf05c84.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./lodash-es@4.17.21-cbdb10ad.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-e2fdcd20.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-d4aca8b3.js";import"./vue@3.2.47-0d8a1f35.js";import"./vue-i18n@9.2.2_vue@3.2.47-cb4378dc.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.2.10-f9b803a0.js";import"./@vueuse_core@9.13.0_vue@3.2.47-a7f0bdd9.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-ba8084b7.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-dfed1e85.js";import"./@floating-ui_core@1.2.6-88778327.js";const y=i(a({...a({name:"menuMange"}),setup(i){const a=s().authButtonListGet,{proxy:y}=t(),g=()=>{},w=()=>{},x=()=>{},k=h({queryData:{title:null,
// 菜单名称
path:null},table:{
// 接口返回数据
data:[],
// 表头数据
columns:[{label:"菜单名称",render:(e,t)=>n("div",null,[t.meta.title]),minWidth:180},{label:"菜单图标",render:(t,s)=>n(e,{icon:s.meta.icon},null),minWidth:80},{prop:"name",label:"菜单 name",minWidth:180},{prop:"path",label:"菜单路径",minWidth:180},{prop:"component",label:"组件路径",minWidth:180}],operator:[{text:"新增",fun:e=>{},hasPermi:"root:web:sys:menu:add"},{text:"编辑",fun:e=>{},hasPermi:"root:web:sys:menu:alter"},{text:"删除",fun:e=>{o.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{r.success({message:"删除成功!"})})).catch((()=>{r.info({message:"已取消删除"})}))},hasPermi:"root:web:sys:menu:del"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"160",label:"操作"}}}),P=m((()=>({title:{label:"菜单名称",comp:"el-input"},path:{label:"菜单路径",comp:"el-input"}}))),z=(m((()=>{const{title:e,path:t}=f(k.queryData);return{title:e.value,path:t.value}})),e=>{k.queryData=e});p((()=>{C()}));const C=async()=>{const e=await y.$api.getRouters();e.success&&(k.table.data=e.data)};return(e,t)=>{const s=l("el-button"),i=l("el-tooltip"),o=l("t-adaptive-page"),r=u("hasPermi");return c(),j(o,{class:"menu_mange",title:"菜单管理页面","row-key":"path",isTree:"",btnPermissions:b(a),table:b(k).table,"tree-props":{children:"children",hasChildren:"hasChildren"},columns:b(k).table.columns,isShowPagination:!1,opts:b(P),onSubmit:z,height:"100%"},{toolbar:d((()=>[_((c(),j(s,{type:"primary",onClick:g},{default:d((()=>[v("同步")])),_:1})),[[r,"root:web:sys:menu:import"]]),n(i,{class:"item",effect:"dark",content:"请选择父级menuId导出",placement:"top"},{default:d((()=>[_((c(),j(s,{type:"danger",onClick:w},{default:d((()=>[v("导出")])),_:1})),[[r,"root:web:sys:menu:export"]])])),_:1}),_((c(),j(s,{type:"primary",onClick:x},{default:d((()=>[v("新增")])),_:1})),[[r,"root:web:sys:menu:add"]])])),_:1},8,["btnPermissions","table","columns","opts"])}}}),[["__scopeId","data-v-9cf323d2"]]);export{y as default};
