<template>
  <div class="t-antd-select-table">
    <a-select
      ref="selectRef"
      v-model:value="childSelectedValue"
      popupClassName="t_antd_select_dropdown"
      :style="`width:${typeof selectWidth === 'number' ? `${selectWidth}px` : `${selectWidth}`}`"
      :mode="mode"
      :open="open"
      v-bind="selectAttr"
      :value-key="keywords.value"
      :filterOption="false"
      @search="filterMethodHandle"
      @dropdown-visible-change="visibleChange"
      @deselect="removeTag"
      @clear="clear"
      @input-key-down="selectKeyup"
    >
      <template #notFoundContent>
        <div class="t-table-select__table" :style="{ width: `${tableWidth}px` }">
          <slot name="search"></slot>
          <a-table
            ref="selectTable"
            :data-source="state.tableData"
            :columns="columns"
            bordered
            :row-key="getRowKey"
            :row-class-name="getRowClass"
            :pagination="isShowPagination && table.pagination"
            :row-selection="
              rowSelection || {
                selectedRowKeys: state.selectedRowKeys,
                onChange: onSelectChange,
                onSelectNone: onSelectNone,
                getCheckboxProps: getCheckboxProps,
                type: mode === 'multiple' ? 'checkbox' : 'radio'
              }
            "
            :customRow="rowClick"
            v-bind="$attrs"
          >
            <template #[item]="scope" v-for="item in slotsArr">
              <slot :name="item" :scope="scope" v-bind="scope || {}"></slot>
            </template>
            <slot name="footer"></slot>
          </a-table>
          <slot />
        </div>
      </template>
    </a-select>
    <a-button v-if="isShowSelectBtn" @click="selectBtnClick" v-bind="btnBind">{{ btnBind.btnTxt }}</a-button>
    <a-modal
      v-model:open="openModal"
      wrapClassName="t_select_modal"
      v-bind="modalBind"
      :title="modalBind.modalTxt"
      @ok="handleOk"
    >
      <div class="modal_search">
        <div class="search_label">{{ inputBind.searchTxt }}：</div>
        <a-input
          :placeholder="`请输入${inputBind.searchTxt}`"
          v-bind="inputBind"
          :style="{ width: inputBind.inputWidth }"
          v-model:value="searchModalValue"
          @change="searchModalChange"
        >
          <template #[item]="scope" v-for="item in slotsArr">
            <slot :name="item" :scope="scope" v-bind="scope || {}"></slot>
          </template>
        </a-input>
      </div>
      <a-table
        ref="selectTable"
        :data-source="state.tableData"
        :columns="columns"
        bordered
        :row-key="getRowKey"
        :row-class-name="getRowClass"
        :pagination="isShowPagination && table.pagination"
        :row-selection="
          rowSelection || {
            selectedRowKeys: state.selectedRowKeys,
            onChange: onSelectChange,
            onSelectNone: onSelectNone,
            getCheckboxProps: getCheckboxProps,
            preserveSelectedRowKeys: preserveSelectedRowKeys,
            type: mode === 'multiple' ? 'checkbox' : 'radio'
          }
        "
        :customRow="rowClick"
        v-bind="$attrs"
      >
        <template #[item]="scope" v-for="item in slotsArr">
          <slot :name="item" :scope="scope" v-bind="scope || {}"></slot>
        </template>
        <slot></slot>
      </a-table>
      <template #[item]="scope" v-for="item in slotsArr">
        <slot :name="item" :scope="scope" v-bind="scope || {}"></slot>
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts">
export default {
  name: "TAntdSelectTable"
};
</script>
<script setup lang="ts">
import { computed, useAttrs, ref, watch, reactive, onMounted, useSlots } from "vue";
const props = defineProps({
  modelValue: {
    type: [String, Number, Array]
  },
  // table所需数据
  table: {
    type: Object,
    default: () => {
      return {};
    }
  },
  // 表头数据
  columns: {
    type: Array as unknown as any[],
    default: () => []
  },
  // 是否开启点击整行选中
  isRowClick: {
    type: Boolean,
    default: true
  },

  // 列表项是否可选择
  rowSelection: {
    type: Object
  },
  // 是否显示分页
  isShowPagination: {
    type: Boolean,
    default: false
  },
  // 下拉数据指向的label/value
  keywords: {
    type: Object,
    default: () => {
      return {
        label: "label",
        value: "value"
      };
    }
  },
  // 多选 'multiple'
  mode: {
    type: String
  },
  // 单选是否开启键盘事件
  isKeyup: {
    type: Boolean,
    default: false
  },
  // select宽度
  selectWidth: {
    type: [String, Number],
    default: "100%"
  },
  // table宽度
  tableWidth: {
    type: Number,
    default: 550
  },
  // 设置默认选中项--keywords.value值
  defaultSelectVal: {
    type: Array as unknown as any[]
  },
  // 当数据被删除时仍然保留选项的 key
  preserveSelectedRowKeys: {
    type: Boolean,
    default: false
  },
  // 是否显示选择按钮
  isShowSelectBtn: {
    type: Boolean,
    default: false
  },
  // 选择按钮属性设置
  btnSetBind: {
    type: Object,
    default: () => {}
  },
  // 弹窗属性设置
  modalSetBind: {
    type: Object,
    default: () => {}
  },
  // 弹窗搜索配置
  inputSetBind: {
    type: Object,
    default: () => {}
  },
  // 禁用的属性
  disabledPorp: {
    type: String
  },
  // 禁用的值
  disabledValue: {
    type: [String, Number]
  }
});

