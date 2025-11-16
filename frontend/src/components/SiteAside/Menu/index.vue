<template>
  <nav class="menu-container">
    <a
      v-for="item in menuItems"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon/index.vue";
const menuItems = ref([
  {
    link: "/",
    title: "首页",
    icon: "home",
  },
  {
    link: "/blog",
    title: "文章",
    icon: "blog",
    startWith: true, //只要当前路径以/blog开头，就认为是选中状态
  },
  {
    link: "/about",
    title: "关于",
    icon: "about",
  },
  {
    link: "/project",
    title: "项目&效果",
    icon: "code",
  },
  {
    link: "/message",
    title: "留言板",
    icon: "chat",
  },
]);
const isSelected = (item) => {
  const link = item.link.toLowerCase();
  const curPathname = location.pathname.toLowerCase();
  if (item.startWith) {
    return curPathname.startsWith(link);
  } else {
    return curPathname === link;
  }
};
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
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
    &.selected {
      background: #2d2d2d;
    }
  }
}
</style>
