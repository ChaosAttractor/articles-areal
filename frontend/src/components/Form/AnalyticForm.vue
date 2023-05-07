<template>
  <form class="flex flex-col mt-[20px]" @submit.prevent="submit">
    <div
      class="flex gap-[20px] items-center font-montserrat text-[18px] font-bold text-white"
    >
      <p>От</p>
      <Input :type="'date'" :name="'dateFrom'" v-model:value="dateFrom" />
      <p>До</p>
      <Input :type="'date'" :name="'dateTo'" v-model:value="dateTo" />
    </div>
    <Button :type="'submit'" :title="'Отправить'" class="self-end mt-[20px]" />
  </form>
</template>

<script setup>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useApiStore } from "../../stores/apiStore";

const apiStore = useApiStore();

const route = useRoute();
const router = useRouter();

const dateFrom = ref("");
const dateTo = ref("");

const submit = () => {
  apiStore.getAllBetweenDates([dateFrom.value, dateTo.value]);
  router.push({ query: { dateFrom: dateFrom.value, dateTo: dateTo.value } });
};
</script>
