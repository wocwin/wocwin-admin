import{d as e,v as l,O as t,N as a,t as s,f as o,z as d,o as c,a as u,c as n,C as i,b as r,A as w,I as p,K as y,L as v,G as b,M as m,E as f,n as h}from"./@vue_runtime-core@3.2.47-bf569810.js";import{r as R,a as k,u as S,i as g}from"./@vue_reactivity@3.2.47-1ea676b1.js";import{p as K,P as T}from"./@vue_shared@3.2.47-8eebffec.js";import{_ as C}from"./index-9efe5034.js";const _={class:"t-antd-select-table"},x={class:"modal_search"},D={class:"search_label"},V=C(e({name:"TAntdSelectTable",props:{modelValue:{type:[String,Number,Array]},
// table所需数据
table:{type:Object,default:()=>({})},
// 表头数据
columns:{type:Array,default:()=>[]},
// 是否开启点击整行选中
isRowClick:{type:Boolean,default:!0},
// 列表项是否可选择
rowSelection:{type:Object},
// 是否显示分页
isShowPagination:{type:Boolean,default:!1},
// 下拉数据指向的label/value
keywords:{type:Object,default:()=>({label:"label",value:"value"})},
// 多选 'multiple'
mode:{type:String},
// 单选是否开启键盘事件
isKeyup:{type:Boolean,default:!1},
// select宽度
selectWidth:{type:[String,Number],default:"100%"},
// table宽度
tableWidth:{type:Number,default:550},
// 设置默认选中项--keywords.value值
defaultSelectVal:{type:Array},
// 当数据被删除时仍然保留选项的 key
preserveSelectedRowKeys:{type:Boolean,default:!1},
// 是否显示选择按钮
isShowSelectBtn:{type:Boolean,default:!1},
// 选择按钮属性设置
btnSetBind:{type:Object,default:()=>{}},
// 弹窗属性设置
modalSetBind:{type:Object,default:()=>{}},
// 弹窗搜索配置
inputSetBind:{type:Object,default:()=>{}},
// 禁用的属性
disabledPorp:{type:String},
// 禁用的值
disabledValue:{type:[String,Number]}},emits:["checkedChange","update:modelValue"],setup(e,{expose:C,emit:V}){const $=e,O=l((()=>({allowClear:!0,showSearch:!0,dropdownMatchSelectWidth:!1,...t()}))),B=l((()=>({size:"middle",...{btnTxt:"选择",modalTxt:"选择",...$.btnSetBind}}))),j=l((()=>({allowClear:!0,...{searchTxt:"关键词",inputWidth:"40%",...$.inputSetBind}}))),N=l((()=>({cancelText:"取消",okText:"确定",width:700,...{modalTxt:"选择",...$.modalSetBind}}))),P=a(),W=Object.keys(P),A=t(),E=R(!1),U=R(""),q=R(!0),z=R(!1),I=R(-1),J=k({defaultSelectValue:$.defaultSelectVal,
// 默认选中
tableData:$.table.data,
// table数据
activeTableRow:{},
// 键盘上下键选中项
// 选中KEY
selectedRowKeys:[],
// 选中行
selectedRows:[],rowClickSelected:$.isRowClick}),M=R(null),F=R(null);s((()=>$.table.data),(e=>{J.tableData=e}),{deep:!0}),s((()=>$.defaultSelectVal),(e=>{J.defaultSelectValue=e,e&&q.value&&Z(e)}),{deep:!0});const G=l({get:()=>$.modelValue,set(e){V("update:modelValue",e)}});o((()=>{J.defaultSelectValue&&q.value&&Z(J.defaultSelectValue),$.disabledPorp&&$.disabledValue&&(J.rowClickSelected=!1)}));const H=(e,l)=>{setTimeout((()=>{J.selectedRowKeys=e,J.selectedRows=l,q.value=!1,J.selectedRowKeys.length>0&&J.selectedRows.length>0?"multiple"===$.mode?G.value=J.selectedRows.length>0&&J.selectedRows.map((e=>e[$.keywords.label])):(J.activeTableRow=J.selectedRows[0],G.value=J.selectedRows[0][$.keywords.label],ce()):G.value=void 0,V("checkedChange",J.selectedRowKeys,J.selectedRows)}),10)},L=e=>({disabled:$.disabledPorp&&e[$.disabledPorp]===$.disabledValue}),Q=e=>({
// 鼠标单击行
onClick:()=>{if("multiple"!==$.mode){if(!J.rowClickSelected)return;const l=[],t=[];l.push(e[$.keywords.value]),t.push(e),H(l,t)}else{if(!J.rowClickSelected)return;const l=J.selectedRowKeys.indexOf(e[$.keywords.value]);-1===l?J.selectedRowKeys.push(e[$.keywords.value]):J.selectedRowKeys.splice(l,1),-1===l?J.selectedRows.push(e):J.selectedRows.splice(l,1),H(J.selectedRowKeys,J.selectedRows)}},
// 鼠标双击行
onDblclick:()=>{ne()}}),X=e=>{var l;if("multiple"!==$.mode&&$.isKeyup&&J.tableData.length>0){const{keyCode:t}=e,a=40===t?I.value+1:38===t?I.value-1:I.value,s=J.tableData[a]||J.tableData[0];switch(t){case 40:case 38:I.value=a,J.activeTableRow=s;const e=(null==(l=F.value.$el.querySelectorAll(".ant-table-header")[0])?void 0:l.clientHeight)||0,t=A.scroll.y||0,o=t?t-e:0,d=55*(a+3),c=d>o?d-o:0,u=F.value.$el.querySelector(".ant-table-body");u&&(u.scrollTop=c);break;case 13:if(s){const e=[s[$.keywords.value]];H(e,[s])}}}},Y=e=>J.activeTableRow&&J.activeTableRow[$.keywords.value]===e[$.keywords.value]&&$.isKeyup?"active-selected-row":"",Z=e=>{"multiple"===$.mode?setTimeout((()=>{if(e.length>0){let l=[],t=[],a=[];e.map((e=>{J.tableData.forEach((t=>{e===t[$.keywords.value]&&l.push(t)}))})),l.forEach((e=>{J.tableData.forEach((l=>{l[$.keywords.value]===e[$.keywords.value]&&(t.push(l[$.keywords.value]),a.push(l))}))})),J.selectedRowKeys=t,J.selectedRows=a,G.value=J.selectedRows.length>0&&J.selectedRows.map((e=>e[$.keywords.label]))}else G.value=void 0}),0):setTimeout((()=>{e.length>0?(J.tableData.map((l=>{l[$.keywords.value]===e[0]&&(J.selectedRowKeys=e,J.selectedRows=[l])})),G.value=J.selectedRows[0]&&J.selectedRows[0][$.keywords.label]):G.value=void 0}),20)},ee=e=>e[$.keywords.value],le=e=>{te(U.value)},te=e=>{setTimeout((()=>{var l;const t=JSON.parse(JSON.stringify(null==(l=$.table)?void 0:l.data));t&&t.length>0&&("multiple"!==$.mode&&(e?J.selectedRowKeys=[]:t.map((e=>{e[$.keywords.value]===(J.selectedRows[0]&&J.selectedRows[0][$.keywords.value])&&(J.selectedRowKeys=[e[$.keywords.value]])}))),J.tableData=t.filter((l=>{if(l[$.keywords.label].includes(e))return l})),G.value&&(J.activeTableRow=J.tableData.filter((e=>e[$.keywords.label]===G.value))[0],J.selectedRows=J.tableData.filter((e=>e[$.keywords.label]===G.value)),J.selectedRowKeys=J.selectedRows.length>0&&[J.selectedRows[0][$.keywords.value]],J.tableData=t.filter((l=>{if(l[$.keywords.label].includes(e))return l}))))}),0)},ae=e=>{z.value=e,e?$.defaultSelectVal&&q.value&&Z($.defaultSelectVal):te("")},se=e=>{const l=J.tableData.find((l=>l[$.keywords.label]===e));if(l){const e=J.selectedRowKeys.indexOf(l[$.keywords.value]);-1===e?J.selectedRowKeys.push(l[$.keywords.value]):J.selectedRowKeys.splice(e,1),-1===e?J.selectedRows.push(l):J.selectedRows.splice(e,1),H(J.selectedRowKeys,J.selectedRows)}},oe=()=>{h((()=>{J.selectedRowKeys=[],J.selectedRows=[],J.activeTableRow={},G.value=[]}))},de=()=>{"multiple"===$.mode||V("checkedChange",{},null),oe()},ce=()=>{M.value.blur()},ue=()=>{E.value=!0},ne=()=>{U.value="",E.value=!1,te("")};return C({focus:()=>{M.value.focus()},blur:ce,openSelectDropdown:()=>{z.value=!0},clear:de,state:J,childSelectedValue:G}),(l,t)=>{const a=d("a-table"),s=d("a-select"),o=d("a-button"),h=d("a-input"),R=d("a-modal");return c(),u("div",_,[n(s,p({ref_key:"selectRef",ref:M,value:S(G),"onUpdate:value":t[0]||(t[0]=e=>g(G)?G.value=e:null),popupClassName:"t_antd_select_dropdown",style:"width:"+("number"==typeof e.selectWidth?`${e.selectWidth}px`:`${e.selectWidth}`),mode:e.mode,open:z.value},S(O),{"value-key":e.keywords.value,filterOption:!1,onSearch:te,onDropdownVisibleChange:ae,onDeselect:se,onClear:de,onInputKeyDown:X}),{notFoundContent:i((()=>[r("div",{class:"t-table-select__table",style:K({width:`${e.tableWidth}px`})},[w(l.$slots,"search"),n(a,p({ref_key:"selectTable",ref:F,"data-source":J.tableData,columns:e.columns,bordered:"","row-key":ee,"row-class-name":Y,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:J.selectedRowKeys,onChange:H,onSelectNone:oe,getCheckboxProps:L,type:"multiple"===e.mode?"checkbox":"radio"},customRow:Q},l.$attrs),y({default:i((()=>[w(l.$slots,"footer")])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"]),w(l.$slots,"default")],4)])),_:3},16,["value","style","mode","open","value-key"]),e.isShowSelectBtn?(c(),b(o,p({key:0,onClick:ue},S(B)),{default:i((()=>[m(T(S(B).btnTxt),1)])),_:1},16)):f("",!0),n(R,p({open:E.value,"onUpdate:open":t[2]||(t[2]=e=>E.value=e),wrapClassName:"t_select_modal"},S(N),{title:S(N).modalTxt,onOk:ne}),y({default:i((()=>[r("div",x,[r("div",D,T(S(j).searchTxt)+"：",1),n(h,p({placeholder:`请输入${S(j).searchTxt}`},S(j),{style:{width:S(j).inputWidth},value:U.value,"onUpdate:value":t[1]||(t[1]=e=>U.value=e),onChange:le}),y({_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["placeholder","style","value"])]),n(a,p({ref_key:"selectTable",ref:F,"data-source":J.tableData,columns:e.columns,bordered:"","row-key":ee,"row-class-name":Y,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:J.selectedRowKeys,onChange:H,onSelectNone:oe,getCheckboxProps:L,preserveSelectedRowKeys:e.preserveSelectedRowKeys,type:"multiple"===e.mode?"checkbox":"radio"},customRow:Q},l.$attrs),y({default:i((()=>[w(l.$slots,"default")])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"])])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["open","title"])])}}}),[["__file","index.vue"]]);export{V as T};
