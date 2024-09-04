<template>
  <el-icon class="t_icon">
    <component :is="icon"></component>
  </el-icon>
</template>
<script setup lang="tsx" name="TIcon">
defineProps({
  icon: {
    type: String,
    required: true
  }
});
</script>
<style lang="scss" scoped>
.t_icon {
  color: var(--el-color-primary);
  width: 20px;
  height: 20px;
  svg {
    width: 18px;
    height: 18px;
  }
}
</style>
