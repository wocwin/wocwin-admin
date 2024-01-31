import request from "@/utils/request";

// echarts-概况-左-订单汇总
export function getOrderSummary(params: any) {
  return request({
    url: `/analysis/getOrderSummary`,
    method: "get",
    params
  });
}

// echarts-概况-右-访客汇总
export function getVisitorSummary(params: any) {
  return request({
    url: `/analysis/getVisitorSummary`,
    method: "get",
    params
  });
}
/**
 * 订单数据
 *
 */
// echarts-订单数据-下单时间分布
export function getOrderTimeData(params: any) {
  return request({
    url: `/analysis/getOrderTimeData`,
    method: "get",
    params
  });
}

// echarts-订单数据-支付结果
export function getPayResultData(params: any) {
  return request({
    url: `/analysis/getPayResultData`,
    method: "get",
    params
  });
}

// echarts-订单数据-销售趋势
export function getSaleTrendData(params: any) {
  return request({
    url: `/analysis/getSaleTrendData`,
    method: "get",
    params
  });
}

// echarts-订单数据-订单金额分布
export function getAmountDistributionData(params: any) {
  return request({
    url: `/analysis/getAmountDistributionData`,
    method: "get",
    params
  });
}

// echarts-订单数据-订单数量区域分布
export function getLocationDistributionData(params: any) {
  return request({
    url: `/analysis/getLocationDistributionData`,
    method: "get",
    params
  });
}

// echarts-订单数据-订单详情
export function pageOrderData(params: any) {
  return request({
    url: `/analysis/pageOrderData`,
    method: "get",
    params
  });
}
/**
 *用户数据api
 */

// echarts-用户数据-新老用户下单比例
export function getCustOrderData(params: any) {
  return request({
    url: `/analysis/getCustOrderData`,
    method: "get",
    params
  });
}

// echarts-用户数据-新增用户
export function getNewCustomerData(params: any) {
  return request({
    url: `/analysis/getNewCustomerData`,
    method: "get",
    params
  });
}

// echarts-用户数据-访问时段
export function getVisitsTrendData(params: any) {
  return request({
    url: `/analysis/getVisitsTrendData`,
    method: "get",
    params
  });
}

/**
 *商品数据api
 */
// echarts-商品数据-商品销量
export function getSaleData(params: any) {
  return request({
    url: `/analysis/getSaleData`,
    method: "get",
    params
  });
}

// echarts-商品数据-商品销量排行
export function getSaleRankingData(params: any) {
  return request({
    url: `/analysis/getSaleRankingData`,
    method: "get",
    params
  });
}
// echarts-商品数据-商品详情
export function pageGoodsData(params: any) {
  return request({
    url: `/analysis/pageGoodsData`,
    method: "get",
    params
  });
}
/**
 *页面数据api
 */

// echarts-页面数据-支付转化
export function getPaymentConversion(params: any) {
  return request({
    url: `/analysis/getPaymentConversion`,
    method: "get",
    params
  });
}

// echarts-页面数据-页面访问数据
export function getPageVisitData(params: any) {
  return request({
    url: `/analysis/getPageVisitData`,
    method: "get",
    params
  });
}

// echarts-页面数据-访问数据
export function getVisitData(params: any) {
  return request({
    url: `/analysis/getVisitData`,
    method: "get",
    params
  });
}

// echarts-页面数据-页面详情
export function listPageDetails(params: any) {
  return request({
    url: `/analysis/listPageDetails`,
    method: "get",
    params
  });
}
