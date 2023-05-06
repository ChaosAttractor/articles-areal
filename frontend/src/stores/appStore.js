import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const showModal = ref(false);
  const showModalComment = ref(false);
  const showModalArticle = ref(false);

  const editComment = ref({});
  const editArticle = ref({});

  return {
    showModal,
    showModalComment,
    showModalArticle,
    editComment,
    editArticle,
  };
});
