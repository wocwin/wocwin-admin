import{T as e}from"./index-f931aee8.js";import{d as t,a as i}from"./getData2-8e159921.js";import{e as a,f as o,_ as s,o as r,P as l,Q as m,c as n}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{r as p,j as u}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{_ as d}from"./index-154eab54.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-7195bfe1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-927c3723.js";const j=d(a({__name:"radiopagination",setup(a){const d=p(null),j=u({selectVal:null,table:{pagination:{current:1,total:0,
// 总数
showSizeChanger:!0,pageSizeOptions:["10","20","40","80","100"],showTotal:e=>`共 ${e} 条`
// 分页中显示总的数据
,pageSize:10},data:[],columns:[{title:"物料编号",minWidth:100,dataIndex:"materialCode"},{title:"物料名称",minWidth:150,dataIndex:"materialName"},{title:"物料名称1",minWidth:150,dataIndex:"materialName"},{title:"物料名称2",minWidth:150,dataIndex:"materialName"},{title:"物料名称3",minWidth:150,dataIndex:"materialName"},{title:"物料名称4",minWidth:150,dataIndex:"materialName"},{title:"物料名称5",minWidth:150,dataIndex:"materialName"},{title:"物料名称6",minWidth:150,dataIndex:"materialName"}]}}),c=(e,t)=>{},_=async e=>{let a;a=1===e?await t:await i,a.success&&(j.table.pagination.total=a.data.total,j.table.data=a.data.records)},v=e=>{j.table.pagination.current=(null==e?void 0:e.current)||1,j.table.pagination.pageSize=(null==e?void 0:e.pageSize)||20,_(j.table.pagination.current),setTimeout((()=>{d.value.openSelectDropdown()}),300)};return o((()=>{_(1)})),(t,i)=>{const a=s("t-layout-page-item"),o=s("t-layout-page");return r(),l(o,null,{default:m((()=>[n(a,null,{default:m((()=>[n(e,{ref_key:"tantdselecttable",ref:d,selectWidth:"40%",modelValue:j.selectVal,"onUpdate:modelValue":i[0]||(i[0]=e=>j.selectVal=e),table:j.table,columns:j.table.columns,scroll:{x:2e3,y:400},isShowPagination:"",keywords:{label:"materialName",value:"materialCode"},onCheckedChange:c,onChange:v,placeholder:"单选分页"},null,8,["modelValue","table","columns"])])),_:1})])),_:1})}}}),[["__file","radiopagination.vue"]]);export{j as default};