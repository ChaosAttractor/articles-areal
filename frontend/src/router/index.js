import { createRouter, createWebHistory } from "vue-router";
import ArticleListView from "../views/ArticleListView.vue";
import ArticleView from "../views/ArticleView.vue";
import CreateArticleView from "../views/CreateArticleView.vue";

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
  ],
});

export default router;
