import{e,f as a,_ as l,o as t,P as p,Q as o,c as u}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as c,j as n,u as i}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const s=e({__name:"index",setup(e){const s={data:[{id:1,code:1,name:"物料名称1",spec:"物料规格1",unitName:"吨"},{id:2,code:2,name:"物料名称2",spec:"物料规格2",unitName:"吨"},{id:3,code:3,name:"物料名称3",spec:"物料规格3",unitName:"吨"},{id:4,code:4,name:"物料名称4",spec:"物料规格4",unitName:"吨"},{id:5,code:5,name:"物料名称5",spec:"物料规格5",unitName:"吨"},{id:6,code:6,name:"物料名称6",spec:"物料规格6",unitName:"吨"},{id:7,code:7,name:"物料名称7",spec:"物料规格7",unitName:"吨"},{id:8,code:8,name:"物料名称8",spec:"物料规格8",unitName:"吨"},{id:9,code:9,name:"物料名称9",spec:"物料规格9",unitName:"吨"},{id:10,code:10,name:"物料名称10",spec:"物料规格10",unitName:"吨"},{id:11,code:11,name:"物料名称11",spec:"物料规格11",unitName:"吨"},{id:12,code:12,name:"物料名称12",spec:"物料规格12",unitName:"吨"},{id:13,code:13,name:"物料名称13",spec:"物料规格13",unitName:"吨"}],columns:[{label:"物料编号",width:"100px",prop:"code"},{label:"物料名称",width:"149px",prop:"name"},{label:"规格",width:"149px",prop:"spec"},{label:"单位",width:"110px",prop:"unitName"},{label:"物料编号1",width:"149px",prop:"code"},{label:"物料名称1",width:"149px",prop:"name"},{label:"规格1",width:"149px",prop:"spec"},{label:"单位1",width:"110px",prop:"unitName"},{label:"物料编号11",width:"149px",prop:"code"},{label:"物料名称11",width:"149px",prop:"name"},{label:"规格11",width:"149px",prop:"spec"},{label:"单位11",width:"110px",prop:"unitName"},{label:"物料编号111",width:"149px",prop:"code"},{label:"物料名称111",width:"149px",prop:"name"},{label:"规格111",width:"149px",prop:"spec"},{label:"单位111",width:"110px",prop:"unitName"}]},d=c([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),m=c([{label:"女",value:1},{label:"男",value:0}]),r=c([{label:"启用",value:1},{label:"停用",value:0}]),b=c(null),h=e=>{v.formData.wechat=e.id},v=n({ref:null,formData:{account:null,
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
desc:null,
// 描述
wechat:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input",bind:{"show-password":!0}},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",isSelfCom:!0,bind:{optionSource:m.value,valueCustom:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",isSelfCom:!0,bind:{optionSource:r,valueCustom:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",type:"select-arr",comp:"t-select",list:"hobbyList",isSelfCom:!0,bind:{multiple:!0,optionSource:d,valueCustom:"value"}},{label:"下拉选择表格",value:"wechat",slotName:"wechat"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{v.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{v.formData={},b.value.clearValidate()}}]});a((()=>{w()}));const w=()=>{v.formData={sex:0,
// *性别: 0:男 1:女
hobby:["0","2"],
// *爱好
account:"张三",password:"123456",name:"三丫子",desc:"8888",
// 描述
status:1,
// *状态: 0：停用，1：启用(默认为1)',
wechat:3}};return(e,a)=>{const c=l("t-select-table"),n=l("t-form"),d=l("t-layout-page-item"),m=l("t-layout-page");return t(),p(m,null,{default:o((()=>[u(d,null,{default:o((()=>[u(n,{ref_key:"TFormDemo",ref:b,modelValue:i(v).ref,"onUpdate:modelValue":a[0]||(a[0]=e=>i(v).ref=e),formOpts:i(v),widthSize:3},{wechat:o((()=>[u(c,{table:s,columns:s.columns,"max-height":400,placeholder:"使用下拉选择表格组件",defaultSelectVal:[i(v).formData.wechat],keywords:{label:"name",value:"id"},onRadioChange:h},null,8,["columns","defaultSelectVal"])])),_:1},8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{s as default};
