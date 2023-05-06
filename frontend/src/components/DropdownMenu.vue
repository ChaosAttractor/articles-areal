<template>
  <div class="absolute top-[10px] left-[10px]">
    <svg
      @click="dropdownActive"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="h-[24px] w-[24px] fill-white cursor-pointer duration-200 ease-in-out"
      :class="{ active: isVisible }"
    >
      <path
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
    <ul v-if="isVisible">
      <li v-for="item in props.dropdown" :key="item.id">
        <RouterLink
          :to="item.link"
          @click="dropdownActive"
          class="bg-navi-form w-[200px] min-h-[30px] pl-[5px] flex items-center border-b border-gray-line text-white text-[18px]"
          >{{ item.title }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  dropdown: {
    id: Number,
    title: String,
    link: String,
  },
});

const isVisible = ref(false);

const dropdownActive = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped>
.active {
  @apply rotate-[-90deg];
}

.router-link-exact-active,
.router-link-active {
  @apply bg-gray-line;
}
</style>
