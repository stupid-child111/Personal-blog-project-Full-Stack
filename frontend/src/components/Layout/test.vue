<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">22222222222222111</div>
      </template>
      <template #default>
        <div class="main">
          内容1111111111111111111111111111111111111111111111111111111111111111111111111区域
        </div>
      </template>
      <template #right>
        <div class="right">右侧区域</div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./index.vue";
</script>

<style lang="less" scoped>
.test-container {
  height: 1000px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
.left {
  height: 100%;
  width: 200px;
  background: lightcoral;
  white-space: nowrap;
}
.main {
  height: 100%;
  width: 100%;
  background: lightblue;
}
.right {
  height: 100%;
  width: 150px;
  background: lightgreen;
}
</style>
