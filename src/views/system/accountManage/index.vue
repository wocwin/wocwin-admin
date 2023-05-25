<template>
  <t-adaptive-page
    class="menu_mange"
    title="用户管理列表"
    row-key="path"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    :opts="opts"
    @submit="conditionEnter"
    height="100%"
  >
    <template #toolbar>
      <el-button type="primary">新增</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="accountManage">
import accountData from "@/views/system/getData/account.json";
const handleDelete = (row: any) => {
  console.log("点击删除", row);
};
const state: any = reactive({
  queryData: {
    userName: null, // 登录名
    nickName: null, // 用户状态
    workshopNum: null,
    phonenumber: null,
    date1: null,
    date: null
  },
  multipleList: [
    {
      name: "前纺一车间",
      id: "W1"
    },
    {
      name: "前纺二车间",
      id: "W2"
    },
    {
      name: "前纺三车间",
      id: "W3"
    },
    {
      name: "前纺四车间",
      id: "W4"
    }
  ],
  table: {
    total: 0,
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      { prop: "userName", label: "登录名", minWidth: 120 },
      { prop: "nickName", label: "姓名", minWidth: 120 },
      {
        prop: "deptName",
        label: "部门",
        minWidth: 120,
        render: (text: any, row: any) => {
          return <div>{row.depts && row.depts[0].deptName}</div>;
        }
      },
      {
        prop: "roles",
        label: "角色",
        minWidth: 120,
        noShowTip: true,
        render: (text: any, row: any) => {
          return (
            <div>
              {row.roles
                ?.map((item: { roleName: any }) => {
                  return item.roleName;
                })
                ?.join(",")}
            </div>
          );
        }
      },
      { prop: "createTime", label: "创建时间", minWidth: 140 }
    ],
    operator: [
      {
        text: "编辑"
        // fun: edit
      },
      {
        text: "重置密码"
        // fun: resetHandle
      },
      {
        text: "删除",
        fun: handleDelete
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      align: "left",
      width: "160",
      label: "操作"
    }
  }
});

const opts = computed(() => {
  return {
    userName: {
      label: "登录名称",
      comp: "el-input"
    },
    nickName: {
      label: "姓名",
      comp: "el-input"
    },
    phonenumber: {
      label: "手机号码",
      comp: "el-input"
    },
    date1: {
      label: "日期组件使用",
      comp: "t-date-picker",
      bind: {
        isPickerOptions: true
      }
    },
    workshopNum: {
      label: "t-select使用",
      placeholder: "请多选",
      span: 2,
      comp: "t-select",
      bind: {
        valueKey: "id",
        labelKey: "name",
        multiple: true,
        optionSource: state.multipleList
      }
    },
    date: {
      label: "创建时间",
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
  const { userName, nickName, date, date1, workshopNum, phonenumber } = state.queryData;
  return {
    userName,
    nickName,
    workshopNum,
    phonenumber,
    date1,
    beginDate: date && date[0] ? date[0] : null,
    endDate: date && date[1] ? date[1] : null
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
};
onMounted(() => {
  getData();
});
// 获取菜单数据
const getData = async () => {
  const res = await accountData;
  if (res.success) {
    state.table.data = res?.data.rows;
    state.table.total = res.data.total;
  }
};
</script>
