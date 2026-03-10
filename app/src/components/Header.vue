<template>
  <div>
    <!-- Top Bar -->
    <div
      class="bg-orange-600 px-4 py-2 border-gray-200 border-b text-white text-sm"
    >
      <div class="flex justify-between items-center mx-auto max-w-7xl">
        <!-- Left: Social Media Icons -->
        <div class="flex items-center gap-4">
          <a
            href="https://wa.me/15633433372"
            class="flex justify-center items-center text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
          </a>
          <a
            href="https://web.facebook.com/wordwellintl?_rdc=1&_rdr#"
            class="flex justify-center items-center text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/wordwellintl/"
            class="flex justify-center items-center text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="flex justify-center items-center text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="flex justify-center items-center text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>

        <!-- Right: Contact Info -->
        <div class="flex items-center space-x-6">
          <a
            href="tel:+15633433372"
            class="flex items-center hover:text-blue-600 transition-colors"
          >
            <svg
              class="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            +1 (563) 343-3372
          </a>
          <a
            href="mailto:support@wordwellwriters.com"
            class="flex items-center hover:text-blue-600 transition-colors"
          >
            <svg
              class="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
              ></path>
            </svg>
            support@wordwellwriters.com
          </a>
        </div>
      </div>
    </div>

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
              v-if="!isDashboardPage"
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
                Login
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
const isDashboardPage = computed(() => route.path === "/dashboard");

const isLoggedIn = computed(() => authStore.isLoggedIn);

/**FUNCTIONS */
const handleLogout = async () => {
  await authStore.logout();
  router.push("/");
};
</script>
