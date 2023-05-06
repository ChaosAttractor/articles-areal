<template>
  <div
    class="w-[800px] min-h-[50px] flex items-center justify-between bg-navi-form rounded-[16px] p-[10px] text-white font-montserrat text-[18px] font-bold"
  >
    <div class="flex flex-col">
      <p class="text-placeholder">
        {{ new Date(props.comment.updatedAt).toLocaleDateString() }}
        {{ new Date(props.comment.updatedAt).toLocaleTimeString() }}
      </p>
      <p>
        {{ props.comment.text }}
      </p>
    </div>
    <div class="flex gap-[10px]">
      <Edit @click="edit(props.comment)" />
      <Delete @click="remove(props.comment.id)" />
    </div>
    <Modal>
      <EditComment />
    </Modal>
  </div>
</template>

<script setup>
import { useApiStore } from "../stores/apiStore";
import { useAppStore } from "../stores/appStore";
import EditComment from "./Edit/EditComment.vue";
import Delete from "./UI/Delete.vue";
import Edit from "./UI/Edit.vue";
import Modal from "./UI/Modal.vue";
const props = defineProps({
  comment: {
    id: Number,
    text: String,
    createdAt: String,
    updatedAt: String,
    articleId: String,
  },
});

const apiStore = useApiStore();
const appStore = useAppStore();

const edit = (comment) => {
  console.log(comment);
  appStore.editComment = comment;
  appStore.showModal = true;
};

const remove = (id) => {
  apiStore.deleteComment(id);
};
</script>
