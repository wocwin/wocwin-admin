<template>
  <t-layout-page>
    <t-layout-page-item>
      <span class="text">我是menu1</span>
      <el-input v-model="value" placeholder="测试缓存"></el-input>
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="ts" name="menu1">
import { ref } from "vue";
const value = ref<string>("");
</script>
