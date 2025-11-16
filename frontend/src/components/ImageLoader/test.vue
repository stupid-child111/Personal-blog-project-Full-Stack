<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="500"
      @load="handleLoaded"
    />
  </div>
</template>

<script setup>
import ImageLoader from "./index.vue";
const handleLoaded = () => {
  console.log("handleLoaded图片加载完成");
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
