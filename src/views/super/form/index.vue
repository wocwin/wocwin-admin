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
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const isPaginationCumulative = ref(false);
const title = ref("新增页面");
const edit = async (row: any) => {
  console.log("edit", row);
  title.value = "编辑页面";
  addDialog.value = true;
  formOpts.fieldList.map((item: { value: string }, index: any) => {
    if (item.value === "password") {
      formOpts.fieldList.splice(index, 1);
    }
  });
  delete formOpts.rules.password;
  const res = await proxy.$api.editUser();
  if (res.success) {
    nextTick(() => {
      console.log("formOpts.ref", formOpts.ref);
      formOpts.ref.clearValidate();
      let formData = res.data;
      console.log("编辑接口数据返回", formData);
      formOpts.formData = formData;
      formOpts.fieldList.map((item: any) => {
        if (item.value === "deptCode") {
          item.bind.defaultSelectVal = formData.deptCode;
        }
      });
    });
  }
};
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
// 新增弹窗
const addDialog = ref(false);
// 邮箱校验
const validatorEmail = (rule: { message: string | undefined }, value: string, callback: any) => {
  if (value && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
    callback(new Error(rule.message));
  }
  callback();
};
// 触发事件
const handleEvent = (type: any, val: any) => {
  switch (type) {
    case "checkbox":
      console.log("checkbox", val, type);
      break;
  }
};
const tableData = ref([]);
// 获取下拉选择表格数据
const getSelectTableList = async () => {
  const res = await proxy.$api.getSelectTableList();
  if (res.success) {
    tableData.value = res?.data.rows;
  }
};
const handleAdd = () => {
  console.log("点击新增");
  addDialog.value = true;
  let flag = formOpts.fieldList.some((item: { value: string }) => item.value == "password");
  let obj = { label: "登录密码", value: "password", type: "input", comp: "el-input", bind: { "show-password": true } };
  let rulesPassword = [{ required: true, message: "请输入登录密码", trigger: "blur" }];
  if (!flag) {
    formOpts.fieldList.splice(1, 0, obj);
  }
  console.log("add", formOpts.rules);
  if (!formOpts.rules.password) {
    formOpts.rules.password = rulesPassword;
  }
  formOpts.fieldList.map((item: any) => {
    if (item.value === "deptCode") {
      item.bind.defaultSelectVal = null;
    }
  });
  nextTick(() => {
    formOpts?.ref?.resetFields();
    setTimeout(() => {
      formOpts.ref.clearValidate();
    }, 100);
  });
};
const formOpts: any = reactive({
  ref: null,
  formData: {
    userName: null, // 登录账号
    password: null, // 登录密码
    nickName: null, // 姓名
    sex: null, // 性别
    deptId: null, // 部门
    postId: null, // 岗位
    email: null, // 邮箱
    phonenumber: null, // 手机
    deptCode: null, // 下拉选择表格
    roleIds: null, // 角色
    remark: null, // 备注
    status: true // 状态
  },
  fieldList: [
    { label: "登录账号", value: "userName", type: "input", comp: "el-input" },
    { label: "登录密码", value: "password", type: "input", comp: "el-input", bind: { "show-password": true } },
    { label: "姓名", value: "nickName", type: "input", comp: "el-input" },
    { label: "性别", value: "sex", type: "select-arr", list: "sexList", comp: "el-select", arrLabel: "label", arrKey: "key" },
    {
      label: "部门",
      value: "deptId",
      placeholder: "请选择部分",
      comp: "el-cascader",
      isSelfCom: true,
      bind: {
        filterable: true,
        "show-all-levels": false,
        props: { children: "children", label: "label", value: "id" },
        options: []
      },
      widthSize: 1
    },
    {
      label: "岗位",
      value: "postId",
      comp: "t-select",
      isSelfCom: true,
      bind: {
        labelCustom: "postName",
        valueCustom: "postId",
        optionSource: []
      }
    },
    { label: "邮箱", value: "email", type: "input", comp: "el-input" },
    { label: "手机", value: "phonenumber", type: "input", comp: "el-input", bind: { maxLength: 11 } },
    {
      label: "角色",
      value: "roleIds",
      widthSize: 1,
      placeholder: "请选择角色",
      comp: "el-cascader",
      isSelfCom: true,
      bind: {
        filterable: true,
        "show-all-levels": false,
        props: { children: "roles", label: "label", value: "id" },
        options: []
      }
    },
    {
      label: "用户名称",
      value: "deptCode",
      placeholder: "t-select-table单选使用",
      comp: "t-select-table",
      isSelfCom: true,
      bind: {
        isKeyup: true,
        maxHeight: 400,
        selectWidth: 500,
        defaultSelectVal: null,
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
        radioChange: (val: any) => radioChange(val)
      }
    },
    { label: "备注", value: "remark", type: "input", comp: "el-input", widthSize: 1 }
  ],
  rules: {
    userName: [{ required: true, message: "请输入登录账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
    nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    deptId: [{ required: true, message: "请选择部门", trigger: "change" }],
    power: [{ required: true, message: "请选择功率", trigger: "change" }],
    deptCode: [{ required: true, message: "请选择用户名称", trigger: "change" }],
    roleIds: [{ required: true, message: "请选择角色", trigger: "change" }],
    email: [
      {
        validator: validatorEmail,
        message: "邮箱格式错误",
        trigger: "blur"
      }
    ]
  },
  // 相关列表
  listTypeInfo: {
    sexList: [
      {
        label: "男",
        key: "0"
      },
      {
        label: "女",
        key: "1"
      },
      {
        label: "未知",
        key: "2"
      }
    ]
  }
});
const radioChange = (row: any) => {
  console.log("下拉选择表格-单选", row);
  formOpts.formData.deptCode = row.id;
};
// 弹窗确定提交
const addConfirm = () => {
  formOpts.ref.validate((valid: any) => {
    console.log(88, valid);
    console.log(77, formOpts.formData);
    if (!valid) return;
    console.log("最终数据", formOpts.formData);
    setTimeout(() => {
      ElMessage.success("新增成功");
      addDialog.value = false;
    }, 1500);
  });
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
  const { userName, nickName, date, date1, postId, postId1, phonenumber } = toRefs(state.queryData);
  return {
    userName: userName.value,
    nickName: nickName.value,
    postId: postId.value,
    postId1: postId1.value,
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
