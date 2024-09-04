import{I as e,a as l,w as t}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import i from"./TIcon-ac2f68e4.js";import{u as a}from"./useApi-2a80d655.js";import{e as o,t as n,_ as s,o as r,a as u,c as p,Q as m,N as d,P as c,b as v,F as f,X as h,R as b,J as y,f as g,E as j,D as _,x as w}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{r as k,u as L,i as x,j as I,w as V}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{q as S,O as C}from"./@vue_shared@3.2.47-177e1703.js";import{_ as T,c as H}from"./index-282eed5f.js";import{E as D,b as z}from"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const A={class:"t_select_icon"},q={class:"icon-list"},M=["onClick"],N=o({name:"TSelectIcon"}),F=T(o({...N,props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"请选择图标"}},emits:["update:modelValue"],setup(t,{emit:i}){const a=t;let o=n({get:()=>a.modelValue,set(e){i("update:modelValue",e)}});const y=k(!1),g=()=>y.value=!0,j=k(),_=()=>{o.value="",i("update:modelValue",""),setTimeout((()=>j.value.blur()),0)},w=k(""),I=e,V=n((()=>{if(!w.value)return e;let l={};for(const e in I)e.toLowerCase().indexOf(w.value.toLowerCase())>-1&&(l[e]=I[e]);return l}));return(e,a)=>{const n=s("el-button"),k=s("el-input"),T=s("el-scrollbar"),H=s("el-empty"),D=s("el-dialog");return r(),u("div",A,[p(k,d({ref_key:"inputRef",ref:j,modelValue:L(o),"onUpdate:modelValue":a[0]||(a[0]=e=>x(o)?o.value=e:o=e),placeholder:t.placeholder,"prefix-icon":l},{clearable:!0,...e.$attrs},{onClear:_,onClick:g}),{append:m((()=>[p(n,{icon:L(I)[t.modelValue]},null,8,["icon"])])),_:1},16,["modelValue","placeholder","prefix-icon"]),p(D,{modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=e=>y.value=e),title:t.placeholder||"请选择图标",draggable:"",width:"50%"},{default:m((()=>[p(k,{modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value=e),placeholder:"搜索图标",clearable:"","prefix-icon":l},null,8,["modelValue","prefix-icon"]),Object.keys(L(V)).length?(r(),c(T,{key:0},{default:m((()=>[v("div",q,[(r(!0),u(f,null,h(L(V),(e=>(r(),u("div",{key:e,class:S(["icon-item",{"icon-active":e.name==L(o)}]),onClick:l=>(e=>{y.value=!1,o.value=e.name,i("update:modelValue",e.name)})(e)},[(r(),c(b(e))),v("span",null,C(e.name),1)],10,M)))),128))])])),_:1})):(r(),c(H,{key:1,description:"未搜索到您要找的图标~"}))])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-8e59edd8"],["__file","index.vue"]]),P={class:"dialog-footer"};const E=T(o({...o({name:"menuMange"}),setup(e){const l=H().authButtonListGet,{proxy:o}=a(),u=k("新增菜单"),d=k(!1),f=k([]),h=I({ref:null,formData:{parentId:0,
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
isHide:!0,
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
remark:null},fieldList:[{label:"上级菜单",value:"parentId",comp:"el-cascader",isSelfCom:!0,bind:{props:{checkStrictly:!0,emitPath:!1,children:"children",label:"label",value:"menuId"},"show-all-levels":!1,options:[]},widthSize:1},{label:"菜单类型",value:"menuType",type:"radio",list:"menuTypeList",comp:"el-radio-group",eventHandle:{change:e=>S(e)}},{label:"是否隐藏",value:"isHide",type:"radio",list:"isHideList",comp:"el-radio-group"},{label:"菜单名称",value:"title",type:"input",comp:"el-input"},{label:"显示排序",value:"orderNum",type:"inputNumber",comp:"el-input-number",bind:{"controls-position":"right",min:0}},{label:"菜单图标",value:"icon",slotName:"TSelectIcon"},{label:"是否外链",value:"isShowLink",type:"radio",list:"whetherList",comp:"el-radio-group",event:"isShowLink"},{label:"是否全屏",value:"isFull",type:"radio",list:"whetherList",comp:"el-radio-group"},{label:"是否固定",labelRender:()=>p("div",{style:"cursor:pointer;display:flex;align-items:center;"},[y("是否固定"),p(s("el-tooltip"),{content:"是否固定在 tabs nav不可删除",placement:"top"},{default:()=>[p(s("el-icon"),null,{default:()=>[p(t,null,null)]})]})]),value:"isAffix",type:"radio",list:"whetherList",comp:"el-radio-group"},{label:"是否缓存",value:"isKeepAlive",type:"radio",list:"whetherList",comp:"el-radio-group",widthSize:1},{label:"外链地址",value:"isLink",type:"input",comp:"el-input",isHideItem:!0},{label:"高亮菜单",labelRender:()=>p("div",{style:"cursor:pointer;display:flex;align-items:center;"},[y("高亮菜单"),p(s("el-tooltip"),{content:"若当前路由为详情页时，需要配置此值指定高亮的菜单",placement:"top"},{default:()=>[p(s("el-icon"),null,{default:()=>[p(t,null,null)]})]})]),value:"activeMenu",type:"input",comp:"el-input"},{label:"路由地址",value:"path",type:"input",comp:"el-input",widthSize:1},{label:"组件路径",value:"component",type:"input",comp:"el-input",isHideItem:!0,widthSize:1},{label:"备注",value:"remark",type:"input",comp:"el-input",widthSize:1}],rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],orderNum:[{required:!0,message:"请输入显示排序",trigger:"blur"}],isLink:[{required:!0,message:"请输入外链地址",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],component:[{required:!0,message:"请输入组件路径",trigger:"blur"}]},
// 相关列表
listTypeInfo:{whetherList:[{label:"是",value:!0},{label:"否",value:!1}],isHideList:[{label:"显示",value:!0},{label:"隐藏",value:!1}],menuTypeList:[{label:"目录",value:"M"},{label:"菜单",value:"C"},{label:"按钮",value:"F"}]}}),b=(e,l)=>{"isShowLink"===e&&h.fieldList.map((e=>{"isLink"===e.value&&(e.isHideItem=!l)}))},S=e=>{const l="C"===e;h.fieldList.forEach((e=>{"component"===e.value&&(e.isHideItem=!l)}))},C=()=>{h.ref.validate((e=>{e&&(D.success("新增成功"),d.value=!1)}))},T=()=>{d.value=!0,u.value="新增菜单",A(),h.fieldList.forEach((e=>{const l="C"===h.formData.menuType||h.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!l)}))},A=()=>{var e;h.formData={parentId:0,
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
isHide:!0,
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
remark:null},null==(e=h.ref)||e.resetFields()},q=I({queryData:{title:null,
// 菜单名称
path:null},table:{
// 接口返回数据
data:[],
// 表头数据
columns:[{label:"菜单名称",render:(e,l)=>p("div",null,[l.meta.title]),minWidth:180},{label:"菜单图标",render:(e,l)=>p(i,{icon:l.meta.icon},null),minWidth:80},{prop:"menuType",label:"菜单类型",minWidth:120,render:e=>{const{type:l,val:t}={M:{type:"info",val:"目录"},C:{type:"success",val:"菜单"},F:{type:"warning",val:"按钮"}}[e]||{};return p(s("el-tag"),{type:l},"function"==typeof(i=t)||"[object Object]"===Object.prototype.toString.call(i)&&!w(i)?t:{default:()=>[t]});var i}},{prop:"name",label:"菜单 name",minWidth:180},{prop:"path",label:"菜单路径",minWidth:180},{prop:"component",label:"组件路径",minWidth:180}],operator:[{text:"新增",fun:e=>{d.value=!0,u.value="新增菜单",A(),h.fieldList.forEach((e=>{const l="C"===h.formData.menuType||h.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!l)})),h.formData.parentId=e.parentId},hasPermi:"root:web:sys:menu:add"},{text:"编辑",fun:e=>{d.value=!0,u.value="编辑菜单";const{parentId:l,menuType:t,label:i,orderNum:a,isShowLink:o,path:n,component:s,remark:r,meta:p}=e,{fieldList:m}=h;m.forEach((e=>{const l="C"===t||o;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!l)})),h.formData={parentId:l,menuType:t,title:i,orderNum:a,isShowLink:o,icon:p.icon,isFull:p.isFull,isHide:p.isHide,isAffix:p.isAffix,isKeepAlive:p.isKeepAlive,isLink:p.isLink,activeMenu:p.activeMenu,path:n,component:s,remark:r}},hasPermi:"root:web:sys:menu:alter"},{text:"删除",fun:e=>{z.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{D.success({message:"删除成功!"})})).catch((()=>{D.info({message:"已取消删除"})}))},hasPermi:"root:web:sys:menu:del"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"160",label:"操作"}}}),M=n((()=>({title:{label:"菜单名称",comp:"el-input"},path:{label:"菜单路径",comp:"el-input"}}))),N=(n((()=>{const{title:e,path:l}=V(q.queryData);return{title:e.value,path:l.value}})),e=>{q.queryData=e,E()});g((()=>{E()}));const E=async()=>{const e=await o.$api.getRouters();if(e.success){q.table.data=e.data;let l=[];const t={parentId:0,menuId:0,orderNum:0,menuType:"M",path:"",component:"",name:"",meta:{title:"主类目",isHide:!1,isFull:!1,isAffix:!1,isKeepAlive:!1},children:[]};t.children=e.data,l.push(t);const i=await O(l);f.value=i,h.fieldList[0].bind.options=f.value}},O=e=>(e.forEach((e=>{e.label=e.meta.title,e.value=e.menuId,e.children&&O(e.children)})),e);return(e,t)=>{const i=s("el-button"),a=s("t-form"),o=s("el-dialog"),n=s("t-adaptive-page"),f=j("hasPermi");return r(),c(n,{class:"menu_mange",title:"菜单管理页面","row-key":"path",isTree:"",align:"left",btnPermissions:L(l),table:L(q).table,"tree-props":{children:"children",hasChildren:"hasChildren"},columns:L(q).table.columns,isShowPagination:!1,opts:L(M),onSubmit:N,height:"100%"},{toolbar:m((()=>[_((r(),c(i,{type:"primary",onClick:T},{default:m((()=>[y("新增菜单")])),_:1})),[[f,"root:web:sys:menu:add"]])])),default:m((()=>[p(o,{title:L(u),width:"70%",draggable:"",modelValue:L(d),"onUpdate:modelValue":t[3]||(t[3]=e=>x(d)?d.value=e:null)},{footer:m((()=>[v("div",P,[p(i,{onClick:t[2]||(t[2]=e=>d.value=!1)},{default:m((()=>[y("取消")])),_:1}),p(i,{type:"primary",onClick:C},{default:m((()=>[y("确定")])),_:1})])])),default:m((()=>[p(a,{modelValue:L(h).ref,"onUpdate:modelValue":t[1]||(t[1]=e=>L(h).ref=e),formOpts:L(h),widthSize:2,onHandleEvent:b},{TSelectIcon:m((()=>[p(F,{modelValue:L(h).formData.icon,"onUpdate:modelValue":t[0]||(t[0]=e=>L(h).formData.icon=e)},null,8,["modelValue"])])),_:1},8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1},8,["btnPermissions","table","columns","opts"])}}}),[["__file","index.vue"]]);export{E as default};
