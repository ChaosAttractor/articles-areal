<template>
  <div class="flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[24px] my-[10px]">
      Просмотр статьи
    </p>
    <Article :article="article" />
    <CommentForm />
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      class="mt-[20px]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Article from "../components/Article.vue";
import CommentForm from "../components/CommentForm.vue";
import Comment from "../components/Comment.vue";

const route = useRoute();

const article = ref({});
const comments = ref({});

onMounted(() => {
  axios
    .get(`http://localhost:5000/article/${route.params.id}`)
    .then((res) => (article.value = res.data));
  axios
    .get(`http://localhost:5000/article/${route.params.id}/comments`)
    .then((res) => (comments.value = res.data));
});
</script>
