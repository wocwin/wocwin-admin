import{d as e,c as a,J as t,f as i,$ as s,o,Q as l,R as r,b as m}from"./@vue_runtime-core@3.2.47-93afb68a.js";import{a as p}from"./@vue_reactivity@3.2.47-d6eb3395.js";import{_ as u}from"./index-4c23e259.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-8b00e8ad.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-2fb95ed1.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-dd3ca4aa.js";import"./lodash-es@4.17.21-dc611046.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e2e5fabe.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f67a1fb8.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-228618a4.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-241834cb.js";import"./@intlify_core-base@9.2.2-0528b302.js";import"./@intlify_message-compiler@9.2.2-e2e032fa.js";import"./@intlify_shared@9.2.2-eb5ba5c2.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-56c8912c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-0d47f636.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-9404aa47.js";import"./ant-design-vue@4.2.5_vue@3.2.47-d72fa1cb.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-728896b1.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-6d00c5a2.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-fc18f8c0.js";import"./vue@3.2.47-22c49a62.js";import"./vue-i18n@9.2.2_vue@3.2.47-3a58c2b9.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-7c84392f.js";const d=m("div",{class:"text-danger"},"value自定义插槽",-1),n=u(e({__name:"detaildisabled",setup(e){const m=p({goods:{name:"goods",title:"禁止收缩",disabled:!0,data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",value:"3333",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:"定率",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",slotName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:"是",tooltip:()=>a("div",null,[a("div",null,[t("测试函数方式提示")])])}]},line:{name:"line",title:"线路信息",disabled:!0,slotName:"line",btn:"material"}});return i((()=>{const e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};m.goods.data.map((a=>{a.value=e[a.fieldName]}))})),(e,i)=>{const p=s("el-button"),u=s("t-module-form"),n=s("t-layout-page-item"),_=s("t-layout-page");return o(),l(_,{class:"t_module_form_demo"},{default:r((()=>[a(n,{isNoMargin:""},{default:r((()=>[a(u,{title:"模块详情组件运用",subTitle:"模块禁止收缩",ref:"sourceDetail",handleType:"desc",descData:m},{extra:r((()=>[a(p,{type:"primary"},{default:r((()=>[t("主要按钮")])),_:1}),a(p,{type:"success"},{default:r((()=>[t("成功按钮")])),_:1}),a(p,{type:"danger"},{default:r((()=>[t("信息按钮")])),_:1})])),line:r((()=>[a(p,{type:"danger"},{default:r((()=>[t("自定义模块detail插槽")])),_:1})])),material:r((()=>[a(p,{size:"small",type:"primary"},{default:r((()=>[t("批量通过")])),_:1}),a(p,{size:"small",type:"danger"},{default:r((()=>[t("批量驳回")])),_:1}),a(p,{size:"small"},{default:r((()=>[t("导出")])),_:1})])),loadKgPerCar:r((()=>[d])),_:1},8,["descData"])])),_:1})])),_:1})}}}),[["__file","detaildisabled.vue"]]);export{n as default};
