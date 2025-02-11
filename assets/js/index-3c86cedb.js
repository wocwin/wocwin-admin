import{d as e,v as l,W as t,P as a,x as s,f as o,$ as d,o as c,a as u,c as n,R as i,b as r,N as w,O as p,Z as y,Y as v,Q as b,K as m,V as f,n as h}from"./@vue_runtime-core@3.2.47-806cf92c.js";import{r as R,a as k,u as S,i as g}from"./@vue_reactivity@3.2.47-c2cfee3f.js";import{s as K,O as T}from"./@vue_shared@3.2.47-80f8f7ef.js";import{_ as C}from"./index-d9457f41.js";const _={class:"t-antd-select-table"},x={class:"modal_search"},D={class:"search_label"},V=C(e({name:"TAntdSelectTable",props:{modelValue:{type:[String,Number,Array]},
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
disabledValue:{type:[String,Number]}},emits:["checkedChange","update:modelValue"],setup(e,{expose:C,emit:V}){const $=e,O=l((()=>({allowClear:!0,showSearch:!0,dropdownMatchSelectWidth:!1,...t()}))),B=l((()=>({size:"middle",...{btnTxt:"选择",modalTxt:"选择",...$.btnSetBind}}))),j=l((()=>({allowClear:!0,...{searchTxt:"关键词",inputWidth:"40%",...$.inputSetBind}}))),N=l((()=>({cancelText:"取消",okText:"确定",width:700,...{modalTxt:"选择",...$.modalSetBind}}))),P=a(),W=Object.keys(P),A=t(),E=R(!1),U=R(""),q=R(!0),J=R(!1),z=R(-1),F=k({defaultSelectValue:$.defaultSelectVal,
// 默认选中
tableData:$.table.data,
// table数据
activeTableRow:{},
// 键盘上下键选中项
// 选中KEY
selectedRowKeys:[],
// 选中行
selectedRows:[],rowClickSelected:$.isRowClick}),H=R(null),I=R(null);s((()=>$.table.data),(e=>{F.tableData=e}),{deep:!0}),s((()=>$.defaultSelectVal),(e=>{F.defaultSelectValue=e,e&&q.value&&X(e)}),{deep:!0});const M=l({get:()=>$.modelValue,set(e){V("update:modelValue",e)}});o((()=>{F.defaultSelectValue&&q.value&&X(F.defaultSelectValue),$.disabledPorp&&$.disabledValue&&(F.rowClickSelected=!1)}));const Q=(e,l)=>{setTimeout((()=>{F.selectedRowKeys=e,F.selectedRows=l,q.value=!1,F.selectedRowKeys.length>0&&F.selectedRows.length>0?"multiple"===$.mode?M.value=F.selectedRows.length>0&&F.selectedRows.map((e=>e[$.keywords.label])):(F.activeTableRow=F.selectedRows[0],M.value=F.selectedRows[0][$.keywords.label],ce()):M.value=void 0,V("checkedChange",F.selectedRowKeys,F.selectedRows)}),10)},Y=e=>({disabled:$.disabledPorp&&e[$.disabledPorp]===$.disabledValue}),Z=e=>({
// 鼠标单击行
onClick:()=>{if("multiple"!==$.mode){if(!F.rowClickSelected)return;const l=[],t=[];l.push(e[$.keywords.value]),t.push(e),Q(l,t)}else{if(!F.rowClickSelected)return;const l=F.selectedRowKeys.indexOf(e[$.keywords.value]);-1===l?F.selectedRowKeys.push(e[$.keywords.value]):F.selectedRowKeys.splice(l,1),-1===l?F.selectedRows.push(e):F.selectedRows.splice(l,1),Q(F.selectedRowKeys,F.selectedRows)}},
// 鼠标双击行
onDblclick:()=>{ne()}}),G=e=>{var l;if("multiple"!==$.mode&&$.isKeyup&&F.tableData.length>0){const{keyCode:t}=e,a=40===t?z.value+1:38===t?z.value-1:z.value,s=F.tableData[a]||F.tableData[0];switch(t){case 40:case 38:z.value=a,F.activeTableRow=s;const e=(null==(l=I.value.$el.querySelectorAll(".ant-table-header")[0])?void 0:l.clientHeight)||0,t=A.scroll.y||0,o=t?t-e:0,d=55*(a+3),c=d>o?d-o:0,u=I.value.$el.querySelector(".ant-table-body");u&&(u.scrollTop=c);break;case 13:if(s){const e=[s[$.keywords.value]];Q(e,[s])}}}},L=e=>F.activeTableRow&&F.activeTableRow[$.keywords.value]===e[$.keywords.value]&&$.isKeyup?"active-selected-row":"",X=e=>{"multiple"===$.mode?setTimeout((()=>{if(e.length>0){let l=[],t=[],a=[];e.map((e=>{F.tableData.forEach((t=>{e===t[$.keywords.value]&&l.push(t)}))})),l.forEach((e=>{F.tableData.forEach((l=>{l[$.keywords.value]===e[$.keywords.value]&&(t.push(l[$.keywords.value]),a.push(l))}))})),F.selectedRowKeys=t,F.selectedRows=a,M.value=F.selectedRows.length>0&&F.selectedRows.map((e=>e[$.keywords.label]))}else M.value=void 0}),0):setTimeout((()=>{e.length>0?(F.tableData.map((l=>{l[$.keywords.value]===e[0]&&(F.selectedRowKeys=e,F.selectedRows=[l])})),M.value=F.selectedRows[0]&&F.selectedRows[0][$.keywords.label]):M.value=void 0}),20)},ee=e=>e[$.keywords.value],le=e=>{te(U.value)},te=e=>{setTimeout((()=>{var l;const t=JSON.parse(JSON.stringify(null==(l=$.table)?void 0:l.data));t&&t.length>0&&("multiple"!==$.mode&&(e?F.selectedRowKeys=[]:t.map((e=>{e[$.keywords.value]===(F.selectedRows[0]&&F.selectedRows[0][$.keywords.value])&&(F.selectedRowKeys=[e[$.keywords.value]])}))),F.tableData=t.filter((l=>{if(l[$.keywords.label].includes(e))return l})),M.value&&(F.activeTableRow=F.tableData.filter((e=>e[$.keywords.label]===M.value))[0],F.selectedRows=F.tableData.filter((e=>e[$.keywords.label]===M.value)),F.selectedRowKeys=F.selectedRows.length>0&&[F.selectedRows[0][$.keywords.value]],F.tableData=t.filter((l=>{if(l[$.keywords.label].includes(e))return l}))))}),0)},ae=e=>{J.value=e,e?$.defaultSelectVal&&q.value&&X($.defaultSelectVal):te("")},se=e=>{const l=F.tableData.find((l=>l[$.keywords.label]===e));if(l){const e=F.selectedRowKeys.indexOf(l[$.keywords.value]);-1===e?F.selectedRowKeys.push(l[$.keywords.value]):F.selectedRowKeys.splice(e,1),-1===e?F.selectedRows.push(l):F.selectedRows.splice(e,1),Q(F.selectedRowKeys,F.selectedRows)}},oe=()=>{h((()=>{F.selectedRowKeys=[],F.selectedRows=[],F.activeTableRow={},M.value=[]}))},de=()=>{"multiple"===$.mode||V("checkedChange",{},null),oe()},ce=()=>{H.value.blur()},ue=()=>{E.value=!0},ne=()=>{U.value="",E.value=!1,te("")};return C({focus:()=>{H.value.focus()},blur:ce,openSelectDropdown:()=>{J.value=!0},clear:de,state:F,childSelectedValue:M}),(l,t)=>{const a=d("a-table"),s=d("a-select"),o=d("a-button"),h=d("a-input"),R=d("a-modal");return c(),u("div",_,[n(s,p({ref_key:"selectRef",ref:H,value:S(M),"onUpdate:value":t[0]||(t[0]=e=>g(M)?M.value=e:null),popupClassName:"t_antd_select_dropdown",style:"width:"+("number"==typeof e.selectWidth?`${e.selectWidth}px`:`${e.selectWidth}`),mode:e.mode,open:J.value},S(O),{"value-key":e.keywords.value,filterOption:!1,onSearch:te,onDropdownVisibleChange:ae,onDeselect:se,onClear:de,onInputKeyDown:G}),{notFoundContent:i((()=>[r("div",{class:"t-table-select__table",style:K({width:`${e.tableWidth}px`})},[w(l.$slots,"search"),n(a,p({ref_key:"selectTable",ref:I,"data-source":F.tableData,columns:e.columns,bordered:"","row-key":ee,"row-class-name":L,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:F.selectedRowKeys,onChange:Q,onSelectNone:oe,getCheckboxProps:Y,type:"multiple"===e.mode?"checkbox":"radio"},customRow:Z},l.$attrs),y({default:i((()=>[w(l.$slots,"footer")])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"]),w(l.$slots,"default")],4)])),_:3},16,["value","style","mode","open","value-key"]),e.isShowSelectBtn?(c(),b(o,p({key:0,onClick:ue},S(B)),{default:i((()=>[m(T(S(B).btnTxt),1)])),_:1},16)):f("",!0),n(R,p({open:E.value,"onUpdate:open":t[2]||(t[2]=e=>E.value=e),wrapClassName:"t_select_modal"},S(N),{title:S(N).modalTxt,onOk:ne}),y({default:i((()=>[r("div",x,[r("div",D,T(S(j).searchTxt)+"：",1),n(h,p({placeholder:`请输入${S(j).searchTxt}`},S(j),{style:{width:S(j).inputWidth},value:U.value,"onUpdate:value":t[1]||(t[1]=e=>U.value=e),onChange:le}),y({_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["placeholder","style","value"])]),n(a,p({ref_key:"selectTable",ref:I,"data-source":F.tableData,columns:e.columns,bordered:"","row-key":ee,"row-class-name":L,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:F.selectedRowKeys,onChange:Q,onSelectNone:oe,getCheckboxProps:Y,preserveSelectedRowKeys:e.preserveSelectedRowKeys,type:"multiple"===e.mode?"checkbox":"radio"},customRow:Z},l.$attrs),y({default:i((()=>[w(l.$slots,"default")])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"])])),_:2},[v(S(W),(e=>({name:e,fn:i((t=>[w(l.$slots,e,p({scope:t},t||{}))]))})))]),1040,["open","title"])])}}}),[["__file","index.vue"]]);export{V as T};
