<template>
  <div>
    <!-- Main Navigation -->
    <header class="sticky top-0 bg-white shadow-md z-50">
      <div class="mx-auto px-4 max-w-7xl">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <a
            href="https://wordwellwriters.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center"
          >
            <img
              src="/wordwell-logo.png"
              alt="WordWell Writers"
              class="mr-3 w-auto h-14"
            />
          </a>

          <!-- Navigation Links - Centered -->
          <nav
            class="hidden left-1/2 absolute md:flex items-center space-x-12 -translate-x-1/2 transform"
          >
            <a
              href="https://wordwellwriters.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >Home</a
            >
            <a
              href="https://wordwellwriters.com/writing-services/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >Services</a
            >
            <a
              href="https://wordwellwriters.com/how-it-works/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >How It Works</a
            >
            <a
              href="https://wordwellwriters.com/about-wordwell-writers/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >About Us</a
            >
            <a
              href="https://wordwellwriters.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >Blogs</a
            >
            <a
              href="https://wordwellwriters.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-800 hover:text-orange-700 transition-colors"
              >Contact</a
            >
          </nav>

          <!-- Right Side: Order Button and Search -->
          <div class="hidden md:flex items-center space-x-3">
            <!-- ORDER NOW BUTTON -->
            <router-link
              v-if="!isOrderOrDashboardPage || !isLoggedIn"
              to="/order"
              class="bg-[#334a97] hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold text-white transition-colors"
            >
              Order Now!
            </router-link>

            <!-- Conditional Auth Buttons -->
            <template v-if="isLoggedIn">
              <router-link
                to="/dashboard"
                class="bg-[#334a97] hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold text-white transition-colors"
              >
                Dashboard
              </router-link>
              <button
                @click="handleLogout"
                class="text-gray-600 hover:text-red-600 font-semibold px-2 cursor-pointer"
              >
                Logout
              </button>
            </template>

            <template v-else>
              <router-link
                to="/login"
                class="border border-[#334a97] text-[#334a97] hover:bg-orange-600 hover:border-orange-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                My Orders
              </router-link>
            </template>

            <!-- <button
              class="flex justify-center items-center bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
            >
              <svg
                class="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button> -->
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-700 hover:text-blue-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store";

/**VARIABLES */
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

/**Hide Order button when on the /order route */
const isOrderOrDashboardPage = computed(
  () => route.path === "/dashboard" || route.path === "/order",
);

const isLoggedIn = computed(() => authStore.isLoggedIn);

/**FUNCTIONS */
const handleLogout = async () => {
  await authStore.logout();
  router.push("/");
};
</script>
