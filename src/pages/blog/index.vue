<template>
  <div class="posts-list">
    <h1 class="post-list-title">Blog articles</h1>
    <PostList path="blog" :data="data" />
  </div>
</template>

<script setup lang="ts">
import PostList from "~/components/post-list.vue";

const { data } = await useFetch("/api/posts");

</script>

<style scoped>
.posts-list {
  max-width: 900px;
  margin: 15px auto;
  padding: 0 30px;
}

.post-list-title {
  font-size: 30px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: center;
}

</style>
