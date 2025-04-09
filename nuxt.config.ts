// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // Doc: https://image.nuxtjs.org/
    "@nuxt/image-edge",

    // Doc: https://content.nuxtjs.org/
    "@nuxt/content",

    // Doc: https://vueuse.org/guide/#installation
    "@vueuse/nuxt",

    // Doc: https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",

    // Doc: https://github.com/nuxt-modules/icon
    "nuxt-icon",
  ],

  /**
   * <link rel="preconnect" href="https://fonts.googleapis.com">
   * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
   */
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },

  compatibilityDate: "2025-04-09",
});