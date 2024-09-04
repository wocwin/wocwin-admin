import{i as e}from"./echarts@5.4.2-f2ea7978.js";import{e as t,f as i,_ as s,o as r,P as o,Q as p,J as m,b as a}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{q as n,s as u}from"./@vue_shared@3.2.47-177e1703.js";import{_ as l}from"./index-282eed5f.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@vue_reactivity@3.2.47-bf31ab22.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const d=["id"],j=l(t({__name:"PieChart",props:{id:{type:String,default:"pieChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(t){const l=t,j={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},legend:{top:"bottom",textStyle:{color:"#999"}},series:[{name:"Nightingale Chart",type:"pie",radius:[50,130],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:1,color:function(e){return["#409EFF","#67C23A","#E6A23C","#F56C6C"][e.dataIndex]}},data:[{value:26,name:"家用电器"},{value:27,name:"户外运动"},{value:24,name:"汽车用品"},{value:23,name:"手机数码"}]}]};return i((()=>{const t=e(document.getElementById(l.id));t.setOption(j),window.addEventListener("resize",(()=>{t.resize()}))})),(e,i)=>{const l=s("el-card");return r(),o(l,null,{header:p((()=>[m(" 产品分类饼图 ")])),default:p((()=>[a("div",{id:t.id,class:n(t.className),style:u({height:t.height,width:t.width})},null,14,d)])),_:1})}}}),[["__file","PieChart.vue"]]);export{j as default};
