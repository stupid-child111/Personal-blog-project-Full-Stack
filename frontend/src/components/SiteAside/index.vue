<template>
  <div class="site-aside-container">
    <Avatar url="https://www.dmoe.cc/random.php" />
    <h1 class="title">叫我美女大美女</h1>
    <Menu />
    <Contact />
    <footer>赣IPagagjg</footer>
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar/index.vue";
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow: hidden auto;
}

:deep .avatar-container {
  margin: 0 auto;
}

footer {
  font-size: 12px;
  color: @gray;
  text-align: center;
}
.title {
    font-size: 1em;
    color: #fff;
    text-align: center;

}
</style>
