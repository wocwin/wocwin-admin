import{u as e}from"./useApi-5ac496ff.js";import{e as t,c as a,t as l,f as i,_ as n,o,P as p,Q as r}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as m,v as d,u as s}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const u=t({...t({name:"cellEditeDemo"}),setup(t){const{proxy:u}=e(),b=m({queryData:{workOrderNo:null,
// 工单号
workStepName:null,
// 工序
materialName:null},table:{currentPage:1,pageSize:10,total:0,data:[],columns:[{prop:"workOrderNo",label:"工单号",minWidth:"160"},{prop:"workStepName",label:"工序",minWidth:"100"},{prop:"materialName",label:"物料",minWidth:"140"},{prop:"materialSpecs",label:"规格",minWidth:"140"},{prop:"batchNo",label:"物料批次",minWidth:"180"},{prop:"labelCode",label:"包号",minWidth:"220"},{prop:"weight",label:"重量",minWidth:"180",canEdit:!1,configEdit:{label:"重量",type:"input",editComponent:"el-input-number",event:"weight",bind:e=>({controls:!1,disabled:!e.row.isEdit,min:0,max:9999,precision:2})}},{prop:"equipmentName",label:"生产设备",minWidth:"200",canEdit:!1,configEdit:{label:"生产设备",type:"select-arr",editComponent:"el-select",list:"equipmentList",arrLabel:"equipmentName",arrKey:"equipmentCode",bind:e=>({disabled:!e.row.isEdit}),eventHandle:{change:e=>(({val:e,scope:t})=>{b.table.listTypeInfo.equipmentList.map((a=>{a.equipmentCode==e&&(t.row.equipmentName=a.equipmentName,t.row.equipmentCode=e)}))})(e)}}},{prop:"scanType",label:"工位类型",minWidth:"110",render:e=>{let t="";switch(e){case 5:t="上料工位";break;case 6:t="下料工位"}return a("span",null,[t])}},{prop:"createBy",label:"操作人",minWidth:"120"},{prop:"team",label:"班组",minWidth:"100"},{prop:"createTime",label:"操作时间",minWidth:"160"},{prop:"updateBy",label:"修改人",minWidth:"120"},{prop:"updateTime",label:"修改时间",minWidth:"160"}],listTypeInfo:{equipmentList:[{id:77,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0005",equipmentName:"1#电捕",deptName:"石墨电极厂"},{id:78,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0006",equipmentName:"2#电捕",deptName:"石墨电极厂"},{id:79,equipmentGroupId:12,equipmentCode:"0-A-jzescj-0007",equipmentName:"3#电捕",deptName:"石墨电极厂"}]},operator:[{text:"编辑",bind:{disabled:!1},show:{key:"isEdit",val:[!1]},fun:e=>{e.isEdit=!0,b.table.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!0)})),b.table.columns.map((e=>{"重量"==e.label&&(e.canEdit=!0),"生产设备"==e.label&&(e.canEdit=!0)}))}},{text:"保存",fun:e=>{const{labelInfoId:t,labelScanLogId:a,equipmentCode:l,weight:i}=e;b.table.columns.map((e=>{"生产设备"==e.label&&(e.canEdit=!1),"重量"==e.label&&(e.canEdit=!1)})),b.table.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!1)})),e.isEdit=!1},show:{key:"isEdit",val:[!0]}},{text:"取消",fun:e=>{e.isEdit=!1,b.table.operator.map((e=>{"编辑"==e.text&&(e.bind.disabled=!1)})),b.table.columns.map((e=>{"生产设备"==e.label&&(e.canEdit=!1),"重量"==e.label&&(e.canEdit=!1)}))},show:{key:"isEdit",val:[!0]}}],operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:160,label:"操作"}}}),c=l((()=>({workOrderNo:{label:"工单号",comp:"el-input"},workStepName:{label:"工序",comp:"el-input"},materialName:{label:"物料",comp:"el-input"}}))),h=l((()=>{const{workStepName:e,workOrderNo:t,materialName:a}=d(b.queryData);return{workStepName:e.value,workOrderNo:t.value,materialName:a.value,pageNum:b.table.currentPage,pageSize:b.table.pageSize}})),N=e=>{b.queryData=e,w()};i((()=>{w()}));const w=async()=>{const e=await u.$api.getList(h.value);e.success&&(e.data.rows.map((e=>{e.isEdit=!1})),b.table.data=e.data.rows,b.table.total=e.data.total)},g=e=>{b.table.pageSize=e,w()},q=e=>{b.table.currentPage=e,w()};return(e,t)=>{const l=n("t-query-condition"),i=n("t-layout-page-item"),m=n("t-table"),d=n("t-layout-page");return o(),p(d,null,{default:r((()=>[a(i,null,{default:r((()=>[a(l,{opts:s(c),onSubmit:N},null,8,["opts"])])),_:1}),a(i,null,{default:r((()=>[a(m,{title:"单元格单独编辑",isCopy:"",columnSetting:"",name:"cellEditeDemo",table:s(b).table,columns:s(b).table.columns,listTypeInfo:s(b).table.listTypeInfo,onSizeChange:g,onPageChange:q},null,8,["table","columns","listTypeInfo"])])),_:1})])),_:1})}}});export{u as default};