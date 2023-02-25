<template>
    <div class="web-content">
      <NavBar />
      <slot />
      <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../components/core/footer.vue";
import NavBar from "../components/core/navbar.vue";

export default defineComponent({
  name: "DefaultLayout",
  layaout: "default",
  components: {
    Footer,
    NavBar,
  },
});
</script>

<style scoped>
.web-content {
  display: flex;
  flex-direction: column;
  min-height: 100lvh;
}
</style>
