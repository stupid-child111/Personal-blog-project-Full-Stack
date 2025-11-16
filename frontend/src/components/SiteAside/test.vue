<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script setup>
import SiteAside from "./index.vue";
import '@/styles/style.less'
</script>

<style lang="less" scoped>

.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid red;
  margin: 0 auto;
}
</style>
