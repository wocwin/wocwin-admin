import request from "@/utils/request";

// 获取用户列表
export function userList(params: any) {
  return request({
    url: "/sys/userList",
    method: "get",
    params
  });
}
// 部门管理list
export function deptList(params: any) {
  return request({
    url: "/sys/deptList",
    method: "get",
    params
  });
}
// 角色管理list
export function roleList(params: any) {
  return request({
    url: "/sys/roleList",
    method: "get",
    params
  });
}
// 字典管理list
export function dictList(params: any) {
  return request({
    url: "/sys/dictList",
    method: "get",
    params
  });
}
// 字典管理list--type list
export function childDictList(params: any) {
  return request({
    url: "/sys/childDictList",
    method: "get",
    params
  });
}
// 系统日志列表
export function logList(params: any) {
  return request({
    url: "/sys/logList",
    method: "get",
    params
  });
}
