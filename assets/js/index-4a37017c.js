import{u as e}from"./useApi-2a80d655.js";import t from"./orderChart-c4e59170.js";import i from"./userChart-70e9301f.js";import s from"./productChart-bd50a1ac.js";import a from"./pageChart-1ccc2c6c.js";import{e as r,f as l,_ as o,o as u,P as m,Q as n,c as p,b as d,a as c,X as v,F as _,U as j}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{r as f,u as y,i as g}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{s as b,O as k}from"./@vue_shared@3.2.47-177e1703.js";import{_ as h}from"./index-282eed5f.js";import"./map-d6b1e3c9.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const C={class:"top_query"},x=d("div",{class:"left"},"选择日期",-1),N={class:"right"},V={class:"statistics"},w={class:"order_list"},z={class:"title"},R={class:"num_content"},O={class:"num"},$={class:"unit"},q={class:"visit_list"},U={class:"title"},P={class:"num_content"},A={class:"num"},F={class:"unit"},I=h(r({...r({name:"echarts"}),setup(r){const{proxy:h}=e(),I=f([]),S=f(null),X=f(null),B=f("tab1"),D=f(null),G=f(null),H=f(null),M=f(null),Q=f([{title:"支付总额/元",fieldName:"payAmount",num:0,unit:"元"},{title:"客单价",fieldName:"averageOrderValue",num:0,unit:"元"},{title:"订单总数",fieldName:"orderCount",num:0,unit:"单"},{title:"商品总销量",fieldName:"orderItemCount",num:0,unit:"件"}]),T=f([{title:"云店访问次数",fieldName:"accessCount",num:0,unit:"次"},{title:"云店访问人数",fieldName:"visitorCount",num:0,unit:"人"},{title:"下单人数",fieldName:"orderCustomerCount",num:0,unit:"人"},{title:"新用户数量",fieldName:"newCustomerCount",num:0,unit:"人"}]),W=f([{key:"tab1",title:"订单数据"},{key:"tab2",title:"用户数据"},{key:"tab3",title:"商品数据"},{key:"tab4",title:"页面数据"}]);l((()=>{K(),L()}));const E=e=>{S.value=e&&e[0],X.value=e&&e[1]},J=e=>{B.value=e.props.name},K=async()=>{const e=await h.$api.getOrderSummary();e.success&&Q.value.map((t=>{t.num=e.data[t.fieldName]}))},L=async()=>{const e=await h.$api.getVisitorSummary();e.success&&T.value.map((t=>{t.num=e.data[t.fieldName]}))};return(e,r)=>{const l=o("t-date-picker"),f=o("t-layout-page-item"),h=o("t-tabs"),S=o("t-layout-page");return u(),m(S,{class:"overview_diagram"},{default:n((()=>[p(f,null,{default:n((()=>[d("div",C,[x,d("div",N,[p(l,{type:"daterange",modelValue:y(I),"onUpdate:modelValue":r[0]||(r[0]=e=>g(I)?I.value=e:null),isPickerOptions:"",onChange:E},null,8,["modelValue"])])]),d("div",V,[d("div",w,[(u(!0),c(_,null,v(y(Q),((e,t)=>(u(),c("div",{class:"order_list_item",key:t,style:b({flex:`0 1 calc((${100/y(Q).length}% - 5px))`,marginRight:"5px"})},[d("div",z,k(e.title),1),d("div",R,[d("div",O,k(e.num),1),d("span",$,k(e.unit),1)])],4)))),128))]),d("div",q,[(u(!0),c(_,null,v(y(T),((e,t)=>(u(),c("div",{class:"order_list_item",key:t+"i",style:b({flex:`0 1 calc((${100/y(T).length}% - 5px))`,marginRight:"5px"})},[d("div",U,k(e.title),1),d("div",P,[d("div",A,k(e.num),1),d("span",F,k(e.unit),1)])],4)))),128))])])])),_:1}),p(f,null,{default:n((()=>[p(h,{modelValue:y(B),"onUpdate:modelValue":r[1]||(r[1]=e=>g(B)?B.value=e:null),tabs:y(W),onTabClick:J},{tab1:n((()=>["tab1"===y(B)?(u(),m(t,{key:0,ref_key:"orderChartRef",ref:D},null,512)):j("",!0)])),tab2:n((()=>["tab2"===y(B)?(u(),m(i,{key:0,ref_key:"userRef",ref:G},null,512)):j("",!0)])),tab3:n((()=>["tab3"===y(B)?(u(),m(s,{key:0,ref_key:"productRef",ref:H},null,512)):j("",!0)])),tab4:n((()=>["tab4"===y(B)?(u(),m(a,{key:0,ref_key:"pageRef",ref:M},null,512)):j("",!0)])),_:1},8,["modelValue","tabs"])])),_:1})])),_:1})}}}),[["__file","index.vue"]]);export{I as default};
