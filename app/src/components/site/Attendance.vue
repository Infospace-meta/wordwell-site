<template>
  <div class="bg-surface min-h-screen text-gray-800">
    <!-- SECTION 1: Intro Hero -->
    <section class="py-16 bg-white">
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span class="text-primary-dark font-semibold text-h3 mb-2 block"
            >Assignment & Homework Help Services</span
          >
          <h1 class="text-h2 font-semibold text-accent leading-tight mb-6">
            Reliable Support for Every Assignment, Homework & Online Class!
          </h1>
          <div class="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              Managing multiple assignments, balancing homework with personal
              commitments, and keeping up with strict deadlines can be
              overwhelming for many students. That’s where WordWell Writers
              comes in. We provide comprehensive assignment and homework help
              services designed to ease your academic workload and give you the
              confidence to succeed.
            </p>
            <p>
              Whether it’s writing an essay, completing a research project,
              solving complex problems, preparing lab reports, or even handling
              online classes and exams, our team of qualified writers and
              subject experts is ready to assist. Every project is completed
              with careful research, accurate formatting, and plagiarism-free
              content.
            </p>
          </div>
          <button
          @click="router.push('/order')"
            class="bg-primary-dark hover:bg-primary text-white py-3 px-10 rounded-btn transition-all text-button tracking-widest"
          >
          
            Get a Free Quote
          </button>
        </div>
        <div class="flex justify-center">
          <!-- Illustration matching the image -->
          <img
            src="https://img.freepik.com/free-vector/online-education-concept-illustration_114360-1073.jpg"
            alt="Assignment Help Illustration"
            class="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>

    <!-- SECTION 2: Dark Blue Banner -->
    <section class="bg-primary-dark py-16 text-center text-white">
      <div class="max-w-5xl mx-auto px-4">
        <p
          class="text-small uppercase tracking-widest mb-4 flex items-center justify-center gap-2"
        >
          🎓 Assignment & Homework Help You Can Trust
        </p>
        <h2 class="text-h2 font-semibold text-accent mb-6">
          Comprehensive Student Writing Support!
        </h2>
        <p class="text-white leading-relaxed">
          We are the trusted choice for students who need top-notch assignment
          and homework help. Our team of subject-specialist writers delivers
          original, well-researched, and expertly formatted work, even under
          tight deadlines. With fast turnaround, plagiarism-free guarantees,
          24/7 support, and affordable student-friendly pricing, we provide the
          most reliable academic assistance.
        </p>
      </div>
    </section>

    <!-- SECTION 3: Detailed Services List (Nested Data) -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div
          class="bg-white rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <!-- Image Column -->
          <div class="lg:col-span-5 relative min-h-100">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
              alt="Happy University Students"
              class="absolute inset-0 w-full h-full object-cover rounded-card"
            />
          </div>

          <!-- Content Column -->
          <div class="lg:col-span-7">
            <span class="text-primary-dark font-semibold text-h3 mb-2 block"
              >Our Key Assignment & Homework Help Services</span
            >
            <h2 class="text-h2 font-semibold text-accent mb-6 leading-tight">
              Comprehensive Support For Assignments, Homework & Online Academic
              Tasks
            </h2>
            <p class="text-gray-600 mb-8">
              We provide top-quality assignment and homework help services
              designed to help students manage their academic workload
              efficiently. Our expert writers deliver original work, ensuring
              accuracy, timely delivery, and high grades.
            </p>

            <!-- NESTED DYNAMIC LIST -->
            <div class="space-y-8">
              <div
                v-for="category in nestedServices"
                :key="category.groupTitle"
              >
                <h4 class="font-semibold text-h3 mb-3">
                  {{ category.groupTitle }}
                </h4>
                <ul class="space-y-3 ml-4">
                  <li
                    v-for="item in category.items"
                    :key="item.title"
                    class="text-gray-700"
                  >
                    <strong class="text-gray-900">{{ item.title }} –</strong>
                    {{ item.description }}
                  </li>
                </ul>
              </div>
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

    <!-- SECTION 4: Info Card Section (Dynamic Who, What, Why) -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="section in infoCardSections"
          :key="section.title"
          class="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 class="text-accent font-bold text-h3 mb-6">
            {{ section.title }}
          </h3>
          <p class="text-gray-600 mb-6 font-medium">{{ section.intro }}</p>
          <ul class="space-y-4 text-gray-700">
            <li v-for="item in section.items" :key="item.label">
              <strong class="text-gray-900 block md:inline"
                >{{ item.label }} –</strong
              >
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

