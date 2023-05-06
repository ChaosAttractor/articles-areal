import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const showModal = ref(false);

  const editComment = ref({});

  return { showModal, editComment };
});
