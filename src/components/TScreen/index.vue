<template>
  <div
    ref="tscreen"
    :class="{ 'full-box': true, 'active-full': isFull, 'quit-full': !isFull }"
    :style="`${isActiveFull ? '  position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 9999;' : ''}font-size:${fontSize}`"
    @dblclick="isFullClick"
  >
    <slot name="header">
      <el-row class="header-box">
        <div class="header-left">
          <!-- 标题左边插槽 -->
          <slot name="header-left"></slot>
        </div>
        <div v-if="title" style="font-size: 0.4rem">{{ title }}</div>
        <div v-else style="font-size: 0.4rem">
          <slot name="title"></slot>
        </div>
        <div class="header-time">
          <slot name="header-right"></slot>
          <div v-if="nowTimeShow" style="min-width: 1.9rem">{{ nowTime }}</div>
        </div>
      </el-row>
    </slot>
    <div class="view-main">
      <!-- 默认内容插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="TScreen">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
import screenfull from "screenfull";
import dayjs from "dayjs";
defineProps({
  //标题
  title: {
    type: String,
    default: ""
  },
  //是否显示时间
  nowTimeShow: {
    type: Boolean,
    default: true
  },
  //是否覆盖屏幕
  isActiveFull: {
    type: Boolean,
    default: false
  }
});
const tscreen = ref();
// 是否全屏
const isFull = ref(false);
const record = ref(true); //是否需要记录全屏前的屏幕状态
const cacheFull: any = ref(false); //保存看板全屏前的浏览器状态
const intervalId: any = ref(null); //保存计时器地址用于停止计时器
const nowTime: any = ref(null);
const fontSize: any = ref(null); //父级字体大小
const emits = defineEmits(["transFormaTion"]);
onMounted(() => {
  window.addEventListener("resize", setFontSize);
  addInterval();
  setFontSize();
});
onActivated(() => {
  window.addEventListener("resize", setFontSize);
  stopInterval();
  setFontSize();
});
onDeactivated(() => {
  stopInterval();
  window.removeEventListener("resize", setFontSize);
  document.documentElement.style.fontSize = "14px";
});
onUnmounted(() => {
  stopInterval();
  window.removeEventListener("resize", setFontSize);
  document.documentElement.style.fontSize = "14px";
});
//双击全屏
const isFullClick = () => {
  if (record.value) {
    cacheFull.value = isFullScreen();
    record.value = false;
  }
  isFull.value = !isFull.value;
  if (!isFull.value) record.value = true;
  if (isFull.value && !isFullScreen()) screenfull.toggle();
  else if (!isFull.value && cacheFull.value != isFullScreen()) screenfull.toggle();
};
//获取当前屏幕状态
const isFullScreen = () => (document.fullscreenElement === null ? false : true);
//启动时钟
const addInterval = () => {
  if (intervalId.value != null) return;
  intervalId.value = setInterval(() => {
    nowTime.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
};
// 停止定时器
const stopInterval = () => {
  clearInterval(intervalId.value);
  intervalId.value = null;
};
const setFontSize = () => {
  let hei = tscreen.value.offsetHeight;
  let wid = tscreen.value.offsetWidth;
  // console.log("走了这里了",hei,wid)
  if (hei / 1080 <= wid / 1920) {
    fontSize.value = 100 * (hei / 1080);
    document.documentElement.style.fontSize = fontSize.value + "px";
    // console.log(hei)
  } else {
    fontSize.value = 100 * (wid / 1920);
    document.documentElement.style.fontSize = fontSize.value + "px";

    // console.log(hei*wid/1920)
  }
  console.log(fontSize.value);
  emits("transFormaTion", hei, wid, fontSize.value);
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0.01rem;
}
.full-box {
  background: #101a32;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.active-full {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1500;
}

.quit-full {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.header-box {
  width: auto;
  margin-bottom: 0.1rem;
  height: 0.76rem;
  display: flex;
  justify-content: space-between;
  background: url("@/assets/images/header_img.png") no-repeat center top;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    width: 1rem;
    padding: 0.1rem;

    &:first-child {
      justify-content: start;
    }
    &:nth-child(2) {
      flex-grow: 1.5;
      justify-content: center;
      font-size: 0.36rem;
      font-weight: bold;
      color: rgba(0, 106, 255, 1);
    }

    &:last-child {
      justify-content: flex-end;
      color: #fff;
      font-size: 0.22rem;
      font-family: DS-Digital-Bold, DS-Digital;
    }
  }
  .header-time {
    display: flex;
    font-family: "timefont" !important;
  }
}

.view-main {
  height: calc(100% - 0.86rem);
  width: auto;
  overflow-y: auto;
}
</style>
