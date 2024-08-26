<template>
  <div class="flex justify-around w-screen px-4 py-8">
    <div class="flex flex-col w-4/12 mt-12">
      <h1 class="mb-4 font-bold text-8xl text-primary">
        Flexify Your Workflow.
      </h1>
      <p class="text-2xl text-white">
        Streamline your projects with seamless tools that adapt to the way
        <span class="font-semibold text-success">you</span>
        work best.
      </p>
    </div>
    <div class="flex max-lg:hidden">
      <div class="relative">
        <!-- Shadow container -->
        <div
          class="absolute inset-0 bg-gray-700 rounded-md opacity-50 dark:bg-gray-300 blur-lg"
        />
        <!-- Image with animation -->
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          :src="imageUrl"
          alt="Hero Image"
          class="max-w-3xl rounded-md shadow-lg animate-bounce"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import imageUrl from "~/assets/images/hero-image.webp";
</script>

<style scoped>
/* Custom animation */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1.5s ease-in-out infinite;
}
</style>
