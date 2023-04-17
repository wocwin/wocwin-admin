<template>
  <div class="theme-setting" style="cursor: pointer">
    <i :class="'iconfont icon-theme'" class="toolBar-icon" @click="openDrawer"></i>
  </div>
</template>

<script setup lang="ts">
import mittBus from "@/utils/mittBus";
const openDrawer = () => {
  mittBus.emit("openThemeDrawer");
};
</script>
