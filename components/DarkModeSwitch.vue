<template>
  <div class="px-6">
    <label class="flex gap-2 bg-transparent cursor-pointer">
      <!-- Sun Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <!-- Dark Mode Toggle -->
      <input
        v-model="darkMode"
        type="checkbox"
        class="toggle theme-controller toggle-accent"
        @click="toggleTheme"
      />
      <!-- Moon Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch } from "vue";

const darkMode = ref(false);

// Function to set theme by adding/removing dark class to html tag
const applyTheme = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.value = "dark";
    document.documentElement.setAttribute("data-theme", "dark"); // Set DaisyUI theme to dark
  } else {
    document.documentElement.classList.value = "";
    document.documentElement.setAttribute("data-theme", "light"); // Set DaisyUI theme to light
  }
  localStorage.setItem("color-mode", isDark ? "dark" : "light");
};

// Initialize theme based on stored preference or system preference
onBeforeMount(() => {
  const storedTheme = localStorage.getItem("color-mode");
  if (storedTheme) {
    darkMode.value = storedTheme === "dark";
  } else {
    // Default to system preference
    darkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme(darkMode.value);
});

// Watch for dark mode changes and apply the theme
watch(darkMode, (value) => {
  applyTheme(value);
});

// Toggle theme when the user clicks the switch
const toggleTheme = () => {
  darkMode.value = !darkMode.value;
};
</script>
