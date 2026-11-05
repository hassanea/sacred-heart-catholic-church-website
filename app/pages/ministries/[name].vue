<template>
  <div>
    <h1>{{ ministry }}</h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  ministry: {
    type: Object,
    required: false,
    default: () => {
      return {};
    },
  },
});
</script>

<style></style>
