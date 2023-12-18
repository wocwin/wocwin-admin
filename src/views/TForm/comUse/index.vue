<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-form ref="TFormDemo" v-model="formOpts.ref" :formOpts="formOpts" :widthSize="3" />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="ts">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const hobbyList = ref([
  { label: "吉他", value: "0" },
  { label: "看书", value: "1" },
  { label: "美剧", value: "2" },
  { label: "旅游", value: "3" },
  { label: "音乐", value: "4" }
]);
const sexList = ref([
  { label: "女", value: 1 },
  { label: "男", value: 0 }
]);
const statusList = ref([
  { label: "启用", value: 1 },
  { label: "停用", value: 0 }
]);
const tableData = ref([]);
onMounted(() => {
  getData();
  getCascaderList();
});
const cascaderList = ref([]);
const getCascaderList = async () => {
  const res = await proxy.$api.getCascaderList();
  if (res.success) {
    cascaderList.value = res?.data;
  }
};
// 获取用户数据
const getData = async () => {
  const res = await proxy.$api.getSelectTableList();
  if (res.success) {
    tableData.value = res?.data.rows;
  }
};
// 获取ref
const TFormDemo: any = ref<HTMLElement | null>(null);
// 提交formOpts.ref 方式form表单
const submitForm = () => {
  formOpts.ref.validate((valid: any) => {
    console.log(88, valid);
    console.log(77, formOpts.formData);
    if (!valid) return;
    console.log("最终数据", formOpts.formData);
  });
};
// 提交form表单
// const submitForm = async () => {
//   const { valid, formData } = await TFormDemo.value.validate()
//   console.log('formOpts.ref', formOpts.ref)
//   console.log('formOpts.formData', formData)
//   if (!valid) return
//   console.log('最终数据', formData)
// }
// 重置form表单
const resetForm = () => {
  formOpts.formData = {};
  // 清空校验
  TFormDemo.value.clearValidate();
};
const radioChange = (row: any) => {
  console.log("下拉选择表格-单选", row);
  formOpts.formData.deptCode = row.id;
};
const selectionChangeHandler = (row: any, ids: any) => {
  console.log("下拉选择表格--复选框", row, ids);
  formOpts.formData.createDeptCode = ids;
};
const formOpts: any = reactive({
  ref: null,
  labelWidth: "140px",
  formData: {
    sex: null,
    hobby: null,
    hobby1: null,
    status: null,
    wechat: null,
    deptCode: null,
    createDeptCode: null
  },
  fieldList: [
    {
      label: "性别",
      value: "sex",
      placeholder: "TSelect单选",
      type: "select-arr",
      comp: "t-select",
      isSelfCom: true,
      bind: { optionSource: sexList, valueCustom: "value" }
    },
    {
      label: "状态",
      value: "status",
      placeholder: "TSelect单选",
      type: "select-arr",
      comp: "t-select",
      isSelfCom: true,
      bind: { optionSource: statusList, valueCustom: "value" }
    },
    {
      label: "爱好",
      value: "hobby",
      placeholder: "TSelect多选",
      comp: "t-select",
      isSelfCom: true,
      bind: { multiple: true, optionSource: hobbyList, valueCustom: "value" }
    },
    {
      label: "爱好1",
      value: "hobby1",
      placeholder: "TSelect多选",
      comp: "t-select",
      isSelfCom: true,
      bind: { multiple: true, optionSource: hobbyList, valueCustom: "value" }
    },
    {
      label: "部门",
      value: "deptCode1",
      placeholder: "el-cascader使用",
      comp: "el-cascader",
      isSelfCom: true,
      bind: {
        props: {
          children: "children",
          label: "deptName",
          value: "deptNum"
        },
        options: cascaderList
      }
    },
    {
      label: "下拉选择表格-单选",
      value: "deptCode",
      placeholder: "t-select-table单选使用",
      comp: "t-select-table",
      isSelfCom: true,
      bind: {
        isKeyup: true,
        maxHeight: 400,
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
    {
      label: "下拉选择表格-多选",
      value: "createDeptCode",
      placeholder: "t-select-table多选使用",
      comp: "t-select-table",
      isSelfCom: true,
      bind: {
        multiple: true,
        maxHeight: 400,
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
        selectionChange: (val: any, ids: any) => selectionChangeHandler(val, ids)
      }
    }
  ],
  operatorList: [
    { label: "提交", type: "danger", fun: submitForm },
    { label: "重置", type: "primary", fun: resetForm }
  ]
});
</script>
