<template>
  <div
    class="w-[800px] min-h-[50px] flex items-center justify-between bg-navi-form rounded-[16px] p-[10px] text-white font-montserrat text-[18px] font-bold"
  >
    <div class="flex flex-col">
      <p class="text-placeholder">
        {{ new Date(props.comment.updatedAt).toLocaleDateString() }}
        {{ new Date(props.comment.updatedAt).toLocaleTimeString() }}
      </p>
      <p class="break-all">
        {{ props.comment.text }}
      </p>
    </div>
    <div v-if="props.edit == 'true'" class="flex gap-[10px]">
      <Edit @click="edit(props.comment)" />
      <Delete @click="remove(props.comment.id)" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useApiStore } from "../stores/apiStore";
import { useAppStore } from "../stores/appStore";
import Delete from "./UI/Delete.vue";
import Edit from "./UI/Edit.vue";
const props = defineProps({
  comment: {
    id: Number,
    text: String,
    createdAt: String,
    updatedAt: String,
    articleId: String,
  },
  edit: {
    type: String,
    default: "true",
  },
});

const route = useRoute();

const apiStore = useApiStore();
const appStore = useAppStore();

const edit = (comment) => {
  appStore.editComment = comment;
  appStore.showModal = true;
  appStore.showModalComment = true;
};

const remove = (id) => {
  apiStore.deleteComment(id);
};
</script>
