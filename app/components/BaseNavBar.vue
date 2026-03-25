<template>
  <nav
    class="w-full md:p-2.5 p-6 bg-primary/95 text-dark flex flex-col md:flex-row flex-wrap justify-center lg:justify-start items-center fixed shadow-2xl font-sans leading-normal text-lg font-bold z-2000 lg:py-[.6rem] lg:px-0 align-middle inset-0 border-t-2 border-solid border-t-dark"
    @keydown.esc="closeMobileNavigation"
    :aria-label="label"
    :class="navbarClasses"
  >
    <base-button
      v-if="showMobileMenu"
      @click="toggleMobileNavigation"
      @keydown.enter="toggleMobileNavigation"
      variant="btn-mobile-nav"
      label="Mobile Navigation button"
      title="Mobile menu button"
      :aria-expanded="setExpanded"
      :aria-controls="navId"
    >
      <template #icon>
        <font-awesome :icon="setMobileIcon" size="lg" />
      </template>
    </base-button>
    <base-list
      type="ul"
      variant="nav-list"
      :id="navId"
      :class="navbarNavClasses"
    >
      <base-list-item variant="nav-item-logo">
        <nuxt-link
          to="/"
          class="inline-block mx-auto px-1 md:px-2 py-0.5 md:py-1.25 align-middle text-xl whitespace-nowrap no-underline md:mr-4"
        >
          <nuxt-img
            provider="imagekit"
            :src="logo"
            alt="Heart in hands"
            width="130"
            height="32"
            class="my-0 mx-auto lg:mx-0 block w-[8.13rem] h-auto"
          />
        </nuxt-link>
      </base-list-item>
      <base-list-item
        variant="nav-item"
        v-for="navItem in navItems"
        :key="navItem.name.toLowerCase()"
      >
        <nuxt-link
          v-if="navItem.to === '/'"
          :to="navItem.to"
          @click.prevent="handleScrollToTop"
          class="mx-2 md:mx-3 hover:text-dark/70 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-secondary transition-colors nav-link focus:outline-0 focus:border-t-2 focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-secondary"
          >{{ navItem.name }}</nuxt-link
        >
        <nuxt-link
          v-else
          :to="navItem.to"
          class="mx-2 md:mx-3 hover:text-dark/70 transition-colors hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-secondary nav-link focus:outline-0 focus:border-t-2 focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-secondary"
          >{{ navItem.name }}</nuxt-link
        >
      </base-list-item>
    </base-list>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  toggle: {
    type: Boolean,
    required: false,
  },
  navItems: {
    type: Array,
    required: false,
  },
  logo: {
    type: String,
    required: false,
    default: "placeholder.jpg",
  },
  label: {
    type: String,
    required: false,
    default: "Navigation",
  },
});

const emit = defineEmits(["handle-toggle", "handle-close"]);

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const showMobileMenu = useMediaQuery("(max-width: 767px)");
const navId = useId();

const toggleMobileNavigation = () => {
  emit("handle-toggle");
};

const closeMobileNavigation = () => {
  emit("handle-close");
};

const navbarClasses = computed(() => {
  return {
    "h-100": props.toggle && showMobileMenu,
    "h-25":
      (!props.toggle && showMobileMenu) || (!props.toggle && !showMobileMenu),
  };
});
const navbarNavClasses = computed(() => {
  return {
    "absolute translate-0": props.toggle,
    "absolute -translate-2499.75": !props.toggle,
  };
});

const setMobileIcon = computed(() => {
  return props.toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

const setExpanded = computed(() => {
  return props.toggle ? true : false;
});
</script>

<style lang="css" scoped>
.navbar-transition {
  transition-timing-function: cubic-bezier(1, 2.01, 0.18, -0.91);
}

.nav-link:active {
  box-shadow: 5px 5px 5px 5px #f7f7f7;
}

/* .router-link-active {
  background-color: #1e2939;
  color: oklch(87.9% 0.169 91.605);
  padding: 0.625rem;
  border-radius: 5px;
} */

/* .router-link-exact-active {
  background-color: #1e2939;
  color: oklch(87.9% 0.169 91.605);
  padding: 0.625rem;
  border-radius: 5px;
} */
</style>
