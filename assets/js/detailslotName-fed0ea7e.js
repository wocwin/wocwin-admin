import{d as e,c as o,K as a,f as s,$ as i,o as t,Q as l,R as r,b as m}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{a as p}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{_ as u}from"./index-d9457f41.js";import"./@vue_shared@3.2.47-80f8f7ef.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const n=m("span",{style:{color:"red"}},"value自定义插槽",-1),d=u(e({__name:"detailslotName",setup(e){const m=p({goods:{name:"goods",title:"货品信息",data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",value:"3333",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:"定率",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",span:2,slotName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:"是",tooltip:()=>o("div",null,[o("div",null,[a("测试函数方式提示")])])}]}});return s((()=>{const e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};m.goods.data.map((o=>{o.value=e[o.fieldName]}))})),(e,a)=>{const s=i("t-module-form"),p=i("t-layout-page-item"),u=i("t-layout-page");return t(),l(u,{class:"t_module_form_demo"},{default:r((()=>[o(p,{isNoMargin:""},{default:r((()=>[o(s,{title:"模块详情组件",subTitle:"value插槽使用",ref:"sourceDetail",handleType:"desc",descData:m},{loadKgPerCar:r((()=>[n])),_:1},8,["descData"])])),_:1})])),_:1})}}}),[["__file","detailslotName.vue"]]);export{d as default};
