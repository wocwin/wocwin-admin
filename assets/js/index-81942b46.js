import{u as e}from"./useApi-2a80d655.js";import{E as l,b as a}from"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import{r as t,j as i,w as s,u as o,i as r}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{n as u,e as p,c as n,J as d,q as m,t as c,f as v,_ as b,o as f,P as g,Q as y,U as h,b as _}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{O as j}from"./@vue_shared@3.2.47-177e1703.js";import{_ as w}from"./index-154eab54.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-7195bfe1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.4.13-927c3723.js";const C={class:"dialog-footer"},I=w(p({...p({name:"superDemo"}),setup(p){const{proxy:w}=e(),{formOpts:I,getSelectTableList:k,handleAdd:S,edit:N,handleEvent:x,addConfirm:q,addDialog:D,title:L}=function(){const{proxy:a}=e(),s=t([]),o=i({ref:null,labelPosition:"top",formData:{userName:null,
// 登录账号
password:null,
// 登录密码
nickName:null,
// 姓名
sex:null,
// 性别
deptId:null,
// 部门
postId:null,
// 岗位
email:null,
// 邮箱
phonenumber:null,
// 手机
deptCode:null,
// 下拉选择表格
roleIds:null,
// 角色
remark:null,
// 备注
date:null,
// 日期
status:!0},fieldList:[{label:"登录账号",value:"userName",type:"input",comp:"el-input"},{label:"登录密码",value:"password",type:"input",comp:"el-input",bind:{"show-password":!0}},{label:"姓名",value:"nickName",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",list:"sexList",comp:"el-select",arrLabel:"label",arrKey:"key"},{label:"日期",value:"date",placeholder:"TDatePicker选择日期",comp:"t-date-picker"},{label:"部门",value:"deptId",placeholder:"请选择部分",comp:"el-cascader",isSelfCom:!0,bind:{filterable:!0,"show-all-levels":!1,props:{children:"children",label:"label",value:"id"},options:[]}},{label:"岗位",value:"postId",comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:[]}},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"手机",value:"phonenumber",type:"input",comp:"el-input",bind:{maxLength:11}},{label:"角色",value:"roleIds",placeholder:"请选择角色",comp:"el-cascader",isSelfCom:!0,bind:{filterable:!0,"show-all-levels":!1,props:{children:"roles",label:"label",value:"id"},options:[]}},{label:"用户名称",value:"deptCode",placeholder:"t-select-table单选使用",comp:"t-select-table",isSelfCom:!0,bind:{isKeyup:!0,maxHeight:400,selectWidth:500,defaultSelectVal:[],keywords:{label:"userName",value:"userId"},table:{data:s},columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"插槽使用",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}]},eventHandle:{radioChange:e=>r(e)}},{label:"备注",value:"remark",type:"input",comp:"el-input"}],rules:{userName:[{required:!0,message:"请输入登录账号",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"}],nickName:[{required:!0,message:"请输入姓名",trigger:"blur"}],deptId:[{required:!0,message:"请选择部门",trigger:"change"}],power:[{required:!0,message:"请选择功率",trigger:"change"}],deptCode:[{required:!0,message:"请选择用户名称",trigger:"blur"}],roleIds:[{required:!0,message:"请选择角色",trigger:"change"}],email:[{validator:(e,l,a)=>{l&&!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(l)&&a(new Error(e.message)),a()},message:"邮箱格式错误",trigger:"blur"}]},
// 相关列表
listTypeInfo:{sexList:[{label:"男",key:"0"},{label:"女",key:"1"},{label:"未知",key:"2"}]}}),r=e=>{o.formData.deptCode=e.userId},p=t(!1),n=t("新增页面");return{getSelectTableList:async()=>{const e=await a.$api.getSelectTableList();e.success&&(s.value=null==e?void 0:e.data.rows)},formOpts:o,tableData:s,handleAdd:()=>{p.value=!0;let e={label:"登录密码",value:"password",type:"input",comp:"el-input",bind:{"show-password":!0}},l=[{required:!0,message:"请输入登录密码",trigger:"blur"}];o.fieldList.some((e=>"password"==e.value))||o.fieldList.splice(1,0,e),o.rules.password||(o.rules.password=l),o.fieldList.map((e=>{"deptCode"===e.value&&(e.bind.defaultSelectVal=[])})),u((()=>{var e;null==(e=null==o?void 0:o.ref)||e.resetFields(),setTimeout((()=>{o.ref.clearValidate()}),100)}))},edit:async e=>{n.value="编辑页面",p.value=!0,o.fieldList.map(((e,l)=>{"password"===e.value&&o.fieldList.splice(l,1)})),delete o.rules.password;const l=await a.$api.editUser();l.success&&u((()=>{o.ref.clearValidate(),l.data.date="2024-09-06";let e=l.data;o.formData=e,o.fieldList.map((l=>{"deptCode"===l.value&&(l.bind.defaultSelectVal=[e.deptCode])}))}))},handleEvent:(e,l)=>{},addConfirm:()=>{o.ref.validate((e=>{e&&setTimeout((()=>{l.success("新增成功"),p.value=!1}),1500)}))},addDialog:p,title:n}}(),V=t(),z=t(4),O=t(!1),T=t(!1),W=i({ids:[],
// 复选框
deptOptions:[],
// 左侧tree
postOptions:[],
// 岗位
rolesOptions:[],
// 角色
queryData:{userName:null,
// 登录名
postId:null,postId1:null,postId2:null,phonenumber:null,nickName:null,
// 用户状态
remark:null,
// 用户状态
email:null,disabledDate:null,date1:null,date:null},listTypeInfo:{postOptions:[]}}),P=t({currentPage:1,pageSize:10,total:0,
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"userName",label:"登录名",minWidth:80},{prop:"nickName",label:"用户名",minWidth:"80"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}],operator:[{text:"编辑",fun:N},{text:"重置密码",fun:e=>{}},{text:"删除",fun:e=>{a.confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l.success({message:"删除成功!"})})).catch((()=>{l.info({message:"已取消删除"})}))}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:180,label:"操作"}}),E=()=>{var e;(null==(e=P.value)?void 0:e.firstColumn)?delete P.value.firstColumn:P.value.firstColumn=[{type:"selection",fixed:!0},{type:"index"}]},H=t({userName:{label:"登录名称",comp:"el-input"},nickName:{label:"姓名",comp:"el-input"},date1:{label:"日期组件使用",comp:"t-date-picker",bind:{isPickerOptions:!0}},postId2:{labelRender:()=>n("div",{style:"color:red"},[d("新增项条件")]),placeholder:"选择前端开发才新增",comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:[]},eventHandle:{change:e=>$(e)}},postId:{label:"岗位",defaultVal:null,comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:[]}},postId1:{label:"岗位22",defaultVal:null,comp:"el-select",type:"select-arr",list:"postOptions",listTypeInfo:W.listTypeInfo,arrLabel:"postName",arrKey:"postId"},disabledDate:{labelRender:()=>n("label",{style:"color:red"},[d("禁用时间")]),span:2,comp:"t-date-picker",bind:{type:"daterange","disabled-date":e=>{if(V.value){const l=864e5,a=V.value-7*l,t=V.value+6*l;return e.getTime()<=a||e.getTime()>t}return!1}},eventHandle:{calendarChange:e=>(e=>{V.value=e[0].getTime(),e[1]&&(V.value="")})(e)}},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"daterange",isPickerOptions:!0}}}),U={phonenumber:{label:"手机号码",comp:"el-input"},email:{label:"邮箱",comp:"el-input"},remark:{label:"备注",comp:"el-input"}},$=e=>{4===e?H.value={...H.value,...U}:Object.keys(U).forEach((e=>{delete H.value[e]}))};m((()=>W.queryData.postId2),(e=>{$(e)}),{deep:!0});const A=c((()=>{const{userName:e,nickName:l,date:a,date1:t,postId:i,postId1:o,postId2:r,disabledDate:u}=s(W.queryData);return{userName:e.value,postId:i.value,postId1:o.value,postId2:r.value,nickName:l.value,remark:W.queryData.remark,phonenumber:W.queryData.phonenumber,email:W.queryData.email,date1:t.value,start_time:u.value&&u.value[0]?u.value[0]:null,end_time:u.value&&u.value[1]?u.value[1]:null,beginDate:a.value&&a.value[0]?a.value[0]:null,endDate:a.value&&a.value[1]?a.value[1]:null,pageNum:P.value.currentPage,pageSize:P.value.pageSize}})),B=e=>{W.queryData=e,J()},K=e=>{W.ids=e.map((e=>e.operId))};v((()=>{J(),k(),R(),F(),G()}));const R=async()=>{const e=await w.$api.treeselect();e.success&&(W.deptOptions=e.data,I.fieldList.forEach((l=>{"deptId"===l.value&&(l.bind.options=e.data)})))},F=async()=>{const e=await w.$api.getPost();e.success&&(W.postOptions=e.data,W.listTypeInfo.postOptions=e.data,H.value.postId.bind.optionSource=e.data,H.value.postId2.bind.optionSource=e.data,H.value.postId.defaultVal=e.data[0].postId,H.value.postId1.defaultVal=e.data[0].postId,I.fieldList.forEach((l=>{"postId"===l.value&&(l.bind.optionSource=e.data)})))},G=async()=>{const e=await w.$api.getRoles();e.success&&(W.rolesOptions=e.data,I.fieldList.forEach((l=>{"roleIds"===l.value&&(l.bind.options=e.data)})))},J=async()=>{const e=await w.$api.userList(A.value);e.success&&(P.value.data=e.data.rows,P.value.total=e.data.total)},M=e=>{P.value.pageSize=e,J()},Q=e=>{P.value.currentPage=e,J()};return(e,l)=>{const a=b("el-radio-button"),t=b("el-radio-group"),i=b("el-button"),s=b("t-query-condition"),u=b("t-layout-page-item"),p=b("t-table"),m=b("t-form"),c=b("el-dialog"),v=b("t-layout-page");return f(),g(v,null,{default:y((()=>[n(u,null,{default:y((()=>[o(O)?(f(),g(t,{key:0,modelValue:o(z),"onUpdate:modelValue":l[0]||(l[0]=e=>r(z)?z.value=e:null),size:"small",style:{"margin-bottom":"15px"}},{default:y((()=>[n(a,{value:1},{default:y((()=>[d("一行展示")])),_:1}),n(a,{value:2},{default:y((()=>[d("一行展示2项")])),_:1}),n(a,{value:3},{default:y((()=>[d("一行展示3项")])),_:1}),n(a,{value:4},{default:y((()=>[d("一行展示4项")])),_:1}),n(a,{value:5},{default:y((()=>[d("一行展示5项")])),_:1}),n(a,{value:6},{default:y((()=>[d("一行展示6项")])),_:1})])),_:1},8,["modelValue"])):h("",!0),n(s,{opts:o(H),onSubmit:B,isExpansion:"",isShowWidthSize:o(O),widthSize:o(z)},{querybar:y((()=>[n(i,{type:"danger",onClick:l[1]||(l[1]=e=>O.value=!o(O))},{default:y((()=>[d(j(o(O)?"关闭":"开启")+"每行展示多少项",1)])),_:1})])),_:1},8,["opts","isShowWidthSize","widthSize"])])),_:1}),n(u,null,{default:y((()=>[n(p,{title:"弹窗新增列表",isCopy:"",border:"",table:o(P),columns:o(P).columns,isPaginationCumulative:o(T),onSelectionChange:K,onSizeChange:M,onPageChange:Q},{toolbar:y((()=>[n(i,{type:"primary",onClick:E},{default:y((()=>[d(j(o(P).firstColumn?"清除复选序号列":"新增复选序号列"),1)])),_:1}),n(i,{type:"primary",onClick:l[2]||(l[2]=e=>T.value=!o(T))},{default:y((()=>[d("序号翻页"+j(o(T)?"不累加":"累加"),1)])),_:1}),n(i,{type:"primary",onClick:o(S)},{default:y((()=>[d("新增")])),_:1},8,["onClick"])])),_:1},8,["table","columns","isPaginationCumulative"])])),_:1}),n(c,{title:o(L),width:"60%",draggable:"",modelValue:o(D),"onUpdate:modelValue":l[5]||(l[5]=e=>r(D)?D.value=e:null)},{footer:y((()=>[_("div",C,[n(i,{onClick:l[4]||(l[4]=e=>D.value=!1)},{default:y((()=>[d("取消")])),_:1}),n(i,{type:"primary",onClick:o(q)},{default:y((()=>[d("确定")])),_:1},8,["onClick"])])])),default:y((()=>[n(m,{modelValue:o(I).ref,"onUpdate:modelValue":l[3]||(l[3]=e=>o(I).ref=e),formOpts:o(I),widthSize:2,onHandleEvent:o(x)},null,8,["modelValue","formOpts","onHandleEvent"])])),_:1},8,["title","modelValue"])])),_:1})}}}),[["__file","index.vue"]]);export{I as default};