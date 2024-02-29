<template>
  <t-layout-page>
    <t-layout-page-item>
      模块表单组件待完善 <el-button type="primary" @click="toDetail('edit')">编辑页面</el-button>
      <el-button type="primary" @click="toDetail('detail')">详情页面</el-button></t-layout-page-item
    >
  </t-layout-page>
</template>

<script setup lang="tsx" name="moduleFormDemo">
const router = useRouter();
const toDetail = (type: string) => {
  console.log(`/t-ui-plus/module-form/${type}`);
  router.push({
    path: `/t-ui-plus/module-form/${type}`,
    query: { type }
  });
};
</script>
