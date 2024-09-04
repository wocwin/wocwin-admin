import{t as e,i as t,a as n,n as r,r as l,b as i,c as u,d as a,e as o,f as s,g as c}from"./@vueuse_shared@9.13.0_vue@3.2.47-c66d449d.js";import{r as d}from"./@vue_reactivity@3.2.47-bf31ab22.js";import{q as v,t as f,g as m}from"./@vue_runtime-core@3.2.47-f6ecd84f.js";function p(e){var t;const n=l(e);return null!=(t=null==n?void 0:n.$el)?t:n}const b=t?window:void 0,w=t?window.document:void 0;function y(...t){let i,u,a,o;if(n(t[0])||Array.isArray(t[0])?([u,a,o]=t,i=b):[i,u,a,o]=t,!i)return r;Array.isArray(u)||(u=[u]),Array.isArray(a)||(a=[a]);const s=[],c=()=>{s.forEach((e=>e())),s.length=0},d=v((()=>[p(i),l(o)]),(([e,t])=>{c(),e&&s.push(...u.flatMap((n=>a.map((r=>((e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)))(e,n,r,t))))))}),{immediate:!0,flush:"post"}),f=()=>{d(),c()};return e(f),f}let g=!1;function O(e,t,n={}){const{window:l=b,ignore:i=[],capture:u=!0,detectIframe:o=!1}=n;if(!l)return;a&&!g&&(g=!0,Array.from(l.document.body.children).forEach((e=>e.addEventListener("click",r))));let s=!0;const c=e=>i.some((t=>{if("string"==typeof t)return Array.from(l.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=p(t);return n&&(e.target===n||e.composedPath().includes(n))}})),d=[y(l,"click",(n=>{const r=p(e);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(s=!c(n)),s?t(n):s=!0)}),{passive:!0,capture:u}),y(l,"pointerdown",(t=>{const n=p(e);n&&(s=!t.composedPath().includes(n)&&!c(t))}),{passive:!0}),o&&y(l,"blur",(n=>{var r;const i=p(e);"IFRAME"!==(null==(r=l.document.activeElement)?void 0:r.tagName)||(null==i?void 0:i.contains(l.document.activeElement))||t(n)}))].filter(Boolean);return()=>d.forEach((e=>e()))}function h(e={}){var t;const{window:n=b}=e,r=null!=(t=e.document)?t:null==n?void 0:n.document,l=o((()=>null),(()=>null==r?void 0:r.activeElement));return n&&(y(n,"blur",(e=>{null===e.relatedTarget&&l.trigger()}),!0),y(n,"focus",l.trigger,!0)),l}function E(e,t=!1){const n=d(),r=()=>n.value=Boolean(e());return r(),i(r,t),n}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F="__vueuse_ssr_handlers__";function I(e,t,{window:n=b,initialValue:r=""}={}){const i=d(r),u=f((()=>{var e;return p(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return v([u,()=>l(e)],(([e,t])=>{var l;if(e&&n){const u=null==(l=n.getComputedStyle(e).getPropertyValue(t))?void 0:l.trim();i.value=u||r}}),{immediate:!0}),v(i,(t=>{var n;(null==(n=u.value)?void 0:n.style)&&u.value.style.setProperty(l(e),t)})),i}function k({document:e=w}={}){if(!e)return d("visible");const t=d(e.visibilityState);return y(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}S[F]=S[F]||{};var x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,C=(e,t)=>{var n={};for(var r in e)j.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&P.call(e,r)&&(n[r]=e[r]);return n};function z(t,n,r={}){const l=r,{window:i=b}=l,u=C(l,["window"]);let a;const o=E((()=>i&&"ResizeObserver"in i)),s=()=>{a&&(a.disconnect(),a=void 0)},c=v((()=>p(t)),(e=>{s(),o.value&&i&&e&&(a=new ResizeObserver(n),a.observe(e,u))}),{immediate:!0,flush:"post"}),d=()=>{s(),c()};return e(d),{isSupported:o,stop:d}}function R(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:l=!0,immediate:u=!0}=t,a=d(0),o=d(0),s=d(0),c=d(0),f=d(0),m=d(0),b=d(0),w=d(0);function g(){const t=p(e);if(!t)return void(n&&(a.value=0,o.value=0,s.value=0,c.value=0,f.value=0,m.value=0,b.value=0,w.value=0));const r=t.getBoundingClientRect();a.value=r.height,o.value=r.bottom,s.value=r.left,c.value=r.right,f.value=r.top,m.value=r.width,b.value=r.x,w.value=r.y}return z(e,g),v((()=>p(e)),(e=>!e&&g())),l&&y("scroll",g,{capture:!0,passive:!0}),r&&y("resize",g,{passive:!0}),i((()=>{u&&g()})),{height:a,bottom:o,left:s,right:c,top:f,width:m,x:b,y:w,update:g}}
const A=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function N(t,n={}){const{document:r=w,autoExit:l=!1}=n,i=t||(null==r?void 0:r.querySelector("html")),u=d(!1);let a=A[0];const o=E((()=>{if(!r)return!1;for(const e of A)if(e[1]in r)return a=e,!0;return!1})),[s,c,v,,f]=a;async function m(){o.value&&((null==r?void 0:r[v])&&await r[c](),u.value=!1)}async function b(){if(!o.value)return;await m();const e=p(i);e&&(await e[s](),u.value=!0)}return r&&y(r,f,(()=>{u.value=!!(null==r?void 0:r[v])}),!1),l&&e(m),{isSupported:o,isFullscreen:u,enter:b,exit:m,toggle:async function(){u.value?await m():await b()}}}var _,Q,q=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;function M(t,n,r={}){const l=r,{window:i=b}=l,u=((e,t)=>{var n={};for(var r in e)T.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&q)for(var r of q(e))t.indexOf(r)<0&&B.call(e,r)&&(n[r]=e[r]);return n})(l,["window"]);let a;const o=E((()=>i&&"MutationObserver"in i)),s=()=>{a&&(a.disconnect(),a=void 0)},c=v((()=>p(t)),(e=>{s(),o.value&&i&&e&&(a=new MutationObserver(n),a.observe(e,u))}),{immediate:!0}),d=()=>{s(),c()};return e(d),{isSupported:o,stop:d}}(Q=_||(_={})).UP="UP",Q.RIGHT="RIGHT",Q.DOWN="DOWN",Q.LEFT="LEFT",Q.NONE="NONE";var H=Object.defineProperty,L=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function D(e,t,n,r={}){var l,i,u;const{clone:a=!1,passive:o=!1,eventName:p,deep:b=!1,defaultValue:w}=r,y=m(),g=n||(null==y?void 0:y.emit)||(null==(l=null==y?void 0:y.$emit)?void 0:l.bind(y))||(null==(u=null==(i=null==y?void 0:y.proxy)?void 0:i.$emit)?void 0:u.bind(null==y?void 0:y.proxy));let O=p;t||(t="modelValue"),O=p||O||`update:${t.toString()}`;const h=e=>{return a?s(a)?a(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},E=()=>c(e[t])?h(e[t]):w;if(o){const n=E(),r=d(n);return v((()=>e[t]),(e=>r.value=h(e))),v(r,(n=>{(n!==e[t]||b)&&g(O,n)}),{deep:b}),r}return f({get:()=>E(),set(e){g(O,e)}})}function G({window:e=b}={}){if(!e)return d(!1);const t=d(e.document.hasFocus());return y(e,"blur",(()=>{t.value=!1})),y(e,"focus",(()=>{t.value=!0})),t}function J(e={}){const{window:t=b,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:l=!0,includeScrollbar:u=!0}=e,a=d(n),o=d(r),s=()=>{t&&(u?(a.value=t.innerWidth,o.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};return s(),i(s),y("resize",s,{passive:!0}),l&&y("orientationchange",s,{passive:!0}),{width:a,height:o}}((e,t)=>{for(var n in t||(t={}))W.call(t,n)&&$(e,n,t[n]);if(L)for(var n of L(t))V.call(t,n)&&$(e,n,t[n])})({linear:u},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{y as a,J as b,R as c,z as d,I as e,M as f,k as g,G as h,D as i,h as j,N as k,O as o,p as u};
