<template>
  <form class="flex flex-col items-center" @submit.prevent="submit">
    <Input
      :placeholder="placeholderTitle"
      v-model:value="v.title.$model"
      class="w-[400px] my-[30px]"
    />
    <Input
      :type="area"
      :placeholder="placeholderDesc"
      v-model:value="v.desc.$model"
      class="h-[50px] w-[400px] overflow-y-hidden"
    />
    <Button :type="submit" :title="btnTitle" class="self-end mt-[30px]" />
  </form>
</template>

<script setup>
import Input from "./UI/Input.vue";
import Button from "./UI/Button.vue";
import { ref, computed } from "vue";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, maxLength } from "@vuelidate/validators";

const area = ref("area");
const title = ref("");
const desc = ref("");
const btnTitle = ref("Опубликовать");
const placeholderTitle = ref("Название статьи...");
const placeholderDesc = ref("Введите текст...");

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
  },
}));

const v = useVuelidate(rules, {
  title,
  desc,
});

const submit = () => {
  v.value.$touch();
  let errors = v.value.$errors.length;
  if (!errors) return;
  axios
    .post("http://localhost:5000/article", {
      title: title.value,
      desc: desc.value,
    })
    .then((res) => {
      title.value = "";
      desc.value = "";
      console.log(res);
      //сделать компонент уведомлений и отсылать туда инфу по сабмиту
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
