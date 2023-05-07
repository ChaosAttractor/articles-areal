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
          v-for="article in apiStore.articles"
          :key="article.id"
        >
          <td class="text-center">
            {{ article.id }}
          </td>
          <td class="h-[33px] max-w-[300px] pr-[10px]">
            <p class="truncate break-words">
              {{ article.title }}
            </p>
          </td>
          <td class="h-[33px] max-w-[300px] flex items-center">
            <p class="truncate">
              {{ article.desc }}
            </p>
          </td>
          <td class="px-[15px]">
            {{ new Date(article.updatedAt).toLocaleDateString() }}
          </td>
          <td>
            <button
              @click="router.push(`/article/${article.id}`)"
              class="flex pl-[10px]"
              title="открыть статью"
            >
              <Open />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useApiStore } from "../stores/apiStore";
import Open from "./UI/Open.vue";

const apiStore = useApiStore();
const router = useRouter();

onMounted(() => {
  apiStore.getArticles();
});
</script>
