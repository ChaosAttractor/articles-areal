<template>
  <div class="bg-main min-h-[calc(100vh-50px)] flex flex-col items-center">
    <p class="text-white font-montserrat font-bold text-[32px] mb-[10px]">
      Статьи
    </p>
    <ArticleTable />
  </div>
</template>

<script setup>
import ArticleTable from "../components/ArticleTable.vue";
import axios from "axios";
</script>
