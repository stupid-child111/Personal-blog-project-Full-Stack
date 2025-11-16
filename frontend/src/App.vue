<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        中间区域
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
</script>

<style lang="less" scoped>
@import "./styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width:200px;
  height: 100%;
}
</style>
