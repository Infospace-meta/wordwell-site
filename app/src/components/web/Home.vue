<template>
  <div class="relative bg-white overflow-hidden">
    <!-- Decorative background blobs -->
    <!-- <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"
    ></div>
    <div
      class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"
    ></div> -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="pt-8 pb-20 lg:pt-24 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <!-- Left Side: Copy & CTA -->
        <div class="text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary-dark text-sm font-semibold tracking-wide mb-6"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-primary-dark"
              ></span>
            </span>
            The Global Leader in Academic Support
          </div>

          <h1 class="text-display font-semibold text-primary-dark mb-8">
            Achieve Academic
            <span class="text-accent">Excellence</span> Without the Stress.
          </h1>

          <p
            class="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            From complex research papers to final-year dissertations, get expert
            support tailored to your academic needs. 100% original, expertly
            cited, and delivered on time.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              class="bg-accent hover:bg-complementary text-white py-3 px-7 rounded-btn transition-all text-button tracking-widest cursor-pointer"
            >
              Order Your Paper Now
            </button>
            <!-- <button
              class="bg-white border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-bold py-3 px-7 rounded-btn transition-all text-button tracking-widest cursor-pointer"
            >
              View Our Services
            </button> -->
          </div>

          <!-- Quick Trust Stats -->
          <div
            class="mt-12 flex items-center justify-center lg:justify-start gap-8"
          >
            <div class="flex -space-x-3">
              <img
                v-for="i in 4"
                :key="i"
                :src="`https://i.pravatar.cc/100?img=${i + 10}`"
                class="w-10 h-10 rounded-full border-2 border-white"
                alt="Student"
              />
              <div
                class="w-10 h-10 rounded-full bg-primary-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold"
              >
                +5k
              </div>
            </div>
            <div class="text-left space-y-2">
              <div class="flex text-accent">
                <Star v-for="i in 5" :key="i" :size="16" fill="currentColor" />
              </div>
              <p class="text-h4 text-gray-500 font-medium">
                Trusted by 10,000+ Students
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: High-End Student Imagery -->
        <div class="relative">
          <div class="relative z-10 rounded-card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
              alt="Students collaborating"
              class="w-full h-150 object-cover"
            />
            <!-- Floating Achievement Badge -->
            <div
              class="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow"
            >
              <div class="bg-green-100 p-3 rounded-xl">
                <ShieldCheck class="text-green-600" :size="32" />
              </div>
              <div>
                <p class="text-xs text-gray-500 font-bold tracking-widest">
                  Plagiarism Free
                </p>
                <p class="text-h3 font-semibold text-primary-dark">
                  100% Original
                </p>
              </div>
            </div>
          </div>

          <!-- Decorative Square -->
          <div
            class="absolute -top-10 -left-10 w-40 h-40 border-8 border-accent rounded-button -z-10 opacity-20"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <section class="py-20 bg-primary-dark overflow-hidden space-y-10">
    <p class="text-center text-h3 text-accent font-semibold">Our Statistics</p>
    <p class="text-center text-h2 text-white font-semibold">
      Trusted by Students & Professionals Worldwide
    </p>
    <div class="max-w-6xl mx-auto px-4 bg-white py-10 rounded-card">
      <div class="relative min-h-125 flex items-center justify-center">
        <!-- Background World Map (Simplified SVG for performance) -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-100 z-0 pointer-events-none"
        >
          <img
            src="@/assets/layer.svg"
            alt="World Map"
            class="w-full h-full object-contain filter invert brightness-50 contrast-150"
          />
        </div>

        <!-- Statistics Grid -->
        <div
          class="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32"
        >
          <!-- Top Left -->
          <div
            class="flex flex-col items-center md:items-start md:pl-10 space-y-2"
          >
            <FileText class="w-8 h-8 text-primary-dark" />
            <h2 class="text-5xl md:text-6xl font-black text-accent">5K+</h2>
            <p class="text-primary-dark font-semibold tracking-wider text-sm">
              Papers Delivered
            </p>
          </div>

          <!-- Top Right -->
          <div
            class="flex flex-col items-center md:items-end md:pr-10 space-y-2"
          >
            <GraduationCap class="w-8 h-8 text-primary-dark" />
            <h2 class="text-5xl md:text-6xl font-black text-accent">96%</h2>
            <p class="text-primary-dark font-semibold tracking-wider text-sm">
              Client Satisfaction Rate
            </p>
          </div>

          <!-- Bottom Left -->
          <div
            class="flex flex-col items-center md:items-start md:pl-10 space-y-2"
          >
            <ClipboardList class="w-8 h-8 text-primary-dark" />
            <h2 class="text-5xl md:text-6xl font-black text-accent">45+</h2>
            <p class="text-primary-dark font-semibold tracking-wider text-sm">
              Subjects Covered
            </p>
          </div>

          <!-- Bottom Right -->
          <div
            class="flex flex-col items-center md:items-end md:pr-10 space-y-2"
          >
            <Users class="w-8 h-8 text-primary-dark" />
            <h2 class="text-5xl md:text-6xl font-black text-accent">150+</h2>
            <p class="text-primary-dark font-semibold tracking-wider text-sm">
              Expert Academic Writers
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <offering-card class="" />

  <section class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <!-- Left Column: Professional Image -->
        <div class="relative">
          <div class="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <!-- Using a professional academic-themed photo -->
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
              alt="Focused student working on laptop"
              class="w-full h-[500px] object-cover"
            />
          </div>
          <!-- Decorative Background Frame -->
          <div
            class="absolute -top-6 -left-6 w-full h-full border-2 border-gray-100 rounded-[2rem] -z-0"
          ></div>
        </div>

        <!-- Right Column: Brand Narrative -->
        <div class="space-y-8">
          <div>
            <span
              class="text-[#2c4696] font-bold text-lg mb-2 block tracking-tight"
            >
              About WordWell Writers
            </span>
            <h2
              class="text-h2 font-semibold text-accent leading-tight mb-8"
            >
              Crafting Academic Success, One Word at a Time!
            </h2>
          </div>

          <div class="space-y-6 text-gray-600  leading-relaxed">
            <p>
              At WordWell Writers, we believe every idea deserves to shine.
              That’s why we provide expert academic writing services tailored to
              students, researchers, and professionals worldwide. Whether you
              need help with an essay, guidance on your dissertation, or a final
              polish on your research paper, our team—including experienced
              <strong class="text-gray-900"
                >masterarbeit schreiben lassen</strong
              >
              specialists—delivers work that is original, precise, and always on
              time.
            </p>
            <p>
              With a commitment to integrity, professionalism, and excellence,
              we’ve built a reputation as a trusted academic partner. From
              undergraduate assignments to PhD-level research, we empower you to
              focus on learning while we craft words that drive success.
            </p>
            <p class="font-medium">
              Your success is our mission. Your ideas, our words — perfectly
              written.
            </p>
          </div>

          <div class="pt-4">
            <button
              class="bg-[#2c4696] hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-xl transition-all uppercase text-sm tracking-widest shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
            >
              Get Started Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="bg-surface py-20">
    <div class="mx-auto max-w-7xl px-4 space-y-5">
      <p class="text-center text-h3 text-accent font-semibold">Our Process</p>
      <p
        class="text-center text-body font-normal tracking-wide leading-relaxed max-w-4xl mx-auto"
      >
        At WordWell Writers, we follow a streamlined process to ensure you
        receive high-quality academic writing and assignment help services. Our
        process is designed to be simple, efficient, and tailored to meet your
        specific needs.
      </p>
      <process-card class="" />
    </div>
  </div>

  <f-a-q-item class="" />
  <service-card class="" />
  <testimonial-card class="" />
</template>

<script setup>
import {
  FileText,
  GraduationCap,
  ClipboardList,
  Users,
  Star,
  ShieldCheck,
} from "@lucide/vue";
import TestimonialCard from "@/components/shared/TestimonialCard.vue";
import FAQItem from "@/components/shared/FAQItem.vue";
import ServiceCard from "@/components/shared/ServiceCard.vue";
import ProcessCard from "@/components/shared/ProcessCards.vue";
import OfferingCard from "@/components/shared/OfferingCard.vue";
</script>

<style scoped>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

h1 {
  letter-spacing: -0.03em;
}
</style>
