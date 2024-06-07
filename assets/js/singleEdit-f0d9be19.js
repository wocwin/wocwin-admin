import{e,f as t,_ as i,o,P as a,Q as l,c as s,b as n,J as p,U as r}from"./@vue_runtime-core@3.2.47-64a8f806.js";import{r as d,j as m,u,i as c}from"./@vue_reactivity@3.2.47-8860aa2c.js";import{O as b}from"./@vue_shared@3.2.47-177e1703.js";import{_ as j}from"./index-342106f4.js";import"./@vue_runtime-dom@3.2.47-7c475029.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-43b7c6d6.js";import"./vue-demi@0.14.0_vue@3.2.47-62967f6e.js";import"./vue@3.2.47-1a52ac50.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./element-plus@2.6.1_vue@3.2.47-d032feaa.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-38c90b9d.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-257784b5.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-2574a9d1.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-0a61e1dc.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-753bd102.js";import"./ant-design-vue@3.2.20_vue@3.2.47-25db5c46.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8af4b33e.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f78ea890.js";import"./vue-i18n@9.2.2_vue@3.2.47-399c20a2.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-b4f83a7e.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b76c6ff3.js";import"./@wocwin_t-ui-plus@1.4.6-e18448b4.js";const _={class:"add_data"},v=j(e({__name:"singleEdit",setup(e){const j=d(10),v=d(null),f=()=>{v.value.saveMethod((e=>{}))},g=()=>{if(j.value>0)for(let e=0;e<j.value;e++)C.table.data.push({})},y=e=>{},h=(e,t,i)=>{},E=e=>{};t((()=>{k()}));const k=()=>{const e=[{dictLabel:"炉头",dictValue:"1"},{dictLabel:"炉中",dictValue:"2"},{dictLabel:"炉尾",dictValue:"3"}];C.table.columns.map((t=>{t.canEdit&&"area"===t.prop&&t.configEdit&&(t.configEdit.bind.optionSource=e)}))};let C=m({table:{firstColumn:{type:"selection"},data:[],columns:[{prop:"area",label:"装炉位置(使用t-select)",minWidth:"120",canEdit:!0,configEdit:{label:"装炉位置",editComponent:"t-select",isSelfCom:!0,bind:{valueCustom:"dictValue",labelCustom:"dictLabel",optionSource:[]}}},{prop:"layer",label:"装炉层(使用el-select)",minWidth:"120",canEdit:!0,configEdit:{label:"装炉层",type:"select-arr",editComponent:"el-select",list:"furnaceLayerList",arrLabel:"dictLabel",arrKey:"dictValue"}},{prop:"isTail",label:"是否尾包",minWidth:"60",canEdit:!0,configEdit:{label:"是否尾包",type:"checkbox",editComponent:"el-checkbox"}},{prop:"packageNumStart",label:"开始编号",minWidth:"100",canEdit:!0,configEdit:{label:"开始编号",placeholder:"请输入开始编号",type:"input",editComponent:"el-input"}},{prop:"packageNumEnd",label:"结束编号",minWidth:"100",canEdit:!0,configEdit:{label:"结束编号",placeholder:"请输入结束编号",type:"input",editComponent:"el-input"}},{prop:"startDate",label:"生产日期(t-date-picker)",minWidth:"100",canEdit:!0,configEdit:{label:"生产日期",type:"date",editComponent:"t-date-picker",bind:{isPickerOptions:!0}}},{prop:"endDate",label:"出炉日期(el-date-picker)",minWidth:"100",canEdit:!0,configEdit:{label:"出炉日期",type:"date",editComponent:"el-date-picker",bind:{"value-format":"YYYY-MM-DD"}}},{prop:"singleWeight",label:"单包重量（吨）",minWidth:"160",canEdit:!0,configEdit:{label:"单包重量（吨）",type:"input",editComponent:"el-input-number",event:"singleWeight"}}],listTypeInfo:{furnaceLayerList:[{dictLabel:"上层",dictValue:"1"},{dictLabel:"中层",dictValue:"2"},{dictLabel:"下层",dictValue:"3"}]}}});return(e,t)=>{const d=i("el-input-number"),m=i("el-button"),k=i("t-table"),L=i("t-layout-page-item"),V=i("t-layout-page");return o(),a(V,{class:"single_edit_demo"},{default:l((()=>[s(L,null,{default:l((()=>[s(k,{title:"单元格编辑功能",ref_key:"singleEdit",ref:v,table:u(C).table,columns:u(C).table.columns,isShowPagination:!1,onSelectionChange:E,listTypeInfo:u(C).table.listTypeInfo,isShowFooterBtn:"",onSave:y,onHandleEvent:h},{toolbar:l((()=>[n("div",_,[s(d,{modelValue:u(j),"onUpdate:modelValue":t[0]||(t[0]=e=>c(j)?j.value=e:null),clearable:"",placeholder:"请输入追加条数"},null,8,["modelValue"]),s(m,{type:"primary",onClick:g},{default:l((()=>[p("追加"+b(u(j)?u(j):"")+"条数据",1)])),_:1})]),u(C).table.data.length>0?(o(),a(m,{key:0,type:"primary",onClick:f},{default:l((()=>[p("另一种获取table数据")])),_:1})):r("",!0)])),_:1},8,["table","columns","listTypeInfo"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-4aa2f6b1"]]);export{v as default};
