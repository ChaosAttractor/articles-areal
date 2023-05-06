import { ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import axios from "axios";

export const useApiStore = defineStore("api", () => {
  const route = useRoute();

  const article = ref({});
  const articles = ref({});
  const comments = ref({});

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

  const postArticle = (title, desc) => {
    axios
      .post("http://localhost:5000/article", {
        title: title.value,
        desc: desc.value,
      })
      .then((res) => {
        console.log(res);
        //сделать компонент уведомлений и отсылать туда инфу по сабмиту
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postComment = (text) => {
    axios
      .post(`http://localhost:5000/article/${route.params.id}/comment`, {
        text: text.value,
      })
      .then((res) => {
        getCommentsArticle();
        console.log(res);
        //сделать компонент уведомлений и отсылать туда инфу по сабмиту
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:5000/article/${route.params.id}/comment/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getCommentsArticle();
  };

  return {
    article,
    articles,
    comments,
    getArticle,
    getCommentsArticle,
    getArticles,
    postArticle,
    postComment,
    deleteComment,
  };
});
