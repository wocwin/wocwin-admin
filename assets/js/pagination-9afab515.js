import{d as e,a as t}from"./data1-a4c5b04a.js";import{d as o,f as i,$ as s,o as r,Q as a,R as p,c as m}from"./@vue_runtime-core@3.2.47-93afb68a.js";import{r as n}from"./@vue_reactivity@3.2.47-d6eb3395.js";import{_ as u}from"./index-4c23e259.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-8b00e8ad.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-2fb95ed1.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-dd3ca4aa.js";import"./lodash-es@4.17.21-dc611046.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e2e5fabe.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f67a1fb8.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-228618a4.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-241834cb.js";import"./@intlify_core-base@9.2.2-0528b302.js";import"./@intlify_message-compiler@9.2.2-e2e032fa.js";import"./@intlify_shared@9.2.2-eb5ba5c2.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-56c8912c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-0d47f636.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-9404aa47.js";import"./ant-design-vue@4.2.5_vue@3.2.47-d72fa1cb.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-728896b1.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-6d00c5a2.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-fc18f8c0.js";import"./vue@3.2.47-22c49a62.js";import"./vue-i18n@9.2.2_vue@3.2.47-3a58c2b9.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-7c84392f.js";const l=o({name:"Pagination"}),j=u(o({...l,setup(o){const u=n(),l=n([]),j=n({pageSize:6,
// 每页显示条数
currentPage:1,
// 当前页
pagerCount:7,
// 按钮数，超过时会折叠
total:0});i((()=>{v(1)}));const v=async o=>{let i;i=1===o?await e:await t,i.success&&(l.value=i.data.records,j.value.total=i.data.total)},_=e=>{v(e)},c=e=>{};return(e,t)=>{const o=s("t-select"),i=s("t-layout-page-item"),n=s("t-layout-page");return r(),a(n,null,{default:p((()=>[m(i,null,{default:p((()=>[m(o,{placeholder:"请选择工序（多选分页）",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),optionSource:l.value,labelCustom:"materialName",valueCustom:"id",onCurrentChange:_,onChange:c,isShowPagination:"",multiple:"",paginationOption:j.value},null,8,["modelValue","optionSource","paginationOption"])])),_:1})])),_:1})}}}),[["__file","pagination.vue"]]);export{j as default};
