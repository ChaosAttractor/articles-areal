<template>
  <Article :article="props.block.article" class="my-[20px]" />
  <Comment :comment="props.block" class="mb-[20px]" />
  <div class="text-white">
    <p class="text-white"></p>
  </div>
</template>

<script setup>
import Article from "./Article.vue";
import Comment from "./Comment.vue";

const props = defineProps({
  block: {
    id: Number,
    text: String,
    createdAt: String,
    updatedAt: String,
    articleId: Number,
    article: {
      id: Number,
      title: String,
      desc: String,
      createdAt: String,
      updatedAt: String,
    },
  },
});
</script>
