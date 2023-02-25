<template>
  <vue3dLoader
    class="cat-canva"
    :height="400"
    filePath="./cat.glb"
    :rotation="rotation"
    :position="{ x: 40, y: 20, z: 0 }"
    :scale="{ x: 0.8, y: 0.8, z: 0.8 }"
    @load="onLoad()"
    backgroundColor="#101014"
  ></vue3dLoader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vue3dLoader } from "vue-3d-loader";

export default defineComponent({
  name: "CatCanva",
  components: {
    vue3dLoader,
  },
  data() {
    return {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    rotate() {
      requestAnimationFrame(this.rotate);
      this.rotation.y += 0.01;
    },
    onLoad() {
      this.rotate();
      console.log("loaded");
    },
  },
});
</script>

<style scoped>
.cat-canva {
  width: 100%;
  max-width: 400px;
}
</style>
