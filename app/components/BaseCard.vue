<template>
  <a v-if="node === 'a'" :class="cardClasses">
    <slot />
  </a>
  <article v-else-if="node === 'article'" :class="cardClasses">
    <slot />
  </article>
  <blockquote v-else-if="node === 'blockquote'" :class="cardClasses">
    <slot />
  </blockquote>
  <div v-else-if="node === 'div'" :class="cardClasses"><slot /></div>
  <nuxt-link v-else-if="node === 'nuxt-link'" :class="cardClasses">
    <slot />
  </nuxt-link>
  <p v-else-if="node === 'p'" :class="cardClasses"><slot /></p>
  <q v-else-if="node === 'q'" :class="cardClasses"> <slot /> </q>
  <base-section v-else :class="cardClasses"> <slot /> </base-section>
</template>

<script lang="ts" setup>
const props = defineProps({
  node: {
    type: String,
    required: true,
    default: "div",
    validator(value: string) {
      return [
        "a",
        "article",
        "blockquote",
        "div",
        "nuxt-link",
        "p",
        "q",
        "section",
      ].includes(value);
    },
  },
  variant: {
    type: String,
    required: false,
    default: "card-fop",
    validator(value: string) {
      return ["card-fop"].includes(value);
    },
  },
});
const cardClasses = computed(() => {
  return {
    "bg-[#b5d6d6] text-dark text-pretty text-center font-sans not-italic font-medium text-base md:text-lg leading-normal md:leading-relaxed p-6 md:p-8 rounded-2xl mt-3.5 drop-shadow overflow-hidden md:overflow-auto indent-0 md:indent-2.5 flex flex-col justify-center items-center":
      props.variant === "card-fop",
  };
});
</script>

<style lang="css" scoped></style>
