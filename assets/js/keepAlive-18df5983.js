import{d as s}from"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-d6789b52.js";import{r as e,p as t}from"./index-0b3c0e79.js";const a=s({id:"wocwin-tabs",state:()=>({tabsMenuList:[]}),actions:{
// Add Tabs
async addTabs(s){this.tabsMenuList.every((e=>e.path!==s.path))&&this.tabsMenuList.push(s)},
// Remove Tabs
async removeTabs(s,t=!0){const a=this.tabsMenuList;t&&a.forEach(((t,i)=>{if(t.path!==s)return;const n=a[i+1]||a[i-1];n&&e.push(n.path)})),this.tabsMenuList=a.filter((e=>e.path!==s))},
// Close MultipleTab
async closeMultipleTab(s){this.tabsMenuList=this.tabsMenuList.filter((e=>e.path===s||!e.close))},
// Set Tabs
async setTabs(s){this.tabsMenuList=s},
// Set Tabs Title
async setTabsTitle(s){const e=location.hash.substring(1);this.tabsMenuList.forEach((t=>{t.path==e&&(t.title=s)}))}},persist:t("wocwin-tabs")}),i=s({id:"wocwin-keepAlive",state:()=>({keepAliveName:[]}),actions:{
// Add KeepAliveName
async addKeepAliveName(s){!this.keepAliveName.includes(s)&&this.keepAliveName.push(s)},
// Remove KeepAliveName
async removeKeepAliveName(s){this.keepAliveName=this.keepAliveName.filter((e=>e!==s))},
// Set KeepAliveName
async setKeepAliveName(s=[]){this.keepAliveName=s}}});export{i as a,a as u};