const router = useRouter();

// Navigation function
const navigate = (path) => {
  router.push('/' + path); // Ensure absolute pathing
};

// Data for Section 3: Nested Categories from the image
const nestedServices = [
  {
    groupTitle: "Assignment Help",
    items: [
      {
        title: "Programming Assignment Help",
        description: "Professional solutions for coding and programming tasks.",
      },
      {
        title: "Assessment Help",
        description:
          "Assistance with quizzes, tests, and academic assessments.",
      },
      {
        title: "Urgent Assignment Help",
        description: "Quick turnaround for last-minute assignments.",
      },
      {
        title: "Do My Assignment",
        description:
          "Complete assignments handled professionally from start to finish.",
      },
    ],
  },
  {
    groupTitle: "Homework Help",
    items: [
      {
        title: "College Homework Help",
        description: "Expert assistance for all college-level subjects.",
      },
      {
        title: "Do My Homework",
        description: "Full support for daily homework assignments.",
      },
      {
        title: "Pay Someone to Do My Homework",
        description: "Reliable and confidential homework services.",
      },
    ],
  },
  {
    groupTitle: "Online Class Support",
    items: [
      {
        title: "Take My Online Class",
        description: "Assistance with completing online course requirements.",
      },
      {
        title: "Take My Online Exam",
        description: "Secure, reliable support for online exams.",
      },
    ],
  },
  {
    groupTitle: "Problem Solving & Writing Services",
    items: [
      {
        title: "Problem Solving Help",
        description: "Step-by-step solutions for complex academic problems.",
      },
      {
        title: "Ghostwriting Services",
        description:
          "Confidential, professional writing for all academic needs.",
      },
    ],
  },
];

// Data for Section 4: Info Cards
const infoCardSections = [
  {
    title: "Who This Service Is For",
    intro:
      "Our Assignment & Homework Help Services are ideal for students who need reliable academic support:",
    items: [
      {
        label: "Undergraduate Students",
        content: "Assistance with assignments, homework, and coursework.",
      },
      {
        label: "Graduate Students",
        content: "Support for research-based assignments, projects, and exams.",
      },
      {
        label: "ESL Students",
        content:
          "Help with understanding and completing academic tasks in English.",
      },
      {
        label: "Busy Professionals",
        content: "Managing coursework alongside jobs or personal commitments.",
      },
      {
        label: "Tight Deadlines",
        content: "Quick, high-quality support for urgent tasks.",
      },
    ],
  },
  {
    title: "What's Included",
    intro:
      "Each service is designed to provide complete, hassle-free academic assistance:",
    items: [
      {
        label: "Custom Solutions",
        content: "Tailored assignments written from scratch.",
      },
      {
        label: "Research & Analysis",
        content: "Comprehensive research for data-driven results.",
      },
      {
        label: "Formatting & Citations",
        content: "Proper APA, MLA, Chicago, or Harvard styles.",
      },
      {
        label: "Plagiarism-Free",
        content: "100% original content verified for authenticity.",
      },
      {
        label: "24/7 Support",
        content: "Ongoing assistance whenever you need guidance.",
      },
    ],
  },
  {
    title: "What Sets Us Apart",
    intro:
      "We combine expertise, reliability, and affordability to help you succeed:",
    items: [
      {
        label: "Expert Writers",
        content: "Professionals with experience across multiple disciplines.",
      },
      {
        label: "Original Work",
        content: "All assignments are unique and plagiarism-free.",
      },
      {
        label: "Fast Turnaround",
        content: "Quick delivery even for urgent assignments.",
      },
      {
        label: "Affordable Pricing",
        content: "Student-friendly rates with no hidden fees.",
      },
      {
        label: "Confidential & Secure",
        content: "Your personal information is fully protected.",
      },
    ],
  },
];
</script>

<style scoped>
/* Scoped styles for precise brand color matching */
.text-brand-blue {
  color: #2c4696;
}
.text-brand-orange {
  color: #e86024;
}
.bg-brand-blue {
  background-color: #2c4696;
}
.bg-brand-orange {
  background-color: #e86024;
}
</style>
