import{u as e}from"./vue-router@4.1.6_vue@3.2.47-0a61e1dc.js";import{u as t}from"./useApi-476cccc9.js";import{e as a,c as l,_ as s,J as i,y as r,f as o,o as n,P as p,Q as u,v as m}from"./@vue_runtime-core@3.2.47-64a8f806.js";import{j as c,o as b,u as d}from"./@vue_reactivity@3.2.47-8860aa2c.js";import{O as y}from"./@vue_shared@3.2.47-177e1703.js";function h(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!m(e)}const f=a({...a({name:"complexTableDemo"}),setup(a){const{proxy:m}=t(),f=e(),g=(e,t)=>{f.push({path:`/t-ui-plus/table/${t}`,query:{id:e.id}})},k=c({ids:[],queryData:{systemName:null,
// 业务系统
title:null,
// 业务模块
operName:null,
// 操作人员
businessType:null,
// 操作类型
status:null,
// 状态
date:null},listTypeInfo:{businessTypeList:[{label:"其他",key:0},{label:"新增",key:1},{label:"修改",key:2},{label:"删除",key:3}],statusList:[{label:"正常",key:1},{label:"异常",key:0}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection",fixed:!0},data:[],columns:[{prop:"",label:"第一级第一类表头",minWidth:360,children:[{prop:"systemName",label:"业务系统",minWidth:220},{prop:"",label:"第二级表头",minWidth:140,children:[{prop:"title",label:"业务模块",minWidth:140}]}]},{prop:"",label:"第一级第二类表头",minWidth:360,children:[{prop:"methodDesc",label:"方法描述",minWidth:120},{prop:"",label:"第二级表头",minWidth:620,children:[{prop:"businessType",label:"操作类型",minWidth:80,render:e=>{let t="",a="";switch(e){case 0:t="info",a="其它";break;case 1:t="success",a="新增";break;case 2:t="warning",a="修改";break;case 3:t="danger",a="删除"}return l(s("el-tag"),{type:t},h(a)?a:{default:()=>[a]})}},{prop:"requestMethod",label:"请求方式",minWidth:120},{prop:"",label:"第三级表头",minWidth:420,children:[{prop:"operName",label:"操作人员(插槽使用)",slotNameMerge:"operName",minWidth:140},{prop:"deptName",label:"部门名称",minWidth:140},{prop:"operIp",label:"主机地址",minWidth:140}]}]}]},{prop:"status",label:"操作状态",minWidth:120,render:e=>{let t="",a="";switch(e){case!0:t="success",a="正常";break;case!1:t="danger",a="异常"}return l(s("el-tag"),{type:t},h(a)?a:{default:()=>[a]})}},{prop:"operTime",label:"操作时间",minWidth:180},{prop:"operatorType",label:"操作类别",minWidth:160,render:e=>{let t="",a="";switch(e){case 0:t="其它",a="danger";break;case 1:t="后台用户",a="success";break;case 2:t="手机端用户",a=""}return l(s("el-tag"),{type:a},h(t)?t:{default:()=>[t]})}}],operator:[{render:(e,t)=>l(s("el-button"),{color:"#626aef",type:"primary",link:!0,text:!0,size:"small",onClick:()=>g(t,"singleEdit")},{default:()=>[i("常规表格单元格编辑")]})},{render:(e,t)=>l(s("el-button"),{color:"#626aef",type:"primary",link:!0,text:!0,size:"small",onClick:()=>g(t,"multileHeadEdit")},{default:()=>[i("多级表头单元格编辑")]})},{render:(e,t)=>l(s("el-button"),{color:"#626aef",type:"primary",link:!0,text:!0,size:"small",onClick:()=>g(t,"singleEditRules")},{default:()=>[i("单元格编辑规则校验")]})},{render:(e,t)=>l(s("el-button"),{color:"#626aef",type:"primary",link:!0,text:!0,size:"small",onClick:()=>g(t,"treeTable")},{default:()=>[i("Tree-Table")]})}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:280,label:"操作"}}}),v=r((()=>({systemName:{label:"业务系统",comp:"el-input"},title:{label:"业务模块",comp:"el-input"},operName:{label:"操作人员",comp:"el-input"},businessType:{label:"操作类型",comp:"t-select",isSelfCom:!0,bind:{optionSource:k.listTypeInfo.businessTypeList}},status:{label:"状态",comp:"t-select",isSelfCom:!0,bind:{optionSource:k.listTypeInfo.statusList}},date:{label:"操作时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange",isPickerOptions:!0}}}))),T=r((()=>{const{title:e,systemName:t,operName:a,businessType:l,status:s,date:i}=b(k.queryData);return{title:e.value,systemName:t.value,operName:a.value,businessType:l.value,status:s.value,beginTime:i.value&&i.value[0]?i.value[0]:null,endTime:i.value&&i.value[1]?i.value[1]:null,pageNum:k.table.currentPage,pageSize:k.table.pageSize}})),N=e=>{k.queryData=e,C()},W=e=>{k.ids=e.map((e=>e.operId))};o((()=>{C()}));const C=async()=>{const e=await m.$api.logList(T.value);e.success&&(k.table.data=e.data.rows,k.table.total=e.data.total)},S=e=>{k.table.pageSize=e,C()},j=e=>{k.table.currentPage=e,C()};return(e,t)=>{const a=s("t-adaptive-page"),r=s("t-layout-page");return n(),p(r,null,{default:u((()=>[l(a,{"table-title":"多级表头",opts:d(v),onSubmit:N,isCopy:"",table:d(k).table,columns:d(k).table.columns,onSelectionChange:W,onSizeChange:S,onPageChange:j},{operName:u((({scope:e})=>[i(y(e.row.operName),1)])),_:1},8,["opts","table","columns"])])),_:1})}}});export{f as default};