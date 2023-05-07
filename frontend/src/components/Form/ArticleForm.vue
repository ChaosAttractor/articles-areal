<template>
  <form class="flex flex-col items-center" @submit.prevent="submit">
    <Input
      :placeholder="placeholderTitle"
      v-model:value="v.title.$model"
      class="w-[400px] my-[30px]"
      :class="{ 'animate-shake': shake }"
    />
    <Input
      :type="'area'"
      :placeholder="placeholderDesc"
      v-model:value="v.desc.$model"
      class="h-[50px] w-[400px] overflow-y-hidden"
      :class="{ 'animate-shake': shake }"
    />
    <Button
      :type="'submit'"
      :title="'Опубликовать'"
      class="self-end mt-[30px]"
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

const appStore = useAppStore();
const apiStore = useApiStore();
const eventStore = useEventStore();

const title = ref("");
const desc = ref("");
const placeholderTitle = ref("Название статьи...");
const placeholderDesc = ref("Введите текст...");
const clicked = ref(false);
const shake = ref(false);

const rules = computed(() => ({
  title: {
    minLength: helpers.withMessage(
      `Минимальная длина: 5 символов`,
      minLength(5)
    ),
    maxLength: helpers.withMessage(
      `Максимальная длина: 30 символов`,
      maxLength(30)
    ),
    required: helpers.withMessage(`Заполните поле название`, required),
  },
  desc: {
    minLength: helpers.withMessage(
      `Минимальная длина: 5 символов`,
      minLength(5)
    ),
    maxLength: helpers.withMessage(
      `Максимальная длина: 2000 символов`,
      maxLength(2000)
    ),
    required: helpers.withMessage(`Заполните поле текст`, required),
  },
}));

const v = useVuelidate(rules, {
  title,
  desc,
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
  apiStore.postArticle(title, desc);
  title.value = "";
  desc.value = "";
};
</script>
