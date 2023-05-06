<template>
  <div class="flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[24px]">
      Комментарии за определнный период
    </p>
    <AnalyticForm class="mb-[30px]" />
    <ArticleWithComment
      v-for="block in apiStore.filteredComments"
      :block="block"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ArticleWithComment from "../components/ArticleWithComment.vue";
import AnalyticForm from "../components/Form/AnalyticForm.vue";
import { useApiStore } from "../stores/apiStore";
import { useRoute } from "vue-router";

const route = useRoute();
const apiStore = useApiStore();

onMounted(() => {
  if (route.query) {
    apiStore.getAllBetweenDates(route.query);
  }
});
</script>
