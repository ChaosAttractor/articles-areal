<template>
  <div class="flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[24px] my-[10px]">
      Просмотр статьи
    </p>
    <Article :article="apiStore.article" />
    <CommentForm />
    <Modal>
      <EditComment v-if="appStore.showModalComment" />
      <EditArticle v-if="appStore.showModalArticle" />
    </Modal>
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
import Modal from "../components/UI/Modal.vue";
import EditComment from "../components/Edit/EditComment.vue";
import Comment from "../components/Comment.vue";
import CommentForm from "../components/Create/CommentForm.vue";
import EditArticle from "../components/Edit/EditArticle.vue";
import { useAppStore } from "../stores/appStore";

const appStore = useAppStore();
const apiStore = useApiStore();

onMounted(() => {
  apiStore.getArticle();
  apiStore.getCommentsArticle();
});
</script>
