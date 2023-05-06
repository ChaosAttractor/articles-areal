<template>
  <div>
    <Header />
    <RouterView class="bg-main min-h-[calc(100vh-50px)]" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
