<template>
  <section class="order-section bg-gray-50 px-4 py-16 min-h-screen">
    <div class="mx-auto max-w-2xl">

      <!-- Header -->
      <div class="mb-12 text-center">
        <p class="mb-3 font-bold text-blue-800 text-xs uppercase tracking-widest">
          Order Academic Writing Services
        </p>
        <h2 class="mb-4 font-bold text-[#c24a00] md:text-3xl text-4xl">
          Fast, Secure &amp; Easy Ordering for Your<br class="hidden md:block" /> Academic Success!
        </h2>
        <p class="mx-auto max-w-md text-gray-500 text-sm leading-relaxed">
          Placing your order with WordWell Writers is simple, fast, and completely secure. Follow these
          easy steps to get your custom-written paper delivered on time:
        </p>
      </div>

      <!-- Steps Timeline -->
      <div class="relative">
        <!-- Vertical connector line -->
        <div class="top-0 bottom-0 left-1/2 z-0 absolute bg-gray-200 w-px -translate-x-1/2"></div>

        <div
          v-for="(step, index) in steps"
          :key="step.id"
          class="relative flex items-start mb-12 last:mb-0"
          :class="step.side === 'left' ? 'flex-row' : 'flex-row-reverse'"
        >
          <!-- Text Block -->
          <div
            class="z-10 w-5/12"
            :class="step.side === 'left' ? 'text-right pr-6' : 'text-left pl-6'"
          >
            <p class="font-bold text-navy-dark text-base">
              <span class="text-orange-500">{{ step.id }}.</span> {{ step.title }}
            </p>
            <p class="mt-1 text-gray-500 text-sm leading-relaxed">{{ step.description }}</p>
          </div>

          <!-- Icon circle (centered on line) -->
          <div class="z-10 flex justify-center w-2/12">
            <div
              class="flex justify-center items-center bg-white shadow-sm border-2 border-orange-400 rounded-full w-12 h-12"
            >
              <component :is="'span'" class="text-orange-500 text-xl" v-html="step.icon"></component>
            </div>
          </div>

          <!-- Empty spacer -->
          <div class="w-5/12"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    id: 1,
    side: 'left',
    title: 'Select Service Type',
    description: 'Choose from essays, research papers, theses, editing, and more.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>`,
  },
  {
    id: 2,
    side: 'right',
    title: 'Academic Level & Subject',
    description: 'Indicate your level and subject for the most suitable writer.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-3.5" />
    </svg>`,
  },
  {
    id: 3,
    side: 'left',
    title: 'Provide Instructions',
    description: 'Add specific requirements so your paper meets your exact needs.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>`,
  },
  {
    id: 4,
    side: 'right',
    title: 'Upload Files',
    description: 'Attach study materials, rubrics, or references for accurate results.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>`,
  },
  {
    id: 5,
    side: 'left',
    title: 'Choose Deadline',
    description: 'From urgent 24-hour delivery to extended deadlines — we adapt.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`,
  },
  {
    id: 6,
    side: 'right',
    title: 'Additional Options',
    description: 'Request plagiarism reports, preferred writers, or formatting styles.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>`,
  },
  {
    id: 7,
    side: 'left',
    title: 'Secure Payment',
    description: 'Enjoy safe and encrypted transactions when you place your order.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>`,
  },
]
</script>

<style scoped>
.text-navy {
  color: #1a2e52;
}
.text-navy-dark {
  color: #1a2e52;
}
</style>
