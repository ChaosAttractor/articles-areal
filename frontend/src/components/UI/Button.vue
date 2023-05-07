<template>
  <button
    class="w-[150px] h-[50px] px-[10px] bg-btn-primary text-black rounded-[16px] font-montserrat text-[16px] font-bold hover:bg-white transition duration-200 ease-in-out"
    :type="type"
  >
    {{ title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
  type: String,
});
</script>
