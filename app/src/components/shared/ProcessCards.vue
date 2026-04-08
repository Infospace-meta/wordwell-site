<template>
  <div class="max-w-7xl mx-auto p-4">
    <!-- Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-1">
      <div
        v-for="step in steps"
        :key="step.id"
        class="bg-white rounded-card p-10 border text-center border-gray-100 flex flex-col shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
      >
        <!-- Icon -->
        <h1
          class="text-white border-2 border-primary-dark flex justify-center items-center rounded-full w-12 h-12 text-center mx-auto bg-accent font-bold text-3xl mb-5"
        >
          {{ step.icon }}
        </h1>

        <!-- Title -->
        <h3 class="text-primary-dark font-bold text-h4 mb-5">
          {{ step.title }}
        </h3>

        <!-- Content -->
        <p class="text-gray-700 text-small leading-relaxed">
          {{ step.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    id: 1,
    icon: 1,
    title: "Place Your Order",
    text: "Place your order and provide us with the details",
  },
  {
    id: 2,
    icon: 2,
    title: "Make Payment",
    text: "Make your payment and secure your order.",
  },
  {
    id: 3,
    icon: 3,
    title: "writer Assigned",
    text: "A dedicated writer is assigned to your project.",
  },
  {
    id: 4,
    icon: 4,
    title: "Review & Revise",
    text: "Review the draft and request revisions if needed.",
  },
  {
    id: 5,
    icon: 5,
    title: "Deliver Final Work",
    text: "Receive your completed assignment and ensure it meets your expectations.",
  },
];
</script>
