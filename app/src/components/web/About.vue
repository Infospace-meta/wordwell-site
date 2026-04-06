<template>
  <div class="">
    <!-- Hero Section -->
    <div class="bg-primary-dark text-white text-center py-16 min-h-[40vh]">
      <div class="mx-auto max-w-7xl px-4 space-y-5">
        <p class="text-h2 font-semibold">About Us</p>
        <p class="text-center text-h4 text-accent font-semibold">
          Who we are
        </p>
        <p
          class="text-center text-body text-white font-normal tracking-wide leading-relaxed max-w-4xl mx-auto"
        >
          At WordWell Writers, we specialize in delivering high-quality academic
          writing and assignment help services tailored to students and
          professionals worldwide. Our mission is to simplify learning, empower
          students, and help them excel through expertly crafted essays and
          research.
        </p>
      </div>
    </div>

    <!-- Core Values Section (Grid Layout) -->
    <div class="max-w-7xl mx-auto lg:-translate-y-1/3 p-4">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="value in values"
          :key="value.id"
          class="bg-white rounded-card p-10 border text-center border-gray-100 flex flex-col shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
        >
          <!-- Icon -->
          <component
            :is="value.icon"
            class="w-10 h-10 mx-auto mb-4 text-accent"
            stroke-width="1.5"
          />

          <!-- Title -->
          <h3 class="text-primary-dark font-bold text-h4 mb-5">
            {{ value.title }}
          </h3>

          <!-- Content -->
          <p class="text-gray-700 text-small leading-relaxed">
            {{ value.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Goal, Eye, ShieldCheck } from "@lucide/vue";

const values = [
  {
    id: 1,
    icon: Goal,
    title: "Our Mission",
    text: "Our mission is to provide original, high-quality academic support that empowers students to excel.",
  },
  {
    id: 2,
    icon: Eye,
    title: "Our Vision",
    text: "Our vision is to be the world’s most trusted partner in academic writing and learning success.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Core Values",
    text: "Our core values include integrity, quality, and a commitment to student success.",
  },
];
</script>
