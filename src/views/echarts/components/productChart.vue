<template>
  <div class="product_chart">
    <div class="product_echarts_content">
      <t-chart :options="SalesVolumeOptions" />
      <t-chart :options="SaleRankingOptions" />
    </div>
    <div class="table_content">
      <t-table title="商品详情" :table="productTable" :isShowPagination="false" :columns="productTable.columns" />
    </div>
  </div>
</template>
<script setup lang="tsx" name="orderChart">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const productTable = ref({
  border: true,
  data: [],
  columns: [
    { prop: "goodsCode", label: "商品编号", minWidth: "120" },
    { prop: "goodsTitle", label: "商品名称", minWidth: "220" },
    { prop: "retailPrice", label: "商品单价", minWidth: "140" },
    { prop: "salePriceAvg", label: "销售均价", minWidth: "120" },
    { prop: "saleCount", label: "商品销量", minWidth: "140" },
    { prop: "payAmount", label: "支付金额", minWidth: "160" },
    { prop: "ordersCount", label: "子订单数", minWidth: "160" },
    { prop: "customerCount", label: "购买人数", minWidth: "160" }
  ]
});
const SalesVolumeOptions: any = ref({});
const SaleRankingOptions: any = ref({});

onMounted(() => {
  setTimeout(() => {
    productInit();
  }, 1500);
});
const productInit = async () => {
  await getSaleData();
  await getSaleRankingData();
  await pageGoodsData();
};
// 商品销量
const getSaleData = async () => {
  const res = await proxy.$api.getSaleData();
  if (res.success) {
    // console.log('商品销量', res.data)
    const series = res.data.dataList.map((item: any) => {
      return {
        type: "line",
        smooth: true,
        ...item,
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      };
    });
    const legendData = res.data.nameData;
    const option = {
      title: {
        text: res.data.title
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: legendData
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: res.data.keyData
      },
      yAxis: {
        type: "value"
      },
      series
    };
    SalesVolumeOptions.value = option;
  }
};
// 商品销量排行
const getSaleRankingData = async () => {
  const res = await proxy.$api.getSaleRankingData();
  if (res.success) {
    // console.log('商品销量排行', res.data)
    const series = res.data.dataList.map((item: any) => {
      return {
        type: "bar",
        ...item,
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      };
    });
    const legendData = res.data.nameData;
    const option = {
      title: {
        text: res.data.title
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: legendData
      },
      grid: {
        left: "5%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: res.data.keyData,
        name: res.data.xtitle,
        axisLabel: {
          interval: 0,
          rotate: 40
        }
      },
      yAxis: {
        type: "value",
        name: res.data.ytitle
      },
      series
    };
    SaleRankingOptions.value = option;
  }
};

// 订单详情
const pageGoodsData = async () => {
  const res = await proxy.$api.pageGoodsData();
  if (res.success) {
    productTable.value.data = res.data;
  }
};
</script>
