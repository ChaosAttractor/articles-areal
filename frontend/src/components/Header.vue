<template>
  <div
    class="h-[50px] border-b border-gray-line bg-main flex justify-center items-center"
  >
    <DropdownMenu :dropdown="dropdown" />

    <p
      class="font-montserrat font-bold text-[36px] text-white select-none cursor-pointer"
      @click="home"
    >
      не<span class="bg-blue-500 rounded-[16px] px-[5px]">vk</span>
    </p>
  </div>
</template>

<script setup>
import DropdownMenu from "./DropdownMenu.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const dropdown = ref([
  { id: 1, title: "Список статей", link: "/" },
  { id: 2, title: "Создать статью", link: "/create" },
]);

const home = () => {
  router.push("/");
};
</script>
