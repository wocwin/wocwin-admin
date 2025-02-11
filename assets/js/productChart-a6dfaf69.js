import{u as t}from"./useApi-00f84a4c.js";import{d as e,f as i,$ as s,o,a,b as r,c as p}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{r as n,u as l}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{_ as m}from"./index-d9457f41.js";import"./@vue_shared@3.2.47-80f8f7ef.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const u={class:"product_chart"},d={class:"product_echarts_content"},c={class:"table_content"},j=m(e({...e({name:"orderChart"}),setup(e){const{proxy:m}=t(),j=n({border:!0,data:[],columns:[{prop:"goodsCode",label:"商品编号",minWidth:"120"},{prop:"goodsTitle",label:"商品名称",minWidth:"220"},{prop:"retailPrice",label:"商品单价",minWidth:"140"},{prop:"salePriceAvg",label:"销售均价",minWidth:"120"},{prop:"saleCount",label:"商品销量",minWidth:"140"},{prop:"payAmount",label:"支付金额",minWidth:"160"},{prop:"ordersCount",label:"子订单数",minWidth:"160"},{prop:"customerCount",label:"购买人数",minWidth:"160"}]}),_=n({}),v=n({});i((()=>{setTimeout((()=>{y()}),1500)}));const y=async()=>{await g(),await h(),await b()},g=async()=>{const t=await m.$api.getSaleData();if(t.success){const e=t.data.dataList.map((t=>({type:"line",smooth:!0,...t,label:{normal:{show:!0,position:"top"}}}))),i=t.data.nameData,s={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:i},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.data.keyData},yAxis:{type:"value"},series:e};_.value=s}},h=async()=>{const t=await m.$api.getSaleRankingData();if(t.success){const e=t.data.dataList.map((t=>({type:"bar",...t,label:{normal:{show:!0,position:"top"}}}))),i=t.data.nameData,s={title:{text:t.data.title},tooltip:{trigger:"axis"},legend:{data:i},grid:{left:"5%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:t.data.keyData,name:t.data.xtitle,axisLabel:{interval:0,rotate:40}},yAxis:{type:"value",name:t.data.ytitle},series:e};v.value=s}},b=async()=>{const t=await m.$api.pageGoodsData();t.success&&(j.value.data=t.data)};return(t,e)=>{const i=s("t-chart"),n=s("t-table");return o(),a("div",u,[r("div",d,[p(i,{options:l(_)},null,8,["options"]),p(i,{options:l(v)},null,8,["options"])]),r("div",c,[p(n,{title:"商品详情",table:l(j),isShowPagination:!1,columns:l(j).columns},null,8,["table","columns"])])])}}}),[["__file","productChart.vue"]]);export{j as default};
