<script setup lang="ts">
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("Juan-Camilo-Casta-eda-Mendez-49d4eb00912e47b484216fe184a5e179"));

console.log(data);

useSeoMeta({
  title: 'About Me',
  description: "I am a Senior Software Developer based in Bogota, Colombia. I am currently working at 9North as a Senior Frontend Developer. Also at my free time slaying some bugs and adding new features to M-35 as Main Video Game Developer.",
})
defineOgImageScreenshot();
</script>

<template>
  <div>
    <NotionRenderer :blockMap="data" fullPage prism katex />
  </div>
</template>
