<template>
  <NuxtLayout name="default">
    <div class="error-content">
      <div v-if="error.statusCode == 404">
        <h1 class="error-title">{{ error.statusCode }}</h1>
        <p class="error-description">{{ error.message }}</p>
        <img class="error-image" src="/404.svg" alt="404" />
      </div>
      <div v-else>
        <h1 class="error-title">{{ error.statusCode }}</h1>
        <p class="error-description">{{ error.message }}</p>
        <img class="error-image" src="/500.svg" alt="500" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

useSeoMeta({
  title: props.error.statusCode,
  description: props.error.message,
});
</script>

<style scoped>
.error-title {
  font-size: 100px;
  font-weight: 600;
  margin: 0;
}

.error-description {
  font-size: 24px;
  font-weight: 400;
  margin: 0;
}

.error-image {
  width: 100%;
  height: 600px;
  object-fit: contain;
}
.error-content {
  display: flex;
  flex-direction: column;
  justify-items: end;
  align-items: center;
  max-width: 900px;
  margin: auto;
  height: 100%;
  text-align: center;
}
</style>
