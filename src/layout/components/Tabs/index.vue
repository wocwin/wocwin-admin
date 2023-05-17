<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @contextmenu="openMenu($event)" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.close">
          <template #label>
            <el-icon class="tabs-icon" v-show="item.icon && tabsIcon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
      <div class="right-tag">
        <el-divider direction="vertical" />
        <div @click="refresh" class="tabs_icon">
          <el-tooltip effect="dark" :content="$t('tabs.refresh')" placement="bottom">
            <el-icon><Refresh /></el-icon>
          </el-tooltip>
        </div>
        <el-divider direction="vertical" />
        <div @click="maximize" class="tabs_icon">
          <el-tooltip effect="dark" :content="$t('tabs.maximize')" placement="bottom">
            <el-icon><FullScreen /></el-icon>
          </el-tooltip>
        </div>
      </div>
    </div>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="closeCurrentTab">
        <el-icon><Remove /></el-icon>{{ $t("tabs.closeCurrent") }}
      </li>
      <li @click="closeOtherTab">
        <el-icon><CircleClose /></el-icon>{{ $t("tabs.closeOther") }}
      </li>
      <li @click="closeAllTab">
        <el-icon><FolderDelete /></el-icon>{{ $t("tabs.closeAll") }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Sortable from "sortablejs";
import { HOME_URL } from "@/config";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/store/modules/global";
import { useTabsStore } from "@/store/modules/tabs";
import { useAuthStore } from "@/store/modules/auth";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
import { TabsPaneContext, TabPaneName } from "element-plus";

const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();

const tabsMenuValue = ref(route.fullPath);
const tabsMenuList = computed(() => tabStore.tabsMenuList);
const tabsIcon = computed(() => globalStore.tabsIcon);

const visible = ref(false);
const top = ref(0);
const left = ref(0);
// 右击打开页签操作
const openMenu = (e: MouseEvent) => {
  e.preventDefault();
  const { clientX, clientY } = e;
  left.value = clientX;
  top.value = clientY + 5;
  if (tabsMenuList.value.length < 2) {
    visible.value = false;
  } else {
    visible.value = true;
  }
};

const closeMenu = () => {
  visible.value = false;
};
watch(visible, value => {
  if (value) {
    document.body.addEventListener("click", closeMenu);
  } else {
    document.body.removeEventListener("click", closeMenu);
  }
});

// Close Current
const closeCurrentTab = () => {
  if (route.meta.isAffix) return;
  tabStore.removeTabs(route.fullPath);
  keepAliveStore.removeKeepAliveName(route.name as string);
};

// Close Other
const closeOtherTab = () => {
  tabStore.closeMultipleTab(route.fullPath);
  keepAliveStore.setKeepAliveName([route.name] as string[]);
};

// Close All
const closeAllTab = () => {
  tabStore.closeMultipleTab();
  keepAliveStore.setKeepAliveName();
  router.push(HOME_URL);
};

// maximize current page
const maximize = () => {
  globalStore.setGlobalState("maximize", true);
};

// refresh current page
const refreshCurrentPage: Function = inject("refresh") as Function;
const refresh = () => {
  setTimeout(() => {
    keepAliveStore.removeKeepAliveName(route.name as string);
    refreshCurrentPage(false);
    nextTick(() => {
      keepAliveStore.addKeepAliveName(route.name as string);
      refreshCurrentPage(true);
    });
  }, 0);
};

onMounted(() => {
  tabsDrop();
  initTabs();
});

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return;
    tabsMenuValue.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: !route.meta.isAffix
    };
    tabStore.addTabs(tabsParams);
    route.meta.isKeepAlive && keepAliveStore.addKeepAliveName(route.name as string);
  },
  { immediate: true }
);

// tabs 拖拽排序
const tabsDrop = () => {
  Sortable.create(document.querySelector(".el-tabs__nav") as HTMLElement, {
    draggable: ".el-tabs__item",
    animation: 300,
    onEnd({ newIndex, oldIndex }) {
      const tabsList = [...tabStore.tabsMenuList];
      const currRow = tabsList.splice(oldIndex as number, 1)[0];
      tabsList.splice(newIndex as number, 0, currRow);
      tabStore.setTabs(tabsList);
    }
  });
};

// 初始化需要固定的 tabs
const initTabs = () => {
  authStore.flatMenuListGet.forEach(item => {
    if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
      const tabsParams = {
        icon: item.meta.icon,
        title: item.meta.title,
        path: item.path,
        name: item.name,
        close: !item.meta.isAffix
      };
      tabStore.addTabs(tabsParams);
    }
  });
};

// Tab Click
const tabClick = (tabItem: TabsPaneContext) => {
  const fullPath = tabItem.props.name as string;
  router.push(fullPath);
};

// Remove Tab
const tabRemove = (fullPath: TabPaneName) => {
  const name = tabStore.tabsMenuList.filter(item => item.path == fullPath)[0].name || "";
  keepAliveStore.removeKeepAliveName(name);
  tabStore.removeTabs(fullPath as string, fullPath == route.fullPath);
};
</script>

<style scoped lang="scss">
.tabs-box {
  background-color: var(--el-bg-color);
  .tabs-menu {
    position: relative;
    width: 100%;
    .el-dropdown {
      position: absolute;
      top: 8px;
      right: 13px;
    }
    .right-tag {
      position: fixed;
      top: 55px;
      right: 15px;
      z-index: 100;
      display: flex;
      align-items: center;
      .tabs_icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--el-text-color-primary);
        cursor: pointer;
      }
      :deep(.el-button) {
        height: 39px;
        line-height: 39px;
        border-radius: 0;
        padding: 15px;
      }
    }
    :deep(.el-tabs) {
      .el-tabs__header {
        box-sizing: border-box;
        height: 40px;
        padding: 0 10px;
        margin: 0;
        .el-tabs__nav-wrap {
          position: absolute;
          width: calc(100% - 130px);
          .el-tabs__nav {
            display: flex;
            border: none;
            .el-tabs__item {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #afafaf;
              border: none;
              .tabs-icon {
                margin: 1.5px 4px 0 0;
                font-size: 15px;
              }
              .is-icon-close {
                margin-top: 1px;
              }
              &.is-active {
                color: var(--el-color-primary);
                &::before {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 0;
                  content: "";
                  border-bottom: 2px solid var(--el-color-primary) !important;
                }
              }
            }
          }
        }
      }
    }
    // .tabs_drop {
    //   :deep(.el-dropdown-menu__item) {
    //     display: flex;
    //     align-items: center;
    //     flex-direction: inherit;
    //   }
    // }
  }
  .contextmenu {
    margin: 0;
    background-color: var(--el-bg-color-overlay);
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    color: var(--el-text-color-regular);
    box-shadow: 2px 2px 3px 0 #00000030;
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #eee;
        border-radius: 4px;
        color: var(--el-color-primary);
      }
      .el-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
