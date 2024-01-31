<template>
  <div class="order_chart">
    <div class="echarts_content">
      <div class="content_top">
        <t-chart :options="SalesTrendOptions" />
        <t-chart :options="OrderTimeOptions" />
      </div>
      <div class="content_bottom">
        <t-chart :options="ResultPaymentOptions" />
        <t-chart :options="OrderAmountOptions" />
        <div class="order_quantity_map">
          <div class="map_top">
            <div class="title">{{ mapObj.title }}</div>
            <div class="tip">{{ mapObj.tip }}</div>
          </div>
          <div class="map">
            <div id="OrderQuantity" ref="OrderQuantity"></div>
            <div class="replaceBox" title="刷新">
              <el-icon @click="replace">
                <Refresh />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table_content">
      <t-table title="订单详情" :table="table" :columns="table.columns" :isShowPagination="false" />
    </div>
  </div>
</template>
<script setup lang="tsx" name="orderChart">
import useApi from "@/hooks/useApi";
import { MapLoader } from "@/utils/map";
const { proxy } = useApi();
const table = ref({
  border: true,
  data: [],
  columns: [
    { prop: "orderNo", label: "订单编号", minWidth: "120" },
    {
      prop: "address",
      label: "客户信息",
      minWidth: "330",
      render: (val: any, row: { customerName: any; customerPhone: any }) => {
        return (
          <div>
            {row.customerName} {row.customerPhone} {val}
          </div>
        );
      }
    },
    { prop: "orderAmount", label: "订单总额", minWidth: "140" },
    { prop: "reductionAmount", label: "订单优惠总额", minWidth: "120" },
    { prop: "payAmount", label: "支付金额", minWidth: "140" },
    { prop: "createTime", label: "创建时间", minWidth: "160" }
  ]
});
const SalesTrendOptions: any = ref({});
const OrderTimeOptions: any = ref({});
const ResultPaymentOptions: any = ref({});
const OrderAmountOptions: any = ref({});
const mapObj: any = ref({});
const map: any = ref(null);
const lnglat: any = ref([]);
// 需要标点的数据
const streetList: any = ref([]);

onMounted(() => {
  orderInit();
});
const orderInit = () => {
  getSaleTrendData();
  getOrderTimeData();
  getPayResultData();
  getAmountDistributionData();
  getLocationDistributionData();
  pageOrderData();
};
// 销售趋势
const getSaleTrendData = async () => {
  const res = await proxy.$api.getSaleTrendData();
  if (res.success) {
    // console.log('销售趋势', res.data)
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
    SalesTrendOptions.value = option;
  }
};
// 下单时间分布
const getOrderTimeData = async () => {
  const res = await proxy.$api.getOrderTimeData();
  if (res.success) {
    // console.log('下单时间分布', res.data)
    // nextTick(() => {
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
    OrderTimeOptions.value = option;
    // });
  }
};
// 支付结果
const getPayResultData = async () => {
  const res = await proxy.$api.getPayResultData();
  if (res.success) {
    // console.log('支付结果', res.data)
    // nextTick(() => {
    const seriesData = res.data.dataList.map((item: any) => {
      return {
        ...item
      };
    });
    // console.log('pie--series', seriesData)
    // const legendData = res.data.nameData
    const option = {
      title: {
        text: res.data.title
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}:{d}% \n 订单数量: {c}"
      },
      series: {
        type: "pie",
        radius: "80%",
        label: {
          normal: {
            show: true,
            position: "inner",
            textStyle: {
              align: "center",
              baseline: "middle"
            },
            formatter: "{b}:{d}% \n 订单数量: {c}"
          }
        },
        data: seriesData
      }
    };
    ResultPaymentOptions.value = option;
    // });
  }
};
// 订单金额分布
const getAmountDistributionData = async () => {
  const res = await proxy.$api.getAmountDistributionData();
  if (res.success) {
    // console.log('订单金额分布', res.data)
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
        name: res.data.xtitle
      },
      yAxis: {
        type: "value",
        name: res.data.ytitle
      },
      series
    };
    OrderAmountOptions.value = option;
  }
};
// 订单数量区域分布
const getLocationDistributionData = async () => {
  const res = await proxy.$api.getLocationDistributionData();
  if (res.success) {
    // console.log('订单数量区域分布', res.data)
    // this.$nextTick(() => {
    map.value?.clearMap();
    mapObj.value = res.data;
    lnglat.value = [res.data.store.amapLon, res.data.store.amapLat];
    // console.log('订单数量区域分布----', lnglat.value)
    MapLoader().then((AMap: any) => {
      map.value = new AMap.Map("OrderQuantity", {
        resizeEnable: true,
        zoom: 12,
        center: lnglat.value
      });
    });
    streetList.value = res.data.streetVOList;
    streetList.value.push(res.data.store);
    streetList.value = streetList.value.filter((item: { amapLon: string | null }) => item.amapLon != "" && item.amapLon != null);
    if (mapObj.value.streetVOList.length > 0) {
      await addMarker();
    }
  }
};
const addMarker = () => {
  for (let i = 0; i < streetList.value.length; i += 1) {
    let center = [streetList.value[i].amapLon, streetList.value[i].amapLat];
    const bgColor = streetList.value[i].storeType ? "#ff3d00" : "#1d6fec";
    // 重绘坐标点的样式
    const markerContent =
      `<div class="custom-content-marker marker">` +
      `<img src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-${
        streetList.value[i].storeType ? "red" : "default"
      }.png" style="width:25px;height:34px;"/>` +
      `  <div style="color:#fff;position: absolute;font-size: 12px;top: 5px;" class="num">${
        streetList.value[i].count || ""
      } </div>` +
      "</div>";
    MapLoader().then((AMap: any) => {
      let marker = new AMap.Marker({
        position: center,
        offset: new AMap.Pixel(-13, -30),
        content: markerContent,
        title: `${streetList.value[i].street}`,
        zIndex: 102
      });

      const str = `<div style="background: ${bgColor};opacity:'0.8';padding: 0 5px;border-radius: 4px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.16)">
            <div style="color: #FFFFFF;">${streetList.value[i].storeType ? "当前门店" : streetList.value[i].street}</div>
          </div>`;

      marker.setLabel({
        direction: "top",
        offset: new AMap.Pixel(0, 0), // 设置文本标注偏移量
        content: str // 设置文本标注内容
      });
      map.value.add(marker);
      map.value.setZoom(18);
      map.value.setFitView();
    });
  }
};
// 刷新
const replace = () => {
  getLocationDistributionData();
};
// 订单详情
const pageOrderData = async () => {
  const res = await proxy.$api.pageOrderData();
  if (res.success) {
    table.value.data = res.data;
  }
};
</script>
