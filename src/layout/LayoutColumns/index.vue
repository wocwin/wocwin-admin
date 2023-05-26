<!-- 分栏布局 -->
<template>
  <el-container class="layout">
    <div class="aside-split">
      <div class="logo flx-center" @click="goIndex">
        <img class="logo-img" src="@/assets/logo/logo.png" alt="logo" />
      </div>
      <el-scrollbar>
        <div class="split-list">
          <div
            class="split-item"
            :class="{ 'split-active': splitActive === item.path || `/${splitActive.split('/')[1]}` === item.path }"
            v-for="item in menuList"
            :key="item.path"
            @click="changeSubMenu(item)"
          >
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span class="title">{{ item.meta.title }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-aside :class="{ 'not-aside': !subMenuList.length }" :style="{ width: isCollapse ? '65px' : '210px' }">
      <div class="logo flx-center">
        <span class="logo-text" v-show="subMenuList.length">{{ isCollapse ? "W" : "wocwin Admin" }}</span>
      </div>
      <el-scrollbar>
        <el-menu
          :default-active="activeMenu"
          :router="false"
          :collapse="isCollapse"
          :collapse-transition="false"
          :unique-opened="true"
        >
          <SubMenu :menuList="subMenuList" />
        </el-menu>
      </el-scrollbar>
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

<script setup lang="ts" name="layoutColumns">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobalStore } from "@/store/modules/global";
import Main from "@/layout/components/Main/index.vue";
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue";
import SubMenu from "@/layout/components/Menu/SubMenu.vue";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const isCollapse = computed(() => globalStore.isCollapse);
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);

const subMenuList = ref<Menu.MenuOptions[]>([]);
const splitActive = ref("");
watch(
  () => [menuList, route],
  () => {
    // 当前菜单没有数据直接 return
    if (!menuList.value.length) return;
    splitActive.value = route.path;
    const menuItem = menuList.value.filter((item: Menu.MenuOptions) => {
      return route.path === item.path || `/${route.path.split("/")[1]}` === item.path;
    });
    if (menuItem[0].children?.length) return (subMenuList.value = menuItem[0].children);
    subMenuList.value = [];
  },
  {
    deep: true,
    immediate: true
  }
);

// change SubMenu
const changeSubMenu = (item: Menu.MenuOptions) => {
  splitActive.value = item.path;
  if (item.children?.length) return (subMenuList.value = item.children);
  subMenuList.value = [];
  router.push(item.path);
};
const goIndex = () => {
  window.location.href = qiankunWindow.__POWERED_BY_QIANKUN__ ? "/wocwin-qiankun/" : "/wocwin-admin/";
};
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  .aside-split {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 70px;
    height: 100%;
    background-color: #191a20;
    border-right: 1px solid var(--el-border-color-light);
    .logo {
      box-sizing: border-box;
      height: 55px;
      cursor: pointer;
      border-bottom: 1px solid #282a35;
      .logo-img {
        width: 32px;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .el-scrollbar {
      height: calc(100% - 55px);
      .split-list {
        flex: 1;
        .split-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #292b35;
          }
          .el-icon {
            font-size: 21px;
          }
          .title {
            margin-top: 6px;
            font-size: 12px;
          }
          .el-icon,
          .title {
            color: #e5eaf3;
          }
        }
        .split-active {
          background-color: var(--el-color-primary) !important;
          .el-icon,
          .title {
            color: #ffffff !important;
          }
        }
      }
    }
  }
  .not-aside {
    width: 0 !important;
    border-right: none !important;
  }
  .el-aside {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    z-index: 5;
    padding: 0;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-border-color-light);
    transition: width 0.3s ease;
    .el-scrollbar {
      height: calc(100% - 55px);
      .el-menu {
        width: 100%;
        overflow-x: hidden;
        border-right: none;
      }
    }
    .logo {
      box-sizing: border-box;
      height: 55px;
      border-bottom: 1px solid var(--el-border-color-light);
      .logo-text {
        font-size: 24px;
        font-weight: bold;
        color: var(--el-menu-text-color);
        white-space: nowrap;
      }
    }
  }
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px;
    background-color: #ffffff;
    border-bottom: 1px solid var(--el-border-color-light);
    :deep(.tool-bar-ri) {
      .toolBar-icon,
      .username {
        color: var(--el-text-color-primary);
      }
    }
  }
}
</style>
