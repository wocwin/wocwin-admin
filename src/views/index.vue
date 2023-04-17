<template>
  <div class="home">
    欢迎vite+vue3+ts+pinia+element-plus+qiankun项目
    <el-icon :size="30" color="red">
      <Edit />
    </el-icon>
  </div>
</template>
<script setup lang="ts">
// import { getCurrentInstance } from "vue";
// const { proxy } = getCurrentInstance() as any;
// 获取列表数据
// const getList = async () => {
//   const res = await proxy.$api.materialList();
//   console.log("proxy", res);
//   if (res?.success) {
//     console.log("获取接口数据", res.data.records);
//   }
// };
// getList()
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #fff;
}
</style>
