import{e,f as a,_ as t,o as l,P as s,Q as o,c as i}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as r,u as k}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const u=e({__name:"index",setup(e){const u=r({dataList:{id:"1498904492217241602",stocktakePlanNo:"PD-YX-20220302002",workshopId:301,workshopLabel:"压型车间",planStocktakeDate:"2022-03-03",warehouseId:1,warehouseName:"压型电极仓",stocktakeJobStatus:4,stocktakeJobStatusLabel:"待盘点录入",stocktakeType:2,stocktakeTypeLabel:"临时盘点",originTypeList:"[1, 3]",originTypeListLabel:"在制品,合格品",planStocktakeUserName:"张三",planStocktakeUserId:0,createRemark:"测试"},descData:[{label:"盘点单编号：",fieldName:"stocktakePlanNo",value:""},{label:"盘点单状态：",fieldName:"stocktakeJobStatusLabel",value:""},{label:"盘点负责人：",fieldName:"planStocktakeUserName",value:""},{label:"计划盘点日期：",fieldName:"planStocktakeDate",value:""},{label:"车间：",fieldName:"workshopLabel",value:""},{label:"仓库：",fieldName:"warehouseName",value:""},{label:"盘点所有物料：",fieldName:"originTypeListLabel",value:""},{label:"备注：",fieldName:"createRemark",value:"",span:4}]});return a((()=>{u.descData.map((e=>{e.value=u.dataList[e.fieldName]}))})),(e,a)=>{const r=t("t-detail"),d=t("t-layout-page-item"),c=t("t-layout-page");return l(),s(c,{class:"t_detail_demo"},{default:o((()=>[i(d,null,{default:o((()=>[i(r,{descData:k(u).descData,direction:"vertical"},null,8,["descData"])])),_:1})])),_:1})}}});export{u as default};
