<template>
  <div class="bg-[#b5d6d6]">
    <base-skip-link v-focus to="#content" label="Skip to main content" />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtAnnouncer />
    <Nuxt-Layout>
      <Nuxt-Page />
      <base-button
        @click="handleScrollToTop"
        @keydown.enter="handleScrollToTop"
        class="inline-block"
        type="button"
        variant="btn-top"
        label="Back to top"
        v-tooltip="'Back to top'"
        data-scroll
      >
        <template #icon>
          <font-awesome icon="fa-solid fa-chevron-up" />
        </template>
      </base-button>
    </Nuxt-Layout>
  </div>
</template>

<script lang="ts" setup>
// import { useElementBounding } from "#imports";
import { useWebsiteStore } from "../stores/useWebsiteStore";
import { useSupabaseStore } from "../stores/useSupabaseStore";
import { useScrollTop } from "#imports";

const store = useWebsiteStore();
const supabaseStore = useSupabaseStore();

const { getMinistryData, getOnlineResourceData, getCatholicismOnlineData } =
  supabaseStore;

const { currentDate } = storeToRefs(store);

callOnce("init-state", () => {
  getMinistryData();
  getOnlineResourceData();
  getCatholicismOnlineData();
  currentDate.value = new Date();
});

const { handleScrollToTop } = useScrollTop();

useHead({
  bodyAttrs: {
    class: "pt-22.5",
  },
});

// const buttonEl = useTemplateRef("buttonEl");

// const { x, y } = useElementBounding(buttonEl);

// watch(
//   [x, y],
//   (xValue, yValue) => {
//     console.log(xValue, yValue);
//   },
//   { immediate: true },
// );

// ref="buttonEl"
// :class="{ hidden: x <= 0 && y <= 0 }"

// const handleScrollToTopOfPage = () => {
//   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// };
</script>

<style lang="css" scoped></style>
