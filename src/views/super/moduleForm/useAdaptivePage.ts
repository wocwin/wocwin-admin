import useApi from "@/hooks/useApi";
import { ElMessageBox, ElMessage } from "element-plus";
export function useAdaptivePage() {
  const { proxy } = useApi();
  const router = useRouter();
  const edit = async (row: any) => {
    console.log("edit", row);
    router.push({
      path: `/t-ui-plus/module-form/edit`,
      query: { type: "edit" }
    });
  };
  const onDetail = (row: any) => {
    console.log("点击进入详情", row);
    router.push({
      path: `/t-ui-plus/module-form/detail`,
      query: { type: "detail" }
    });
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
          text: "详情",
          fun: onDetail
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
      state.table.firstColumn = [{ type: "selection", fixed: true }, { type: "index" }];
    }
  };

  const handleAdd = () => {
    console.log("点击新增");
    router.push({
      path: `/t-ui-plus/module-form/edit`,
      query: { type: "add" }
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
  // 获取tree数据
  const treeselect = async () => {
    const res = await proxy.$api.treeselect();
    if (res.success) {
      state.deptOptions = res.data;
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
    }
  };
  // 获取角色
  const getRoles = async () => {
    const res = await proxy.$api.getRoles();
    if (res.success) {
      state.rolesOptions = res.data;
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
  return {
    handlesSizeChange,
    handlesCurrentChange,
    getData,
    getPost,
    getRoles,
    treeselect,
    selectionChange,
    conditionEnter,
    handleAdd,
    handleTableAdd,
    state,
    opts
  };
}
