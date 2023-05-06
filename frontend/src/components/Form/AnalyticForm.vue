<template>
  <div class="flex flex-col mt-[20px]">
    <div
      class="flex gap-[20px] items-center font-montserrat text-[18px] font-bold text-white"
    >
      <p>От</p>
      <Input :type="'date'" />
      <p>До</p>
      <Input :type="'date'" />
    </div>
    <Button :title="'Отправить'" class="self-end mt-[20px]" />
  </div>
</template>

<script setup>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
</script>
