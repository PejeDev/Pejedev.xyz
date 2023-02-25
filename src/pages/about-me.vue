<script setup lang="ts">
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("Juan-Camilo-Casta-eda-Mendez-49d4eb00912e47b484216fe184a5e179"));
</script>

<template>
  <div>
    <NotionRenderer :blockMap="data" fullPage prism katex />
  </div>
</template>
