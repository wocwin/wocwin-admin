/* Menu */
declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
}
declare interface AnyObject {
  [key: string]: any;
}
/* TForm */
declare namespace FormTypes {
  interface FormOpts {
    ref: any; // 表单实例
    labelPosition?: string; // label对齐方式
    labelWidth?: string; // label宽度
    btnSlotName?: string; // 按钮插槽名称
    formData: AnyObject; // 表单数据
    fieldList: any[]; // 表单项
    rules?: AnyObject; // 表单验证规则
    listTypeInfo?: AnyObject; // 下拉框数据
    operatorList?: any[]; // 操作按钮
  }
}

/* TTable */
declare namespace TableTypes {
  interface Table {
    border?: boolean; // 是否显示边框
    firstColumn?: any[] | AnyObject; // 第一列数据
    rules?: AnyObject; // 表单验证规则
    listTypeInfo?: AnyObject; // 字典过滤
    operator?: any[]; // 操作按钮
    operatorConfig?: AnyObject; // 操作列配置
    currentPage?: Number; // 当前页码
    pageSize?: Number; // 每页条数
    total?: Number; // 总条数
    layout?: string; // 分页布局
    prevText?: string; // 上一页文本
    nextText?: string; // 下一页文本
    size?: string; // 分页尺寸
    data: any[]; // 表格数据
    columns: Columns[]; // 表格列
  }
  interface Columns {
    prop?: string; // 列字段
    label?: string; // 列标题
    width?: string | number; // 列宽度
    minWidth?: string | number; // 列最小宽度
    align?: string; // 列对齐方式
    fixed?: string; // 列固定
    type?: string; // 列类型
    sortable?: any; // 列是否可排序
    sort?: any; // 列排序方式
    isShowCol?: boolean; // 列是否显示
    align?: string; // 列对齐方式
    fixed?: string; // 列固定
    bind?: AnyObject; // el-table-column 属性
    headerRequired?: boolean; // 表头是否显示必填红点
    renderHeader?: (...ags: any[]) => any; // 自定义表头
    render?: (...ags: any[]) => any; // 自定义列内容
    slotName?: string; // 自定义列内容插槽
    canEdit?: boolean; // 是否可编辑
    configEdit?: ConfigEdit; // 编辑配置
    filters?: Filters; // 字典过滤
    children?: any[]; // 子列
  }
  interface Filters {
    list: string; // 字典列表
    key: string; // 字典key
    label: string; // 字典label
  }
  interface ConfigEdit {
    rules?: any; // 校验规则
    editSlotName?: string; // 编辑插槽
    isSelfCom?: boolean; // 是否自定义组件
    bind?: any; // 组件属性(Objec or Function)
    editComponent?: any; // 编辑组件
    placeholder?: string; // 占位符
    width?: string | number; // 编辑框宽度
    type?: string; // 编辑框类型
    prepend?: string; // el-input前缀
    append?: string; // el-input后缀
    label?: string; // label
    list?: string; // 下拉数据字段名称
    arrLabel?: string; // 下拉数据label字段名称
    arrKey?: string; // 下拉数据value字段名称
    event?: string; // 触发handleEvent事件的标识
    eventHandle?: any // 事件处理
  }
}

/* FileType */
declare namespace File {
  type ImageMimeType =
    | "image/apng"
    | "image/bmp"
    | "image/gif"
    | "image/jpeg"
    | "image/pjpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/tiff"
    | "image/webp"
    | "image/x-icon";

  type ExcelMimeType = "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
}

/* Vite */
declare type Recordable<T = any> = Record<string, T>;

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};
