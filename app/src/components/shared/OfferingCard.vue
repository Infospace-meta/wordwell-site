<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-4xl mx-auto mb-16">
        <p class="text-accent font-semibold tracking-widest text-h3 mb-3">
          Our Core Services
        </p>
        <h2 class="text-h2 font-semibold text-primary-dark mb-6">
          Expert Academic Support, Tailored to Your Needs!
        </h2>
        <p class="text-gray-600 leading-relaxed">
          At WordWell Writers, we provide a wide range of academic writing &
          support services tailored to students, researchers & professionals.
          Whether it’s an urgent essay, a detailed research project, or
          polishing your final dissertation, our expert team ensures original,
          high-quality & on-time delivery.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white p-10 rounded-card border border-gray-200 flex flex-col items-center text-center transition-all duration-300 group"
        >
          <!-- Icon Container -->
          <div
            class="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-8 transition-transform duration-500"
          >
            <component
              :is="service.icon"
              class="text-white w-7 h-7"
              stroke-width="1.5"
            />
          </div>

          <!-- Content -->
          <h3 class="text-h3 font-semibold text-primary-dark mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  FileText,
  ClipboardCheck,
  FileSearch,
  GraduationCap,
  FileEdit,
  Presentation,
} from "@lucide/vue";

const services = [
  {
    title: "Essay Writing",
    description:
      "Custom essays, term papers, and coursework crafted to meet your instructions and academic standards.",
    icon: FileText,
  },
  {
    title: "Assignment Help",
    description:
      "Professional support for assignments across all subjects, helping you meet deadlines and achieve top grades.",
    icon: ClipboardCheck,
  },
  {
    title: "Research Papers",
    description:
      "Thoroughly researched and well-structured papers with proper citations to ensure academic excellence.",
    icon: FileSearch,
  },
  {
    title: "Thesis & Dissertation Help",
    description:
      "Comprehensive guidance for undergraduate, graduate, and PhD students, from proposals to full dissertation writing.",
    icon: GraduationCap,
  },
  {
    title: "Editing & Proofreading",
    description:
      "Professional editing to refine grammar, structure, and style, ensuring your work is polished and submission-ready.",
    icon: FileEdit,
  },
  {
    title: "Presentations & Reports",
    description:
      "Professional academic presentations and reports that clearly communicate your ideas with visuals and structured content.",
    icon: Presentation,
  },
];
</script>
