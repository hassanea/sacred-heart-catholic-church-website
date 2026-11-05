<template>
  <div>
    <nuxt-link
      :to="to"
      :label="label"
      :title="label"
      class="absolute top-auto -left-2500 w-px h-px z-100 rounded-[5px] bg-senary text-light text-base font-bold leading-normal overflow-hidden hover:underline hover:cursor-pointer hover:bg-light hover:text-senary active:border-t-0 active:border-l-0 active:border-r-0 active:border-b-tertiary active:border-b-solid active:border-b-4 focus:outline-0 focus:static focus:w-auto focus:h-auto focus:border-[3px] focus:border-solid focus:border-gold motion-reduce:transition-none motion-reduce:duration-0"
    >
      {{ label }}
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "BaseSkipLink",
});

const props = defineProps({
  to: {
    type: String,
    required: true,
    validator(value: String) {
      return value.startsWith("#");
    },
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
