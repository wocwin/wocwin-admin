import{u as e}from"./useApi-a3664480.js";import{e as l,f as a,Z as t,o,P as r,Q as u,c as i}from"./@vue_runtime-core@3.2.47-ac740756.js";import{r as s,j as p,u as d}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const m=l({__name:"index",setup(l){const{proxy:m}=e(),c=s([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),n=s([{label:"女",value:1},{label:"男",value:0}]),b=s([{label:"启用",value:1},{label:"停用",value:0}]),v=s([]);a((()=>{C(),f()}));const h=s([]),f=async()=>{const e=await m.$api.getCascaderList();e.success&&(h.value=null==e?void 0:e.data)},C=async()=>{const e=await m.$api.getSelectTableList();e.success&&(v.value=null==e?void 0:e.data.rows)},y=s(null),S=p({ref:null,labelWidth:"140px",formData:{sex:null,hobby:null,hobby1:null,status:null,wechat:null,deptCode:null,createDeptCode:null},fieldList:[{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",isSelfCom:!0,bind:{optionSource:n,valueCustom:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",isSelfCom:!0,bind:{optionSource:b,valueCustom:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",comp:"t-select",isSelfCom:!0,bind:{multiple:!0,optionSource:c,valueCustom:"value"}},{label:"爱好1",value:"hobby1",placeholder:"TSelect多选",comp:"t-select",isSelfCom:!0,bind:{multiple:!0,optionSource:c,valueCustom:"value"}},{label:"部门",value:"deptCode1",placeholder:"el-cascader使用",comp:"el-cascader",isSelfCom:!0,bind:{props:{children:"children",label:"deptName",value:"deptNum"},options:h}},{label:"下拉选择表格-单选",value:"deptCode",placeholder:"t-select-table单选使用",comp:"t-select-table",isSelfCom:!0,bind:{isKeyup:!0,maxHeight:400,keywords:{label:"userName",value:"userId"},table:{data:v},columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"插槽使用",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}]},eventHandle:{radioChange:e=>{return l=e,void(S.formData.deptCode=l.id);var l}}},{label:"下拉选择表格-多选",value:"createDeptCode",placeholder:"t-select-table多选使用",comp:"t-select-table",isSelfCom:!0,bind:{multiple:!0,maxHeight:400,keywords:{label:"userName",value:"userId"},table:{data:v},columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"插槽使用",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}]},eventHandle:{selectionChange:(e,l)=>((e,l)=>{S.formData.createDeptCode=l})(0,l)}}],operatorList:[{label:"提交",type:"danger",fun:()=>{S.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{S.formData={},y.value.clearValidate()}}]});return(e,l)=>{const a=t("t-form"),s=t("t-layout-page-item"),p=t("t-layout-page");return o(),r(p,null,{default:u((()=>[i(s,null,{default:u((()=>[i(a,{ref_key:"TFormDemo",ref:y,modelValue:d(S).ref,"onUpdate:modelValue":l[0]||(l[0]=e=>d(S).ref=e),formOpts:d(S),widthSize:3},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}});export{m as default};
