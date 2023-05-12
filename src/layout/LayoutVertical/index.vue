<!-- 纵向布局 -->
<template>
  <el-container class="layout">
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo flx-center" @click="goIndex">
          <img class="logo-img" src="@/assets/logo/logo.png" alt="logo" />
          <span class="logo-text" v-show="!isCollapse">wocwin Admin</span>
        </div>
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :router="false"
            :unique-opened="true"
            :collapse-transition="false"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutVertical">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobalStore } from "@/store/modules/global";
import Main from "@/layout/components/Main/index.vue";
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue";
import SubMenu from "@/layout/components/Menu/SubMenu.vue";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const route = useRoute();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const isCollapse = computed(() => globalStore.isCollapse);
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
const goIndex = () => {
  window.location.href = qiankunWindow.__POWERED_BY_QIANKUN__ ? "/wocwin-qiankun/" : "/wocwin-admin/";
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
