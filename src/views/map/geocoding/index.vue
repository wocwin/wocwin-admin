<template>
  <t-layout-page class="geocoding">
    <div id="container"></div>
    <div class="input-card">
      <label>行政区选择</label>
      <div class="input-item">
        <span class="input-item-text">省市区</span>
        <el-cascader
          style="width: 100%"
          placeholder="请选择省市区"
          filterable
          clearable
          :options="regionData"
          v-model="state.selectedOptions"
          @change="handleQuery"
        />
      </div>
    </div>
  </t-layout-page>
</template>
<script setup lang="ts" name="Geocoding">
import { regionData, codeToText } from "element-china-area-data";
import { MapLoader } from "@/utils/map";
// import { ElMessage } from "element-plus";
const state: any = reactive({
  regionData,
  // selectedOptions: ['44', '4401', '440111'],
  lnglat: "", // 经纬度
  selectedOptions: [],
  radius: null, // 半径
  map: null
});
onMounted(() => {
  initAMap();
});
const initAMap = () => {
  MapLoader().then((AMap: any) => {
    state.map = new AMap.Map("container", {
      resizeEnable: true,
      zoom: 15,
      center: [113.276517, 23.151382]
    });
  });
};
const handleQuery = () => {
  // if (!(this.selectedOptions.length > 0)) {
  //   ElMessage.error('请先选择定位区域！')
  //   return
  // }
  // if (!this.radius) {
  //   ElMessage.error('请输入圆形半径！')
  //   return
  // }
  if (state.selectedOptions) {
    console.log("区域码", state.selectedOptions);
    console.log(
      "区域码转汉字",
      codeToText[state.selectedOptions[0]] + codeToText[state.selectedOptions[1]] + codeToText[state.selectedOptions[2]]
    );
    state.map.clearMap();
    // const address = codeToText[state.selectedOptions[0]] + codeToText[state.selectedOptions[1]] + codeToText[state.selectedOptions[2]]
    // address && state.geoCode(address)
    MapLoader().then((AMap: any) => {
      let keyword;
      if (state.selectedOptions.length > 0) {
        keyword = state.selectedOptions[state.selectedOptions.length - 1];
      }
      // 创建行政区查询对象
      let district = new AMap.DistrictSearch({
        // 返回行政区边界坐标等具体信息
        extensions: "all",
        // 设置查询行政区级别为 区
        level: "district"
      });
      district.search(keyword, (status: any, result: { districtList: { boundaries: any }[] }) => {
        // 获取边界信息
        let bounds = result.districtList[0].boundaries;
        let polygons = [];
        if (bounds) {
          for (let i = 0, l = bounds.length; i < l; i++) {
            //生成行政区划polygon
            let polygon = new AMap.Polygon({
              map: state.map,
              strokeWeight: 1,
              path: bounds[i],
              fillOpacity: 0.7,
              fillColor: "#CCF3FF",
              strokeColor: "#CC66CC"
            });
            polygons.push(polygon);
          }
          // 地图自适应
          state.map.setFitView();
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.geocoding {
  position: relative;
  #container {
    width: 100%;
    height: 100%;
    // height: 100vh;
    filter: invert(100%) hue-rotate(180deg);
    -webkit-filter: invert(100%) hue-rotate(180deg);
    mix-blend-mode: exclusion;
  }
  .input-card {
    position: absolute;
    background-color: var(--el-menu-bg-color);
    max-height: 90%;
    overflow-y: auto;
    top: 30px;
    left: 30px;
    padding: 10px;
    width: 400px;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    label {
      color: var(--el-menu-text-color);
    }
    .input-item {
      margin: 10px 0;
      display: flex;
      align-items: center;
      .input-item-text {
        color: var(--el-menu-text-color);
        display: inline-block;
        width: 150px;
        text-align: right;
        padding-right: 10px;
      }
    }
  }
}
</style>
