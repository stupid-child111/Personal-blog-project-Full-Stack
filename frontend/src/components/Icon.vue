<template>
    <i class="iconfont" :class="iconClass"></i>
</template>

<script setup>
import { computed } from "vue";

const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const iconClass = computed(() => {
  return classMap[props.type];
});
</script>

<style scoped>
/* 示例图标 */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css"; 
/* 自定义图标集 可根据需要添加 */   
/* @import "//at.alicdn.com/t/c/font_5065705_ccn3k8xgb2v.css"; */
</style>
