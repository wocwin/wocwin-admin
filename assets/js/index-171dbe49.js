import{e,t as a,Z as l,o as t,P as u,Q as o,c as n}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as s,v as r,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const p=e({...e({name:"queryComUse"}),setup(e){let p=s({queryData:{userName:null,
// 登录名
phonenumber:null,
// 手机号码
workshopNum:null,workshopNum2:null,date:null,date1:null},sexList:[{label:"前纺一车间",key:"W1"},{label:"前纺二车间",key:"W2"}],multipleList:[{name:"前纺一车间",id:"W1"},{name:"前纺二车间",id:"W2"},{name:"前纺三车间",id:"W3"},{name:"前纺四车间",id:"W4"}]});const i=a((()=>({userName:{label:"登录名称",comp:"el-input"},phonenumber:{label:"手机号码",comp:"el-input"},workshopNum:{label:"t-select单选使用",comp:"t-select",defaultVal:"W1",isSelfCom:!0,bind:{optionSource:p.sexList}},date1:{label:"日期",comp:"el-date-picker",bind:{valueFormat:"YYYY-MM-DD"}},workshopNum2:{label:"t-select多选使用",placeholder:"请多选",span:2,comp:"t-select",isSelfCom:!0,bind:{valueCustom:"id",labelCustom:"name",multiple:!0,optionSource:p.multipleList}},date:{label:"装炉时间",comp:"el-date-picker",span:2,event:"date",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD",type:"daterange"}}}))),d=(a((()=>{const{userName:e,phonenumber:a,workshopNum:l,date:t,date1:u,workshopNum2:o}=r(p.queryData);return{userName:e.value,workshopNum:l.value,phonenumber:a.value,workshopNum2:o.value,date1:u.value,beginDate:t.value&&t.value[0]?t.value[0]:null,endDate:t.value&&t.value[1]?t.value[1]:null}})),(e,a)=>{e}),c=e=>{p.queryData=e};return(e,a)=>{const s=l("t-query-condition"),r=l("t-layout-page-item"),p=l("t-layout-page");return t(),u(p,null,{default:o((()=>[n(r,null,{default:o((()=>[n(s,{labelWidth:"130px",opts:m(i),onSubmit:c,onHandleEvent:d},null,8,["opts"])])),_:1})])),_:1})}}});export{p as default};
