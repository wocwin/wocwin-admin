import{u as e}from"./useApi-2a80d655.js";import{e as t,c as s,_ as i,t as a,f as o,o as l,P as r,Q as p,J as n,x as u}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{j as m,w as c,u as d}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{_ as b}from"./index-282eed5f.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";function j(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}const v=b(t({...t({name:"systemLog"}),setup(t){const{proxy:u}=e(),b=m({ids:[],queryData:{systemName:null,
// 业务系统
title:null,
// 业务模块
operName:null,
// 操作人员
businessType:null,
// 操作类型
status:null,
// 状态
date:null},listTypeInfo:{businessTypeList:[{label:"其他",key:0},{label:"新增",key:1},{label:"修改",key:2},{label:"删除",key:3}],statusList:[{label:"正常",key:1},{label:"异常",key:0}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"systemName",label:"业务系统",minWidth:220},{prop:"title",label:"业务模块",minWidth:140},{prop:"methodDesc",label:"方法描述",minWidth:120},{prop:"businessType",label:"操作类型",minWidth:80,render:e=>{let t="",a="";switch(e){case 0:t="info",a="其它";break;case 1:t="success",a="新增";break;case 2:t="warning",a="修改";break;case 3:t="danger",a="删除"}return s(i("el-tag"),{type:t},j(a)?a:{default:()=>[a]})}},{prop:"requestMethod",label:"请求方式",minWidth:120},{prop:"operName",label:"操作人员",minWidth:120},{prop:"deptName",label:"部门名称",minWidth:140},{prop:"operIp",label:"主机地址",minWidth:140},{prop:"status",label:"\t操作状态",minWidth:120,render:e=>{let t="",a="";switch(e){case!0:t="success",a="正常";break;case!1:t="danger",a="异常"}return s(i("el-tag"),{type:t},j(a)?a:{default:()=>[a]})}},{prop:"operTime",label:"操作时间",minWidth:200},{prop:"operatorType",label:"操作类别",minWidth:160,render:e=>{let t="";switch(e){case 0:t="其它";break;case 1:t="后台用户";break;case 2:t="手机端用户"}return s(i("el-tag"),null,j(t)?t:{default:()=>[t]})}}],operator:[{text:"详情"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:80,label:"操作"}}}),v=a((()=>({systemName:{label:"业务系统",comp:"el-input"},title:{label:"业务模块",comp:"el-input"},operName:{label:"操作人员",comp:"el-input"},businessType:{label:"操作类型",comp:"t-select",isSelfCom:!0,bind:{optionSource:b.listTypeInfo.businessTypeList}},status:{label:"状态",comp:"t-select",isSelfCom:!0,bind:{optionSource:b.listTypeInfo.statusList}},date:{label:"操作时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),y=a((()=>{const{title:e,systemName:t,operName:s,businessType:i,status:a,date:o}=c(b.queryData);return{title:e.value,systemName:t.value,operName:s.value,businessType:i.value,status:a.value,beginTime:o.value&&o.value[0]?o.value[0]:null,endTime:o.value&&o.value[1]?o.value[1]:null,pageNum:b.table.currentPage,pageSize:b.table.pageSize}})),_=e=>{b.queryData=e,f()},g=e=>{b.ids=e.map((e=>e.operId))};o((()=>{f()}));const f=async()=>{const e=await u.$api.logList(y.value);e.success&&(b.table.data=e.data.rows,b.table.total=e.data.total)},h=e=>{b.table.pageSize=e,f()},k=e=>{b.table.currentPage=e,f()};return(e,t)=>{const a=i("el-button"),o=i("t-adaptive-page");return l(),r(o,{title:"操作日志列表",isCopy:"",table:d(b).table,columns:d(b).table.columns,isTTableSelfFilling:"",onSelectionChange:g,onSizeChange:h,onPageChange:k,opts:d(v),onSubmit:_},{toolbar:p((()=>[s(a,{type:"primary"},{default:p((()=>[n("清空")])),_:1}),s(a,{type:"danger",disabled:d(b).ids.length<1},{default:p((()=>[n("删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"])}}}),[["__file","index.vue"]]);export{v as default};
