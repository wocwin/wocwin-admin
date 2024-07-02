<!-- 横向布局 -->
<template>
  <el-container class="layout">
    <el-header>
      <div class="logo flx-center" @click="goIndex">
        <img class="logo-img" src="@/assets/logo/logo.png" alt="logo" />
        <span class="logo-text">wocwin Admin</span>
      </div>
      <el-menu mode="horizontal" :default-active="activeMenu" :router="false" :unique-opened="true">
        <!-- 不能直接使用 SubMenu 组件，无法触发 el-menu 隐藏省略功能 -->
        <template v-for="subItem in menuList" :key="subItem.path">
          <el-sub-menu v-if="subItem.children?.length" :index="subItem.path + 'el-sub-menu'" :key="subItem.path">
            <template #title>
              <el-icon>
                <component :is="subItem.meta.icon"></component>
              </el-icon>
              <span>{{ subItem.meta.title }}</span>
            </template>
            <SubMenu :menuList="subItem.children" />
          </el-sub-menu>
          <el-menu-item v-else :index="subItem.path" :key="subItem.path + 'el-menu-item'" @click="handleClickMenu(subItem)">
            <el-icon>
              <component :is="subItem.meta.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ subItem.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>
    <Main />
  </el-container>
</template>

<script setup lang="ts" name="layoutTransverse">
import { computed } from "vue";
import { useAuthStore } from "@/store/modules/auth";
import { useRoute, useRouter } from "vue-router";
import Main from "@/layout/components/Main/index.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue";
import SubMenu from "@/layout/components/Menu/SubMenu.vue";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);

const handleClickMenu = (subItem: Menu.MenuOptions) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
  router.push(subItem.path);
};
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
    border-bottom: 1px solid var(--el-border-color-light);
    .logo {
      width: 210px;
      margin-right: 30px;
      cursor: pointer;
      .logo-img {
        width: 28px;
        border-radius: 50%;
        object-fit: contain;
        margin-right: 6px;
      }
      .logo-text {
        font-size: 21.5px;
        font-weight: bold;
        color: #dadada;
        white-space: nowrap;
      }
    }
    .el-menu {
      flex: 1;
      height: 100%;
      overflow: hidden;
      border-bottom: none;
      .el-sub-menu__hide-arrow {
        width: 65px;
        height: 55px;
      }
      .is-active {
        background-color: var(--el-color-primary) !important;
        border-bottom-color: var(--el-color-primary) !important;
        &::before {
          width: 0;
        }
        .el-sub-menu__title {
          background-color: var(--el-color-primary) !important;
          border-bottom-color: var(--el-color-primary) !important;
        }
      }
    }
    .tool-bar-ri {
      .toolBar-icon,
      .username {
        color: #e5eaf3;
      }
    }
  }
}
</style>
