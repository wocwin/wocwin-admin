<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-table
        title="单元格单独编辑"
        :table="state.table"
        :columns="state.table.columns"
        :isShowPagination="false"
        :listTypeInfo="state.table.listTypeInfo"
      >
      </t-table>
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="tsx">
import data from "./data.json";
// 保存
const save = (row: any) => {
  const { labelInfoId, labelScanLogId, equipmentCode, weight } = row;
  const obj = {
    labelInfoId,
    labelScanLogId,
    equipmentCode,
    weight
  };
  console.log("最终变化的数据", obj);

  state.table.columns.map((item: { label: string; canEdit: boolean; prop: string }) => {
    if (item.label == "生产设备") {
      item.canEdit = false;
      item.prop = "equipmentName";
    }
    if (item.label == "重量") {
      item.canEdit = false;
    }
  });
  state.table.operator.map((val: { text: string; disabled: boolean }) => {
    if (val.text == "编辑") {
      val.disabled = false;
    }
  });
  row.isEdit = false;
};
// 取消
const cancel = (row: any) => {
  row.isEdit = false;
  state.table.operator.map((val: { text: string; disabled: boolean }) => {
    if (val.text == "编辑") {
      val.disabled = false;
    }
  });
  state.table.columns.map((item: { label: string; canEdit: boolean; prop: string }) => {
    if (item.label == "生产设备") {
      item.canEdit = false;
      item.prop = "equipmentName";
    }
    if (item.label == "重量") {
      item.canEdit = false;
    }
  });
};
// 修改
const edit = (row: any) => {
  row.isEdit = true;
  state.table.operator.map((val: { text: string; disabled: boolean }) => {
    if (val.text == "编辑") {
      val.disabled = true;
    }
  });
  state.table.columns.map((item: { label: string; canEdit: boolean; prop: string }) => {
    if (item.label == "生产设备") {
      item.canEdit = true;
      item.prop = "equipmentCode";
    }
    if (item.label == "重量") {
      item.canEdit = true;
    }
  });
};

let state: any = reactive({
  table: {
    // 接口返回数据
    data: [],
    // 表头数据
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
        disabled: false,
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
  }
});
onBeforeMount(() => {
  getList();
});
const getList = () => {
  let res = data;
  if (res.success) {
    res.data.rows.map((item: any) => {
      item.isEdit = false;
    });
    state.table.data = res.data.rows;
  }
};
</script>
