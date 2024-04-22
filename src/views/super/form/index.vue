<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition :opts="opts" @submit="conditionEnter" isExpansion />
    </t-layout-page-item>
    <t-layout-page-item>
      <t-table
        title="弹窗新增列表"
        isCopy
        :table="state.table"
        :columns="state.table.columns"
        :isPaginationCumulative="isPaginationCumulative"
        @selection-change="selectionChange"
        @size-change="handlesSizeChange"
        @page-change="handlesCurrentChange"
      >
        <template #toolbar>
          <el-button type="primary" @click="handleTableAdd">{{
            state.table.firstColumn ? "清除序列号" : "新增序列号"
          }}</el-button>
          <el-button type="primary" @click="isPaginationCumulative = !isPaginationCumulative"
            >序列号翻页{{ !isPaginationCumulative ? "累加" : "不累加" }}</el-button
          >
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </template>
      </t-table>
    </t-layout-page-item>
    <el-dialog :title="title" width="60%" draggable v-model="addDialog">
      <t-form v-model="formOpts.ref" :formOpts="formOpts" :widthSize="2" @handle-event="handleEvent" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addDialog = false">取消</el-button>
          <el-button type="primary" @click="addConfirm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </t-layout-page>
</template>

<script setup lang="tsx" name="superDemo">
import { ElMessageBox, ElMessage } from "element-plus";
import { useFormData } from "./useFormData";
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const { formOpts, getSelectTableList, handleAdd, edit, handleEvent, addConfirm, addDialog, title } = useFormData();
const isPaginationCumulative = ref(false);
const resetHandle = (row: any) => {
  console.log("点击重置密码", row);
};
const handleDelete = (row: any) => {
  console.log("点击删除", row);
  ElMessageBox.confirm("此操作将永久删除该用户, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      ElMessage.success({
        message: "删除成功!"
      });
    })
    .catch(() => {
      ElMessage.info({
        message: "已取消删除"
      });
    });
};
const state: any = reactive({
  deptOptions: [], // 左侧tree
  postOptions: [], // 岗位
  rolesOptions: [], // 角色
  queryData: {
    userName: null, // 登录名
    nickName: null, // 用户状态
    postId: null,
    postId1: null,
    phonenumber: null,
    start_time: null,
    end_time: null,
    date1: null,
    date: null
  },
  listTypeInfo: {
    postOptions: [] // 岗位
  },
  table: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    // 接口返回数据
    data: [],
    // 表头数据
    columns: [
      { prop: "userName", label: "登录名", minWidth: "120" },
      { prop: "nickName", label: "用户名", minWidth: "120" },
      { prop: "deptName", label: "部门", minWidth: "120" },
      { prop: "roleName", label: "角色", minWidth: "120" },
      { prop: "descript", label: "描述", minWidth: "180" },
      { prop: "createTime", label: "创建时间", minWidth: "180" }
    ],
    operator: [
      {
        text: "编辑",
        fun: edit
      },
      {
        text: "重置密码",
        fun: resetHandle
      },
      {
        text: "删除",
        fun: handleDelete
      }
    ],
    // 操作列样式
    operatorConfig: {
      fixed: "right", // 固定列表右边（left则固定在左边）
      width: 180,
      label: "操作"
    }
  }
});

const handleTableAdd = () => {
  if (state.table?.firstColumn) {
    delete state.table.firstColumn;
  } else {
    state.table.firstColumn = { type: "index", lable: "序列" };
  }
};

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
    postId: {
      label: "岗位",
      defaultVal: null,
      comp: "t-select",
      isSelfCom: true,
      bind: {
        labelCustom: "postName",
        valueCustom: "postId",
        optionSource: state.listTypeInfo.postOptions
      }
    },
    postId1: {
      label: "岗位22",
      defaultVal: null,
      comp: "el-select",
      type: "select-arr",
      list: "postOptions",
      listTypeInfo: state.listTypeInfo,
      arrLabel: "postName",
      arrKey: "postId"
    },
    start_time: {
      label: "开始时间",
      comp: "el-date-picker",
      bind: {
        valueFormat: "YYYY-MM-DD"
      }
    },
    end_time: {
      label: "结束时间",
      comp: "el-date-picker",
      bind: (formData: any) => {
        return {
          valueFormat: "YYYY-MM-DD",
          disabled: formData.start_time == null || formData.start_time == "" ? true : false,
          "disabled-date": (time: { getTime: () => number }) => {
            return time.getTime() < new Date(formData.start_time).getTime() - 86400000;
          }
        };
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
  const { userName, nickName, date, date1, postId, postId1, phonenumber, start_time, end_time } = toRefs(state.queryData);
  return {
    userName: userName.value,
    nickName: nickName.value,
    postId: postId.value,
    postId1: postId1.value,
    phonenumber: phonenumber.value,
    date1: date1.value,
    start_time: start_time.value,
    end_time: end_time.value,
    beginDate: date.value && date.value[0] ? date.value[0] : null,
    endDate: date.value && date.value[1] ? date.value[1] : null,
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
  getSelectTableList();
  treeselect();
  getPost();
  getRoles();
});
// 获取tree数据
const treeselect = async () => {
  const res = await proxy.$api.treeselect();
  if (res.success) {
    state.deptOptions = res.data;
    formOpts.fieldList.forEach((item: any) => {
      if (item.value === "deptId") {
        item.bind.options = res.data;
      }
    });
  }
};
// 获取岗位
const getPost = async () => {
  const res = await proxy.$api.getPost();
  if (res.success) {
    state.postOptions = res.data;
    state.listTypeInfo.postOptions = res.data;
    opts.value.postId.defaultVal = res.data[0].postId;
    opts.value.postId1.defaultVal = res.data[0].postId;
    formOpts.fieldList.forEach((item: any) => {
      if (item.value === "postId") {
        item.bind.optionSource = res.data;
      }
    });
  }
};
// 获取角色
const getRoles = async () => {
  const res = await proxy.$api.getRoles();
  if (res.success) {
    state.rolesOptions = res.data;
    formOpts.fieldList.forEach((item: any) => {
      if (item.value === "roleIds") {
        item.bind.options = res.data;
      }
    });
  }
};
// 获取菜单数据
const getData = async () => {
  const res = await proxy.$api.userList(getQueryData.value);
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
