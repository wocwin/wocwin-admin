import{s as e}from"./@intlify_shared@9.2.2-559cddb0.js";import{c as a}from"./@intlify_core-base@9.2.2-3174e0d5.js";import{r as t}from"./vue@3.2.47-f888cb36.js";var l={};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(l,"__esModule",{value:!0});var n=e,r=a,s=t;const o="9.2.2";let i=r.CoreWarnCodes.__EXTEND_POINT__;const c=()=>++i,u={FALLBACK_TO_ROOT:i,NOT_SUPPORTED_PRESERVE:c(),NOT_SUPPORTED_FORMATTER:c(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:c(),NOT_SUPPORTED_GET_CHOICE_INDEX:c(),COMPONENT_NAME_LEGACY_COMPATIBLE:c(),NOT_FOUND_PARENT_SCOPE:c()},m={[u.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[u.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[u.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[u.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[u.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[u.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[u.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope."};function _(e,...a){return n.format(m[e],...a)}let g=r.CompileErrorCodes.__EXTEND_POINT__;const f=()=>++g,p={
// composer module errors
UNEXPECTED_RETURN_TYPE:g,
// legacy module errors
INVALID_ARGUMENT:f(),
// i18n module errors
MUST_BE_CALL_SETUP_TOP:f(),NOT_INSLALLED:f(),NOT_AVAILABLE_IN_LEGACY_MODE:f(),
// directive module errors
REQUIRED_VALUE:f(),INVALID_VALUE:f(),
// vue-devtools errors
CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:f(),NOT_INSLALLED_WITH_PROVIDE:f(),
// unexpected error
UNEXPECTED_ERROR:f(),
// not compatible legacy vue-i18n constructor
NOT_COMPATIBLE_LEGACY_VUE_I18N:f(),
// bridge support vue 2.x only
BRIDGE_SUPPORT_VUE_2_ONLY:f(),
// need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:f(),
// Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
NOT_AVAILABLE_COMPOSITION_IN_LEGACY:f(),
// for enhancement
__EXTEND_POINT__:f()};function v(e,...a){return r.createCompileError(e,null,{messages:b,args:a})}const b={[p.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[p.INVALID_ARGUMENT]:"Invalid argument",[p.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[p.NOT_INSLALLED]:"Need to install with `app.use` function",[p.UNEXPECTED_ERROR]:"Unexpected error",[p.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[p.REQUIRED_VALUE]:"Required in value: {0}",[p.INVALID_VALUE]:"Invalid value",[p.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[p.NOT_INSLALLED_WITH_PROVIDE]:"Need to install with `provide` function",[p.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[p.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[p.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[p.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},E=n.makeSymbol("__transrateVNode"),O=n.makeSymbol("__datetimeParts"),T=n.makeSymbol("__numberParts"),d=n.makeSymbol("__enableEmitter"),L=n.makeSymbol("__disableEmitter"),N=n.makeSymbol("__setPluralRules");n.makeSymbol("__intlifyMeta");const R=n.makeSymbol("__injectWithOption");function I(e){if(!n.isObject(e))return e;for(const a in e)if(n.hasOwn(e,a))if(a.includes(".")){const t=a.split("."),l=t.length-1;let r=e;for(let e=0;e<l;e++)t[e]in r||(r[t[e]]={}),r=r[t[e]];r[t[l]]=e[a],delete e[a],n.isObject(r[t[l]])&&I(r[t[l]])}else n.isObject(e[a])&&I(e[a]);return e}function P(e,a){const{messages:t,__i18n:l,messageResolver:r,flatJson:s}=a,o=n.isPlainObject(t)?t:n.isArray(l)?{}:{[e]:{}};if(n.isArray(l)&&l.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:a,resource:t}=e;a?(o[a]=o[a]||{},F(t,o[a])):F(t,o)}else n.isString(e)&&F(JSON.parse(e),o)})),null==r&&s)for(const i in o)n.hasOwn(o,i)&&I(o[i]);return o}const k=e=>!n.isObject(e)||n.isArray(e);function F(e,a){if(k(e)||k(a))throw v(p.INVALID_VALUE);for(const t in e)n.hasOwn(e,t)&&(k(e[t])||k(a[t])?a[t]=e[t]:F(e[t],a[t]))}function h(e){return e.type}function y(e,a,t){let l=n.isObject(a.messages)?a.messages:{};"__i18nGlobal"in t&&(l=P(e.locale.value,{messages:l,__i18n:t.__i18nGlobal}));const r=Object.keys(l);if(r.length&&r.forEach((a=>{e.mergeLocaleMessage(a,l[a])})),n.isObject(a.datetimeFormats)){const t=Object.keys(a.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,a.datetimeFormats[t])}))}if(n.isObject(a.numberFormats)){const t=Object.keys(a.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,a.numberFormats[t])}))}}function A(e){return s.createVNode(s.Text,null,e,0)}const S="__INTLIFY_META__";let M=0;function C(e){return(a,t,l,n)=>e(t,l,s.getCurrentInstance()||void 0,n)}const D=()=>{const e=s.getCurrentInstance();let a=null;return e&&(a=h(e)[S])?{[S]:a}:null};function U(e={},a){const{__root:t}=e,l=void 0===t;let i=!n.isBoolean(e.inheritLocale)||e.inheritLocale;const c=s.ref(
// prettier-ignore
t&&i?t.locale.value:n.isString(e.locale)?e.locale:r.DEFAULT_LOCALE),m=s.ref(
// prettier-ignore
t&&i?t.fallbackLocale.value:n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c.value),g=s.ref(P(c.value,e)),f=s.ref(n.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),b=s.ref(n.isPlainObject(e.numberFormats)?e.numberFormats:{[c.value]:{}});let I=t?t.missingWarn:!n.isBoolean(e.missingWarn)&&!n.isRegExp(e.missingWarn)||e.missingWarn,k=t?t.fallbackWarn:!n.isBoolean(e.fallbackWarn)&&!n.isRegExp(e.fallbackWarn)||e.fallbackWarn,h=t?t.fallbackRoot:!n.isBoolean(e.fallbackRoot)||e.fallbackRoot,y=!!e.fallbackFormat,S=n.isFunction(e.missing)?e.missing:null,U=n.isFunction(e.missing)?C(e.missing):null,W=n.isFunction(e.postTranslation)?e.postTranslation:null,w=t?t.warnHtmlMessage:!n.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,j=!!e.escapeParameter;const V=t?t.modifiers:n.isPlainObject(e.modifiers)?e.modifiers:{};let H,B=e.pluralRules||t&&t.pluralRules;H=(()=>{l&&r.setFallbackContext(null);const a={version:o,locale:c.value,fallbackLocale:m.value,messages:g.value,modifiers:V,pluralRules:B,missing:null===U?void 0:U,missingWarn:I,fallbackWarn:k,fallbackFormat:y,unresolving:!0,postTranslation:null===W?void 0:W,warnHtmlMessage:w,escapeParameter:j,messageResolver:e.messageResolver,__meta:{framework:"vue"}};a.datetimeFormats=f.value,a.numberFormats=b.value,a.__datetimeFormatters=n.isPlainObject(H)?H.__datetimeFormatters:void 0,a.__numberFormatters=n.isPlainObject(H)?H.__numberFormatters:void 0,a.__v_emitter=n.isPlainObject(H)?H.__v_emitter:void 0;const t=r.createCoreContext(a);return l&&r.setFallbackContext(t),t})(),r.updateFallbackLocale(H,c.value,m.value);const $=s.computed({get:()=>c.value,set:e=>{c.value=e,H.locale=c.value}}),G=s.computed({get:()=>m.value,set:e=>{m.value=e,H.fallbackLocale=m.value,r.updateFallbackLocale(H,c.value,e)}}),x=s.computed((()=>g.value)),Y=s.computed((()=>f.value)),X=s.computed((()=>b.value));const K=(e,a,s,o,i,E)=>{let O;c.value,m.value,g.value,f.value,b.value;try{r.setAdditionalMeta(D()),l||(H.fallbackContext=t?r.getFallbackContext():void 0),O=e(H)}finally{r.setAdditionalMeta(null),l||(H.fallbackContext=void 0)}if(n.isNumber(O)&&O===r.NOT_REOSLVED){const[e,l]=a();if(t&&n.isString(e)&&(T=l,"translate"!==s||!T.resolvedMessage)){h&&(r.isTranslateFallbackWarn(k,e)||r.isTranslateMissingWarn(I,e))&&n.warn(_(u.FALLBACK_TO_ROOT,{key:e,type:s}));{const{__v_emitter:a}=H;a&&h&&a.emit("fallback",{type:s,key:e,to:"global",groupId:`${s}:${e}`})}}return t&&h?o(t):i(e)}if(E(O))return O;throw v(p.UNEXPECTED_RETURN_TYPE);var T};function z(...e){return K((a=>Reflect.apply(r.translate,null,[a,...e])),(()=>r.parseTranslateArgs(...e)),"translate",(a=>Reflect.apply(a.t,a,[...e])),(e=>e),(e=>n.isString(e)))}const q={normalize:function(e){return e.map((e=>n.isString(e)||n.isNumber(e)||n.isBoolean(e)?A(String(e)):e))},interpolate:e=>e,type:"vnode"};function J(e){return g.value[e]||{}}M++,t&&n.inBrowser&&(s.watch(t.locale,(e=>{i&&(c.value=e,H.locale=e,r.updateFallbackLocale(H,c.value,m.value))})),s.watch(t.fallbackLocale,(e=>{i&&(m.value=e,H.fallbackLocale=e,r.updateFallbackLocale(H,c.value,m.value))})));const Q={id:M,locale:$,fallbackLocale:G,get inheritLocale(){return i},set inheritLocale(e){i=e,e&&t&&(c.value=t.locale.value,m.value=t.fallbackLocale.value,r.updateFallbackLocale(H,c.value,m.value))},get availableLocales(){return Object.keys(g.value).sort()},messages:x,get modifiers(){return V},get pluralRules(){return B||{}},get isGlobal(){return l},get missingWarn(){return I},set missingWarn(e){I=e,H.missingWarn=I},get fallbackWarn(){return k},set fallbackWarn(e){k=e,H.fallbackWarn=k},get fallbackRoot(){return h},set fallbackRoot(e){h=e},get fallbackFormat(){return y},set fallbackFormat(e){y=e,H.fallbackFormat=y},get warnHtmlMessage(){return w},set warnHtmlMessage(e){w=e,H.warnHtmlMessage=e},get escapeParameter(){return j},set escapeParameter(e){j=e,H.escapeParameter=e},t:z,getLocaleMessage:J,setLocaleMessage:function(e,a){g.value[e]=a,H.messages=g.value},mergeLocaleMessage:function(e,a){g.value[e]=g.value[e]||{},F(a,g.value[e]),H.messages=g.value},getPostTranslationHandler:function(){return n.isFunction(W)?W:null},setPostTranslationHandler:function(e){W=e,H.postTranslation=e},getMissingHandler:function(){return S},setMissingHandler:function(e){null!==e&&(U=C(e)),S=e,H.missing=U},[N]:function(e){B=e,H.pluralRules=B}};return Q.datetimeFormats=Y,Q.numberFormats=X,Q.rt=function(...e){const[a,t,l]=e;if(l&&!n.isObject(l))throw v(p.INVALID_ARGUMENT);return z(a,t,n.assign({resolvedMessage:!0},l||{}))},Q.te=function(e,a){const t=J(n.isString(a)?a:c.value);return null!==H.messageResolver(t,e)},Q.tm=function(e){const a=function(e){let a=null;const t=r.fallbackWithLocaleChain(H,m.value,c.value);for(let l=0;l<t.length;l++){const n=g.value[t[l]]||{},r=H.messageResolver(n,e);if(null!=r){a=r;break}}return a}(e);return null!=a?a:t&&t.tm(e)||{}},Q.d=function(...e){return K((a=>Reflect.apply(r.datetime,null,[a,...e])),(()=>r.parseDateTimeArgs(...e)),"datetime format",(a=>Reflect.apply(a.d,a,[...e])),(()=>r.MISSING_RESOLVE_VALUE),(e=>n.isString(e)))},Q.n=function(...e){return K((a=>Reflect.apply(r.number,null,[a,...e])),(()=>r.parseNumberArgs(...e)),"number format",(a=>Reflect.apply(a.n,a,[...e])),(()=>r.MISSING_RESOLVE_VALUE),(e=>n.isString(e)))},Q.getDateTimeFormat=function(e){return f.value[e]||{}},Q.setDateTimeFormat=function(e,a){f.value[e]=a,H.datetimeFormats=f.value,r.clearDateTimeFormat(H,e,a)},Q.mergeDateTimeFormat=function(e,a){f.value[e]=n.assign(f.value[e]||{},a),H.datetimeFormats=f.value,r.clearDateTimeFormat(H,e,a)},Q.getNumberFormat=function(e){return b.value[e]||{}},Q.setNumberFormat=function(e,a){b.value[e]=a,H.numberFormats=b.value,r.clearNumberFormat(H,e,a)},Q.mergeNumberFormat=function(e,a){b.value[e]=n.assign(b.value[e]||{},a),H.numberFormats=b.value,r.clearNumberFormat(H,e,a)},Q[R]=e.__injectWithOption,Q[E]=function(...e){return K((a=>{let t;const l=a;try{l.processor=q,t=Reflect.apply(r.translate,null,[l,...e])}finally{l.processor=null}return t}),(()=>r.parseTranslateArgs(...e)),"translate",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[E](...e)),(e=>[A(e)]),(e=>n.isArray(e)))},Q[O]=function(...e){return K((a=>Reflect.apply(r.datetime,null,[a,...e])),(()=>r.parseDateTimeArgs(...e)),"datetime format",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[O](...e)),(()=>[]),(e=>n.isString(e)||n.isArray(e)))},Q[T]=function(...e){return K((a=>Reflect.apply(r.number,null,[a,...e])),(()=>r.parseNumberArgs(...e)),"number format",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[T](...e)),(()=>[]),(e=>n.isString(e)||n.isArray(e)))},Q[d]=e=>{H.__v_emitter=e},Q[L]=()=>{H.__v_emitter=void 0},Q}function W(e={},a){{const a=U(function(e){const a=n.isString(e.locale)?e.locale:r.DEFAULT_LOCALE,t=n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:a,l=n.isFunction(e.missing)?e.missing:void 0,s=!n.isBoolean(e.silentTranslationWarn)&&!n.isRegExp(e.silentTranslationWarn)||!e.silentTranslationWarn,o=!n.isBoolean(e.silentFallbackWarn)&&!n.isRegExp(e.silentFallbackWarn)||!e.silentFallbackWarn,i=!n.isBoolean(e.fallbackRoot)||e.fallbackRoot,c=!!e.formatFallbackMessages,m=n.isPlainObject(e.modifiers)?e.modifiers:{},g=e.pluralizationRules,f=n.isFunction(e.postTranslation)?e.postTranslation:void 0,p=!n.isString(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,v=!!e.escapeParameterHtml,b=!n.isBoolean(e.sync)||e.sync;e.formatter&&n.warn(_(u.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&n.warn(_(u.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let E=e.messages;if(n.isPlainObject(e.sharedMessages)){const a=e.sharedMessages;E=Object.keys(a).reduce(((e,t)=>{const l=e[t]||(e[t]={});return n.assign(l,a[t]),e}),E||{})}const{__i18n:O,__root:T,__injectWithOption:d}=e,L=e.datetimeFormats,N=e.numberFormats;return{locale:a,fallbackLocale:t,messages:E,flatJson:e.flatJson,datetimeFormats:L,numberFormats:N,missing:l,missingWarn:s,fallbackWarn:o,fallbackRoot:i,fallbackFormat:c,modifiers:m,pluralRules:g,postTranslation:f,warnHtmlMessage:p,escapeParameter:v,messageResolver:e.messageResolver,inheritLocale:b,__i18n:O,__root:T,__injectWithOption:d}}(e)),t={
// id
id:a.id,
// locale
get locale(){return a.locale.value},set locale(e){a.locale.value=e},
// fallbackLocale
get fallbackLocale(){return a.fallbackLocale.value},set fallbackLocale(e){a.fallbackLocale.value=e},
// messages
get messages(){return a.messages.value},
// datetimeFormats
get datetimeFormats(){return a.datetimeFormats.value},
// numberFormats
get numberFormats(){return a.numberFormats.value},
// availableLocales
get availableLocales(){return a.availableLocales},
// formatter
get formatter(){return n.warn(_(u.NOT_SUPPORTED_FORMATTER)),{interpolate:()=>[]}},set formatter(e){n.warn(_(u.NOT_SUPPORTED_FORMATTER))},
// missing
get missing(){return a.getMissingHandler()},set missing(e){a.setMissingHandler(e)},
// silentTranslationWarn
get silentTranslationWarn(){return n.isBoolean(a.missingWarn)?!a.missingWarn:a.missingWarn},set silentTranslationWarn(e){a.missingWarn=n.isBoolean(e)?!e:e},
// silentFallbackWarn
get silentFallbackWarn(){return n.isBoolean(a.fallbackWarn)?!a.fallbackWarn:a.fallbackWarn},set silentFallbackWarn(e){a.fallbackWarn=n.isBoolean(e)?!e:e},
// modifiers
get modifiers(){return a.modifiers},
// formatFallbackMessages
get formatFallbackMessages(){return a.fallbackFormat},set formatFallbackMessages(e){a.fallbackFormat=e},
// postTranslation
get postTranslation(){return a.getPostTranslationHandler()},set postTranslation(e){a.setPostTranslationHandler(e)},
// sync
get sync(){return a.inheritLocale},set sync(e){a.inheritLocale=e},
// warnInHtmlMessage
get warnHtmlInMessage(){return a.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){a.warnHtmlMessage="off"!==e},
// escapeParameterHtml
get escapeParameterHtml(){return a.escapeParameter},set escapeParameterHtml(e){a.escapeParameter=e},
// preserveDirectiveContent
get preserveDirectiveContent(){return n.warn(_(u.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(e){n.warn(_(u.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},
// pluralizationRules
get pluralizationRules(){return a.pluralRules||{}},
// for internal
__composer:a,
// t
t(...e){const[t,l,r]=e,s={};let o=null,i=null;if(!n.isString(t))throw v(p.INVALID_ARGUMENT);const c=t;return n.isString(l)?s.locale=l:n.isArray(l)?o=l:n.isPlainObject(l)&&(i=l),n.isArray(r)?o=r:n.isPlainObject(r)&&(i=r),Reflect.apply(a.t,a,[c,o||i||{},s])},rt:(...e)=>Reflect.apply(a.rt,a,[...e]),
// tc
tc(...e){const[t,l,r]=e,s={plural:1};let o=null,i=null;if(!n.isString(t))throw v(p.INVALID_ARGUMENT);const c=t;return n.isString(l)?s.locale=l:n.isNumber(l)?s.plural=l:n.isArray(l)?o=l:n.isPlainObject(l)&&(i=l),n.isString(r)?s.locale=r:n.isArray(r)?o=r:n.isPlainObject(r)&&(i=r),Reflect.apply(a.t,a,[c,o||i||{},s])},
// te
te:(e,t)=>a.te(e,t),
// tm
tm:e=>a.tm(e),
// getLocaleMessage
getLocaleMessage:e=>a.getLocaleMessage(e),
// setLocaleMessage
setLocaleMessage(e,t){a.setLocaleMessage(e,t)},
// mergeLocaleMessage
mergeLocaleMessage(e,t){a.mergeLocaleMessage(e,t)},
// d
d:(...e)=>Reflect.apply(a.d,a,[...e]),
// getDateTimeFormat
getDateTimeFormat:e=>a.getDateTimeFormat(e),
// setDateTimeFormat
setDateTimeFormat(e,t){a.setDateTimeFormat(e,t)},
// mergeDateTimeFormat
mergeDateTimeFormat(e,t){a.mergeDateTimeFormat(e,t)},
// n
n:(...e)=>Reflect.apply(a.n,a,[...e]),
// getNumberFormat
getNumberFormat:e=>a.getNumberFormat(e),
// setNumberFormat
setNumberFormat(e,t){a.setNumberFormat(e,t)},
// mergeNumberFormat
mergeNumberFormat(e,t){a.mergeNumberFormat(e,t)},
// getChoiceIndex
// eslint-disable-next-line @typescript-eslint/no-unused-vars
getChoiceIndex:(e,a)=>(n.warn(_(u.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1),
// for internal
__onComponentInstanceCreated(a){const{componentInstanceCreatedListener:l}=e;l&&l(a,t)},__enableEmitter:e=>{const t=a;t[d]&&t[d](e)},__disableEmitter:()=>{const e=a;e[L]&&e[L]()}};return t}}const w={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,
// NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
validator:e=>"parent"===e||"global"===e,default:"parent"
/* ComponetI18nScope */},i18n:{type:Object}};function j(e){return s.Fragment}const V=
/* defineComponent */{
/* eslint-disable */
name:"i18n-t",props:n.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],
// eslint-disable-next-line @typescript-eslint/no-explicit-any
validator:e=>n.isNumber(e)||!isNaN(e)}},w),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const{slots:t,attrs:l}=a,r=e.i18n||z({useScope:e.scope,__useComponent:!0});return()=>{const o=Object.keys(t).filter((e=>"_"!==e)),i={};e.locale&&(i.locale=e.locale),void 0!==e.plural&&(i.plural=n.isString(e.plural)?+e.plural:e.plural);const c=function({slots:e},a){if(1===a.length&&"default"===a[0])return(e.default?e.default():[]).reduce(((e,a)=>[...e,...n.isArray(a.children)?a.children:[a]]),[]);return a.reduce(((a,t)=>{const l=e[t];return l&&(a[t]=l()),a}),{})}(a,o),u=r[E](e.keypath,c,i),m=n.assign({},l),_=n.isString(e.tag)||n.isObject(e.tag)?e.tag:j();return s.h(_,m,u)}}};function H(e,a,t,l){const{slots:r,attrs:o}=a;return()=>{const a={part:!0};let i={};e.locale&&(a.locale=e.locale),n.isString(e.format)?a.key=e.format:n.isObject(e.format)&&(n.isString(e.format.key)&&(a.key=e.format.key),i=Object.keys(e.format).reduce(((a,l)=>t.includes(l)?n.assign({},a,{[l]:e.format[l]}):a),{}));const c=l(e.value,a,i);let u=[a.key];n.isArray(c)?u=c.map(((e,a)=>{const t=r[e.type],l=t?t({[e.type]:e.value,index:a,parts:c}):[e.value];var s;return s=l,n.isArray(s)&&!n.isString(s[0])&&(l[0].key=`${e.type}-${a}`),l})):n.isString(c)&&(u=[c]);const m=n.assign({},o),_=n.isString(e.tag)||n.isObject(e.tag)?e.tag:j();return s.h(_,m,u)}}const B=
/* defineComponent */{
/* eslint-disable */
name:"i18n-n",props:n.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},w),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||z({useScope:"parent",__useComponent:!0});return H(e,a,r.NUMBER_FORMAT_OPTIONS_KEYS,((...e)=>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[T](...e)))}},$=
/*defineComponent */{
/* eslint-disable */
name:"i18n-d",props:n.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},w),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||z({useScope:"parent",__useComponent:!0});return H(e,a,r.DATETIME_FORMAT_OPTIONS_KEYS,((...e)=>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[O](...e)))}};function G(e){const a=a=>{const{instance:t,modifiers:l,value:r}=a;if(!t||!t.$)throw v(p.UNEXPECTED_ERROR);const s=function(e,a){const t=e;if("composition"===e.mode)return t.__getInstance(a)||e.global;{const l=t.__getInstance(a);return null!=l?l.__composer:e.global.__composer}}(e,t.$);l.preserve&&n.warn(_(u.NOT_SUPPORTED_PRESERVE));const o=x(r);return[Reflect.apply(s.t,s,[...Y(o)]),s]};return{created:(t,l)=>{const[r,o]=a(l);n.inBrowser&&e.global===o&&(t.__i18nWatcher=s.watch(o.locale,(()=>{l.instance&&l.instance.$forceUpdate()}))),t.__composer=o,t.textContent=r},unmounted:e=>{n.inBrowser&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:a})=>{if(e.__composer){const t=e.__composer,l=x(a);e.textContent=Reflect.apply(t.t,t,[...Y(l)])}},getSSRProps:e=>{const[t]=a(e);return{textContent:t}}}}function x(e){if(n.isString(e))return{path:e};if(n.isPlainObject(e)){if(!("path"in e))throw v(p.REQUIRED_VALUE,"path");return e}throw v(p.INVALID_VALUE)}function Y(e){const{path:a,locale:t,args:l,choice:r,plural:s}=e,o={},i=l||{};return n.isString(t)&&(o.locale=t),n.isNumber(r)&&(o.plural=r),n.isNumber(s)&&(o.plural=s),[a,i,o]}function X(e,a){e.locale=a.locale||e.locale,e.fallbackLocale=a.fallbackLocale||e.fallbackLocale,e.missing=a.missing||e.missing,e.silentTranslationWarn=a.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=a.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=a.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=a.postTranslation||e.postTranslation,e.warnHtmlInMessage=a.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=a.escapeParameterHtml||e.escapeParameterHtml,e.sync=a.sync||e.sync,e.__composer[N](a.pluralizationRules||e.pluralizationRules);const t=P(e.locale,{messages:a.messages,__i18n:a.__i18n});return Object.keys(t).forEach((a=>e.mergeLocaleMessage(a,t[a]))),a.datetimeFormats&&Object.keys(a.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,a.datetimeFormats[t]))),a.numberFormats&&Object.keys(a.numberFormats).forEach((t=>e.mergeNumberFormat(t,a.numberFormats[t]))),e}const K=n.makeSymbol("global-vue-i18n");function z(e={}){const a=s.getCurrentInstance();if(null==a)throw v(p.MUST_BE_CALL_SETUP_TOP);if(!a.isCE&&null!=a.appContext.app&&!a.appContext.app.__VUE_I18N_SYMBOL__)throw v(p.NOT_INSLALLED);const t=function(e){{const a=s.inject(e.isCE?K:e.appContext.app.__VUE_I18N_SYMBOL__);if(!a)throw v(e.isCE?p.NOT_INSLALLED_WITH_PROVIDE:p.UNEXPECTED_ERROR);return a}}(a),l=function(e){return"composition"===e.mode?e.global:e.global.__composer}(t),o=h(a),i=function(e,a){return n.isEmptyObject(e)?"__i18n"in a?"local":"global":e.useScope?e.useScope:"local"}(e,o);if("legacy"===t.mode&&!e.__useComponent){if(!t.allowComposition)throw v(p.NOT_AVAILABLE_IN_LEGACY_MODE);return function(e,a,t,l={}){const o="local"===a,i=s.shallowRef(null);if(o&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw v(p.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const c=!n.isBoolean(l.inheritLocale)||l.inheritLocale,u=s.ref(
// prettier-ignore
o&&c?t.locale.value:n.isString(l.locale)?l.locale:r.DEFAULT_LOCALE),m=s.ref(
// prettier-ignore
o&&c?t.fallbackLocale.value:n.isString(l.fallbackLocale)||n.isArray(l.fallbackLocale)||n.isPlainObject(l.fallbackLocale)||!1===l.fallbackLocale?l.fallbackLocale:u.value),_=s.ref(P(u.value,l)),g=s.ref(n.isPlainObject(l.datetimeFormats)?l.datetimeFormats:{[u.value]:{}}),f=s.ref(n.isPlainObject(l.numberFormats)?l.numberFormats:{[u.value]:{}}),b=o?t.missingWarn:!n.isBoolean(l.missingWarn)&&!n.isRegExp(l.missingWarn)||l.missingWarn,E=o?t.fallbackWarn:!n.isBoolean(l.fallbackWarn)&&!n.isRegExp(l.fallbackWarn)||l.fallbackWarn,O=o?t.fallbackRoot:!n.isBoolean(l.fallbackRoot)||l.fallbackRoot,T=!!l.fallbackFormat,d=n.isFunction(l.missing)?l.missing:null,L=n.isFunction(l.postTranslation)?l.postTranslation:null,N=o?t.warnHtmlMessage:!n.isBoolean(l.warnHtmlMessage)||l.warnHtmlMessage,R=!!l.escapeParameter,I=o?t.modifiers:n.isPlainObject(l.modifiers)?l.modifiers:{},k=l.pluralRules||o&&t.pluralRules;function F(){return[u.value,m.value,_.value,g.value,f.value]}const h=s.computed({get:()=>i.value?i.value.locale.value:u.value,set:e=>{i.value&&(i.value.locale.value=e),u.value=e}}),y=s.computed({get:()=>i.value?i.value.fallbackLocale.value:m.value,set:e=>{i.value&&(i.value.fallbackLocale.value=e),m.value=e}}),A=s.computed((()=>i.value?i.value.messages.value:_.value)),S=s.computed((()=>g.value)),M=s.computed((()=>f.value));function C(){return i.value?i.value.getPostTranslationHandler():L}function D(e){i.value&&i.value.setPostTranslationHandler(e)}function U(){return i.value?i.value.getMissingHandler():d}function W(e){i.value&&i.value.setMissingHandler(e)}function w(e){return F(),e()}function j(...e){return i.value?w((()=>Reflect.apply(i.value.t,null,[...e]))):w((()=>""))}function V(...e){return i.value?Reflect.apply(i.value.rt,null,[...e]):""}function H(...e){return i.value?w((()=>Reflect.apply(i.value.d,null,[...e]))):w((()=>""))}function B(...e){return i.value?w((()=>Reflect.apply(i.value.n,null,[...e]))):w((()=>""))}function $(e){return i.value?i.value.tm(e):{}}function G(e,a){return!!i.value&&i.value.te(e,a)}function x(e){return i.value?i.value.getLocaleMessage(e):{}}function Y(e,a){i.value&&(i.value.setLocaleMessage(e,a),_.value[e]=a)}function X(e,a){i.value&&i.value.mergeLocaleMessage(e,a)}function K(e){return i.value?i.value.getDateTimeFormat(e):{}}function z(e,a){i.value&&(i.value.setDateTimeFormat(e,a),g.value[e]=a)}function q(e,a){i.value&&i.value.mergeDateTimeFormat(e,a)}function J(e){return i.value?i.value.getNumberFormat(e):{}}function Q(e,a){i.value&&(i.value.setNumberFormat(e,a),f.value[e]=a)}function Z(e,a){i.value&&i.value.mergeNumberFormat(e,a)}const ee={get id(){return i.value?i.value.id:-1},locale:h,fallbackLocale:y,messages:A,datetimeFormats:S,numberFormats:M,get inheritLocale(){return i.value?i.value.inheritLocale:c},set inheritLocale(e){i.value&&(i.value.inheritLocale=e)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(_.value)},get modifiers(){return i.value?i.value.modifiers:I},get pluralRules(){return i.value?i.value.pluralRules:k},get isGlobal(){return!!i.value&&i.value.isGlobal},get missingWarn(){return i.value?i.value.missingWarn:b},set missingWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackWarn(){return i.value?i.value.fallbackWarn:E},set fallbackWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackRoot(){return i.value?i.value.fallbackRoot:O},set fallbackRoot(e){i.value&&(i.value.fallbackRoot=e)},get fallbackFormat(){return i.value?i.value.fallbackFormat:T},set fallbackFormat(e){i.value&&(i.value.fallbackFormat=e)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:N},set warnHtmlMessage(e){i.value&&(i.value.warnHtmlMessage=e)},get escapeParameter(){return i.value?i.value.escapeParameter:R},set escapeParameter(e){i.value&&(i.value.escapeParameter=e)},t:j,getPostTranslationHandler:C,setPostTranslationHandler:D,getMissingHandler:U,setMissingHandler:W,rt:V,d:H,n:B,tm:$,te:G,getLocaleMessage:x,setLocaleMessage:Y,mergeLocaleMessage:X,getDateTimeFormat:K,setDateTimeFormat:z,mergeDateTimeFormat:q,getNumberFormat:J,setNumberFormat:Q,mergeNumberFormat:Z};function ae(e){e.locale.value=u.value,e.fallbackLocale.value=m.value,Object.keys(_.value).forEach((a=>{e.mergeLocaleMessage(a,_.value[a])})),Object.keys(g.value).forEach((a=>{e.mergeDateTimeFormat(a,g.value[a])})),Object.keys(f.value).forEach((a=>{e.mergeNumberFormat(a,f.value[a])})),e.escapeParameter=R,e.fallbackFormat=T,e.fallbackRoot=O,e.fallbackWarn=E,e.missingWarn=b,e.warnHtmlMessage=N}return s.onBeforeMount((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw v(p.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const t=i.value=e.proxy.$i18n.__composer;"global"===a?(u.value=t.locale.value,m.value=t.fallbackLocale.value,_.value=t.messages.value,g.value=t.datetimeFormats.value,f.value=t.numberFormats.value):o&&ae(t)})),ee}(a,i,l,e)}if("global"===i)return y(l,e,o),l;if("parent"===i){let r=function(e,a,t=!1){let l=null;const n=a.root;let r=a.parent;for(;null!=r;){const a=e;if("composition"===e.mode)l=a.__getInstance(r);else{const e=a.__getInstance(r);null!=e&&(l=e.__composer,t&&l&&!l[R]&&(l=null))}if(null!=l)break;if(n===r)break;r=r.parent}return l}(t,a,e.__useComponent);return null==r&&(n.warn(_(u.NOT_FOUND_PARENT_SCOPE)),r=l),r}const c=t;let m=c.__getInstance(a);if(null==m){const t=n.assign({},e);"__i18n"in o&&(t.__i18n=o.__i18n),l&&(t.__root=l),m=U(t),function(e,a,t){s.onMounted((()=>{}),a),s.onUnmounted((()=>{e.__deleteInstance(a)}),a)}(c,a),c.__setInstance(a,m)}return m}const q=["locale","fallbackLocale","availableLocales"],J=["t","rt","d","n","tm"];r.registerMessageCompiler(r.compileToFunction),r.registerMessageResolver(r.resolveValue),r.registerLocaleFallbacker(r.fallbackWithLocaleChain);{const e=n.getGlobalThis();e.__INTLIFY__=!0,r.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}l.DatetimeFormat=$,l.I18nInjectionKey=K,l.NumberFormat=B,l.Translation=V,l.VERSION=o,l.castToVueI18n=e=>{if(!("__VUE_I18N_BRIDGE__"in e))throw v(p.NOT_COMPATIBLE_LEGACY_VUE_I18N);return e};var Q=l.createI18n=function(e={},a){const t=!n.isBoolean(e.legacy)||e.legacy,l=!n.isBoolean(e.globalInjection)||e.globalInjection,r=!t||!!e.allowComposition,o=new Map,[i,c]=function(e,a,t){const l=s.effectScope();{const t=a?l.run((()=>W(e))):l.run((()=>U(e)));if(null==t)throw v(p.UNEXPECTED_ERROR);return[l,t]}}(e,t),m=n.makeSymbol("vue-i18n");{const e={
// mode
get mode(){return t?"legacy":"composition"},
// allowComposition
get allowComposition(){return r},
// install plugin
async install(a,...r){a.__VUE_I18N_SYMBOL__=m,a.provide(a.__VUE_I18N_SYMBOL__,e),!t&&l&&function(e,a){const t=Object.create(null);q.forEach((e=>{const l=Object.getOwnPropertyDescriptor(a,e);if(!l)throw v(p.UNEXPECTED_ERROR);const n=s.isRef(l.value)?{get:()=>l.value.value,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
set(e){l.value.value=e}}:{get:()=>l.get&&l.get()};Object.defineProperty(t,e,n)})),e.config.globalProperties.$i18n=t,J.forEach((t=>{const l=Object.getOwnPropertyDescriptor(a,t);if(!l||!l.value)throw v(p.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,l)}))}(a,e.global),function(e,a,...t){const l=n.isPlainObject(t[0])?t[0]:{},r=!!l.useI18nComponentName,s=!n.isBoolean(l.globalInstall)||l.globalInstall;s&&r&&n.warn(_(u.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:V.name})),s&&(e.component(r?"i18n":V.name,V),e.component(B.name,B),e.component($.name,$)),e.directive("t",G(a))}(a,e,...r),t&&a.mixin(function(e,a,t){return{beforeCreate(){const l=s.getCurrentInstance();if(!l)throw v(p.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const t=n.i18n;n.__i18n&&(t.__i18n=n.__i18n),t.__root=a,this===this.$root?this.$i18n=X(e,t):(t.__injectWithOption=!0,this.$i18n=W(t))}else n.__i18n?this===this.$root?this.$i18n=X(e,n):this.$i18n=W({__i18n:n.__i18n,__injectWithOption:!0,__root:a}):this.$i18n=e;n.__i18nGlobal&&y(a,n,n),e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(l,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,a)=>this.$i18n.te(e,a),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){},unmounted(){const e=s.getCurrentInstance();if(!e)throw v(p.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(e),delete this.$i18n}}}(c,c.__composer,e));const o=a.unmount;a.unmount=()=>{e.dispose(),o()}},
// global accessor
get global(){return c},dispose(){i.stop()},
// @internal
__instances:o,
// @internal
__getInstance:function(e){return o.get(e)||null},
// @internal
__setInstance:function(e,a){o.set(e,a)},
// @internal
__deleteInstance:function(e){o.delete(e)}};return e}},Z=l.useI18n=z;l.vTDirective=G;export{Q as c,Z as u};
