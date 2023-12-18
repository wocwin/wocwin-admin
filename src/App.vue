<template>
  <div id="app">
    <el-watermark class="water_mark" v-if="isWatermark" :font="font" :content="['wocwin', 'Wocwin-Admin']">
      <router-view v-if="isRouterAlive" />
    </el-watermark>
    <template v-else>
      <router-view v-if="isRouterAlive" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/store/modules/global";
import { useTheme } from "@/hooks/useTheme";
const globalStore = useGlobalStore();
const { isDark } = storeToRefs(globalStore);
const isRouterAlive = ref(true);
const isWatermark = computed(() => globalStore.isWatermark);
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
const font = reactive({
  color: "rgba(0, 0, 0, .15)"
});

watch(
  isDark,
  () => {
    font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
  },
  {
    immediate: true
  }
);
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
  .water_mark {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-variant: tabular-nums;
    color: var(--el-text-color-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
