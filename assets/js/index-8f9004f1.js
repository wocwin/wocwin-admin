import"./vue@3.2.47-8ce7078f.js";import{e,$ as l,o as t,R as i,U as s,c as o,M as a,b as r}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as u,k as p,u as m,i as n}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as d}from"./index-f90de9a9.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const v={class:"dialog-footer"},c=d(e({__name:"index",setup(e){const d=u(!1),c=u("新增数据"),_=u([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),j=u([{label:"女",value:1},{label:"男",value:0}]),b=u([{label:"启用",value:1},{label:"停用",value:0}]),f=u(),y=()=>{w.ref.validate((e=>{e&&setTimeout((()=>{d.value=!1}),1e3)}))},g=()=>{c.value="新增数据",w.fieldList.map((e=>{"password"===e.value&&(e.isHideItem=!1)})),d.value=!0},h=()=>{c.value="编辑数据",w.fieldList.map((e=>{"password"===e.value&&(e.isHideItem=!0)})),d.value=!0},w=p({ref:null,formData:{account:null,
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
desc:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account",rules:{required:!0,message:"请输入账号",trigger:"blur"}},{label:"密码",value:"password",type:"password",comp:"el-input",bind:{"show-password":!0},FisHideItem:!1},{label:"昵称",value:"name",type:"input",comp:"el-input",rules:{required:!0,message:"请输入昵称",trigger:"blur"}},{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:j.value,valueKey:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:b,valueKey:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",type:"select-arr",comp:"t-select",list:"hobbyList",bind:{multiple:!0,optionSource:_,valueKey:"value"}},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}]});return(e,u)=>{const p=l("el-button"),_=l("t-layout-page-item"),j=l("t-form"),b=l("el-dialog"),k=l("t-layout-page");return t(),i(k,null,{default:s((()=>[o(_,null,{default:s((()=>[o(p,{type:"danger",onClick:g},{default:s((()=>[a("显示密码项")])),_:1}),o(p,{type:"danger",onClick:h},{default:s((()=>[a("隐藏密码项")])),_:1})])),_:1}),o(b,{title:m(c),width:"40%",modelValue:m(d),"onUpdate:modelValue":u[2]||(u[2]=e=>n(d)?d.value=e:null),draggable:""},{footer:s((()=>[r("div",v,[o(p,{onClick:u[1]||(u[1]=e=>d.value=!1)},{default:s((()=>[a("取 消")])),_:1}),o(p,{type:"primary",onClick:y},{default:s((()=>[a("确 定")])),_:1})])])),default:s((()=>[o(j,{ref_key:"TFormDemo",ref:f,modelValue:m(w).ref,"onUpdate:modelValue":u[0]||(u[0]=e=>m(w).ref=e),formOpts:m(w),widthSize:1},null,8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TForm/isHideItem/index.vue"]]);export{c as default};