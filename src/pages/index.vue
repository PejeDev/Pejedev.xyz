<template>
  <div>
    <div class="home-banner">
      <PersonalData />
      <Canva />
    </div>
    <CurrentStack />
  </div>
</template>

<script setup lang="ts">
import Canva from "../components/three/cat-canva.vue";
import PersonalData from "../components/personal-data.vue";
import CurrentStack from "../components/current-stack.vue";

useHead({
  title: 'Home',
})
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
</style>
