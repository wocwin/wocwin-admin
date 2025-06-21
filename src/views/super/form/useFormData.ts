import useApi from "@/hooks/useApi";
import { ElMessage } from "element-plus";
export function useFormData() {
  const { proxy } = useApi();
  const table = ref({
    total: 0,
    currentPage: 1, // 当前页
    pageSize: 10, // 每页条数
    data: []
  });
  // 邮箱校验
  const validatorEmail = (rule: { message: string | undefined }, value: string, callback: any) => {
    if (value && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
      callback(new Error(rule.message));
    }
    callback();
  };
  const formOpts = reactive<FormTypes.FormOpts>({
    ref: null,
    labelPosition: "top",
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
      date: null, // 日期
      status: true // 状态
    },
    fieldList: [
      { label: "登录账号", value: "userName", type: "input", comp: "el-input" },
      { label: "登录密码", value: "password", type: "input", comp: "el-input", bind: { "show-password": true } },
      { label: "姓名", value: "nickName", type: "input", comp: "el-input" },
      { label: "性别", value: "sex", type: "select-arr", list: "sexList", comp: "el-select", arrLabel: "label", arrKey: "key" },
      {
        label: "日期",
        value: "date",
        placeholder: "TDatePicker选择日期",
        comp: "t-date-picker"
      },
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
        }
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
        placeholder: "t-select-table多选使用",
        comp: "t-select-table",
        isSelfCom: true,
        bind: {
          multiple: true,
          isKeyup: true,
          isShowPagination: true,
          maxHeight: 400,
          selectWidth: 500,
          defaultSelectVal: [],
          keywords: { label: "userName", value: "userId" },
          table: table,
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
          selectionChange: (val: any) => selectionChange(val),
          "page-change": (val: any) => pageChange(val)
        }
      },
      { label: "备注", value: "remark", type: "input", comp: "el-input" }
    ],
    rules: {
      userName: [{ required: true, message: "请输入登录账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
      nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      deptId: [{ required: true, message: "请选择部门", trigger: "change" }],
      power: [{ required: true, message: "请选择功率", trigger: "change" }],
      deptCode: [{ required: true, message: "请选择用户名称", trigger: "blur" }],
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
  // 获取下拉选择表格数据
  const getSelectTableList = async () => {
    const res = await proxy.$api.getSelectTableList({ page: table.value.currentPage, size: 10 });
    if (res.success) {
      table.value.data = res?.data.rows;
      table.value.total = res?.data.total;
    }
  };
  const pageChange = (page: any) => {
    console.log("pageChange", page);
    table.value.currentPage = page;
    getSelectTableList();
  };
  const selectionChange = (row: any) => {
    console.log("下拉选择表格-单选", row);
    formOpts.formData.deptCode = row.userId;
  };
  // 新增弹窗
  const addDialog = ref(false);
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
        res.data.date = "2024-09-06";
        let formData = res.data;
        formOpts.formData = formData;
        console.log("编辑接口数据返回", formData);
        formOpts.fieldList.map((item: any) => {
          if (item.value === "deptCode") {
            // item.bind.defaultSelectVal = [formData.deptCode];
            item.bind.defaultSelectVal = formData.deptCode;
          }
        });
      });
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
        item.bind.defaultSelectVal = [];
      }
    });
    nextTick(() => {
      formOpts?.ref?.resetFields();
      setTimeout(() => {
        formOpts.ref.clearValidate();
      }, 100);
    });
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
  // 触发事件
  const handleEvent = (type: any, val: any) => {
    console.log("handleEvent", type, val);
  };
  return { getSelectTableList, formOpts, handleAdd, edit, handleEvent, addConfirm, addDialog, title };
}
