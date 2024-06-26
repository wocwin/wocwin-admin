import{e,_ as l,o as a,P as t,Q as u,c as n,J as s}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as i,j as o}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const p=e({__name:"titleBtn",setup(e){const p=i(null),r=e=>{},m=o({data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}],columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}]}),c=o({lineMessage:{title:"线路信息",name:"lineMessage",slotName:"lineMessage",btn:"material"},goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{formData:{id:`${Math.floor(10*Math.random()+1)}`,
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
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox",widthSize:1}],
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
number:2},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}]}},loadingDate:{name:"loadingDate",title:"承运信息",ref:null,opts:{formData:{id:`${Math.floor(10*Math.random()+1)}`,
// *唯一ID
createDate:null,
// 创建时间
valDate:null,
// el日期选择范围
qq:null,
// qq
accountType:null,
// *用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
email:null,
// 邮箱
desc:null,
// 描述
number:2,
// 计算器
status:null},fieldList:[{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],
// 相关列表
listTypeInfo:{sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}}});return(e,i)=>{const o=l("el-button"),d=l("t-table"),b=l("t-module-form"),y=l("t-layout-page-item"),v=l("t-layout-page");return a(),t(v,{class:"t_module_form_demo"},{default:u((()=>[n(y,{isNoMargin:""},{default:u((()=>[n(b,{title:"模块Title右侧插槽使用",ref_key:"sourceForm",ref:p,formOpts:c,submit:r},{extra:u((()=>[n(o,{type:"primary"},{default:u((()=>[s("主要按钮")])),_:1}),n(o,{type:"success"},{default:u((()=>[s("成功按钮")])),_:1}),n(o,{type:"danger"},{default:u((()=>[s("信息按钮")])),_:1})])),lineMessage:u((()=>[n(d,{title:"模块插槽使用",table:m,columns:m.columns,isCopy:""},null,8,["table","columns"])])),material:u((()=>[n(o,{size:"small",type:"primary"},{default:u((()=>[s("批量通过")])),_:1}),n(o,{size:"small",type:"danger"},{default:u((()=>[s("批量驳回")])),_:1}),n(o,{size:"small"},{default:u((()=>[s("导出")])),_:1})])),_:1},8,["formOpts"])])),_:1})])),_:1})}}});export{p as default};
