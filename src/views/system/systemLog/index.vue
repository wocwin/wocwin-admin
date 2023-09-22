<template>
  <t-adaptive-page
    title="操作日志列表"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    @selection-change="selectionChange"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
    :opts="opts"
    @submit="conditionEnter"
    height="100%"
  >
    <template #toolbar>
      <el-button type="primary">清空</el-button>
      <el-button type="danger" :disabled="state.ids.length < 1">删除</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="systemLog">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const state: any = reactive({
  ids: [],
  queryData: {
    systemName: null, // 业务系统
    title: null, // 业务模块
    operName: null, // 操作人员
    businessType: null, // 操作类型
    status: null, // 状态
    date: null // 操作时间
  },
  listTypeInfo: {
    businessTypeList: [
      {
        label: "其他",
        key: 0
      },
      {
        label: "新增",
        key: 1
      },
      {
        label: "修改",
        key: 2
      },
      {
        label: "删除",
        key: 3
      }
    ],
    statusList: [
      {
        label: "正常",
        key: 1
      },
      {
        label: "异常",
        key: 0
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
      { prop: "systemName", label: "业务系统", minWidth: 220 },
      { prop: "title", label: "业务模块", minWidth: 140 },
      { prop: "methodDesc", label: "方法描述", minWidth: 120 },
      {
        prop: "businessType",
        label: "操作类型",
        minWidth: 80,
        render: (text: any) => {
          // 0其它 1新增 2修改 3删除
          let type = "";
          let val = "";
          switch (text) {
            case 0:
              type = "info";
              val = "其它";
              break;
            case 1:
              type = "success";
              val = "新增";
              break;
            case 2:
              type = "warning";
              val = "修改";
              break;
            case 3:
              type = "danger";
              val = "删除";
              break;
          }
          return <el-tag type={type}>{val}</el-tag>;
        }
      },
      { prop: "requestMethod", label: "请求方式", minWidth: 120 },
      { prop: "operName", label: "操作人员", minWidth: 120 },
      { prop: "deptName", label: "部门名称", minWidth: 140 },
      { prop: "operIp", label: "主机地址", minWidth: 140 },
      {
        prop: "status",
        label: "	操作状态",
        minWidth: 120,
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
              val = "异常";
              break;
          }
          return <el-tag type={type}>{val}</el-tag>;
        }
      },
      { prop: "operTime", label: "操作时间", minWidth: 200 },

      {
        prop: "operatorType",
        label: "操作类别",
        minWidth: 160,
        render: (text: any) => {
          // （0其它 1后台用户 2手机端用户）
          let val = "";
          switch (text) {
            case 0:
              val = "其它";
              break;
            case 1:
              val = "后台用户";
              break;
            case 2:
              val = "手机端用户";
              break;
          }
          return <el-tag>{val}</el-tag>;
        }
      }
    ],
    operator: [
      {
        text: "详情"
        // fun: edit
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      align: "left",
      width: 80,
      label: "操作"
    }
  }
});

const opts = computed(() => {
  return {
    systemName: {
      label: "业务系统",
      comp: "el-input"
    },
    title: {
      label: "业务模块",
      comp: "el-input"
    },
    operName: {
      label: "操作人员",
      comp: "el-input"
    },
    businessType: {
      label: "操作类型",
      comp: "t-select",
      bind: {
        optionSource: state.listTypeInfo.businessTypeList
      }
    },
    status: {
      label: "状态",
      comp: "t-select",
      bind: {
        optionSource: state.listTypeInfo.statusList
      }
    },
    date: {
      label: "操作时间",
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
  const { title, systemName, operName, businessType, status, date } = toRefs(state.queryData);
  return {
    title: title.value,
    systemName: systemName.value,
    operName: operName.value,
    businessType: businessType.value,
    status: status.value,
    beginTime: date.value && date.value[0] ? date.value[0] : null,
    endTime: date.value && date.value[1] ? date.value[1] : null,
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
  const res = await proxy.$api.logList(getQueryData.value);
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
