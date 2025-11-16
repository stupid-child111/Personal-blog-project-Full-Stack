<template>
  <div>
    <img
      class="avatar-container"
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String, //属性限制
    required: true,
    // default: 'https://www.dmoe.cc/random.php'
  },
  //考虑通用性,需要传递的数据
  size: {
    type: Number,
    default: 150,
  },
});
</script>

<style scoped>
/*scoped:带有作用域的样式,防止样式冲突 */
.avatar-container {
  border-radius: 50%;
  object-fit: cover; /*解释: 图片裁剪,保持比例,填充整个容器 */
  display: block; /*行盒：与其他行盒在同一行排列 */
}
</style>
