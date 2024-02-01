<template>
  <div class="page_chart">
    <div class="user_echarts_content">
      <t-chart :options="AccessDataOptions" class="accessPage">
        <el-radio-group class="access_type" v-model="accessPageType" size="small" @change="accessPageChage">
          <el-radio-button :label="0">UV数据</el-radio-button>
          <el-radio-button :label="1">PV数据</el-radio-button>
        </el-radio-group>
      </t-chart>
      <t-chart :options="PageAccessDataOptions" />
      <t-chart :options="PaymentOptions" />
    </div>
    <div class="table_content">
      <t-table title="页面详情" :table="pageTable" :columns="pageTable.columns" :isShowPagination="false" />
    </div>
  </div>
</template>
<script setup lang="tsx" name="pageChart">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const pageTable = ref({
  border: true,
  firstColumn: { type: "index", label: "序列" },
  data: [],
  columns: [
    { prop: "name", label: "页面名称", minWidth: "120" },
    { prop: "url", label: "URL", minWidth: "220" },
    { prop: "personAmount", label: "UV访问用户数", minWidth: "140", sort: true },
    { prop: "viewTime", label: "PV访问次数", minWidth: "120", sort: true },
    { prop: "residence", label: "平均停留时长（秒）", minWidth: "160", sort: true },
    { prop: "share", label: "分享次数", minWidth: "160", sort: true }
  ]
});
const AccessDataOptions: any = ref({});
const PageAccessDataOptions: any = ref({});
const PaymentOptions: any = ref({});
const accessPageType = ref(0);
const accessPageChage = (val: any) => {
  console.log("页面--切换访问数据", val, accessPageType.value);
  getVisitData(accessPageType.value);
};
onMounted(() => {
  setTimeout(() => {
    pageInit();
  }, 2000);
});
const pageInit = async () => {
  await getVisitData(accessPageType.value);
  await getPageVisitData();
  await getPaymentConversion();
  await listPageDetails();
};
// 访问数据
const getVisitData = async (index: number) => {
  const res = await proxy.$api.getVisitData();
  if (res.success) {
    // console.log('访问数据', res.data)
    const series = res.data[index].dataList.map((item: { data: any }) => {
      return {
        type: "line",
        smooth: true,
        name: res.data[index].type || "",
        data: item.data,
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      };
    });
    const legendData = res.data[index].nameData;
    const option = {
      title: {
        text: res.data[index].title
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
        data: res.data[index].keyData
      },
      yAxis: {
        type: "value"
      },
      series
    };
    AccessDataOptions.value = option;
  }
};
// 页面访问数据
const getPageVisitData = async () => {
  const res = await proxy.$api.getPageVisitData();
  if (res.success) {
    // console.log('页面访问数据', res.data)
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
    PageAccessDataOptions.value = option;
  }
};
// 支付转化
const getPaymentConversion = async () => {
  const res = await proxy.$api.getPaymentConversion();
  if (res.success) {
    // console.log('支付转化', res.data)
    const series = res.data.dataList.map((item: { topData: any }) => {
      return {
        type: "funnel",
        left: "10%",
        width: "90%",
        maxSize: "90%",
        label: {
          position: "inside",
          formatter: "{c}人",
          color: "#fff"
        },
        itemStyle: {
          opacity: 0.8,
          borderColor: "#fff",
          borderWidth: 2
        },
        emphasis: {
          label: {
            position: "inside",
            formatter: "{b}: {c}人"
          }
        },
        ...item,
        data: item.topData
      };
    });
    const legendData = res.data.nameData;
    // console.log("nameData--", legendData);
    const option = {
      title: {
        text: res.data.title
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c}人"
      },
      legend: {
        x: "center",
        y: "bottom",
        data: legendData
      },
      series
    };
    PaymentOptions.value = option;
  }
};
// 订单详情
const listPageDetails = async () => {
  const res = await proxy.$api.listPageDetails();
  if (res.success) {
    pageTable.value.data = res.data;
  }
};
</script>
