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
    // base: viteEnv.VITE_PUBLIC_PATH,
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
      // port: viteEnv.VITE_PORT,
      port: 3300,
      // open: viteEnv.VITE_OPEN,
      open: true,
      cors: true,
      // Load proxy configuration from .env.dev
      // proxy: createProxy(viteEnv.VITE_PROXY)
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
    plugins: createVitePlugins(viteEnv),
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    build: {
      outDir: "dist",
      minify: "esbuild",
      // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000
      // rollupOptions: {
      //   output: {
      //     // Static resource classification and packaging
      //     chunkFileNames: "assets/js/[name]-[hash].js",
      //     entryFileNames: "assets/js/[name]-[hash].js",
      //     assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      //   }
      // }
    }
  };
});
