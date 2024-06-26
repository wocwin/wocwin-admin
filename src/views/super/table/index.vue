<template>
  <t-adaptive-page
    table-title="多级表头"
    :opts="opts"
    @submit="conditionEnter"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    @selection-change="selectionChange"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
  >
    <template #operName="{ scope }">{{ scope.row.operName }}</template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="complexTableDemo">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const router = useRouter();
const jumpPage = (row: any, type: String) => {
  console.log("点击table内详情按钮", row, type);
  router.push({
    path: `/t-ui-plus/table/${type}`,
    query: { id: row.id }
  });
};
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
    firstColumn: { type: "selection", fixed: true },
    data: [],
    columns: [
      {
        prop: "",
        label: "第一级第一类表头",
        minWidth: 360,
        children: [
          { prop: "systemName", label: "业务系统", minWidth: 220 },
          {
            prop: "",
            label: "第二级表头",
            minWidth: 140,
            children: [{ prop: "title", label: "业务模块", minWidth: 140 }]
          }
        ]
      },
      {
        prop: "",
        label: "第一级第二类表头",
        minWidth: 360,
        children: [
          { prop: "methodDesc", label: "方法描述", minWidth: 120 },
          {
            prop: "",
            label: "第二级表头",
            minWidth: 620,
            children: [
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
              {
                prop: "",
                label: "第三级表头",
                minWidth: 420,
                children: [
                  { prop: "operName", label: "操作人员(插槽使用)", slotNameMerge: "operName", minWidth: 140 },
                  { prop: "deptName", label: "部门名称", minWidth: 140 },
                  { prop: "operIp", label: "主机地址", minWidth: 140 }
                ]
              }
            ]
          }
        ]
      },
      {
        prop: "status",
        label: "操作状态",
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
      { prop: "operTime", label: "操作时间", minWidth: 180 },

      {
        prop: "operatorType",
        label: "操作类别",
        minWidth: 160,
        // （0其它 1后台用户 2手机端用户）
        render: (text: any) => {
          const typeMap: any = {
            0: { name: "其它", type: "danger" },
            1: { name: "后台用户", type: "success" },
            2: { name: "手机端用户", type: "" }
          };
          return <el-tag type={typeMap[text].type}>{typeMap[text].name}</el-tag>;
        }
      }
    ],
    operator: [
      {
        render: (text: any, row: any) => {
          return (
            <el-button type="primary" link={true} text={true} size="small" onClick={() => jumpPage(row, "singleEdit")}>
              常规表格单元格编辑
            </el-button>
          );
        }
      },
      {
        render: (text: any, row: any) => {
          return (
            <el-button type="primary" link={true} text={true} size="small" onClick={() => jumpPage(row, "multileHeadEdit")}>
              多级表头单元格编辑
            </el-button>
          );
        }
      },
      {
        render: (text: any, row: any) => {
          return (
            <el-button type="primary" link={true} text={true} size="small" onClick={() => jumpPage(row, "singleEditRules")}>
              单元格编辑规则校验
            </el-button>
          );
        }
      },
      {
        render: (text: any, row: any) => {
          return (
            <el-button type="primary" link={true} text={true} size="small" onClick={() => jumpPage(row, "treeTable")}>
              Tree-Table
            </el-button>
          );
        }
      },
      {
        render: (text: any, row: any) => {
          return (
            <el-button type="primary" link={true} text={true} size="small" onClick={() => jumpPage(row, "cellEdite")}>
              单元格单独编辑
            </el-button>
          );
        }
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      width: 280,
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
      isSelfCom: true,
      bind: {
        optionSource: state.listTypeInfo.businessTypeList
      }
    },
    status: {
      label: "状态",
      comp: "t-select",
      isSelfCom: true,
      bind: {
        optionSource: state.listTypeInfo.statusList
      }
    },
    date: {
      label: "操作时间",
      comp: "t-date-picker",
      span: 2,
      bind: {
        type: "datetimerange",
        isPickerOptions: true
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
