<template>
  <div>
    <!-- 你好
    <Avatar url="https://www.dmoe.cc/random.php" :size="100" />
    <Icon type="home" />
    <Pager :total="total" :current="current" @pageChange="handlePageChange" /> -->
    <Empty />
  </div>
</template>

<script setup>
import Avatar from "./components/Avatar/index.vue";
import Icon from "./components/Icon/index.vue";
import Pager from "./components/Pager/index.vue";
import Empty from "./components/Empty/index.vue";
import { ref } from "vue";
const total = ref(302);
const current = ref(3);
const handlePageChange = ((page) => {
  current.value = page;
})
</script>

<style scoped>
.iconfont {
  color: red;
}
</style>
