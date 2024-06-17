<template>
  <t-layout-page>
    <t-layout-page-item>
      <el-radio-group v-model="widthSize" v-if="isShowWidthSize" size="small" style="margin-bottom: 15px">
        <el-radio-button :value="2">一行展示2项</el-radio-button>
        <el-radio-button :value="3">一行展示3项</el-radio-button>
        <el-radio-button :value="4">一行展示4项</el-radio-button>
        <el-radio-button :value="5">一行展示5项</el-radio-button>
        <el-radio-button :value="6">一行展示6项</el-radio-button>
      </el-radio-group>
      <t-query-condition
        :opts="opts"
        @submit="conditionEnter"
        isExpansion
        :isShowWidthSize="isShowWidthSize"
        :widthSize="widthSize"
      >
        <template #disabledDate="{ param }">
          <el-date-picker
            v-model="param.disabledDate"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            :disabled-date="disabledDate"
            @calendar-change="calendarChange"
          />
        </template>
        <template #querybar>
          <el-button type="danger" @click="isShowWidthSize = !isShowWidthSize"
            >{{ isShowWidthSize ? "关闭" : "开启" }}每行展示多少项</el-button
          >
        </template>
      </t-query-condition>
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
          <el-button type="primary" @click="handleTableAdd">
            {{ state.table.firstColumn ? "清除序列号" : "新增序列号" }}
          </el-button>
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
          <el-button type="primary" @click="addConfirm">确定</el-button>
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
// 禁用日期（只能选择7天内）
const firstChooseDate: any = ref("");
const disabledDate = (time: Date) => {
  if (firstChooseDate.value) {
    const timeRange = 1 * 24 * 60 * 60 * 1000; // 1天时间戳
    const minTime = firstChooseDate.value - timeRange * 7;
    const maxTime = firstChooseDate.value + timeRange * 6;
    return time.getTime() <= minTime || time.getTime() > maxTime;
  } else {
    return false;
  }
};
const calendarChange = (val: any) => {
  firstChooseDate.value = val[0].getTime(); //点击第一次选中日期
  if (val[1]) firstChooseDate.value = ""; // 选中后必须清空
};
// 一行展示几项
const widthSize = ref(4);
// 是否显示一行展示几项
const isShowWidthSize = ref(false);
// 序列号翻页是否累加
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
    postId: null,
    postId1: null,
    postId2: null,
    phonenumber: null,
    nickName: null, // 用户状态
    remark: null, // 用户状态
    email: null,
    disabledDate: null,
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
const opts: any = ref({
  userName: {
    label: "登录名称",
    comp: "el-input"
  },
  nickName: {
    label: "姓名",
    comp: "el-input"
  },
  date1: {
    label: "日期组件使用",
    comp: "t-date-picker",
    bind: {
      isPickerOptions: true
    }
  },
  postId2: {
    labelRender: () => {
      return <div style="color:red">新增项条件</div>;
    },
    placeholder: "选择前端开发才新增",
    comp: "t-select",
    isSelfCom: true,
    bind: {
      labelCustom: "postName",
      valueCustom: "postId",
      optionSource: []
    },
    eventHandle: {
      change: (val: any) => handleBranchCode(val)
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
      optionSource: []
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
  disabledDate: {
    labelRender: () => {
      return <label style="color:red">禁用时间</label>;
    },
    span: 2,
    slotName: "disabledDate"
  },
  date: {
    label: "创建时间",
    comp: "t-date-picker",
    span: 2,
    bind: {
      type: "daterange",
      isPickerOptions: true
    }
  }
});
// 动态添加
const add = {
  phonenumber: {
    label: "手机号码",
    comp: "el-input"
  },
  email: {
    label: "邮箱",
    comp: "el-input"
  },
  remark: {
    label: "备注",
    comp: "el-input"
  }
};
// t-select使用动态新增数据
const handleBranchCode = (val: number) => {
  console.log("handleBranchCode", val);
  if (val === 4) {
    opts.value = {
      ...opts.value,
      ...add
    };
    // Object.keys(add).forEach(key => {
    //   state.queryData[key] = null;
    // });
  } else {
    Object.keys(add).forEach(key => {
      delete opts.value[key];
    });
  }
};
watch(
  () => state.queryData.postId2,
  val => {
    console.log("watch---val", val);
    handleBranchCode(val);
  },
  {
    deep: true
  }
);
// 最终参数获取
const getQueryData = computed(() => {
  const { userName, nickName, date, date1, postId, postId1, postId2, disabledDate } = toRefs(state.queryData);
  return {
    userName: userName.value,
    postId: postId.value,
    postId1: postId1.value,
    postId2: postId2.value,
    nickName: nickName.value,
    remark: state.queryData.remark,
    phonenumber: state.queryData.phonenumber,
    email: state.queryData.email,
    date1: date1.value,
    start_time: disabledDate.value && disabledDate.value[0] ? disabledDate.value[0] : null,
    end_time: disabledDate.value && disabledDate.value[1] ? disabledDate.value[1] : null,
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
    opts.value.postId.bind.optionSource = res.data;
    opts.value.postId2.bind.optionSource = res.data;
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
