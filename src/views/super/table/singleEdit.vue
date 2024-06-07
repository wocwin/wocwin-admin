<template>
  <t-layout-page class="single_edit_demo">
    <t-layout-page-item>
      <t-table
        title="单元格编辑功能"
        ref="singleEdit"
        :table="state.table"
        :columns="state.table.columns"
        :isShowPagination="false"
        @selection-change="selectionChange"
        :listTypeInfo="state.table.listTypeInfo"
        isShowFooterBtn
        @save="singleSave"
        @handle-event="handleEvent"
      >
        <template #toolbar>
          <div class="add_data">
            <el-input-number v-model="num" clearable placeholder="请输入追加条数"></el-input-number>
            <el-button type="primary" @click="add">追加{{ num ? num : "" }}条数据</el-button>
          </div>
          <el-button type="primary" v-if="state.table.data.length > 0" @click="save">另一种获取table数据</el-button>
        </template>
      </t-table>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
// 添加数据条数
const num = ref(10);
const singleEdit: any = ref(null);
// 调用方法获取返回数据
const save = () => {
  singleEdit.value.saveMethod((data: any) => {
    console.log("调用方法获取返回数据---saveMethod", data);
  });
};
// 添加数据
const add = () => {
  if (num.value > 0) {
    for (let i = 0; i < num.value; i++) {
      state.table.data.push({});
    }
  }
};
// 点击保存按钮获取table数据
const singleSave = (data: any) => {
  console.log("点击保存按钮获取table数据", data);
};
// 编辑单元格监听事件
const handleEvent = (type: any, val: any, index: any) => {
  console.log(`自己标识编辑单元格event值：${type}---修改后的值：${val}----当前所在行：${index}`);
};
const selectionChange = (selection: any) => {
  console.log("selectionChange", selection);
};

onMounted(() => {
  getList();
});
const getList = () => {
  const list = [
    {
      dictLabel: "炉头",
      dictValue: "1"
    },
    {
      dictLabel: "炉中",
      dictValue: "2"
    },
    {
      dictLabel: "炉尾",
      dictValue: "3"
    }
  ];
  state.table.columns.map((item: any) => {
    if (item.canEdit && item.prop === "area" && item.configEdit) {
      item.configEdit.bind.optionSource = list;
      console.log("item.configEdit.bind.optionSource", item);
    }
  });
};

let state: any = reactive({
  table: {
    firstColumn: { type: "selection" },
    data: [],
    columns: [
      {
        prop: "area",
        label: "装炉位置(使用t-select)",
        minWidth: "120",
        canEdit: true,
        configEdit: {
          label: "装炉位置",
          editComponent: "t-select",
          isSelfCom: true,
          bind: {
            valueCustom: "dictValue",
            labelCustom: "dictLabel",
            optionSource: []
          }
        }
      },
      {
        prop: "layer",
        label: "装炉层(使用el-select)",
        minWidth: "120",
        canEdit: true,
        configEdit: {
          label: "装炉层",
          type: "select-arr",
          editComponent: "el-select",
          list: "furnaceLayerList",
          arrLabel: "dictLabel",
          arrKey: "dictValue"
        }
      },
      {
        prop: "isTail",
        label: "是否尾包",
        minWidth: "60",
        canEdit: true,
        configEdit: {
          label: "是否尾包",
          type: "checkbox",
          editComponent: "el-checkbox"
        }
      },
      {
        prop: "packageNumStart",
        label: "开始编号",
        minWidth: "100",
        canEdit: true,
        configEdit: {
          label: "开始编号",
          placeholder: "请输入开始编号",
          type: "input",
          editComponent: "el-input"
        }
      },
      {
        prop: "packageNumEnd",
        label: "结束编号",
        minWidth: "100",
        canEdit: true,
        configEdit: {
          label: "结束编号",
          placeholder: "请输入结束编号",
          type: "input",
          editComponent: "el-input"
        }
      },
      {
        prop: "startDate",
        label: "生产日期(t-date-picker)",
        minWidth: "100",
        canEdit: true,
        configEdit: {
          label: "生产日期",
          type: "date",
          editComponent: "t-date-picker",
          bind: {
            isPickerOptions: true
          }
        }
      },
      {
        prop: "endDate",
        label: "出炉日期(el-date-picker)",
        minWidth: "100",
        canEdit: true,
        configEdit: {
          label: "出炉日期",
          type: "date",
          editComponent: "el-date-picker",
          bind: {
            "value-format": "YYYY-MM-DD"
          }
        }
      },
      {
        prop: "singleWeight",
        label: "单包重量（吨）",
        minWidth: "160",
        canEdit: true,
        configEdit: {
          label: "单包重量（吨）",
          type: "input",
          editComponent: "el-input-number",
          event: "singleWeight"
        }
      }
    ],
    listTypeInfo: {
      furnaceLayerList: [
        {
          dictLabel: "上层",
          dictValue: "1"
        },
        {
          dictLabel: "中层",
          dictValue: "2"
        },
        {
          dictLabel: "下层",
          dictValue: "3"
        }
      ]
    }
  }
});
</script>
<style lang="scss" scoped>
.single_edit_demo {
  .add_data {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
