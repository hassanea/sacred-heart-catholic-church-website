<template>
  <li :value="startValue" :class="listItemClasses">
    <slot />
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: "prep",
    validator(value: string) {
      return [
        "nav-item-logo",
        "nav-item",
        "contact",
        "session-emphasized",
        "session-regular",
        "prep",
      ].includes(value);
    },
  },
  startValue: {
    type: [String, Number],
    required: false,
  },
});

const listItemClasses = computed(() => {
  return {
    "text-center list-none max-w-70 md:max-w-115 lg:max-w-120 xl:max-w-130 2xl:max-w-150 min-h-70 max-h-180":
      props.variant === "prep",
    "list-disc font-medium font-sans text-base lg:text-lg text-left leading-normal not-italic text-pretty marker:text-quartinary":
      props.variant === "session-regular",
    "list-disc font-bold font-sans text-base lg:text-lg text-left leading-normal not-italic marker:text-quartinary":
      props.variant === "session-emphasized",
    "list-disc font-sans font-semibold my-2 marker:text-secondary":
      props.variant === "contact",
    "list-none align-middle": props.variant === "nav-item-logo",
    "list-none align-middle my-4 md:my-0": props.variant === "nav-item",
  };
});
</script>

<style lang="css" scoped></style>
