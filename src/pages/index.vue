<template>
  <div class="home-banner">
    <PersonalData />
    <Canva />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Canva from "../components/three/catCanva.vue";
import PersonalData from "../components/personalData.vue";

export default defineComponent({
  name: "Home",
  components: {
    Canva,
    PersonalData
  },
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
</style>
