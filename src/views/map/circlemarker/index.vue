<template>
  <t-layout-page class="circle-marker">
    <div id="container"></div>
  </t-layout-page>
</template>
<script setup lang="ts" name="Circlemarker">
import { capitals } from "./capitals";
import { MapLoader } from "@/utils/map";
const state: any = reactive({
  map: null,
  capitals
});
onMounted(() => {
  initAMap();
});
const initAMap = () => {
  MapLoader().then((AMap: any) => {
    let map = new AMap.Map("container", {
      // resizeEnable: true,
      zoom: 4,
      center: [113.276517, 23.151382]
    });
    for (let i = 0; i < state.capitals.length; i += 1) {
      let center = state.capitals[i].center;
      let circleMarker = new AMap.CircleMarker({
        center: center,
        radius: 10 + Math.random() * 10, //3D视图下，CircleMarker半径不要超过64px
        // radius: 9000,
        strokeColor: "white",
        strokeWeight: 2,
        strokeOpacity: 0.5,
        // fillColor: 'rgba(0,0,255,1)',
        fillColor: rgb(),
        fillOpacity: 0.5,
        zIndex: 10,
        bubble: true,
        cursor: "pointer",
        clickable: true
      });
      circleMarker.setMap(map);
    }
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
</script>

<style lang="scss" scoped>
.circle-marker {
  position: relative;
  #container {
    width: 100%;
    height: 100%;
    // height: 100vh;
    filter: invert(100%) hue-rotate(180deg);
    -webkit-filter: invert(100%) hue-rotate(180deg);
    mix-blend-mode: exclusion;
  }
}
</style>
