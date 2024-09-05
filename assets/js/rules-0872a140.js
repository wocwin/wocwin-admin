import{e,_ as t,o as r,P as l,Q as a,c as i,J as s}from"./@vue_runtime-core@3.2.47-3e13bb2e.js";import{r as o,j as u}from"./@vue_reactivity@3.2.47-8519e5dc.js";import{_ as p}from"./index-31d0b27f.js";import"./@vue_shared@3.2.47-4d30ffe6.js";import"./@vue_runtime-dom@3.2.47-6da757d1.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-bf5b45ed.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-a4fe7f8f.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-e03d5cee.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8694fbf1.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-1f3b5a63.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-09cd413c.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-16c7c25a.js";import"./ant-design-vue@3.2.20_vue@3.2.47-ee47acd5.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-37d297d2.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-e54fe87f.js";import"./vue@3.2.47-5e2814f9.js";import"./vue-i18n@9.2.2_vue@3.2.47-f9d36507.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.11-3a24d33c.js";const m=p(e({__name:"rules",setup(e){const p=o(null),m=e=>{},n=()=>{p.value.resetFormFields()},c=()=>{p.value.clearValidate()},v=()=>{p.value.saveHandle()},d=u({goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{labelPosition:"top",formData:{id:`${Math.floor(10*Math.random()+1)}`,
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
number:2},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",widthSize:2,bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],createDate:[{required:!0,message:"请选择创建时间",trigger:"change"}],valDate:[{required:!0,message:"请选择element日期",trigger:"change"}],wechat:[{required:!0,message:"请输入微信",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],qq:[{required:!0,message:"请输入QQ",trigger:"blur"}]}}}});return(e,o)=>{const u=t("el-button"),g=t("t-module-form"),b=t("t-layout-page-item"),y=t("t-layout-page");return r(),l(y,{class:"t_module_form_demo"},{default:a((()=>[i(b,{isNoMargin:""},{default:a((()=>[i(g,{title:"表单验证",ref_key:"sourceForm",ref:p,formOpts:d,submit:m},{footer:a((()=>[i(u,{type:"primary",onClick:c},{default:a((()=>[s("清除校验")])),_:1}),i(u,{type:"primary",onClick:n},{default:a((()=>[s("重置")])),_:1}),i(u,{type:"danger",onClick:v},{default:a((()=>[s("保存")])),_:1})])),_:1},8,["formOpts"])])),_:1})])),_:1})}}}),[["__file","rules.vue"]]);export{m as default};
