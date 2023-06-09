<template>
  <t-layout-page class="map_localization">
    <div id="container"></div>
    <div class="input-item">
      <div class="title">左击获取经纬度</div>
      <el-input v-model="state.lnglat">
        <template #prepend>经纬度</template>
      </el-input>
      <el-input style="margin-top: 5px" v-model="state.address">
        <template #prepend>地址</template>
      </el-input>
    </div>
    <div class="cursor-item">
      <div class="title">测距</div>
      <el-button round size="small" @click="defaultStyle">默认样式测距</el-button>
      <el-button round size="small" @click="customStyle">自定义样式测距</el-button>
    </div>
    <div class="circle-item">
      <div class="title">添加Circle</div>
      <div class="item">
        <el-button size="small" round @click="addCircle">添加Circle</el-button>
        <el-button size="small" round @click="removeCircle">删除Circle</el-button>
      </div>
    </div>
  </t-layout-page>
</template>
<script setup lang="ts" name="MapLocalization">
import { MapLoader } from "@/utils/map";
import { ElMessage } from "element-plus";
const state: any = reactive({
  mouseStyle: "pointer",
  map: null,
  circle: null,
  ruler1: null,
  ruler2: null,
  lnglat: "113.276517,23.151382",
  address: ""
});
onMounted(() => {
  initAMap();
  regeoCode();
});
const initAMap = () => {
  MapLoader().then((AMap: any) => {
    state.map = new AMap.Map("container", {
      resizeEnable: true,
      zoom: 15,
      center: [113.276517, 23.151382]
    });
    //默认样式
    state.ruler1 = new AMap.RangingTool(state.map);
    //自定义样式
    let startMarkerOptions = {
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), //图标大小
        imageSize: new AMap.Size(19, 31),
        image: "//webapi.amap.com/theme/v1.3/markers/b/start.png"
      }),
      offset: new AMap.Pixel(-9, -31)
    };
    let endMarkerOptions = {
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), //图标大小
        imageSize: new AMap.Size(19, 31),
        image: "//webapi.amap.com/theme/v1.3/markers/b/end.png"
      }),
      offset: new AMap.Pixel(-9, -31)
    };
    let midMarkerOptions = {
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), //图标大小
        imageSize: new AMap.Size(19, 31),
        image: "//webapi.amap.com/theme/v1.3/markers/b/mid.png"
      }),
      offset: new AMap.Pixel(-9, -31)
    };
    let lineOptions = {
      strokeStyle: "solid",
      strokeColor: "#FF33FF",
      strokeOpacity: 1,
      strokeWeight: 2
    };
    let rulerOptions = {
      startMarkerOptions: startMarkerOptions,
      midMarkerOptions: midMarkerOptions,
      endMarkerOptions: endMarkerOptions,
      lineOptions: lineOptions
    };
    state.ruler2 = new AMap.RangingTool(state.map, rulerOptions);
    //使用CSS默认样式定义地图上的鼠标样式
    state.map.setDefaultCursor("pointer");
    //绑定地图移动事件
    state.map.on("click", (e: any) => {
      state.lnglat = e.lnglat.getLng() + "," + e.lnglat.getLat();
      regeoCode();
    });
  });
};
//添加Circle
const addCircle = () => {
  // 构造矢量圆形
  MapLoader().then((AMap: any) => {
    state.circle = new AMap.Circle({
      center: [113.276517, 23.151382], // 圆心位置
      radius: 4500, //半径
      strokeColor: "#F33", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 3, //线粗细度
      fillColor: "#ee2200", //填充颜色
      fillOpacity: 0.35 //填充透明度
    });
    state.map.add(state.circle);
    state.map.setFitView();
  });
};
//删除Circle
const removeCircle = () => {
  state.map.remove(state.circle);
  state.map.setFitView();
};
//默认样式测距
const defaultStyle = () => {
  state.ruler2.turnOff();
  state.ruler1.turnOn();
};
//自定义样式测距
const customStyle = () => {
  state.ruler1.turnOff();
  state.ruler2.turnOn();
};
// 逆地理编码，根据经纬度获取地址信息
const regeoCode = () => {
  MapLoader().then((AMap: any) => {
    state.map.clearMap();
    let lnglat = state.lnglat.split(",");
    let marker = new AMap.Marker();
    let geocoder = new AMap.Geocoder({
      city: "020", //城市设为广州，默认：“全国”
      radius: 1000 //范围，默认：500
      // extensions: 'all'
    });
    state.map.add(marker);
    marker.setPosition(lnglat);
    geocoder.getAddress(lnglat, (status: string, result: { regeocode: { formattedAddress: any } }) => {
      if (status === "complete" && result.regeocode) {
        state.address = result.regeocode.formattedAddress;
      } else {
        ElMessage.error("根据地址查询位置失败，请重新选择！");
      }
    });
  });
};
</script>

<style lang="scss" scoped>
.map_localization {
  position: relative;
  #container {
    width: 100%;
    height: 100%;
    // height: 100vh;
    filter: invert(100%) hue-rotate(180deg);
    -webkit-filter: invert(100%) hue-rotate(180deg);
    mix-blend-mode: exclusion;
  }
  .circle-item {
    position: absolute;
    background: var(--el-menu-bg-color);
    padding: 5px 20px 10px;
    right: 6px;
    bottom: 170px;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    .title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--el-menu-text-color);
    }
    .item {
      margin: 10px 0px;
    }
  }
  .input-item {
    position: absolute;
    background: var(--el-menu-bg-color);
    padding: 15px;
    right: 30px;
    bottom: 10px;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    .title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--el-menu-text-color);
    }
  }
  .cursor-item {
    position: absolute;
    background: var(--el-menu-bg-color);
    padding: 5px 20px 10px;
    right: 340px;
    bottom: 170px;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    .title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--el-menu-text-color);
    }
    .mouseStyle {
      display: block;
      padding: 5px 20px 10px;
    }
  }
}
</style>
