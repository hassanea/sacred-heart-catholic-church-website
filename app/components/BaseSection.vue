<template>
  <section :id class="w-full h-auto">
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineOptions({
  name: "BaseSection",
});

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
});
const { id } = props;
</script>
