import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TourItem from "./views/TourItem.vue"; // Make sure to include the correct file extension
import BannerPage from "./views/BannerPage.vue";

const routes = [
  { path: "/", component: BannerPage },
  { path: "/item", component: TourItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
