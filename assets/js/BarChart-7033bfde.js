import{i as e}from"./echarts@5.4.2-f2ea7978.js";import{e as t,f as i,_ as s,o,P as r,Q as a,J as m,b as p}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{X as n}from"./zrender@5.4.3-b1e59f6a.js";import{q as l,s as u}from"./@vue_shared@3.2.47-177e1703.js";import{_ as d}from"./index-282eed5f.js";import"./tslib@2.3.0-a4e99503.js";import"./@vue_reactivity@3.2.47-bf31ab22.js";import"./@vue_runtime-dom@3.2.47-f06158fa.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-17f62bbf.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./element-plus@2.7.8_vue@3.2.47-5f645833.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import"./@vueuse_core@9.13.0_vue@3.2.47-cb30723f.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-4bed4ca0.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-727904f0.js";import"./ant-design-vue@3.2.20_vue@3.2.47-6c933cef.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8d76bbae.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-50445171.js";import"./vue@3.2.47-eff190a5.js";import"./vue-i18n@9.2.2_vue@3.2.47-d8c861f0.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.4.11-b5a6f47a.js";const j=["id"],c=d(t({__name:"BarChart",props:{id:{type:String,default:"barChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(t){const d=t,c={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{x:"center",y:"bottom",data:["收入","毛利润","收入增长率","利润增长率"],textStyle:{color:"#999"}},xAxis:[{type:"category",data:["浙江","北京","上海","广东","深圳"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:1e4,interval:2e3,axisLabel:{formatter:"{value} "}},{type:"value",min:0,max:100,interval:20,axisLabel:{formatter:"{value}%"}}],series:[{name:"收入",type:"bar",data:[7e3,7100,7200,7300,7400],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])}},{name:"毛利润",type:"bar",data:[8e3,8200,8400,8600,8800],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#25d73c"},{offset:.5,color:"#1bc23d"},{offset:1,color:"#179e61"}])}},{name:"收入增长率",type:"line",yAxisIndex:1,data:[60,65,70,75,80],itemStyle:{color:"#67C23A"}},{name:"利润增长率",type:"line",yAxisIndex:1,data:[70,75,80,85,90],itemStyle:{color:"#409EFF"}}]};return i((()=>{const t=e(document.getElementById(d.id));t.setOption(c),window.addEventListener("resize",(()=>{t.resize()}))})),(e,i)=>{const n=s("el-card");return o(),r(n,null,{header:a((()=>[m(" 业绩柱状图 ")])),default:a((()=>[p("div",{id:t.id,class:l(t.className),style:u({height:t.height,width:t.width})},null,14,j)])),_:1})}}}),[["__file","BarChart.vue"]]);export{c as default};
