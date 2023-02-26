<template>
  <a
    style="text-decoration: none"
    :href="`/${path}/${post.properties.slug.rich_text[0].text.content}`"
    v-for="post in data"
    :key="post.id"
  >
    <div class="post-content">
      <img
        class="post-image"
        :src="post.properties.thumbnail.files[0].file.url"
        :alt="post.properties.title.title[0].text.conten || ''"
      />
      <div class="post-info">
        <h2>{{ post.properties.title.title[0].text.content || "" }}</h2>
        <span>{{
          getFormatedDate(post.properties.created_at.date.start)
        }}</span>
        <p>
          {{ post.properties.description.rich_text[0].text.content || "" }}
        </p>
        <p class="tag-list">
          tags:
          <span v-for="tag in post.properties.tags.multi_select" :key="tag.id">
            #{{ tag.name }}</span
          >
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">

defineProps<{
	data: any;
	path: string;
}>();

function getFormatedDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
.post-content {
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  height: 200px;
}

.post-info {
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-info h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.post-info span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 5px;
}

.post-image {
  max-width: 300px;
  width: 100%;
  border-radius: 15px;
}

.tag-list {
  position: absolute;
  bottom: 0px;
}

.tag-list span:hover {
  color: #fff;
}

@media  screen and (max-width: 820px) {
  .post-content {
    flex-direction: column;
    height: 700px;
  }

  .post-image {
    max-width: 100%;
    height: 400px;
  }

}

@media  screen and (max-width: 500px) {
  .post-content {
    height: 500px;
  }
  .post-image {
    height: 200px;
  }
}

</style>