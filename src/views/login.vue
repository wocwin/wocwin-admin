<template>
  <div class="login">
    <div class="square" v-for="index in 10" :key="index" :style="`--i: ${index - 1}`"></div>
    <div class="content">
      <div :class="`star${index}`" v-for="index in 6" :key="index"></div>
      <el-tooltip content="暗黑模式切换" effect="dark" placement="top">
        <SwitchDark class="dark" />
      </el-tooltip>
      <div class="login-left">
        <img class="login-left-img" src="@/assets/logo/login.png" alt="login" />
      </div>
      <div class="input-format">
        <div class="form_content">
          <img src="@/assets/images/logo.jpg" class="logon" />
          <h2 class="title">Wocwin-Admin</h2>
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

const userStore = useUserStore();

const loginForm = reactive({
  username: "",
  password: "",
  rememberMe: false
});
const loginRules = reactive({
  username: [{ required: true, trigger: "blur", message: "用户名不能为空" }],
  password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
});
// 获取cookie中记录用户信息
const username = Cookies.get("username");
const password = Cookies.get("password");
const rememberMe = Cookies.get("rememberMe");
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
      Cookies.set("username", loginForm.username, { expires: 30 });
      Cookies.set("password", encrypt(loginForm.password), {
        expires: 30
      });
      Cookies.set("rememberMe", String(loginForm.rememberMe), {
        expires: 30
      });
    } else {
      Cookies.remove("username");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }
    userStore
      .Login(loginForm)
      .then((res: any) => {
        if (res.success) {
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
@keyframes animate {
  0% {
    transform: translateY(-40px);
    -webkit-transform: translateY(-40px);
  }
  25% {
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
  }
  50% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  75% {
    transform: translateY(20px);
    -webkit-transform: translateY(20px);
  }
  100% {
    transform: translateY(40px);
    -webkit-transform: translateY(40px);
  }
}
@function getShadows($n) {
  $shadows: "#{random(100)}vw #{random(100)}vh #fff";
  @for $i from 2 through $n {
    $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
  }
  @return unquote($shadows);
}
@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
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
  .square {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #4d86ff;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-right: 1px solid #3f89fb;
    border-bottom: 1px solid #3f89fb;
    border-radius: 10px;
    animation: animate 12s linear infinite;
    animation-delay: calc(-1s * var(--i));
    &:nth-child(1) {
      top: -10px;
      right: 50%;
    }
    &:nth-child(2) {
      top: 10%;
      right: 20%;
    }
    &:nth-child(3) {
      top: 10%;
      right: 10px;
    }
    &:nth-child(4) {
      bottom: 10%;
      right: 15%;
      width: 80px;
      height: 80px;
    }
    &:nth-child(5) {
      top: 180px;
      left: 20px;
    }
    &:nth-child(6) {
      bottom: 80px;
      left: 20px;
      width: 70px;
      height: 70px;
    }
    &:nth-child(7) {
      bottom: 40%;
      right: 50px;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(8) {
      top: 120px;
      left: 220px;
      width: 70px;
      height: 70px;
    }
    &:nth-child(9) {
      bottom: 10%;
      right: 40%;
    }
    &:nth-child(10) {
      bottom: 40%;
      right: 45%;
    }
  }
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
        .title {
          margin-top: 8px;
          margin-bottom: 40px;
          font-family: PingFangSC-Medium, "PingFang SC";
          font-weight: 600;
          color: var(--el-text-color-primary);
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
    @for $i from 1 through 6 {
      $duration: floor(calc($duration / 2));
      $count: floor(calc($count / 2));
      .star#{$i} {
        $size: #{$i}px;
        position: fixed;
        top: 0;
        left: 0;
        width: $size;
        height: $size;
        border-radius: 50%;
        box-shadow: getShadows($count);
        animation: moveUp $duration linear infinite;
        &::after {
          position: fixed;
          top: 100vh;
          left: 0;
          width: $size;
          height: $size;
          content: "";
          border-radius: inherit;
          box-shadow: inherit;
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
