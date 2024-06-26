import{w as e}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import{e as l,c as a,J as t,_ as r,o as n,P as o,Q as u}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as i,j as p,u as s}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const d=l({...l({name:"labelRenderForm"}),setup(l){const d=i(null),m=p({ref:null,formData:{account:null,
// *用户账号
name:null,
// *用户昵称
valDate:null,
// el日期选择范围
email:null,
// 邮箱
desc:null},fieldList:[{labelRender:()=>a("div",{style:"color:red;"},[t("账号")]),value:"account",type:"input",comp:"el-input",event:"account"},{labelRender:()=>a("div",{style:"color:blue;"},[t("昵称")]),value:"name",type:"input",comp:"el-input"},{labelRender:()=>a("div",{style:"color:#3eaf7c;cursor:pointer;display:flex;align-items:center;"},[t("日期组件"),a(r("el-tooltip"),{content:"自定义label",placement:"right"},{default:()=>[a(r("el-icon"),null,{default:()=>[a(e,null,null)]})]})]),value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{labelRender:()=>a("div",{style:"color:green;"},[t("邮箱")]),value:"email",type:"input",comp:"el-input"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{m.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{m.formData={},d.value.clearValidate()}}]});return(e,l)=>{const t=r("t-form"),i=r("t-layout-page-item"),p=r("t-layout-page");return n(),o(p,null,{default:u((()=>[a(i,null,{default:u((()=>[a(t,{ref_key:"TFormDemo",ref:d,modelValue:s(m).ref,"onUpdate:modelValue":l[0]||(l[0]=e=>s(m).ref=e),formOpts:s(m),widthSize:1},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{d as default};
