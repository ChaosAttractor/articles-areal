<template>
  <input
    v-if="props.type !== 'area'"
    :placeholder="props.placeholder"
    :type="type"
    :value="value"
    @input="updateValue"
    class="w-[300px] h-[50px] rounded-[16px] placeholder:text-placeholder text-white font-montserrat text-[18px] bg-navi-form focus:outline-none px-[10px] transition duration-200 ease-in-out"
  />
  <textarea
    v-else
    class="w-[300px] min-h-[50px] rounded-[16px] placeholder:text-placeholder pt-[10px] text-white font-montserrat text-[18px] bg-navi-form focus:outline-none px-[10px] overflow-y-hidden transition duration-200 ease-in-out"
    :placeholder="props.placeholder"
    :value="value"
    @input="updateValue"
    @focus="resizeTextarea"
    @keyup="resizeTextarea"
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
  name: {
    String,
    default: "",
  },
});

const resizeTextarea = (e) => {
  let area = e.target;
  area.style.height = area.scrollHeight - 10 + "px";
};

const updateValue = (e) => {
  emit("update:value", e.target.value);
};
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  @apply invert text-[24px];
}
</style>
