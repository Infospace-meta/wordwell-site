<template>
  <div class="space-y-10">
    <!-- Hero Section -->
    <div class="bg-primary-dark text-white text-center py-16">
      <div class="mx-auto max-w-7xl">
        <p class="text-h2 font-semibold">Contact Us</p>
      </div>
    </div>
    <!-- Map Container -->
    <div class="relative text-right h-150 mx-auto rounded-card max-w-5xl">
      <div class="h-150 overflow-hidden w-full rounded-card">
        <iframe
          class="h-150"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Des%20Moines&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <!-- <a href="https://www.modelsearchengine.com/">onlyfinder</a>
          <br /><a href="https://embed-maps.com/">embed-maps.com</a> -->
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 text-center space-y-5 max-w-5xl mx-auto">
      <div class="space-y-5">
        <p class="text-center text-primary-dark text-h3 font-semibold">
          Physical location
        </p>
        <p class="text-sm text-gray-600 mt-2">123 Academic Ave</p>
        <p class="text-sm text-gray-600 mt-2">Des Moines</p>
      </div>
      <div class="space-y-5">
        <p class="text-center text-primary-dark text-h3 font-semibold">
          Phone Number
        </p>
        <p class="text-sm text-gray-600">+1 (704) 749 834</p>
      </div>
      <div class="space-y-5">
        <p class="text-center text-primary-dark text-h3 font-semibold">
          Email Address
        </p>
        <p class="text-sm text-gray-600">support@wordwellinternational.com</p>
        <p class="text-sm text-gray-600">info@wordwellinternational.com</p>
      </div>
    </div>

    <!-- Contact Form -->
    <!-- TODO: Implement contact form -->

    <!-- Testimonials -->
    <div class="bg-slate-50 py-20">
      <div class="mx-auto max-w-7xl space-y-5">
        <p class="text-center text-h4 text-complementary font-semibold">
          What our clients say
        </p>
        <p class="text-center text-primary-dark text-h3 font-semibold">
          Trusted by Students & Professionals Worldwide!
        </p>
        <Carousel v-bind="carouselConfig">
          <Slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="max-lg:p-4 p-1 h-full">
              <!-- Card Container -->
              <div
                class="bg-white rounded-card p-10 border border-gray-100 text-left h-full flex flex-col"
              >
                <!-- Stars -->
                <div class="flex gap-1 mb-5">
                  <template v-for="i in 5" :key="i">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5"
                      :class="
                        i <= testimonial.rating
                          ? 'text-orange-500'
                          : 'text-gray-300'
                      "
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </template>
                </div>

                <!-- Content -->
                <p class="text-gray-700 leading-relaxed text-body grow">
                  {{ testimonial.text }}
                </p>

                <!-- Footer -->
                <div class="mt-5">
                  <h4 class="text-blue-900 text-small">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-orange-500 text-small mt-1">
                    {{ testimonial.role }}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "WordWell saved my semester! My research paper was flawless, well-cited, and delivered ahead of schedule.",
    name: "Sarah M.",
    role: "MSc Student",
  },
  {
    id: 2,
    rating: 5,
    text: "The team helped me with my dissertation chapter, and the support was outstanding. They made a tough process stress-free.",
    name: "David K.",
    role: "PhD Candidate",
  },
  {
    id: 3,
    rating: 4,
    text: "I used their editing service for my thesis, and the difference was incredible. My supervisor even praised the clarity and flow.",
    name: "Anita P.",
    role: "Graduate Student",
  },
  // Adding duplicates for the carousel demo
  {
    id: 4,
    rating: 5,
    text: "Exceptional quality and attention to detail. I highly recommend them for any academic writing needs.",
    name: "James L.",
    role: "Postgrad",
  },
];

const carouselConfig = {
  // itemsToShow: 1,
  snapAlign: "center",
  // Breakpoints for responsiveness
  breakpoints: {
    700: {
      itemsToShow: 2.2,
      snapAlign: "start",
    },
    1024: {
      itemsToShow: 3,
      snapAlign: "start",
    },
  },
};
</script>
