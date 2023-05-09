<template>
  <t-adaptive-page
    title="角色管理列表"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    @selection-change="selectionChange"
    :opts="opts"
    @submit="conditionEnter"
    height="100%"
  >
    <template #toolbar>
      <el-button type="primary">新增</el-button>
      <el-button type="danger" :disabled="state.roleIds.length < 1">批量删除</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="roleManage">
import roleData from "@/views/system/getData/role.json";
const handleDelete = (row: any) => {
  console.log("点击删除", row);
};
const state: any = reactive({
  roleIds: [],
  queryData: {
    roleName: undefined, // 角色名称
    roleKey: undefined, // 权限字符
    beginTime: null, // 创建开始日期
    endTime: null // 创建结束日期
  },
  table: {
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
        text: "删除",
        fun: handleDelete
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      align: "left",
      width: "160",
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
      comp: "el-date-picker",
      span: 2,
      bind: {
        rangeSeparator: "-",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
        valueFormat: "yyyy-MM-dd HH:mm:ss",
        type: "datetimerange"
      }
    }
  };
});
const handleStatusChange = (row: any) => {
  console.log("点击状态", row);
};
// 复选框选中
const selectionChange = (data: any[]) => {
  state.roleIds = data.map((item: { roleId: any }) => item.roleId);
  // console.log(77, this.roleIds)
};
// 最终参数获取
const getQueryData = computed(() => {
  const { roleName, roleKey, date } = state.queryData;
  return {
    roleName,
    roleKey,
    beginTime: date && date[0] ? date[0] : null,
    endTime: date && date[1] ? date[1] : null
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
};
onMounted(() => {
  getData();
});
// 获取菜单数据
const getData = async () => {
  const res = await roleData;
  if (res.success) {
    state.table.data = res?.data.rows;
    state.table.total = res.data.total;
  }
};
</script>
