import { UserState } from "@/store/interface";
import piniaPersistConfig from "@/config/piniaPersist";
import { removeToken, setToken, getToken } from "@/utils/cookies";
import { ElMessage } from "element-plus";
import { login, getInfo, logout } from "@/api/modules/login";
export const useUserStore = defineStore({
  id: "wocwin-user",
  state: (): UserState => ({
    token: getToken() || "",
    loginName: "",
    name: "",
    nickName: "",
    userId: null,
    userInfo: {}
  }),
  actions: {
    // 登录
    Login(userInfo: any) {
      return new Promise((resolve: any, reject: any) => {
        login(userInfo)
          .then((res: any) => {
            if (res.success) {
              // console.log("login--", userInfo, res);
              setToken(res.data.token);
              this.loginName = res.data.loginName;
              this.token = res.data.token;
            } else {
              ElMessage.error("用户名或密码错误");
            }
            resolve(res);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 获取用户信息
    GetInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res: { success: any; data: unknown }) => {
            if (res?.success) {
              const user: any = res.data;
              this.name = user.userName;
              this.nickName = user.nickName;
              this.userId = user.userId;
              this.userInfo = user;
            }
            resolve(res.data);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 退出系统
    LogOut() {
      return new Promise((resolve, reject) => {
        logout()
          .then((res: any) => {
            removeToken();
            this.token = "";
            this.userInfo = {};
            resolve(res.data);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 前端退出
    FedLogOut() {
      removeToken();
      this.token = "";
      this.userInfo = {};
    }
  },
  persist: piniaPersistConfig("wocwin-user")
});
