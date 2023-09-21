import { PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslintPlugin from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";
import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import AutoImport from "unplugin-auto-import/vite"; // 自动导入
import resolveExternalsPlugin from "vite-plugin-resolve-externals";
// import { visualizer } from "rollup-plugin-visualizer";
// 配置qiankun
import qiankun from "vite-plugin-qiankun";

const packName = require("../package").name;

/**
 * 创建 vite 插件
 * @param
 */
export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"], // 自动导入vue、vue-router、pinia相关API
      dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    }),
    // 配置qiankun
    qiankun(`${packName}`, {
      useDevMode: true
    }),
    // 创建打包压缩配置
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: "gzip", // 压缩算法
      ext: ".gz" // 文件类型
    }),
    // 解决高德地图---找不到名称“AMap”
    resolveExternalsPlugin({
      AMap: "AMap"
    }),
    // 注入变量到 html 文件
    createHtmlPlugin({
      inject: {
        data: { title: "Wocwin-Admin" }
      }
    })
    // visualizer({
    //   open: true, //注意这里要设置为true，否则无效
    //   gzipSize: true,
    //   brotliSize: true
    // })
  ];
};
