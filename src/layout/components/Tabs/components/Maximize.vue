<template>
  <el-divider direction="vertical" />
  <div @click="maximize" class="tabs_icon">
    <el-tooltip effect="dark" :content="$t('tabs.maximize')" placement="bottom">
      <el-icon><FullScreen /></el-icon>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store/modules/global";
const globalStore = useGlobalStore();
// maximize current page
const maximize = () => {
  globalStore.setGlobalState("maximize", true);
};
</script>
