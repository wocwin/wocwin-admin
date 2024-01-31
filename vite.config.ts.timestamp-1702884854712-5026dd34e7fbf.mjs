var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "wocwin-admin",
      private: false,
      version: "0.0.1",
      description: "vue3\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F",
      author: "wocwin",
      type: "module",
      scripts: {
        serve: "vite --mode dev",
        dev: "vue-tsc --noEmit && vite build --mode dev",
        sit: "vue-tsc --noEmit && vite build --mode sit",
        uat: "vue-tsc --noEmit && vite build --mode uat",
        prod: "vue-tsc --noEmit && vite build --mode prod",
        "lint:prettier": 'prettier --write "src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}"',
        deploy: "deploy.sh",
        preview: "vite preview"
      },
      dependencies: {
        "@element-plus/icons-vue": "^2.1.0",
        "@vueuse/core": "^9.13.0",
        "@wangeditor/editor": "^5.1.23",
        "@wangeditor/editor-for-vue": "^5.1.12",
        "@wocwin/t-ui-plus": "^1.2.6",
        "ant-design-vue": "^3.2.20",
        axios: "^1.3.4",
        dayjs: "^1.11.7",
        "driver.js": "^0.9.8",
        echarts: "^5.4.2",
        "echarts-liquidfill": "^3.1.0",
        "element-china-area-data": "^6.0.0",
        "element-plus": "^2.4.2",
        "js-md5": "^0.7.3",
        mitt: "^3.0.0",
        nprogress: "^0.2.0",
        pinia: "^2.0.33",
        "pinia-plugin-persistedstate": "^3.1.0",
        "print-js": "^1.6.0",
        qs: "^6.11.1",
        screenfull: "^6.0.2",
        sortablejs: "^1.15.0",
        vue: "^3.2.47",
        "vue-i18n": "^9.2.2",
        "vue-marquee-text-component": "^2.0.1",
        "vue-router": "^4.1.6",
        vuedraggable: "^4.1.0"
      },
      devDependencies: {
        "@commitlint/cli": "^17.4.4",
        "@commitlint/config-conventional": "^17.4.4",
        "@types/js-cookie": "^3.0.3",
        "@types/js-md5": "^0.7.0",
        "@types/nprogress": "^0.2.0",
        "@types/qs": "^6.9.7",
        "@types/sortablejs": "^1.15.1",
        "@typescript-eslint/eslint-plugin": "^5.55.0",
        "@typescript-eslint/parser": "^5.55.0",
        "@vitejs/plugin-vue": "^4.1.0",
        "@vitejs/plugin-vue-jsx": "^3.0.1",
        autoprefixer: "^10.4.14",
        "cz-git": "^1.6.1",
        czg: "^1.6.1",
        eslint: "^8.36.0",
        "eslint-config-prettier": "^8.7.0",
        "eslint-plugin-prettier": "^4.2.1",
        "eslint-plugin-vue": "^9.9.0",
        husky: "^8.0.3",
        "js-cookie": "^3.0.1",
        jsencrypt: "3.0.0-rc.1",
        "lint-staged": "^13.2.0",
        postcss: "^8.4.21",
        "postcss-html": "^1.5.0",
        prettier: "^2.8.4",
        "rollup-plugin-visualizer": "^5.9.0",
        sass: "^1.62.0",
        "standard-version": "^9.5.0",
        stylelint: "^15.2.0",
        "stylelint-config-html": "^1.1.0",
        "stylelint-config-prettier": "^9.0.5",
        "stylelint-config-recess-order": "^4.0.0",
        "stylelint-config-recommended-scss": "^9.0.1",
        "stylelint-config-recommended-vue": "^1.4.0",
        "stylelint-config-standard": "^30.0.1",
        "stylelint-config-standard-scss": "^7.0.1",
        typescript: "^5.0.4",
        "unplugin-auto-import": "^0.11.2",
        "unplugin-vue-components": "^0.24.1",
        "unplugin-vue-setup-extend-plus": "^1.0.0",
        vite: "^4.3.9",
        "vite-plugin-compression": "^0.5.1",
        "vite-plugin-eslint": "^1.8.1",
        "vite-plugin-html": "^3.2.0",
        "vite-plugin-qiankun": "^1.0.15",
        "vite-plugin-resolve-externals": "^0.2.2",
        "vite-plugin-svg-icons": "^2.0.1",
        "vite-plugin-vue-setup-extend": "^0.4.0",
        "vue-tsc": "^1.2.0"
      }
    };
  }
});

// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite@4.3.9_@types+node@20.1.1_sass@1.62.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";

// build/plugins.ts
import { createHtmlPlugin } from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite-plugin-html@3.2.0_vite@4.3.9/node_modules/vite-plugin-html/dist/index.mjs";
import vue from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.3.9_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.9_vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.36.0_vite@4.3.9/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.3.9/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.0/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import AutoImport from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/unplugin-auto-import@0.11.2_@vueuse+core@9.13.0/node_modules/unplugin-auto-import/dist/vite.js";
import resolveExternalsPlugin from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite-plugin-resolve-externals@0.2.2/node_modules/vite-plugin-resolve-externals/src/index.js";
import qiankun from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9/node_modules/vite-plugin-qiankun/dist/index.js";
var packName = require_package().name;
var createVitePlugins = () => {
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      // 自动导入vue、vue-router、pinia相关API
      dts: "src/auto-import.d.ts"
      // 生成 `auto-import.d.ts` 全局声明
    }),
    // 配置qiankun
    qiankun(`${packName}`, {
      useDevMode: true
    }),
    // 创建打包压缩配置
    viteCompression({
      verbose: true,
      disable: false,
      // 不禁用压缩
      deleteOriginFile: false,
      // 压缩后是否删除原文件
      threshold: 10240,
      // 压缩前最小文件大小
      algorithm: "gzip",
      // 压缩算法
      ext: ".gz"
      // 文件类型
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

// vite.config.ts
var import_package = __toESM(require_package(), 1);
import dayjs from "file:///E:/Win/code/gitee-wocwin-admin/node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/dayjs.min.js";
var __vite_injected_original_dirname = "E:\\Win\\code\\gitee-wocwin-admin";
var { dependencies, devDependencies, name, version } = import_package.default;
var __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
var vite_config_default = defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    base: "/wocwin-admin/",
    root,
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"]
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    },
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      host: "0.0.0.0",
      port: 3300,
      open: true,
      cors: true,
      https: false,
      proxy: {
        "^/api": {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, "")
        }
      }
    },
    plugins: createVitePlugins(),
    build: {
      outDir: "dist",
      minify: "terser",
      // esbuild打包速度最快，terser打包体积最小。
      // assetsInlineLimit: 4000, // 小于该值 图片将打包成Base64
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true,
          //打包时删除console
          drop_debugger: true,
          //打包时删除 debugger
          pure_funcs: ["console.log"]
        },
        output: {
          // 去掉注释内容
          comments: true
        }
      },
      reportCompressedSize: false,
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2e3,
      rollupOptions: {
        output: {
          // js最小拆包
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[1].toString();
            }
          },
          // 静态资源分类和包装
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZS5qc29uIiwgInZpdGUuY29uZmlnLnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwid29jd2luLWFkbWluXCIsXG4gIFwicHJpdmF0ZVwiOiBmYWxzZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInZ1ZTNcdTU0MEVcdTUzRjBcdTdCQTFcdTc0MDZcdTdDRkJcdTdFREZcdTZBMjFcdTY3N0ZcIixcbiAgXCJhdXRob3JcIjogXCJ3b2N3aW5cIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJzZXJ2ZVwiOiBcInZpdGUgLS1tb2RlIGRldlwiLFxuICAgIFwiZGV2XCI6IFwidnVlLXRzYyAtLW5vRW1pdCAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBkZXZcIixcbiAgICBcInNpdFwiOiBcInZ1ZS10c2MgLS1ub0VtaXQgJiYgdml0ZSBidWlsZCAtLW1vZGUgc2l0XCIsXG4gICAgXCJ1YXRcIjogXCJ2dWUtdHNjIC0tbm9FbWl0ICYmIHZpdGUgYnVpbGQgLS1tb2RlIHVhdFwiLFxuICAgIFwicHJvZFwiOiBcInZ1ZS10c2MgLS1ub0VtaXQgJiYgdml0ZSBidWlsZCAtLW1vZGUgcHJvZFwiLFxuICAgIFwibGludDpwcmV0dGllclwiOiBcInByZXR0aWVyIC0td3JpdGUgXFxcInNyYy8qKi8qLntqcyx0cyxqc29uLHRzeCxjc3MsbGVzcyxzY3NzLHZ1ZSxodG1sLG1kfVxcXCJcIixcbiAgICBcImRlcGxveVwiOiBcImRlcGxveS5zaFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlbGVtZW50LXBsdXMvaWNvbnMtdnVlXCI6IFwiXjIuMS4wXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeOS4xMy4wXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3JcIjogXCJeNS4xLjIzXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiOiBcIl41LjEuMTJcIixcbiAgICBcIkB3b2N3aW4vdC11aS1wbHVzXCI6IFwiXjEuMi42XCIsXG4gICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIl4zLjIuMjBcIixcbiAgICBcImF4aW9zXCI6IFwiXjEuMy40XCIsXG4gICAgXCJkYXlqc1wiOiBcIl4xLjExLjdcIixcbiAgICBcImRyaXZlci5qc1wiOiBcIl4wLjkuOFwiLFxuICAgIFwiZWNoYXJ0c1wiOiBcIl41LjQuMlwiLFxuICAgIFwiZWNoYXJ0cy1saXF1aWRmaWxsXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJlbGVtZW50LWNoaW5hLWFyZWEtZGF0YVwiOiBcIl42LjAuMFwiLFxuICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiXjIuNC4yXCIsXG4gICAgXCJqcy1tZDVcIjogXCJeMC43LjNcIixcbiAgICBcIm1pdHRcIjogXCJeMy4wLjBcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxuICAgIFwicGluaWFcIjogXCJeMi4wLjMzXCIsXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIjogXCJeMy4xLjBcIixcbiAgICBcInByaW50LWpzXCI6IFwiXjEuNi4wXCIsXG4gICAgXCJxc1wiOiBcIl42LjExLjFcIixcbiAgICBcInNjcmVlbmZ1bGxcIjogXCJeNi4wLjJcIixcbiAgICBcInNvcnRhYmxlanNcIjogXCJeMS4xNS4wXCIsXG4gICAgXCJ2dWVcIjogXCJeMy4yLjQ3XCIsXG4gICAgXCJ2dWUtaTE4blwiOiBcIl45LjIuMlwiLFxuICAgIFwidnVlLW1hcnF1ZWUtdGV4dC1jb21wb25lbnRcIjogXCJeMi4wLjFcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4xLjZcIixcbiAgICBcInZ1ZWRyYWdnYWJsZVwiOiBcIl40LjEuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xNy40LjRcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTcuNC40XCIsXG4gICAgXCJAdHlwZXMvanMtY29va2llXCI6IFwiXjMuMC4zXCIsXG4gICAgXCJAdHlwZXMvanMtbWQ1XCI6IFwiXjAuNy4wXCIsXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4wXCIsXG4gICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjdcIixcbiAgICBcIkB0eXBlcy9zb3J0YWJsZWpzXCI6IFwiXjEuMTUuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNS41NS4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjUuNTUuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjMuMC4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xNFwiLFxuICAgIFwiY3otZ2l0XCI6IFwiXjEuNi4xXCIsXG4gICAgXCJjemdcIjogXCJeMS42LjFcIixcbiAgICBcImVzbGludFwiOiBcIl44LjM2LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOC43LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCJeNC4yLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tdnVlXCI6IFwiXjkuOS4wXCIsXG4gICAgXCJodXNreVwiOiBcIl44LjAuM1wiLFxuICAgIFwianMtY29va2llXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJqc2VuY3J5cHRcIjogXCIzLjAuMC1yYy4xXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xMy4yLjBcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjIxXCIsXG4gICAgXCJwb3N0Y3NzLWh0bWxcIjogXCJeMS41LjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjIuOC40XCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjogXCJeNS45LjBcIixcbiAgICBcInNhc3NcIjogXCJeMS42Mi4wXCIsXG4gICAgXCJzdGFuZGFyZC12ZXJzaW9uXCI6IFwiXjkuNS4wXCIsXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTUuMi4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLWh0bWxcIjogXCJeMS4xLjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4wLjVcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjZXNzLW9yZGVyXCI6IFwiXjQuMC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeOS4wLjFcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjb21tZW5kZWQtdnVlXCI6IFwiXjEuNC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXN0YW5kYXJkXCI6IFwiXjMwLjAuMVwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZC1zY3NzXCI6IFwiXjcuMC4xXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMC40XCIsXG4gICAgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiOiBcIl4wLjExLjJcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjQuMVwiLFxuICAgIFwidW5wbHVnaW4tdnVlLXNldHVwLWV4dGVuZC1wbHVzXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuMy45XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiOiBcIl4wLjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZXNsaW50XCI6IFwiXjEuOC4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1odG1sXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1xaWFua3VuXCI6IFwiXjEuMC4xNVwiLFxuICAgIFwidml0ZS1wbHVnaW4tcmVzb2x2ZS1leHRlcm5hbHNcIjogXCJeMC4yLjJcIixcbiAgICBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZFwiOiBcIl4wLjQuMFwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4xLjIuMFwiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcV2luXFxcXGNvZGVcXFxcZ2l0ZWUtd29jd2luLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxXaW5cXFxcY29kZVxcXFxnaXRlZS13b2N3aW4tYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1dpbi9jb2RlL2dpdGVlLXdvY3dpbi1hZG1pbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiwgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tIFwiLi9idWlsZC9wbHVnaW5zXCI7XG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmNvbnN0IHsgZGVwZW5kZW5jaWVzLCBkZXZEZXBlbmRlbmNpZXMsIG5hbWUsIHZlcnNpb24gfSA9IHBrZztcbmNvbnN0IF9fQVBQX0lORk9fXyA9IHtcbiAgcGtnOiB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0sXG4gIGxhc3RCdWlsZFRpbWU6IGRheWpzKCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxufTtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KTtcbiAgLy8gY29uc29sZS5sb2coXCJlbnZcIiwgZW52KTtcblxuICByZXR1cm4ge1xuICAgIGJhc2U6IFwiL3dvY3dpbi1hZG1pbi9cIixcbiAgICByb290LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgICAgXCJ2dWUtaTE4blwiOiBcInZ1ZS1pMThuL2Rpc3QvdnVlLWkxOG4uY2pzLmpzXCJcbiAgICAgIH0sXG4gICAgICBleHRlbnNpb25zOiBbXCIuanNcIiwgXCIudHNcIiwgXCIuanN4XCIsIFwiLnRzeFwiLCBcIi5qc29uXCIsIFwiLnZ1ZVwiLCBcIi5tanNcIl1cbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgX19BUFBfSU5GT19fOiBKU09OLnN0cmluZ2lmeShfX0FQUF9JTkZPX18pXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIkAvc3R5bGVzL3Zhci5zY3NzXCI7YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgIH0sXG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHBvcnQ6IDMzMDAsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgY29yczogdHJ1ZSxcbiAgICAgIGh0dHBzOiBmYWxzZSxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiXi9hcGlcIjoge1xuICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfQVBQX0JBU0VfQVBJLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiBwID0+IHAucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKCksXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICBtaW5pZnk6IFwidGVyc2VyXCIsIC8vIGVzYnVpbGRcdTYyNTNcdTUzMDVcdTkwMUZcdTVFQTZcdTY3MDBcdTVGRUJcdUZGMEN0ZXJzZXJcdTYyNTNcdTUzMDVcdTRGNTNcdTc5RUZcdTY3MDBcdTVDMEZcdTMwMDJcbiAgICAgIC8vIGFzc2V0c0lubGluZUxpbWl0OiA0MDAwLCAvLyBcdTVDMEZcdTRFOEVcdThCRTVcdTUwM0MgXHU1NkZFXHU3MjQ3XHU1QzA2XHU2MjUzXHU1MzA1XHU2MjEwQmFzZTY0XG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgLy8gd2FybmluZ3M6IGZhbHNlLFxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy9cdTYyNTNcdTUzMDVcdTY1RjZcdTUyMjBcdTk2NjRjb25zb2xlXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgLy9cdTYyNTNcdTUzMDVcdTY1RjZcdTUyMjBcdTk2NjQgZGVidWdnZXJcbiAgICAgICAgICBwdXJlX2Z1bmNzOiBbXCJjb25zb2xlLmxvZ1wiXVxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAvLyBcdTUzQkJcdTYzODlcdTZDRThcdTkxQ0FcdTUxODVcdTVCQjlcbiAgICAgICAgICBjb21tZW50czogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLCAvLyBcdTc5ODFcdTc1MjggZ3ppcCBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcdUZGMENcdTUzRUZcdTc1NjVcdTVGQUVcdTUxQ0ZcdTVDMTFcdTYyNTNcdTUzMDVcdTY1RjZcdTk1RjRcbiAgICAgIC8vIFx1ODlDNFx1NUI5QVx1ODlFNlx1NTNEMVx1OEI2Nlx1NTQ0QVx1NzY4NCBjaHVuayBcdTU5MjdcdTVDMEZcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgLy8ganNcdTY3MDBcdTVDMEZcdTYyQzZcdTUzMDVcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xuICAgICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIilbMV0uc3BsaXQoXCIvXCIpWzFdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTdDN0JcdTU0OENcdTUzMDVcdTg4QzVcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFdpblxcXFxjb2RlXFxcXGdpdGVlLXdvY3dpbi1hZG1pblxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcV2luXFxcXGNvZGVcXFxcZ2l0ZWUtd29jd2luLWFkbWluXFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1dpbi9jb2RlL2dpdGVlLXdvY3dpbi1hZG1pbi9idWlsZC9wbHVnaW5zLnRzXCI7aW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4taHRtbFwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSBcInVucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiOyAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcbmltcG9ydCByZXNvbHZlRXh0ZXJuYWxzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1yZXNvbHZlLWV4dGVybmFsc1wiO1xuLy8gaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcbi8vIFx1OTE0RFx1N0Y2RXFpYW5rdW5cbmltcG9ydCBxaWFua3VuIGZyb20gXCJ2aXRlLXBsdWdpbi1xaWFua3VuXCI7XG5cbmNvbnN0IHBhY2tOYW1lID0gcmVxdWlyZShcIi4uL3BhY2thZ2VcIikubmFtZTtcblxuLyoqXG4gKiBcdTUyMUJcdTVFRkEgdml0ZSBcdTYzRDJcdTRFRjZcbiAqIEBwYXJhbVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVml0ZVBsdWdpbnMgPSAoKTogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0+IHtcbiAgcmV0dXJuIFtcbiAgICB2dWUoKSxcbiAgICAvLyB2dWUgXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IGpzeC90c3ggXHU4QkVEXHU2Q0Q1XG4gICAgdnVlSnN4KCksXG4gICAgLy8gZXNMaW50IFx1NjJBNVx1OTUxOVx1NEZFMVx1NjA2Rlx1NjYzRVx1NzkzQVx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NzU0Q1x1OTc2Mlx1NEUwQVxuICAgIGVzbGludFBsdWdpbigpLFxuICAgIC8vIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcbiAgICB2dWVTZXR1cEV4dGVuZCh7fSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwicGluaWFcIl0sIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NXZ1ZVx1MzAwMXZ1ZS1yb3V0ZXJcdTMwMDFwaW5pYVx1NzZGOFx1NTE3M0FQSVxuICAgICAgZHRzOiBcInNyYy9hdXRvLWltcG9ydC5kLnRzXCIgLy8gXHU3NTFGXHU2MjEwIGBhdXRvLWltcG9ydC5kLnRzYCBcdTUxNjhcdTVDNDBcdTU4RjBcdTY2MEVcbiAgICB9KSxcbiAgICAvLyBcdTkxNERcdTdGNkVxaWFua3VuXG4gICAgcWlhbmt1bihgJHtwYWNrTmFtZX1gLCB7XG4gICAgICB1c2VEZXZNb2RlOiB0cnVlXG4gICAgfSksXG4gICAgLy8gXHU1MjFCXHU1RUZBXHU2MjUzXHU1MzA1XHU1MzhCXHU3RjI5XHU5MTREXHU3RjZFXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gXHU0RTBEXHU3OTgxXHU3NTI4XHU1MzhCXHU3RjI5XG4gICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSwgLy8gXHU1MzhCXHU3RjI5XHU1NDBFXHU2NjJGXHU1NDI2XHU1MjIwXHU5NjY0XHU1MzlGXHU2NTg3XHU0RUY2XG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcbiAgICAgIGFsZ29yaXRobTogXCJnemlwXCIsIC8vIFx1NTM4Qlx1N0YyOVx1N0I5N1x1NkNENVxuICAgICAgZXh0OiBcIi5nelwiIC8vIFx1NjU4N1x1NEVGNlx1N0M3Qlx1NTc4QlxuICAgIH0pLFxuICAgIC8vIFx1ODlFM1x1NTFCM1x1OUFEOFx1NUZCN1x1NTczMFx1NTZGRS0tLVx1NjI3RVx1NEUwRFx1NTIzMFx1NTQwRFx1NzlGMFx1MjAxQ0FNYXBcdTIwMURcbiAgICByZXNvbHZlRXh0ZXJuYWxzUGx1Z2luKHtcbiAgICAgIEFNYXA6IFwiQU1hcFwiXG4gICAgfSksXG4gICAgLy8gXHU2Q0U4XHU1MTY1XHU1M0Q4XHU5MUNGXHU1MjMwIGh0bWwgXHU2NTg3XHU0RUY2XG4gICAgY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgICBpbmplY3Q6IHtcbiAgICAgICAgZGF0YTogeyB0aXRsZTogXCJXb2N3aW4tQWRtaW5cIiB9XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyB2aXN1YWxpemVyKHtcbiAgICAvLyAgIG9wZW46IHRydWUsIC8vXHU2Q0U4XHU2MTBGXHU4RkQ5XHU5MUNDXHU4OTgxXHU4QkJFXHU3RjZFXHU0RTNBdHJ1ZVx1RkYwQ1x1NTQyNlx1NTIxOVx1NjVFMFx1NjU0OFxuICAgIC8vICAgZ3ppcFNpemU6IHRydWUsXG4gICAgLy8gICBicm90bGlTaXplOiB0cnVlXG4gICAgLy8gfSlcbiAgXTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLFNBQVc7QUFBQSxNQUNYLGFBQWU7QUFBQSxNQUNmLFFBQVU7QUFBQSxNQUNWLE1BQVE7QUFBQSxNQUNSLFNBQVc7QUFBQSxRQUNULE9BQVM7QUFBQSxRQUNULEtBQU87QUFBQSxRQUNQLEtBQU87QUFBQSxRQUNQLEtBQU87QUFBQSxRQUNQLE1BQVE7QUFBQSxRQUNSLGlCQUFpQjtBQUFBLFFBQ2pCLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxjQUFnQjtBQUFBLFFBQ2QsMkJBQTJCO0FBQUEsUUFDM0IsZ0JBQWdCO0FBQUEsUUFDaEIsc0JBQXNCO0FBQUEsUUFDdEIsOEJBQThCO0FBQUEsUUFDOUIscUJBQXFCO0FBQUEsUUFDckIsa0JBQWtCO0FBQUEsUUFDbEIsT0FBUztBQUFBLFFBQ1QsT0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsU0FBVztBQUFBLFFBQ1gsc0JBQXNCO0FBQUEsUUFDdEIsMkJBQTJCO0FBQUEsUUFDM0IsZ0JBQWdCO0FBQUEsUUFDaEIsVUFBVTtBQUFBLFFBQ1YsTUFBUTtBQUFBLFFBQ1IsV0FBYTtBQUFBLFFBQ2IsT0FBUztBQUFBLFFBQ1QsK0JBQStCO0FBQUEsUUFDL0IsWUFBWTtBQUFBLFFBQ1osSUFBTTtBQUFBLFFBQ04sWUFBYztBQUFBLFFBQ2QsWUFBYztBQUFBLFFBQ2QsS0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLFFBQ1osOEJBQThCO0FBQUEsUUFDOUIsY0FBYztBQUFBLFFBQ2QsY0FBZ0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsaUJBQW1CO0FBQUEsUUFDakIsbUJBQW1CO0FBQUEsUUFDbkIsbUNBQW1DO0FBQUEsUUFDbkMsb0JBQW9CO0FB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
