import{e,_ as l,o as a,P as t,Q as r,c as u}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as s,j as n,u as o}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const i=e({__name:"index",setup(e){const i=s(null),p=n({
// labelPosition: 'top',
ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
sex:null,
// *性别: 0:男 1:女
hobby:[],
// *爱好: 0:男 1:女
phone:null,
// 手机号码
createDate:null,
// 创建时间
valDate:null,
// el日期选择范围
wechat:null,
// 微信
qq:null,
// qq
email:null,
// 邮箱
desc:null,
// 描述
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",arrLabel:"key",arrKey:"value"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox"},{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}],email:[{validator:(e,l,a)=>{l&&!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(l)&&a(new Error(e.message)),a()},message:"自定义配置校验规则",trigger:"blur"}]},operatorList:[{label:"提交",type:"danger",fun:()=>{p.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{p.formData={},i.value.clearValidate()}},{label:"清除校验",type:"danger",fun:()=>{i.value.clearValidate()}}],
// 相关列表
listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}),c=(e,l)=>{e};return(e,s)=>{const n=l("t-form"),m=l("t-layout-page-item"),b=l("t-layout-page");return a(),t(b,null,{default:r((()=>[u(m,null,{default:r((()=>[u(n,{ref_key:"TFormDemo",ref:i,modelValue:o(p).ref,"onUpdate:modelValue":s[0]||(s[0]=e=>o(p).ref=e),formOpts:o(p),widthSize:3,onHandleEvent:c},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{i as default};
