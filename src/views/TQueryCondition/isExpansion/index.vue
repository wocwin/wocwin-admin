<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition :opts="opts" @submit="conditionEnter" @handle-event="handleEvent" isExpansion />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="ts" name="isExpansion">
let state = reactive({
  queryData: {
    userName: null, // 登录名
    phonenumber: null, // 手机号码
    workshopNum: null,
    date: null,
    date1: null
  },
  listTypeInfo: {
    sexList: [
      {
        dictLabel: "前纺一车间",
        dictValue: "W1"
      },
      {
        dictLabel: "前纺二车间",
        dictValue: "W2"
      }
    ]
  }
});
const opts = computed(() => {
  return {
    userName: {
      label: "登录名称",
      comp: "el-input"
    },
    phonenumber: {
      label: "手机号码",
      comp: "el-input"
    },
    workshopNum: {
      label: "车间",
      comp: "el-select",
      changeEvent: "change",
      type: "select-arr",
      list: "sexList",
      arrLabel: "dictLabel",
      arrKey: "dictValue",
      listTypeInfo: state.listTypeInfo
    },
    date1: {
      label: "日期",
      comp: "el-date-picker",
      bind: {
        valueFormat: "YYYY-MM-DD"
      }
    },
    date: {
      label: "装炉时间",
      comp: "el-date-picker",
      span: 2,
      event: "date",
      bind: {
        rangeSeparator: "-",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
        valueFormat: "YYYY-MM-DD",
        type: "daterange"
      }
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { userName, phonenumber, workshopNum, date, date1 } = toRefs(state.queryData);
  return {
    userName: userName.value,
    workshopNum: workshopNum.value,
    phonenumber: phonenumber.value,
    date1: date1.value,
    beginDate: date.value && date.value[0] ? date.value[0] : null,
    endDate: date.value && date.value[1] ? date.value[1] : null
  };
});
// 查询条件change事件
const handleEvent = (type: any, val: any) => {
  // console.log(111, type, val)
  switch (type) {
    case "date":
      console.log("获取event==date的数据", val);
      break;
  }
};
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
};
</script>
