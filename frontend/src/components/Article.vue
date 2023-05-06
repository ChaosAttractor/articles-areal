<template>
  <div
    class="bg-navi-form rounded-[16px] w-[800px] min-h-[200px] font-montserrat font-bold text-white text-[18px] p-[10px]"
  >
    <p class="uppercase text-[24px] border-b border-gray-line">
      {{ props.article.title }}
    </p>
    <p>{{ props.article.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    id: Number,
    title: String,
    desc: String,
    createdAt: String,
    updatedAt: String,
  },
});
</script>
