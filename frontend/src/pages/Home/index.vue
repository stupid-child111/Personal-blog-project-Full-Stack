<template>
  <div class="home-container" ref="homeContainer">
    <h1>首页</h1>
    <button @click="handleClick">点击我</button>
  </div>
</template>

<script setup>
import { showMessage } from "@/utils";
import { getBannerData } from "../../api/banner";
import { onMounted, ref } from "vue";
onMounted(() => {
  getBannerData().then((res) => {
    console.log(res);
  });
});

const homeContainer = ref(null);
const handleClick = () => {
  showMessage({
    content: "hello world",
    type: "success",
    container: homeContainer.value,
    callback: function () {
      console.log("消息显示完成,可执行后续逻辑");
    },
  });
};
</script>

<style lang="less" scoped>
.home-container {
  background: purple;
}
</style>
