<template>
  <t-adaptive-page
    :opts="opts"
    @submit="conditionEnter"
    title="模块表单组件列表"
    isCopy
    isExpansion
    :table="state.table"
    :columns="state.table.columns"
    :isPaginationCumulative="isPaginationCumulative"
    @selection-change="selectionChange"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
  >
    <template #toolbar>
      <el-button type="primary" @click="handleTableAdd">{{
        state.table.firstColumn ? "清除复选序列号" : "新增复选序列号"
      }}</el-button>
      <el-button type="primary" @click="isPaginationCumulative = !isPaginationCumulative"
        >序列号翻页{{ !isPaginationCumulative ? "累加" : "不累加" }}</el-button
      >
      <el-button type="primary" @click="handleAdd">新增</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="moduleFormDemo">
import { useAdaptivePage } from "./useAdaptivePage";
const {
  handlesSizeChange,
  handlesCurrentChange,
  getData,
  getPost,
  getRoles,
  treeselect,
  selectionChange,
  conditionEnter,
  handleAdd,
  handleTableAdd,
  state,
  opts
} = useAdaptivePage();
const isPaginationCumulative = ref(false);

onMounted(() => {
  getData();
  treeselect();
  getPost();
  getRoles();
});
</script>
