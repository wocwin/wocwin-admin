<template>
  <t-layout-page class="anth_menu">
    <t-layout-page-item class="anth_menu_item">
      <el-alert
        title="目前菜单权限使用动态路由实现，模拟后台根据不同用户角色返回对应路由，注意观察左侧菜单变化（wocwin 账号可查看所有菜单、user 账号只可查看部分菜单）"
        :closable="false"
        type="success"
        effect="dark"
      />
      <div>
        当前登陆账号是：{{
          loginName === "user"
            ? `${loginName}（即：游客账号---> 没有大屏、高德地图、复杂组件使用菜单；系统管理--没有部分按钮）`
            : `${loginName}（即：超管账号）`
        }}
      </div>
      <el-button type="primary" icon="Promotion" @click="handleToLogin">登录其他账号</el-button>
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="ts" name="anthMenu">
import { useRouter } from "vue-router";
import { LOGIN_URL } from "@/config";
import { useUserStore } from "@/store/modules/user";

const router = useRouter();
const userStore = useUserStore();

const loginName = computed(() => userStore.loginName);

const handleToLogin = async () => {
  await userStore.LogOut();
  router.push(LOGIN_URL);
};
</script>
<style lang="scss" scoped>
.anth_menu {
  .anth_menu_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div,
    .el-button {
      margin-top: 15px;
    }
  }
}
</style>
