<template>
  <!-- Core Values Section (Grid Layout) -->
  <div class="max-w-7xl mx-auto  p-4">
    <!-- Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="card in policyCards"
        :key="card.id"
        class="bg-white rounded-card p-10 border border-gray-100 flex flex-col shadow-sm transition-all hover:shadow-md hover:-translate-y-1 text-left"
      >
        <!-- Icon (Orange/Accent) -->
        <component
          :is="card.icon"
          class="w-12 h-12 mb-6 text-accent"
          stroke-width="1.5"
        />

        <!-- Title (Blue) -->
        <h3 class="text-primary-dark font-bold text-h4 mb-4">
          {{ card.title }}
        </h3>

        <!-- Intro Text -->
        <p class="text-gray-700 text-small leading-relaxed mb-4">
          {{ card.intro }}
        </p>

        <!-- Points with Checkmarks -->
        <ul class="space-y-3 mb-6">
          <li
            v-for="(point, index) in card.points"
            :key="index"
            class="flex items-start gap-3"
          >
            <CheckSquare2 class="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <span class="text-small text-gray-700 leading-tight">{{
              point
            }}</span>
          </li>
        </ul>

        <!-- Footer Text -->
        <p class="text-gray-700 text-small leading-relaxed mt-auto">
          {{ card.footer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileSearch, ShieldCheck, Wallet, CheckSquare2 } from "@lucide/vue";

const policyCards = [
  {
    id: 1,
    icon: FileSearch,
    title: "Revision Policy",
    intro:
      "At WordWell Writers, your satisfaction is our top priority. Our professional writing help process includes a hassle-free revision policy:",
    points: [
      "Unlimited revisions within the original instructions.",
      "Quick turnaround to meet deadlines.",
      "Ensures your paper meets all requirements and expectations.",
    ],
    footer:
      "We work closely with you during revisions so your paper is exactly how you need it.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Confidentiality Assurance",
    intro:
      "Your privacy is fundamental to our professional writing help process. We guarantee:",
    points: [
      "Complete confidentiality of your personal and academic information.",
      "No sharing of assignment details with third parties.",
      "Secure communication channels throughout the order and revision process.",
    ],
    footer:
      "With WordWell Writers, your data and academic integrity are fully protected.",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Our Best Prices",
    intro:
      "We provide top-quality academic writing at competitive rates. Here’s a glimpse of our starting prices:",
    points: [
      "Essay/Assignment: $15",
      "Research Paper: $25",
      "Dissertation/Thesis: $120",
    ],
    footer:
      "Prices may vary based on complexity and deadline. Contact us for a custom quote. Our pricing ensures that the professional writing help process is accessible, transparent, and affordable for students.",
  },
];
</script>
