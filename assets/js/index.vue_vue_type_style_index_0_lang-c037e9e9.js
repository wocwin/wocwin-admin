import{e,t as l,V as a,O as t,q as s,f as o,_ as d,o as u,P as c,Q as r,b as w,c as i,Y as n,X as v,K as y,N as p,n as b}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as R,j as m,u as f,i as h}from"./@vue_reactivity@3.2.47-57d9983b.js";import{s as k}from"./@vue_shared@3.2.47-177e1703.js";const K=e({name:"TAntdSelectTable",props:{modelValue:{type:[String,Number,Array]},
// table所需数据
table:{type:Object,default:()=>({})},
// 表头数据
columns:{type:Array,default:()=>[]},
// 单选框--是否开启点击整行选中
rowClickRadio:{type:Boolean,default:!0},
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
selectWidth:{type:[String,Number],default:200},
// table宽度
tableWidth:{type:Number,default:550},
// 设置默认选中项--keywords.value值（单选是String, Number类型；多选时是数组）
defaultSelectVal:{type:Array}},emits:["checkedChange","update:modelValue"],setup(e,{expose:K,emit:S}){const g=e,D=l((()=>({allowClear:!0,showSearch:!0,dropdownMatchSelectWidth:!1,...a()}))),T=t(),V=Object.keys(T),_=R(!0),C=R(!1),O=R(-1),j=m({defaultSelectValue:g.defaultSelectVal,
// 默认选中
tableData:g.table.data,
// table数据
activeTableRow:{},
// 键盘上下键选中项
// 选中KEY
selectedRowKeys:[],
// 选中行
selectedRows:[]}),N=R(null),x=R(null);s((()=>g.table.data),(e=>{j.tableData=e}),{deep:!0}),s((()=>g.defaultSelectVal),(e=>{j.defaultSelectValue=e,e&&_.value&&P(e)}),{deep:!0});let W=l({get:()=>g.modelValue,set(e){S("update:modelValue",e)}});o((()=>{j.defaultSelectValue&&_.value&&P(j.defaultSelectValue)}));const $=(e,l)=>{setTimeout((()=>{j.selectedRowKeys=e,j.selectedRows=l,_.value=!1,j.selectedRowKeys.length>0&&j.selectedRows.length>0?"multiple"===g.mode?W.value=j.selectedRows.length>0&&j.selectedRows.map((e=>e[g.keywords.label])):(j.activeTableRow=j.selectedRows[0],W.value=j.selectedRows[0][g.keywords.label],U()):W.value=void 0,S("checkedChange",j.selectedRowKeys,j.selectedRows)}),10)},A=e=>({
// 鼠标单击行
onClick:()=>{if("multiple"!==g.mode){if(!g.rowClickRadio)return;const l=[],a=[];l.push(e[g.keywords.value]),a.push(e),$(l,a)}else{const l=j.selectedRowKeys.indexOf(e[g.keywords.value]);-1===l?j.selectedRowKeys.push(e[g.keywords.value]):j.selectedRowKeys.splice(l,1),-1===l?j.selectedRows.push(e):j.selectedRows.splice(l,1),$(j.selectedRowKeys,j.selectedRows)}}}),B=e=>{if("multiple"!==g.mode){if(!g.isKeyup)return;if(0===j.tableData.length)return;switch(e.keyCode){case 40:void 0!==j.tableData[O.value+1]?(j.activeTableRow=j.tableData[O.value+1],O.value=O.value+1):(O.value=0,j.activeTableRow=j.tableData[0]);break;case 38:void 0!==j.tableData[O.value-1]&&O.value>0?(j.activeTableRow=j.tableData[O.value-1],O.value=O.value-1):(O.value=0,j.activeTableRow=j.tableData[0]);break;case 13:if(j.tableData[O.value]){const e=[],l=[];e.push(j.tableData[O.value][g.keywords.value]),l.push(j.tableData[O.value]),$(e,l)}}}},E=e=>j.activeTableRow[g.keywords.value]===e[g.keywords.value]&&g.isKeyup?"active-selected-row":"",P=e=>{"multiple"===g.mode?setTimeout((()=>{if(e.length>0){let l=[],a=[],t=[];e.map((e=>{j.tableData.forEach((a=>{e===a[g.keywords.value]&&l.push(a)}))})),l.forEach((e=>{j.tableData.forEach((l=>{l[g.keywords.value]===e[g.keywords.value]&&(a.push(l[g.keywords.value]),t.push(l))}))})),j.selectedRowKeys=a,j.selectedRows=t,W.value=j.selectedRows.length>0&&j.selectedRows.map((e=>e[g.keywords.label]))}else W.value=void 0}),0):setTimeout((()=>{e.length>0?(j.tableData.map((l=>{l[g.keywords.value]===e[0]&&(j.selectedRowKeys=e,j.selectedRows=[l])})),W.value=j.selectedRows[0]&&j.selectedRows[0][g.keywords.label]):W.value=void 0}),20)},J=e=>e[g.keywords.value],q=e=>{setTimeout((()=>{var l;const a=JSON.parse(JSON.stringify(null==(l=g.table)?void 0:l.data));a&&a.length>0&&("multiple"!==g.mode&&(e?j.selectedRowKeys=[]:a.map((e=>{e[g.keywords.value]===(j.selectedRows[0]&&j.selectedRows[0][g.keywords.value])&&(j.selectedRowKeys=[e[g.keywords.value]])}))),j.tableData=a.filter((l=>{if(l[g.keywords.label].includes(e))return l})))}),0)},F=e=>{C.value=e,e?g.defaultSelectVal&&_.value&&P(g.defaultSelectVal):q("")},I=e=>{const l=j.tableData.find((l=>l[g.keywords.label]===e));if(l){const e=j.selectedRowKeys.indexOf(l[g.keywords.value]);-1===e?j.selectedRowKeys.push(l[g.keywords.value]):j.selectedRowKeys.splice(e,1),-1===e?j.selectedRows.push(l):j.selectedRows.splice(e,1),$(j.selectedRowKeys,j.selectedRows)}},M=()=>{b((()=>{j.selectedRowKeys=[],j.selectedRows=[],W.value=[]}))},Q=()=>{"multiple"===g.mode?M():b((()=>{j.selectedRowKeys=[],j.selectedRows=[],j.activeTableRow={}}))},U=()=>{N.value.blur()};return K({focus:()=>{N.value.focus()},blur:U,openSelectDropdown:()=>{C.value=!0},state:j}),(l,a)=>{const t=d("a-table"),s=d("a-select");return u(),c(s,p({ref_key:"selectRef",ref:N,value:f(W),"onUpdate:value":a[0]||(a[0]=e=>h(W)?W.value=e:W=e),class:"t-antd-select-table",dropdownClassName:"t_antd_select_dropdown",style:"width:"+("number"==typeof e.selectWidth?`${e.selectWidth}px`:`${e.selectWidth}`),mode:e.mode,open:C.value},f(D),{"value-key":e.keywords.value,filterOption:!1,onSearch:q,onDropdownVisibleChange:F,onDeselect:I,onClear:Q,onInputKeyDown:B}),{notFoundContent:r((()=>[w("div",{class:"t-table-select__table",style:k({width:`${e.tableWidth}px`})},[i(t,p({ref_key:"selectTable",ref:x,"data-source":j.tableData,columns:e.columns,bordered:"","row-key":J,"row-class-name":E,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:j.selectedRowKeys,onChange:$,onSelectNone:M,type:"multiple"===e.mode?"checkbox":"radio"},customRow:A},l.$attrs),n({default:r((()=>[y(l.$slots,"default")])),_:2},[v(f(V),(e=>({name:e,fn:r((a=>[y(l.$slots,e,p({scope:a},a||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"])],4)])),_:3},16,["value","style","mode","open","value-key"])}}});export{K as _};
