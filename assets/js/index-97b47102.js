import{w as e}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-7195bfe1.js";import i from"./TIcon-e460aca2.js";import{u as t}from"./useApi-2a80d655.js";import{c as l,_ as a}from"./index-9c974274.js";import{E as o,b as s}from"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import{e as n,c as r,J as u,_ as p,t as m,f as d,E as c,o as v,P as f,Q as h,D as b,b as y,x as g}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{r as j,j as _,w,u as L,i as k}from"./@vue_reactivity@3.2.47-bf31ab22.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-927c3723.js";const x={class:"dialog-footer"};const I=a(n({...n({name:"menuMange"}),setup(a){const n=l().authButtonListGet,{proxy:I}=t(),S=j("新增菜单"),H=j(!1),T=j([]),C=_({ref:null,formData:{parentId:0,
// 上级菜单
menuType:"M",
// 菜单类型
title:null,
// 菜单名称
orderNum:0,
// 显示排序
icon:void 0,
// 菜单图标
isShowLink:!1,
// 是否外链
isLink:null,
// 外链地址
isHide:!1,
// 是否隐藏
isFull:!1,
// 是否全屏
isAffix:!1,
// 是否固定
isKeepAlive:!1,
// 是否缓存
activeMenu:null,
// 高亮菜单
path:null,
// 路由地址
component:null,
// 组件路径
remark:null},fieldList:[{label:"上级菜单",value:"parentId",comp:"el-cascader",isSelfCom:!0,bind:{props:{checkStrictly:!0,emitPath:!1,children:"children",label:"label",value:"menuId"},"show-all-levels":!1,options:[]},widthSize:1},{label:"菜单类型",value:"menuType",type:"radio",list:"menuTypeList",comp:"el-radio-group",eventHandle:{change:e=>A(e)}},{label:"是否隐藏",value:"isHide",type:"radio",list:"isHideList",comp:"el-radio-group"},{label:"菜单名称",value:"title",type:"input",comp:"el-input"},{label:"显示排序",value:"orderNum",type:"inputNumber",comp:"el-input-number",bind:{"controls-position":"right",min:0}},{label:"菜单图标",value:"icon",comp:"t-select-icon",isSelfCom:!0},{label:"是否外链",value:"isShowLink",type:"radio",list:"whetherList",comp:"el-radio-group",event:"isShowLink"},{label:"是否全屏",value:"isFull",type:"radio",list:"whetherList",comp:"el-radio-group"},{label:"是否固定",labelRender:()=>r("div",{style:"cursor:pointer;display:flex;align-items:center;"},[u("是否固定"),r(p("el-tooltip"),{content:"是否固定在 tabs nav不可删除",placement:"top"},{default:()=>[r(p("el-icon"),null,{default:()=>[r(e,null,null)]})]})]),value:"isAffix",type:"radio",list:"whetherList",comp:"el-radio-group"},{label:"是否缓存",value:"isKeepAlive",type:"radio",list:"whetherList",comp:"el-radio-group",widthSize:1},{label:"外链地址",value:"isLink",type:"input",comp:"el-input",isHideItem:!0},{label:"高亮菜单",labelRender:()=>r("div",{style:"cursor:pointer;display:flex;align-items:center;"},[u("高亮菜单"),r(p("el-tooltip"),{content:"若当前路由为详情页时，需要配置此值指定高亮的菜单",placement:"top"},{default:()=>[r(p("el-icon"),null,{default:()=>[r(e,null,null)]})]})]),value:"activeMenu",type:"input",comp:"el-input"},{label:"路由地址",value:"path",type:"input",comp:"el-input",widthSize:1},{label:"组件路径",value:"component",type:"input",comp:"el-input",isHideItem:!0,widthSize:1},{label:"备注",value:"remark",type:"input",comp:"el-input",widthSize:1}],rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],orderNum:[{required:!0,message:"请输入显示排序",trigger:"blur"}],isLink:[{required:!0,message:"请输入外链地址",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],component:[{required:!0,message:"请输入组件路径",trigger:"blur"}]},
// 相关列表
listTypeInfo:{whetherList:[{label:"是",value:!0},{label:"否",value:!1}],isHideList:[{label:"隐藏",value:!0},{label:"显示",value:!1}],menuTypeList:[{label:"目录",value:"M"},{label:"菜单",value:"C"}]}}),z=(e,i)=>{"isShowLink"===e&&C.fieldList.map((e=>{"isLink"===e.value&&(e.isHideItem=!i)}))},A=e=>{const i="C"===e;C.fieldList.forEach((e=>{"component"===e.value&&(e.isHideItem=!i)}))},D=()=>{C.ref.validate((e=>{e&&(o.success("新增成功"),H.value=!1)}))},M=()=>{H.value=!0,S.value="新增菜单",q(),C.fieldList.forEach((e=>{const i="C"===C.formData.menuType||C.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)}))},q=()=>{var e;C.formData={parentId:0,
// 上级菜单
menuType:"M",
// 菜单类型
title:null,
// 菜单名称
orderNum:0,
// 显示排序
icon:void 0,
// 菜单图标
isShowLink:!1,
// 是否外链
isLink:null,
// 外链地址
isHide:!1,
// 是否隐藏
isFull:!1,
// 是否全屏
isAffix:!1,
// 是否固定
isKeepAlive:!1,
// 是否缓存
activeMenu:null,
// 高亮菜单
path:null,
// 路由地址
component:null,
// 组件路径
remark:null},null==(e=C.ref)||e.resetFields()},N=_({queryData:{title:null,
// 菜单名称
path:null}}),P=_({data:[],columns:[{label:"菜单名称",render:(e,i)=>r("div",null,[i.meta.title]),minWidth:180},{label:"菜单图标",render:(e,t)=>r(i,{icon:t.meta.icon},null),minWidth:80},{prop:"menuType",label:"菜单类型",minWidth:120,render:e=>{const{type:i,val:t}={M:{type:"info",val:"目录"},C:{type:"success",val:"菜单"},F:{type:"warning",val:"按钮"}}[e]||{};return r(p("el-tag"),{type:i},"function"==typeof(l=t)||"[object Object]"===Object.prototype.toString.call(l)&&!g(l)?t:{default:()=>[t]});var l}},{prop:"name",label:"菜单 name",minWidth:180},{prop:"path",label:"菜单路径",minWidth:180},{prop:"component",label:"组件路径",minWidth:180}],operator:[{text:"新增",fun:e=>{H.value=!0,S.value="新增菜单",q(),C.fieldList.forEach((e=>{const i="C"===C.formData.menuType||C.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)})),C.formData.parentId=e.parentId},hasPermi:"root:web:sys:menu:add"},{text:"编辑",fun:e=>{H.value=!0,S.value="编辑菜单";const{parentId:i,menuType:t,label:l,orderNum:a,isShowLink:o,path:s,component:n,remark:r,meta:u}=e,{fieldList:p}=C;p.forEach((e=>{const i="component"===e.value&&"C"===t||"isLink"===e.value&&o;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)})),C.formData={parentId:i,menuType:t,title:l,orderNum:a,isShowLink:o,icon:u.icon,isFull:u.isFull,isHide:u.isHide,isAffix:u.isAffix,isKeepAlive:u.isKeepAlive,isLink:u.isLink,activeMenu:u.activeMenu,path:s,component:n,remark:r}},hasPermi:"root:web:sys:menu:alter"},{text:"删除",fun:e=>{s.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.success({message:"删除成功!"})})).catch((()=>{o.info({message:"已取消删除"})}))},hasPermi:"root:web:sys:menu:del"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"160",label:"操作"}}),F=m((()=>({title:{label:"菜单名称",comp:"el-input"},path:{label:"菜单路径",comp:"el-input"}}))),E=(m((()=>{const{title:e,path:i}=w(N.queryData);return{title:e.value,path:i.value}})),e=>{N.queryData=e,V()});d((()=>{V()}));const V=async()=>{const e=await I.$api.getRouters();if(e.success){P.data=e.data;let i=[];const t={parentId:0,menuId:0,orderNum:0,menuType:"M",path:"",component:"",name:"",meta:{title:"主类目",isHide:!1,isFull:!1,isAffix:!1,isKeepAlive:!1},children:[]};t.children=e.data,i.push(t);const l=await W(i);T.value=l,C.fieldList[0].bind.options=T.value}},W=e=>(e.forEach((e=>{e.label=e.meta.title,e.value=e.menuId,e.children&&W(e.children)})),e);return(e,i)=>{const t=p("el-button"),l=p("t-form"),a=p("el-dialog"),o=p("t-adaptive-page"),s=c("hasPermi");return v(),f(o,{class:"menu_mange",title:"菜单管理页面","row-key":"path",isTree:"",align:"left",btnPermissions:L(n),table:L(P),"tree-props":{children:"children",hasChildren:"hasChildren"},columns:L(P).columns,isShowPagination:!1,opts:L(F),onSubmit:E,height:"100%"},{toolbar:h((()=>[b((v(),f(t,{type:"primary",onClick:M},{default:h((()=>[u("新增菜单")])),_:1})),[[s,"root:web:sys:menu:add"]])])),default:h((()=>[r(a,{title:L(S),width:"70%",draggable:"",modelValue:L(H),"onUpdate:modelValue":i[2]||(i[2]=e=>k(H)?H.value=e:null)},{footer:h((()=>[y("div",x,[r(t,{onClick:i[1]||(i[1]=e=>H.value=!1)},{default:h((()=>[u("取消")])),_:1}),r(t,{type:"primary",onClick:D},{default:h((()=>[u("确定")])),_:1})])])),default:h((()=>[r(l,{modelValue:L(C).ref,"onUpdate:modelValue":i[0]||(i[0]=e=>L(C).ref=e),formOpts:L(C),widthSize:2,onHandleEvent:z},null,8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1},8,["btnPermissions","table","columns","opts"])}}}),[["__file","index.vue"]]);export{I as default};
