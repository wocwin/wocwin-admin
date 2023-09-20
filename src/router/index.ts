import { createRouter, createWebHistory } from "vue-router";
import { getToken } from "@/utils/cookies";
import { useAuthStore } from "@/store/modules/auth";
import { useUserStore } from "@/store/modules/user";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";
import { staticRouter, errorRouter } from "@/router/modules/staticRouter";
import NProgress from "@/config/nprogress";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
/**
 * @description 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名(缓存页面的nama)
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
const router = createRouter({
  history: createWebHistory("/wocwin-admin/"),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // 1.NProgress 开始
  NProgress.start();
  if (getToken()) {
    // 2.动态设置标题
    const title = "Wocwin-Admin";
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;
    // 获取用户信息
    if (!userStore.userInfo?.userId) {
      // console.log("3333333", userStore.userInfo?.userId);
      userStore.GetInfo();
    }
    // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
    if (to.path.toLocaleLowerCase() === LOGIN_URL) {
      if (getToken()) return next(from.fullPath);
      resetRouter();
      return next();
    }
    // 子应用单独运行，直接进入该系统
    // console.log("子应用单独运行，直接进入该系统", to, authStore.authMenuListGet);
    if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
      // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
      if (!authStore.authMenuListGet.length) {
        await initDynamicRouter();
        return next({ ...to, replace: true });
      }
      // 7.存储 routerName 做按钮权限筛选
      authStore.setRouteName(to.name as string);
      // 8.正常访问页面
      next();
    } else {
      if (!authStore.authMenuListGet.length) {
        await initDynamicRouter();
        return next({ ...to, replace: true });
      }
      // console.log("主项目的next", to, authStore.authMenuListGet);
      next();
    }
  } else {
    // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path)) {
      next();
    } else {
      // 5.判断是否有 Token，没有重定向到 login 页面
      next({ path: LOGIN_URL, replace: true });
    }
  }
});

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
  const authStore = useAuthStore();
  authStore.flatMenuListGet.forEach(route => {
    const { name } = route;
    if (name && router.hasRoute(name)) router.removeRoute(name);
  });
};

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
  NProgress.done();
  console.warn("路由错误", error.message);
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});

export default router;
