<template>
  <div class="w-full h-auto flex flex-col justify-center items-center">
    <base-button
      type="button"
      v-if="node === 'button'"
      variant="btn-primary"
      :label="btnLabel"
      :aria-expanded="isDisclosureExpanded"
      :aria-controls="descId"
      @click="handleToggle"
      @keydown.enter="handleToggle"
    >
      <template #default> </template>
    </base-button>
    <nuxt-link
      to="/"
      v-else-if="node === 'nuxt-link'"
      role="button"
      :aria-expanded="isDisclosureExpanded"
      :aria-controls="descId"
      @click.prevent="handleToggle"
      @keydown.enter="handleToggle"
      :aria-label="btnLabel"
      >{{ btnLabel }}</nuxt-link
    >
    <a
      href="/"
      v-else
      role="button"
      :aria-expanded="isDisclosureExpanded"
      :aria-controls="descId"
      @click.prevent="handleToggle"
      @keydown.enter="handleToggle"
      :aria-label="btnLabel"
    >
      {{ btnLabel }}
    </a>
    <base-card v-if="show" :id="descId" variant="card-prep">
      <slot></slot>
    </base-card>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  node: {
    type: String,
    required: false,
    default: "button",
    validator(value: string) {
      return ["button", "nuxt-link", "a"].includes(value);
    },
  },
  btnLabel: {
    type: String,
    required: false,
  },
  show: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["handle-show"]);

const handleToggle = () => {
  emit("handle-show");
};

const descId = useId();

const isDisclosureExpanded = computed(() => {
  return props.show ? true : false;
});
</script>

<style lang="css" scoped>
.drop-shadow {
  filter: drop-shadow(0px 10px 8px rgba(55, 65, 81, 0.25));
}
</style>
