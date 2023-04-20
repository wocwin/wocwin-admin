<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition :opts="opts" @submit="conditionEnter" />
    </t-layout-page-item>
    <t-layout-page-item>
      <t-table
        title="字典配置列表"
        isCopy
        :table="state.table"
        :columns="state.table.columns"
        @selection-change="selectionChange"
      >
        <template #toolbar>
          <el-button type="primary">清空</el-button>
          <el-button type="danger" :disabled="state.ids.length < 1">批量删除</el-button>
        </template>
      </t-table>
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="tsx" name="dictManage">
import dictData from "@/views/system/getData/dict.json";

const dictDataClick = (row: any) => {
  console.log("点击字典类型", row);
};
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
            case true:
              type = "success";
              val = "正常";
              break;
            case false:
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
      comp: "el-date-picker",
      span: 2,
      bind: {
        type: "datetimerange",
        rangeSeparator: "-",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
        valueFormat: "yyyy-MM-dd HH:mm:ss"
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
  const { dictName, dictType, status, createDate } = state.queryData;
  return {
    dictName, // 字典名称
    dictType, // 字典类型
    status, // 字典状态
    beginTime: createDate && createDate[0] ? createDate[0] : null,
    endTime: createDate && createDate[1] ? createDate[1] : null
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
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
  const res = await dictData;
  if (res.success) {
    state.table.data = res.data.rows;
    state.table.total = res.data.total;
  }
};
</script>
