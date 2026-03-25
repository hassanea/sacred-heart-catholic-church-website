<template>
  <div class="bg-[#b5d6d6]">
    <base-skip-link v-focus to="#content" label="Skip to main content" />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtAnnouncer />
    <Nuxt-Layout>
      <Nuxt-Page />
    </Nuxt-Layout>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped></style>
