export default defineNuxtConfig({
  srcDir: "src/",
  css: ["~/css/global.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: [
    ["vue3-notion/nuxt", { css: true }], // css is not imported by default. Set `true` to import css
  ],
});
