<template>
    <div class="web-content">
      <NavBar />
      <slot />
      <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from "../components/core/footer.vue";
import NavBar from "../components/core/navbar.vue";

defineOgImageScreenshot()
</script>

<style scoped>
.web-content {
  display: flex;
  flex-direction: column;
  min-height: 100lvh;
}
</style>
