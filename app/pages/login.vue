<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <nuxt-img
      provider="imagekit"
      src="/sacred-heart-icon.svg"
      alt=""
      width="200"
      height="200"
      class="inline-block align-middle filter-heart-red w-40 h-40 rounded-[9999px] mb-10"
    />
    <form @submit.prevent="handleLogin">
      <div class="flex flex-col justify-center items-center gap-5">
        <label class="sr-only" :for="emailId"> E-Mail: </label>
        <input
          type="email"
          :id="emailId"
          v-model="user.email"
          v-focus
          placeholder="Username"
          aria-label="E-Mail Address"
          autocomplete="true"
          class="w-full h-12 p-3 pointer-events-auto caret-secondary bg-quinary text-dark border-none rounded-xl font-medium hover:font-bold focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:outline-0 focus:border-b-solid border-b-[3px] focus:border-b-tertiary"
        />
        <label class="sr-only" :for="passwordId"> Password: </label>
        <input
          type="password"
          :id="passwordId"
          v-model="user.passwd"
          ref="passwdEl"
          placeholder="Password"
          aria-label="Password"
          autocomplete="true"
          class="relative w-full h-12 p-3 pointer-events-auto caret-secondary bg-quinary text-dark border-none rounded-xl font-medium hover:font-bold focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:outline-0 focus:border-b-solid border-b-[3px] focus:border-b-tertiary"
        />
        <base-button
          @click="handleHideShowPasswordField"
          @keydown.enter="handleHideShowPasswordField"
          type="button"
          variant="btn-primary"
          label="Submit"
          class="w-16 h-16 absolute top-[42.75%] left-[56%] bg-transparent text-dark rounded-full"
        >
          <template #icon>
            <font-awesome :icon="passwordHideShowBtnIcon" />
          </template>
        </base-button>
      </div>
      <div class="flex flex-col flex-nowrap justify-center items-center gap-4">
        <base-button type="submit" variant="btn-primary" label="Login">
          <template #default></template>
        </base-button>
        <nuxt-link to="/reset-password">
          <span class="mr-1"> <font-awesome icon="fa-solid fa-lock" /> </span>
          Forgot password?
        </nuxt-link>
        <nuxt-link to="/create-account">
          <span class="mr-1">
            <font-awesome icon="fa-solid fa-user-plus" />
          </span>
          Create Account
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "login-layout" });

useHead({
  bodyAttrs: { class: "" },
});

const user = ref({
  email: "",
  passwd: "",
});

// const isLoading = ref(false);
// const error = ref({ hasError: false, error: "" });

const showPassword = ref(false);

const passwdEl = ref(null);
const emailId = useId();
const passwordId = useId();

const handleLogin = () => {
  console.log("Logging in!!!");
};

const handleHideShowPasswordField = () => {
  showPassword.value = !showPassword.value;
  return showPassword.value
    ? (passwdEl.value.type = "text")
    : (passwdEl.value.type = "password");
};

const passwordHideShowBtnIcon = computed(() =>
  showPassword.value ? "fa-solid fa-eye" : "fa-solid fa-eye-slash",
);
</script>

<style lang="css" scoped>
.filter-heart-red {
  filter: invert(21%) sepia(87%) saturate(2678%) hue-rotate(343deg)
    brightness(80%) contrast(93%);
}
</style>
