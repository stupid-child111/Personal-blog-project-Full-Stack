<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script setup>
import Menu from "./index.vue";
</script>

<style lang="less" scoped>
@import "@/styles/style.less";
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>
