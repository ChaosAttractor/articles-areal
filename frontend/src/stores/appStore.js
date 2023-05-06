import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const showModal = ref(false);
  const showModalComment = ref(false);
  const showModalArticle = ref(false);

  const notification = ref([]);

  const editComment = ref({});
  const editArticle = ref({});

  const notificationCreate = (title, type) => {
    if (
      title == "Статья обновлена" ||
      title == "Комментарий отредактирован" ||
      title == "Максимальная длина: 30 символов" ||
      title == "Минимальная длина: 5 символов" ||
      title == "Максимальная длина: 2000 символов" ||
      title == "Максимальная длина: 600 символов"
    ) {
      notification.value.splice(0, 1);
    }
    notification.value.unshift({ id: Date.now(), title: title, type: type });
  };

  const notificationRemove = () => {
    setTimeout(() => {
      notification.value.splice(notification.value.length - 1, 1);
    }, 5000);
  };

  return {
    showModal,
    showModalComment,
    showModalArticle,
    notification,
    notificationCreate,
    notificationRemove,
    editComment,
    editArticle,
  };
});
