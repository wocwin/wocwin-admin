<template>
  <t-layout-page class="t_module_form_demo">
    <t-layout-page-item isNoMargin>
      <t-module-form
        title="模块表单组件详情"
        subTitle="基本使用副标题"
        ref="sourceDetail"
        handleType="desc"
        :descData="descData"
        :descColumn="4"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
// 具体详情模块回显源
const descData = reactive({
  goods: {
    name: "goods",
    title: "货品信息",
    data: [
      {
        label: "货品名称",
        fieldName: "cargoName",
        value: ""
      },
      {
        label: "货品类别",
        fieldName: "cargoType",
        value: ""
      },
      {
        label: "货品价值",
        fieldName: "cargoMoneyCentPerTon",
        value: ""
      },
      {
        label: "总重量",
        fieldName: "cargoWeightKg",
        value: ""
      },
      {
        label: "总体积",
        fieldName: "cargoVolumeDm3",
        value: ""
      },
      {
        label: "总件数",
        fieldName: "cargoQty",
        value: ""
      },
      {
        label: "易碎品",
        fieldName: "isBreakable",
        value: ""
      },
      {
        label: "备注",
        fieldName: "cargoRemark",
        value: ""
      }
    ]
  },
  freight: {
    name: "freight",
    title: "运费信息",
    data: [
      {
        label: "计费模式",
        fieldName: "calFeeType",
        value: ""
      },
      {
        label: "运费单价",
        value: ""
      },

      {
        label: "路损类型",
        fieldName: "roadLossType",
        value: ""
      },
      {
        label: "路耗定额",
        fieldName: "roadLossKg",
        value: ""
      },
      {
        label: "整车承载",
        fieldName: "loadKgPerCar",
        value: ""
      },
      {
        label: "保险购买",
        fieldName: "buyInsurance",
        value: ""
      }
    ]
  }
});
onMounted(() => {
  const goodsData = {
    cargoName: "汽车总动员",
    cargoType: "玩具",
    cargoMoneyCentPerTon: "500",
    cargoWeightKg: "500",
    cargoVolumeDm3: "30",
    cargoQty: "40",
    isBreakable: "否",
    cargoRemark: "汽车总动员备注"
  };
  descData.goods.data.map((val: { value: any; fieldName: string | number }) => {
    val.value = goodsData[val.fieldName as keyof typeof goodsData];
  });
});
</script>
