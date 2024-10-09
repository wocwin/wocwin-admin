<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition :opts="opts" @submit="conditionEnter" />
    </t-layout-page-item>
    <t-layout-page-item>
      <t-table
        title="单元格单独编辑"
        isCopy
        columnSetting
        name="cellEditeDemo"
        :table="table"
        :columns="table.columns"
        :listTypeInfo="table.listTypeInfo"
        @size-change="handlesSizeChange"
        @page-change="handlesCurrentChange"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="tsx" name="cellEditeDemo">
import { ElMessage } from "element-plus";
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
// 保存
const save = (row: any) => {
  console.log("保存", row);
  const { labelInfoId, labelScanLogId, equipmentCode, weight } = row;
  const obj = {
    labelInfoId,
    labelScanLogId,
    equipmentCode,
    weight
  };
  console.log("最终变化的数据", obj);

  table.value.columns.map((item: any) => {
    if (item.label == "生产设备") {
      item.canEdit = false;
    }
    if (item.label == "重量") {
      item.canEdit = false;
    }
  });
  table.value.operator.map((val: any) => {
    if (val.text == "编辑") {
      val.bind.disabled = false;
    }
  });
  row.isEdit = false;
  ElMessage.success("保存成功！");
};
// 取消
const cancel = (row: any) => {
  row.isEdit = false;
  table.value.operator.map((val: any) => {
    if (val.text == "编辑") {
      val.bind.disabled = false;
    }
  });
  table.value.columns.map((item: any) => {
    if (item.label == "生产设备") {
      item.canEdit = false;
    }
    if (item.label == "重量") {
      item.canEdit = false;
    }
  });
  ElMessage.info("已取消编辑");
};
// 修改
const edit = (row: any) => {
  row.isEdit = true;
  table.value.operator.map((val: any) => {
    if (val.text == "编辑") {
      val.bind.disabled = true;
    }
  });
  table.value.columns.map((item: any) => {
    if (item.label == "重量") {
      item.canEdit = true;
    }
    if (item.label == "生产设备") {
      item.canEdit = true;
    }
  });
};
// 生产设备选择
const equipmentChange = ({ val, scope }: any) => {
  table.value.listTypeInfo.equipmentList.map((item: any) => {
    if (item.equipmentCode == val) {
      scope.row.equipmentName = item.equipmentName;
      scope.row.equipmentCode = val;
    }
  });
};
const state = reactive({
  queryData: {
    workOrderNo: null, // 工单号
    workStepName: null, // 工序
    materialName: null // 物料
  }
});
const table = ref<TableTypes.Table>({
  currentPage: 1,
  pageSize: 10,
  total: 0,
  data: [],
  columns: [
    { prop: "workOrderNo", label: "工单号", minWidth: "160" },
    { prop: "workStepName", label: "工序", minWidth: "100" },
    { prop: "materialName", label: "物料", minWidth: "140" },
    { prop: "materialSpecs", label: "规格", minWidth: "140" },
    { prop: "batchNo", label: "物料批次", minWidth: "180" },
    { prop: "labelCode", label: "包号", minWidth: "220" },
    {
      prop: "weight",
      label: "重量",
      minWidth: "180",
      canEdit: false,
      configEdit: {
        label: "重量",
        type: "input",
        editComponent: "el-input-number",
        event: "weight",
        bind: (scope: { row: { isEdit: any } }) => {
          return {
            controls: false,
            disabled: scope.row.isEdit ? false : true,
            min: 0,
            max: 9999,
            precision: 2
          };
        }
      }
    },
    {
      prop: "equipmentName",
      label: "生产设备",
      minWidth: "200",
      canEdit: false,
      configEdit: {
        label: "生产设备",
        type: "select-arr",
        editComponent: "el-select",
        list: "equipmentList",
        arrLabel: "equipmentName",
        arrKey: "equipmentCode",
        bind: (scope: { row: { isEdit: any } }) => {
          return {
            disabled: scope.row.isEdit ? false : true
          };
        },
        eventHandle: {
          change: (val: any) => equipmentChange(val)
        }
      }
    },
    {
      prop: "scanType",
      label: "工位类型",
      minWidth: "110",
      render: (text: any) => {
        let val = "";
        switch (text) {
          case 5:
            val = "上料工位";
            break;
          case 6:
            val = "下料工位";
            break;
        }
        return <span>{val}</span>;
      }
    },
    { prop: "createBy", label: "操作人", minWidth: "120" },
    { prop: "team", label: "班组", minWidth: "100" },
    { prop: "createTime", label: "操作时间", minWidth: "160" },
    { prop: "updateBy", label: "修改人", minWidth: "120" },
    { prop: "updateTime", label: "修改时间", minWidth: "160" }
  ],
  listTypeInfo: {
    equipmentList: [
      {
        id: 77,
        equipmentGroupId: 12,
        equipmentCode: "0-A-jzescj-0005",
        equipmentName: "1#电捕",
        deptName: "石墨电极厂"
      },
      {
        id: 78,
        equipmentGroupId: 12,
        equipmentCode: "0-A-jzescj-0006",
        equipmentName: "2#电捕",
        deptName: "石墨电极厂"
      },
      {
        id: 79,
        equipmentGroupId: 12,
        equipmentCode: "0-A-jzescj-0007",
        equipmentName: "3#电捕",
        deptName: "石墨电极厂"
      }
    ]
  },
  operator: [
    {
      text: "编辑",
      bind: {
        disabled: false
      },
      show: { key: "isEdit", val: [false] },
      fun: edit
    },
    {
      text: "保存",
      fun: save,
      show: { key: "isEdit", val: [true] }
    },
    {
      text: "取消",
      fun: cancel,
      show: { key: "isEdit", val: [true] }
    }
  ],
  operatorConfig: {
    fixed: "right", // 固定列表右边（left则固定在左边）
    width: 160,
    label: "操作"
  }
});
const opts = computed(() => {
  return {
    workOrderNo: {
      label: "工单号",
      comp: "el-input"
    },
    workStepName: {
      label: "工序",
      comp: "el-input"
    },
    materialName: {
      label: "物料",
      comp: "el-input"
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { workStepName, workOrderNo, materialName } = toRefs(state.queryData);
  return {
    workStepName: workStepName.value,
    workOrderNo: workOrderNo.value,
    materialName: materialName.value,
    pageNum: table.value.currentPage,
    pageSize: table.value.pageSize
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
  getData();
};

onMounted(() => {
  getData();
});
// 获取列表数据
const getData = async () => {
  const res = await proxy.$api.getList(getQueryData.value);
  if (res.success) {
    res.data.rows.map((item: any) => {
      item.isEdit = false;
    });
    table.value.data = res.data.rows;
    table.value.total = res.data.total;
  }
};
// 页面大小
const handlesSizeChange = (val: any) => {
  table.value.pageSize = val;
  getData();
};
// 页码
const handlesCurrentChange = (val: any) => {
  table.value.currentPage = val;
  getData();
};
</script>
