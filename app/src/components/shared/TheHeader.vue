<template>
  <div class="top-0 right-0 left-0 z-50 bg-white border-b border-border">
    <!-- Top Bar -->
    <div class="bg-complementary py-1 max-lg:hidden">
      <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div class="flex items-center gap-4">
          <a
            v-for="s in socialLinks"
            :key="s.name"
            :href="s.href"
            class="p-1.5 text-white hover:text-accent transition-colors"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path :d="s.path" />
            </svg>
          </a>
        </div>
        <div class="text-small text-white font-medium">
          Phone: +1 (563) 343-3372 | Email: support@wordwellinternational.com
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/Logo.png" alt="Logo" class="h-14 w-auto lg:h-16" />
      </router-link>

      <!-- Desktop Nav -->
      <nav
        class="hidden space-x-8 lg:flex text-primary-dark font-medium items-center"
      >
        <template v-for="link in navLinks" :key="link.name">
          <!-- Dropdown Link -->
          <div v-if="link.dropdown" class="relative group">
            <button
              class="flex items-center gap-1 hover:text-complementary transition-colors cursor-pointer py-2"
            >
              {{ link.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <div
              class="absolute left-0 mt-6 w-xs bg-white border border-border rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
            >
              <router-link
                v-for="sub in link.dropdown"
                :key="sub.name"
                :to="sub.path"
                class="block px-4 py-2 text-sm hover:bg-surface hover:text-complementary transition-colors"
              >
                {{ sub.name }}
              </router-link>
            </div>
          </div>
          <!-- Normal Link -->
          <router-link
            v-else
            :to="link.path"
            class="hover:text-complementary transition-colors"
          >
            {{ link.name }}
          </router-link>
        </template>
      </nav>

      <div class="flex items-center gap-4">
        <button
          class="hidden lg:block rounded-btn bg-primary-dark px-6 py-2.5 text-white hover:bg-complementary transition-colors cursor-pointer font-medium"
          @click="navigate('order')"
        >
          Order Now
        </button>
        <button
          class="hidden lg:block rounded-btn border-2 border-primary-dark px-6 py-2.5 text-primary-dark hover:border-complementary hover:text-complementary transition-colors cursor-pointer font-medium"
          @click="navigate('dashboard')"
        >
          My Orders
        </button>

        <!-- Mobile Toggle -->
        <button
          @click="toggleMenu"
          class="block p-2 text-primary-dark lg:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  <div
    v-show="isMenuOpen"
    class="fixed inset-0 z-40 mt-16 bg-white lg:hidden overflow-y-auto flex flex-col justify-between"
  >
    <nav class="flex flex-col p-6">
      <template v-for="link in navLinks" :key="link.name">
        <!-- Mobile Dropdown -->
        <div v-if="link.dropdown" class="flex flex-col">
          <button
            @click="isServicesOpen = !isServicesOpen"
            class="flex items-center justify-between py-4 text-body font-medium border-b border-border"
          >
            {{ link.name }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': isServicesOpen }"
              class="h-6 w-6 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-show="isServicesOpen" class="px-4 flex flex-col">
            <router-link
              v-for="sub in link.dropdown"
              :key="sub.name"
              :to="sub.path"
              @click="toggleMenu"
              class="py-3 text-body border-b border-border last:border-0"
            >
              {{ sub.name }}
            </router-link>
          </div>
        </div>
        <!-- Mobile Normal Link -->
        <router-link
          v-else
          :to="link.path"
          @click="toggleMenu"
          class="py-4 text-body font-medium border-b border-border"
        >
          {{ link.name }}
        </router-link>
      </template>
    </nav>
    <div class="space-y-2 p-6">
      <button
        class="w-full rounded-btn bg-primary-dark px-4 py-4 text-white font-bold"
        @click="router.push('/order')"
      >
        Order Now
      </button>
      <button
        class="w-full rounded-btn border-primary-dark px-4 py-4 text-primary-dark border-2 font-bold"
         @click="router.push('/dashboard')"
      >
        My Orders
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const isServicesOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) isServicesOpen.value = false;
};

// Navigation function
const navigate = (path) => {
  router.push('/' + path); // Ensure absolute pathing
};

// const navigate = (path) => {
//   isMenuOpen.value = false;
//   window.location.href = path;
// };

// Unified Navigation Data
const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "#services",
    dropdown: [
      { name: "Academic Writing", path: "/services/assignment" },
      { name: "Online Class & Exam Help", path: "/services/attendance" },
    ],
  },
  { name: "How It Works", path: "/How-it-works" },
  { name: "About Us", path: "/about" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    href: "#",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    name: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 0C8.741 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.335.935 20.665.492 19.875.188c-.767-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.055 1.17-.249 1.805-.415 2.227-.216.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.055-1.805-.249-2.227-.415-.562-.216-.96-.477-1.382-.896-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.055-1.17.249-1.805.415-2.227.216-.562.477-.96.896-1.382.419-.419.818-.679 1.381-.896.422-.164 1.056-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "X",
    href: "#",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
];
</script>
