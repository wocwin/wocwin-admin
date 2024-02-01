<template>
  <div class="user_echarts_content">
    <t-chart :options="AddUserOptions" />
    <t-chart :options="AccessPeriodOptions">
      <el-radio-group class="access_type_user" v-model="accessType" size="small" @change="accessTypeChage">
        <el-radio-button :label="0">访问人数</el-radio-button>
        <el-radio-button :label="1">访问人次</el-radio-button>
      </el-radio-group>
    </t-chart>
    <t-chart :options="UsersOrderOptions" />
  </div>
</template>
<script setup lang="tsx" name="userChart">
import useApi from "@/hooks/useApi";
const { proxy } = useApi();
const AddUserOptions: any = ref({});
const AccessPeriodOptions: any = ref({});
const UsersOrderOptions: any = ref({});
const accessType: any = ref(0);
// 用户--切换访问时段
const accessTypeChage = (val: any) => {
  console.log("切换访问时段", val);

  getVisitsTrendData(accessType.value);
};
onMounted(() => {
  setTimeout(() => {
    userInit();
  }, 1000);
});
const userInit = async () => {
  await getNewCustomerData();
  await getVisitsTrendData(accessType.value);
  await getCustOrderData();
};
// 新增用户
const getNewCustomerData = async () => {
  const res = await proxy.$api.getNewCustomerData();
  if (res.success) {
    // console.log('新增用户', res.data)
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
    AddUserOptions.value = option;
  }
};
// 访问时段
const getVisitsTrendData = async (index: number) => {
  const res = await proxy.$api.getVisitsTrendData();
  if (res.success) {
    // console.log('访问时段', res.data)
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
    AccessPeriodOptions.value = option;
  }
};
// 新老用户下单比例
const getCustOrderData = async () => {
  const res = await proxy.$api.getCustOrderData();
  if (res.success) {
    // console.log('新老用户下单比例', res.data)
    const seriesData = res.data.dataList.map((item: any) => {
      return {
        ...item
      };
    });
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
    UsersOrderOptions.value = option;
    // });
  }
};
</script>
