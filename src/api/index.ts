import request from "@/utils/request";
// 自动导入modules
const files: any = import.meta.globEager("./modules/*.ts");
let modules: any = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Object.entries(files).forEach(([k, v]) => {
  Object.assign(modules, v);
});

// 数据字典-查询 公共api
export const getDicts = (dictType: any) => {
  return request({ url: `/system/dict/data/type/${dictType}`, method: "GET" });
};
export default {
  getDicts,
  ...modules
};
