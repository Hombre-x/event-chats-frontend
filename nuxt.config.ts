// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      title: "VentChats",
      link: [{ rel: 'icon', type: 'image/svg-xml', href: '/favicon.svg'}]
    }
  },
  modules: ['@nuxtjs/google-fonts', "@nuxt/image"],

  // Fonts
  googleFonts: {
    families: {
      "Rethink Sans" : true
    }
  }
})