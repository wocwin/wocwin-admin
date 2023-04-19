<template>
  <div class="not-container">
    <img src="@/assets/images/500.png" class="not-img" alt="500" />
    <div class="not-detail">
      <h2>500</h2>
      <h4>抱歉，您的网络不见了~🤦‍♂️🤦‍♀️</h4>
      <el-button type="primary" @click="router.push(HOME_URL)">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="500">
import { HOME_URL } from "@/config";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<style scoped lang="scss">
.not-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .not-img {
    margin-right: 120px;
  }
  .not-detail {
    display: flex;
    flex-direction: column;
    h2,
    h4 {
      padding: 0;
      margin: 0;
    }
    h2 {
      font-size: 60px;
      color: var(--el-text-color-primary);
    }
    h4 {
      margin: 30px 0 20px;
      font-size: 19px;
      font-weight: normal;
      color: var(--el-text-color-regular);
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>
