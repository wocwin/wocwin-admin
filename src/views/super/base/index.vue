<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition
        :opts="state.opts"
        @submit="conditionEnter"
        isDropDownSelectMore
        :moreCheckList="moreCheckList"
        @get-check-list="getChildCheck"
      />
    </t-layout-page-item>
    <t-layout-page-item>
      <t-table
        title="条件查询组件--以下拉方式展示更多条件(默认全部选中)"
        isCopy
        columnSetting
        name="baseTableDemo"
        :table="state.table"
        :columns="state.table.columns"
        ref="toggleSelectionTableRef"
        @selection-change="selectionChange"
        @size-change="handlesSizeChange"
        @page-change="handlesCurrentChange"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="tsx" name="superDemo">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const details = () => {
  console.log("点击table内详情按钮");
};
const toggleSelectionTableRef: any = ref<HTMLElement | null>(null);
const listTypeInfo: any = ref({
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
  ],
  workshopNumList: [
    {
      label: "前纺一车间",
      value: "W1"
    },
    {
      label: "前纺二车间",
      value: "W2"
    }
  ],
  sexList: []
});
const state: any = reactive({
  ids: [],
  hobbyList: [],
  // 选中的查询条件
  checkQuery: {},
  queryData: {
    systemName: null, // 业务系统
    title: null, // 业务模块
    operName: null, // 操作人员
    businessType: null, // 操作类型
    status: null, // 状态
    date: null // 操作时间
  },
  opts: {
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
        optionSource: listTypeInfo.value.businessTypeList
      }
    },
    status: {
      label: "状态",
      comp: "t-select",
      isSelfCom: true,
      bind: {
        optionSource: listTypeInfo.value.statusList
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
  },
  table: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    firstColumn: { type: "selection", fixed: true },
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
        render: (text: any) => {
          // （0其它 1后台用户 2手机端用户）
          let val = "";
          let type = "";
          switch (text) {
            case 0:
              val = "其它";
              type = "danger";
              break;
            case 1:
              val = "后台用户";
              type = "success";
              break;
            case 2:
              val = "手机端用户";
              type = "";
              break;
          }
          return <el-tag type={type}>{val}</el-tag>;
        }
      }
    ],
    operator: [
      {
        text: "详情",
        fun: details
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
// 动态新增查询条件
const moreCheckList = computed(() => {
  return [
    { label: "姓名", comp: "el-input", prop: "name" },
    { label: "年龄", comp: "el-input", prop: "age" },
    {
      label: "性别",
      comp: "el-select",
      prop: "sex",
      arrKey: "value",
      type: "select-arr",
      changeEvent: "change",
      list: "sexList",
      listTypeInfo: listTypeInfo.value
    },
    {
      label: "爱好",
      comp: "t-select",
      prop: "hobby",
      bind: { multiple: true, optionSource: state.hobbyList, valueCustom: "value" },
      isSelfCom: true
    },
    { label: "合同号", comp: "el-input", prop: "contractNo" },
    { label: "供应商", comp: "el-input", prop: "supplier" },
    { label: "磅单号", comp: "el-input", prop: "balanceCode" },
    { label: "车牌号", comp: "el-input", prop: "license" },
    { label: "备注", comp: "el-input", prop: "remark" },
    { label: "检验员", comp: "el-input", prop: "inspector" },
    { label: "取样人", comp: "el-input", prop: "sampler" },
    { label: "审核人", comp: "el-input", prop: "reviewer" },
    { label: "其他检验项", comp: "el-input", prop: "physicsInspection" },
    { label: "实际数量", comp: "el-input", prop: "factQuantity" }
  ];
});
watch(
  () => state.checkQuery,
  (nval, oval) => {
    // console.log("旧值", oval)
    // console.log("新值", nval)
    for (let i = 0; i < Object.keys(oval).length; i++) {
      delete state.opts[Object.keys(oval)[i]];
    }
    state.opts = {
      ...state.opts,
      ...nval
    };
    for (let i = 0; i < Object.keys(state.opts).length; i++) {
      state.queryData[Object.keys(state.opts)[i]] = null;
    }
  },
  { deep: true }
);
// 获取选中的查询条件
const getChildCheck = (val: any) => {
  state.checkQuery = val;
};
// 点击查询按钮
const conditionEnter = (data: any) => {
  state.queryData = data;
  console.log("最终参数", state.queryData);
  getData();
};
// 复选框选中
const selectionChange = (data: any[]) => {
  console.log("复选框选中", data);
  state.ids = data.map((item: { operId: any }) => item.operId);
};
onMounted(() => {
  getList();
  getData();
});
// 获取菜单数据
const getData = async () => {
  const res = await proxy.$api.logList();
  if (res.success) {
    const rows = res.data.rows;
    state.table.data = rows;
    nextTick(() => {
      state.table.data.map((item: any) => {
        toggleSelectionTableRef.value.toggleRowSelection(item, true);
      });
    });
    state.table.total = res.data.total;
  }
};
const getList = () => {
  listTypeInfo.value.sexList = [
    { label: "男", value: "1" },
    { label: "女", value: "2" }
  ];
  state.hobbyList = [
    { label: "吉他", value: "0" },
    { label: "看书", value: "1" },
    { label: "美剧", value: "2" },
    { label: "旅游", value: "3" },
    { label: "音乐", value: "4" }
  ];
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
