import{e,_ as a,o as l,P as t,Q as r,c as u,J as s}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as i,j as o}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const n=e({__name:"rules",setup(e){const n=i(null),p=e=>{},c=()=>{n.value.resetFormFields()},m=()=>{n.value.clearValidate()},g=()=>{n.value.saveHandle()},b=o({goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{labelPosition:"top",formData:{id:`${Math.floor(10*Math.random()+1)}`,
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
number:2},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",widthSize:2,bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],createDate:[{required:!0,message:"请选择创建时间",trigger:"change"}],valDate:[{required:!0,message:"请选择element日期",trigger:"change"}],wechat:[{required:!0,message:"请输入微信",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],qq:[{required:!0,message:"请输入QQ",trigger:"blur"}]}}}});return(e,i)=>{const o=a("el-button"),d=a("t-module-form"),y=a("t-layout-page-item"),v=a("t-layout-page");return l(),t(v,{class:"t_module_form_demo"},{default:r((()=>[u(y,{isNoMargin:""},{default:r((()=>[u(d,{title:"表单验证",ref_key:"sourceForm",ref:n,formOpts:b,submit:p},{footer:r((()=>[u(o,{type:"primary",onClick:m},{default:r((()=>[s("清除校验")])),_:1}),u(o,{type:"primary",onClick:c},{default:r((()=>[s("重置")])),_:1}),u(o,{type:"danger",onClick:g},{default:r((()=>[s("保存")])),_:1})])),_:1},8,["formOpts"])])),_:1})])),_:1})}}});export{n as default};
