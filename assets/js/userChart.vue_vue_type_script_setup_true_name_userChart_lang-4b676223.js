import{u as a}from"./useApi-5ac496ff.js";import{e as t,f as e,_ as s,o,a as i,c as l,Q as n,J as r}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as d,u,i as p}from"./@vue_reactivity@3.2.47-57d9983b.js";const c={class:"user_echarts_content"},m=t({...t({name:"userChart"}),setup(t){const{proxy:m}=a(),y=d({}),g=d({}),f=d({}),v=d(0),x=a=>{h(v.value)};e((()=>{setTimeout((()=>{b()}),1e3)}));const b=async()=>{await _(),await h(v.value),await w()},_=async()=>{const a=await m.$api.getNewCustomerData();if(a.success){const t=a.data.dataList.map((a=>({type:"line",smooth:!0,...a,label:{normal:{show:!0,position:"top"}}}))),e=a.data.nameData,s={title:{text:a.data.title},tooltip:{trigger:"axis"},legend:{data:e},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a.data.keyData},yAxis:{type:"value"},series:t};y.value=s}},h=async a=>{const t=await m.$api.getVisitsTrendData();if(t.success){const e=t.data[a].dataList.map((e=>({type:"line",smooth:!0,name:t.data[a].type||"",data:e.data,label:{normal:{show:!0,position:"top"}}}))),s=t.data[a].nameData,o={title:{text:t.data[a].title},tooltip:{trigger:"axis"},legend:{data:s},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.data[a].keyData},yAxis:{type:"value"},series:e};g.value=o}},w=async()=>{const a=await m.$api.getCustOrderData();if(a.success){const t=a.data.dataList.map((a=>({...a}))),e={title:{text:a.data.title},tooltip:{trigger:"item",formatter:"{b}:{d}% \n 订单数量: {c}"},series:{type:"pie",radius:"80%",label:{normal:{show:!0,position:"inner",textStyle:{align:"center",baseline:"middle"},formatter:"{b}:{d}% \n 订单数量: {c}"}},data:t}};f.value=e}};return(a,t)=>{const e=s("t-chart"),d=s("el-radio-button"),m=s("el-radio-group");return o(),i("div",c,[l(e,{options:u(y)},null,8,["options"]),l(e,{options:u(g)},{default:n((()=>[l(m,{class:"access_type_user",modelValue:u(v),"onUpdate:modelValue":t[0]||(t[0]=a=>p(v)?v.value=a:null),size:"small",onChange:x},{default:n((()=>[l(d,{value:0},{default:n((()=>[r("访问人数")])),_:1}),l(d,{value:1},{default:n((()=>[r("访问人次")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["options"]),l(e,{options:u(f)},null,8,["options"])])}}});export{m as _};