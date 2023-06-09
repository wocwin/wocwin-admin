<template>
  <t-layout-page class="map_control">
    <div id="container"></div>
    <div class="control-item">
      <h5>地图控件</h5>
      <el-checkbox class="control" v-model="state.scaleStatus" @change="changeScaleStatus">比例尺</el-checkbox>
      <el-checkbox class="control" v-model="state.toolBarStatus" @change="changeToolBarStatus">工具条</el-checkbox>
      <el-checkbox class="control" v-model="state.controlBarStatus" @change="changeControlBarStatus">工具条方向盘</el-checkbox>
      <el-checkbox class="control" v-model="state.overViewStatus" @change="changeOverViewStatus">显示鹰眼</el-checkbox>
    </div>
  </t-layout-page>
</template>
<script setup lang="ts" name="MapControl">
import { MapLoader } from "@/utils/map";
const state: any = reactive({
  map: null,
  scale: null,
  toolBar: null,
  controlBar: null,
  overView: null,
  scaleStatus: true,
  toolBarStatus: true,
  controlBarStatus: true,
  overViewStatus: true
});
onMounted(() => {
  initAMap();
});
const initAMap = () => {
  MapLoader().then((AMap: any) => {
    //控件
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
      viewMode: "3D",
      zoom: 11,
      pitch: 30
    });
    //给地图添加控件
    state.map.addControl(state.scale);
    state.map.addControl(state.toolBar);
    state.map.addControl(state.controlBar);
    state.map.addControl(state.overView);
  });
};
const changeScaleStatus = () => {
  if (state.scaleStatus) {
    state.scale.show();
  } else {
    state.scale.hide();
  }
};
const changeToolBarStatus = () => {
  if (state.toolBarStatus) {
    state.toolBar.show();
  } else {
    state.toolBar.hide();
  }
};
const changeControlBarStatus = () => {
  if (state.controlBarStatus) {
    state.controlBar.show();
  } else {
    state.controlBar.hide();
  }
};
const changeOverViewStatus = () => {
  if (state.overViewStatus) {
    state.overView.show();
  } else {
    state.overView.hide();
  }
};
</script>

<style lang="scss" scoped>
.map_control {
  position: relative;
  #container {
    width: 100%;
    height: 100%;
    // height: 100vh;
    filter: invert(100%) hue-rotate(180deg);
    -webkit-filter: invert(100%) hue-rotate(180deg);
    mix-blend-mode: exclusion;
  }
  .control-item {
    position: absolute;
    background: var(--el-menu-bg-color);
    margin: 10px 30px 10px;
    padding: 10px 5px;
    left: 50px;
    top: 30px;
    box-shadow: 1px 4px 12px 10px var(--el-menu-bg-color);
    h5 {
      color: var(--el-menu-text-color);
    }
    .control {
      display: block;
      padding: 5px 20px 10px;
    }
  }
}
</style>
