import{u as e}from"./useApi-5ac496ff.js";import{e as t,c as a,_ as l,t as i,f as o,o as s,P as n,Q as r,J as p,b as u,x as d}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as c,v as m,r as b,u as g,i as y}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const h={class:"block_wrap quality_overflow"};function f(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}const v=t({...t({name:"dictManage"}),setup(t){const{proxy:d}=e(),v=c({ids:[],queryData:{dictName:null,
// 字典名称
dictType:null,
// 字典类型
status:null,
// 字典状态
createDate:null},listTypeInfo:{statusList:[{label:"正常",key:!0},{label:"停用",key:!1}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"dictId",label:"字典编号",minWidth:"140"},{prop:"dictName",label:"字典名称",minWidth:"200"},{prop:"dictType",label:"字典类型",minWidth:"120",render:(e,t)=>a(l("el-button"),{link:!0,type:"primary",onclick:()=>C(t)},f(e)?e:{default:()=>[e]})},{prop:"status",label:"状态",minWidth:"120",render:e=>{let t="",i="";switch(e){case 1:t="success",i="正常";break;case 0:t="danger",i="停用"}return a(l("el-tag"),{type:t},f(i)?i:{default:()=>[i]})}},{prop:"createTime",label:"创建时间",minWidth:"160"},{prop:"remark",label:"备注",minWidth:"200"}],operator:[{text:"编辑"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"120",label:"操作"}}}),W=i((()=>({dictName:{label:"字典名称",comp:"el-input"},dictType:{label:"字典类型",comp:"el-input"},createDate:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}},status:{label:"状态",comp:"t-select",isSelfCom:!0,bind:{optionSource:v.listTypeInfo.statusList}}}))),S=i((()=>{const{dictName:e,dictType:t,status:a,createDate:l}=m(v.queryData);return{dictName:e.value,
// 字典名称
dictType:t.value,
// 字典类型
status:a.value,
// 字典状态
beginTime:l.value&&l.value[0]?l.value[0]:null,endTime:l.value&&l.value[1]?l.value[1]:null,pageNum:v.table.currentPage,pageSize:v.table.pageSize}})),T=e=>{v.queryData=e,k()},_=e=>{v.ids=e.map((e=>e.operId))};o((()=>{k()}));const k=async()=>{const e=await(null==d?void 0:d.$api.dictList(S.value));e.success&&(v.table.data=e.data.rows,v.table.total=e.data.total)},w=e=>{v.table.pageSize=e,k()},x=e=>{v.table.currentPage=e,k()},C=e=>{j.value=!0,L()},j=b(!1),D=b({data:[],operator:[{text:"编辑"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:160,label:"操作"},columns:[{prop:"dictCode",label:"字典编码",minWidth:"140",fixed:!0},{prop:"dictLabel",label:"字典标签",minWidth:"200"},{prop:"dictValue",label:"字典键值",minWidth:"120"},{prop:"dictSort",label:"字典排序",minWidth:"120"},{prop:"statusLabel",label:"状态",minWidth:"160"},{prop:"createTime",label:"创建时间",minWidth:"180"},{prop:"remark",label:"备注",minWidth:"200"}]}),L=async()=>{const e=await d.$api.childDictList();e.success&&(D.value.data=e.data)};return(e,t)=>{const i=l("el-button"),o=l("t-adaptive-page"),d=l("t-table"),c=l("el-dialog"),m=l("t-layout-page");return s(),n(m,{style:{margin:"0",padding:"0"}},{default:r((()=>[a(o,{title:"字典配置列表",isCopy:"",table:g(v).table,columns:g(v).table.columns,onSizeChange:w,onPageChange:x,onSelectionChange:_,opts:g(W),onSubmit:T},{toolbar:r((()=>[a(i,{type:"primary"},{default:r((()=>[p("清空")])),_:1}),a(i,{type:"danger",disabled:g(v).ids.length<1},{default:r((()=>[p("批量删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"]),a(c,{title:"字典数据列表",width:"60%",draggable:"",modelValue:g(j),"onUpdate:modelValue":t[0]||(t[0]=e=>y(j)?j.value=e:null)},{default:r((()=>[u("div",h,[a(d,{table:g(D),isCopy:"",columns:g(D).columns,isShowPagination:!1},null,8,["table","columns"])])])),_:1},8,["modelValue"])])),_:1})}}});export{v as default};
