<script lang="ts">
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
import GhostService from "@/services/ghost";

export default defineComponent({
  name: "AboutMe",
  components: {
    Spinner,
  },
  async setup() {
    useSeoMeta({
      title: "About Me",
      description:
        "I am a Senior Software Developer based in Bogota, Colombia. I am currently working at 9North as a Senior Frontend Developer. Also at my free time slaying some bugs and adding new features to M-35 as Main Video Game Developer.",
    });

    defineOgImageScreenshot();

    const { data: page } = await useAsyncData(async () => {
      return await GhostService.getPage("about");
    });

    return {
      page,
    };
  },
  computed: {
    pageLoading(): boolean {
      return this.page === null;
    },
    postLogo(): string {
      const metaTagRegex = /<meta\s+[^>]*property=["']pj:post-logo["'][^>]*>/i;
      const metaTag = this.page?.html?.match(metaTagRegex);
      if (metaTag) {
        const contentRegex = /content=["']([^"']+)["']/i;
        const content = metaTag[0].match(contentRegex);
        if (content) {
          return content[1];
        }
      }
      return "";
    },
  },
});
</script>

<template>
  <Spinner :is-loading="pageLoading">
    <div class="page-banner">
      <img
        v-if="page?.feature_image"
        :src="page?.feature_image"
        alt="About Me"
      />
    </div>
    <div class="page-header">
      <img class="page-logo" :src="postLogo" alt="About Me" />
      <h1 class="page-title">{{ page?.title }}</h1>
    </div>
    <div class="page-content" v-if="page" v-html="page.html" />
  </Spinner>
</template>

<style>
.page-content {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
}
img.page-logo {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: fill;
  margin-top: -120px;
}
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}
.page-banner img {
  display: block;
  object-fit: cover;
  min-height: 30vh;
  max-height: 500px;
  width: 100%;
  height: 50vh;
  object-position: center 32.04%;
}
</style>
