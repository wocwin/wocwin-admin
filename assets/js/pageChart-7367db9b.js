import{u as t}from"./useApi-9a108d42.js";import{d as e,f as a,$ as i,o as s,a as o,b as r,c as l,R as p,J as n}from"./@vue_runtime-core@3.2.47-93afb68a.js";import{r as m,u,i as d}from"./@vue_reactivity@3.2.47-d6eb3395.js";import{_ as c}from"./index-4c23e259.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-8b00e8ad.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-2fb95ed1.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-dd3ca4aa.js";import"./lodash-es@4.17.21-dc611046.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e2e5fabe.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f67a1fb8.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-228618a4.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-241834cb.js";import"./@intlify_core-base@9.2.2-0528b302.js";import"./@intlify_message-compiler@9.2.2-e2e032fa.js";import"./@intlify_shared@9.2.2-eb5ba5c2.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-56c8912c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-0d47f636.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-9404aa47.js";import"./ant-design-vue@4.2.5_vue@3.2.47-d72fa1cb.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-728896b1.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-6d00c5a2.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-fc18f8c0.js";import"./vue@3.2.47-22c49a62.js";import"./vue-i18n@9.2.2_vue@3.2.47-3a58c2b9.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-7c84392f.js";const j={class:"page_chart"},v={class:"user_echarts_content"},_={class:"table_content"},y=c(e({...e({name:"pageChart"}),setup(e){const{proxy:c}=t(),y=m({border:!0,firstColumn:{type:"index",label:"序列"},data:[],columns:[{prop:"name",label:"页面名称",minWidth:"120"},{prop:"url",label:"URL",minWidth:"220"},{prop:"personAmount",label:"UV访问用户数",minWidth:"140",sort:!0},{prop:"viewTime",label:"PV访问次数",minWidth:"120",sort:!0},{prop:"residence",label:"平均停留时长（秒）",minWidth:"160",sort:!0},{prop:"share",label:"分享次数",minWidth:"160",sort:!0}]}),g=m({}),b=m({}),f=m({}),h=m(0),x=t=>{D(h.value)};a((()=>{setTimeout((()=>{w()}),2e3)}));const w=async()=>{await D(h.value),await z(),await V(),await L()},D=async t=>{const e=await c.$api.getVisitData();if(e.success){const a=e.data[t].dataList.map((a=>({type:"line",smooth:!0,name:e.data[t].type||"",data:a.data,label:{normal:{show:!0,position:"top"}}}))),i=e.data[t].nameData,s={title:{text:e.data[t].title},tooltip:{trigger:"axis"},legend:{data:i},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:e.data[t].keyData},yAxis:{type:"value"},series:a};g.value=s}},z=async()=>{const t=await c.$api.getPageVisitData();if(t.success){const e=t.data.dataList.map((t=>({type:"bar",...t,label:{normal:{show:!0,position:"top"}}}))),a=t.data.nameData,i={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:a},grid:{left:"5%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:t.data.keyData,name:t.data.xtitle,axisLabel:{interval:0,rotate:40}},yAxis:{type:"value",name:t.data.ytitle},series:e};b.value=i}},V=async()=>{const t=await c.$api.getPaymentConversion();if(t.success){const e=t.data.dataList.map((t=>({type:"funnel",left:"10%",width:"90%",maxSize:"90%",label:{position:"inside",formatter:"{c}人",color:"#fff"},itemStyle:{opacity:.8,borderColor:"#fff",borderWidth:2},emphasis:{label:{position:"inside",formatter:"{b}: {c}人"}},...t,data:t.topData}))),a=t.data.nameData,i={title:{text:t.data.title},tooltip:{trigger:"item",formatter:"{b} : {c}人"},legend:{x:"center",y:"bottom",data:a},series:e};f.value=i}},L=async()=>{const t=await c.$api.listPageDetails();t.success&&(y.value.data=t.data)};return(t,e)=>{const a=i("el-radio-button"),m=i("el-radio-group"),c=i("t-chart"),w=i("t-table");return s(),o("div",j,[r("div",v,[l(c,{options:u(g),class:"accessPage"},{default:p((()=>[l(m,{class:"access_type",modelValue:u(h),"onUpdate:modelValue":e[0]||(e[0]=t=>d(h)?h.value=t:null),size:"small",onChange:x},{default:p((()=>[l(a,{value:0},{default:p((()=>[n("UV数据")])),_:1}),l(a,{value:1},{default:p((()=>[n("PV数据")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["options"]),l(c,{options:u(b)},null,8,["options"]),l(c,{options:u(f)},null,8,["options"])]),r("div",_,[l(w,{title:"页面详情",table:u(y),columns:u(y).columns,isShowPagination:!1},null,8,["table","columns"])])])}}}),[["__file","pageChart.vue"]]);export{y as default};
