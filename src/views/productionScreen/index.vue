<template>
  <div class="largeScreen_page" ref="productionScreen">
    <t-screen title="生产运行监控大屏" @trans-forma-tion="transFormaTionFuc">
      <div class="largeScreen_page_main">
        <div class="selectDiv">
          <div v-for="(item, index) of statusList" :key="index" class="item">
            <span :style="{ background: item.color }"></span>
            <span>{{ item.name }}</span>
          </div>
          <div class="select_item">
            <span>分页切换时间：</span>
            <el-select style="width: 1rem" v-model="tabTimeValue" @change="workShopAutoPageFuc(true)" placeholder="请选择">
              <el-option v-for="item in tabTimeList" :key="item.value" :label="item.name + item.unit" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_item switchDiv">
            <span>自动切换开关：</span>
            <el-switch active-color="#355DB4" v-model="autoTabFlag"> </el-switch>
          </div>
        </div>
        <div class="headerTabDiv">
          <div
            @click="tabChange(item, index)"
            :class="{
              item: true,
              active: item.deptNum == activeId,
              bor: item.deptNum == activeId
            }"
            v-for="(item, index) of state.tabOptions"
            :key="index"
          >
            <span>{{ item.deptName }}</span>
          </div>
        </div>
        <div class="container">
          <div class="oilview-img">
            <i
              :style="{
                height: setSize(8),
                left: '.16rem',
                fontSize: setSize(8)
              }"
              @dblclick.stop
              @click.stop="arrowClick(false)"
              class="el-icon-arrow-left"
            ></i>
            <i
              :style="{
                height: setSize(8),
                right: '.16rem',
                fontSize: setSize(8)
              }"
              @dblclick.stop
              @click.stop="arrowClick(true)"
              class="el-icon-arrow-right"
            ></i>
          </div>
          <div
            class="itemDiv"
            :style="{ border: `0.02rem solid ${item.color}` }"
            v-for="(item, index) of state.tableData"
            :key="index"
            @click="handelItem(item)"
          >
            <div v-if="item.text == '闲置' && item.data.length" class="prepurgingDiv" :style="{ color: item.color }">清炉中</div>
            <div :style="{ color: item.color }" class="titleDiv">
              <div>
                {{ item.text != "闲置" || item.data.length ? item.furnaceNo + "-" + item.furnaceCount : item.furnaceNo }}
              </div>
              <div>
                <div>
                  <span :style="{ background: item.color }"></span>
                  {{ item.text }}<span v-if="item.yield">{{ item.yield + "%" }}</span>
                </div>
                <div v-if="item.yield">
                  <span :style="{ width: item.yield + '%', background: item.color }"></span>
                </div>
              </div>
            </div>
            <table class="table" v-if="item.text != '闲置' || item.data.length">
              <thead>
                <tr>
                  <th align="center" style="width: 1rem">品名</th>
                  <th align="center">批号</th>
                  <th style="width: 0.75rem">坩埚数量</th>
                  <th style="width: 0.6rem">重量(t)</th>
                  <th style="width: 0.75rem">装炉数量</th>
                  <th style="width: 0.75rem">出炉数量</th>
                </tr>
              </thead>
              <tfoot>
                <div class="tfooter" :style="{ color: item.color }">
                  <div v-if="item.chargeFurnaceWeightTotal">装炉重量：{{ item.chargeFurnaceWeightTotal + "T" }}</div>
                  <div v-if="item.powerDeliveryTime">送电时长：{{ item.powerDeliveryTime + "h" }}</div>
                  <div v-if="item.electricChrQty">送电量：{{ item.electricChrQty + "KW" }}</div>
                  <div v-if="item.singleConsumption">单耗：{{ item.singleConsumption + "t/kWh" }}</div>
                </div>
              </tfoot>
              <tbody
                :class="{
                  itemMar: item.workOrderBatchRecordVOList && item.workOrderBatchRecordVOList.length > 5 ? true : false
                }"
              >
                <tr v-for="(ele, eleindex) of item.data" :key="eleindex">
                  <td align="center" style="width: 1rem">
                    <div class="marqueeDiv">
                      <marquee-text
                        scrolldelay="300"
                        v-if="ele.materialName && ele.materialName.length > 7"
                        direction="left"
                        style="position: relative; max-width: 1.1rem"
                        >{{ ele.materialName }}</marquee-text
                      >
                      <span v-else>{{ ele.materialName }}</span>
                    </div>
                  </td>
                  <td align="center">
                    <div class="marqueeDiv">
                      <marquee-text
                        scrolldelay="300"
                        v-if="ele.batchNum && ele.batchNum.length > 7"
                        direction="left"
                        align="middle"
                        height=".4rem"
                        style="max-width: 1.5rem"
                        >{{ ele.batchNum }}</marquee-text
                      >
                      <span v-else>{{ ele.batchNum }}</span>
                    </div>
                  </td>
                  <td align="center" style="width: 0.75rem">
                    {{ ele.crucibleAmount }}
                  </td>
                  <td align="center" style="width: 0.6rem">{{ ele.weight }}</td>
                  <td align="center" style="width: 0.75rem">
                    {{ ele.furnaceAmount }}
                  </td>
                  <td align="center" style="width: 0.75rem">
                    {{ ele.releaseAmount }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="tabBar" v-if="item.text != '闲置' || item.data.length">
              <div :style="{ color: item.color }">
                <span>{{ item.monitorTimeVO && item.monitorTimeVO.startName && item.monitorTimeVO.startName + "：" }}</span>
                <span>{{ item.monitorTimeVO && item.monitorTimeVO.startTime }}</span>
              </div>
              <div :style="{ color: item.color }">
                <span>{{ item.monitorTimeVO && item.monitorTimeVO.endName && item.monitorTimeVO.endName + "：" }}</span>
                <span>{{ item.monitorTimeVO && item.monitorTimeVO.endTime }}</span>
              </div>
            </div>
            <div v-if="item.text == '闲置' && !item.data.length" class="idleImgDiv">
              <img src="@/assets/images/idle.png" alt="" />
              <span>暂无数据</span>
            </div>
          </div>
        </div>
        <div class="pagetionDiv">
          <span
            v-for="item of getPages"
            :key="item"
            @click.stop="tabPageFuc(item - 1)"
            @dblclick.stop
            :class="{ active: item === dataIndex + 1 }"
          ></span>
        </div>
      </div>
    </t-screen>
  </div>
</template>
<script setup lang="ts">
import TScreen from "@/components/TScreen/index.vue";
import { ElMessage } from "element-plus";
import deptList from "./getData/getDeptList.json";
import listMonitor from "./getData/getListMonitor.json";
import websocket from "./getData/websocket.json";
// import useApi from "@/hooks/useApi";
// const { proxy } = useApi();
const statusList = [
  {
    name: "装炉中",
    text: "装炉",
    color: "#f6bd16"
  },
  {
    name: "送电中",
    text: "送电",
    color: "#F08BB4"
  },
  {
    name: "冷却中",
    text: "冷却",
    color: "#5b8ff9"
  },
  {
    name: "出炉中",
    text: "出炉",
    color: "#61ddaa"
  },
  {
    name: "闲置中",
    text: "闲置",
    color: "#67758a"
  },
  {
    name: "中途断电",
    text: "中途断电",
    color: "#FF8831"
  }
];
const tabTimeList = [
  {
    name: "30",
    unit: "秒",
    value: 30
  },
  {
    name: "1",
    unit: "分钟",
    value: 60
  },
  {
    name: "2",
    unit: "分钟",
    value: 120
  },
  {
    name: "3",
    unit: "分钟",
    value: 180
  },
  {
    name: "4",
    unit: "分钟",
    value: 240
  },
  {
    name: "5",
    unit: "分钟",
    value: 300
  },
  {
    name: "10",
    unit: "分钟",
    value: 600
  },
  {
    name: "30",
    unit: "分钟",
    value: 1800
  }
];
const productionScreen = ref();
const remSize = ref(100);
const tabTimeValue = ref(30); //切换时间
const activeId = ref(null); //当前选中tag栏id
const activeIndex: any = ref(null); //当前选中tag栏索引
const furnaceDataAutoPageTime: any = ref(null); //炉室自动切换页码定时器
const refreshTimeValue: any = ref(null); //车间数据切换定时器
const viewHeight = ref(600);
const dataIndex = ref(0);
const initSockFlag = ref(false); // 是否初始化推送  初始化推送全部车间数据，后续哪个车间更新了只推送一个车间数据
const autoTabFlag = ref(true); //是否自动切换车间
const state: any = reactive({
  tableBaseData: [], //data备份数据
  tableData: [], //data数据
  tabOptions: [],
  dataBase: [] //socket数据
});
const getPages = computed(() => {
  return Math.ceil(state.tableBaseData.length / 8);
});
const transFormaTionFuc = (hei: any, wid: any, size: number) => {
  remSize.value = size;
};
onMounted(() => {
  getDeptList();
  monitorHei();
  window.addEventListener("resize", monitorHei);
  ElMessage({
    message: "双击页面，全屏预览！",
    showClose: true,
    type: "success",
    duration: 30000
  });
});
onUnmounted(() => {
  clearInterval(refreshTimeValue.value);
});
const getDeptList = async () => {
  // const res = await proxy.$api.getDeptList();
  const res = await deptList;
  if (res.success) {
    state.tabOptions = res.data || [];
    if (state.tabOptions.length) {
      activeId.value = state.tabOptions[0].deptNum;
      activeIndex.value = 0;
      await getListMonitor();
      await connection();
    }
  }
};
const monitorHei = () => {
  viewHeight.value = productionScreen.value?.offsetHeight;
};
const setSize = (size: number) => {
  return viewHeight.value / size + "px";
};
const handelItem = (item: { text: string; data: string | any[] }) => {
  if (item.text == "闲置" && !item.data.length) {
    ElMessage.warning("该炉闲置中");
    return;
  }
  ElMessage.success("点击了");
};
//切换车间
const tabChange = (item: { deptNum: null }, index: any) => {
  activeId.value = item.deptNum;
  activeIndex.value = index;
  dataIndex.value = 0;
  dealDataFuc(state.dataBase.find((item: { deptCode: null }) => item.deptCode == activeId.value)?.monitorVOList || []);
};
//获取主界面信息接口
const getListMonitor = async () => {
  // const res = await proxy.$api.getListMonitor();
  const res = await listMonitor;
  if (res.success) {
    dealDataFuc(res.data || []);
  }
};
// 处理数据方法
const dealDataFuc = (resData: any) => {
  state.tableBaseData = resData.map(
    (item: {
      processStatusLabel: string | string[];
      text: string | undefined;
      color: string | undefined;
      pages: any;
      workOrderBatchRecordVOList: string | any[];
      pageNum: number;
      data: any;
    }) => {
      if (item.processStatusLabel == "出炉结束") {
        item.text = "闲置";
        item.color = statusList[4].color;
      } else {
        item.text = statusList.find(ele => item.processStatusLabel.includes(ele.text))?.name;
        item.color = statusList.find(ele => item.processStatusLabel.includes(ele.text))?.color;
      }
      item.pages = (item.workOrderBatchRecordVOList && Math.ceil(item.workOrderBatchRecordVOList.length / 4)) || 0; //页数
      item.pageNum = 0;
      item.data = item.workOrderBatchRecordVOList ? getListMonitorPages(item.workOrderBatchRecordVOList, 0) : []; //获取第一页
      return item;
    }
  );
  state.tableData = state.tableBaseData.filter((item: any, index: number) => index < 8);
  // console.log("state.tableData--", state.tableData);
  workShopAutoPageFuc(false); //每个车间超过八个炉室自动分页
  autoTabPageFuc(); //每个表格超过四条自动分页
};
// 获取当前页数据
const getListMonitorPages = (data: any, index: number) => {
  let tableBaseData = data.filter((item: any, idx: number) => {
    return idx >= index * 4 && idx < index * 4 + 4;
  });
  return tableBaseData;
};
//各炉室自动切换分页
const autoTabPageFuc = () => {
  if (furnaceDataAutoPageTime.value) clearInterval(furnaceDataAutoPageTime.value);
  furnaceDataAutoPageTime.value = setInterval(() => {
    state.tableData = state.tableData.map((item: any) => {
      if (item.pages) {
        item.pageNum++;
        if (item.pageNum == item.pages) item.pageNum = 0;
        if (item.pages > 1) item.data = getListMonitorPages(item.workOrderBatchRecordVOList, item.pageNum);
      }
      return item;
    });
  }, 10000);
};
//建立连接
const connection = async () => {
  // const res = await proxy.$api.getWebsocket();
  const res = await websocket;
  if (res.success) {
    let resData = res.data || [];
    // console.log("777---", resData, state.dataBase);
    if (!initSockFlag.value) {
      //初始化推送
      state.dataBase = resData;
      initSockFlag.value = true;
    } else {
      resData.forEach((item: { deptCode: any; monitorVOList: any }) => {
        if (state.dataBase.findIndex((ele: { deptCode: any }) => ele.deptCode == item.deptCode) >= 0) {
          state.dataBase[state.dataBase.findIndex((ele: { deptCode: any }) => ele.deptCode == item.deptCode)].monitorVOList =
            item.monitorVOList;
        }
      });
    }
    // console.log("state.dataBase", state.dataBase);
    dealDataFuc(state.dataBase.find((item: { deptCode: null }) => item.deptCode == activeId.value)?.monitorVOList || []);
  }
};
//手动切换分页
const tabPageFuc = (index: number) => {
  dataIndex.value = index;
  state.tableData = state.tableBaseData.filter(
    (item: any, index: number) => index < (dataIndex.value + 1) * 8 && index >= dataIndex.value * 8
  );
  workShopAutoPageFuc(false);
};
//左右切换分页
const arrowClick = (flag: any) => {
  // console.log(dataIndex.value, getPages.value);
  if (flag) dataIndex.value = dataIndex.value < getPages.value - 1 ? (dataIndex.value += 1) : (dataIndex.value = 0);
  else dataIndex.value = dataIndex.value > 0 ? (dataIndex.value -= 1) : getPages.value - 1;
  state.tableData = state.tableBaseData.filter(
    (item: any, index: number) => index < (dataIndex.value + 1) * 8 && index >= dataIndex.value * 8
  );
  workShopAutoPageFuc(false);
};
//车间超过八条数据自动分页
const workShopAutoPageFuc = (flag: any) => {
  if (refreshTimeValue.value) clearInterval(refreshTimeValue.value);
  let pages = Math.ceil(state.tableBaseData.length / 8);
  refreshTimeValue.value = setInterval(() => {
    if (!flag) dataIndex.value++;
    if (dataIndex.value >= pages) {
      dataIndex.value = 0;
      //如需要停止车间切换 在这里阻止
      if (!autoTabFlag.value) {
        if (!flag)
          state.tableData = state.tableBaseData.filter(
            (item: any, index: number) => index < (dataIndex.value + 1) * 8 && index >= dataIndex.value * 8
          );
        return;
      }
      activeIndex.value++;
      if (activeIndex.value == state.tabOptions.length) activeIndex.value = 0;
      activeId.value = state.tabOptions[activeIndex.value].deptNum;
      dealDataFuc(state.dataBase.find((item: { deptCode: null }) => item.deptCode == activeId.value)?.monitorVOList || []);
      return;
    }
    if (!flag)
      state.tableData = state.tableBaseData.filter(
        (item: any, index: number) => index < (dataIndex.value + 1) * 8 && index >= dataIndex.value * 8
      );
  }, tabTimeValue.value * 1000);
};
</script>

<style lang="scss">
@import "./index.scss";
.largeScreen_page {
  width: 100%;
  height: 100%;
  position: absolute;
  .pagetionDiv {
    width: 100%;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    span {
      width: 0.12rem;
      height: 0.12rem;
      border-radius: 50%;
      background: #0c69ff;
      opacity: 0.5;
      cursor: pointer;
      margin: 0 0.2rem;
    }
    span.active {
      opacity: 1;
    }
  }
  .oilview-img {
    i {
      position: absolute;
      height: 0.5rem !important;
      color: white;
      font-size: 0.5rem !important;
      cursor: pointer;
      z-index: 1000;
      // top: 50%;
      transform: translateY(-50%);
      display: none;
      background-color: rgb(0, 0, 0);
      opacity: 70%;
      border-radius: 50%;
      top: 56.2%;
    }
  }
  // .largeScreen_page_main{
  //   // height: calc(100% - 0.86rem);
  //   position: relative;
  // }
  .headerTabDiv {
    display: flex;
    font-size: 0.16rem;
    margin: 0 0.16rem;
    position: relative;
    z-index: 99;
    & > div {
      color: #67758a;
      flex: 1;
    }
    .item {
      color: #b8b8b8;
      padding: 0.12rem 0.16rem;
      border: 0.02rem solid #1f379d;
      margin-right: 0.12rem;
      text-align: center;
      cursor: pointer;
    }
    .item:last-child {
      margin-right: 0;
    }
    .item.active {
      color: #fff;
      background-color: #0f2a5b;
    }
  }
  .selectDiv {
    display: flex;
    font-size: 0.16rem;
    align-items: center;
    .item {
      color: #fff;
      & > span:first-child {
        display: inline-block;
        width: 0.16rem;
        height: 0.08rem;
      }
    }
    & > div {
      margin: 0 0.16rem 0 0;
    }
    .select_item {
      display: flex;
      align-items: center;
      color: #67758a;
      .el-input--medium {
        width: 1.18rem;
        .el-input__icon {
          line-height: 0.3rem;
        }
        .el-input__inner {
          height: 0.3rem;
          // width: 1.2rem;
          background: #243047;
          border-color: #243047;
          color: #fff;
        }
      }
    }
    .switchDiv {
      margin-left: 0.16rem;
    }
    margin: 0 0.2rem 0.16rem;
    justify-content: flex-end;
  }
  .container:hover .oilview-img i {
    display: block;
    // color: rgba(27, 38, 254, 0.6);
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0.2rem 0.16rem 0;
    .itemDiv:nth-child(4n + 1) {
      margin-right: 0;
    }
    .itemDiv {
      margin-bottom: 16px;
      padding: 0.1rem;
      font-size: 0.16rem;
      position: relative;
      cursor: pointer;
      .prepurgingDiv {
        font-size: 0.6rem;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        opacity: 0.3;
        transform: translate(-50%, -50%);
      }
      .table {
        width: 100%;
        font-size: 0.12rem;
        tr {
          line-height: 0.4rem;
        }
        th {
          color: #67758a;
          padding: 0 0.04rem;
          // padding: 0 0.12rem;
        }
        td {
          color: #fff;
          height: 0.4rem;
          padding: 0 0.04rem;
          // padding: 0 0.12rem;
        }
        .marqueeDiv {
          height: 0.4rem;
        }
        thead,
        tfoot {
          width: calc(100% - 1em);
        }
        .tfooter {
          display: flex;
          flex-wrap: wrap;
          & > div {
            line-height: 0.3rem;
            padding-right: 0.12rem;
            color: #fff;
            font-weight: bold;
          }
        }
        tbody {
          width: 100%;
          height: 1.8rem;
        }
        thead,
        tbody,
        tfoot {
          tr {
            display: table;
            width: 100%;
            table-layout: fixed;
          }
        }
        .itemMar {
          tr td:last-child {
            padding: 0 0.3rem;
          }
          tr td:nth-child(3) {
            padding: 0 0.25rem;
          }
        }
      }
      .titleDiv {
        display: flex;
        align-items: center;
        margin-bottom: 0.05rem;
        color: #fff;
        font-weight: bold;
        & > div:first-child {
          width: 1rem;
          text-align: left;
          font-size: 0.3rem;
        }
        & > div:last-child {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          & > div:first-child {
            & > span:first-child {
              display: inline-block;
              width: 0.1rem;
              height: 0.1rem;
              border-radius: 50%;
            }
          }
          & > div:nth-child(2) {
            display: flex;
            margin-left: 0.05rem;
            width: 0.5rem;
            height: 0.1rem;
            background: #243047;
          }
        }
      }
      box-sizing: border-box;
      width: 24.7%;
      height: 4rem;
      position: relative;
      margin-right: 0.4%;
      .idleImgDiv {
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 1rem;
          height: 1rem;
        }
        & > span {
          color: #65789b;
          font-size: 0.14rem;
        }
      }
      h3 {
        margin: 0 0 16px;
        text-align: center;
      }
      .tabBar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 0.2rem);
        color: #aeb8c7;
        height: 0.4rem;
        padding: 0 0.1rem;
        background: #243047;
        border-radius: 0.04rem;
        bottom: 0.1rem;
      }
    }
  }
}
</style>
