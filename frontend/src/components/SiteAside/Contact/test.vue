<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script setup>
import Contact from "./index.vue";
</script>

<style lang="less" scoped>
@import "@/styles/style.less";
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  background-color: black;
  padding-top: 200px;
}
</style>
