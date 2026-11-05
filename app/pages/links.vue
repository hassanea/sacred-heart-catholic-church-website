<template>
  <div>
    <h1>Online Resources & Catholicism Online:</h1>

    <table class="border border-separate table-auto border-gray-600">
      <thead class="text-center" v-if="keys.length > 0">
        <tr v-for="key in keys">
          <th class="border-separate border-gray-600">{{ key }}</th>
        </tr>
      </thead>
      <template v-if="onlineResources.length > 0">
        <tr v-for="onlineResource in onlineResources" :key="onlineResource.id">
          <td class="border border-gray-600">
            {{ onlineResource.name }}
            <ul>
              <li
                v-for="category in onlineResource.categories.split(', ')"
                :key="category.toLowerCase()"
              >
                {{ category }}
              </li>
            </ul>
          </td>
          <td class="border border-gray-600">
            <nuxt-link :to="onlineResource.url" target="_blank">{{
              onlineResource.name
            }}</nuxt-link>
          </td>
        </tr>
      </template>
    </table>

    <table class="border border-separate table-auto border-gray-600">
      <thead class="text-center" v-if="keys.length > 0">
        <tr v-for="key in keys">
          <th class="border-separate border-gray-600">{{ key }}</th>
        </tr>
      </thead>
      <template v-if="catholicismResources.length > 0">
        <tr
          v-for="catholicismResource in catholicismResources"
          :key="catholicismResource.id"
        >
          <td class="border border-gray-600">
            <nuxt-link :to="catholicismResource.url" target="_blank">{{
              catholicismResource.name
            }}</nuxt-link>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseStore } from "../../stores/useSupabaseStore";

const supabaseStore = useSupabaseStore();

const { onlineResources, catholicismResources, keys } =
  storeToRefs(supabaseStore);
</script>

<style></style>
