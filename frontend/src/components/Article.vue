<template>
  <div
    class="relative bg-navi-form rounded-[16px] w-[800px] min-h-[200px] font-montserrat font-bold text-white text-[18px] p-[10px]"
  >
    <div class="absolute flex gap-[10px] top-[10px] right-[10px]">
      <Edit @click="edit(props.article)" />
      <Delete @click="remove(props.article.id)" />
    </div>
    <p class="uppercase text-[24px] border-b border-gray-line">
      {{ props.article.title }}
    </p>
    <p>{{ props.article.desc }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useApiStore } from "../stores/apiStore";
import Delete from "./UI/Delete.vue";
import Edit from "./UI/Edit.vue";
import { useAppStore } from "../stores/appStore";

const router = useRouter();

const appStore = useAppStore();
const apiStore = useApiStore();

const props = defineProps({
  article: {
    id: Number,
    title: String,
    desc: String,
    createdAt: String,
    updatedAt: String,
  },
});

const edit = (article) => {
  appStore.editArticle = article;
  appStore.showModal = true;
  appStore.showModalArticle = true;
};

const remove = (id) => {
  apiStore.deleteArticle(id);
  router.push("/");
};
</script>
