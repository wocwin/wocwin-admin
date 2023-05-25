<template>
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
</template>

<script setup lang="ts">
import { HOME_URL } from "@/config";
import { useRoute, useRouter } from "vue-router";
import { useTabsStore } from "@/store/modules/tabs";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
defineProps({
  visible: {
    type: Boolean,
    required: false
  },
  top: {
    type: Number,
    default: 0
  },
  left: {
    type: Number,
    default: 0
  }
});
const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();

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
</script>
