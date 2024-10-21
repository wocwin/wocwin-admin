import{u as e}from"./useApi-9a108d42.js";import t from"./orderChart-f4dc8bfc.js";import s from"./userChart-327e3c6b.js";import i from"./productChart-b928b38d.js";import a from"./pageChart-7367db9b.js";import{d as r,f as o,$ as l,o as u,Q as m,R as n,c as p,b as d,a as c,Y as v,F as j,V as _}from"./@vue_runtime-core@3.2.47-93afb68a.js";import{r as f,u as y,i as g}from"./@vue_reactivity@3.2.47-d6eb3395.js";import{s as b,O as h}from"./@vue_shared@3.2.47-177e1703.js";import{_ as k}from"./index-4c23e259.js";import"./map-d6b1e3c9.js";import"./@vue_runtime-dom@3.2.47-8b00e8ad.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-2fb95ed1.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-dd3ca4aa.js";import"./lodash-es@4.17.21-dc611046.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e2e5fabe.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f67a1fb8.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-228618a4.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-241834cb.js";import"./@intlify_core-base@9.2.2-0528b302.js";import"./@intlify_message-compiler@9.2.2-e2e032fa.js";import"./@intlify_shared@9.2.2-eb5ba5c2.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-56c8912c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-0d47f636.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-9404aa47.js";import"./ant-design-vue@4.2.5_vue@3.2.47-d72fa1cb.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-728896b1.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-6d00c5a2.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-fc18f8c0.js";import"./vue@3.2.47-22c49a62.js";import"./vue-i18n@9.2.2_vue@3.2.47-3a58c2b9.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-7c84392f.js";const C={class:"top_query"},x=d("div",{class:"left"},"选择日期",-1),N={class:"right"},V={class:"statistics"},w={class:"order_list"},R={class:"title"},z={class:"num_content"},$={class:"num"},O={class:"unit"},q={class:"visit_list"},A={class:"title"},S={class:"num_content"},F={class:"num"},Q={class:"unit"},T=k(r({...r({name:"echarts"}),setup(r){const{proxy:k}=e(),T=f([]),U=f(null),Y=f(null),B=f("tab1"),D=f(null),G=f(null),H=f(null),I=f(null),J=f([{title:"支付总额/元",fieldName:"payAmount",num:0,unit:"元"},{title:"客单价",fieldName:"averageOrderValue",num:0,unit:"元"},{title:"订单总数",fieldName:"orderCount",num:0,unit:"单"},{title:"商品总销量",fieldName:"orderItemCount",num:0,unit:"件"}]),K=f([{title:"云店访问次数",fieldName:"accessCount",num:0,unit:"次"},{title:"云店访问人数",fieldName:"visitorCount",num:0,unit:"人"},{title:"下单人数",fieldName:"orderCustomerCount",num:0,unit:"人"},{title:"新用户数量",fieldName:"newCustomerCount",num:0,unit:"人"}]),L=f([{key:"tab1",title:"订单数据"},{key:"tab2",title:"用户数据"},{key:"tab3",title:"商品数据"},{key:"tab4",title:"页面数据"}]);o((()=>{Z(),E()}));const M=e=>{U.value=e&&e[0],Y.value=e&&e[1]},P=e=>{B.value=e.props.name},Z=async()=>{const e=await k.$api.getOrderSummary();e.success&&J.value.map((t=>{t.num=e.data[t.fieldName]}))},E=async()=>{const e=await k.$api.getVisitorSummary();e.success&&K.value.map((t=>{t.num=e.data[t.fieldName]}))};return(e,r)=>{const o=l("t-date-picker"),f=l("t-layout-page-item"),k=l("t-tabs"),U=l("t-layout-page");return u(),m(U,{class:"overview_diagram"},{default:n((()=>[p(f,null,{default:n((()=>[d("div",C,[x,d("div",N,[p(o,{type:"daterange",modelValue:y(T),"onUpdate:modelValue":r[0]||(r[0]=e=>g(T)?T.value=e:null),isPickerOptions:"",onChange:M},null,8,["modelValue"])])]),d("div",V,[d("div",w,[(u(!0),c(j,null,v(y(J),((e,t)=>(u(),c("div",{class:"order_list_item",key:t,style:b({flex:`0 1 calc((${100/y(J).length}% - 5px))`,marginRight:"5px"})},[d("div",R,h(e.title),1),d("div",z,[d("div",$,h(e.num),1),d("span",O,h(e.unit),1)])],4)))),128))]),d("div",q,[(u(!0),c(j,null,v(y(K),((e,t)=>(u(),c("div",{class:"order_list_item",key:t+"i",style:b({flex:`0 1 calc((${100/y(K).length}% - 5px))`,marginRight:"5px"})},[d("div",A,h(e.title),1),d("div",S,[d("div",F,h(e.num),1),d("span",Q,h(e.unit),1)])],4)))),128))])])])),_:1}),p(f,null,{default:n((()=>[p(k,{modelValue:y(B),"onUpdate:modelValue":r[1]||(r[1]=e=>g(B)?B.value=e:null),tabs:y(L),onTabClick:P},{tab1:n((()=>["tab1"===y(B)?(u(),m(t,{key:0,ref_key:"orderChartRef",ref:D},null,512)):_("",!0)])),tab2:n((()=>["tab2"===y(B)?(u(),m(s,{key:0,ref_key:"userRef",ref:G},null,512)):_("",!0)])),tab3:n((()=>["tab3"===y(B)?(u(),m(i,{key:0,ref_key:"productRef",ref:H},null,512)):_("",!0)])),tab4:n((()=>["tab4"===y(B)?(u(),m(a,{key:0,ref_key:"pageRef",ref:I},null,512)):_("",!0)])),_:1},8,["modelValue","tabs"])])),_:1})])),_:1})}}}),[["__file","index.vue"]]);export{T as default};
