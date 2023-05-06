<template>
  <TransitionGroup
    name="notification"
    tag="div"
    class="fixed top-[60px] right-[10px] text-white font-montserrat z-[99]"
  >
    <div
      class="w-[200px] flex justify-between items-center bg-navi-form p-[10px] border-b border-gray-line"
      v-for="message in appStore.notification"
      :key="message.id"
    >
      {{ message.title }}
      <NotificationStatus :status="message.type" />
    </div>
  </TransitionGroup>
</template>

<script setup>
import { watch } from "vue";
import { useAppStore } from "../../stores/appStore";
import NotificationStatus from "./NotificationStatus.vue";

const appStore = useAppStore();

watch(appStore.notification, () => {
  appStore.notificationRemove();
});
</script>

<style>
.notification-move,
.notification-enter-active,
.notification-leave-active {
  @apply transition-all duration-500 ease-in-out;
}

.notification-enter-from,
.notification-leave-to {
  @apply opacity-0 translate-x-[30px];
}

.list-leave-active {
  @apply absolute;
}
</style>
