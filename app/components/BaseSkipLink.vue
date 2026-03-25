<template>
  <div>
    <nuxt-link
      :to="to"
      class="motion-reduce:transition-none motion-reduce:duration-0 hover:underline hover:cursor-pointer hover:bg-dark hover:text-[#de8573] active:underline active:cursor-pointer active:bg-dark active:text-[#de8573] sr-only-focusable sr-only text-dark absolute -left-2500 top-0 z-100 h-px w-px overflow-hidden rounded-[5px] bg-[#de8573] p-2.5 font-black outline-0 focus:border-[3px] focus:border-solid focus:border-light focus:static focus:w-auto focus:h-auto focus:inset-0"
      :label="label"
      :title="label"
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
