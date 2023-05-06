import { createRouter, createWebHistory } from "vue-router";
import ArticleListView from "../views/ArticleListView.vue";
import ArticleView from "../views/ArticleView.vue";
import CreateArticleView from "../views/CreateArticleView.vue";
import AnalyticView from "../views/AnalyticView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ArticleListView,
    },
    {
      path: "/create",
      component: CreateArticleView,
    },
    {
      path: "/article/:id",
      component: ArticleView,
    },
    {
      path: "/analytic",
      component: AnalyticView,
    },
    {
      path: "/:catchAll(.*)",
      component: ArticleListView,
    },
  ],
});

export default router;
