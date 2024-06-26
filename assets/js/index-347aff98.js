import{e,_ as t,o as a,P as s,Q as l,c as d,J as i}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as n,j as o,u as r}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const u=e({...e({name:"operator"}),setup(e){const u=n(null);let p=o({table:{firstColumn:{type:"selection",fixed:!0},
// 接口返回数据
data:[{id:"1",date:"2019-09-25",date1:"2019-09-26",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",date1:"2019-09-27",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-26",date1:"2019-09-28",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"4",date:"2019-09-26",date1:"2019-09-29",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"}],
// 表头数据
columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"status",label:"状态",minWidth:"220"},{prop:"date1",label:"日期22",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}],
// 表格内操作列
operator:[{text:"查看",fun:e=>{},
// show: { key: 'status', val: ['1'] },
noshow:[{key:"status",val:["1"]}]},{text:"编辑",fun:e=>{}},{text:"作废",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:200,label:"操作"}},ids:[]});const m=e=>{p.ids=e},f=()=>{p.ids.length>0&&u.value.clearSelection()},b=()=>{},c=()=>{};return(e,n)=>{const o=t("el-button"),h=t("t-table"),y=t("t-layout-page-item"),_=t("t-layout-page");return a(),s(_,null,{default:l((()=>[d(y,null,{default:l((()=>[d(h,{title:"操作列",ref_key:"selectionTable",ref:u,table:r(p).table,columns:r(p).table.columns,onSelectionChange:m,isShowPagination:!1},{toolbar:l((()=>[d(o,{size:"default",type:"primary",disabled:r(p).ids.length<1,onClick:f},{default:l((()=>[i("取消选中")])),_:1},8,["disabled"]),d(o,{size:"default",type:"primary",onClick:b},{default:l((()=>[i("新增")])),_:1}),d(o,{size:"default",type:"danger",disabled:r(p).ids.length<1,onClick:c},{default:l((()=>[i("删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns"])])),_:1})])),_:1})}}});export{u as default};
