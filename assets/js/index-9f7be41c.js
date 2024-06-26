import{e,_ as l,o as a,P as t,Q as u,c as n}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r,j as o,u as p}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const s=e({__name:"index",setup(e){const s=r(null),i=o({ref:null,formData:{account:null,
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
number:null,
// 计算器
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account",eventHandle:{focus:e=>{},clear:()=>{},blur:e=>{}}},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",arrLabel:"key",arrKey:"value"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox"},{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",widthSize:1,bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{i.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{i.formData={},s.value.clearValidate()}}],
// 相关列表
listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],statusList:[{key:"启用",value:1},{key:"停用",value:0}]}});return(e,r)=>{const o=l("t-form"),c=l("t-layout-page-item"),m=l("t-layout-page");return a(),t(m,null,{default:u((()=>[n(c,null,{default:u((()=>[n(o,{ref_key:"TFormDemo",ref:s,modelValue:p(i).ref,"onUpdate:modelValue":r[0]||(r[0]=e=>p(i).ref=e),formOpts:p(i)},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{s as default};
