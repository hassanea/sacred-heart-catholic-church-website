<template>
  <div>
    <header>
      <h1
        class="font-cursive not-italic text-4-5xl leading-normal font-black tracking-wider uppercase"
      >
        Sacred Heart
      </h1>
    </header>
    <base-main>
      <base-section
        class="bg-alternative w-full h-auto p-8 my-20 min-w-70 max-w-120 mx-auto rounded-2xl"
      >
        <slot />
      </base-section>
    </base-main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
