import{_ as a}from"./index.vue_vue_type_style_index_0_lang-a78786b2.js";import{d as e,a as t}from"./getData2-8e159921.js";import{e as l,f as i,_ as n,o,P as d,Q as r,c as m}from"./@vue_runtime-core@3.2.47-64a8f806.js";import{r as s,j as u}from"./@vue_reactivity@3.2.47-8860aa2c.js";import"./@vue_shared@3.2.47-177e1703.js";const c=l({__name:"radiopagination",setup(l){const c=s(null),p=u({selectVal:null,table:{pagination:{current:1,total:0,
// 总数
showSizeChanger:!0,pageSizeOptions:["10","20","40","80","100"],showTotal:a=>`共 ${a} 条`
// 分页中显示总的数据
,pageSize:10},data:[],columns:[{title:"物料编号",minWidth:100,dataIndex:"materialCode"},{title:"物料名称",minWidth:150,dataIndex:"materialName"},{title:"物料名称1",minWidth:150,dataIndex:"materialName"},{title:"物料名称2",minWidth:150,dataIndex:"materialName"},{title:"物料名称3",minWidth:150,dataIndex:"materialName"},{title:"物料名称4",minWidth:150,dataIndex:"materialName"},{title:"物料名称5",minWidth:150,dataIndex:"materialName"},{title:"物料名称6",minWidth:150,dataIndex:"materialName"}]}}),g=(a,e)=>{},h=async a=>{let l;l=1===a?await e:await t,l.success&&(p.table.pagination.total=l.data.total,p.table.data=l.data.records)},_=a=>{p.table.pagination.current=(null==a?void 0:a.current)||1,p.table.pagination.pageSize=(null==a?void 0:a.pageSize)||20,h(p.table.pagination.current),setTimeout((()=>{c.value.openSelectDropdown()}),300)};return i((()=>{h(1)})),(e,t)=>{const l=n("t-layout-page-item"),i=n("t-layout-page");return o(),d(i,null,{default:r((()=>[m(l,null,{default:r((()=>[m(a,{ref_key:"tantdselecttable",ref:c,selectWidth:"40%",modelValue:p.selectVal,"onUpdate:modelValue":t[0]||(t[0]=a=>p.selectVal=a),table:p.table,columns:p.table.columns,scroll:{x:2e3,y:400},isShowPagination:"",keywords:{label:"materialName",value:"materialCode"},onCheckedChange:g,onChange:_,placeholder:"单选分页"},null,8,["modelValue","table","columns"])])),_:1})])),_:1})}}});export{c as default};