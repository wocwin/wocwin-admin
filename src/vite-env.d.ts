/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "jsencrypt/bin/jsencrypt";
declare module "@wocwin/t-ui-plus";
declare module "element-china-area-data";
declare interface Window {
  AMap: any;
}
