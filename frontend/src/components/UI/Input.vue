<template>
  <input
    :placeholder="props.placeholder"
    :type="type"
    :value="value"
    @input="updateValue"
    class="w-[300px] h-[50px] rounded-[16px] placeholder:text-placeholder text-white font-montserrat text-[18px] bg-navi-form focus:outline-none px-[10px]"
  />
</template>

<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
  placeholder: String,
  type: {
    String,
    default: "text",
  },
  value: {
    String,
    default: "",
  },
});

const updateValue = (e) => {
  emit("update:value", e.target.value);
};
</script>
