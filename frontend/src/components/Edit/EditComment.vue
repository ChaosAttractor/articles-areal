<template>
  <form
    class="w-[500px] flex flex-col justify-between mt-[20px]"
    @submit.prevent="submit"
  >
    <Input
      :type="'area'"
      :placeholder="placeholder"
      v-model:value="v.appStore.editComment.text.$model"
      class="h-[50px] w-[500px]"
    />
    <Button
      :type="'submit'"
      :title="btnTitle"
      class="self-end my-[30px] mr-[10px] w-[200px]"
      :class="{ 'scale-95': clicked }"
      @click="submit"
    />
  </form>
</template>

<script setup>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, maxLength, required } from "@vuelidate/validators";
import { useApiStore } from "../../stores/apiStore";
import { useAppStore } from "../../stores/appStore";
import { useEventStore } from "../../stores/eventStore";

const apiStore = useApiStore();
const appStore = useAppStore();
const eventStore = useEventStore();

const placeholder = ref("Редактирование...");
const btnTitle = ref("Отредактировать");
const clicked = ref(false);

const rules = computed(() => ({
  appStore: {
    editComment: {
      text: {
        minLength: helpers.withMessage(
          `Минимальная длина: 5 символов`,
          minLength(5)
        ),
        maxLength: helpers.withMessage(
          `Максимальная длина: 600 символов`,
          maxLength(600)
        ),
        required: helpers.withMessage(`Заполните поле`, required),
      },
    },
  },
}));

const v = useVuelidate(rules, {
  appStore,
});

const submit = () => {
  eventStore.onClick(clicked, 100);
  v.value.$touch();
  let errors = v.value.$errors.length;
  if (errors) {
    for (let el of v.value.$errors) {
      appStore.notificationCreate(el.$message, "fail");
    }
    return;
  }
  apiStore.updateComment(appStore.editComment.id, appStore.editComment.text);
  appStore.showModal = false;
  appStore.showModalComment = false;
};
</script>
