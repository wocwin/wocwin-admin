import{u as e}from"./useApi-2a80d655.js";import{E as t}from"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import{e as i,t as a,f as o,_ as l,o as p,P as r,Q as s,c as n}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{j as m,r as u,w as d,u as c}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{_ as v}from"./index-154eab54.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-7195bfe1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-927c3723.js";const j=v(i({...i({name:"cellEditeDemo"}),setup(i){const{proxy:v}=e(),j=m({queryData:{workOrderNo:null,
// 工单号
workStepName:null,
// 工序
materialName:null}}),b=u({currentPage:1,pageSize:10,total:0,data:[],columns:[{prop:"workOrderNo",label:"工单号",minWidth:"160"},{prop:"workStepName",label:"工序",minWidth:"100"},{prop:"materialName",label:"物料",minWidth:"140"},{prop:"materialSpecs",label:"规格",minWidth:"140"},{prop:"batchNo",label:"物料批次",minWidth:"180"},{prop:"labelCode",label:"包号",minWidth:"220"},{prop:"weight",label:"重量",minWidth:"180",canEdit:!1,configEdit:{label:"重量",type:"input",editComponent:"el-input-number",event:"weight",bind:e=>({controls:!1,disabled:!e.row.isEdit,min:0,max:9999,precision:2})}},{prop:"equipmentName",label:"生产设备",minWidth:"200",canEdit:!1,configEdit:{label:"生产设备",type:"select-arr",editComponent:"el-select",list:"equipmentList",arrLabel:"equipmentName",arrKey:"equipmentCode",bind:e=>({disabled:!e.row.isEdit}),eventHandle:{change:e=>(({val:e,scope:t})=>{b.value.listTypeInfo.equipmentList.map((i=>{i.equipmentCode==e&&(t.row.equipmentName=i.equipmentName,t.row.equipmentCode=e)}))})(e)}}},{prop:"scanType",label:"工位类型",minWidth:"110",render:e=>{let t="";switch(e){case 5:t="上料工位";break;case 6:t="下料工位"}return n("span",null,[t])}},{prop:"createBy",label:"操作人",minWidth:"120"},{prop:"team",label:"班组",minWidth:"100"},{prop:"createTime",label:"操作时间",minWidth:"160"},{prop:"updateBy",label:"修改人",minWidth:"120"},{prop:"updateTime",label:"修改时间",minWidth:"160"}],listTypeInfo:{equipmentList:[{id:77,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0005",equipmentName:"1#电捕",deptName:"石墨电极厂"},{id:78,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0006",equipmentName:"2#电捕",deptName:"石墨电极厂"},{id:79,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0007",equipmentName:"3#电捕",deptName:"石墨电极厂"}]},operator:[{text:"编辑",bind:{disabled:!1},show:{key:"isEdit",val:[!1]},fun:e=>{e.isEdit=!0,b.value.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!0)})),b.value.columns.map((e=>{"重量"==e.label&&(e.canEdit=!0),"生产设备"==e.label&&(e.canEdit=!0)}))}},{text:"保存",fun:e=>{const{labelInfoId:i,labelScanLogId:a,equipmentCode:o,weight:l}=e;b.value.columns.map((e=>{"生产设备"==e.label&&(e.canEdit=!1),"重量"==e.label&&(e.canEdit=!1)})),b.value.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!1)})),e.isEdit=!1,t.success("保存成功！")},show:{key:"isEdit",val:[!0]}},{text:"取消",fun:e=>{e.isEdit=!1,b.value.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!1)})),b.value.columns.map((e=>{"生产设备"==e.label&&(e.canEdit=!1),"重量"==e.label&&(e.canEdit=!1)})),t.info("已取消编辑")},show:{key:"isEdit",val:[!0]}}],operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:160,label:"操作"}}),_=a((()=>({workOrderNo:{label:"工单号",comp:"el-input"},workStepName:{label:"工序",comp:"el-input"},materialName:{label:"物料",comp:"el-input"}}))),g=a((()=>{const{workStepName:e,workOrderNo:t,materialName:i}=d(j.queryData);return{workStepName:e.value,workOrderNo:t.value,materialName:i.value,pageNum:b.value.currentPage,pageSize:b.value.pageSize}})),y=e=>{j.queryData=e,f()};o((()=>{f()}));const f=async()=>{const e=await v.$api.getList(g.value);e.success&&(e.data.rows.map((e=>{e.isEdit=!1})),b.value.data=e.data.rows,b.value.total=e.data.total)},h=e=>{b.value.pageSize=e,f()},w=e=>{b.value.currentPage=e,f()};return(e,t)=>{const i=l("t-query-condition"),a=l("t-layout-page-item"),o=l("t-table"),m=l("t-layout-page");return p(),r(m,null,{default:s((()=>[n(a,null,{default:s((()=>[n(i,{opts:c(_),onSubmit:y},null,8,["opts"])])),_:1}),n(a,null,{default:s((()=>[n(o,{title:"单元格单独编辑",isCopy:"",columnSetting:"",name:"cellEditeDemo",table:c(b),columns:c(b).columns,listTypeInfo:c(b).listTypeInfo,onSizeChange:h,onPageChange:w},null,8,["table","columns","listTypeInfo"])])),_:1})])),_:1})}}}),[["__file","cellEdite.vue"]]);export{j as default};