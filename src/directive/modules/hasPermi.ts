/**
 * v-hasPermi
 * 按钮权限指令
 */
import { useAuthStore } from "@/store/modules/auth";
import type { Directive, DirectiveBinding } from "vue";

const hasPermi: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const authStore = useAuthStore();
    const all_permission = "*:*:*";
    const permissions = authStore.authButtonListGet;
    if (value) {
      const permissionFlag = value;
      const hasPermissions = permissions.some(permission => {
        return all_permission === permission || permission.includes(permissionFlag);
      });
      if (!hasPermissions) {
        el.remove();
      }
    } else {
      throw new Error(`请设置操作权限标签值`);
    }
  }
};

export default hasPermi;
