<template>
  <form
    class="w-[800px] flex justify-between mt-[20px]"
    @submit.prevent="submit"
  >
    <Input
      :type="'area'"
      :placeholder="placeholder"
      v-model:value="v.text.$model"
      class="h-[50px] w-[500px]"
      :class="{ 'animate-shake': shake }"
    />
    <Button
      :type="'submit'"
      :title="'Отправить'"
      :class="{ 'scale-95': clicked }"
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

const shake = ref(false);
const clicked = ref(false);
const text = ref("");
const placeholder = ref("Напишите комментарий...");

const rules = computed(() => ({
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
}));

const v = useVuelidate(rules, {
  text,
});

const submit = () => {
  eventStore.onClick(clicked, 100);
  v.value.$touch();
  let errors = v.value.$errors.length;
  if (errors) {
    eventStore.onClick(shake, 300);
    for (let el of v.value.$errors) {
      appStore.notificationCreate(el.$message, "fail");
    }
    return;
  }
  apiStore.postComment(text);
  text.value = "";
};
</script>
