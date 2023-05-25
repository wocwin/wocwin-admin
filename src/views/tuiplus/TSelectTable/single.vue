<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-select-table
        :table="state.table"
        :columns="state.table.columns"
        :max-height="400"
        :keywords="{ label: 'materialName', value: 'materialCode' }"
        @radio-change="radioChange"
        placeholder="请选择（单选）"
      ></t-select-table>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import DataList from "./getData.json";
const state: any = reactive({
  table: {
    data: [],
    columns: [
      { label: "物料编号", width: "100px", prop: "materialCode" },
      { label: "物料名称", width: "149px", prop: "materialName" }
    ]
  }
});
const radioChange = (row: any) => {
  console.log("单选--传给后台的值", row);
};
// const { proxy } = getCurrentInstance() as any;
// 获取下拉数据数据
const getList = async () => {
  // const res = await proxy.$api.materialList();
  const res = await DataList;
  if (res.success) {
    // console.log('获取接口数据', res.data.records)
    state.table.data = res.data.records;
  }
};
onMounted(() => {
  getList();
});
</script>
