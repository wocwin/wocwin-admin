import request from "@/utils/request";

// 获取用户列表
export function userList(params: any) {
  return request({
    url: "/sys/userList",
    method: "get",
    params
  });
}
