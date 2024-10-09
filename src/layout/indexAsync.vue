<template>
  <suspense>
    <template #default>
      <el-watermark class="water_mark" v-if="isWatermark" :font="font" :content="['wocwin', 'Wocwin-Admin']">
        <component :is="LayoutComponents[layout]" />
      </el-watermark>
      <template v-else>
        <component :is="LayoutComponents[layout]" />
      </template>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </suspense>
  <ThemeDrawer />
</template>

<script setup lang="ts" name="layoutAsync">
import { computed, defineAsyncComponent, type Component } from "vue";
import { LayoutType } from "@/store/interface";
import { useGlobalStore } from "@/store/modules/global";
import Loading from "@/components/Loading/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: defineAsyncComponent(() => import("./LayoutVertical/index.vue")),
  classic: defineAsyncComponent(() => import("./LayoutClassic/index.vue")),
  transverse: defineAsyncComponent(() => import("./LayoutTransverse/index.vue")),
  columns: defineAsyncComponent(() => import("./LayoutColumns/index.vue"))
};
const globalStore = useGlobalStore();
const font = reactive({
  color: "rgba(0, 0, 0, .15)"
});
const isWatermark = computed(() => globalStore.isWatermark);
const { isDark } = storeToRefs(globalStore);
const layout = computed(() => globalStore.layout);
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

<style scoped lang="scss">
.layout {
  min-width: 730px;
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
</style>
