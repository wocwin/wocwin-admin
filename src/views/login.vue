<template>
  <div class="login">
    <div class="content">
      <el-tooltip content="暗黑模式切换" effect="dark" placement="top">
        <SwitchDark class="dark" />
      </el-tooltip>
      <div class="login-left">
        <img class="login-left-img" src="@/assets/logo/login.png" alt="login" />
      </div>
      <div class="input-format">
        <div class="form_content">
          <img src="@/assets/images/logo.jpg" class="logon" />
          <div class="title_box">
            <h2 class="title">Wocwin-Admin</h2>
          </div>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" clearable type="text" placeholder="wocwin/user">
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="123456"
                clearable
                @keyup.enter="handleLogin(loginFormRef)"
                show-password
              >
                <template #prefix>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button :loading="loading" size="default" type="primary" style="width: 100%" @click="handleLogin(loginFormRef)">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="login">
import SwitchDark from "@/components/SwitchDark/index.vue";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import type { FormInstance } from "element-plus";
import { useUserStore } from "@/store/modules/user";
import { ElNotification } from "element-plus";
import { getTimeState } from "@/utils";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";
import { useTabsStore } from "@/store/modules/tabs";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
const tabStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();
const userStore = useUserStore();

const loginForm = reactive({
  username: "wocwin",
  password: "123456",
  rememberMe: false
});
const loginRules = reactive({
  username: [{ required: true, trigger: "blur", message: "用户名不能为空" }],
  password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
});
// 获取cookie中记录用户信息
const username = Cookies.get("wocwinUsername");
const password = Cookies.get("wocwinPassword");
const rememberMe = Cookies.get("wocwinRememberMe");
loginForm.username = username ? username : loginForm.username;
loginForm.password = password ? decrypt(password) : loginForm.password;
loginForm.rememberMe = rememberMe ? Boolean(rememberMe) : false;

const loading = ref(false);
const router = useRouter();
const loginFormRef = ref<FormInstance>();
// 点击登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    console.log(111, fields);
    if (!valid) return;
    loading.value = true;
    if (loginForm.rememberMe) {
      Cookies.set("wocwinUsername", loginForm.username, { expires: 30 });
      Cookies.set("wocwinPassword", encrypt(loginForm.password), {
        expires: 30
      });
      Cookies.set("wocwinRememberMe", String(loginForm.rememberMe), {
        expires: 30
      });
    } else {
      Cookies.remove("wocwinUsername");
      Cookies.remove("wocwinPassword");
      Cookies.remove("wocwinRememberMe");
    }
    userStore
      .Login(loginForm)
      .then(async (res: any) => {
        if (res.success) {
          await initDynamicRouter();
          tabStore.closeMultipleTab();
          keepAliveStore.setKeepAliveName();
          router.push({ path: "/" });
          ElNotification({
            title: getTimeState(),
            message: `欢迎登录 Wocwin-Admin；${res.data.loginName === "wocwin" ? "超管账号" : "游客账号"}`,
            type: "success",
            duration: 3000
          });
        }
      })
      .finally(() => (loading.value = false));
  });
};
</script>

<style lang="scss">
@keyframes loginline {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes expand {
  from {
    letter-spacing: -20px;
    filter: blur(2px);
  }
  to {
    letter-spacing: 0px;
    filter: blur(0px);
  }
}
$duration: 600s;
$count: 1400;
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(#4d3af9, #255fff, #3f89fb, #5088ff, #1a68ff);
  background-size: cover;
  position: relative;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 92%;
    padding: 0 30px;
    background-color: rgb(255 255 255 / 60%);
    border-radius: 15px;
    position: relative;
    .dark {
      position: absolute;
      top: 13px;
      right: 18px;
    }
    .watermark {
      position: absolute;
      top: 13px;
      right: 128px;
    }
    .login-left {
      width: 660px;
      margin-right: 10px;
      box-shadow: 2px 3px 20px 4px #b2b6fe;
      border-radius: 15px;
      .login-left-img {
        width: 100%;
        height: 100%;
      }
    }
    .input-format {
      width: 354px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      padding: 2px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        z-index: 0;
        width: 350px;
        height: 440px;
        background: linear-gradient(0deg, transparent, transparent, #4b3bf9, #4b3bf9, #4b3bf9);
        transform-origin: bottom right;
        animation: loginline 5s linear infinite;
      }
      &::after {
        background: linear-gradient(0deg, transparent, transparent, #ff2771, #ff2771, #ff2771);
        animation-delay: -3s;
      }
      .form_content {
        width: 350px;
        max-height: 440px;
        padding: 20px;
        text-align: center;
        background-color: var(--el-bg-color);
        border-radius: 10px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
        position: relative;
        .logon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .title_box {
          filter: contrast(10);
          .title {
            margin-top: 8px;
            margin-bottom: 40px;
            font-family: PingFangSC-Medium, "PingFang SC";
            font-weight: 600;
            color: var(--el-text-color-primary);
            animation: expand 5s forwards infinite;
          }
        }

        .login-form {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-size: 14px;
          font-feature-settings: "tnum";
          font-variant: tabular-nums;
          line-height: 1.5;
          color: var(--el-text-color-primary);
          list-style: none;
          .el-input {
            height: 38px;
            input {
              height: 38px;
            }
          }
          .input-icon {
            width: 14px;
            height: 39px;
            margin-left: 2px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1150px) {
    .content {
      justify-content: center;
      .login-left {
        display: none;
      }
    }
  }
}
</style>