const selectAttr = computed(() => {
  return {
    allowClear: true,
    showSearch: true,
    dropdownMatchSelectWidth: false,
    ...useAttrs()
  };
});
// 选择按钮配置
const btnBind = computed(() => {
  const btnSetBind = { btnTxt: "选择", modalTxt: "选择", ...props.btnSetBind };
  return { size: "middle", ...btnSetBind };
});
// 弹窗搜索配置
const inputBind = computed(() => {
  const inputSetBind = { searchTxt: "关键词", inputWidth: "40%", ...props.inputSetBind };
  return { allowClear: true, ...inputSetBind };
});
// 选择弹窗配置
const modalBind = computed(() => {
  const modalSetBind = { modalTxt: "选择", ...props.modalSetBind };
  return { cancelText: "取消", okText: "确定", width: 700, ...modalSetBind };
});
const slots = useSlots();
const slotsArr = Object.keys(slots);
const attrs: any = useAttrs();
// 是否显示选择table弹窗
const openModal = ref(false);
// 弹窗搜索输入框值
const searchModalValue = ref("");

const isDefaultSelectVal = ref(true); // 是否已经重新选择了
const open = ref(false);
const nowIndex = ref(-1);
const state: any = reactive({
  defaultSelectValue: props.defaultSelectVal, // 默认选中
  tableData: props.table.data, // table数据
  activeTableRow: {}, // 键盘上下键选中项
  // 选中KEY
  selectedRowKeys: [] as (string | number)[],
  // 选中行
  selectedRows: [],
  rowClickSelected: props.isRowClick // 是否点击行选中
});
// 获取ref
const selectRef = ref<HTMLElement | any>(null);
const selectTable = ref<HTMLElement | any>(null);
// 抛出事件
const emits = defineEmits(["checkedChange", "update:modelValue"]);
watch(
  () => props.table.data,
  val => {
    state.tableData = val;
  },
  { deep: true }
);
watch(
  () => props.defaultSelectVal,
  val => {
    // console.log("defaultSelectValue--watch", val);
    state.defaultSelectValue = val;
    if (val && isDefaultSelectVal.value) {
      defaultSelect(val);
    }
  },
  { deep: true }
);
// v-model方式
const childSelectedValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    // console.log("v-model简写", val);
    emits("update:modelValue", val);
  }
});
onMounted(() => {
  // 设置默认选中项
  if (state.defaultSelectValue && isDefaultSelectVal.value) {
    // console.log("state.defaultSelectValue--", state.defaultSelectValue);
    defaultSelect(state.defaultSelectValue);
  }
  // 开启禁用模式，不支持点击整行选中
  if (props.disabledPorp && props.disabledValue) {
    state.rowClickSelected = false;
  }
});
// 单选or 多选
const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
  setTimeout(() => {
    // console.log("选择", selectedRowKeys, selectedRows);
    state.selectedRowKeys = selectedRowKeys;
    state.selectedRows = selectedRows;
    isDefaultSelectVal.value = false;
    if (state.selectedRowKeys.length > 0 && state.selectedRows.length > 0) {
      if (props.mode === "multiple") {
        childSelectedValue.value =
          state.selectedRows.length > 0 && state.selectedRows.map((item: { [x: string]: any }) => item[props.keywords.label]);
      } else {
        // console.log("单选", state.selectedRows[0]);
        state.activeTableRow = state.selectedRows[0];
        childSelectedValue.value = state.selectedRows[0][props.keywords.label];
        blur();
      }
    } else {
      childSelectedValue.value = undefined;
    }
    emits("checkedChange", state.selectedRowKeys, state.selectedRows);
  }, 10);
};
// 复选框禁用
const getCheckboxProps = (record: any) => ({
  disabled: props.disabledPorp && record[props.disabledPorp] === props.disabledValue
});
const rowClick = (record: { [x: string]: any }) => {
  return {
    // 鼠标单击行
    onClick: () => {
      // console.log("鼠标单击行");
      if (props.mode !== "multiple") {
        if (!state.rowClickSelected) return;
        // 单选
        const keys = [];
        const items = [];
        keys.push(record[props.keywords.value]);
        items.push(record);
        onSelectChange(keys, items);
      } else {
        if (!state.rowClickSelected) return;
        // 多选
        const indexRow = state.selectedRowKeys.indexOf(record[props.keywords.value]);
        indexRow === -1 ? state.selectedRowKeys.push(record[props.keywords.value]) : state.selectedRowKeys.splice(indexRow, 1);
        if (indexRow === -1) {
          state.selectedRows.push(record);
        } else {
          state.selectedRows.splice(indexRow, 1);
        }
        onSelectChange(state.selectedRowKeys, state.selectedRows);
      }
    },
    // 鼠标双击行
    onDblclick: () => {
      handleOk();
    }
  };
};
// 单选键盘事件
const selectKeyup = (e: { keyCode: any }) => {
  if (props.mode !== "multiple" && props.isKeyup && state.tableData.length > 0) {
    const { keyCode } = e;
    const nextIndex = keyCode === 40 ? nowIndex.value + 1 : keyCode === 38 ? nowIndex.value - 1 : nowIndex.value;
    const activeTableRow = state.tableData[nextIndex] || state.tableData[0];

    switch (keyCode) {
      case 40: // 下键
      case 38: // 上键
        nowIndex.value = nextIndex;
        state.activeTableRow = activeTableRow;
        // 键盘向上/下滚动条根据移动的选择区域而滚动
        const headerHeight = selectTable.value.$el.querySelectorAll(".ant-table-header")[0]?.clientHeight || 0;
        const attrsMaxHeight = attrs.scroll.y || 0;
        const maxHeight = attrsMaxHeight ? attrsMaxHeight - headerHeight : 0;
        const height = 55 * (nextIndex + 3);
        const scrollTop = height > maxHeight ? height - maxHeight : 0;
        const scrollContainer = selectTable.value.$el.querySelector(".ant-table-body");
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollTop;
        }
        break;
      case 13: // 回车
        if (activeTableRow) {
          const keys = [activeTableRow[props.keywords.value]];
          const items = [activeTableRow];
          onSelectChange(keys, items);
        }
        break;
    }
  }
};
// 动态添加类
const getRowClass = (record: any) => {
  // console.log("record--", state.activeTableRow);
  return state.activeTableRow[props.keywords.value] === record[props.keywords.value] && props.isKeyup
    ? "active-selected-row"
    : "";
};
// 默认选中（且只能默认选中第一页的数据）
const defaultSelect = (defaultSelectVal: any[]) => {
  if (props.mode === "multiple") {
    setTimeout(() => {
      if (defaultSelectVal.length > 0) {
        let multipleList: any = [];
        let selectedRowKeys: any = [];
        let selectedRows: any = [];
        defaultSelectVal.map((val: any) => {
          state.tableData.forEach((row: any) => {
            if (val === row[props.keywords.value]) {
              multipleList.push(row);
            }
          });
        });
        multipleList.forEach((row: { [x: string]: any }) => {
          state.tableData.forEach((item: { [x: string]: any }) => {
            if (item[props.keywords.value] === row[props.keywords.value]) {
              selectedRowKeys.push(item[props.keywords.value]);
              selectedRows.push(item);
            }
          });
        });
        state.selectedRowKeys = selectedRowKeys;
        state.selectedRows = selectedRows;
        // console.log("多选默认", selectedRowKeys, selectedRows);
        childSelectedValue.value =
          state.selectedRows.length > 0 && state.selectedRows.map((item: { [x: string]: any }) => item[props.keywords.label]);
        // console.log("childSelectedValue.value", childSelectedValue.value);
      } else {
        childSelectedValue.value = undefined;
      }
    }, 0);
  } else {
    setTimeout(() => {
      if (defaultSelectVal.length > 0) {
        state.tableData.map((val: { [x: string]: any }) => {
          if (val[props.keywords.value] === defaultSelectVal[0]) {
            state.selectedRowKeys = defaultSelectVal;
            state.selectedRows = [val];
          }
        });
        childSelectedValue.value = state.selectedRows[0] && state.selectedRows[0][props.keywords.label];
      } else {
        childSelectedValue.value = undefined;
      }
    }, 20);
  }
};
// RowKey配置
const getRowKey = (row: { [x: string]: any }) => {
  return row[props.keywords.value];
};
// 弹窗table搜索过滤
const searchModalChange = (_e: any) => {
  // console.log("searchModalChange", e.target.value, searchModalValue.value);
  filterMethodHandle(searchModalValue.value);
};
// 搜索过滤
const filterMethodHandle = (input: string) => {
  setTimeout(() => {
    const tableData = JSON.parse(JSON.stringify(props.table?.data));
    if (tableData && tableData.length > 0) {
      if (!(props.mode === "multiple")) {
        if (input) {
          state.selectedRowKeys = [];
        } else {
          tableData.map((item: { [x: string]: any }) => {
            if (item[props.keywords.value] === (state.selectedRows[0] && state.selectedRows[0][props.keywords.value])) {
              state.selectedRowKeys = [item[props.keywords.value]];
            }
          });
        }
      }
      state.tableData = tableData.filter((item: { [x: string]: string | any[] }) => {
        if (item[props.keywords.label].includes(input)) {
          return item;
        }
      });
    }
  }, 0);
};

