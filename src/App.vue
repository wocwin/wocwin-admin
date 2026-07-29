<template>
  <div id="app">
    <el-config-provider :locale="language">
      <router-view v-if="isRouterAlive" />
    </el-config-provider>
  </div>
</template>
<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";
import { useGlobalStore } from "@/store/modules/global";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import plusZhCn from "@wocwin/t-ui-plus/locale/zh-cn";
import plusEn from "@wocwin/t-ui-plus/locale/en";

const zhCnLocales = {
  ...zhCn,
  ...plusZhCn
};
const enLocales = {
  ...en,
  ...plusEn
};

const isRouterAlive = ref(true);
const globalStore = useGlobalStore();
const language = computed(() => (globalStore.language === "zh" ? zhCnLocales : enLocales));
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
// init theme
const { initTheme } = useTheme();
initTheme();
provide("reload", reload);
</script>
<style lang="scss">
body {
  overflow: hidden;
  background-color: var(--el-bg-color-page);
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-variant: tabular-nums;
  color: var(--el-text-color-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .env_tag {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 901;
    padding: 0 6px;
    font-size: 12px;
    color: #ffffff;
    background-color: red;
    border-radius: 0 0 0 4px;
  }
}
</style>
