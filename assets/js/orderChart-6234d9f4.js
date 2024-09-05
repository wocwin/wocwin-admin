import{u as t}from"./useApi-9771d2cb.js";import{M as e}from"./map-d6b1e3c9.js";import{e as a,c as i,J as s,f as o,_ as r,o as n,a as l,b as p,Q as m}from"./@vue_runtime-core@3.2.47-3e13bb2e.js";import{r as d,u}from"./@vue_reactivity@3.2.47-8519e5dc.js";import{O as c}from"./@vue_shared@3.2.47-4d30ffe6.js";import{_ as v}from"./index-31d0b27f.js";import"./@vue_runtime-dom@3.2.47-6da757d1.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-bf5b45ed.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-a4fe7f8f.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e03d5cee.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8694fbf1.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-1f3b5a63.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-09cd413c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-16c7c25a.js";import"./ant-design-vue@3.2.20_vue@3.2.47-ee47acd5.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-37d297d2.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-e54fe87f.js";import"./vue@3.2.47-5e2814f9.js";import"./vue-i18n@9.2.2_vue@3.2.47-f9d36507.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-3a24d33c.js";const y={class:"order_chart"},j={class:"echarts_content"},_={class:"content_top"},g={class:"content_bottom"},b={class:"order_quantity_map"},f={class:"map_top"},h={class:"title"},x={class:"tip"},w={class:"map"},L={id:"OrderQuantity",ref:"OrderQuantity"},D={class:"replaceBox",title:"刷新"},k={class:"table_content"},z=v(a({...a({name:"orderChart"}),setup(a){const{proxy:v}=t(),z=d({border:!0,data:[],columns:[{prop:"orderNo",label:"订单编号",minWidth:"120"},{prop:"address",label:"客户信息",minWidth:"330",render:(t,e)=>i("div",null,[e.customerName,s(" "),e.customerPhone,s(" "),t])},{prop:"orderAmount",label:"订单总额",minWidth:"140"},{prop:"reductionAmount",label:"订单优惠总额",minWidth:"120"},{prop:"payAmount",label:"支付金额",minWidth:"140"},{prop:"createTime",label:"创建时间",minWidth:"160"}]}),A=d({}),$=d({}),O=d({}),F=d({}),W=d({}),P=d(null),T=d([]),M=d([]);o((()=>{q()}));const q=()=>{C(),Q(),V(),G(),N(),I()},C=async()=>{const t=await v.$api.getSaleTrendData();if(t.success){const e=t.data.dataList.map((t=>({type:"line",smooth:!0,...t,label:{normal:{show:!0,position:"top"}}}))),a=t.data.nameData,i={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.data.keyData},yAxis:{type:"value"},series:e};A.value=i}},Q=async()=>{const t=await v.$api.getOrderTimeData();if(t.success){const e=t.data.dataList.map((t=>({type:"line",smooth:!0,...t,label:{normal:{show:!0,position:"top"}}}))),a=t.data.nameData,i={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.data.keyData},yAxis:{type:"value"},series:e};$.value=i}},V=async()=>{const t=await v.$api.getPayResultData();if(t.success){const e=t.data.dataList.map((t=>({...t}))),a={title:{text:t.data.title},tooltip:{trigger:"item",formatter:"{b}:{d}% \n 订单数量: {c}"},series:{type:"pie",radius:"80%",label:{normal:{show:!0,position:"inner",textStyle:{align:"center",baseline:"middle"},formatter:"{b}:{d}% \n 订单数量: {c}"}},data:e}};O.value=a}},G=async()=>{const t=await v.$api.getAmountDistributionData();if(t.success){const e=t.data.dataList.map((t=>({type:"bar",...t,label:{normal:{show:!0,position:"top"}}}))),a=t.data.nameData,i={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:a},grid:{left:"5%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:t.data.keyData,name:t.data.xtitle},yAxis:{type:"value",name:t.data.ytitle},series:e};F.value=i}},N=async()=>{var t;const a=await v.$api.getLocationDistributionData();a.success&&(null==(t=P.value)||t.clearMap(),W.value=a.data,T.value=[a.data.store.amapLon,a.data.store.amapLat],e().then((t=>{P.value=new t.Map("OrderQuantity",{resizeEnable:!0,zoom:12,center:T.value})})),M.value=a.data.streetVOList,M.value.push(a.data.store),M.value=M.value.filter((t=>""!=t.amapLon&&null!=t.amapLon)),W.value.streetVOList.length>0&&await S())},S=()=>{for(let t=0;t<M.value.length;t+=1){let a=[M.value[t].amapLon,M.value[t].amapLat];const i=M.value[t].storeType?"#ff3d00":"#1d6fec",s=`<div class="custom-content-marker marker"><img src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-${M.value[t].storeType?"red":"default"}.png" style="width:25px;height:34px;"/>  <div style="color:#fff;position: absolute;font-size: 12px;top: 5px;" class="num">${M.value[t].count||""} </div></div>`;e().then((e=>{let o=new e.Marker({position:a,offset:new e.Pixel(-13,-30),content:s,title:`${M.value[t].street}`,zIndex:102});const r=`<div style="background: ${i};opacity:'0.8';padding: 0 5px;border-radius: 4px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.16)">\n            <div style="color: #FFFFFF;">${M.value[t].storeType?"当前门店":M.value[t].street}</div>\n          </div>`;o.setLabel({direction:"top",offset:new e.Pixel(0,0),
// 设置文本标注偏移量
content:r}),P.value.add(o),P.value.setZoom(18),P.value.setFitView()}))}},B=()=>{N()},I=async()=>{const t=await v.$api.pageOrderData();t.success&&(z.value.data=t.data)};return(t,e)=>{const a=r("t-chart"),s=r("Refresh"),o=r("el-icon"),d=r("t-table");return n(),l("div",y,[p("div",j,[p("div",_,[i(a,{options:u(A)},null,8,["options"]),i(a,{options:u($)},null,8,["options"])]),p("div",g,[i(a,{options:u(O)},null,8,["options"]),i(a,{options:u(F)},null,8,["options"]),p("div",b,[p("div",f,[p("div",h,c(u(W).title),1),p("div",x,c(u(W).tip),1)]),p("div",w,[p("div",L,null,512),p("div",D,[i(o,{onClick:B},{default:m((()=>[i(s)])),_:1})])])])])]),p("div",k,[i(d,{title:"订单详情",table:u(z),columns:u(z).columns,isShowPagination:!1},null,8,["table","columns"])])])}}}),[["__file","orderChart.vue"]]);export{z as default};
