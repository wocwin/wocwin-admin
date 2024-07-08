import{u as e}from"./useApi-5ac496ff.js";import{e as t,c as a,_ as l,t as s,f as i,o as n,P as o,Q as u,x as r}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as p,v as m,u as c}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";function b(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}const d=t({...t({name:"superDemo"}),setup(t){const{proxy:r}=e(),d=p({ids:[],queryData:{systemName:null,
// 业务系统
title:null,
// 业务模块
operName:null,
// 操作人员
businessType:null,
// 操作类型
status:null,
// 状态
date:null},listTypeInfo:{businessTypeList:[{label:"其他",key:0},{label:"新增",key:1},{label:"修改",key:2},{label:"删除",key:3}],statusList:[{label:"正常",key:1},{label:"异常",key:0}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection",fixed:!0},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"systemName",label:"业务系统",minWidth:220},{prop:"title",label:"业务模块",minWidth:140},{prop:"methodDesc",label:"方法描述",minWidth:120},{prop:"businessType",label:"操作类型",minWidth:80,render:e=>{let t="",s="";switch(e){case 0:t="info",s="其它";break;case 1:t="success",s="新增";break;case 2:t="warning",s="修改";break;case 3:t="danger",s="删除"}return a(l("el-tag"),{type:t},b(s)?s:{default:()=>[s]})}},{prop:"requestMethod",label:"请求方式",minWidth:120},{prop:"operName",label:"操作人员",minWidth:120},{prop:"deptName",label:"部门名称",minWidth:140},{prop:"operIp",label:"主机地址",minWidth:140},{prop:"status",label:"操作状态",minWidth:120,render:e=>{let t="",s="";switch(e){case!0:t="success",s="正常";break;case!1:t="danger",s="异常"}return a(l("el-tag"),{type:t},b(s)?s:{default:()=>[s]})}},{prop:"operTime",label:"操作时间",minWidth:180},{prop:"operatorType",label:"操作类别",minWidth:160,render:e=>{let t="",s="";switch(e){case 0:t="其它",s="danger";break;case 1:t="后台用户",s="success";break;case 2:t="手机端用户",s=""}return a(l("el-tag"),{type:s},b(t)?t:{default:()=>[t]})}}],operator:[{text:"详情",fun:()=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:80,label:"操作"}}}),y=s((()=>({systemName:{label:"业务系统",comp:"el-input"},title:{label:"业务模块",comp:"el-input"},operName:{label:"操作人员",comp:"el-input"},businessType:{label:"操作类型",comp:"t-select",isSelfCom:!0,bind:{optionSource:d.listTypeInfo.businessTypeList}},status:{label:"状态",comp:"t-select",isSelfCom:!0,bind:{optionSource:d.listTypeInfo.statusList}},date:{label:"操作时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange",isPickerOptions:!0}}}))),g=s((()=>{const{title:e,systemName:t,operName:a,businessType:l,status:s,date:i}=m(d.queryData);return{title:e.value,systemName:t.value,operName:a.value,businessType:l.value,status:s.value,beginTime:i.value&&i.value[0]?i.value[0]:null,endTime:i.value&&i.value[1]?i.value[1]:null,pageNum:d.table.currentPage,pageSize:d.table.pageSize}})),f=e=>{d.queryData=e,v()},h=e=>{d.ids=e.map((e=>e.operId))};i((()=>{v()}));const v=async()=>{const e=await r.$api.logList(g.value);e.success&&(d.table.data=e.data.rows,d.table.total=e.data.total)},k=e=>{d.table.pageSize=e,v()},T=e=>{d.table.currentPage=e,v()};return(e,t)=>{const s=l("t-query-condition"),i=l("t-layout-page-item"),r=l("t-table"),p=l("t-layout-page");return n(),o(p,null,{default:u((()=>[a(i,null,{default:u((()=>[a(s,{opts:c(y),onSubmit:f},null,8,["opts"])])),_:1}),a(i,null,{default:u((()=>[a(r,{title:"常规页面列表",isCopy:"",columnSetting:"",name:"baseTableDemo",table:c(d).table,columns:c(d).table.columns,onSelectionChange:h,onSizeChange:k,onPageChange:T},null,8,["table","columns"])])),_:1})])),_:1})}}});export{d as default};