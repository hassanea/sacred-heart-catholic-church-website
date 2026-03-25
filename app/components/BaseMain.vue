<template>
  <main
    id="content"
    class="min-h-screen flex flex-col flex-nowrap focus:outline-0 focus:border-4 border-solid border-[rgb(50, 50, 50)]"
    tabindex="-1"
  >
    <slot />
  </main>
</template>

<script lang="ts" setup>
defineOptions({
  name: "BaseMain",
});
</script>
