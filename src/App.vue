<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";
const isRouterAlive = ref(true);
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
