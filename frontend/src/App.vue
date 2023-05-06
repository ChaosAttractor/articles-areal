<template>
  <div>
    <Header />
    <Notification />
    <RouterView class="bg-main min-h-[calc(100vh-50px)]" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Notification from "./components/UI/Notification.vue";
</script>
