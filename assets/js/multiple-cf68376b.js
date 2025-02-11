import{T as e}from"./index-3c86cedb.js";import{d as t,$ as i,o as s,Q as o,R as m,c as a,K as r}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{r as n,a as l}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{_ as p}from"./index-d9457f41.js";import"./@vue_shared@3.2.47-80f8f7ef.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const u=p(t({__name:"multiple",setup(t){const p=n(null),u=l({selectVal:void 0,table:{data:[{id:1,code:1,name:"物料名称1",spec:"物料规格1",unitName:"吨"},{id:2,code:2,name:"物料名称2",spec:"物料规格2",unitName:"吨"},{id:3,code:3,name:"物料名称3",spec:"物料规格3",unitName:"吨"},{id:4,code:4,name:"物料名称4",spec:"物料规格4",unitName:"吨"},{id:5,code:5,name:"物料名称5",spec:"物料规格5",unitName:"吨"},{id:6,code:6,name:"物料名称6",spec:"物料规格6",unitName:"吨"},{id:7,code:7,name:"物料名称7",spec:"物料规格7",unitName:"吨"},{id:8,code:8,name:"物料名称8",spec:"物料规格8",unitName:"吨"},{id:9,code:9,name:"物料名称9",spec:"物料规格9",unitName:"吨"}],columns:[{title:"物料编号",minWidth:60,dataIndex:"code"},{title:"物料名称",minWidth:120,dataIndex:"name"},{title:"规格",minWidth:120,dataIndex:"spec"},{title:"单位",minWidth:80,dataIndex:"unitName"},{title:"物料编号1",minWidth:120,dataIndex:"code"},{title:"物料名称1",minWidth:120,dataIndex:"name"}]}}),d=(e,t)=>{},c=()=>{p.value.clear()};return(t,n)=>{const l=i("el-button"),j=i("t-layout-page-item"),_=i("t-layout-page");return s(),o(_,null,{default:m((()=>[a(j,null,{default:m((()=>[a(l,{style:{"margin-bottom":"10px"},type:"primary",onClick:c},{default:m((()=>[r("清空选中")])),_:1}),a(e,{ref_key:"tantdselecttable",ref:p,selectWidth:"40%",modelValue:u.selectVal,"onUpdate:modelValue":n[0]||(n[0]=e=>u.selectVal=e),table:u.table,columns:u.table.columns,scroll:{x:1e3,y:400},mode:"multiple",keywords:{label:"name",value:"code"},onCheckedChange:d,placeholder:"多选"},null,8,["modelValue","table","columns"])])),_:1})])),_:1})}}}),[["__file","multiple.vue"]]);export{u as default};
