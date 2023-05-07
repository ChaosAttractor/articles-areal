<template>
  <div class="flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[24px] my-[10px]">
      Просмотр статьи
    </p>
    <Article :article="apiStore.article" :type="'full'" />
    <CommentForm />

    <Comment
      v-for="comment in apiStore.comments"
      :key="comment.id"
      :comment="comment"
      class="mt-[20px]"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useApiStore } from "../stores/apiStore";
import Article from "../components/Article.vue";
import Comment from "../components/Comment.vue";
import CommentForm from "../components/Form/CommentForm.vue";

const apiStore = useApiStore();

onMounted(() => {
  apiStore.getArticle();
  apiStore.getCommentsArticle();
});
</script>
