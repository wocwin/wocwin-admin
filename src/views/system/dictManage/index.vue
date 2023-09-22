<template>
  <t-layout-page style="margin: 0; padding: 0">
    <t-adaptive-page
      title="字典配置列表"
      isCopy
      :table="state.table"
      :columns="state.table.columns"
      @size-change="handlesSizeChange"
      @page-change="handlesCurrentChange"
      @selection-change="selectionChange"
      :opts="opts"
      @submit="conditionEnter"
    >
      <template #toolbar>
        <el-button type="primary">清空</el-button>
        <el-button type="danger" :disabled="state.ids.length < 1">批量删除</el-button>
      </template>
    </t-adaptive-page>
    <el-dialog title="字典数据列表" width="60%" draggable v-model="dictDataDialog">
      <div class="block_wrap quality_overflow">
        <t-table :table="childTable" isCopy :columns="childTable.columns" :isShowPagination="false" />
      </div>
    </el-dialog>
  </t-layout-page>
</template>

<script setup lang="tsx" name="dictManage">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const state: any = reactive({
  ids: [],
  queryData: {
    dictName: null, // 字典名称
    dictType: null, // 字典类型
    status: null, // 字典状态
    createDate: null // 创建时间
  },
  listTypeInfo: {
    statusList: [
      {
        label: "正常",
        key: true
      },
      {
        label: "停用",
        key: false
      }
    ]
  },
  table: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    firstColumn: { type: "selection" },
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      { prop: "dictId", label: "字典编号", minWidth: "140" },
      { prop: "dictName", label: "字典名称", minWidth: "200" },
      {
        prop: "dictType",
        label: "字典类型",
        minWidth: "120",
        render: (text: any, row: any) => {
          return (
            <el-button link type="primary" onclick={() => dictDataClick(row)}>
              {text}
            </el-button>
          );
        }
      },
      {
        prop: "status",
        label: "状态",
        minWidth: "120",
        render: (text: any) => {
          // （1正常 0异常）
          let type = "";
          let val = "";
          switch (text) {
            case 1:
              type = "success";
              val = "正常";
              break;
            case 0:
              type = "danger";
              val = "停用";
              break;
          }
          return <el-tag type={type}>{val}</el-tag>;
        }
      },
      { prop: "createTime", label: "创建时间", minWidth: "160" },
      { prop: "remark", label: "备注", minWidth: "200" }
    ],
    operator: [
      {
        text: "编辑"
        // fun: edit
      },
      {
        text: "删除"
        // fun: edit
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      align: "left",
      width: "120",
      label: "操作"
    }
  }
});

const opts = computed(() => {
  return {
    dictName: {
      label: "字典名称",
      comp: "el-input"
    },
    dictType: {
      label: "字典类型",
      comp: "el-input"
    },
    createDate: {
      label: "创建时间",
      comp: "t-date-picker",
      span: 2,
      bind: {
        type: "datetimerange"
      }
    },
    status: {
      label: "状态",
      comp: "t-select",
      bind: {
        optionSource: state.listTypeInfo.statusList
      }
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { dictName, dictType, status, createDate } = toRefs(state.queryData);
  return {
    dictName: dictName.value, // 字典名称
    dictType: dictType.value, // 字典类型
    status: status.value, // 字典状态
    beginTime: createDate.value && createDate.value[0] ? createDate.value[0] : null,
    endTime: createDate.value && createDate.value[1] ? createDate.value[1] : null,
    pageNum: state.table.currentPage,
    pageSize: state.table.pageSize
  };
});
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
  const res = await proxy?.$api.dictList(getQueryData.value);
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
/**
 * 弹窗数据
 */
const dictDataClick = (row: any) => {
  console.log("点击字典类型", row);
  dictDataDialog.value = true;
  getChildData();
};
const dictDataDialog = ref(false);
const childTable: any = ref({
  data: [],
  operator: [
    {
      text: "编辑"
      // fun: this.edit
    },
    {
      text: "删除"
      // fun: this.handleDelete,
    }
  ],
  // 操作列样式
  operatorConfig: {
    fixed: "right", // 固定列表右边（left则固定在左边）
    width: 160,
    label: "操作"
  },
  columns: [
    { prop: "dictCode", label: "字典编码", minWidth: "140", fixed: true },
    { prop: "dictLabel", label: "字典标签", minWidth: "200" },
    { prop: "dictValue", label: "字典键值", minWidth: "120" },
    { prop: "dictSort", label: "字典排序", minWidth: "120" },
    { prop: "statusLabel", label: "状态", minWidth: "160" },
    { prop: "createTime", label: "创建时间", minWidth: "180" },
    { prop: "remark", label: "备注", minWidth: "200" }
  ]
});
// 获取菜单数据
const getChildData = async () => {
  const res = await proxy.$api.childDictList();
  if (res.success) {
    childTable.value.data = res.data;
  }
};
</script>
