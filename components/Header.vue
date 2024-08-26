<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <!-- Mobile Menu -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="#">Pricing</NuxtLink></li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="#">Sign Up</NuxtLink>
          </li>
          <li><NuxtLink to="#">Login</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/"
        ><h1 class="text-4xl btn btn-ghost">FlexyBe</h1></NuxtLink
      >
    </div>
    <div class="hidden navbar-center lg:flex">
      <ul class="px-1 menu menu-horizontal">
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="#">Pricing</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <DarkModeSwitch />
      <div class="max-lg:hidden">
        <NuxtLink to="#" class="btn btn-ghost">Sign Up</NuxtLink>
        <NuxtLink to="#" class="btn btn-ghost">Login</NuxtLink>
      </div>
    </div>
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
