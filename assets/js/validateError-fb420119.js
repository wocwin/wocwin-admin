import{E as e}from"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import{e as t,_ as a,o as l,P as r,Q as s,c as u,J as i}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as o,j as n}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";const m=t({__name:"validateError",setup(t){const m=o(null),p=e=>{},c=t=>{for(let a in t)setTimeout((()=>{e.error(`${v[a].title}存在错误,请检查输入是否正确`)}),500)},d=()=>{m.value.resetFormFields()},g=()=>{m.value.clearValidate()},b=()=>{m.value.saveHandle()},v=n({goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{labelPosition:"top",formData:{id:`${Math.floor(10*Math.random()+1)}`,
// *唯一ID
account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
sex:null,
// *性别: 0:男 1:女
hobby:[],
// *爱好: 0:男 1:女
accountType:null,
// *用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox",widthSize:1}],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],accountType:[{required:!0,message:"请选择平台用户",trigger:"change"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}]},
// 相关列表
listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}},freight:{title:"运费信息",name:"freight",opts:{formData:{phone:null,
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
number:2},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],createDate:[{required:!0,message:"请选择创建时间",trigger:"change"}],valDate:[{required:!0,message:"请选择element日期",trigger:"change"}],wechat:[{required:!0,message:"请输入微信",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],qq:[{required:!0,message:"请输入QQ",trigger:"blur"}]}}}});return(e,t)=>{const o=a("el-button"),n=a("t-module-form"),y=a("t-layout-page-item"),h=a("t-layout-page");return l(),r(h,{class:"t_module_form_demo"},{default:s((()=>[u(y,{isNoMargin:""},{default:s((()=>[u(n,{title:"表单校验错误提示",ref_key:"sourceForm",ref:m,formOpts:v,submit:p,onValidateError:c},{footer:s((()=>[u(o,{type:"primary",onClick:g},{default:s((()=>[i("清除校验")])),_:1}),u(o,{type:"primary",onClick:d},{default:s((()=>[i("重置")])),_:1}),u(o,{type:"danger",onClick:b},{default:s((()=>[i("保存")])),_:1})])),_:1},8,["formOpts"])])),_:1})])),_:1})}}});export{m as default};
