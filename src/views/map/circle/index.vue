<template>
  <t-layout-page class="circle-demo">
    <div id="container"></div>
    <div class="input-card">
      <label>
        店面选址测算
        <span style="margin-left: 5px; font-size: 14px" v-if="state.circles.length > 0">
          共计
          <span style="color: #355db4">{{ state.circles.length }}</span> 个选址
        </span>
      </label>
      <div class="input-item">
        <span class="input-item-text">省市区</span>
        <el-cascader
          style="width: 100%"
          placeholder="请选择省市区"
          filterable
          :props="{ checkStrictly: true }"
          :options="regionData"
          v-model="state.selectedOptions"
        />
      </div>
      <div class="input-item">
        <span class="input-item-text">店面覆盖范围</span>
        <el-input placeholder="请输入店面覆盖范围" clearable v-model="state.radius">
          <template #append>公里</template>
        </el-input>
      </div>
      <div class="input-item">
        <span class="input-item-text">框圈显示</span>
        <el-checkbox style="width: 100%" v-model="state.isShowCircle" @change="changeShowCircle">显示覆盖范围</el-checkbox>
      </div>
      <el-button type="primary" style="width: 100%; margin-bottom: 5px" @click="handleQuery">选址测算</el-button>
      <div class="concrete" v-if="state.circles.length > 0">
        <el-collapse v-model="state.activeName">
          <el-collapse-item title="具体店面地址" name="1">
            <!-- <label>具体店面地址</label> -->
            <ul class="address_content">
              <li class="info t-oneline-overflow-hidden" v-for="(item, index) in state.circles" :key="index">
                {{ item.fullAddress }}
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </t-layout-page>
</template>
<script setup lang="ts" name="DemoCircle">
import { regionData } from "element-china-area-data";
import DataList from "./data.json";
import { MapLoader } from "@/utils/map";
import { ElMessage } from "element-plus";
const state: any = reactive({
  regionData,
  activeName: "1",
  lnglat: "", // 经纬度
  selectedOptions: [],
  radius: null, // 半径
  map: null,
  scale: null, // 比例尺
  controlBar: null, // 工具条方向盘
  toolBar: null, // 工具条
  overView: null, // 鹰眼
  circleList: [], // 圆圈数据
  circles: [],
  addressList: [], // 选址地点
  isShowCircle: false // 是否框圈显示
});
onMounted(() => {
  initAMap();
});
const initAMap = () => {
  MapLoader().then((AMap: any) => {
    state.scale = new AMap.Scale();
    state.toolBar = new AMap.ToolBar({
      position: {
        top: "110px",
        right: "40px"
      }
    });
    state.controlBar = new AMap.ControlBar({
      position: {
        top: "10px",
        right: "10px"
      }
    });
    state.overView = new AMap.HawkEye({
      opened: false
    });

    state.map = new AMap.Map("container", {
      // resizeEnable: true,
      viewMode: "3D",
      zoom: 12,
      center: [113.265862, 23.126124]
    });
    //使用CSS默认样式定义地图上的鼠标样式
    state.map.setDefaultCursor("pointer");
    state.map.on("click", (e: { lnglat: { getLng: () => string; getLat: () => string } }) => {
      console.log("左击经纬度----", e.lnglat);
      state.lnglat = e.lnglat.getLng() + "," + e.lnglat.getLat();
    });
    state.map.addControl(state.scale);
    state.map.addControl(state.toolBar);
    state.map.addControl(state.controlBar);
    state.map.addControl(state.overView);
  });
};
// rgb颜色随机
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
const changeShowCircle = () => {
  if (state.isShowCircle) {
    state.circleList.map((item: { show: () => void }) => {
      item.show();
    });
  } else {
    state.circleList.map((item: { hide: () => void }) => {
      item.hide();
    });
  }
};
const handleQuery = async () => {
  if (!(state.selectedOptions.length > 0)) {
    ElMessage.error("请先选择定位区域！");
    return;
  }
  if (!state.radius) {
    ElMessage.error("请输入店面覆盖范围！");
    return;
  }
  // console.log('圆形半径', this.radius)
  // console.log('区域码', this.selectedOptions)
  const params = {
    code: state.selectedOptions[state.selectedOptions.length - 1] - 0,
    diameter: (state.radius - 0) * 1000
  };
  console.log("参数---", params);
  const res = await DataList;
  if (res.success) {
    state.map.clearMap();
    state.circles = res.data;
    if (state.circles.length > 0) {
      await addCircle();
      await addMarker();
      await regeoCode();
      await changeShowCircle();
    }
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
const addMarker = () => {
  for (let i = 0; i < state.circles.length; i += 1) {
    let center = state.circles[i].center;
    MapLoader().then((AMap: any) => {
      let marker = new AMap.Marker({
        position: center,
        offset: new AMap.Pixel(0, -9),
        anchor: "center",
        title: `${state.circles[i].fullAddress}`,
        zIndex: 102
        // label: {
        //   offset: new AMap.Pixel(0, 0),
        //   content: `${i + 1}`,
        //   direction: 'top'
        // }
      });
      state.map.add(marker);
    });
  }
};
const addCircle = () => {
  state.circleList = [];
  for (let i = 0; i < state.circles.length; i += 1) {
    let center = state.circles[i].center;
    MapLoader().then((AMap: any) => {
      let circle = new AMap.Circle({
        center: center,
        // radius: state.radius - 0,  // 半径
        radius: ((state.radius - 0) * 1000) / 2, // 半径
        strokeColor: "#F33", // 线颜色
        // strokeColor: state.rgb(),  // 线颜色
        zIndex: 101,
        strokeOpacity: 1, //线透明度
        strokeWeight: 3, //线粗细度
        bubble: true, // 是否将覆盖物的鼠标或touch等事件冒泡到地图上
        fillColor: "#7c7cfb", //填充颜色
        fillOpacity: 0.35 //填充透明度
      });
      circle.setMap(state.map);
      // state.map.add(circle)
      // state.map.setFitView()
      state.circleList.push(circle);
    });
  }
};
// 逆地理编码，根据经纬度获取地址信息
const regeoCode = () => {
  state.addressList = [];
  for (let i = 0; i < state.circles.length; i += 1) {
    let lnglat = state.circles[i].center;
    MapLoader().then((AMap: any) => {
      let geocoder = new AMap.Geocoder({
        city: "020", //城市设为广州，默认：“全国”
        radius: ((state.radius - 0) * 1000) / 2 //范围，默认：500
        // extensions: 'all'
      });
      geocoder.getAddress(lnglat, (status: string, result: { regeocode: { formattedAddress: any } }) => {
        if (status === "complete" && result.regeocode) {
          state.addressList.push(result.regeocode.formattedAddress);
        }
      });
    });
  }
  console.log("逆地理编码---", state.addressList);
};
</script>

<style lang="scss" scoped>
.circle-demo {
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
    // overflow-y: auto;
    top: 30px;
    left: 30px;
    padding: 10px;
    width: 400px;
    cursor: move;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    label {
      color: var(--el-menu-text-color);
    }
    .input-item {
      margin: 10px 0;
      display: flex;
      align-items: center;
      .input-item-text {
        display: inline-block;
        width: 150px;
        text-align: right;
        padding-right: 10px;
        color: var(--el-menu-text-color);
      }
    }
    .concrete {
      :deep(.el-collapse-item__header) {
        font-size: 16px;
        font-weight: bold;
      }
      ul,
      li {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .address_content {
        font-size: 12px;
        max-height: 210px;
        overflow-y: auto;
        .info {
          line-height: 25px;
        }
      }
    }
  }
}
</style>
