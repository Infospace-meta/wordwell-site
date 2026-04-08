<template>
  <div class="">
    <!-- Hero Section -->
    <div class="bg-primary-dark text-white text-center py-16 h-1/3">
      <div class="mx-auto max-w-7xl px-4 space-y-5 lg:translate-y-1/2">
        <p class="text-h2 font-semibold">About Us</p>
        <p class="text-center text-h4 text-accent font-semibold">Who we are</p>
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

      <!-- Core Values Section (Grid Layout) -->
      <div class="max-w-7xl mx-auto lg:translate-y-1/2 p-4">
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
  </div>

  <!-- Our Story & Meet Our Writers Section -->
  <section class="py-20 mt-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-10">
      <!-- Part 1: Our Story -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <!-- Left Side: Headings -->
        <div class="space-y-6 text-left">
          <span class="text-accent font-semibold tracking-wider text-h4 block"
            >Our Story</span
          >
          <h2 class="text-h2 font-semibold text-primary-dark leading-tight">
            From Passion to Global <br />
            Academic Support
          </h2>
          <button
           @click="router.push('/order')"
            class="bg-accent hover:bg-complementary text-white font-bold py-4 px-8 rounded-btn transition-colors text-btn tracking-widest"
          >
            Place an order now!
          </button>
        </div>

        <!-- Right Side: Narrative Text -->
        <div class="space-y-6 text-text leading-relaxed text-body">
          <p>
            WordWell Writers was born from a simple yet powerful idea: every
            learner deserves access to high-quality academic support. What
            started as a small team of passionate writers dedicated to helping
            students with essays and assignments has grown into a trusted global
            network of academic professionals.
          </p>
          <p>
            Over the years, we have helped thousands of learners—from first-year
            students to PhD candidates—navigate complex research projects,
            essays, and dissertations. Our journey has always been guided by a
            commitment to excellence, originality, and integrity, transforming
            ideas into well-crafted academic work.
          </p>
          <p>
            At WordWell Writers, we don't just provide writing services; we
            empower learners to achieve their goals, build confidence, and excel
            academically. Our story is one of growth, dedication, and a
            relentless pursuit of helping students succeed.
          </p>
        </div>
      </div>

      <!-- Part 2: Meet Our Writers -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side: Professional Image -->
        <div class="relative flex justify-center lg:justify-start">
          <!-- Replace 'path-to-your-image.png' with your actual image asset -->
          <img
            src="@/assets/Writing-Experts.webp"
            alt="Professional Writer"
            class="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

        <!-- Right Side: Expertise and Details -->
        <div>
          <span class="text-primary-dark font-semibold text-h2 mb-2 block"
            >Meet Our Writers</span
          >
          <h2 class="text-h3 font-bold text-accent mb-6">
            Experts Dedicated to Your Academic Success!
          </h2>

          <div class="space-y-6 text-body">
            <p>
              At WordWell Writers, we take pride in our team of highly skilled
              academic writers and subject-matter experts. Each member of our
              team brings years of academic and professional experience,
              ensuring that your work is in the hands of trusted professionals.
            </p>

            <!-- Expertise List -->
            <div>
              <h4 class="font-bold text-gray-900 mb-3">
                Our Areas of Expertise
              </h4>
              <ul class="space-y-2">
                <li>
                  <strong class="text-gray-900">Business & Management:</strong>
                  MBA graduates and professionals with real-world business
                  insights.
                </li>
                <li>
                  <strong class="text-gray-900">Science & Technology:</strong>
                  Researchers, engineers, and analysts skilled in technical
                  writing and problem-solving.
                </li>
                <li>
                  <strong class="text-gray-900"
                    >Humanities & Social Sciences:</strong
                  >
                  Specialists in history, psychology, sociology, literature, and
                  more.
                </li>
                <li>
                  <strong class="text-gray-900">Law & Legal Studies:</strong>
                  Writers with legal backgrounds providing well-researched
                  academic papers.
                </li>
                <li>
                  <strong class="text-gray-900"
                    >Research & Dissertations:</strong
                  >
                  PhD holders and consultants guiding advanced academic projects
                  with precision.
                </li>
              </ul>
            </div>

            <!-- Why They Stand Out List -->
            <div>
              <h4 class="font-bold text-gray-900 mb-3">
                Why Our Writers Stand Out
              </h4>
              <ul class="space-y-2">
                <li>
                  <strong class="text-gray-900">Qualified Experts:</strong>
                  Every writer undergoes a rigorous vetting process for academic
                  excellence.
                </li>
                <li>
                  <strong class="text-gray-900">Diverse Knowledge:</strong>
                  Covering a wide range of disciplines to meet different
                  learning needs.
                </li>
                <li>
                  <strong class="text-gray-900">Commitment to Quality:</strong>
                  Ensuring originality, accuracy, and adherence to academic
                  standards.
                </li>
                <li>
                  <strong class="text-gray-900">Personalized Approach:</strong>
                  Matching the right expert to every client's specific project.
                </li>
              </ul>
            </div>

            <p class="italic">
              At WordWell Writers, our experts don't just write—they guide,
              mentor, and empower you to achieve academic success with
              confidence.
            </p>

            <button
             @click="router.push('/order')"
              class="bg-[#2c4696] hover:bg-blue-900 text-white font-bold py-4 px-10 rounded transition-colors uppercase text-sm tracking-widest shadow-md"
            >
              Get Started Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Additional Sections What sets us apart -->
  <div class="py-16 bg-white">
    <!-- Section Header -->
    <div class="max-w-7xl mx-auto px-4 mb-12 text-center">
      <h2 class="text-h2 font-bold text-primary-dark mb-4">
        What Sets Us Apart
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We are committed to excellence and integrity in every project we
        undertake.
      </p>
    </div>

    <!-- Carousel Section -->
    <div class="max-w-7xl mx-auto px-4 relative">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="feature in features" :key="feature.id">
          <div class="p-2 h-full w-full">
            <!-- Feature Card -->
            <div
              class="bg-[#f9f7f4] rounded-xl p-8 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <!-- Icon Container -->
              <div class="mb-6 text-[#e86024]">
                <component :is="feature.icon" :size="64" stroke-width="1.5" />
              </div>

              <!-- Title -->
              <h3 class="text-[#2c4696] font-bold text-xl mb-4">
                {{ feature.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 leading-relaxed text-sm">
                {{ feature.text }}
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation class="custom-nav" />
        </template>
      </Carousel>
    </div>
  </div>

  <!-- Commitment to Academic Integrity Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side: Content -->
        <div class="order-2 lg:order-1 space-y-5">
          <span class="text-primary-dark font-semibold text-h3 block">
            Commitment to Academic Integrity
          </span>
          <h2 class="text-h2 font-semibold text-accent leading-tight">
            Upholding the Highest Standards of Honesty!
          </h2>

          <div class="text-gray-700 space-y-6 leading-relaxed">
            <p>
              At WordWell Writers, integrity is at the core of everything we do.
              We believe that true academic success can only be achieved through
              honesty, originality, and responsibility. That's why we are
              dedicated to maintaining the highest standards of academic
              integrity in all our services.
            </p>

            <!-- Integrity List -->
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-gray-700">
                  <strong class="text-gray-900">Original Work:</strong> Every
                  project is written from scratch and thoroughly checked for
                  plagiarism.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-700">
                  <strong class="text-gray-900">Proper Referencing:</strong> We
                  ensure accurate citation and formatting according to academic
                  guidelines.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-700">
                  <strong class="text-gray-900">Ethical Support:</strong> Our
                  services are designed to guide and support learners—not to
                  encourage academic dishonesty.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-700">
                  <strong class="text-gray-900">Confidentiality:</strong> Your
                  personal information and project details are always kept
                  secure and private.
                </span>
              </li>
            </ul>

            <p>
              By partnering with WordWell Writers, you gain access to
              professional support that empowers you to learn, grow, and
              excel—without compromising on integrity.
            </p>

            <!-- CTA Button -->
            <div class="pt-4">
              <button
               @click="router.push('/order')"
                class="bg-accent hover:bg-complementary text-btn text-white py-4 px-10 rounded-btn transition-colors tracking-widest"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="order-1 lg:order-2">
          <!-- Replace with your actual image asset -->
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Team working on integrity puzzles"
            class="w-full h-auto rounded-card object-cover aspect-4/3 lg:aspect-square"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import {
  Goal,
  Clock,
  ShieldCheck,
  Award,
  Eye,
  Lightbulb,
  Users,
} from "@lucide/vue";
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigation function
const navigate = (path) => {
  router.push('/' + path); // Ensure absolute pathing
};


// import { Goal, Eye, ShieldCheck } from "@lucide/vue";

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

const carouselConfig = {
  snapAlign: "start",
  itemsToShow: 1,
  breakpoints: {
    640: {
      itemsToShow: 2,
    },
    1024: {
      itemsToShow: 3,
    },
    1280: {
      itemsToShow: 4,
    },
  },
};
</script>

<style scoped>
/* Customizing the carousel navigation arrows to match your screenshot */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: transparent;
  color: #e86024;
  margin: 0 -20px;
}

:deep(.carousel__icon) {
  width: 40px;
  height: 40px;
}

/* Optional: remove this if you want cards to have different heights based on text */
.carousel__track {
  display: flex !important;
}
.carousel__slide {
  align-items: stretch !important;
  display: flex !important;
}
</style>
