import { createRouter, createWebHistory } from "vue-router";
import ArticleView from "../views/ArticleView.vue";
import CreateArticleView from "../views/CreateArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "articlelist",
      component: ArticleView,
    },
    {
      path: "/create",
      name: "createArticle",
      component: CreateArticleView,
    },
  ],
});

export default router;
