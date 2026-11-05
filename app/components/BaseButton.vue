<template>
  <button
    :type="type"
    :aria-label="label"
    :class="buttonClasses"
    class="box-shadow"
  >
    <span
      v-if="$slots.icon"
      :class="{ 'inline-block align-middle mr-2': $slots.default }"
    >
      <slot name="icon" />
    </span>
    <slot class="inline-block align-middle" v-if="$slots.default">
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton",
});
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "button",
    validator(value) {
      return ["button", "submit", "reset"].includes(value);
    },
  },
  variant: {
    type: String,
    required: false,
    default: "btn-primary",
  },
  label: {
    type: String,
    required: true,
  },
});

const { type, variant, label } = props;

const buttonClasses = computed(() => {
  return {
    "inline-block bg-tertiary text-light not-italic leading-normal tracking-wide hover:bg-light hover:text-tertiary hover:border-2 hover:border-solid hover:border-tertiary focus:outline-0 focus:border-4 focus:border-solid focus:border-gold rounded-lg p-4 font-semibold cursor-pointer text-lg md:text-xl transition-shadow":
      variant === "btn-primary",
    "inline-block absolute top-[13%] right-[1%] z-[1026] align-middle w-12 h-12 my-4 mx-0 p-2 bg-quartinary text-light border-2 border-solid border-heart-red rounded-[10px] cursor-pointer hover:bg-light hover:text-quartinary btn-mobile-nav":
      variant === "btn-mobile-nav",
    "text-center fixed right-[.5%] bottom-[11%] md:right-[1%] md:bottom-[11.75%] z-1000 bg-primary-dark w-12 h-12 flex rounded-md cursor-pointer pt-0.5 px-0 pb-0 text-3-5xl justify-center items-center hover:bg-quinary focus:border-t-0 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-b-solid focus:border-b-gold focus:outline-0":
      variant === "btn-top",

    /*
        right: .5%;
    bottom: 11%
      
      .btn-top {
    position: fixed;
    right: 1%;
    bottom: 11.75%;
    z-index: 1000;
    background: var(--dark-primary-color);
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 6px;
    padding: 2px 0 0;
    font-size: 2rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.btn-top:hover {
    background: var(--secondary-color);
    -webkit-transition: .4s cubic-bezier(.08,  .92,  .84,  .01);
    -o-transition: .4s cubic-bezier(.08,  .92,  .84,  .01);
    transition: .4s cubic-bezier(.08,  .92,  .84,  .01);
}
.btn-top:active {
    -webkit-box-shadow: 2px 3px 2px #aaa;
    box-shadow: 2px 3px 2px #aaa;
}
      
      */
  };
});

/* 
    btn: variant === "btn",
    "btn more": variant === "btn-more",
    "btn no-mg": variant === "btn-no-mg",
    "btn media": variant === "btn-media",
    "btn-cta": variant === "btn-cta",
    "btn-close": variant === "btn-close",
    "btn btn-back": variant === "btn-back",
    "btn-lightbox": variant === "btn-lightbox",
    "btn-toolbar": variant === "btn-toolbar",
*/
</script>

<style lang="css" scoped>
.btn-mobile-nav {
  transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.btn-mobile-nav:active {
  box-shadow: 4px 4px 6px #c2262b;
}

.btn-mobile-nav:focus {
  outline: 0;
  border: 3px solid #f7f7f7;
}
</style>

<style lang="css">
.box-shadow:active {
  box-shadow: 0 0 5px 5px #2c3e4c;
}
</style>
