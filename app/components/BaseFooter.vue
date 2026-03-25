<template>
  <footer
    class="bg-primary font-sans text-dark w-full h-auto flex flex-row justify-center items-center p-9 md:p-10 lg:p-12 border-t-2 border-solid border-t-dark"
  >
    <p
      v-if="copyRightInfo"
      class="text-[0.875rem] text-pretty text-center md:text-base lg:text-lg xl:text-xl leading-normal font-bold not-italic"
    >
      {{ copyRightInfo }}
    </p>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps({
  year: {
    type: Number,
    required: true,
    validator(value: number) {
      return Number.isInteger(value);
    },
  },
});

const copyRightInfo = computed(() => {
  if (!props.year || props.year <= 0) return "";
  else return `Sacred Heart Catholic Church © Copyright ${props.year}`;
});
</script>

<style></style>
