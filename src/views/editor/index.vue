<template>
  <t-layout-page class="overview_diagram">
    <t-layout-page-item>
      <a style="padding: 0 5px" href="https://www.wangeditor.com/" target="_blank"> wangEditor官方文档 </a>
      <Toolbar
        style="border-bottom: 1px solid #ccc; border-top: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @on-created="handleCreated"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts" name="editor">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const mode = ref("default"); // or 'simple'
// 内容 HTML
const valueHtml = ref("");

onMounted(() => {});

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  console.log("handleCreated--", editor);
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
