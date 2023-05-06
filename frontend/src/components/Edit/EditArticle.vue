<template>
  <form
    class="w-[500px] flex flex-col justify-between mt-[20px]"
    @submit.prevent="submit"
  >
    <Input
      :placeholder="placeholder"
      v-model:value="v.appStore.editArticle.title.$model"
      class="h-[50px] w-[500px] border-b border-gray-line rounded-b-none"
    />
    <Input
      :type="'area'"
      :placeholder="placeholder"
      v-model:value="v.appStore.editArticle.desc.$model"
      class="min-h-[250px] w-[500px]"
    />
    <Button
      :type="'submit'"
      :title="btnTitle"
      class="self-end my-[30px] mr-[10px] w-[200px]"
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

const apiStore = useApiStore();
const appStore = useAppStore();

const placeholder = ref("Редактирование...");
const btnTitle = ref("Отредактировать");

const rules = computed(() => ({
  appStore: {
    editArticle: {
      title: {
        minLength: helpers.withMessage(
          `Минимальная длина: 5 символов`,
          minLength(5)
        ),
        maxLength: helpers.withMessage(
          `Максимальная длина: 30 символов`,
          maxLength(30)
        ),
        required,
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
        required,
      },
    },
  },
}));

const v = useVuelidate(rules, {
  appStore,
});

const submit = () => {
  v.value.$touch();
  let errors = v.value.$errors.length;
  if (errors) {
    for (let el of v.value.$errors) {
      appStore.notificationCreate(el.$message, "fail");
    }
    return;
  }
  apiStore.updateArticle(
    appStore.editArticle.id,
    appStore.editArticle.title,
    appStore.editArticle.desc
  );
  appStore.showModal = false;
  appStore.showModalArticle = false;
};
</script>
