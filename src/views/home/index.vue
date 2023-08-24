<template>
  <t-layout-page class="dashboard-container">
    <!-- github角标 -->
    <github-corner class="github-corner" />
    <t-layout-page-item>
      <!-- 用户信息 -->
      <div class="mb-8">
        <el-card class="w-full">
          <div class="flex-box flex-between flex-wrap">
            <div class="flex-box flex-ver-v">
              <img class="user-avatar" src="@/assets/logo/logo.png" />
              <span class="ml-[10px] text-[16px]" style="margin-left: 5px">
                {{ username || "wocwin" }}
              </span>
            </div>
            <div class="flex-box flex-ver-v" style="margin-top: 5px">
              <a style="padding: 0 5px" href="https://github.com/vuejs/vue" target="_blank">
                <img src="https://img.shields.io/badge/vue-3.2.47-brightgreen.svg" alt="vue3" />
              </a>
              <a style="padding: 0 5px" href="https://github.com/vitejs/vite" target="_blank">
                <img src="https://img.shields.io/badge/vite-4.3.9-brightgreen.svg" alt="vite4" />
              </a>
              <a style="padding: 0 5px" href="https://github.com/wocwin/wocwin-admin/stargazers" target="_blank">
                <img src="https://img.shields.io/github/stars/wocwin/wocwin-admin.svg" alt="wocwin-admin" />
              </a>
            </div>
            <div class="space-x-2 flex-box flex-ver-v">
              <el-divider direction="vertical" />
              <el-link target="_blank" type="success" href="https://gitee.com/wocwin/wocwin-admin">Gitee源码</el-link>
              <el-divider direction="vertical" />
              <el-link target="_blank" type="primary" href="https://github.com/wocwin/wocwin-admin">GitHub源码 </el-link>
            </div>
          </div>
        </el-card>
      </div>
    </t-layout-page-item>
    <t-layout-page-item>
      <!-- Echarts 图表 -->
      <el-row :gutter="40">
        <el-col :sm="24" :lg="8" class="mb-4">
          <BarChart id="barChart" height="400px" width="100%" class="bg-[var(--el-bg-color-overlay)]" />
        </el-col>

        <el-col :xs="24" :sm="12" :lg="8" class="mb-4">
          <PieChart id="pieChart" height="400px" width="100%" class="bg-[var(--el-bg-color-overlay)]" />
        </el-col>

        <el-col :xs="24" :sm="12" :lg="8" class="mb-4">
          <RadarChart id="radarChart" height="400px" width="100%" class="bg-[var(--el-bg-color-overlay)]" />
        </el-col>
      </el-row>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts" name="Dashboard">
import { useUserStore } from "@/store/modules/user";

import GithubCorner from "./components/GithubCorner.vue";
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import RadarChart from "./components/RadarChart.vue";

const userStore = useUserStore();
const username = computed(() => userStore.name);
const { appContext } = getCurrentInstance() as any;
const global = appContext.config.globalProperties;
// 获取所有业务api接口
console.log("获取所有业务api接口", global.$api);
</script>

<style lang="scss" scoped>
.dashboard-container {
  position: relative;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .w-full {
    width: 100%;
  }

  .github-corner {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 99;
    border: 0;
  }

  .data-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }

  .svg-icon {
    fill: currentcolor !important;
  }
}
</style>
