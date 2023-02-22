<template>
  <n-config-provider :theme="darkTheme">
    <div class="web-content">
      <NavBar />
      <slot />
      <Footer />
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../components/core/footer.vue";
import NavBar from "../components/core/navbar.vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  name: "DefaultLayout",
  layaout: "default",
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {
      darkTheme,
    };
  },
});
</script>

<style scoped>
.web-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
