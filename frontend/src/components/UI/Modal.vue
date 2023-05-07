<template>
  <Teleport to="#app">
    <Transition name="fade">
      <div
        v-if="appStore.showModal"
        @click="close"
        class="fixed top-0 left-0 right-0 bottom-0 z-[50] bg-modal-bg flex justify-center items-center"
      >
        <Transition name="pop" appear>
          <div
            @click.stop
            class="w-[500px] min-h-[50px] text-black bg-navi-form rounded-[16px]"
          >
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useApiStore } from "../../stores/apiStore";
import { useAppStore } from "../../stores/appStore";

const appStore = useAppStore();
const apiStore = useApiStore();

const close = () => {
  appStore.showModal = false;
  appStore.showModalComment = false;
  appStore.showModalArticle = false;
  apiStore.getCommentsArticle();
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.pop-enter-from,
.pop-leave-to {
  @apply opacity-0 scale-150;
}
.pop-enter-active,
.pop-leave-active {
  @apply transition-all duration-300;
}
</style>
