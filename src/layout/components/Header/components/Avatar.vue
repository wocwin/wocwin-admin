<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="@/assets/logo/logo.png" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu class="user_info">
        <el-dropdown-item @click="openDialog('infoRef')">
          <el-icon>
            <User />
          </el-icon>
          {{ $t("header.personalData") }}
        </el-dropdown-item>
        <el-dropdown-item @click="openDialog('passwordRef')">
          <el-icon>
            <Edit />
          </el-icon>
          {{ $t("header.changePassword") }}
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><Memo /></el-icon>
          <a href="https://wocwin.github.io/t-ui/" target="_blank">vue2基础组件文档</a>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><Memo /></el-icon>
          <a href="https://wocwin.github.io/t-ui-plus/" target="_blank">vue3基础组件文档</a>
        </el-dropdown-item>
        <el-dropdown-item @click="logout" divided>
          <el-icon>
            <SwitchButton />
          </el-icon>
          {{ $t("header.logout") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- infoDialog -->
  <InfoDialog ref="infoRef"></InfoDialog>
  <!-- passwordDialog -->
  <PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup lang="ts">
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import { useUserStore } from "@/store/modules/user";
import { ElMessageBox, ElMessage } from "element-plus";
import InfoDialog from "./InfoDialog.vue";
import PasswordDialog from "./PasswordDialog.vue";

const userStore = useUserStore();

// 退出登录
const logout = () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 1.执行退出登录接口
    await userStore.LogOut();
    window.location.href = qiankunWindow.__POWERED_BY_QIANKUN__ ? "/wocwin-qiankun/" : "/wocwin-admin/";
    ElMessage.success("退出登录成功！");
  });
};

// 打开修改密码和个人信息弹窗
const infoRef = ref<InstanceType<typeof InfoDialog> | null>(null);
const passwordRef = ref<InstanceType<typeof PasswordDialog> | null>(null);
const openDialog = (ref: string) => {
  if (ref == "infoRef") infoRef.value?.openDialog();
  if (ref == "passwordRef") passwordRef.value?.openDialog();
};
</script>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
.user_info {
  cursor: pointer;
  :deep(.el-dropdown-menu__item) {
    display: flex;
    align-items: center;
    flex-direction: inherit;
    a {
      user-select: none;
    }
  }
}
</style>
