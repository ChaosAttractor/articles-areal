<template>
  <div class="flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[24px] my-[10px]">
      Статьи
    </p>
    <ArticleTable class="mb-[30px]" />
  </div>
</template>

<script setup>
import ArticleTable from "../components/ArticleTable.vue";
</script>
