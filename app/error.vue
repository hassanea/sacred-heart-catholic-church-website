<template>
  <div class="text-dark dark:bg-gray-400 bg-gray-200">
    <nuxt-layout name="error-layout">
      <base-section
        class="border-dark bg-[#e6e8fa] mx-auto h-auto w-full max-w-125 rounded-lg border-[3px] border-solid p-8 text-center shadow-2xl"
      >
        <template #default>
          <div class="flex flex-col items-center justify-center">
            <lazy-font-awesome
              v-if="error?.status === 500"
              class="text-dark rounded inline-block align-middle md:text-4xl text-3xl"
              icon="fa-solid fa-bomb"
            />
            <lazy-font-awesome
              v-else
              class="text-dark rounded inline-block align-middle md:text-4xl text-3xl"
              icon="fa-solid fa-do-not-enter"
            />
            <h1
              class="md:text-6xl text-5xl text-dark leading-normal font-bold tracking-wide my-5 md:my-6"
            >
              {{ error?.status }}
            </h1>
            <p
              class="text-dark text-lg md:text-xl font-sans2 font-medium leading-normal mb-4 italic"
            >
              {{ error?.message }}
            </p>
            <base-button
              variant="btn-primary"
              label="Clear Error and Redirect to Home"
              @click="handleClearErrorNavigateToHome"
              @keydown.enter="handleClearErrorNavigateToHome"
              v-tooltip.bottom="'Go to Home'"
            >
              Go To Home
            </base-button>
          </div>
        </template>
      </base-section>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import type { NuxtError } from "#app";
import BaseSection from "@/components/BaseSection.vue";
import BaseButton from "@/components/BaseButton.vue";

const props = defineProps({
  error: Object as () => NuxtError,
});

definePageMeta({
  layout: "error-layout",
});

const { proxy } = useScriptClarity();

proxy.clarity("Error occurred", `error: ${props.error?.status}`);

const handleClearErrorNavigateToHome = () => {
  clearError({ redirect: "/" });
};

onMounted(() => {
  useHead({
    title: `${props.error?.status} Error`,
  });
});
</script>

<style lang="css" scoped></style>
