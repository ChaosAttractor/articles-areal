<template>
  <div
    class="bg-main min-h-[calc(100vh-50px)] flex flex-col items-center justify-center"
  >
    <p class="text-white font-montserrat font-bold text-[24px]">
      Создание статьи
    </p>
    <ArticleForm />
  </div>
</template>

<script setup>
import ArticleForm from "../components/ArticleForm.vue";
</script>
