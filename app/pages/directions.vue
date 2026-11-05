<template>
  <base-section class="w-full h-auto p-1 my-12.5 mx-auto">
    <div class="grid grid-cols-1">
      <h1 class="text-center">Directions</h1>
      <div class="w-25 h-0.75 max-w-12.5 bg-[#1288a0] mt-1 mx-auto mb-8"></div>
      <div class="grid grid-cols-2">
        <h2 class="heading fst-italic text-start text-capitalize">
          From the North
        </h2>
        <p class="directions">
          I-75 South. Adams exit. Left off exit. Left at intersection (Adams
          Road).Go through South Blvd. intersection, and Sacred Heart will be on
          your left.
        </p>
        <h2 class="heading fst-italic text-start text-capitalize">
          From the South
        </h2>
        <p class="directions">
          I-75 North. Adams exit. Left off exit (go north).Go through South
          Blvd. intersection, and Sacred Heart will be on your left.
        </p>
        <h2 class="heading fst-italic text-start text-capitalize">
          From the East
        </h2>
        <p class="directions">
          M-59 West. Squirrel Road exit. Turn left off exit. Left on Auburn
          Road.Right at intersection (Adams Road). Sacred Heart will be on your
          right.
        </p>
        <h2 class="heading fst-italic text-start text-capitalize">
          From the West
        </h2>
        <p class="directions">
          M-59 East. Squirrel Road exit. Turn right off exit. Left on Auburn
          Road.Right at intersection (Adams Road). Sacred Heart will be on your
          right.
        </p>
      </div>
    </div>
    <div class="container flex justify-center items-center mx-auto">
      <GoogleMap
        :api-key="MapAPIKey"
        style="width: 100%; height: 25rem"
        class="mt-2 mx-2 mb-12"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" @click="isOpen = !isOpen">
          <InfoWindow v-model="isOpen">
            <div id="content">This is an inforwindow content...</div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </div>
  </base-section>
</template>

<script setup lang="ts">
// **Reference: Vue 3 Google Map | https://www.npmjs.com/package/vue3-google-map
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const isOpen = ref(true);
const { MapAPIKey } = useRuntimeConfig().public;
const center = { lat: 42.628698, lng: -83.210256 };
</script>

<style></style>
