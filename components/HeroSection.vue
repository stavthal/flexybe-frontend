<template>
  <div class="flex justify-around w-screen px-4 py-8">
    <div class="flex flex-col w-4/12 mt-12">
      <h1 class="mb-4 font-bold text-8xl text-primary animate-slide-in-left">
        Flexify Your Workflow.
      </h1>
      <p class="text-2xl text-darker dark:text-white animate-slide-in-right">
        Streamline your projects with seamless tools that adapt to the way
        <span class="font-semibold text-success">you</span>
        work best.
      </p>
    </div>

    <div class="flex max-lg:hidden">
      <div class="relative">
        <!-- Shadow container -->
        <div
          class="absolute inset-0 rounded-md opacity-50 bg-primary dark:bg-primary blur-lg"
        />
        <!-- Image with animation -->
        <img
          testId="hero-image"
          :src="imageUrl"
          alt="Hero Image"
          :class="animationClass"
          class="max-w-3xl rounded-md shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import imageUrl from "~/assets/images/hero-image.webp";

import { ref, onMounted } from "vue";

// Reactive property to manage the animation class
const animationClass = ref("animate-fade-in-zoom");

// Change the class after the fade-in animation completes
onMounted(() => {
  setTimeout(() => {
    animationClass.value = "animate-bounce";
  }, 900); // Adjust the timeout duration to match your fade-in animation duration
});
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
