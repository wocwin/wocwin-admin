export interface MenuOptions {
  menuId: number;
  parentId: number; // 上级菜单
  orderNum: number; // 排序
  menuType: string; // 菜单类型 M 目录 C 菜单 F 按钮
  path: string; // 菜单路径(路由地址)
  component?: string; // 视图文件路径(组件路径)
  name: string; // 菜单别名
  redirect?: string; // 重定向地址
  meta: MetaProps; // 菜单meta信息
  children?: MenuOptions[];
}
export interface MetaProps {
  icon?: string; // 菜单图标
  title: string; // 菜单标题
  activeMenu?: string; // 当前路由为详情页时，需要高亮的菜单
  isLink?: string; // 是否外链
  isHide: boolean; // 是否隐藏
  isFull: boolean; // 是否全屏
  isAffix: boolean; // 是否固定在 tabs nav
  isKeepAlive: boolean; // 是否缓存
}

export interface FormData {
  parentId: number;
  menuType: string;
  title: string | null;
  orderNum: number;
  icon: string | null;
  isShowLink: boolean;
  isLink: string | null;
  isHide: boolean;
  isFull: boolean;
  isAffix: boolean;
  isKeepAlive: boolean;
  activeMenu: string | null;
  path: string | null;
  component: string | null;
  remark: string | null;
}

export interface FormOpts {
  ref: any;
  formData: FormData;
  fieldList: any;
  rules: any;
  listTypeInfo: any;
}

export interface TypeMap {
  [key: string]: { type: string; val: string };
}
