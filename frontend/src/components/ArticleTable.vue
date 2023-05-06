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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-[32px] h-[32px] self-center cursor-pointer fill-white"
              >
                <path
                  d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-25 -30 512 512"
                class="w-[24px] h-[24px] self-center cursor-pointer fill-white absolute 0 rotate-6 hover:rotate-0 hover:scale-125 hover:translate-x-[-3px] hover:translate-y-[3px] hover:w-[32px] hover:fill-green-400 duration-200 ease-in-out"
              >
                <path
                  d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
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
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useApiStore } from "../stores/apiStore";

const apiStore = useApiStore();
const router = useRouter();

onMounted(() => {
  apiStore.getArticles();
});
</script>
