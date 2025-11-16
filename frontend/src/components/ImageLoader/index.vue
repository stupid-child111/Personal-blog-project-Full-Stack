<template>
  <div class="image-loader-container">
    <img v-if="!allDone" class="placeholder" :src="placeholder" alt="" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
    <!-- @load img元素本身事件  -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 500,
  },
});
const originLoaded = ref(false); //原图是否加载完成
const allDone = ref(false); //是否所有资源加载完成
const originOpacity = computed(() => {
  return originLoaded.value ? 1 : 0;
});
const emit = defineEmits(["load"]);
const handleLoad = () => {
  originLoaded.value = true;
  setTimeout(() => {
    allDone.value = true;
    emit("load");
  }, props.duration);
};
</script>

<style lang="less" scoped>
@import "../../styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover; /* 图片等比例缩放，填充容器 */
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
