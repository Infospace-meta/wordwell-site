<template>
  <div class=" py-20">
    <div class="mx-auto max-w-3xl px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 space-y-2">
        <p class="text-complementary font-semibold text-h4">FAQs</p>
        <h2 class="text-primary-dark font-bold text-h3">Frequently Asked Questions</h2>
      </div>

      <!-- Accordion Container -->
      <div class="space-y-1">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-white border border-gray-200 rounded-card overflow-hidden transition-all duration-300"
          :class="{ 'shadow-md border-complementary/30': activeIndex === index }"
        >
          <!-- Question Header -->
          <button 
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span 
              class="font-semibold text-body transition-colors duration-300"
              :class="activeIndex === index ? 'text-complementary' : 'text-primary-dark'"
            >
              {{ faq.question }}
            </span>
            
            <!-- Icon -->
            <div class="ml-4 shrink-0">
              <Plus 
                v-if="activeIndex !== index" 
                class="w-5 h-5 text-gray-400" 
              />
              <Minus 
                v-else 
                class="w-5 h-5 text-complementary" 
              />
            </div>
          </button>

          <!-- Answer Body (Animated) -->
          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div class="p-6 pt-0 text-small text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Plus, Minus } from '@lucide/vue';

const activeIndex = ref(null);

const faqs = [
  {
    question: "How long does a research paper usually take?",
    answer: "Delivery times vary depending on the length and complexity. Typically, a standard research paper takes 3-5 days, but we also offer express services for tighter deadlines."
  },
  {
    question: "Is the work checked for plagiarism?",
    answer: "Absolutely. Every piece of work goes through a rigorous quality check and is scanned using industry-leading plagiarism detection software to ensure 100% originality."
  },
  {
    question: "Can I request revisions if I'm not satisfied?",
    answer: "Yes! Your satisfaction is our priority. We offer free revisions within a specific timeframe to ensure the final product meets your initial requirements."
  },
  {
    question: "How do you handle confidentiality?",
    answer: "We take your privacy seriously. All personal information and project details are kept strictly confidential and are never shared with third parties."
  }
];

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Ensure smooth height transition using the grid-rows trick */
.grid-rows-\[0fr\] {
  grid-template-rows: 0fr;
}
.grid-rows-\[1fr\] {
  grid-template-rows: 1fr;
}
</style>