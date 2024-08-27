<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-base-100 dark:to-base-100"
  >
    <HeroSection />
    <!-- TODO: Add shapes divider before the next section (Wave) -->
    <!-- TODO: Lazy rendering (do not show before it is visible) -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
