// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-24',
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "VentChats",
      link: [{ rel: "icon", type: "image/svg-xml", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt"],

  // Fonts
  googleFonts: {
    families: {
      "Rethink Sans": true,
    },
  },

  plugins: [  
    '~/plugins/veaury.client.ts'  
  ] 
})
