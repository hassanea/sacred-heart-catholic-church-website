<template>
  <div>
    <h1>Ministries:</h1>
    <ul>
      <li v-for="ministry in ministries">
        <nuxt-link :to="`/ministries/${toKebabCase(ministry.name)}`">{{
          ministry.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseStore } from "../../../stores/useSupabaseStore";

import { toKebabCase } from "~/utils";

const supabaseStore = useSupabaseStore();

const { ministries } = storeToRefs(supabaseStore);
</script>

<style></style>
