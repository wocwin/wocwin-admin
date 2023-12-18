import{u as e}from"./useApi-a3664480.js";import{c as t}from"./index-65129071.js";import{e as o,c as s,Z as i,t as a,f as r,E as l,o as p,P as n,Q as m,D as u,J as d}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as c,v,u as j}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_runtime-dom@3.2.47-7b31c7d0.js";import"./@vue_shared@3.2.47-177e1703.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-b4bca346.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./element-plus@2.4.2_vue@3.2.47-0fdf09cc.js";import"./lodash-es@4.17.21-cbdb10ad.js";import"./@vueuse_core@9.13.0_vue@3.2.47-a7f0bdd9.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-ba8084b7.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-036cf3d1.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-dfed1e85.js";import"./@floating-ui_core@1.2.6-88778327.js";import"./vue-router@4.1.6_vue@3.2.47-86cdb6f8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./ant-design-vue@3.2.20_vue@3.2.47-30c8f2b7.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-e2fdcd20.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-d4aca8b3.js";import"./vue@3.2.47-0d8a1f35.js";import"./vue-i18n@9.2.2_vue@3.2.47-cb4378dc.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.2.6-5e2110fd.js";const _=o({...o({name:"roleManageList"}),setup(o){const{proxy:_}=e(),b=t().authButtonListGet,g=()=>{},y=()=>{},f=c({roleIds:[],queryData:{roleName:void 0,
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
width:"180",label:"操作"}}}),h=a((()=>({roleName:{label:"角色名称",comp:"el-input"},roleKey:{label:"权限字符",comp:"el-input"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),w=a((()=>{const{roleName:e,roleKey:t,date:o}=v(f.queryData);return{roleName:e.value,roleKey:t.value,beginTime:o.value&&o.value[0]?o.value[0]:null,endTime:o.value&&o.value[1]?o.value[1]:null,pageNum:f.table.currentPage,pageSize:f.table.pageSize}})),z=e=>{},C=e=>{f.queryData=e,x()},P=e=>{f.ids=e.map((e=>e.operId))};r((()=>{x()}));const x=async()=>{const e=await _.$api.roleList(w.value);e.success&&(f.table.data=e.data.rows,f.table.total=e.data.total)},S=e=>{f.table.pageSize=e,x()},N=e=>{f.table.currentPage=e,x()};return(e,t)=>{const o=i("el-button"),s=i("t-adaptive-page"),a=l("hasPermi");return p(),n(s,{title:"角色管理列表",isCopy:"",table:j(f).table,columns:j(f).table.columns,btnPermissions:j(b),onSelectionChange:P,onSizeChange:S,onPageChange:N,opts:j(h),onSubmit:C},{toolbar:m((()=>[u((p(),n(o,{type:"primary",onClick:g},{default:m((()=>[d("新增")])),_:1})),[[a,"root:web:sys:role:add"]]),u((p(),n(o,{type:"danger",disabled:j(f).roleIds.length<1,onClick:y},{default:m((()=>[d("批量删除")])),_:1},8,["disabled"])),[[a,"root:web:sys:role:del"]])])),_:1},8,["table","columns","btnPermissions","opts"])}}});export{_ as default};
