<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-select-table
        :table="state.table"
        :columns="state.table.columns"
        :max-height="400"
        :keywords="{ label: 'userName', value: 'userId' }"
        multiple
        @selection-change="selectionChange"
        isShowPagination
        @page-change="pageChange"
      ></t-select-table>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="tsx">
import { reactive, onMounted } from "vue";
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const state: any = reactive({
  table: {
    total: 0,
    currentPage: 1,
    pageSize: 10,
    data: [],
    columns: [
      { prop: "userName", label: "登录名", minWidth: "120" },
      { prop: "nickName", label: "插槽使用", minWidth: "120" },
      { prop: "deptName", label: "部门", minWidth: "120" },
      { prop: "roleName", label: "角色", minWidth: "120" },
      { prop: "descript", label: "描述", minWidth: "180" },
      { prop: "createTime", label: "创建时间", minWidth: "180" }
    ]
  }
});
onMounted(() => {
  getData();
});
const getData = async () => {
  const params = {
    pageNum: state.table.currentPage,
    pageSize: state.table.pageSize
  };
  const res = await proxy.$api.getSelectTableList(params);
  if (res.success) {
    state.table.data = res.data.rows;
    state.table.total = res.data.total;
  }
};
// 获取当前的页码
const pageChange = (val: any) => {
  console.log("获取当前的页码", val);
  state.table.currentPage = val;
  getData();
};
const selectionChange = (val: any, ids: any) => {
  console.log("复选框", val);
  console.log("复选框--id", ids);
};
</script>
