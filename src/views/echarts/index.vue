<template>
  <t-layout-page class="overview_diagram">
    <t-layout-page-item>
      <div class="top_query">
        <div class="left">选择日期</div>
        <div class="right">
          <t-date-picker type="daterange" v-model="date" isPickerOptions @change="dateChange" />
        </div>
      </div>
      <div class="statistics">
        <div class="order_list">
          <div
            class="order_list_item"
            v-for="(item, index) in orderList"
            :key="index"
            :style="{ flex: `0 1 calc((${100 / orderList.length}% - 5px))`, marginRight: '5px' }"
          >
            <div class="title">{{ item.title }}</div>
            <div class="num_content">
              <div class="num">{{ item.num }}</div>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>
        </div>
        <div class="visit_list">
          <div
            class="order_list_item"
            v-for="(item, index) in visitList"
            :key="index + 'i'"
            :style="{ flex: `0 1 calc((${100 / visitList.length}% - 5px))`, marginRight: '5px' }"
          >
            <div class="title">{{ item.title }}</div>
            <div class="num_content">
              <div class="num">{{ item.num }}</div>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>
        </div>
      </div>
    </t-layout-page-item>
    <t-layout-page-item>
      <t-tabs v-model="tabName" :tabs="tabs" @tab-click="tabsChange">
        <template #tab1>
          <order-chart v-if="tabName === 'tab1'" ref="orderChartRef" />
        </template>
        <template #tab2>
          <user-chart v-if="tabName === 'tab2'" ref="userRef" />
        </template>
        <template #tab3>
          <product-chart v-if="tabName === 'tab3'" ref="productRef" />
        </template>
        <template #tab4>
          <page-chart v-if="tabName === 'tab4'" ref="pageRef" />
        </template>
      </t-tabs>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="tsx" name="echarts">
import useApi from "@/hooks/useApi";
import OrderChart from "./components/orderChart.vue";
import UserChart from "./components/userChart.vue";
import ProductChart from "./components/productChart.vue";
import PageChart from "./components/pageChart.vue";
const { proxy } = useApi();
const date = ref([]);
const startTime = ref(null);
const endTime = ref(null);
const tabName = ref("tab1");
// ref定义
const orderChartRef: any = ref(null);
const userRef: any = ref(null);
const productRef: any = ref(null);
const pageRef: any = ref(null);
// 订单统计
const orderList = ref([
  {
    title: "支付总额/元",
    fieldName: "payAmount",
    num: 0,
    unit: "元"
  },
  {
    title: "客单价",
    fieldName: "averageOrderValue",
    num: 0,
    unit: "元"
  },
  {
    title: "订单总数",
    fieldName: "orderCount",
    num: 0,
    unit: "单"
  },
  {
    title: "商品总销量",
    fieldName: "orderItemCount",
    num: 0,
    unit: "件"
  }
]);
// 访问统计
const visitList = ref([
  {
    title: "云店访问次数",
    fieldName: "accessCount",
    num: 0,
    unit: "次"
  },
  {
    title: "云店访问人数",
    fieldName: "visitorCount",
    num: 0,
    unit: "人"
  },
  {
    title: "下单人数",
    fieldName: "orderCustomerCount",
    num: 0,
    unit: "人"
  },
  {
    title: "新用户数量",
    fieldName: "newCustomerCount",
    num: 0,
    unit: "人"
  }
]);
// tabs
const tabs = ref([
  {
    key: "tab1",
    title: "订单数据"
  },
  {
    key: "tab2",
    title: "用户数据"
  },
  {
    key: "tab3",
    title: "商品数据"
  },
  {
    key: "tab4",
    title: "页面数据"
  }
]);
onMounted(() => {
  getOrderSummary();
  getVisitorSummary();
  console.log("orderRef---", orderChartRef.value);
});
// 选择日期
const dateChange = (val: any[]) => {
  console.log("选择日期", val);
  startTime.value = val && val[0];
  endTime.value = val && val[1];
};
// 切换tab
const tabsChange = (val: any) => {
  console.log("tabsChange", val);
  tabName.value = val.props.name;
  // switch (tabName.value) {
  //   case "tab1":
  //     orderChartRef.value?.orderInit();
  //     break;
  //   case "tab2":
  //     userRef.value?.userInit();
  //     break;
  //   case "tab3":
  //     productRef.value?.productInit();
  //     break;
  //   case "tab4":
  //     pageRef.value?.pageInit();
  //     break;
  // }
};
// 订单汇总
const getOrderSummary = async () => {
  const res = await proxy.$api.getOrderSummary();
  if (res.success) {
    // console.log('订单汇总', res.data)
    orderList.value.map(item => {
      item.num = res.data[item.fieldName];
    });
  }
};
// 访客汇总
const getVisitorSummary = async () => {
  const res = await proxy.$api.getVisitorSummary();
  if (res.success) {
    // console.log('访客汇总', res.data)
    visitList.value.map(item => {
      item.num = res.data[item.fieldName];
    });
  }
};
</script>
<style lang="scss">
@import "./index.scss";

.custom-content-marker {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.amap-marker-label {
  /* min-width: 100px; */
  line-height: 20px;
  font-size: 10px;
  padding: 0;
  background: #fff;
  border: none;
  border-radius: 4px;
}
</style>
