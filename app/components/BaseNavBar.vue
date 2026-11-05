<template>
  <nav
    class="w-full md:p-2.5 p-6 bg-primary/95 text-dark flex flex-col md:flex-row flex-wrap justify-center lg:justify-start items-center fixed shadow-2xl font-sans leading-normal text-base md:text-lg font-bold z-2000 lg:py-[.6rem] lg:px-0 align-middle inset-0 border-t-2 border-solid border-t-dark"
    @keydown.esc="closeMobileNavigation"
    :aria-label="label"
    :class="navbarClasses"
  >
    <lazy-base-button
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
    </lazy-base-button>
    <base-list
      type="ul"
      variant="nav-list"
      :id="navId"
      :class="navbarNavClasses"
    >
      <base-list-item variant="nav-item-logo">
        <nuxt-link
          @click.prevent="handleScrollToTop"
          @keydown.enter="handleScrollToTop"
          to="/"
          class="inline-block mx-auto px-1 md:px-2 py-0.5 md:py-1.25 align-middle text-xl whitespace-nowrap no-underline md:mr-4"
        >
          <nuxt-img
            provider="imagekit"
            :src="logo"
            alt="Heart in hands"
            width="130"
            height="32"
            class="my-0 mx-auto lg:mx-0 block w-30 h-auto"
          />
        </nuxt-link>
      </base-list-item>

      <!-- <V-Menu>
        <button>Documentation</button>
        <template #popper>
          <button>Guide</button>
          <button>API Reference</button>
          <button>Examples</button>
        </template>
      </V-Menu> -->
      <base-list-item
        v-for="navItem in navItems"
        :key="navItem.name.toLowerCase()"
        variant="nav-item"
      >
        <nuxt-link
          v-if="navItem.to === '/'"
          :to="navItem.to"
          data-scroll
          class="mx-2 md:mx-3 hover:text-dark/70 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-secondary transition-colors nav-link focus:outline-0 focus:border-t-2 focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-secondary"
          >{{ navItem.name }}</nuxt-link
        >

        <nuxt-link
          v-else-if="navItem.name === 'Join Us'"
          :to="navItem.to"
          target="_blank"
          :aria-label="navItem.label"
          class="mx-2 md:mx-3 inline-block w-30 h-12 font-sans bg-quinary cursor-pointer py-3 px-[0.65rem] rounded-[20px] text-inherit font-bold hover:bg-gradient hover:text-dark/70 transition-colors hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-secondary nav-link focus:outline-0 focus:border-t-2 focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-secondary"
        >
          <span class="mr-1" v-if="navItem.name === 'Join Us'">
            <font-awesome :icon="navItem.icon" />
          </span>
          {{ navItem.name }}</nuxt-link
        >

        <nuxt-link
          v-else-if="!navItem.dropdown"
          :to="navItem.to"
          class="mx-2 md:mx-3 hover:text-dark/70 transition-colors hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-secondary nav-link focus:outline-0 focus:border-t-2 focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-secondary"
        >
          {{ navItem.name }}</nuxt-link
        >

        <template v-if="navItem.dropdown">
          <base-drop-down-menu
            v-if="navItem.name === 'Liturgy & Worship'"
            @handle-toggle="toggleDropDownMenuLW"
            @handle-close="closeDropDownMenuLW"
            node="button"
            :label="navItem.name"
            variant="down"
            :toggle="changeLW"
            :show-label="true"
            :links="navItem.links"
          >
          </base-drop-down-menu>

          <base-drop-down-menu
            v-if="navItem.name === 'News & Events'"
            @handle-toggle="toggleDropDownMenuNE"
            @handle-close="closeDropDownMenuNE"
            node="button"
            :label="navItem.name"
            variant="down"
            :toggle="changeNE"
            :show-label="true"
            :links="navItem.links"
          >
          </base-drop-down-menu>

          <base-drop-down-menu
            v-if="navItem.name === 'Donate'"
            @handle-toggle="toggleDropDownMenuDonate"
            @handle-close="closeDropDownMenuDonate"
            node="button"
            :label="navItem.name"
            variant="down"
            :toggle="changeDonate"
            :show-label="true"
            :links="navItem.links"
          >
          </base-drop-down-menu>

          <base-drop-down-menu
            v-if="navItem.name === 'Login'"
            @handle-toggle="toggleDropDownMenuLogin"
            @handle-close="closeDropDownMenuLogin"
            node="button"
            :label="navItem.name"
            variant="down"
            :toggle="changeLogin"
            :show-label="false"
            :links="navItem.links"
          >
            <template #icon>
              <font-awesome :icon="navItem.icon" size="2xl" />
            </template>
          </base-drop-down-menu>
        </template>
      </base-list-item>
    </base-list>
  </nav>
</template>

<script lang="ts" setup>
import { useScrollTop } from "#imports";

const { handleScrollToTop } = useScrollTop();

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

const changeLW = ref(false);

const changeNE = ref(false);

const changeDonate = ref(false);

const changeAbout = ref(false);

const changeLogin = ref(false);

const toggleDropDownMenuLW = () => {
  changeLW.value = !changeLW.value;
};

const closeDropDownMenuLW = () => {
  changeLW.value = false;
};
const toggleDropDownMenuNE = () => {
  changeNE.value = !changeNE.value;
};

const closeDropDownMenuNE = () => {
  changeNE.value = false;
};

const toggleDropDownMenuDonate = () => {
  changeDonate.value = !changeDonate.value;
};

const closeDropDownMenuDonate = () => {
  changeDonate.value = false;
};

const toggleDropDownMenuAbout = () => {
  changeAbout.value = !changeAbout.value;
};

const closeDropDownMenuAbout = () => {
  changeAbout.value = false;
};

const toggleDropDownMenuLogin = () => {
  changeLogin.value = !changeLogin.value;
};

const closeDropDownMenuLogin = () => {
  changeLogin.value = false;
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
    "h-full": props.toggle && showMobileMenu,
    "h-30 md:h-40 lg:h-40 xl:h-30":
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
