import{e,_ as l,o as a,P as t,Q as u,c as n}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r,j as p,u as o}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const s=e({__name:"index",setup(e){const s=r(null),m=p({ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
qq:null,
// qq
email:null,
// 邮箱
desc:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",eventHandle:{focus:e=>{},clear:()=>{},blur:e=>{}}},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input",eventHandle:{blur:e=>{}}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{m.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{m.formData={},s.value.clearValidate()}}]});return(e,r)=>{const p=l("t-form"),i=l("t-layout-page-item"),c=l("t-layout-page");return a(),t(c,null,{default:u((()=>[n(i,null,{default:u((()=>[n(p,{ref_key:"TFormDemo",ref:s,modelValue:o(m).ref,"onUpdate:modelValue":r[0]||(r[0]=e=>o(m).ref=e),formOpts:o(m)},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{s as default};
