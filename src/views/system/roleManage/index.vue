<template>
  <t-adaptive-page
    title="角色管理列表"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    @selection-change="selectionChange"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
    :opts="opts"
    @submit="conditionEnter"
  >
    <template #toolbar>
      <el-button type="primary">新增</el-button>
      <el-button type="danger" :disabled="state.roleIds.length < 1">批量删除</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="roleManageList">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const state: any = reactive({
  roleIds: [],
  queryData: {
    roleName: undefined, // 角色名称
    roleKey: undefined, // 权限字符
    date: null
  },
  table: {
    currentPage: 1,
    pageSize: 15,
    total: 0,
    firstColumn: { type: "selection" },
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      { prop: "roleName", label: "角色名称", minWidth: 120 },
      { prop: "roleKey", label: "权限字符", minWidth: 120 },
      { prop: "createTime", label: "创建时间", minWidth: 140 },
      {
        prop: "status",
        label: "状态",
        render: (text: any, row: any) => {
          return (
            <el-switch
              active-value={true}
              v-model={row.status}
              inactive-value={false}
              onChange={() => handleStatusChange(row)}
            ></el-switch>
          );
        }
      }
    ],
    operator: [
      {
        text: "编辑"
        // fun: edit
      },
      {
        text: "重置密码"
        // fun: resetHandle
      },
      {
        text: "删除"
        // fun: handleDelete
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      width: "180",
      label: "操作"
    }
  }
});

const opts = computed(() => {
  return {
    roleName: {
      label: "角色名称",
      comp: "el-input"
    },
    roleKey: {
      label: "权限字符",
      comp: "el-input"
    },
    date: {
      label: "创建时间",
      comp: "t-date-picker",
      span: 2,
      bind: {
        type: "datetimerange"
      }
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { roleName, roleKey, date } = toRefs(state.queryData);
  return {
    roleName: roleName.value,
    roleKey: roleKey.value,
    beginTime: date.value && date.value[0] ? date.value[0] : null,
    endTime: date.value && date.value[1] ? date.value[1] : null,
    pageNum: state.table.currentPage,
    pageSize: state.table.pageSize
  };
});

const handleStatusChange = (row: any) => {
  console.log("点击状态", row);
};
// 点击查询按钮
const conditionEnter = (data: any) => {
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
  getData();
};
// 复选框选中
const selectionChange = (data: any[]) => {
  console.log("复选框选中", data);
  state.ids = data.map((item: { operId: any }) => item.operId);
};
onMounted(() => {
  getData();
});
// 获取菜单数据
const getData = async () => {
  const res = await proxy.$api.roleList(getQueryData.value);
  if (res.success) {
    state.table.data = res.data.rows;
    state.table.total = res.data.total;
  }
};
// 页面大小
const handlesSizeChange = (val: any) => {
  state.table.pageSize = val;
  getData();
};
// 页码
const handlesCurrentChange = (val: any) => {
  state.table.currentPage = val;
  getData();
};
</script>