// 表格显示隐藏回调
const visibleChange = (visible: boolean) => {
  // console.log("表格显示隐藏回调", visible);
  open.value = visible;
  if (visible) {
    if (props.defaultSelectVal && isDefaultSelectVal.value) {
      defaultSelect(props.defaultSelectVal);
    }
  } else {
    // findLabel();
    filterMethodHandle("");
  }
};

// tags删除后回调
const removeTag = (tag: any) => {
  const row = state.tableData.find((item: { [x: string]: any }) => item[props.keywords.label] === tag);
  if (row) {
    const indexRow = state.selectedRowKeys.indexOf(row[props.keywords.value]);
    indexRow === -1 ? state.selectedRowKeys.push(row[props.keywords.value]) : state.selectedRowKeys.splice(indexRow, 1);
    if (indexRow === -1) {
      state.selectedRows.push(row);
    } else {
      state.selectedRows.splice(indexRow, 1);
    }
    onSelectChange(state.selectedRowKeys, state.selectedRows);
  }
};
// 多选清空
const onSelectNone = () => {
  nextTick(() => {
    state.selectedRowKeys = [];
    state.selectedRows = [];
    state.activeTableRow = {};
    childSelectedValue.value = [];
  });
};
// 清空后的回调
const clear = () => {
  if (props.mode === "multiple") {
    onSelectNone();
  } else {
    console.log("单选");
    emits("checkedChange", {}, null); // 取消勾选就把回传数据清除
    onSelectNone();
  }
};
// 触发select隐藏
const blur = () => {
  selectRef.value.blur();
};
// 触发select显示
const focus = () => {
  selectRef.value.focus();
};
// 打开select下拉框
const openSelectDropdown = () => {
  open.value = true;
};
// 点击选择按钮
const selectBtnClick = () => {
  console.log("点击选择按钮");
  openModal.value = true;
};
// 弹窗点击确定
const handleOk = () => {
  console.log("弹窗点击确定");
  openModal.value = false;
  searchModalValue.value = "";
};

