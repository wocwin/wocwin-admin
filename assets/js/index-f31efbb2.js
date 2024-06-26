import{e,f as l,_ as a,o as t,P as u,Q as o,c as s}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r,j as n,u as p}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const c=e({__name:"index",setup(e){const c=r([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),i=r([{label:"女",value:1},{label:"男",value:0}]),m=r([{label:"启用",value:1},{label:"停用",value:0}]),b=r(null),d=n({ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
sex:null,
// *性别: 0:男 1:女
hobby:null,
// *爱好: 0:男 1:女
status:null,
// *状态: 0：停用，1：启用(默认为1)',
desc:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input",bind:{"show-password":!0}},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:i.value,valueCustom:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:m,valueCustom:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",type:"select-arr",comp:"t-select",list:"hobbyList",bind:{multiple:!0,optionSource:c,valueCustom:"value"}},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{d.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{d.formData={},b.value.clearValidate()}}]});l((()=>{v()}));const v=()=>{d.formData={sex:0,
// *性别: 0:男 1:女
hobby:["0","2"],
// *爱好
account:"张三",password:"123456",name:"三丫子",desc:"8888",
// 描述
status:1}};return(e,l)=>{const r=a("t-form"),n=a("t-layout-page-item"),c=a("t-layout-page");return t(),u(c,null,{default:o((()=>[s(n,null,{default:o((()=>[s(r,{ref_key:"TFormDemo",ref:b,modelValue:p(d).ref,"onUpdate:modelValue":l[0]||(l[0]=e=>p(d).ref=e),formOpts:p(d),widthSize:1},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{c as default};
