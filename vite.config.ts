import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import { wrapperEnv } from "./build/getEnv";
import { createVitePlugins } from "./build/plugins";
import pkg from "./package.json";
import dayjs from "dayjs";
// https://vitejs.dev/config/
const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    base: "/wocwin-admin/",
    root,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
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
        "^/mes": {
          target: `http://10.0.10.243:5000/mesv2/`,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/mes/, "")
        },
        "^/portal-user": {
          target: `http://10.0.10.240:8172`,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/portal-user/, "/portal-user")
        },
        "^/portal-sso": {
          target: `http://10.0.10.240:8171`,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/portal-sso/, "/portal-sso")
        }
      }
    },
    plugins: createVitePlugins(),
    build: {
      outDir: "dist",
      minify: "esbuild", // esbuild打包速度最快，terser打包体积最小。
      // assetsInlineLimit: 4000, // 小于该值 图片将打包成Base64
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, //打包时删除console
          drop_debugger: true, //打包时删除 debugger
          pure_funcs: ["console.log"]
        },
        output: {
          // 去掉注释内容
          comments: true
        }
      },
      reportCompressedSize: false, // 禁用 gzip 压缩大小报告，可略微减少打包时间
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // js最小拆包
          // manualChunks: id => {
          //   if (id.includes("node_modules")) return "vendor";
          // },
          // 静态资源分类和包装
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
