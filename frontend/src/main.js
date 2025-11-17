import { createApp } from "vue";
import "./styles/style.less";
import App from "./App.vue";
import router from "./router";
import './mock';

createApp(App).use(router).mount("#app");
