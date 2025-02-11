import{u as e}from"./useApi-00f84a4c.js";import{c as t,_ as s}from"./index-d9457f41.js";import{d as i,c as o,$ as r,v as a,f as p,H as l,o as n,Q as m,R as u,G as d,K as j}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{a as _,x as c,u as v}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./@vue_shared@3.2.47-80f8f7ef.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const h=s(i({...i({name:"departmentManage"}),setup(s){const i=t().authButtonListGet,{proxy:h}=e(),f=()=>{},b=()=>{},y=()=>{},g=()=>{},w=_({queryData:{deptName:void 0,
// 部门名称
deptNum:void 0},table:{
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"deptName",label:"部门名称",minWidth:180,align:"left"},{prop:"deptNum",label:"部门编码",minWidth:180,align:"left"},{prop:"erpDeptNum",label:"ERP部门编码",minWidth:180,align:"left"},{prop:"orderNum",label:"排序",width:"60px",align:"left"},{prop:"createTime",label:"创建时间",width:"180px",align:"left"},{prop:"status",label:"状态",render:(e,t)=>o(r("el-switch"),{"active-value":!0,modelValue:t.status,"onUpdate:modelValue":e=>t.status=e,"inactive-value":!1,onChange:()=>N(t)},null)}],operator:[{text:"编辑",fun:e=>{},hasPermi:"root:web:sys:dept:alter"},{text:"删除",fun:e=>{},hasPermi:"root:web:sys:dept:del"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"140",label:"操作"}}}),x=a((()=>({deptName:{label:"部门名称",comp:"el-input"},deptNum:{label:"部门编码",comp:"el-input"}}))),N=e=>{},C=a((()=>{const{deptName:e,deptNum:t}=c(w.queryData);return{deptName:e.value,deptNum:t.value}})),k=e=>{w.queryData=e,z()};p((()=>{z()}));const z=async()=>{const e=await h.$api.deptList(C.value);e.success&&(w.table.data=((e,t,s="parentId",i="children",o=0)=>{t=t||"id",s=s||"parentId",i=i||"children",o=o||0;const r=JSON.parse(JSON.stringify(e)),a=r.filter((e=>{let i=r.filter((i=>e[t]===i[s]));return i.length>0&&(e.children=i),e[s]===o}));return""!=a?a:e})(e.data,"deptId"))};return(e,t)=>{const s=r("el-button"),o=r("t-adaptive-page"),a=l("hasPermi");return n(),m(o,{title:"部门管理列表",isCopy:"",isTree:"",table:v(w).table,columns:v(w).table.columns,btnPermissions:v(i),"row-key":"deptId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},isShowPagination:!1,opts:v(x),onSubmit:k},{toolbar:u((()=>[d((n(),m(s,{onClick:f},{default:u((()=>[j("下载模板")])),_:1})),[[a,"root:web:sys:dept:download"]]),d((n(),m(s,{type:"primary",onClick:b},{default:u((()=>[j("批量导入")])),_:1})),[[a,"root:web:sys:dept:import"]]),d((n(),m(s,{onClick:y},{default:u((()=>[j("导出")])),_:1})),[[a,"root:web:sys:dept:export"]]),d((n(),m(s,{type:"primary",onClick:g},{default:u((()=>[j("新增")])),_:1})),[[a,"root:web:sys:dept:add"]])])),_:1},8,["table","columns","btnPermissions","opts"])}}}),[["__file","index.vue"]]);export{h as default};
