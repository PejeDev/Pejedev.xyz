export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator PejeDev Blog & Portfolio',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍🎤</text></svg>" }],
    }
  },
  srcDir: "src/",
  css: ["~/css/global.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: [
    ["vue3-notion/nuxt", { css: true }], // css is not imported by default. Set `true` to import css
  ],
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' },
    { src: '~/plugins/fontawesome.ts' },
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://pejedev.xyz',
      siteName: 'PejeDev Blog & Portfolio',
      titleSeparator: '|',
      siteDescription: 'PejeDev is blog about web development, programming, and other stuff.',
      language: 'en',
      indexable: true
    }
  },

});
