<template>
  <t-adaptive-page
    :opts="opts"
    @submit="conditionEnter"
    table-title="模块表单组件列表(禁用登录名不为2个字符的复选框)"
    isCopy
    isExpansion
    :table="table"
    :columns="table.columns"
    :isPaginationCumulative="isPaginationCumulative"
    @selection-change="selectionChange"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
  >
    <template #toolbar>
      <el-button type="primary" @click="handleTableAdd">{{ table.firstColumn ? "清除复选序列号" : "新增复选序列号" }}</el-button>
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
  conditionEnter,
  handleAdd,
  handleTableAdd,
  selectionChange,
  table,
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
