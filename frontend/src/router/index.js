import { createRouter, createWebHistory } from "vue-router";
import ArticleView from "../views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ArticleView,
    },
  ],
});

export default router;
