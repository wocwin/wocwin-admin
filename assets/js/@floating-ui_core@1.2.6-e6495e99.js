function t(t){return t.split("-")[1]}function e(t){return"y"===t?"height":"width"}function n(t){return t.split("-")[0]}function o(t){return["top","bottom"].includes(n(t))?"x":"y"}function i(i,r,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,m=o(r),u=e(m),g=l[u]/2-s[u]/2,d="x"===m;let p;switch(n(r)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(t(r)){case"start":p[m]-=g*(a&&d?-1:1);break;case"end":p[m]+=g*(a&&d?-1:1)}return p}const r=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:u}=i(f,o,c),g=o,d={},p=0;for(let h=0;h<s.length;h++){const{name:n,fn:a}=s[h],{x:y,y:x,data:w,reset:v}=await a({x:m,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});m=null!=y?y:m,u=null!=x?x:u,d={...d,[n]:{...d[n],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:m,y:u}=i(f,g,c))),h=-1)}return{x:m,y:u,placement:g,strategy:r,middlewareData:d}};function a(t){return"number"!=typeof t?(e=t,{top:0,right:0,bottom:0,left:0,...e}):{top:t,right:t,bottom:t,left:t};var e}function l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:f}=t,{boundary:m="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=l(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:m,rootBoundary:u,strategy:f})),w="floating"===g?{...s.floating,x:o,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},A=l(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:f}):w);return{top:(x.top-A.top+h.top)/b.y,bottom:(A.bottom-x.bottom+h.bottom)/b.y,left:(x.left-A.left+h.left)/b.x,right:(A.right-x.right+h.right)/b.x}}const c=Math.min,f=Math.max;function m(t,e,n){return f(t,c(e,n))}const u=n=>({name:"arrow",options:n,async fn(i){const{element:r,padding:l=0}=n||{},{x:s,y:c,placement:f,rects:u,platform:g,elements:d}=i;if(null==r)return{};const p=a(l),h={x:s,y:c},y=o(f),x=e(y),w=await g.getDimensions(r),v="y"===y,b=v?"top":"left",A=v?"bottom":"right",R=v?"clientHeight":"clientWidth",P=u.reference[x]+u.reference[y]-h[y]-u.floating[x],E=h[y]-u.reference[y],T=await(null==g.getOffsetParent?void 0:g.getOffsetParent(r));let D=T?T[R]:0;D&&await(null==g.isElement?void 0:g.isElement(T))||(D=d.floating[R]||u.floating[x]);const L=P/2-E/2,k=p[b],O=D-w[x]-p[A],B=D/2-w[x]/2+L,C=m(k,B,O),H=null!=t(f)&&B!=C&&u.reference[x]/2-(B<k?p[b]:p[A])-w[x]/2<0;return{[y]:h[y]-(H?B<k?k-B:O-B:0),data:{[y]:C,centerOffset:B-C}}}}),g=["top","right","bottom","left"],d=g.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),p={left:"right",right:"left",bottom:"top",top:"bottom"};function h(t){return t.replace(/left|right|bottom|top/g,(t=>p[t]))}function y(n,i,r){void 0===r&&(r=!1);const a=t(n),l=o(n),s=e(l);let c="x"===l?a===(r?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=h(c)),{main:c,cross:h(c)}}const x={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>x[t]))}const v=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,async fn(o){var i,r,a;const{rects:l,middlewareData:c,placement:f,platform:m,elements:u}=o,{crossAxis:g=!1,alignment:p,allowedPlacements:h=d,autoAlignment:x=!0,...v}=e,b=void 0!==p||h===d?(T=x,D=h,((E=p||null)?[...D.filter((e=>t(e)===E)),...D.filter((e=>t(e)!==E))]:D.filter((t=>n(t)===t))).filter((e=>!E||t(e)===E||!!T&&w(e)!==e))):h,A=await s(o,v),R=(null==(i=c.autoPlacement)?void 0:i.index)||0,P=b[R];var E,T,D;if(null==P)return{};const{main:L,cross:k}=y(P,l,await(null==m.isRTL?void 0:m.isRTL(u.floating)));if(f!==P)return{reset:{placement:b[0]}};const O=[A[n(P)],A[L],A[k]],B=[...(null==(r=c.autoPlacement)?void 0:r.overflows)||[],{placement:P,overflows:O}],C=b[R+1];if(C)return{data:{index:R+1,overflows:B},reset:{placement:C}};const H=B.map((e=>{const n=t(e.placement);return[e.placement,n&&g?e.overflows.slice(0,2).reduce(((t,e)=>t+e),0):e.overflows[0],e.overflows]})).sort(((t,e)=>t[1]-e[1])),S=(null==(a=H.filter((e=>e[2].slice(0,t(e[0])?2:3).every((t=>t<=0))))[0])?void 0:a[0])||H[0][0];return S!==f?{data:{index:R+1,overflows:B},reset:{placement:S}}:{}}}},b=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(o){var i;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:f,elements:m}=o,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=e,A=n(r),R=n(c)===c,P=await(null==f.isRTL?void 0:f.isRTL(m.floating)),E=d||(R||!v?[h(c)]:function(t){const e=h(t);return[w(t),e,w(e)]}(c));d||"none"===x||E.push(...function(e,o,i,r){const a=t(e);let l=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:a;default:return[]}}(n(e),"start"===i,r);return a&&(l=l.map((t=>t+"-"+a)),o&&(l=l.concat(l.map(w)))),l}(c,v,x,P));const T=[c,...E],D=await s(o,b),L=[];let k=(null==(i=a.flip)?void 0:i.overflows)||[];if(u&&L.push(D[A]),g){const{main:t,cross:e}=y(r,l,P);L.push(D[t],D[e])}if(k=[...k,{placement:r,overflows:L}],!L.every((t=>t<=0))){var O,B;const t=((null==(O=a.flip)?void 0:O.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let n=null==(B=k.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(p){case"bestFit":{var C;const t=null==(C=k.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:C[0];t&&(n=t);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}};function A(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function R(t){return g.some((e=>t[e]>=0))}const P=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e;switch(n){case"referenceHidden":{const t=A(await s(e,{...o,elementContext:"reference"}),i.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:R(t)}}}case"escaped":{const t=A(await s(e,{...o,altBoundary:!0}),i.floating);return{data:{escapedOffsets:t,escaped:R(t)}}}default:return{}}}}};function E(t){const e=c(...t.map((t=>t.left))),n=c(...t.map((t=>t.top)));return{x:e,y:n,width:f(...t.map((t=>t.right)))-e,height:f(...t.map((t=>t.bottom)))-n}}const T=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:i,elements:r,rects:s,platform:m,strategy:u}=e,{padding:g=2,x:d,y:p}=t,h=Array.from(await(null==m.getClientRects?void 0:m.getClientRects(r.reference))||[]),y=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let i=0;i<e.length;i++){const t=e[i];!o||t.y-o.y>o.height/2?n.push([t]):n[n.length-1].push(t),o=t}return n.map((t=>l(E(t))))}(h),x=l(E(h)),w=a(g),v=await m.getElementRects({reference:{getBoundingClientRect:function(){if(2===y.length&&y[0].left>y[1].right&&null!=d&&null!=p)return y.find((t=>d>t.left-w.left&&d<t.right+w.right&&p>t.top-w.top&&p<t.bottom+w.bottom))||x;if(y.length>=2){if("x"===o(i)){const t=y[0],e=y[y.length-1],o="top"===n(i),r=t.top,a=e.bottom,l=o?t.left:e.left,s=o?t.right:e.right;return{top:r,bottom:a,left:l,right:s,width:s-l,height:a-r,x:l,y:r}}const t="left"===n(i),e=f(...y.map((t=>t.right))),r=c(...y.map((t=>t.left))),a=y.filter((n=>t?n.left===r:n.right===e)),l=a[0].top,s=a[a.length-1].bottom;return{top:l,bottom:s,left:r,right:e,width:e-r,height:s-l,x:r,y:l}}return x}},floating:r.floating,strategy:u});return s.reference.x!==v.reference.x||s.reference.y!==v.reference.y||s.reference.width!==v.reference.width||s.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}},D=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(i){const{x:r,y:a}=i,l=await async function(e,i){const{placement:r,platform:a,elements:l}=e,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=n(r),f=t(r),m="x"===o(r),u=["left","top"].includes(c)?-1:1,g=s&&m?-1:1,d="function"==typeof i?i(e):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),m?{x:h*g,y:p*u}:{x:p*u,y:h*g}}(i,e);return{x:r+l.x,y:a+l.y,data:l}}}};function L(t){return"x"===t?"y":"x"}const k=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:a}=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=t,g={x:i,y:r},d=await s(e,u),p=o(n(a)),h=L(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=m(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=m(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...e,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-r}}}}},O=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:i,y:r,placement:a,rects:l,middlewareData:s}=e,{offset:c=0,mainAxis:f=!0,crossAxis:m=!0}=t,u={x:i,y:r},g=o(a),d=L(g);let p=u[g],h=u[d];const y="function"==typeof c?c(e):c,x="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(f){const t="y"===g?"height":"width",e=l.reference[g]-l.floating[t]+x.mainAxis,n=l.reference[g]+l.reference[t]-x.mainAxis;p<e?p=e:p>n&&(p=n)}if(m){var w,v;const t="y"===g?"width":"height",e=["top","left"].includes(n(a)),o=l.reference[d]-l.floating[t]+(e&&(null==(w=s.offset)?void 0:w[d])||0)+(e?0:x.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(v=s.offset)?void 0:v[d])||0)-(e?x.crossAxis:0);h<o?h=o:h>i&&(h=i)}return{[g]:p,[d]:h}}}},B=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(i){const{placement:r,rects:a,platform:l,elements:m}=i,{apply:u=(()=>{}),...g}=e,d=await s(i,g),p=n(r),h=t(r),y="x"===o(r),{width:x,height:w}=a.floating;let v,b;"top"===p||"bottom"===p?(v=p,b=h===(await(null==l.isRTL?void 0:l.isRTL(m.floating))?"start":"end")?"left":"right"):(b=p,v="end"===h?"top":"bottom");const A=w-d[v],R=x-d[b],P=!i.middlewareData.shift;let E=A,T=R;if(y){const t=x-d.left-d.right;T=h||P?c(R,t):t}else{const t=w-d.top-d.bottom;E=h||P?c(A,t):t}if(P&&!h){const t=f(d.left,0),e=f(d.right,0),n=f(d.top,0),o=f(d.bottom,0);y?T=x-2*(0!==t||0!==e?t+e:f(d.left,d.right)):E=w-2*(0!==n||0!==o?n+o:f(d.top,d.bottom))}await u({...i,availableWidth:T,availableHeight:E});const D=await l.getDimensions(m.floating);return x!==D.width||w!==D.height?{reset:{rects:!0}}:{}}}};export{B,D,O,P,T,b,k,l,r,s,u,v};
