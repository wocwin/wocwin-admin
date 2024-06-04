import{v as e,T as l,w as t}from"./@vue_runtime-dom@3.2.47-7c475029.js";import{s as a}from"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-43b7c6d6.js";import{j as n}from"./@vueuse_core@9.13.0_vue@3.2.47-38c90b9d.js";import{a as o,_ as s,H as i,c as u,u as r}from"./index-98452b43.js";import{u as c,a as d}from"./keepAlive-71c8207c.js";import{e as m,_ as p,o as f,a as _,c as v,Q as b,P as h,J as g,x as k,b as w,F as x,n as C,D as y,y as A,q as L,f as T,X as j,R as M,z as N,G as P,U as V,a1 as D,am as I,al as R}from"./@vue_runtime-core@3.2.47-64a8f806.js";import{S}from"./sortablejs@1.15.0-c3bad686.js";import{b as z,u as B}from"./vue-router@4.1.6_vue@3.2.47-0a61e1dc.js";import{O as E,s as K,q as $}from"./@vue_shared@3.2.47-177e1703.js";import{r as F,u as G,i as U}from"./@vue_reactivity@3.2.47-8860aa2c.js";import{u as O}from"./vue-i18n@9.2.2_vue@3.2.47-399c20a2.js";import{a as q}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-753bd102.js";import{m as H}from"./indexAsync-ff7755d0.js";import{_ as X}from"./logo-05fb951c.js";import{q as Q}from"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import{b as W,E as Y}from"./element-plus@2.6.1_vue@3.2.47-d032feaa.js";const J=s(m({__name:"Maximize",setup(e){const l=o(),t=()=>{l.setGlobalState("maximize",!1)};return(e,l)=>{const a=p("Close"),n=p("el-icon");return f(),_("div",{class:"maximize",onClick:t},[v(n,null,{default:b((()=>[v(a)])),_:1})])}}}),[["__scopeId","data-v-e5bd432e"]]),Z=m({__name:"MoreButton",setup(e){const l=z(),t=B(),a=c(),n=d(),o=()=>{l.meta.isAffix||(a.removeTabs(l.fullPath),n.removeKeepAliveName(l.name))},s=()=>{a.closeMultipleTab(l.fullPath),n.setKeepAliveName([l.name])},u=()=>{a.closeMultipleTab(),n.setKeepAliveName(),t.push(i)};return(e,l)=>{const t=p("ArrowDown"),a=p("el-icon"),n=p("Remove"),i=p("el-dropdown-item"),r=p("CircleClose"),c=p("FolderDelete"),d=p("el-dropdown-menu"),m=p("el-dropdown");return f(),h(m,{trigger:"click",teleported:!1},{dropdown:b((()=>[v(d,null,{default:b((()=>[v(i,{onClick:o},{default:b((()=>[v(a,null,{default:b((()=>[v(n)])),_:1}),g(E(e.$t("tabs.closeCurrent")),1)])),_:1}),v(i,{onClick:s},{default:b((()=>[v(a,null,{default:b((()=>[v(r)])),_:1}),g(E(e.$t("tabs.closeOther")),1)])),_:1}),v(i,{onClick:u},{default:b((()=>[v(a,null,{default:b((()=>[v(c)])),_:1}),g(E(e.$t("tabs.closeAll")),1)])),_:1})])),_:1})])),default:b((()=>[v(a,null,{default:b((()=>[v(t)])),_:1})])),_:1})}}}),ee=m({__name:"Refresh",setup(e){const l=z(),t=d(),a=k("refresh"),n=()=>{setTimeout((()=>{t.removeKeepAliveName(l.name),a(!1),C((()=>{t.addKeepAliveName(l.name),a(!0)}))}),0)};return(e,l)=>{const t=p("el-divider"),a=p("Refresh",!0),o=p("el-icon"),s=p("el-tooltip");return f(),_(x,null,[v(t,{direction:"vertical"}),w("div",{onClick:n,class:"tabs_icon"},[v(s,{effect:"dark",content:e.$t("tabs.refresh"),placement:"bottom"},{default:b((()=>[v(o,null,{default:b((()=>[v(a)])),_:1})])),_:1},8,["content"])]),v(t,{direction:"vertical"})],64)}}}),le=m({__name:"Maximize",setup(e){const l=o(),t=()=>{l.setGlobalState("maximize",!0)};return(e,l)=>{const a=p("el-divider"),n=p("FullScreen"),o=p("el-icon"),s=p("el-tooltip");return f(),_(x,null,[v(a,{direction:"vertical"}),w("div",{onClick:t,class:"tabs_icon"},[v(s,{effect:"dark",content:e.$t("tabs.maximize"),placement:"bottom"},{default:b((()=>[v(o,null,{default:b((()=>[v(n)])),_:1})])),_:1},8,["content"])])],64)}}}),te=m({__name:"Contextmenu",props:{visible:{type:Boolean,required:!1},top:{type:Number,default:0},left:{type:Number,default:0}},setup(l){const t=z(),a=B(),n=c(),o=d(),s=()=>{t.meta.isAffix||(n.removeTabs(t.fullPath),o.removeKeepAliveName(t.name))},u=()=>{n.closeMultipleTab(t.fullPath),o.setKeepAliveName([t.name])},r=()=>{n.closeMultipleTab(),o.setKeepAliveName(),a.push(i)};return(t,a)=>{const n=p("Remove"),o=p("el-icon"),i=p("CircleClose"),c=p("FolderDelete");return y((f(),_("ul",{style:K({left:l.left+"px",top:l.top+"px"}),class:"contextmenu"},[w("li",{onClick:s},[v(o,null,{default:b((()=>[v(n)])),_:1}),g(E(t.$t("tabs.closeCurrent")),1)]),w("li",{onClick:u},[v(o,null,{default:b((()=>[v(i)])),_:1}),g(E(t.$t("tabs.closeOther")),1)]),w("li",{onClick:r},[v(o,null,{default:b((()=>[v(c)])),_:1}),g(E(t.$t("tabs.closeAll")),1)])],4)),[[e,l.visible]])}}}),ae={class:"tabs-box"},ne={class:"tabs-menu"},oe={class:"right-tag"},se=s(m({__name:"index",setup(l){const t=z(),a=B(),n=c(),s=u(),i=o(),r=d(),m=F(t.fullPath),k=A((()=>n.tabsMenuList)),C=A((()=>i.tabsIcon)),N=F(!1),P=F(0),V=F(0),D=()=>{N.value=!1};L(N,(e=>{e?document.body.addEventListener("click",D):document.body.removeEventListener("click",D)})),T((()=>{I(),R()})),L((()=>t.fullPath),(()=>{if(t.meta.isFull)return;m.value=t.fullPath;const e={icon:t.meta.icon,title:t.meta.title,path:t.fullPath,name:t.name,close:!t.meta.isAffix};n.addTabs(e),t.meta.isKeepAlive&&r.addKeepAliveName(t.name)}),{immediate:!0});const I=()=>{S.create(document.querySelector(".el-tabs__nav"),{draggable:".el-tabs__item",animation:300,onEnd({newIndex:e,oldIndex:l}){const t=[...n.tabsMenuList],a=t.splice(l,1)[0];t.splice(e,0,a),n.setTabs(t)}})},R=()=>{s.flatMenuListGet.forEach((e=>{if(e.meta.isAffix&&!e.meta.isHide&&!e.meta.isFull){const l={icon:e.meta.icon,title:e.meta.title,path:e.path,name:e.name,close:!e.meta.isAffix};n.addTabs(l)}}))},K=e=>{const l=e.props.name;a.push(l)},$=e=>{const l=n.tabsMenuList.filter((l=>l.path==e))[0].name||"";r.removeKeepAliveName(l),n.removeTabs(e,e==t.fullPath)};return(l,t)=>{const a=p("el-icon"),n=p("el-tab-pane"),o=p("el-tabs");return f(),_("div",ae,[w("div",ne,[v(o,{modelValue:G(m),"onUpdate:modelValue":t[0]||(t[0]=e=>U(m)?m.value=e:null),type:"card",onTabClick:K,onContextmenu:t[1]||(t[1]=e=>(e=>{e.preventDefault();const{clientX:l,clientY:t}=e;V.value=l,P.value=t+5,k.value.length<2?N.value=!1:N.value=!0})(e)),onTabRemove:$},{default:b((()=>[(f(!0),_(x,null,j(G(k),(l=>(f(),h(n,{key:l.path,label:l.title,name:l.path,closable:l.close},{label:b((()=>[y(v(a,{class:"tabs-icon"},{default:b((()=>[(f(),h(M(l.icon)))])),_:2},1536),[[e,l.icon&&G(C)]]),g(" "+E(l.title),1)])),_:2},1032,["label","name","closable"])))),128))])),_:1},8,["modelValue"]),w("div",oe,[v(ee),v(Z,{class:"tabs_icon"}),v(le)])]),v(te,{visible:G(N),left:G(V),top:G(P)},null,8,["visible","left","top"])])}}}),[["__scopeId","data-v-d1ba5e45"]]),ie=s(m({__name:"index",setup(e){const t=o(),{maximize:s,isCollapse:i,layout:u,tabs:r}=a(t),c=d(),{keepAliveName:m}=a(c),g=F(!0);N("refresh",(e=>g.value=e)),L((()=>s.value),(()=>{const e=document.getElementById("app");s.value?e.classList.add("main-maximize"):e.classList.remove("main-maximize")}),{immediate:!0}),L((()=>u.value),(()=>{document.body.setAttribute("class",u.value)}),{immediate:!0});const k=F(0),w=n.useDebounceFn((()=>{k.value=document.body.clientWidth,!i.value&&k.value<1200&&t.setGlobalState("isCollapse",!0),i.value&&k.value>1200&&t.setGlobalState("isCollapse",!1)}),100);return window.addEventListener("resize",w,!1),P((()=>{window.removeEventListener("resize",w)})),(e,t)=>{const a=p("router-view"),n=p("el-main");return f(),_(x,null,[G(s)?(f(),h(J,{key:0})):V("",!0),G(r)?(f(),h(se,{key:1})):V("",!0),v(n,null,{default:b((()=>[v(a,null,{default:b((({Component:e,route:t})=>[v(l,{appear:"",name:"fade-transform",mode:"out-in"},{default:b((()=>[(f(),h(D,{include:G(m)},[g.value?(f(),h(M(e),{key:t.fullPath})):V("",!0)],1032,["include"]))])),_:2},1024)])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-53a484aa"]]),ue=m({__name:"Language",setup(e){const l=O(),t=o(),a=A((()=>t.language)),n=[{label:"简体中文",value:"zh"},{label:"English",value:"en"}],s=e=>{l.locale.value=e,t.setGlobalState("language",e)};return(e,l)=>{const t=p("el-dropdown-item"),o=p("el-dropdown-menu"),i=p("el-dropdown");return f(),h(i,{trigger:"click",onCommand:s},{dropdown:b((()=>[v(o,null,{default:b((()=>[(f(),_(x,null,j(n,(e=>v(t,{key:e.value,command:e.value,disabled:G(a)===e.value},{default:b((()=>[g(E(e.label),1)])),_:2},1032,["command","disabled"]))),64))])),_:1})])),default:b((()=>[w("i",{class:$(["iconfont icon-zhongyingwen","toolBar-icon"])})])),_:1})}}}),re={class:"menu-search-dialog"},ce=s(m({__name:"SearchMenu",setup(e){const l=B(),a=u(),n=A((()=>a.flatMenuListGet.filter((e=>!e.meta.isHide)))),o=(e,l)=>{l(e?n.value.filter(m(e)):n.value)},s=F(!1),i=F(),r=F(""),c=()=>{s.value=!0,C((()=>{setTimeout((()=>{i.value.focus()}))}))},d=()=>{s.value=!1},m=e=>l=>l.path.toLowerCase().indexOf(e.toLowerCase())>-1||l.meta.title.toLowerCase().indexOf(e.toLowerCase())>-1,g=e=>{r.value="",e.meta.isLink?window.open(e.meta.isLink,"_blank"):l.push(e.path),d()};return(e,l)=>{const a=p("el-icon"),n=p("el-autocomplete"),u=p("el-dialog");return f(),_("div",re,[w("i",{onClick:c,class:$(["iconfont icon-search","toolBar-icon"])}),v(u,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e),"destroy-on-close":"",modal:!1,"show-close":!1,fullscreen:"",onClick:d},{default:b((()=>[v(n,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),ref_key:"menuInputRef",ref:i,"value-key":"path",placeholder:"菜单搜索 ：支持菜单名称、路径","fetch-suggestions":o,onSelect:g,onClick:l[1]||(l[1]=t((()=>{}),["stop"]))},{prefix:b((()=>[v(a,null,{default:b((()=>[v(G(q))])),_:1})])),default:b((({item:e})=>[v(a,null,{default:b((()=>[(f(),h(M(e.meta.icon)))])),_:2},1024),w("span",null,E(e.meta.title),1)])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d5ac5f14"]]),de={class:"theme-setting",style:{cursor:"pointer"}},me=m({__name:"ThemeSetting",setup(e){const l=()=>{H.emit("openThemeDrawer")};return(e,t)=>(f(),_("div",de,[w("i",{class:$(["iconfont icon-theme","toolBar-icon"]),onClick:l})]))}}),pe={class:"fullscreen icon_full"},fe=s(m({__name:"Fullscreen",setup(e){const{toggle:l,isFullscreen:t}=n.useFullscreen();return(e,a)=>(f(),_("div",pe,[w("i",{class:$([["iconfont",G(t)?"icon-exitfullscreen":"icon-fullscreen"],"toolBar-icon"]),onClick:a[0]||(a[0]=//@ts-ignore
(...e)=>G(l)&&G(l)(...e))},null,2)]))}}),[["__scopeId","data-v-f50f3430"]]),_e=w("span",null,"This is userInfo",-1),ve={class:"dialog-footer"},be=m({__name:"InfoDialog",setup(e,{expose:l}){const t=F(!1);return l({openDialog:()=>{t.value=!0}}),(e,l)=>{const a=p("el-button"),n=p("el-dialog");return f(),h(n,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),title:"个人信息",width:"500px",draggable:""},{footer:b((()=>[w("span",ve,[v(a,{onClick:l[0]||(l[0]=e=>t.value=!1)},{default:b((()=>[g("取消")])),_:1}),v(a,{type:"primary",onClick:l[1]||(l[1]=e=>t.value=!1)},{default:b((()=>[g("确认")])),_:1})])])),default:b((()=>[_e])),_:1},8,["modelValue"])}}}),he=w("span",null,"This is Password",-1),ge={class:"dialog-footer"},ke=m({__name:"PasswordDialog",setup(e,{expose:l}){const t=F(!1);return l({openDialog:()=>{t.value=!0}}),(e,l)=>{const a=p("el-button"),n=p("el-dialog");return f(),h(n,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),title:"修改密码",width:"500px",draggable:""},{footer:b((()=>[w("span",ge,[v(a,{onClick:l[0]||(l[0]=e=>t.value=!1)},{default:b((()=>[g("取消")])),_:1}),v(a,{type:"primary",onClick:l[1]||(l[1]=e=>t.value=!1)},{default:b((()=>[g("确认")])),_:1})])])),default:b((()=>[he])),_:1},8,["modelValue"])}}}),we=e=>(I("data-v-9dae398f"),e=e(),R(),e),xe=we((()=>w("div",{class:"avatar"},[
w("img",{src:X,alt:"avatar"})],-1))),Ce=we((()=>w("a",{href:"https://wocwin.github.io/t-ui/",target:"_blank"},"vue2基础组件文档",-1))),ye=we((()=>w("a",{href:"https://wocwin.github.io/t-ui-plus/",target:"_blank"},"vue3基础组件文档",-1))),Ae=s(m({__name:"Avatar",setup(e){const l=r(),t=()=>{W.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await l.LogOut(),window.location.href=Q.__POWERED_BY_QIANKUN__?"/":"/wocwin-admin/",Y.success("退出登录成功！")}))},a=F(null),n=F(null),o=e=>{var l,t;"infoRef"==e&&(null==(l=a.value)||l.openDialog()),"passwordRef"==e&&(null==(t=n.value)||t.openDialog())};return(e,l)=>{const s=p("User"),i=p("el-icon"),u=p("el-dropdown-item"),r=p("Edit"),c=p("Memo"),d=p("SwitchButton"),m=p("el-dropdown-menu"),h=p("el-dropdown");return f(),_(x,null,[v(h,{trigger:"click"},{dropdown:b((()=>[v(m,{class:"user_info"},{default:b((()=>[v(u,{onClick:l[0]||(l[0]=e=>o("infoRef"))},{default:b((()=>[v(i,null,{default:b((()=>[v(s)])),_:1}),g(" "+E(e.$t("header.personalData")),1)])),_:1}),v(u,{onClick:l[1]||(l[1]=e=>o("passwordRef"))},{default:b((()=>[v(i,null,{default:b((()=>[v(r)])),_:1}),g(" "+E(e.$t("header.changePassword")),1)])),_:1}),v(u,null,{default:b((()=>[v(i,null,{default:b((()=>[v(c)])),_:1}),Ce])),_:1}),v(u,null,{default:b((()=>[v(i,null,{default:b((()=>[v(c)])),_:1}),ye])),_:1}),v(u,{onClick:t,divided:""},{default:b((()=>[v(i,null,{default:b((()=>[v(d)])),_:1}),g(" "+E(e.$t("header.logout")),1)])),_:1})])),_:1})])),default:b((()=>[xe])),_:1}),v(be,{ref_key:"infoRef",ref:a},null,512),v(ke,{ref_key:"passwordRef",ref:n},null,512)],64)}}}),[["__scopeId","data-v-9dae398f"]]),Le={class:"tool-bar-ri"},Te={class:"header-icon"},je={class:"username"},Me=s(m({__name:"ToolBarRight",setup(e){const l=r(),t=A((()=>l.loginName));return(e,l)=>{const a=p("el-tooltip");return f(),_("div",Le,[w("div",Te,[v(ue,{id:"language"}),v(ce,{id:"searchMenu"}),v(a,{content:"主题切换",effect:"dark",placement:"bottom"},{default:b((()=>[v(me,{id:"themeSetting"})])),_:1}),v(a,{content:"全屏预览",effect:"dark",placement:"bottom"},{default:b((()=>[v(fe,{id:"fullscreen"})])),_:1})]),w("span",je,E(G(t)),1),v(Ae)])}}}),[["__scopeId","data-v-3d57b8a4"]]),Ne={class:"sle"},Pe={class:"sle"},Ve=m({__name:"SubMenu",props:{menuList:null},setup(e){const l=B();return(t,a)=>{const n=p("el-icon"),o=p("SubMenu",!0),s=p("el-sub-menu"),i=p("el-menu-item");return f(!0),_(x,null,j(e.menuList,(e=>{var t;return f(),_(x,{key:e.path},[(null==(t=e.children)?void 0:t.length)?(f(),h(s,{key:0,index:e.path},{title:b((()=>[v(n,null,{default:b((()=>[(f(),h(M(e.meta.icon)))])),_:2},1024),w("span",Ne,E(e.meta.title),1)])),default:b((()=>[v(o,{menuList:e.children},null,8,["menuList"])])),_:2},1032,["index"])):(f(),h(i,{key:1,index:e.path,onClick:t=>(e=>{if(e.meta.isLink)return window.open(e.meta.isLink,"_blank");l.push(e.path)})(e)},{title:b((()=>[w("span",Pe,E(e.meta.title),1)])),default:b((()=>[v(n,null,{default:b((()=>[(f(),h(M(e.meta.icon)))])),_:2},1024)])),_:2},1032,["index","onClick"]))],64)})),128)}}});export{ie as M,Me as T,Ve as _};