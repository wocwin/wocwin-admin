import{e,Z as a,o as l,P as t,Q as o,c as u,a as r,X as s,F as c}from"./@vue_runtime-core@3.2.47-ac740756.js";import{r as p,j as m,u as n}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const i=e({name:"slotNameForm"}),f=e({...i,setup(e){const i=p(null),f=m({ref:null,formData:{accountType:"",
// *用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
wechat:"",
// 邮箱
desc:""},fieldList:[{label:"平台用户",placeholder:"自定义option插槽",value:"accountType",type:"select-obj",comp:"el-select",childSlotName:"accountType"},{label:"微信",value:"wechat",slotName:"wechat"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",className:"t-form-block"}],operatorList:[{label:"提交",type:"danger",fun:()=>{f.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{f.formData={},i.value.clearValidate()}}],
// 相关列表
listTypeInfo:{accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"}}});return(e,p)=>{const m=a("el-input"),d=a("el-option"),y=a("t-form"),h=a("t-layout-page-item"),v=a("t-layout-page");return l(),t(v,null,{default:o((()=>[u(h,null,{default:o((()=>[u(y,{ref_key:"TFormDemo",ref:i,modelValue:n(f).ref,"onUpdate:modelValue":p[1]||(p[1]=e=>n(f).ref=e),formOpts:n(f),widthSize:1},{wechat:o((()=>[u(m,{modelValue:n(f).formData.wechat,"onUpdate:modelValue":p[0]||(p[0]=e=>n(f).formData.wechat=e),placeholder:"自定义输入框插槽"},null,8,["modelValue"])])),accountType:o((()=>[(l(!0),r(c,null,s(n(f).listTypeInfo.accountTypeList,((e,a)=>(l(),t(d,{key:a,label:e,value:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{f as default};
