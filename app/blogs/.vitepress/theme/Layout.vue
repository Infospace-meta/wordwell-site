<script setup>
import TheFooter from './../../../src/components/layout/TheFooter.vue'
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <div class="wordwell-app">
    <!-- Header code... -->
    
    <main class="min-h-screen">
      <Content />
    </main>

    <!-- Seamless Footer -->
    <TheFooter />
  </div>
</template>