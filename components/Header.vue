<template>
  <div class="navbar">
    <div>
      <h1 class="text-3xl font-bold">FlexyBe</h1>
    </div>

    <nav class="marketing-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>

    <nav class="auth-links">
      <DarkModeSwitch />
      <NuxtLink to="/register">Sign Up</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  font-family: "Montserrat";
}
nav {
  display: flex;
  gap: 1rem;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
