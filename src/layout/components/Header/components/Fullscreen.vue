<template>
  <div class="fullscreen icon_full">
    <i :class="['iconfont', isFullscreen ? 'icon-exitfullscreen' : 'icon-fullscreen']" class="toolBar-icon" @click="toggle"></i>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>

<style scoped lang="scss">
.icon_full {
  cursor: pointer;
}
</style>
