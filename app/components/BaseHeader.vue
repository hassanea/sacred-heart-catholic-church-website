<template>
  <header class="w-full h-auto">
    <base-nav-bar
      @handle-toggle="handleNavBarToggle"
      @handle-close="handleNavBarClose"
      :toggle
      label="Main navigation"
      logo="/heart-n-hands.svg"
      :navItems="links"
    >
    </base-nav-bar>
    <div
      class="w-screen h-[60vh] flex flex-col justify-center items-center bg-secondary text-light text-center"
    >
      <base-logo class="inline-block align-middle mb-6"></base-logo>
      <h1
        class="text-[1.4rem] md:text-4xl lg:text-4-5xl xl:text-5xl font-cursive mt-6 md:mt-7 lg:mt-8 xl:mt-10 mb-0 ml-0 mr-0 leading-normal md:leading-relaxed not-italic font-black tracking-normal md:tracking-wide line-clamp-2"
      >
        <template v-if="typeof heading === 'object'">
          <span
            v-for="item in heading"
            :key="item.toLowerCase()"
            class="block"
            >{{ item }}</span
          >
        </template>
        <template v-else> {{ heading }} </template>
      </h1>
    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  heading: {
    type: [String, Array],
    required: false,
    default: "My Heading",
  },
  links: {
    type: Array,
    required: true,
  },
});

const toggle = ref(false);

const handleNavBarToggle = () => {
  toggle.value = !toggle.value;
};

const handleNavBarClose = () => {
  toggle.value = false;
};
</script>

<style></style>
