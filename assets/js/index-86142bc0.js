import{v as e}from"./@vue_runtime-dom@3.2.47-8be4d066.js";import{_ as s}from"./logo-05fb951c.js";import{b as t,u as i}from"./vue-router@4.1.6_vue@3.2.47-54e50ee3.js";import{c as a,a as o,_ as l}from"./index-70dac743.js";import{_ as r,T as n,M as p}from"./SubMenu.vue_vue_type_style_index_0_lang-ed171de3.js";import{T as u}from"./ToolBarLeft-4043137c.js";import{q as m}from"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import{e as c,t as v,q as _,_ as j,o as d,P as f,Q as h,b as g,c as y,a as w,F as x,X as b,R as k,D as q,am as z,al as C}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as M,u as L}from"./@vue_reactivity@3.2.47-57d9983b.js";import{q as A,O as D,s as T}from"./@vue_shared@3.2.47-177e1703.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bb47592.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./axios@1.3.4-e3d92af1.js";import"./nprogress@0.2.0-6f612403.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-5fbacac8.js";import"./ant-design-vue@3.2.20_vue@3.2.47-88c73d2c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-a1e7b7f6.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-f0af953a.js";import"./vue@3.2.47-f888cb36.js";import"./vue-i18n@9.2.2_vue@3.2.47-39942d18.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./echarts@5.4.2-f2ea7978.js";import"./tslib@2.3.0-a4e99503.js";import"./zrender@5.4.3-b1e59f6a.js";import"./@wocwin_t-ui-plus@1.3.0-1872a19f.js";import"./keepAlive-2eb516ef.js";import"./sortablejs@1.15.0-c3bad686.js";import"./indexAsync-341b5e34.js";import"./mitt@3.0.0-f0e54764.js";import"./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-8f391bd4.js";const B={class:"aside-split"},I=[(e=>(z("data-v-c7b0cd66"),e=e(),C(),e))((()=>g("img",{class:"logo-img",src:s,alt:"logo"},null,-1)))],N={class:"split-list"},O=["onClick"],P={class:"title"},W={class:"logo flx-center"},E=c({name:"layoutColumns"}),F=l(c({...E,setup(s){const l=t(),c=i(),z=a(),C=o(),E=v((()=>C.isCollapse)),F=v((()=>z.showMenuListGet)),G=v((()=>l.meta.activeMenu?l.meta.activeMenu:l.path)),Q=M([]),R=M("");_((()=>[F,l]),(()=>{var e;if(!F.value.length)return;R.value=l.path;const s=F.value.filter((e=>l.path===e.path||`/${l.path.split("/")[1]}`===e.path));if(null==(e=s[0].children)?void 0:e.length)return Q.value=s[0].children;Q.value=[]}),{deep:!0,immediate:!0});const S=()=>{window.location.href=m.__POWERED_BY_QIANKUN__?"/wocwin-qiankun/":"/wocwin-admin/"};return(s,t)=>{const i=j("el-icon"),a=j("el-scrollbar"),o=j("el-menu"),l=j("el-aside"),m=j("el-header"),v=j("el-container");return d(),f(v,{class:"layout"},{default:h((()=>[g("div",B,[g("div",{class:"logo flx-center",onClick:S},I),y(a,null,{default:h((()=>[g("div",N,[(d(!0),w(x,null,b(L(F),(e=>(d(),w("div",{class:A(["split-item",{"split-active":R.value===e.path||`/${R.value.split("/")[1]}`===e.path}]),key:e.path,onClick:s=>(e=>{var s;if(R.value=e.path,null==(s=e.children)?void 0:s.length)return Q.value=e.children;Q.value=[],c.push(e.path)})(e)},[y(i,null,{default:h((()=>[(d(),f(k(e.meta.icon)))])),_:2},1024),g("span",P,D(e.meta.title),1)],10,O)))),128))])])),_:1})]),y(l,{class:A({"not-aside":!Q.value.length}),style:T({width:L(E)?"65px":"210px"})},{default:h((()=>[g("div",W,[q(g("span",{class:"logo-text"},D(L(E)?"W":"wocwin Admin"),513),[[e,Q.value.length]])]),y(a,null,{default:h((()=>[y(o,{"default-active":L(G),router:!1,collapse:L(E),"collapse-transition":!1,"unique-opened":!0},{default:h((()=>[y(r,{menuList:Q.value},null,8,["menuList"])])),_:1},8,["default-active","collapse"])])),_:1})])),_:1},8,["class","style"]),y(v,null,{default:h((()=>[y(m,null,{default:h((()=>[y(u),y(n)])),_:1}),y(p)])),_:1})])),_:1})}}}),[["__scopeId","data-v-c7b0cd66"]]);export{F as default};
