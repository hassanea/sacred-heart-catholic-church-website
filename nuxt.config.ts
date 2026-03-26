// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/a11y",
    // '@nuxt/content',
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxthub/core",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/supabase",
    "@nuxtjs/turnstile",
    // "@pinia/nuxt",
    "@vesp/nuxt-fontawesome",
    "@vueuse/nuxt",
    "@sentry/nuxt/module",
  ],
  devServer: {
    host: "0.0.0.0",
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/pro-regular-svg-icons",
        "@fortawesome/pro-solid-svg-icons",
      ],
    },
  },
  css: ["./app/assets/css/main.css"],
  hub: {},
  runtimeConfig: {
    public: {},
  },
  site: {
    url: "https://prod.esacredheart.org",
    name: "Sacred Heart Catholic Church - Auburn Hills, MI | Welcome",
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  supabase: {
    redirect: false,
  },
  turnstile: {
    siteKey: "0x4AAAAAAACHtX2rkoWExE1Z",
    addValidateEndpoint: true,
  },
  fontawesome: {
    proIcons: {
      solid: ["DoNotEnter"],
      regular: ["FaceThinking"],
    },
    icons: {
      solid: ["Bars", "Bomb", "BookOpen", "Calendar", "Church", "Xmark"],
    },
  },

  // scripts: {
  //   registry: {
  //     googleAnalytics: {
  //       id: "G-S1KMV7ZRS7",
  //     },
  //     clarity: {
  //       id: "vxrcwqbtcq",
  //     },
  //   },
  // },

  image: {
    imagekit: {
      baseURL: "https://images.esacredheart.org",
    },
    format: ["avif", "webp"],
    quality: 80,
    densities: [1, 2, 3],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
        dir: "ltr",
      },
      title:
        "Sacred Heart Catholic Church - Auburn Hills, MI | Archdiocesan Restructuring",
      meta: [
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        { name: "author", content: "Evan H." },
        { name: "theme-color", content: "#405A68" },
        { name: "format-detection", content: "telephone=no" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#405A68" },
        { name: "msapplication-Config", content: "browserconfig.xml" },
        { name: "msapplication-TileColor", content: "#405A68" },
        {
          name: "msapplication-TileImage",
          content: "https://images.esacredheart.org/icons/ms-icon-144x144.png",
        },
      ],
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap",
          rel: "preload",
          as: "style",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "preload",
          as: "style",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet",
        },
        { href: "https://s3.amazonaws.com", rel: "dns-prefetch" },
        { href: "https://www.googletagmanager.com", rel: "dns-prefetch" },
        { href: "https://cdn.esacredheart.org", rel: "preconnect" },
        { href: "https://images.esacredheart.org", rel: "preconnect" },
        { href: "https://restructuring.esacredheart.org", rel: "canonical" },
        {
          href: "https://cdn.esacredheart.org/sacred-heart.ico",
          rel: "shortcut icon",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-iphone-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-ipad-76x76.png",
          sizes: "60x60",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-iphone-retina-120x120.png",
          sizes: "114x114",
        },
        {
          rel: "apple-touch-icon",
          href: "https://images.esacredheart.org/icons/apple-touch-icon-ipad-retina-152x152.png",
          sizes: "144x144",
        },
        {
          rel: "icon",
          href: "https://images.esacredheart.org/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "dns-prefetch",
          href: "https://www.clarity.ms/",
        },
        {
          rel: "dns-prefetch",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "dns-prefetch",
          href: "https://fonts.gstatic.com",
        },
      ],
    },
  },
  sentry: {
    org: "ev-corp",
    project: "sacred-heart",
  },

  sourcemap: {
    client: "hidden",
  },
});
