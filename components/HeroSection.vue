<template>
  <div class="flex items-center justify-around w-screen px-4 py-8">
    <div class="flex flex-col">
      <h1 class="mb-4 text-4xl font-bold text-red-500 dark:text-green-500">
        Your Hero Heading
      </h1>
      <p class="text-lg">Your hero text goes here.</p>
    </div>
    <div class="flex max-lg:hidden">
      <div class="relative">
        <!-- Shadow container -->
        <div
          class="absolute inset-0 bg-gray-700 rounded-md opacity-50 dark:bg-gray-300 blur-lg"
        ></div>
        <!-- Image with animation -->
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
