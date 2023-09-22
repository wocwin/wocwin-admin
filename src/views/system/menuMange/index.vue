<template>
  <t-adaptive-page
    class="menu_mange"
    title="菜单管理页面"
    row-key="path"
    isTree
    :table="state.table"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    :columns="state.table.columns"
    :isShowPagination="false"
    :opts="opts"
    @submit="conditionEnter"
    height="100%"
  >
    <template #toolbar>
      <el-button type="primary">新增</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="menuMange">
import { ElMessageBox, ElMessage } from "element-plus";
import TIcon from "./TIcon.vue";
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const handleDelete = (row: any) => {
  console.log("点击删除", row);
  ElMessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      ElMessage.success({
        message: "删除成功!"
      });
    })
    .catch(() => {
      ElMessage.info({
        message: "已取消删除"
      });
    });
};
const state: any = reactive({
  queryData: {
    title: null, // 菜单名称
    path: null // 菜单路径
  },
  table: {
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      {
        label: "菜单名称",
        render: (text: any, row: any) => {
          return <div>{row.meta.title}</div>;
        },
        minWidth: 180
      },
      {
        label: "菜单图标",
        render: (text: any, row: any) => {
          return <TIcon icon={row.meta.icon}></TIcon>;
        },
        minWidth: 80
      },
      { prop: "name", label: "菜单 name", minWidth: 180 },
      { prop: "path", label: "菜单路径", minWidth: 180 },
      { prop: "component", label: "组件路径", minWidth: 180 }
    ],
    operator: [
      {
        text: "新增"
        // fun: handleAdd
      },
      {
        text: "编辑"
        // fun: edit
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
    title: {
      label: "菜单名称",
      comp: "el-input"
    },
    path: {
      label: "菜单路径",
      comp: "el-input"
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { title, path } = toRefs(state.queryData);
  return {
    title: title.value,
    path: path.value
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
};
onMounted(() => {
  getMenuData();
});
// 获取菜单数据
const getMenuData = async () => {
  const res = await proxy.$api.getRouters();
  // console.log(999, res);
  if (res.success) {
    state.table.data = res.data;
  }
};
</script>
<style lang="scss" scoped>
.menu_mange {
  :deep(.t-table) {
    .el-table__header-wrapper {
      .el-table__header {
        thead {
          .cell {
            text-align: left;
          }
        }
      }
    }
    .el-table__cell > .cell {
      padding-left: 14px;
      padding-right: 20px;
    }
  }
}
</style>
