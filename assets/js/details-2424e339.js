import{e,c as a,J as t,_ as l,o as s,P as i,Q as o,am as r,al as m,b as u}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as p,u as n}from"./@vue_reactivity@3.2.47-57d9983b.js";import{_ as d}from"./index-476f4c1d.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bb47592.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-54e50ee3.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import"./ant-design-vue@3.2.20_vue@3.2.47-88c73d2c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-a1e7b7f6.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f0af953a.js";import"./vue@3.2.47-f888cb36.js";import"./vue-i18n@9.2.2_vue@3.2.47-39942d18.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.2.12-f87f9619.js";const v=e=>(r("data-v-60f3a8f4"),e=e(),m(),e),j=v((()=>u("div",null,"基础信息",-1))),_=v((()=>u("div",null,"指派明细",-1))),c=v((()=>u("div",null,"承运明细",-1))),f=v((()=>u("span",{class:"text-danger"},"插槽值回显",-1))),b=d(e({__name:"details",setup(e){const r={stockTakeTypeList:[{label:"在制品",value:1},{label:"待检品",value:2},{label:"合格品",value:3},{label:"报废品",value:4}]},m={stocktakeJobStatus:4},u=p({goods:{name:"goods",title:"货品信息",data:[{label:"货品名称",fieldName:"cargoName",value:"********"},{label:"字典回显：",fieldName:"stocktakeJobStatus",value:4,filters:{list:"stockTakeTypeList"}},{label:"货品类别",fieldName:"cargoType",value:"******"},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:"********"},{label:"总重量",fieldName:"cargoWeightKg",value:"*****"},{label:"总体积",fieldName:"cargoVolumeDm3",value:"********"},{label:"总件数",fieldName:"cargoQty",value:"*******"},{label:"易碎品",fieldName:"isBreakable",value:"**************",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:"*******"},{label:"运费单价",value:"*****"},{label:"路损类型",fieldName:"roadLossType",value:"**************",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:"*****"},{label:"整车承载",fieldName:"loadKgPerCar",slotName:"loadKgPerCar",value:"*******"},{label:"保险购买",fieldName:"buyInsurance",value:"**************",tooltip:()=>a("div",null,[a("div",null,[t("测试函数方式提示")])])}]},line:{name:"line",title:"线路信息",slotName:"line"}});return(e,p)=>{const d=l("el-button"),v=l("t-module-form"),b=l("t-layout-page-item"),g=l("t-layout-page");return s(),i(g,{class:"t-module-form_demo_detail"},{default:o((()=>[a(b,null,{default:o((()=>[a(v,{title:"模块详情组件运用",subTitle:"模块详情222",ref:"sourceDetail",handleType:"desc",descData:n(u),listTypeInfo:r,dataList:m},{tab1:o((()=>[j])),tab2:o((()=>[_])),tab3:o((()=>[c])),extra:o((()=>[a(d,{type:"primary"},{default:o((()=>[t("主要按钮")])),_:1}),a(d,{type:"success"},{default:o((()=>[t("成功按钮")])),_:1}),a(d,{type:"danger"},{default:o((()=>[t("信息按钮")])),_:1})])),line:o((()=>[a(d,{type:"danger"},{default:o((()=>[t("自定义模块detail插槽")])),_:1})])),loadKgPerCar:o((()=>[f])),_:1},8,["descData"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-60f3a8f4"]]);export{b as default};
