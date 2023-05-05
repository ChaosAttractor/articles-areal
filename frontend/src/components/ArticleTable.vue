<template>
  <div>
    <table
      class="table-fixed border-b border-gray-line text-white font-montserrat font-bold text-[18px] overflow-hidden bg-navi-form rounded-[16px]"
    >
      <thead>
        <tr class="border-b border-gray-line">
          <th class="w-[50px] min-h-[50px] text-center py-[15px]">ID</th>
          <th class="w-[300px] min-h-[50px] text-left py-[15px]">Название</th>
          <th class="w-[300px] min-h-[50px] py-[15px]">Содержание</th>
          <th class="w-[50px] min-h-[50px] py-[15px]">Дата</th>
          <th class="w-[50px] min-h-[50px] py-[15px]"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-gray-line"
          v-for="article in articles"
          :key="article.id"
        >
          <td class="text-center">
            {{ article.id }}
          </td>
          <td class="max-h-[100px] max-w-[300px]">
            <p class="truncate break-words">
              {{ article.title }}
            </p>
          </td>
          <td class="max-h-[100px] max-w-[300px] flex items-center">
            <p class="truncate">
              {{ article.desc }}
            </p>
          </td>
          <td class="px-[15px]">
            {{ new Date(article.createdAt).toLocaleDateString() }}
          </td>
          <td>
            <button
              @click="info(article.id)"
              class="flex pl-[10px]"
              title="открыть статью"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-[32px] h-[32px] self-center cursor-pointer fill-white"
              >
                <path
                  d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const articles = ref([]);

const info = (e) => {
  console.log(e);
  //сделать потом переход по этому ивенту на пейдж со статьей и комментариями
};

onMounted(() => {
  axios
    .get("http://localhost:5000/articles")
    .then((res) => (articles.value = res.data));
});
</script>
