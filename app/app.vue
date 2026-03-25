<template>
  <div class="bg-[#b5d6d6]">
    <base-skip-link to="#content" label="Skip to main content" />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtAnnouncer />
    <Nuxt-Layout>
      <Nuxt-Page />
    </Nuxt-Layout>
  </div>
</template>

<script lang="ts" setup>
// v-focus
</script>

<style lang="css" scoped></style>
