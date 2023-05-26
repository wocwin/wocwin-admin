<template>
  <t-layout-page>
    <t-layout-page-item> 用户管理列表---子级详情页面参数{{ route.query }} </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="tsx" name="accountManageDetail">
const route = useRoute();
</script>
