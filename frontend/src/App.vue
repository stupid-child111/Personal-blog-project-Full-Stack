<template>
  <div>
    你好
    <Avatar url="https://www.dmoe.cc/random.php" :size="100" />
    <Icon type="home" />
  </div>
</template>

<script setup>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";
</script>

<style scoped>
.iconfont {
  color: red;
}
  </style>
