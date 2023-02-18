export default defineNuxtConfig({
  srcDir: "src/",
  css: ["~/css/global.css"],
  modules: [
    ["vue3-notion/nuxt", { css: true }], // css is not imported by default. Set `true` to import css
  ],
});
