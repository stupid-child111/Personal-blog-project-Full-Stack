import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home/index.vue";
import About from "@/pages/About/index.vue";
import Blog from "@/pages/Blog/index.vue";
import Message from "@/pages/Message/index.vue";
import Project from "@/pages/Project/index.vue";

const routes = [
  {
    name: "Home", //命名路由
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
