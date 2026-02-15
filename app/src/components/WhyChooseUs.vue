<template>
  <section
    class="bg-[#2d3f7b] px-6 md:px-12 lg:px-20 py-20 min-h-screen"
    style="background-image: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 40%);"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex lg:flex-row flex-col gap-12 lg:gap-16">

        <!-- ── Left Text Block ── -->
        <div class="lg:top-4 lg:z-10 lg:sticky lg:w-1/3 lg:h-fit shrink-0">
          <p class="mb-3 font-bold text-[#e8722a] text-[0.7rem] uppercase tracking-widest">
            Why Choose Us
          </p>
          <h2
            class="mb-4 font-extrabold text-white text-3xl leading-snug"
            style="font-family: 'Merriweather', serif;"
          >
            Our Academic Writing Services Online
          </h2>
          <p class="max-w-xs text-white/50 text-sm leading-relaxed">
            Choosing the right writing partner can make all the difference. At WordWell Writers,
            our services are designed to give you reliability, quality, and total peace of mind.
          </p>
          <div class="bg-white mt-5 rounded-full w-10 h-[3px]"></div>
        </div>

        <!-- ── Right Cards Grid ── -->
        <div class="gap-4 grid grid-cols-2 lg:w-2/3">
          <div
            v-for="(card, index) in cards"
            :key="card.title"
            :class="[
              'bg-white/[0.07] border border-white/10 rounded-xl p-7',
              'transition-all duration-300 hover:bg-white/12 hover:-translate-y-1 hover:shadow-xl hover:scale-105',
              card.full ? 'col-span-2' : 'col-span-1'
            ]"
          >
            <div class="flex justify-center items-center bg-[#e8722a]/20 mb-4 rounded-xl w-12 h-12">
              <span v-html="card.icon" />
            </div>
            <p class="mb-2 font-bold text-white text-sm leading-snug" v-html="card.title" />
            <p class="text-white/80 text-xs leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const icon = (path) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
    viewBox="0 0 24 24" stroke="#e8722a" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

const cards = [
  {
    title: 'Expert Academic Writers',
    desc: 'Our team consists of trained, professional writers with advanced degrees in various fields. Whether it’s a simple essay or a complex dissertation, your work is handled by specialists who understand academic standards..',
    full: false,
    icon: icon('<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>'),
  },
  {
    title: '100% Original & Plagiarism-Free',
    desc: 'Every paper is written from scratch and checked with advanced tools.Every paper is written from scratch and checked with advanced plagiarism detection tools to ensure complete originality.',
    full: false,
    icon: icon('<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'),
  },
  {
    title: 'On-Time Delivery — Always',
    desc: 'Deadlines matter. We deliver fast without compromising quality.Deadlines matter. Our academic writing services online are built around fast, timely delivery without compromising quality.',
    full: false,
    icon: icon('<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>'),
  },
  {
    title: 'Secure & Confidential',
    desc: 'All information, files, and payments are encrypted and protected.Your privacy is our priority. All personal information, files, and payments are protected with encrypted systems, ensuring a safe and confidential experience.',
    full: false,
    icon: icon('<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>'),
  },
  {
    title: 'Affordable & Transparent Pricing',
    desc: 'We offer competitive rates with no hidden charges. You get high-quality writing at student-friendly prices.',
    full: false,
    icon: icon('<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'),
  },
  {
    title: 'Free Revisions',
    desc: "Not fully satisfied? We provide free revisions until you're happyNot fully satisfied? We provide free revisions to ensure your paper meets your expectations and academic requirements.",
    full: false,
    icon: icon('<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>'),
  },
  {
    title: 'All Levels & Subjects',
    desc: 'From high school to PhD — we cover all subjects and levels.From high school assignments to PhD research papers, our platform covers all subjects and educational levels.',
    full: false,
    icon: icon('<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'),
  },
  {
    title: '24/7 Customer Support',
    desc: 'Our support team is available around the clock to assist you.Our support team is available around the clock to answer your questions, guide you through the process, and provide updates on your order.',
    full: false,
    icon: icon('<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>'),
  },
]
</script>
