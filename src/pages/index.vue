<template>
  <div>
    <div class="home-banner">
      <PersonalData />
      <Canva />
    </div>
    <CurrentStack />
    <div class="recent-posts">
      <span class="subtitle-open">Open Source Projects</span>
      <openSourceProjects :projects="github" />
    </div>
    <div class="recent-posts">
      <span class="subtitle-blog">Recent blog posts</span>
      <PostList path="blog" :data="blog" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Canva from "../components/three/cat-canva.vue";
import PersonalData from "../components/personal-data.vue";
import CurrentStack from "../components/current-stack.vue";
import PostList from "~/components/post-list.vue";
import openSourceProjects from "../components/open-source-projects.vue";

let blog: any[] = await useFetch("https://www.pejedev.xyz/api/posts").then((res) => {
  return res.data.value as any[];
});

blog = blog.slice(0, 2);

const github = await useFetch("https://api.github.com/search/repositories?q=user:pejedev&sort=updated&per_page=3").then((res) => {
  return res.data.value;
});

useHead({
  title: "Home",
});
</script>

<style scoped>
.home-banner {
  display: flex;
  flex-direction: row;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 720px) {
  .home-banner {
    flex-direction: column;
    width: auto;
    padding: 30px 30px;
  }
}

.subtitle-open {
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: center;
}

.subtitle-blog {
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 15px;
  text-align: center;
}

.recent-posts {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
