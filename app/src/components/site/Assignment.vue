<template>
  <div class="bg-gray-50 min-h-screen text-gray-800">
    <!-- SECTION 1: Intro Hero -->
    <section class="py-16 bg-white">
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span class="text-primary-dark font-semibold text-h3 mb-2 block"
            >Academic Writing Services</span
          >
          <h1 class="text-h2 font-bold text-accent leading-tight mb-6">
            Helping Students Excel with Expert Academic Support!
          </h1>
          <div class="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              At WordWell Writers, we understand that academic writing can be
              challenging, time-consuming, and overwhelming. That's why we offer
              a wide range of academic writing services designed to support
              students at every level of study.
            </p>
            <p>
              We specialize in producing well-researched, plagiarism-free, and
              properly formatted academic papers that meet your specific
              requirements and academic standards.
            </p>
          </div>
          <button
          @click="router.push('/order')"
            class="bg-primary-dark hover:bg-primary text-white font-bold py-4 px-10 rounded-lg transition-all uppercase text-sm tracking-widest shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
        <div class="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg"
            alt="Illustration"
            class="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>

    <!-- SECTION 2: Dark Blue Banner -->
    <section class="bg-primary-dark py-16 text-center text-white">
      <div class="max-w-5xl mx-auto px-4">
        <p class="tracking-widest mb-4 flex items-center justify-center gap-2">
          ✍️ Academic Writing Services for Every Student
        </p>
        <h2 class="text-h2 font-semibold text-accent mb-6">
          Expertly written, plagiarism-free papers tailored to your academic
          needs!
        </h2>
        <p class="text-white leading-relaxed">
          Our services are backed by expert subject-specialist writers, thorough
          research, and 24/7 support. We're the trusted choice for students
          worldwide who want original, high-quality papers.
        </p>
      </div>
    </section>

    <!-- SECTION 3: Dynamic Key Services List -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div
          class="bg-white p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div class="lg:col-span-5 flex justify-center items-end">
            <img
              src="https://img.freepik.com/free-photo/two-happy-students-with-books-white_155003-4608.jpg"
              alt="Students"
              class="max-w-full h-auto object-contain"
            />
          </div>
          <div class="lg:col-span-7">
            <span class="text-primary-dark font-semibold text-h3 mb-2 block"
              >Our Key Academic Writing Services</span
            >
            <h2 class="text-h2 font-semibold text-accent mb-6">
              Comprehensive Support For Every Stage Of Your Journey!
            </h2>

            <div class="space-y-6">
              <h4 class="font-semibold text-gray-900 text-h3">
                Services We Offer
              </h4>
              <!-- DYNAMIC LIST START -->
              <ul class="grid grid-cols-1 gap-4 text-gray-700">
                <li v-for="service in keyServices" :key="service.title">
                  <strong class="text-gray-900">{{ service.title }} –</strong>
                  {{ service.description }}
                </li>
              </ul>
              <!-- DYNAMIC LIST END -->
            </div>

            <div class="mt-10">
              <button
              @click="router.push('/order')"
                class="bg-primary-dark hover:bg-primary text-white font-bold py-4 px-12 rounded-lg transition-all uppercase text-sm tracking-widest shadow-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Dynamic Feature Cards (Icon Version) -->
    <section class="py-16 bg-gray-50 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#2c4696]">
            Why Choose Our Service?
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <component
              :is="feature.icon"
              class="w-12 h-12 text-[#e86024] mb-4"
            />
            <h3 class="text-xl font-bold text-[#2c4696] mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ feature.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Dynamic Detail Cards (Who, What, Why) -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="section in infoCardSections"
          :key="section.title"
          class="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 class="text-accent font-semibold text-2xl mb-6">
            {{ section.title }}
          </h3>
          <p class="text-gray-600 mb-6 font-medium">{{ section.intro }}</p>
          <ul class="space-y-4 text-gray-700">
            <li v-for="item in section.items" :key="item.label">
              <strong class="text-gray-900 block md:inline">{{
                item.label
              }}</strong>
              {{ item.content }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Clock, ShieldCheck, Award, Eye, Lightbulb, Users } from "@lucide/vue";

const router = useRouter();

// Navigation function
const navigate = (path) => {
  router.push('/' + path); // Ensure absolute pathing
};

// 1. Feature Cards Data (With Icons)
const features = [
  {
    id: 1,
    icon: Clock,
    title: "24/7 Support",
    text: "We are always available to answer your questions and provide guidance whenever you need it.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Plagiarism-Free",
    text: "All work is plagiarism-free, properly cited, and produced with the highest ethical standards.",
  },
  {
    id: 3,
    icon: Award,
    title: "Proven Track Record",
    text: "Thousands of students and professionals have trusted us to help them achieve top grades.",
  },
  {
    id: 4,
    icon: Eye,
    title: "Transparent Process",
    text: "Clear communication, fair pricing, and timely delivery are at the core of our service.",
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Tailored Solutions",
    text: "Every project is customized to meet your specific needs and academic requirements.",
  },
  {
    id: 6,
    icon: Users,
    title: "Expert Writers",
    text: "Our team consists of vetted professionals with real academic and industry experience.",
  },
];

// 2. Main Services List Data
const keyServices = [
  {
    title: "Essay Writing",
    description:
      "Custom essays written from scratch following your specific subject requirements and citation style.",
  },
  {
    title: "Research Papers",
    description:
      "In-depth, evidence-based research papers that are properly cited and backed by scholarly sources.",
  },
  {
    title: "Thesis & Dissertation",
    description:
      "Expert support for complex projects, including proposals and full dissertation chapters.",
  },
  {
    title: "Coursework Help",
    description:
      "Comprehensive guidance on assignments, term papers, and ongoing class projects.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Enhancing clarity, grammar, and academic tone for flawless final submissions.",
  },
];

// 3. Information Grid Data (Who, What, Why)
const infoCardSections = [
  {
    title: "Who This Service Is For",
    intro:
      "Designed for students who want high-quality, professionally written papers:",
    items: [
      {
        label: "Undergraduate students",
        content: "needing help with essays and reports.",
      },
      {
        label: "Graduate students",
        content: "tackling advanced assignments and research.",
      },
      {
        label: "PhD candidates",
        content: "requiring expert dissertation support.",
      },
      {
        label: "ESL students",
        content: "who want fluent academic writing in English.",
      },
    ],
  },
  {
    title: "What's Included",
    intro:
      "Each service provides complete academic support to ensure your success:",
    items: [
      {
        label: "Custom Writing",
        content: "Original papers tailored to your instructions.",
      },
      {
        label: "Thorough Research",
        content: "Reliable, scholarly sources used for every project.",
      },
      {
        label: "Formatting & Citations",
        content: "Proper APA, MLA, or Harvard formatting included.",
      },
      {
        label: "Plagiarism-Free",
        content: "100% original content checked with software.",
      },
    ],
  },
  {
    title: "What Sets Us Apart",
    intro: "We stand out as a trusted partner for quality and reliability:",
    items: [
      {
        label: "Expert Writers",
        content: "Skilled professionals across multiple disciplines.",
      },
      {
        label: "Fast Turnaround",
        content: "On-time delivery without compromising quality.",
      },
      {
        label: "Affordable Pricing",
        content: "Student-friendly rates with no hidden fees.",
      },
      {
        label: "Confidentiality",
        content: "Your personal and academic data is fully protected.",
      },
    ],
  },
];
</script>

<style scoped>
/* Optional styling overrides */
</style>
