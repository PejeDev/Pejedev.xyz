<script setup lang="ts">
import Spinner from "../components/spinner.vue";
const { $notion } = useNuxtApp();

let pageData = ref({});
let pageLoading = ref(true);

onBeforeMount(async () => {
  pageData.value = await $notion.getPageBlocks(
    "Juan-Camilo-Casta-eda-Mendez-49d4eb00912e47b484216fe184a5e179"
  );
  pageLoading.value = false;
});

useSeoMeta({
  title: "About Me",
  description:
    "I am a Senior Software Developer based in Bogota, Colombia. I am currently working at 9North as a Senior Frontend Developer. Also at my free time slaying some bugs and adding new features to M-35 as Main Video Game Developer.",
});
defineOgImageScreenshot();
</script>

<template>
  <Spinner :is-loading="pageLoading">
    <NotionRenderer :blockMap="pageData" fullPage prism katex />
  </Spinner>
</template>
