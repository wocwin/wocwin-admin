import{e,c as a,J as l,f as o,_ as t,o as r,P as u,Q as i}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{j as m}from"./@vue_reactivity@3.2.47-57d9983b.js";import"./@vue_shared@3.2.47-177e1703.js";const s=e({__name:"tooltip",setup(e){const s=m({goods:{name:"goods",title:"货品信息",data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",value:"3333",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:"定率",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:"是",tooltip:()=>a("div",null,[a("div",null,[l("测试函数方式提示")])])}]}});return o((()=>{const e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};s.goods.data.map((a=>{a.value=e[a.fieldName]}))})),(e,l)=>{const o=t("t-module-form"),m=t("t-layout-page-item"),d=t("t-layout-page");return r(),u(d,{class:"t_module_form_demo"},{default:i((()=>[a(m,null,{default:i((()=>[a(o,{title:"模块详情",subTitle:"Tooltip提示项",ref:"sourceDetail",handleType:"desc",descData:s},null,8,["descData"])])),_:1})])),_:1})}}});export{s as default};