<template>
  <form
    class="w-[800px] flex justify-between mt-[20px]"
    @submit.prevent="submit"
  >
    <Input
      :type="area"
      :placeholder="placeholder"
      v-model:value="v.text.$model"
      class="h-[50px] w-[500px]"
    />
    <Button :type="submit" :title="btnTitle" />
  </form>
</template>

<script setup>
import Input from "./UI/Input.vue";
import Button from "./UI/Button.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, maxLength } from "@vuelidate/validators";
import axios from "axios";

const route = useRoute();
const text = ref("");
const placeholder = ref("Напишите комментарий...");
const area = ref("area");
const btnTitle = ref("Отправить");

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
  },
}));

const v = useVuelidate(rules, {
  text,
});

const submit = () => {
  v.value.$touch();
  let errors = v.value.$errors.length;
  if (!errors) return;
  axios
    .post(`http://localhost:5000/article/${route.params.id}/comment`, {
      text: text.value,
    })
    .then((res) => {
      text.value = "";
      console.log(res);
      //сделать компонент уведомлений и отсылать туда инфу по сабмиту
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
