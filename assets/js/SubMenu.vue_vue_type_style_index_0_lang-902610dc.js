import{v as e,T as l,w as t}from"./@vue_runtime-dom@3.2.47-7b31c7d0.js";import{s as a}from"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-c6cc609e.js";import{a as n,_ as o,H as s,c as i,u}from"./index-b629b982.js";import{u as r,a as c}from"./keepAlive-11dcbc31.js";import{e as d,Z as m,o as p,a as f,c as _,Q as v,P as b,J as h,y as g,b as k,F as w,n as C,D as x,t as y,q as A,f as L,X as T,R as j,z as M,G as N,U as R,a1 as S,am as V,al as I}from"./@vue_runtime-core@3.2.47-ac740756.js";import{S as P}from"./sortablejs@1.15.0-c3bad686.js";import{b as z,u as D}from"./vue-router@4.1.6_vue@3.2.47-86cdb6f8.js";import{O as B,s as E,q as K}from"./@vue_shared@3.2.47-177e1703.js";import{r as $,u as F,i as G}from"./@vue_reactivity@3.2.47-31538bbf.js";import{k as U}from"./@vueuse_shared@9.13.0_vue@3.2.47-ba8084b7.js";import{u as q}from"./vue-i18n@9.2.2_vue@3.2.47-cb4378dc.js";import{M as O}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-036cf3d1.js";import{m as H}from"./indexAsync-c279fe3f.js";import{j as Q}from"./@vueuse_core@9.13.0_vue@3.2.47-a7f0bdd9.js";import{_ as W}from"./logo-05fb951c.js";import{q as X}from"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import{b as Y,E as J}from"./element-plus@2.4.2_vue@3.2.47-0fdf09cc.js";const Z=o(d({__name:"Maximize",setup(e){const l=n(),t=()=>{l.setGlobalState("maximize",!1)};return(e,l)=>{const a=m("Close"),n=m("el-icon");return p(),f("div",{class:"maximize",onClick:t},[_(n,null,{default:v((()=>[_(a)])),_:1})])}}}),[["__scopeId","data-v-e5bd432e"]]),ee=d({__name:"MoreButton",setup(e){const l=z(),t=D(),a=r(),n=c(),o=()=>{l.meta.isAffix||(a.removeTabs(l.fullPath),n.removeKeepAliveName(l.name))},i=()=>{a.closeMultipleTab(l.fullPath),n.setKeepAliveName([l.name])},u=()=>{a.closeMultipleTab(),n.setKeepAliveName(),t.push(s)};return(e,l)=>{const t=m("ArrowDown"),a=m("el-icon"),n=m("Remove"),s=m("el-dropdown-item"),r=m("CircleClose"),c=m("FolderDelete"),d=m("el-dropdown-menu"),f=m("el-dropdown");return p(),b(f,{trigger:"click",teleported:!1},{dropdown:v((()=>[_(d,null,{default:v((()=>[_(s,{onClick:o},{default:v((()=>[_(a,null,{default:v((()=>[_(n)])),_:1}),h(B(e.$t("tabs.closeCurrent")),1)])),_:1}),_(s,{onClick:i},{default:v((()=>[_(a,null,{default:v((()=>[_(r)])),_:1}),h(B(e.$t("tabs.closeOther")),1)])),_:1}),_(s,{onClick:u},{default:v((()=>[_(a,null,{default:v((()=>[_(c)])),_:1}),h(B(e.$t("tabs.closeAll")),1)])),_:1})])),_:1})])),default:v((()=>[_(a,null,{default:v((()=>[_(t)])),_:1})])),_:1})}}}),le=d({__name:"Refresh",setup(e){const l=z(),t=c(),a=g("refresh"),n=()=>{setTimeout((()=>{t.removeKeepAliveName(l.name),a(!1),C((()=>{t.addKeepAliveName(l.name),a(!0)}))}),0)};return(e,l)=>{const t=m("el-divider"),a=m("Refresh",!0),o=m("el-icon"),s=m("el-tooltip");return p(),f(w,null,[_(t,{direction:"vertical"}),k("div",{onClick:n,class:"tabs_icon"},[_(s,{effect:"dark",content:e.$t("tabs.refresh"),placement:"bottom"},{default:v((()=>[_(o,null,{default:v((()=>[_(a)])),_:1})])),_:1},8,["content"])]),_(t,{direction:"vertical"})],64)}}}),te=d({__name:"Maximize",setup(e){const l=n(),t=()=>{l.setGlobalState("maximize",!0)};return(e,l)=>{const a=m("el-divider"),n=m("FullScreen"),o=m("el-icon"),s=m("el-tooltip");return p(),f(w,null,[_(a,{direction:"vertical"}),k("div",{onClick:t,class:"tabs_icon"},[_(s,{effect:"dark",content:e.$t("tabs.maximize"),placement:"bottom"},{default:v((()=>[_(o,null,{default:v((()=>[_(n)])),_:1})])),_:1},8,["content"])])],64)}}}),ae=d({__name:"Contextmenu",props:{visible:{type:Boolean,required:!1},top:{type:Number,default:0},left:{type:Number,default:0}},setup(l){const t=z(),a=D(),n=r(),o=c(),i=()=>{t.meta.isAffix||(n.removeTabs(t.fullPath),o.removeKeepAliveName(t.name))},u=()=>{n.closeMultipleTab(t.fullPath),o.setKeepAliveName([t.name])},d=()=>{n.closeMultipleTab(),o.setKeepAliveName(),a.push(s)};return(t,a)=>{const n=m("Remove"),o=m("el-icon"),s=m("CircleClose"),r=m("FolderDelete");return x((p(),f("ul",{style:E({left:l.left+"px",top:l.top+"px"}),class:"contextmenu"},[k("li",{onClick:i},[_(o,null,{default:v((()=>[_(n)])),_:1}),h(B(t.$t("tabs.closeCurrent")),1)]),k("li",{onClick:u},[_(o,null,{default:v((()=>[_(s)])),_:1}),h(B(t.$t("tabs.closeOther")),1)]),k("li",{onClick:d},[_(o,null,{default:v((()=>[_(r)])),_:1}),h(B(t.$t("tabs.closeAll")),1)])],4)),[[e,l.visible]])}}}),ne={class:"tabs-box"},oe={class:"tabs-menu"},se={class:"right-tag"},ie=o(d({__name:"index",setup(l){const t=z(),a=D(),o=r(),s=i(),u=n(),d=c(),g=$(t.fullPath),C=y((()=>o.tabsMenuList)),M=y((()=>u.tabsIcon)),N=$(!1),R=$(0),S=$(0),V=()=>{N.value=!1};A(N,(e=>{e?document.body.addEventListener("click",V):document.body.removeEventListener("click",V)})),L((()=>{I(),E()})),A((()=>t.fullPath),(()=>{if(t.meta.isFull)return;g.value=t.fullPath;const e={icon:t.meta.icon,title:t.meta.title,path:t.fullPath,name:t.name,close:!t.meta.isAffix};o.addTabs(e),t.meta.isKeepAlive&&d.addKeepAliveName(t.name)}),{immediate:!0});const I=()=>{P.create(document.querySelector(".el-tabs__nav"),{draggable:".el-tabs__item",animation:300,onEnd({newIndex:e,oldIndex:l}){const t=[...o.tabsMenuList],a=t.splice(l,1)[0];t.splice(e,0,a),o.setTabs(t)}})},E=()=>{s.flatMenuListGet.forEach((e=>{if(e.meta.isAffix&&!e.meta.isHide&&!e.meta.isFull){const l={icon:e.meta.icon,title:e.meta.title,path:e.path,name:e.name,close:!e.meta.isAffix};o.addTabs(l)}}))},K=e=>{const l=e.props.name;a.push(l)},U=e=>{const l=o.tabsMenuList.filter((l=>l.path==e))[0].name||"";d.removeKeepAliveName(l),o.removeTabs(e,e==t.fullPath)};return(l,t)=>{const a=m("el-icon"),n=m("el-tab-pane"),o=m("el-tabs");return p(),f("div",ne,[k("div",oe,[_(o,{modelValue:F(g),"onUpdate:modelValue":t[0]||(t[0]=e=>G(g)?g.value=e:null),type:"card",onTabClick:K,onContextmenu:t[1]||(t[1]=e=>(e=>{e.preventDefault();const{clientX:l,clientY:t}=e;S.value=l,R.value=t+5,C.value.length<2?N.value=!1:N.value=!0})(e)),onTabRemove:U},{default:v((()=>[(p(!0),f(w,null,T(F(C),(l=>(p(),b(n,{key:l.path,label:l.title,name:l.path,closable:l.close},{label:v((()=>[x(_(a,{class:"tabs-icon"},{default:v((()=>[(p(),b(j(l.icon)))])),_:2},1536),[[e,l.icon&&F(M)]]),h(" "+B(l.title),1)])),_:2},1032,["label","name","closable"])))),128))])),_:1},8,["modelValue"]),k("div",se,[_(le),_(ee,{class:"tabs_icon"}),_(te)])]),_(ae,{visible:F(N),left:F(S),top:F(R)},null,8,["visible","left","top"])])}}}),[["__scopeId","data-v-d1ba5e45"]]),ue=o(d({__name:"index",setup(e){const t=n(),{maximize:o,isCollapse:s,layout:i,tabs:u}=a(t),r=c(),{keepAliveName:d}=a(r),h=$(!0);M("refresh",(e=>h.value=e)),A((()=>o.value),(()=>{const e=document.getElementById("app");o.value?e.classList.add("main-maximize"):e.classList.remove("main-maximize")}),{immediate:!0}),A((()=>i.value),(()=>{document.body.setAttribute("class",i.value)}),{immediate:!0});const g=$(0),k=U((()=>{g.value=document.body.clientWidth,!s.value&&g.value<1200&&t.setGlobalState("isCollapse",!0),s.value&&g.value>1200&&t.setGlobalState("isCollapse",!1)}),100);return window.addEventListener("resize",k,!1),N((()=>{window.removeEventListener("resize",k)})),(e,t)=>{const a=m("router-view"),n=m("el-main");return p(),f(w,null,[F(o)?(p(),b(Z,{key:0})):R("",!0),F(u)?(p(),b(ie,{key:1})):R("",!0),_(n,null,{default:v((()=>[_(a,null,{default:v((({Component:e,route:t})=>[_(l,{appear:"",name:"fade-transform",mode:"out-in"},{default:v((()=>[(p(),b(S,{include:F(d)},[h.value?(p(),b(j(e),{key:t.fullPath})):R("",!0)],1032,["include"]))])),_:2},1024)])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-53a484aa"]]),re=d({__name:"Language",setup(e){const l=q(),t=n(),a=y((()=>t.language)),o=[{label:"简体中文",value:"zh"},{label:"English",value:"en"}],s=e=>{l.locale.value=e,t.setGlobalState("language",e)};return(e,l)=>{const t=m("el-dropdown-item"),n=m("el-dropdown-menu"),i=m("el-dropdown");return p(),b(i,{trigger:"click",onCommand:s},{dropdown:v((()=>[_(n,null,{default:v((()=>[(p(),f(w,null,T(o,(e=>_(t,{key:e.value,command:e.value,disabled:F(a)===e.value},{default:v((()=>[h(B(e.label),1)])),_:2},1032,["command","disabled"]))),64))])),_:1})])),default:v((()=>[k("i",{class:K(["iconfont icon-zhongyingwen","toolBar-icon"])})])),_:1})}}}),ce={class:"menu-search-dialog"},de=o(d({__name:"SearchMenu",setup(e){const l=D(),a=i(),n=y((()=>a.flatMenuListGet.filter((e=>!e.meta.isHide)))),o=(e,l)=>{l(e?n.value.filter(h(e)):n.value)},s=$(!1),u=$(),r=$(""),c=()=>{s.value=!0,C((()=>{setTimeout((()=>{u.value.focus()}))}))},d=()=>{s.value=!1},h=e=>l=>l.path.toLowerCase().indexOf(e.toLowerCase())>-1||l.meta.title.toLowerCase().indexOf(e.toLowerCase())>-1,g=e=>{r.value="",e.meta.isLink?window.open(e.meta.isLink,"_blank"):l.push(e.path),d()};return(e,l)=>{const a=m("el-icon"),n=m("el-autocomplete"),i=m("el-dialog");return p(),f("div",ce,[k("i",{onClick:c,class:K(["iconfont icon-search","toolBar-icon"])}),_(i,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e),"destroy-on-close":"",modal:!1,"show-close":!1,fullscreen:"",onClick:d},{default:v((()=>[_(n,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),ref_key:"menuInputRef",ref:u,"value-key":"path",placeholder:"菜单搜索 ：支持菜单名称、路径","fetch-suggestions":o,onSelect:g,onClick:l[1]||(l[1]=t((()=>{}),["stop"]))},{prefix:v((()=>[_(a,null,{default:v((()=>[_(F(O))])),_:1})])),default:v((({item:e})=>[_(a,null,{default:v((()=>[(p(),b(j(e.meta.icon)))])),_:2},1024),k("span",null,B(e.meta.title),1)])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d5ac5f14"]]),me={class:"theme-setting",style:{cursor:"pointer"}},pe=d({__name:"ThemeSetting",setup(e){const l=()=>{H.emit("openThemeDrawer")};return(e,t)=>(p(),f("div",me,[k("i",{class:K(["iconfont icon-theme","toolBar-icon"]),onClick:l})]))}}),fe={class:"fullscreen icon_full"},_e=o(d({__name:"Fullscreen",setup(e){const{toggle:l,isFullscreen:t}=Q();return(e,a)=>(p(),f("div",fe,[k("i",{class:K([["iconfont",F(t)?"icon-exitfullscreen":"icon-fullscreen"],"toolBar-icon"]),onClick:a[0]||(a[0]=//@ts-ignore
(...e)=>F(l)&&F(l)(...e))},null,2)]))}}),[["__scopeId","data-v-f50f3430"]]),ve=k("span",null,"This is userInfo",-1),be={class:"dialog-footer"},he=d({__name:"InfoDialog",setup(e,{expose:l}){const t=$(!1);return l({openDialog:()=>{t.value=!0}}),(e,l)=>{const a=m("el-button"),n=m("el-dialog");return p(),b(n,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),title:"个人信息",width:"500px",draggable:""},{footer:v((()=>[k("span",be,[_(a,{onClick:l[0]||(l[0]=e=>t.value=!1)},{default:v((()=>[h("取消")])),_:1}),_(a,{type:"primary",onClick:l[1]||(l[1]=e=>t.value=!1)},{default:v((()=>[h("确认")])),_:1})])])),default:v((()=>[ve])),_:1},8,["modelValue"])}}}),ge=k("span",null,"This is Password",-1),ke={class:"dialog-footer"},we=d({__name:"PasswordDialog",setup(e,{expose:l}){const t=$(!1);return l({openDialog:()=>{t.value=!0}}),(e,l)=>{const a=m("el-button"),n=m("el-dialog");return p(),b(n,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),title:"修改密码",width:"500px",draggable:""},{footer:v((()=>[k("span",ke,[_(a,{onClick:l[0]||(l[0]=e=>t.value=!1)},{default:v((()=>[h("取消")])),_:1}),_(a,{type:"primary",onClick:l[1]||(l[1]=e=>t.value=!1)},{default:v((()=>[h("确认")])),_:1})])])),default:v((()=>[ge])),_:1},8,["modelValue"])}}}),Ce=e=>(V("data-v-cd13e9cd"),e=e(),I(),e),xe=Ce((()=>k("div",{class:"avatar"},[
k("img",{src:W,alt:"avatar"})],-1))),ye=Ce((()=>k("a",{href:"https://wocwin.github.io/t-ui/",target:"_blank"},"vue2基础组件文档",-1))),Ae=Ce((()=>k("a",{href:"https://wocwin.github.io/t-ui-plus/",target:"_blank"},"vue3基础组件文档",-1))),Le=o(d({__name:"Avatar",setup(e){const l=u(),t=()=>{Y.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await l.LogOut(),window.location.href=X.__POWERED_BY_QIANKUN__?"/wocwin-qiankun/":"/wocwin-admin/",J.success("退出登录成功！")}))},a=$(null),n=$(null),o=e=>{var l,t;"infoRef"==e&&(null==(l=a.value)||l.openDialog()),"passwordRef"==e&&(null==(t=n.value)||t.openDialog())};return(e,l)=>{const s=m("User"),i=m("el-icon"),u=m("el-dropdown-item"),r=m("Edit"),c=m("Memo"),d=m("SwitchButton"),b=m("el-dropdown-menu"),g=m("el-dropdown");return p(),f(w,null,[_(g,{trigger:"click"},{dropdown:v((()=>[_(b,{class:"user_info"},{default:v((()=>[_(u,{onClick:l[0]||(l[0]=e=>o("infoRef"))},{default:v((()=>[_(i,null,{default:v((()=>[_(s)])),_:1}),h(" "+B(e.$t("header.personalData")),1)])),_:1}),_(u,{onClick:l[1]||(l[1]=e=>o("passwordRef"))},{default:v((()=>[_(i,null,{default:v((()=>[_(r)])),_:1}),h(" "+B(e.$t("header.changePassword")),1)])),_:1}),_(u,null,{default:v((()=>[_(i,null,{default:v((()=>[_(c)])),_:1}),ye])),_:1}),_(u,null,{default:v((()=>[_(i,null,{default:v((()=>[_(c)])),_:1}),Ae])),_:1}),_(u,{onClick:t,divided:""},{default:v((()=>[_(i,null,{default:v((()=>[_(d)])),_:1}),h(" "+B(e.$t("header.logout")),1)])),_:1})])),_:1})])),default:v((()=>[xe])),_:1}),_(he,{ref_key:"infoRef",ref:a},null,512),_(we,{ref_key:"passwordRef",ref:n},null,512)],64)}}}),[["__scopeId","data-v-cd13e9cd"]]),Te={class:"tool-bar-ri"},je={class:"header-icon"},Me={class:"username"},Ne=o(d({__name:"ToolBarRight",setup(e){const l=u(),t=y((()=>l.loginName));return(e,l)=>{const a=m("el-tooltip");return p(),f("div",Te,[k("div",je,[_(re,{id:"language"}),_(de,{id:"searchMenu"}),_(a,{content:"主题切换",effect:"dark",placement:"bottom"},{default:v((()=>[_(pe,{id:"themeSetting"})])),_:1}),_(a,{content:"全屏预览",effect:"dark",placement:"bottom"},{default:v((()=>[_(_e,{id:"fullscreen"})])),_:1})]),k("span",Me,B(F(t)),1),_(Le)])}}}),[["__scopeId","data-v-3d57b8a4"]]),Re={class:"sle"},Se={class:"sle"},Ve=d({__name:"SubMenu",props:{menuList:null},setup(e){const l=D();return(t,a)=>{const n=m("el-icon"),o=m("SubMenu",!0),s=m("el-sub-menu"),i=m("el-menu-item");return p(!0),f(w,null,T(e.menuList,(e=>{var t;return p(),f(w,{key:e.path},[(null==(t=e.children)?void 0:t.length)?(p(),b(s,{key:0,index:e.path},{title:v((()=>[_(n,null,{default:v((()=>[(p(),b(j(e.meta.icon)))])),_:2},1024),k("span",Re,B(e.meta.title),1)])),default:v((()=>[_(o,{menuList:e.children},null,8,["menuList"])])),_:2},1032,["index"])):(p(),b(i,{key:1,index:e.path,onClick:t=>(e=>{if(e.meta.isLink)return window.open(e.meta.isLink,"_blank");l.push(e.path)})(e)},{title:v((()=>[k("span",Se,B(e.meta.title),1)])),default:v((()=>[_(n,null,{default:v((()=>[(p(),b(j(e.meta.icon)))])),_:2},1024)])),_:2},1032,["index","onClick"]))],64)})),128)}}});export{ue as M,Ne as T,Ve as _};
