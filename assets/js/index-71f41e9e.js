import{u as e}from"./useApi-00f84a4c.js";import t from"./orderChart-0038bf4a.js";import s from"./userChart-20bb6ffa.js";import i from"./productChart-a6dfaf69.js";import a from"./pageChart-7924f15b.js";import{d as o,f as r,$ as l,o as u,Q as m,R as n,c as p,b as d,a as c,Y as _,F as v,V as j}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{r as f,u as y,i as g}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{s as h,O as b}from"./@vue_shared@3.2.47-80f8f7ef.js";import{_ as k}from"./index-d9457f41.js";import"./map-d6b1e3c9.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const C={class:"top_query"},x=d("div",{class:"left"},"选择日期",-1),N={class:"right"},V={class:"statistics"},w={class:"order_list"},R={class:"title"},z={class:"num_content"},$={class:"num"},O={class:"unit"},q={class:"visit_list"},A={class:"title"},S={class:"num_content"},I={class:"num"},Q={class:"unit"},T=k(o({...o({name:"echarts"}),setup(o){const{proxy:k}=e(),T=f([]),U=f(null),Y=f(null),B=f("tab1"),D=f(null),E=f(null),F=f(null),G=f(null),H=f([{title:"支付总额/元",fieldName:"payAmount",num:0,unit:"元"},{title:"客单价",fieldName:"averageOrderValue",num:0,unit:"元"},{title:"订单总数",fieldName:"orderCount",num:0,unit:"单"},{title:"商品总销量",fieldName:"orderItemCount",num:0,unit:"件"}]),K=f([{title:"云店访问次数",fieldName:"accessCount",num:0,unit:"次"},{title:"云店访问人数",fieldName:"visitorCount",num:0,unit:"人"},{title:"下单人数",fieldName:"orderCustomerCount",num:0,unit:"人"},{title:"新用户数量",fieldName:"newCustomerCount",num:0,unit:"人"}]),L=f([{key:"tab1",title:"订单数据"},{key:"tab2",title:"用户数据"},{key:"tab3",title:"商品数据"},{key:"tab4",title:"页面数据"}]);r((()=>{Z(),J()}));const M=e=>{U.value=e&&e[0],Y.value=e&&e[1]},P=e=>{B.value=e.props.name},Z=async()=>{const e=await k.$api.getOrderSummary();e.success&&H.value.map((t=>{t.num=e.data[t.fieldName]}))},J=async()=>{const e=await k.$api.getVisitorSummary();e.success&&K.value.map((t=>{t.num=e.data[t.fieldName]}))};return(e,o)=>{const r=l("t-date-picker"),f=l("t-layout-page-item"),k=l("t-tabs"),U=l("t-layout-page");return u(),m(U,{class:"overview_diagram"},{default:n((()=>[p(f,null,{default:n((()=>[d("div",C,[x,d("div",N,[p(r,{type:"daterange",modelValue:y(T),"onUpdate:modelValue":o[0]||(o[0]=e=>g(T)?T.value=e:null),isPickerOptions:"",onChange:M},null,8,["modelValue"])])]),d("div",V,[d("div",w,[(u(!0),c(v,null,_(y(H),((e,t)=>(u(),c("div",{class:"order_list_item",key:t,style:h({flex:`0 1 calc((${100/y(H).length}% - 5px))`,marginRight:"5px"})},[d("div",R,b(e.title),1),d("div",z,[d("div",$,b(e.num),1),d("span",O,b(e.unit),1)])],4)))),128))]),d("div",q,[(u(!0),c(v,null,_(y(K),((e,t)=>(u(),c("div",{class:"order_list_item",key:t+"i",style:h({flex:`0 1 calc((${100/y(K).length}% - 5px))`,marginRight:"5px"})},[d("div",A,b(e.title),1),d("div",S,[d("div",I,b(e.num),1),d("span",Q,b(e.unit),1)])],4)))),128))])])])),_:1}),p(f,null,{default:n((()=>[p(k,{modelValue:y(B),"onUpdate:modelValue":o[1]||(o[1]=e=>g(B)?B.value=e:null),tabs:y(L),onTabClick:P},{tab1:n((()=>["tab1"===y(B)?(u(),m(t,{key:0,ref_key:"orderChartRef",ref:D},null,512)):j("",!0)])),tab2:n((()=>["tab2"===y(B)?(u(),m(s,{key:0,ref_key:"userRef",ref:E},null,512)):j("",!0)])),tab3:n((()=>["tab3"===y(B)?(u(),m(i,{key:0,ref_key:"productRef",ref:F},null,512)):j("",!0)])),tab4:n((()=>["tab4"===y(B)?(u(),m(a,{key:0,ref_key:"pageRef",ref:G},null,512)):j("",!0)])),_:1},8,["modelValue","tabs"])])),_:1})])),_:1})}}}),[["__file","index.vue"]]);export{T as default};
