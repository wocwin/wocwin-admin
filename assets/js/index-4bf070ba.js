import{u as e}from"./useApi-5ac496ff.js";import{c as t}from"./index-476f4c1d.js";import{e as o,c as s,_ as i,t as a,f as r,E as l,o as p,P as n,Q as m,D as u,J as d}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j,v,u as c}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./@vue_shared@3.2.47-177e1703.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bb47592.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-54e50ee3.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import"./ant-design-vue@3.2.20_vue@3.2.47-88c73d2c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-a1e7b7f6.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f0af953a.js";import"./vue@3.2.47-f888cb36.js";import"./vue-i18n@9.2.2_vue@3.2.47-39942d18.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.2.12-f87f9619.js";const _=o({...o({name:"roleManageList"}),setup(o){const{proxy:_}=e(),b=t().authButtonListGet,g=()=>{},y=()=>{},f=j({roleIds:[],queryData:{roleName:void 0,
// 角色名称
roleKey:void 0,
// 权限字符
date:null},table:{currentPage:1,pageSize:15,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"roleName",label:"角色名称",minWidth:120},{prop:"roleKey",label:"权限字符",minWidth:120},{prop:"createTime",label:"创建时间",minWidth:140},{prop:"status",label:"状态",render:(e,t)=>s(i("el-switch"),{"active-value":!0,modelValue:t.status,"onUpdate:modelValue":e=>t.status=e,"inactive-value":!1,onChange:()=>z(t)},null)}],operator:[{text:"编辑",hasPermi:"root:web:sys:role:alter",fun:e=>{}},{text:"删除",hasPermi:"root:web:sys:role:del",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:"180",label:"操作"}}}),h=a((()=>({roleName:{label:"角色名称",comp:"el-input"},roleKey:{label:"权限字符",comp:"el-input"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),w=a((()=>{const{roleName:e,roleKey:t,date:o}=v(f.queryData);return{roleName:e.value,roleKey:t.value,beginTime:o.value&&o.value[0]?o.value[0]:null,endTime:o.value&&o.value[1]?o.value[1]:null,pageNum:f.table.currentPage,pageSize:f.table.pageSize}})),z=e=>{},P=e=>{f.queryData=e,C()},x=e=>{f.ids=e.map((e=>e.operId))};r((()=>{C()}));const C=async()=>{const e=await _.$api.roleList(w.value);e.success&&(f.table.data=e.data.rows,f.table.total=e.data.total)},N=e=>{f.table.pageSize=e,C()},S=e=>{f.table.currentPage=e,C()};return(e,t)=>{const o=i("el-button"),s=i("t-adaptive-page"),a=l("hasPermi");return p(),n(s,{title:"角色管理列表",isCopy:"",table:c(f).table,columns:c(f).table.columns,btnPermissions:c(b),onSelectionChange:x,onSizeChange:N,onPageChange:S,opts:c(h),onSubmit:P},{toolbar:m((()=>[u((p(),n(o,{type:"primary",onClick:g},{default:m((()=>[d("新增")])),_:1})),[[a,"root:web:sys:role:add"]]),u((p(),n(o,{type:"danger",disabled:c(f).roleIds.length<1,onClick:y},{default:m((()=>[d("批量删除")])),_:1},8,["disabled"])),[[a,"root:web:sys:role:del"]])])),_:1},8,["table","columns","btnPermissions","opts"])}}});export{_ as default};
