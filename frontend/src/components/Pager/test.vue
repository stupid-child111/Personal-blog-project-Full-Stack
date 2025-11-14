<template>
  <div>
    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script setup>
import Pager from "./index.vue";
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
