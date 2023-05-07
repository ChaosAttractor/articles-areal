import { ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import axios from "axios";
import { useAppStore } from "./appStore";

export const useApiStore = defineStore("api", () => {
  const route = useRoute();
  const appStore = useAppStore();

  const article = ref({});
  const articles = ref({});
  const comments = ref({});
  const filteredComments = ref({});

  const getArticle = () => {
    axios
      .get(`http://localhost:5000/article/${route.params.id}`)
      .then((res) => (article.value = res.data));
  };

  const getArticles = () => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => (articles.value = res.data));
  };

  const getCommentsArticle = () => {
    axios
      .get(`http://localhost:5000/article/${route.params.id}/comments`)
      .then((res) => (comments.value = res.data));
  };

  const getAllBetweenDates = (dates) => {
    axios
      .get(
        `http://localhost:5000/analytic/comments?dateFrom=${dates[0]}&dateTo=${dates[1]}`
      )
      .then((res) => (filteredComments.value = res.data));
  };

  const postArticle = (title, desc) => {
    axios
      .post("http://localhost:5000/article", {
        title: title.value,
        desc: desc.value,
      })
      .then((res) => {
        appStore.notificationCreate("Статья создана", "success");
      })
      .catch((err) => {
        appStore.notificationCreate("Не удалось создать статью", "fail");
      });
  };

  const postComment = (text) => {
    axios
      .post(`http://localhost:5000/article/${route.params.id}/comment`, {
        text: text.value,
      })
      .then((res) => {
        getCommentsArticle();
        appStore.notificationCreate("Комментарий создан", "success");
      })
      .catch((err) => {
        appStore.notificationCreate("Не удалось создать комментарий", "fail");
      });
  };

  const updateComment = (id, text) => {
    axios
      .patch(`http://localhost:5000/article/${route.params.id}/comment/${id}`, {
        text: text,
      })
      .then((res) => {
        appStore.notificationCreate("Комментарий отредактирован", "success");
        getCommentsArticle();
      })
      .catch((err) => {
        appStore.notificationCreate(
          "Не удалось отредактировать комментарий",
          "fail"
        );
      });
  };

  const updateArticle = (id, title, desc) => {
    axios
      .patch(`http://localhost:5000/article/${id}`, {
        title: title,
        desc: desc,
      })
      .then((res) => {
        appStore.notificationCreate("Статья обновлена", "success");
        getCommentsArticle();
      })
      .catch((err) =>
        appStore.notificationCreate("Не удалось обновить статью", "fail")
      );
  };

  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:5000/article/${id}`)
      .then((res) => {
        appStore.notificationCreate("Статья удалена", "success");
        getArticles();
      })
      .catch((err) =>
        appStore.notificationCreate("Не удалось удалить статью", "fail")
      );
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:5000/article/${route.params.id}/comment/${id}`)
      .then((res) => {
        getCommentsArticle();
        appStore.notificationCreate("Комментарий удален", "success");
      })
      .catch((err) =>
        appStore.notificationCreate("Не удалось удалить комментарий", "fail")
      );
  };

  return {
    article,
    articles,
    comments,
    filteredComments,
    getArticle,
    getCommentsArticle,
    getArticles,
    getAllBetweenDates,
    postArticle,
    postComment,
    updateArticle,
    updateComment,
    deleteArticle,
    deleteComment,
  };
});
