<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism-dark.css";
const route = useRoute();

const { $notion } = useNuxtApp();
const { data } = (await useFetch("https://www.pejedev.xyz/api/posts")) as any;

const page = data.value.find(
  (post: any) =>
    post.properties.slug.rich_text[0].plain_text === route.params.id
);

const pageData = await useAsyncData("notion-page", () =>
  $notion.getPageBlocks(page.id)
).then((res) => res.data.value);

useSeoMeta({
  title: page.properties.title.title[0].plain_text,
  description: page.properties.description.rich_text[0].plain_text,
  ogImage: page.properties.thumbnail.files[0].file.url,
});
</script>

<template>
  <div class="post-container">
    <NotionRenderer :blockMap="pageData" fullPage prism />
  </div>
</template>

<style scoped>
.post-container {
	margin-bottom: 30px;
}
</style>
