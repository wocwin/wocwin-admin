import{b as a,_ as e,c as s,H as r}from"./index-154eab54.js";import{e as t,_ as o,o as l,P as c,Q as n,R as u,t as i,a as m,c as d,F as b,X as _,b as p,D as v,U as f}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";import{u as h}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{a as j,v as C}from"./@vue_runtime-dom@3.2.47-f06158fa.js";import{b as I,u as k}from"./vue-router@4.1.6_vue@3.2.47-24f49948.js";import{b as x}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-7195bfe1.js";import{O as B,q as y}from"./@vue_shared@3.2.47-177e1703.js";const L=e(t({__name:"CollapseIcon",setup(e){const s=a(),r=()=>s.setGlobalState("isCollapse",!s.isCollapse);return(a,e)=>{const t=o("el-icon");return l(),c(t,{class:"collapse-icon",onClick:r},{default:n((()=>[(l(),c(u(h(s).isCollapse?"expand":"fold")))])),_:1})}}}),[["__scopeId","data-v-a855ab64"],["__file","CollapseIcon.vue"]]),T=["onClick"],g={class:"breadcrumb-title"},F=e(t({__name:"Breadcrumb",setup(e){const t=I(),f=k(),L=s(),F=a(),G=i((()=>{var a;let e=L.breadcrumbListGet[t.matched[t.matched.length-1].path]??[];return(null==(a=e[0])?void 0:a.path)!==r&&(e=[{path:r,meta:{icon:"HomeFilled",title:"首页"}},...e]),e}));return(a,e)=>{const s=o("el-icon"),r=o("el-breadcrumb-item"),t=o("el-breadcrumb");return l(),m("div",{class:y(["breadcrumb-box",!h(F).breadcrumbIcon&&"no-icon"])},[d(t,{"separator-icon":h(x)},{default:n((()=>[d(j,{name:"breadcrumb"},{default:n((()=>[(l(!0),m(b,null,_(h(G),((a,e)=>(l(),c(r,{key:a.path},{default:n((()=>[p("div",{class:"el-breadcrumb__inner is-link",onClick:s=>((a,e)=>{e!==G.value.length-1&&f.push(a.path)})(a,e)},[v(d(s,{class:"breadcrumb-icon"},{default:n((()=>[(l(),c(u(a.meta.icon)))])),_:2},1536),[[C,a.meta.icon&&h(F).breadcrumbIcon]]),p("span",g,B(a.meta.title),1)],8,T)])),_:2},1024)))),128))])),_:1})])),_:1},8,["separator-icon"])],2)}}}),[["__scopeId","data-v-8d935ba7"],["__file","Breadcrumb.vue"]]),G={class:"tool-bar-lf"},H=e(t({__name:"ToolBarLeft",setup(e){const s=a();return(a,e)=>(l(),m("div",G,[d(L,{id:"collapseIcon"}),h(s).breadcrumb?(l(),c(F,{key:0,id:"breadcrumb"})):f("",!0)]))}}),[["__scopeId","data-v-4e2fa98a"],["__file","ToolBarLeft.vue"]]);export{H as T};