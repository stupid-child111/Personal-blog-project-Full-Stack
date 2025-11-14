<template>
  <div class="pager-container" v-if="PageNumber > 1">
    <a @click="handleClick(1)" :class="{ initiation: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ initiation: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(number)"
      v-for="(number, index) in numbers"
      :key="index"
      :class="{ active: number === current }"
      >{{ number }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ initiation: current === PageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(PageNumber)"
      :class="{ initiation: current === PageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<style lang="less" scoped>
@import "../styles/style.less";
.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 5px;
    cursor: pointer;
    &.initiation {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script setup>
import { computed } from "vue";

const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 10,
  },
  visibleNumber: {
    type: Number,
    default: 10,
  },
});
const PageNumber = computed(() => {
  return Math.ceil(props.total / props.limit);
});
//得到页码中最小的数字,方便计算页码可现实范围
const visibleMin = computed(() => {
  let min = props.current - Math.floor(props.visibleNumber / 2);
  return min < 1 ? 1 : min;
});

const visibleMax = computed(() => {
  let max = visibleMin.value + props.visibleNumber - 1;
  return max > PageNumber.value ? PageNumber.value : max;
});
const numbers = computed(() => {
  let numbers = [];
  for (let i = visibleMin.value; i <= visibleMax.value; i++) {
    numbers.push(i);
  }
  return numbers;
});
const emit = defineEmits(["pageChange"]);
const handleClick = (newPage) => {
  if (newPage < 1) {
    newPage = 1;
  }
  if (newPage > PageNumber.value) {
    newPage = PageNumber.value;
  }
  if (newPage === props.current) {
    return;
  }
  emit("pageChange", newPage);
};
</script>
