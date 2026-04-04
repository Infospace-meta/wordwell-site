<template>
  <div class="bg-white min-h-screen">
    <TopHeader />
    <div class="sticky top-0 z-50">
      <Header />
    </div>
    <RouterView />
    <TheFooter />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useAuthStore } from "./store";
import TopHeader from "./components/TopHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

/**VARIABLES */
const auth = useAuthStore();

/**FUNCTIONS*/
const closeModal = () => {
  auth.isLoginModalOpen = false;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 26;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
