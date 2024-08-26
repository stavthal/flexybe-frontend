<template>
  <div class="px-6">
    <label class="flex gap-2 cursor-pointer">
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
        type="checkbox"
        v-model="darkMode"
        class="toggle theme-controller"
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
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";

const colorMode = useColorMode();
const darkMode = ref(false);

// Function to set theme and store preference
const applyTheme = (isDark: boolean) => {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("color-mode", theme);
  colorMode.value = theme;
};

// Initialize theme based on stored preference or system preference
onMounted(() => {
  const storedTheme = localStorage.getItem("color-mode");
  if (storedTheme) {
    darkMode.value = storedTheme === "dark";
  } else {
    // Default to system preference
    darkMode.value = colorMode.value === "dark";
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
