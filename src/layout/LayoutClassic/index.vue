<!-- 经典布局 -->
<template>
  <el-container class="layout">
    <el-header>
      <div class="header-lf">
        <div class="logo flx-center" @click="goIndex">
          <img class="logo-img" src="@/assets/logo/logo.png" alt="logo" />
          <span class="logo-text">wocwin Admin</span>
        </div>
        <ToolBarLeft />
      </div>
      <div class="header-ri">
        <ToolBarRight />
      </div>
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :default-active="activeMenu"
              :router="false"
              :collapse="isCollapse"
              :collapse-transition="false"
              :unique-opened="true"
            >
              <SubMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutClassic">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobalStore } from "@/store/modules/global";
import Main from "@/layout/components/Main/index.vue";
import SubMenu from "@/layout/components/Menu/SubMenu.vue";
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue";
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
.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-header) {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px 0 0;
    background-color: #191a20;
    border-bottom: 1px solid #191a20;
    .header-lf {
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      .logo {
        flex-shrink: 0;
        width: 210px;
        margin-right: 16px;
        cursor: pointer;
        .logo-img {
          width: 28px;
          object-fit: contain;
          margin-right: 6px;
          border-radius: 50%;
        }
        .logo-text {
          font-size: 21.5px;
          font-weight: bold;
          color: #dadada;
          white-space: nowrap;
        }
      }
      .tool-bar-lf {
        .collapse-icon {
          color: #e5eaf3;
        }
        .el-breadcrumb__inner.is-link {
          color: #e5eaf3;
          &:hover {
            color: var(--el-color-primary);
          }
        }
        .el-breadcrumb__item:last-child .el-breadcrumb__inner,
        .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
          color: #cfd3dc;
        }
      }
    }
    .header-ri {
      .tool-bar-ri {
        .toolBar-icon,
        .username {
          color: #e5eaf3;
        }
      }
    }
  }
  .classic-content {
    display: flex;
    height: calc(100% - 50px);
    :deep(.el-aside) {
      z-index: 5;
      width: auto;
      background-color: var(--el-menu-bg-color);
      border-right: 1px solid var(--el-border-color-light);
      .aside-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: width 0.3s ease;
        .el-menu {
          width: 100%;
          overflow-x: hidden;
          border-right: none;
        }
      }
    }
    .classic-main {
      display: flex;
      flex-direction: column;
    }
  }
}
html.dark {
  .el-container {
    :deep(.el-header) {
      border-bottom: 1px solid var(--el-border-color-light);
    }
  }
}
</style>
