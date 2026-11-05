<template>
  <client-only>
    <base-section
      id="bulletin"
      class="mg-default my-60"
      aria-labelledby="bulletin-head"
    >
      <h1 class="heading sr-only" id="bulletin-head">Parish Bulletin</h1>
      <div class="w-full h-auto flex flex-row flex-wrap">
        <div class="flex flex-col justify-center items-center flex-1/3">
          <div class="list-group">
            <nuxt-link
              v-for="bulletin in bulletins"
              :key="bulletin.src"
              :to="`https://esacredheart.org/bulletins/${bulletin.src}.pdf`"
              external
              :class="{ active: bulletin.latest }"
              class="list-group-item list-group-item-action"
              :aria-current="bulletin.latest ? true : undefined"
              v-tooltip.left="`${bulletin.latest ? 'Current Bulletin' : ''}`"
              >{{ useLocaleDate(new Date(`${bulletin.src}`)) }}</nuxt-link
            >
          </div>
        </div>
        <div class="flex flex-col justify-center items-center flex-2/3">
          <nuxt-link
            v-if="bulletins[0].latest"
            :to="`https://esacredheart.org/bulletins/${bulletins[0]?.src}.pdf`"
            external
            v-tooltip="'Click to View'"
          >
            <base-ribbon>
              <span class="mr-1">
                <font-awesome icon="fa-solid fa-star" />
              </span>
              New
            </base-ribbon>
            <nuxt-img
              provider="imagekit"
              :src="`/bulletins/${bulletins[0]?.src}.jpg`"
              width="838"
              height="1025"
              class="cover img-thumbnail bulletin-img max-w-full h-auto rounded-md border border-solid border-dark p-1 bg-light"
              :alt="`${useLocaleDate(new Date(`${bulletins[0]?.src}`))} bulletin cover`"
              loading="lazy"
            />
          </nuxt-link>
        </div>
      </div>
    </base-section>
  </client-only>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from "../../stores/useWebsiteStore";
import { useLocaleDate } from "../composables/useLocale";

const store = useWebsiteStore();

const { bulletins } = storeToRefs(store);

const img = useImage();

const preloadImage = img(
  `/bulletins/${bulletins?.value[0].src}.jpg`,
  { format: "avif" },
  { provider: "imagekit" },
);

const currentBulletin = {
  rel: "preload",
  href: preloadImage,
  as: "image",
};

useHead({
  link: [currentBulletin],
});
</script>

<style lang="css" scoped>
@import "../assets/css/main.css";

.list-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:focus,
.list-group-item-action:hover {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  @apply bg-primary text-dark font-black z-2;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}
</style>
