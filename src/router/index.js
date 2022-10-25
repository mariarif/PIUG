import { createRouter, createWebHistory } from "vue-router";
import StartPageView from "../views/StartPageView.vue";
import ShopPageView from "../views/ShopPageView.vue";
import HomePageView from "../views/HomePageView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/start",
      name: "start",
      component: StartPageView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopPageView,
    },
    {
      path: "/home",
      alias: "/",
      name: "home",
      component: HomePageView,
    },
  ],
});
export default router;