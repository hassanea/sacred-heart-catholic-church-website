<template>
  <div
    class="bg-[#b5d6d6] text-dark text-pretty text-center font-sans not-italic font-medium text-base md:text-lg leading-normal md:leading-relaxed p-6 md:p-8 rounded-2xl mt-3.5 drop-shadow overflow-hidden md:overflow-auto indent-0 md:indent-2.5 flex flex-col justify-center items-center"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: "card-prep",
    validator(value: string) {
      return ["card-prep"].includes(value);
    },
  },
});
const cardClasses = computed(() => {
  // max-h-90 text-pretty text-clip max-w-150  md:max-w-120 max-w-3xs md:max-w-75
  return {
    "bg-[#b5d6d6] text-dark text-center font-sans not-italic font-medium text-base md:text-lg leading-relaxed p-8 rounded-2xl mt-3.5 max-w-fit drop-shadow overflow-auto indent-2.5  w-full h-auto flex flex-col justify-center items-center":
      props.variant === "card-prep",
  };
});
//  :class="cardClasses"
</script>

<style lang="css" scoped></style>
