import{g as e,f as t,n,v as o,q as r}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{g as u,o as a,u as i,r as s,l,n as c}from"./@vue_reactivity@3.2.47-57d9983b.js";var f,v=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function b(e,t){var n;const r=c();var u,a;return o((()=>{r.value=e()}),(u=((e,t)=>{for(var n in t||(t={}))w.call(t,n)&&g(e,n,t[n]);if(d)for(var n of d(t))y.call(t,n)&&g(e,n,t[n]);return e})({},t),a={flush:null!=(n=null==t?void 0:t.flush)?n:"sync"},m(u,p(a)))),l(r)}const P="undefined"!=typeof window,h=e=>void 0!==e,j=e=>"function"==typeof e,O=e=>"string"==typeof e,T=()=>{},D=P&&(null==(f=null==window?void 0:window.navigator)?void 0:f.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function x(e){return"function"==typeof e?e():i(e)}function A(e,t){return function(...n){return new Promise(((o,r)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(r)}))}}function _(e){return e}function k(e){return!!u()&&(a(e),!0)}function q(e,t=200,n={}){return A(function(e,t={}){let n,o,r=T;const u=e=>{clearTimeout(e),r(),r=T};return a=>{const i=x(e),s=x(t.maxWait);return n&&u(n),i<=0||void 0!==s&&s<=0?(o&&(u(o),o=null),Promise.resolve(a())):new Promise(((e,l)=>{r=t.rejectOnCancel?l:e,s&&!o&&(o=setTimeout((()=>{n&&u(n),o=null,e(a())}),s)),n=setTimeout((()=>{o&&u(o),o=null,e(a())}),i)}))}}(t,n),e)}function C(e,t=200,n={}){const o=s(e.value),u=q((()=>{o.value=e.value}),t,n);return r(e,(()=>u())),o}function E(e,t=200,n=!1,o=!0,r=!1){return A(function(e,t=!0,n=!0,o=!1){let r,u,a=0,i=!0,s=T;const l=()=>{r&&(clearTimeout(r),r=void 0,s(),s=T)};return c=>{const f=x(e),v=Date.now()-a,m=()=>u=c();return l(),f<=0?(a=Date.now(),m()):(v>f&&(n||!i)?(a=Date.now(),m()):t&&(u=new Promise(((e,t)=>{s=o?t:e,r=setTimeout((()=>{a=Date.now(),i=!0,e(m()),l()}),Math.max(0,f-v))}))),n||r||(r=setTimeout((()=>i=!0),f)),i=!1,u)}}(t,n,o,r),e)}function I(o,r=!0){e()?t(o):r?o():n(o)}function M(e,t,n={}){const{immediate:o=!0}=n,r=s(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function i(){r.value=!1,a()}function c(...n){a(),r.value=!0,u=setTimeout((()=>{r.value=!1,u=null,e(...n)}),x(t))}return o&&(r.value=!0,P&&c()),k(i),{isPending:l(r),start:c,stop:i}}export{O as a,I as b,_ as c,D as d,j as e,h as f,C as g,M as h,P as i,b as j,q as k,T as n,x as r,k as t,E as u};
