import{w as e}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import{c as i,_ as t}from"./index-d9457f41.js";import l from"./TIcon-292a2fd1.js";import{u as a}from"./useApi-00f84a4c.js";import{E as o,b as s}from"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import{d as n,c as r,K as u,$ as p,v as m,f as d,o as c,Q as v,R as h,b as f,D as y}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{r as b,a as j,x as g,u as _,i as L}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./@vue_shared@3.2.47-80f8f7ef.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./dayjs@1.11.7-5183786b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue@3.2.47-e344955f.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";const w={class:"dialog-footer"};const k=t(n({...n({name:"menuMange"}),setup(t){const{proxy:n}=a(),k=i().authButtonListGet,x=b("新增菜单"),I=b(!1),S=b([]),H=j({ref:null,formData:{parentId:0,
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
remark:null},fieldList:[{label:"上级菜单",value:"parentId",comp:"el-cascader",isSelfCom:!0,bind:{props:{checkStrictly:!0,emitPath:!1,children:"children",label:"label",value:"menuId"},"show-all-levels":!1,options:[]},widthSize:1},{label:"菜单类型",value:"menuType",type:"radio",list:"menuTypeList",comp:"el-radio-group",arrKey:"value",eventHandle:{change:e=>A(e)}},{label:"是否隐藏",value:"isHide",type:"radio",list:"isHideList",comp:"el-radio-group",arrKey:"value"},{label:"菜单名称",value:"title",type:"input",comp:"el-input"},{label:"显示排序",value:"orderNum",type:"inputNumber",comp:"el-input-number",bind:{"controls-position":"right",min:0}},{label:"菜单图标",value:"icon",comp:"t-select-icon",isSelfCom:!0},{label:"是否外链",value:"isShowLink",type:"radio",list:"whetherList",comp:"el-radio-group",event:"isShowLink",arrKey:"value"},{label:"是否全屏",value:"isFull",type:"radio",list:"whetherList",comp:"el-radio-group",arrKey:"value"},{label:"是否固定",labelRender:()=>r("div",{style:"cursor:pointer;display:flex;align-items:center;"},[u("是否固定"),r(p("el-tooltip"),{content:"是否固定在 tabs nav不可删除",placement:"top"},{default:()=>[r(p("el-icon"),null,{default:()=>[r(e,null,null)]})]})]),value:"isAffix",type:"radio",list:"whetherList",comp:"el-radio-group",arrKey:"value"},{label:"是否缓存",value:"isKeepAlive",type:"radio",list:"whetherList",comp:"el-radio-group",arrKey:"value",widthSize:1},{label:"外链地址",value:"isLink",type:"input",comp:"el-input",isHideItem:!0},{label:"高亮菜单",labelRender:()=>r("div",{style:"cursor:pointer;display:flex;align-items:center;"},[u("高亮菜单"),r(p("el-tooltip"),{content:"若当前路由为详情页时，需要配置此值指定高亮的菜单",placement:"top"},{default:()=>[r(p("el-icon"),null,{default:()=>[r(e,null,null)]})]})]),value:"activeMenu",type:"input",comp:"el-input"},{label:"路由地址",value:"path",type:"input",comp:"el-input",widthSize:1},{label:"组件路径",value:"component",type:"input",comp:"el-input",isHideItem:!0,widthSize:1},{label:"备注",value:"remark",type:"input",comp:"el-input",widthSize:1}],rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],orderNum:[{required:!0,message:"请输入显示排序",trigger:"blur"}],isLink:[{required:!0,message:"请输入外链地址",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],component:[{required:!0,message:"请输入组件路径",trigger:"blur"}]},
// 相关列表
listTypeInfo:{whetherList:[{label:"是",value:!0},{label:"否",value:!1}],isHideList:[{label:"隐藏",value:!0},{label:"显示",value:!1}],menuTypeList:[{label:"目录",value:"M"},{label:"菜单",value:"C"}]}}),T=(e,i)=>{"isShowLink"===e&&H.fieldList.map((e=>{"isLink"===e.value&&(e.isHideItem=!i)}))},A=e=>{const i="C"===e;H.fieldList.forEach((e=>{"component"===e.value&&(e.isHideItem=!i)}))},K=()=>{H.ref.validate((e=>{e&&(o.success("新增成功"),I.value=!1)}))},C=()=>{I.value=!0,x.value="新增菜单",M(),H.fieldList.forEach((e=>{const i="C"===H.formData.menuType||H.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)}))},M=()=>{var e;H.formData={parentId:0,
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
remark:null},null==(e=H.ref)||e.resetFields()},z=j({queryData:{title:null,
// 菜单名称
path:null}}),D=m((()=>({title:{label:"菜单名称",comp:"el-input"},path:{label:"菜单路径",comp:"el-input"}}))),N=(m((()=>{const{title:e,path:i}=g(z.queryData);return{title:e.value,path:i.value}})),e=>{z.queryData=e,F()}),q=j({data:[],columns:[{label:"菜单名称",render:(e,i)=>r("div",null,[i.meta.title]),minWidth:180},{label:"菜单图标",render:(e,i)=>r(l,{icon:i.meta.icon},null),minWidth:80},{prop:"menuType",label:"菜单类型",minWidth:120,render:e=>{const{type:i,val:t}={M:{type:"info",val:"目录"},C:{type:"success",val:"菜单"},F:{type:"warning",val:"按钮"}}[e]||{};return r(p("el-tag"),{type:i},"function"==typeof(l=t)||"[object Object]"===Object.prototype.toString.call(l)&&!y(l)?t:{default:()=>[t]});var l}},{prop:"name",label:"菜单 name",minWidth:180},{prop:"path",label:"菜单路径",minWidth:180},{prop:"component",label:"组件路径",minWidth:180}],operator:[{text:"新增",fun:e=>{I.value=!0,x.value="新增菜单",M(),H.fieldList.forEach((e=>{const i="C"===H.formData.menuType||H.formData.isShowLink;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)})),H.formData.parentId=e.parentId},hasPermi:"root:web:sys:menu:add"},{text:"编辑",fun:e=>{I.value=!0,x.value="编辑菜单";const{parentId:i,menuType:t,label:l,orderNum:a,isShowLink:o,path:s,component:n,remark:r,meta:u}=e,{fieldList:p}=H;p.forEach((e=>{const i="component"===e.value&&"C"===t||"isLink"===e.value&&o;"component"!==e.value&&"isLink"!==e.value||(e.isHideItem=!i)})),H.formData={parentId:i,menuType:t,title:l,orderNum:a,isShowLink:o,icon:u.icon,isFull:u.isFull,isHide:u.isHide,isAffix:u.isAffix,isKeepAlive:u.isKeepAlive,isLink:u.isLink,activeMenu:u.activeMenu,path:s,component:n,remark:r}},hasPermi:"root:web:sys:menu:alter"},{text:"删除",fun:e=>{s.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.success({message:"删除成功!"})})).catch((()=>{o.info({message:"已取消删除"})}))},hasPermi:"root:web:sys:menu:del"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"160",label:"操作"}});d((()=>{F()}));const F=async()=>{const e=await n.$api.getRouters();if(e.success){q.data=e.data;let i=[];const t={parentId:0,menuId:0,orderNum:0,menuType:"M",path:"",component:"",name:"",meta:{title:"主类目",isHide:!1,isFull:!1,isAffix:!1,isKeepAlive:!1},children:[]};t.children=e.data.map((e=>({menuId:e.menuId,parentId:e.parentId,orderNum:e.orderNum,menuType:e.menuType,path:e.path,component:e.component,name:e.name,meta:{title:e.menuName,icon:e.icon,isHide:"0"===e.visible,isFull:"1"===e.isFrame,isAffix:"1"===e.isAffix,isKeepAlive:"1"===e.isKeepAlive,isLink:e.isLink,activeMenu:e.activeMenu,isShowLink:"1"===e.isShowLink},children:e.children}))),i.push(t);const l=await E(i);S.value=l,H.fieldList[0].bind.options=S.value}},E=e=>(e.forEach((e=>{e.label=e.meta.title,e.value=e.menuId,e.children&&E(e.children)})),e);return(e,i)=>{const t=p("el-button"),l=p("t-form"),a=p("el-dialog"),o=p("t-adaptive-page");return c(),v(o,{class:"menu_mange",title:"菜单管理页面","row-key":"path",isTree:"",align:"left",btnPermissions:_(k),table:_(q),"tree-props":{children:"children",hasChildren:"hasChildren"},columns:_(q).columns,isShowPagination:!1,opts:_(D),onSubmit:N},{toolbar:h((()=>[r(t,{type:"primary",onClick:C},{default:h((()=>[u("新增菜单")])),_:1})])),footer:h((()=>[r(a,{title:_(x),width:"50%",draggable:"",modelValue:_(I),"onUpdate:modelValue":i[2]||(i[2]=e=>L(I)?I.value=e:null)},{footer:h((()=>[f("div",w,[r(t,{onClick:i[1]||(i[1]=e=>I.value=!1)},{default:h((()=>[u("取消")])),_:1}),r(t,{type:"primary",onClick:K},{default:h((()=>[u("确定")])),_:1})])])),default:h((()=>[r(l,{modelValue:_(H).ref,"onUpdate:modelValue":i[0]||(i[0]=e=>_(H).ref=e),formOpts:_(H),widthSize:2,onHandleEvent:T},null,8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1},8,["btnPermissions","table","columns","opts"])}}}),[["__file","index.vue"]]);export{k as default};
