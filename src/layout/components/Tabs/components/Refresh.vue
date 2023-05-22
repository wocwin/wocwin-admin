<template>
  <el-divider direction="vertical" />
  <div @click="refresh" class="tabs_icon">
    <el-tooltip effect="dark" :content="$t('tabs.refresh')" placement="bottom">
      <el-icon><Refresh /></el-icon>
    </el-tooltip>
  </div>
  <el-divider direction="vertical" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
const route = useRoute();
const keepAliveStore = useKeepAliveStore();
// refresh current page
const refreshCurrentPage: Function = inject("refresh") as Function;
const refresh = () => {
  setTimeout(() => {
    keepAliveStore.removeKeepAliveName(route.name as string);
    refreshCurrentPage(false);
    nextTick(() => {
      keepAliveStore.addKeepAliveName(route.name as string);
      refreshCurrentPage(true);
    });
  }, 0);
};
</script>
