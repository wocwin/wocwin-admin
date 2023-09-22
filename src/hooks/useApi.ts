import { ComponentInternalInstance, getCurrentInstance } from "vue";
export default function useApi() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return {
    proxy
  };
}
