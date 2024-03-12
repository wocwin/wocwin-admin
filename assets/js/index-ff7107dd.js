import{M as e}from"./map-d6b1e3c9.js";import{E as i}from"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import{e as t,f as s,_ as r,o,P as a,Q as l,b as n,c as m,J as p,am as u,al as c}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as d,u as j}from"./@vue_reactivity@3.2.47-57d9983b.js";import{_ as v}from"./index-476f4c1d.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vue_shared@3.2.47-177e1703.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bb47592.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./vue-router@4.1.6_vue@3.2.47-54e50ee3.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import"./ant-design-vue@3.2.20_vue@3.2.47-88c73d2c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-a1e7b7f6.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f0af953a.js";import"./vue@3.2.47-f888cb36.js";import"./vue-i18n@9.2.2_vue@3.2.47-39942d18.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.2.12-f87f9619.js";const _=e=>(u("data-v-b0a7e8e0"),e=e(),c(),e),g=_((()=>n("div",{id:"container"},null,-1))),f={class:"input-item"},w=_((()=>n("div",{class:"title"},"左击获取经纬度",-1))),z={class:"cursor-item"},k=_((()=>n("div",{class:"title"},"测距",-1))),y={class:"circle-item"},b=_((()=>n("div",{class:"title"},"添加Circle",-1))),h={class:"item"},C=t({name:"MapLocalization"}),O=v(t({...C,setup(t){const u=d({mouseStyle:"pointer",map:null,circle:null,ruler1:null,ruler2:null,lnglat:"113.276517,23.151382",address:""});s((()=>{c(),S()}));const c=()=>{e().then((e=>{u.map=new e.Map("container",{resizeEnable:!0,zoom:15,center:[113.276517,23.151382]}),u.ruler1=new e.RangingTool(u.map);let i={icon:new e.Icon({size:new e.Size(19,31),
//图标大小
imageSize:new e.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/start.png"}),offset:new e.Pixel(-9,-31)},t={icon:new e.Icon({size:new e.Size(19,31),
//图标大小
imageSize:new e.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/end.png"}),offset:new e.Pixel(-9,-31)},s={startMarkerOptions:i,midMarkerOptions:{icon:new e.Icon({size:new e.Size(19,31),
//图标大小
imageSize:new e.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/mid.png"}),offset:new e.Pixel(-9,-31)},endMarkerOptions:t,lineOptions:{strokeStyle:"solid",strokeColor:"#FF33FF",strokeOpacity:1,strokeWeight:2}};u.ruler2=new e.RangingTool(u.map,s),u.map.setDefaultCursor("pointer"),u.map.on("click",(e=>{u.lnglat=e.lnglat.getLng()+","+e.lnglat.getLat(),S()}))}))},v=()=>{e().then((e=>{u.circle=new e.Circle({center:[113.276517,23.151382],
// 圆心位置
radius:4500,
//半径
strokeColor:"#F33",
//线颜色
strokeOpacity:1,
//线透明度
strokeWeight:3,
//线粗细度
fillColor:"#ee2200",
//填充颜色
fillOpacity:.35}),u.map.add(u.circle),u.map.setFitView()}))},_=()=>{u.map.remove(u.circle),u.map.setFitView()},C=()=>{u.ruler2.turnOff(),u.ruler1.turnOn()},O=()=>{u.ruler1.turnOff(),u.ruler2.turnOn()},S=()=>{e().then((e=>{u.map.clearMap();let t=u.lnglat.split(","),s=new e.Marker,r=new e.Geocoder({city:"020",
//城市设为广州，默认：“全国”
radius:1e3});u.map.add(s),s.setPosition(t),r.getAddress(t,((e,t)=>{"complete"===e&&t.regeocode?u.address=t.regeocode.formattedAddress:i.error("根据地址查询位置失败，请重新选择！")}))}))};return(e,i)=>{const t=r("el-input"),s=r("el-button"),c=r("t-layout-page");return o(),a(c,{class:"map_localization"},{default:l((()=>[g,n("div",f,[w,m(t,{modelValue:j(u).lnglat,"onUpdate:modelValue":i[0]||(i[0]=e=>j(u).lnglat=e)},{prepend:l((()=>[p("经纬度")])),_:1},8,["modelValue"]),m(t,{style:{"margin-top":"5px"},modelValue:j(u).address,"onUpdate:modelValue":i[1]||(i[1]=e=>j(u).address=e)},{prepend:l((()=>[p("地址")])),_:1},8,["modelValue"])]),n("div",z,[k,m(s,{round:"",size:"small",onClick:C},{default:l((()=>[p("默认样式测距")])),_:1}),m(s,{round:"",size:"small",onClick:O},{default:l((()=>[p("自定义样式测距")])),_:1})]),n("div",y,[b,n("div",h,[m(s,{size:"small",round:"",onClick:v},{default:l((()=>[p("添加Circle")])),_:1}),m(s,{size:"small",round:"",onClick:_},{default:l((()=>[p("删除Circle")])),_:1})])])])),_:1})}}}),[["__scopeId","data-v-b0a7e8e0"]]);export{O as default};
