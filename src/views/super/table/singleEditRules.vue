<template>
  <t-layout-page class="single_edit_rules_demo">
    <t-layout-page-item>
      <t-table
        title="单元格编辑规则校验"
        ref="singleEditRules"
        :table="state.table"
        :columns="state.table.columns"
        :isShowPagination="false"
        @selection-change="selectionChange"
        :listTypeInfo="state.table.listTypeInfo"
        isShowFooterBtn
        @validate-error="validateError"
        @save="singleSave"
        @handle-event="handleEvent"
      >
        <template #toolbar>
          <div class="add_data">
            <el-input-number v-model="num" clearable placeholder="请输入追加条数"></el-input-number>
            <el-button type="primary" @click="add">追加{{ num ? num : "" }}条数据</el-button>
          </div>
          <el-button type="primary" v-if="state.table.data.length > 0" @click="clearValidate">清除校验规则</el-button>
          <el-tooltip
            v-if="state.table.data.length > 0"
            content="TSelectTable重置效果，请看组件文档demo示例，需下个版本生效"
            effect="dark"
            placement="top"
          >
            <el-button type="primary" @click="reset">重置表单</el-button>
          </el-tooltip>
          <el-button type="primary" v-if="state.table.data.length > 0" @click="clearData">清空</el-button>
          <el-button type="primary" v-if="state.table.data.length > 0" @click="save">另一种获取table数据</el-button>
        </template>
      </t-table>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
// 添加数据条数
const num = ref(10);
const singleEditRules: any = ref(null);
const tableData = ref([]);
const areaList: any = ref([]);
// 获取下拉选择表格数据
const getSelectTableList = async () => {
  const res = await proxy.$api.getSelectTableList();
  if (res.success) {
    tableData.value = res?.data.rows;
  }
};
// 调用方法获取返回数据
const save = () => {
  singleEditRules.value.saveMethod((data: any) => {
    console.log("调用方法获取返回数据---saveMethod", data);
  });
};
// 清除数据
const clearData = () => {
  state.table.data = [];
};
// 重置表单
const reset = () => {
  singleEditRules.value.resetFields();
};
// 清除校验规则
const clearValidate = () => {
  singleEditRules.value.clearValidate();
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
const radioChange = (row: any, scope: any) => {
  console.log("下拉选择表格-单选", row, scope);
  // formOpts.formData.deptCode = row.userId;
  state.table.data[scope.$index].deptCode = row.userId;
};

onMounted(() => {
  getSelectTableList();
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
  areaList.value = list;
};
// 错误校验提示
const validateError = (list: any[]) => {
  list.map(val => {
    setTimeout(() => {
      ElMessage.error(`${val}是必填项！`);
    }, 100);
  });
};
let state: any = reactive({
  table: {
    rules: {
      area: [{ required: true, message: "请选择装炉位置", trigger: "change" }],
      layer: [{ required: true, message: "请选择装炉层", trigger: "change" }],
      deptCode: [{ required: true, message: "请选择用户名称", trigger: "change" }],
      packageNumStart: [{ required: true, message: "请输入开始编号", trigger: "blur" }],
      packageNumEnd: [{ required: true, message: "请输入结束编号", trigger: "blur" }],
      startDate: [{ required: true, message: "请选择生产日期", trigger: "change" }]
    },
    firstColumn: { type: "selection" },
    data: [],
    columns: [
      {
        prop: "area",
        label: "装炉位置(使用t-select)",
        minWidth: "120",
        headerRequired: true,
        canEdit: true,
        configEdit: {
          label: "装炉位置",
          editComponent: "t-select",
          isSelfCom: true,
          bind: {
            valueCustom: "dictValue",
            labelCustom: "dictLabel",
            optionSource: areaList
          }
        }
      },
      {
        prop: "layer",
        label: "装炉层(使用el-select)",
        minWidth: "120",
        headerRequired: true,
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
        prop: "deptCode",
        label: "t-select-table使用",
        minWidth: "120",
        headerRequired: true,
        canEdit: true,
        configEdit: {
          label: "用户名称",
          editComponent: "t-select-table",
          isSelfCom: true,
          bind: {
            isKeyup: true,
            maxHeight: 400,
            selectWidth: 500,
            defaultSelectVal: [],
            keywords: { label: "userName", value: "userId" },
            table: { data: tableData },
            columns: [
              { prop: "userName", label: "登录名", minWidth: "120" },
              { prop: "nickName", label: "插槽使用", minWidth: "120" },
              { prop: "deptName", label: "部门", minWidth: "120" },
              { prop: "roleName", label: "角色", minWidth: "120" },
              { prop: "descript", label: "描述", minWidth: "180" },
              { prop: "createTime", label: "创建时间", minWidth: "180" }
            ]
          },
          eventHandle: {
            radioChange: ({ row, scope }: any) => radioChange(row, scope)
          }
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
        headerRequired: true,
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
        headerRequired: true,
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
        headerRequired: true,
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
.single_edit_rules_demo {
  .add_data {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
