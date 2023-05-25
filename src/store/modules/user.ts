import { UserState } from "@/store/interface";
import piniaPersistConfig from "@/config/piniaPersist";
import { removeToken, setToken, getToken } from "@/utils/cookies";
import UserInfoData from "./getData/userInfo.json";
import GetTokenData from "./getData/token.json";
import { ElMessage } from "element-plus";
// import { login } from "@/api/login";
export const useUserStore = defineStore({
  id: "wocwin-user",
  state: (): UserState => ({
    token: getToken() || "PC:1_11363596c43444b9bc5c38403c0d9c12",
    name: "",
    nickName: "",
    userId: null,
    userInfo: {}
  }),
  actions: {
    // 登录
    Login(userInfo: any) {
      return new Promise((resolve: any) => {
        console.log("login--", userInfo);
        const res: any = GetTokenData;
        if (res.success) {
          setToken(res.data);
          this.token = res.data;
        } else {
          ElMessage.error(res?.msg);
        }
        resolve();
        // login(userInfo)
        //   .then((res: any) => {
        //     if (res.success) {
        //       setToken(res.data);
        //       this.token = res.data;
        //     } else {
        //       ElMessage.error(res?.msg);
        //     }
        //     resolve();
        //   })
        //   .catch((error: any) => {
        //     reject(error);
        //   });
      });
    },
    // 获取用户信息
    GetInfo() {
      const res: any = UserInfoData;
      // console.log(666, res);
      if (res?.success) {
        const user = res.data;
        this.name = user.userName;
        this.nickName = user.nickName;
        this.userId = user.userId;
        this.userInfo = user;
      } else {
        throw Error("Verification failed, please Login again.");
      }
    },
    // 前端退出
    FedLogOut() {
      removeToken();
      this.token = "";
    },
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig("wocwin-user")
});
