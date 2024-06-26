import{e as t,_ as a,o as e,P as s,Q as l,c as d}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{u as i}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const u=t({name:"filters"}),n=t({...u,setup(t){let u={
// 接口返回数据
data:[{id:"1",date:"2019-09-25",date1:"2019-09-26",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",date1:"2019-09-27",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-26",date1:"2019-09-28",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"4",date:"2019-09-26",date1:"2019-09-29",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"}],
// 表头数据
columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"status",label:"字典过滤",minWidth:"80",filters:{list:"statusList",key:"id",label:"label"}},{prop:"address",label:"地址",minWidth:"220"}],
// 字典渲染数据源
listTypeInfo:{statusList:[{id:"1",label:"待办"},{id:"2",label:"待审批"},{id:"3",label:"报废"}]}};return(t,n)=>{const r=a("t-table"),o=a("t-layout-page-item"),m=a("t-layout-page");return e(),s(m,null,{default:l((()=>[d(o,null,{default:l((()=>[d(r,{title:"字典过滤渲染",table:i(u),columns:i(u).columns,isShowPagination:!1},null,8,["table","columns"])])),_:1})])),_:1})}}});export{n as default};
