<template>
  <div>
    <Header />
    <Notification />
    <RouterView class="bg-main min-h-[calc(100vh-50px)]" />
    <Modal>
      <EditComment v-if="appStore.showModalComment" />
      <EditArticle v-if="appStore.showModalArticle" />
    </Modal>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Notification from "./components/UI/Notification.vue";
import Modal from "./components/UI/Modal.vue";
import EditArticle from "./components/Edit/EditArticle.vue";
import EditComment from "./components/Edit/EditComment.vue";
import { useAppStore } from "./stores/appStore";

const appStore = useAppStore();
</script>
