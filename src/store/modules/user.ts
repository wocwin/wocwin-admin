import { UserState } from "@/store/interface";
import piniaPersistConfig from "@/config/piniaPersist";
import { removeToken, setToken, getToken } from "@/utils/cookies";
import UserInfoData from "./getData/userInfo.json";
import GetTokenData from "./getData/token.json";
import { ElMessage } from "element-plus";
export const useUserStore = defineStore({
  id: "wocwin-user",
  state: (): UserState => ({
    token: getToken() || "PC:179_bb5c02174b084e04a16b1d7f3c0ca5bf",
    name: "",
    nickName: "",
    userId: null,
    userInfo: {}
  }),
  actions: {
    // 登录
    Login() {
      return new Promise((resolve: any) => {
        const res: any = GetTokenData;
        if (res.success) {
          setToken(res.data);
          this.token = res.data;
        } else {
          ElMessage.error(res?.msg);
        }
        resolve();
      });
    },
    // 获取用户信息
    GetInfo() {
      const res: any = UserInfoData;
      console.log(666, res);
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
