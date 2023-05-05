<template>
  <form class="flex flex-col items-center" @submit.prevent="submit">
    <Input
      :placeholder="placeholderTitle"
      v-model:value="title"
      class="w-[400px] my-[30px]"
    />
    <Input
      :placeholder="placeholderDesc"
      v-model:value="desc"
      class="w-[400px]"
    />
    <Button :type="submit" :title="btnTitle" class="self-end mt-[30px]" />
  </form>
</template>

<script setup>
import Input from "./UI/Input.vue";
import Button from "./UI/Button.vue";
import { ref } from "vue";
import axios from "axios";

const title = ref("");
const desc = ref("");
const btnTitle = ref("Опубликовать");
const placeholderTitle = ref("Название статьи...");
const placeholderDesc = ref("Введите текст...");

const submit = () => {
  axios
    .post("http://localhost:5000/article", {
      title: title.value,
      desc: desc.value,
    })
    .then((res) => {
      title.value = "";
      desc.value = "";
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
