import{u as e}from"./vue-router@4.1.6_vue@3.2.47-784d4cb8.js";import{u as t}from"./useApi-00f84a4c.js";import{b as s,E as a}from"./element-plus@2.7.8_vue@3.2.47-5b915032.js";import{a as o,r as i,x as l,u as n}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{v as p,d as r,f as u,$ as m,o as d,Q as c,R as v,c as j,K as g}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{O as h}from"./@vue_shared@3.2.47-80f8f7ef.js";import{_}from"./index-d9457f41.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./lodash-es@4.17.21-f1d6ea71.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7e6ca649.js";import"./@vueuse_core@9.13.0_vue@3.2.47-fcfc87ab.js";import"./@ctrl_tinycolor@3.6.0-013fb883.js";import"./@vue_runtime-dom@3.2.47-5b18149f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-bb3230f7.js";import"./@sxzz_popperjs-es@2.11.7-093d8c68.js";import"./dayjs@1.11.7-5183786b.js";import"./async-validator@4.2.5-f45d1a85.js";import"./memoize-one@6.0.0-b07dd57d.js";import"./normalize-wheel-es@1.2.0-e231b032.js";import"./@floating-ui_dom@1.2.7-53fc27d0.js";import"./@floating-ui_core@1.2.6-e6495e99.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.7_lodash-es@4.17.21_lodash@4.17.21-7d8a5360.js";import"./vue@3.2.47-e344955f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-935f7cfb.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-93fe5d77.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-f7d1f64c.js";import"./ant-design-vue@4.2.5_vue@3.2.47-1d10b16b.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@babel_runtime@7.21.5-f3180b7b.js";import"./@ant-design_icons-vue@7.0.1_vue@3.2.47-43e882b4.js";import"./@ant-design_icons-svg@4.3.0-242d2267.js";import"./@ant-design_colors@6.0.0-c013a648.js";import"./throttle-debounce@5.0.2-ba017292.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@emotion_hash@0.9.2-32e4a972.js";import"./@emotion_unitless@0.8.1-6ad1c55b.js";import"./stylis@4.3.4-cd94ce99.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-2e616f69.js";import"./vue-i18n@9.2.2_vue@3.2.47-c9f1b23e.js";import"./@intlify_shared@9.2.2-e3cbb438.js";import"./@intlify_core-base@9.2.2-083ebf05.js";import"./@intlify_message-compiler@9.2.2-6ccda8bb.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.5.0_element-plus@2.7.8_vue@3.2.47-53cf5784.js";const f=_(r({...r({name:"moduleFormDemo"}),setup(r){const{handlesSizeChange:_,handlesCurrentChange:f,getData:y,getPost:b,getRoles:C,treeselect:I,conditionEnter:x,handleAdd:N,handleTableAdd:k,selectionChange:S,table:z,opts:w}=function(){const{proxy:n}=t(),r=e(),u=e=>2==e.userName.length,m=o({ids:[],
// 复选框选中的id
deptOptions:[],
// 左侧tree
postOptions:[],
// 岗位
rolesOptions:[],
// 角色
queryData:{userName:null,
// 登录名
nickName:null,
// 用户状态
postId:null,postId1:null,phonenumber:null,date1:null,date:null},listTypeInfo:{postOptions:[]}}),d=i({currentPage:1,pageSize:10,total:0,firstColumn:[{type:"selection",fixed:!0,bind:{selectable:u}},{type:"index"}],
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"用户名",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}],operator:[{text:"编辑",fun:async e=>{r.push({path:"/t-ui-plus/module-form/edit",query:{type:"edit"}})}},{text:"详情",fun:e=>{r.push({path:"/t-ui-plus/module-form/detail",query:{type:"detail"}})}},{text:"删除",fun:e=>{s.confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.success({message:"删除成功!"})})).catch((()=>{a.info({message:"已取消删除"})}))}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:180,label:"操作"}}),c=i({userName:{label:"登录名称",comp:"el-input"},nickName:{label:"姓名",comp:"el-input"},phonenumber:{label:"手机号码",comp:"el-input"},date1:{label:"日期组件使用",comp:"t-date-picker",bind:{isPickerOptions:!0}},postId:{label:"岗位",defaultVal:null,comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:[]}},postId1:{label:"岗位22",defaultVal:null,comp:"el-select",type:"select-arr",list:"postOptions",listTypeInfo:m.listTypeInfo,arrLabel:"postName",arrKey:"postId"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"daterange"}}}),v=p((()=>{const{userName:e,nickName:t,date:s,date1:a,postId:o,postId1:i,phonenumber:n}=l(m.queryData);return{userName:e.value,nickName:t.value,postId:o.value,postId1:i.value,phonenumber:n.value,date1:a.value,beginDate:s.value&&s.value[0]?s.value[0]:null,endDate:s.value&&s.value[1]?s.value[1]:null,pageNum:d.value.currentPage,pageSize:d.value.pageSize}})),j=async()=>{const e=await n.$api.userList(v.value);e.success&&(d.value.data=e.data.rows,d.value.total=e.data.total)};return{handlesSizeChange:e=>{d.value.pageSize=e,j()},handlesCurrentChange:e=>{d.value.currentPage=e,j()},getData:j,getPost:async()=>{const e=await n.$api.getPost();e.success&&(m.postOptions=e.data,c.value.postId.bind.optionSource=e.data,m.listTypeInfo.postOptions=e.data,c.value.postId.defaultVal=e.data[0].postId,c.value.postId1.defaultVal=e.data[0].postId)},getRoles:async()=>{const e=await n.$api.getRoles();e.success&&(m.rolesOptions=e.data)},treeselect:async()=>{const e=await n.$api.treeselect();e.success&&(m.deptOptions=e.data)},conditionEnter:e=>{m.queryData=e,j()},handleAdd:()=>{r.push({path:"/t-ui-plus/module-form/edit",query:{type:"add"}})},handleTableAdd:()=>{var e;(null==(e=d.value)?void 0:e.firstColumn)?delete d.value.firstColumn:d.value.firstColumn=[{type:"selection",fixed:!0,bind:{selectable:u}},{type:"index"}]},selectionChange:e=>{m.ids=e.map((e=>e.userId))},state:m,table:d,opts:c}}(),O=i(!1);return u((()=>{y(),I(),b(),C()})),(e,t)=>{const s=m("el-button"),a=m("t-adaptive-page");return d(),c(a,{opts:n(w),onSubmit:n(x),"table-title":"模块表单组件列表(禁用登录名不为2个字符的复选框)",isCopy:"",isExpansion:"",table:n(z),columns:n(z).columns,isPaginationCumulative:n(O),onSelectionChange:n(S),onSizeChange:n(_),onPageChange:n(f)},{toolbar:v((()=>[j(s,{type:"primary",onClick:n(k)},{default:v((()=>[g(h(n(z).firstColumn?"清除复选序列号":"新增复选序列号"),1)])),_:1},8,["onClick"]),j(s,{type:"primary",onClick:t[0]||(t[0]=e=>O.value=!n(O))},{default:v((()=>[g("序列号翻页"+h(n(O)?"不累加":"累加"),1)])),_:1}),j(s,{type:"primary",onClick:n(N)},{default:v((()=>[g("新增")])),_:1},8,["onClick"])])),_:1},8,["opts","onSubmit","table","columns","isPaginationCumulative","onSelectionChange","onSizeChange","onPageChange"])}}}),[["__file","index.vue"]]);export{f as default};
