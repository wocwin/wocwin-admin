<template>
  <t-adaptive-page
    class="account_mange"
    isCopy
    :table="state.table"
    :columns="state.table.columns"
    :opts="opts"
    isPaginationCumulative
    :btnPermissions="btnPermissions"
    @size-change="handlesSizeChange"
    @page-change="handlesCurrentChange"
    @submit="conditionEnter"
    title="用户管理列表"
  >
    <template #leftContent>
      <el-input v-model="deptName" placeholder="请输入部门名称" clearable size="small" prefix-icon="el-icon-search" />
      <el-tree
        ref="treeRef"
        class="filter-tree"
        :data="state.deptOptions"
        :props="{ children: 'children', label: 'label' }"
        default-expand-all
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
      />
    </template>
    <template #nickName="{ scope }">
      <div>{{ scope.row.nickName }}</div>
    </template>
    <template #toolbar>
      <el-button type="primary" @click="handleAdd" v-hasPermi="'root:web:sys:user:add'">新增</el-button>
      <el-button type="danger" @click="delHandle" v-hasPermi="'root:web:sys:user:del'">批量删除</el-button>
      <el-button type="primary" @click="toDetail('child')">子级详情页面</el-button>
      <el-button type="primary" @click="toDetail('peer')">同级详情页面</el-button>
    </template>
  </t-adaptive-page>
</template>

<script setup lang="tsx" name="accountManage">
import useApi from "@/hooks/useApi";
import { useAuthStore } from "@/store/modules/auth";
const authStore = useAuthStore();
const btnPermissions = authStore.authButtonListGet;
const { proxy } = useApi();
const router = useRouter();
// 跳转详情页
const toDetail = (type: any) => {
  router.push({
    path: `/system/accountManage/detail${type === "child" ? "" : "1"}`,
    query: { flag: `accountManageDetail${type === "child" ? "" : "1"}`, type }
  });
};
const handleDelete = (row: any) => {
  console.log("点击删除", row);
};
const handleAdd = () => {
  console.log("点击新增");
};
const delHandle = () => {
  console.log("批量删除");
};
const edit = (row: any) => {
  console.log("编辑", row);
};
const resetHandle = (row: any) => {
  console.log("重置密码", row);
};
const view = (row: any) => {
  console.log("查看", row);
};
const deptName = ref("");
const treeRef = ref();
const state: any = reactive({
  deptOptions: [], // 左侧tree
  queryData: {
    userName: null, // 登录名
    nickName: null, // 用户状态
    workshopNum: null,
    phonenumber: null,
    date1: null,
    date: null
  },
  listTypeInfo: {
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
    ]
  },

  table: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    firstColumn: { type: "index" },
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      { prop: "userName", label: "登录名", minWidth: "120" },
      { prop: "nickName", label: "插槽使用", minWidth: "120", slotName: "nickName" },
      { prop: "deptName", label: "部门", minWidth: "120" },
      { prop: "roleName", label: "角色", minWidth: "120" },
      { prop: "descript", label: "描述", minWidth: "180" },
      { prop: "createTime", label: "创建时间", minWidth: "180" }
    ],
    operator: [
      {
        text: "查看",
        hasPermi: "root:web:sys:user:view",
        fun: view
      },
      {
        text: "编辑",
        hasPermi: "root:web:sys:user:alter",
        fun: edit
      },
      {
        text: "重置密码",
        hasPermi: "root:web:sys:user:resetpass",
        fun: resetHandle
      },
      {
        text: "删除",
        hasPermi: "root:web:sys:user:del",
        fun: handleDelete
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      width: "240",
      label: "操作"
    }
  }
});
watch(
  () => deptName.value,
  val => {
    treeRef.value.filter(val);
  }
);
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
      isSelfCom: true,
      bind: {
        valueCustom: "id",
        labelCustom: "name",
        multiple: true,
        optionSource: state.listTypeInfo.multipleList
      }
    },
    date: {
      label: "创建时间",
      comp: "t-date-picker",
      span: 2,
      bind: {
        type: "daterange"
      }
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { userName, nickName, date, date1, workshopNum, phonenumber } = toRefs(state.queryData);
  return {
    userName: userName.value,
    nickName: nickName.value,
    workshopNum: workshopNum.value,
    phonenumber: phonenumber.value,
    date1: date1.value,
    beginDate: date.value && date.value[0] ? date.value[0] : null,
    endDate: date.value && date.value[1] ? date.value[1] : null,
    pageNum: state.table.currentPage,
    pageSize: state.table.pageSize
  };
});
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
  getData();
};
onMounted(() => {
  getData();
  treeselect();
});
// 获取用户数据
const getData = async () => {
  const res = await proxy.$api.userList(getQueryData.value);
  if (res.success) {
    state.table.data = res?.data.rows;
    state.table.total = res.data.total;
  }
};
// 获取tree数据
const treeselect = async () => {
  const res = await proxy.$api.treeselect();
  if (res.success) {
    state.deptOptions = res.data;
    if (state.deptOptions.length > 0) {
      console.log("默认选中根节点", state.deptOptions[0].id);
    }
  }
};
const filterNode = (value: string, data: any) => {
  if (!value) return true;
  return data.label.includes(value);
};
// 节点单击事件
const handleNodeClick = (data: { id: any }) => {
  console.log("节点单击事件部门", data.id);
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
