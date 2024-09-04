import{w as e}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import{e as t,c as i,J as o,_ as r,o as l,P as s,Q as a}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{r as p,j as n,u as m}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{_ as u}from"./index-282eed5f.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const d=u(t({...t({name:"labelRenderForm"}),setup(t){const u=p(null),d=n({ref:null,formData:{account:null,
// *用户账号
name:null,
// *用户昵称
valDate:null,
// el日期选择范围
email:null,
// 邮箱
desc:null},fieldList:[{labelRender:()=>i("div",{style:"color:red;"},[o("账号")]),value:"account",type:"input",comp:"el-input",event:"account"},{labelRender:()=>i("div",{style:"color:blue;"},[o("昵称")]),value:"name",type:"input",comp:"el-input"},{labelRender:()=>i("div",{style:"color:#3eaf7c;cursor:pointer;display:flex;align-items:center;"},[o("日期组件"),i(r("el-tooltip"),{content:"自定义label",placement:"right"},{default:()=>[i(r("el-icon"),null,{default:()=>[i(e,null,null)]})]})]),value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{labelRender:()=>i("div",{style:"color:green;"},[o("邮箱")]),value:"email",type:"input",comp:"el-input"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{d.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{d.formData={},u.value.clearValidate()}}]});return(e,t)=>{const o=r("t-form"),p=r("t-layout-page-item"),n=r("t-layout-page");return l(),s(n,null,{default:a((()=>[i(p,null,{default:a((()=>[i(o,{ref_key:"TFormDemo",ref:u,modelValue:m(d).ref,"onUpdate:modelValue":t[0]||(t[0]=e=>m(d).ref=e),formOpts:m(d),widthSize:1},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}}),[["__file","index.vue"]]);export{d as default};