// 暴露方法出去
defineExpose({ focus, blur, openSelectDropdown, clear, state, childSelectedValue });
</script>

<style lang="scss">
.t-antd-select-table {
  .ant-btn {
    margin-left: 2px;
  }
}
.t_antd_select_dropdown {
  min-width: auto !important;
  .t-table-select__table {
    padding: 10px;

    .ant-table-body,
    .ant-table-header {
      margin: 0;
    }
    .ant-table-body {
      .ant-table-tbody {
        .ant-table-row {
          cursor: pointer;
        }
        .ant-table-row-selected,
        .active-selected-row {
          color: #409eff;
          background-color: #ecf5ff;
        }
      }
    }
  }
  .ant-pagination {
    flex-wrap: nowrap;
  }
}
.t_select_modal {
  .ant-modal-content {
    padding: 10px 20px;
    .ant-modal-body {
      padding: 10px 0;
      .modal_search {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .search_label {
          width: fit-content;
        }
        .ant-input-affix-wrapper {
          margin-right: 10px;
        }
      }
      .ant-table-body {
        .ant-table-tbody {
          .ant-table-row {
            cursor: pointer;
          }
          .ant-table-row-selected,
          .active-selected-row {
            color: #409eff;
            background-color: #ecf5ff;
          }
        }
      }
    }
  }
}
</style>
