<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in menuItems"
      :key="item.link"
      :to="{name: item.name}"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon/index.vue";

const menuItems = ref([
  {
    name: "Home",
    title: "首页",
    icon: "home",
    exact: true, //精确匹配
  },
  {
    name: "Blog",
    title: "文章",
    icon: "blog",
    exact: false, //模糊匹配
  },
  {
    name: "About",
    title: "关于",
    icon: "about",
    exact: true,
  },
  {
    name: "Project",
    title: "项目&效果",
    icon: "code",
    exact: true,
  },
  {
    name: "Message",
    title: "留言板",
    icon: "chat",
    exact: true,
  },
]);
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: #2d2d2d;
    }
    display: block; //块盒独占一行
    padding: 0 50px;
    display: flex;
    height: 45px;
    align-items: center;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
