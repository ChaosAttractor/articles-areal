<template>
  <div class="flex flex-col relative">
    <Comment
      :comment="props.block"
      :edit="'false'"
      class="my-[20px] z-10 relative"
    />
    <Article
      :article="props.block.article"
      :type="'mini'"
      class="z-10 self-end"
    />
    <div
      class="w-[400px] h-[100px] border-b-[10px] border-l-[10px] border-navi-form rounded-[16px] absolute left-[300px] top-[50px]"
    ></div>
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
