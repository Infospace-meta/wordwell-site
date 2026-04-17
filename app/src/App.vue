<template>
  <Toaster
    position="top-center"
    richColors
    closeButton="true"
    closeButtonPosition="top-right"
  />
  <router-view />
</template>

<script setup>
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
</script>
