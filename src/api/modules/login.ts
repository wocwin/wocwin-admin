import request from "@/utils/request";

// 登录方法
export function login(data: any) {
  return request({
    url: "/auth/login",
    method: "POST",
    data
  });
}

// 获取当前登录用户所有按钮权限
export function getPermBtm() {
  return request({
    url: "/auth/buttons"
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: "/userinfo",
    method: "get"
  });
}

// 退出方法
export function logout() {
  return request({
    url: "/auth/logout",
    method: "post"
  });
}
// 获取路由
export function getRouters() {
  return request({
    url: "/menu/getRouters",
    method: "get"
  });
}
