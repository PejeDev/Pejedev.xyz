<template>
  <NuxtLayout name="default">
    <div class="error-content">
      <div v-if="error.statusCode == 404">
        <n-result
          status="404"
          title="404 Not Found"
          description="You know life is always ridiculous."
        >
          <template #footer>
            <n-button @click="goToRandomMeme()" >Find Something Funny</n-button>
          </template>
        </n-result>
      </div>
      <div v-else>
        <n-result
          status="500"
          title="500 Server Error"
          description="Server error may prove that you need hiring more developers."
        >
          <template #footer>
            <n-button @click="goToHomepage()">Go back Home</n-button>
          </template>
        </n-result>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "ErrorLayout",
  layout: "error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
	methods: {
		goToHomepage() {
			this.$router.push("/");
		},
		goToRandomMeme() {
			this.$router.push("/meme");
		},
	}
});
</script>

<style scoped>
.error-content {
  display: flex;
  flex-direction: column;
  justify-items: end;
  align-items: center;
  max-width: 900px;
  margin: auto;
  height: 100%;
}
.n-result-header__title {
  color: #fff !important;
}
</style>
