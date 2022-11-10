import { createRouter, createWebHistory } from "vue-router";
import AboutPageView from "../views/AboutPageView.vue"
import BrowsePageView from "../views/BrowsePageView.vue";
import HomePageView from "../views/HomePageView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutPageView,
    },
    {
      path: "/browse/:type",
      name: "browse",
      params: true,
      component: BrowsePageView,
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