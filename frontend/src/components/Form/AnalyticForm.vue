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
    <Button
      :type="'submit'"
      :title="'Отправить'"
      class="self-end mt-[20px]"
      :class="{ 'scale-95': clicked }"
    />
  </form>
</template>

<script setup>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useApiStore } from "../../stores/apiStore";
import { useEventStore } from "../../stores/eventStore";

const apiStore = useApiStore();
const eventStore = useEventStore();

const router = useRouter();

const dateFrom = ref("2023-01-01");
const dateTo = ref("2024-01-01");
const clicked = ref(false);

const submit = () => {
  eventStore.onClick(clicked, 100);
  apiStore.getAllBetweenDates([dateFrom.value, dateTo.value]);
  router.push({ query: { dateFrom: dateFrom.value, dateTo: dateTo.value } });
};
</script>
