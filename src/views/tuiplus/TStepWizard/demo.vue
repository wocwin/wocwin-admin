<template>
  <t-layout-page class="element_plus_demo">
    <t-layout-page-item>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" />
      </el-steps>

      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </t-layout-page-item>
  </t-layout-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};
</script>
