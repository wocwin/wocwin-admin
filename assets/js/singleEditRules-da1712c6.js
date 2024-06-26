import{u as e}from"./useApi-5ac496ff.js";import{E as t}from"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import{e as i,f as a,_ as l,o as r,P as o,Q as s,c as n,b as p,J as d,U as u}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as m,j as c,u as b,i as g}from"./@vue_reactivity@3.2.47-57d9983b.js";import{O as _}from"./@vue_shared@3.2.47-177e1703.js";import{_ as v}from"./index-91d97d58.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bb47592.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./vue-router@4.1.6_vue@3.2.47-54e50ee3.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import"./ant-design-vue@3.2.20_vue@3.2.47-88c73d2c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-a1e7b7f6.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f0af953a.js";import"./vue@3.2.47-f888cb36.js";import"./vue-i18n@9.2.2_vue@3.2.47-39942d18.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.8-2d6250af.js";const j={class:"add_data"},f=v(i({__name:"singleEditRules",setup(i){const{proxy:v}=e(),f=m(10),h=m(null),y=m([]),k=m([]),C=()=>{h.value.saveMethod((e=>{}))},E=()=>{T.table.data=[]},W=()=>{h.value.resetFields()},q=()=>{h.value.clearValidate()},V=()=>{if(f.value>0)for(let e=0;e<f.value;e++)T.table.data.push({})},L=e=>{},S=(e,t,i)=>{},x=e=>{};a((()=>{(async()=>{const e=await v.$api.getSelectTableList();e.success&&(y.value=null==e?void 0:e.data.rows)})(),w()}));const w=()=>{k.value=[{dictLabel:"炉头",dictValue:"1"},{dictLabel:"炉中",dictValue:"2"},{dictLabel:"炉尾",dictValue:"3"}]},N=e=>{e.map((e=>{setTimeout((()=>{t.error(`${e}是必填项！`)}),100)}))};let T=c({table:{rules:{area:[{required:!0,message:"请选择装炉位置",trigger:"change"}],layer:[{required:!0,message:"请选择装炉层",trigger:"change"}],deptCode:[{required:!0,message:"请选择用户名称",trigger:"change"}],packageNumStart:[{required:!0,message:"请输入开始编号",trigger:"blur"}],packageNumEnd:[{required:!0,message:"请输入结束编号",trigger:"blur"}],startDate:[{required:!0,message:"请选择生产日期",trigger:"change"}]},firstColumn:{type:"selection"},data:[],columns:[{prop:"area",label:"装炉位置(使用t-select)",minWidth:"120",headerRequired:!0,canEdit:!0,configEdit:{label:"装炉位置",editComponent:"t-select",isSelfCom:!0,bind:{valueCustom:"dictValue",labelCustom:"dictLabel",optionSource:k}}},{prop:"layer",label:"装炉层(使用el-select)",minWidth:"120",headerRequired:!0,canEdit:!0,configEdit:{label:"装炉层",type:"select-arr",editComponent:"el-select",list:"furnaceLayerList",arrLabel:"dictLabel",arrKey:"dictValue"}},{prop:"deptCode",label:"t-select-table使用",minWidth:"120",headerRequired:!0,canEdit:!0,configEdit:{label:"用户名称",editComponent:"t-select-table",isSelfCom:!0,bind:{isKeyup:!0,maxHeight:400,selectWidth:500,defaultSelectVal:[],keywords:{label:"userName",value:"userId"},table:{data:y},columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"插槽使用",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}]},eventHandle:{radioChange:({row:e,scope:t})=>((e,t)=>{T.table.data[t.$index].deptCode=e.userId})(e,t)}}},{prop:"isTail",label:"是否尾包",minWidth:"60",canEdit:!0,configEdit:{label:"是否尾包",type:"checkbox",editComponent:"el-checkbox"}},{prop:"packageNumStart",label:"开始编号",minWidth:"100",headerRequired:!0,canEdit:!0,configEdit:{label:"开始编号",placeholder:"请输入开始编号",type:"input",editComponent:"el-input"}},{prop:"packageNumEnd",label:"结束编号",minWidth:"100",canEdit:!0,headerRequired:!0,configEdit:{label:"结束编号",placeholder:"请输入结束编号",type:"input",editComponent:"el-input"}},{prop:"startDate",label:"生产日期(t-date-picker)",minWidth:"100",canEdit:!0,headerRequired:!0,configEdit:{label:"生产日期",type:"date",editComponent:"t-date-picker",bind:{isPickerOptions:!0}}},{prop:"endDate",label:"出炉日期(el-date-picker)",minWidth:"100",canEdit:!0,configEdit:{label:"出炉日期",type:"date",editComponent:"el-date-picker",bind:{"value-format":"YYYY-MM-DD"}}},{prop:"singleWeight",label:"单包重量（吨）",minWidth:"160",canEdit:!0,configEdit:{label:"单包重量（吨）",type:"input",editComponent:"el-input-number",event:"singleWeight"}}],listTypeInfo:{furnaceLayerList:[{dictLabel:"上层",dictValue:"1"},{dictLabel:"中层",dictValue:"2"},{dictLabel:"下层",dictValue:"3"}]}}});return(e,t)=>{const i=l("el-input-number"),a=l("el-button"),m=l("el-tooltip"),c=l("t-table"),v=l("t-layout-page-item"),y=l("t-layout-page");return r(),o(y,{class:"single_edit_rules_demo"},{default:s((()=>[n(v,null,{default:s((()=>[n(c,{title:"单元格编辑规则校验",ref_key:"singleEditRules",ref:h,table:b(T).table,columns:b(T).table.columns,isShowPagination:!1,onSelectionChange:x,listTypeInfo:b(T).table.listTypeInfo,isShowFooterBtn:"",onValidateError:N,onSave:L,onHandleEvent:S},{toolbar:s((()=>[p("div",j,[n(i,{modelValue:b(f),"onUpdate:modelValue":t[0]||(t[0]=e=>g(f)?f.value=e:null),clearable:"",placeholder:"请输入追加条数"},null,8,["modelValue"]),n(a,{type:"primary",onClick:V},{default:s((()=>[d("追加"+_(b(f)?b(f):"")+"条数据",1)])),_:1})]),b(T).table.data.length>0?(r(),o(a,{key:0,type:"primary",onClick:q},{default:s((()=>[d("清除校验规则")])),_:1})):u("",!0),b(T).table.data.length>0?(r(),o(m,{key:1,content:"TSelectTable重置效果，请看组件文档demo示例，需下个版本生效",effect:"dark",placement:"top"},{default:s((()=>[n(a,{type:"primary",onClick:W},{default:s((()=>[d("重置表单")])),_:1})])),_:1})):u("",!0),b(T).table.data.length>0?(r(),o(a,{key:2,type:"primary",onClick:E},{default:s((()=>[d("清空")])),_:1})):u("",!0),b(T).table.data.length>0?(r(),o(a,{key:3,type:"primary",onClick:C},{default:s((()=>[d("另一种获取table数据")])),_:1})):u("",!0)])),_:1},8,["table","columns","listTypeInfo"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-17a2d9a4"]]);export{f as default};
