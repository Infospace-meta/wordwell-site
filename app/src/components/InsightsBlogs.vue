<template>
    <!-- Privacy & Security Banner section-->
    <section class="bg-[#f0f4ff] px-6 md:px-12 lg:px-20 py-14">
      <div class="mx-auto max-w-4xl">
        <div
          class="relative bg-white shadow-sm px-10 py-10 border border-[#e2e8f7] rounded-2xl overflow-hidden"
        >

          <!-- Decorative background glow -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="-top-10 -left-10 absolute bg-[#e8722a]/5 blur-2xl rounded-full w-40 h-40"></div>
            <div class="-right-10 -bottom-10 absolute bg-[#2d3f7b]/5 blur-2xl rounded-full w-40 h-40"></div>
          </div>

          <!-- Left accent bar -->
          <div class="top-0 bottom-0 left-0 absolute bg-linear-to-b from-[#e8722a] to-[#2d3f7b] rounded-l-2xl w-1"></div>

          <div class="relative flex md:flex-row flex-col items-center gap-8">

            <!-- Icon block -->
            <div class="flex justify-center items-center bg-linear-to-br from-[#e8722a]/15 to-[#e8722a]/5 shadow-inner border border-[#e8722a]/20 rounded-2xl w-16 h-16 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#e8722a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
                <rect x="14" y="11" width="8" height="8" rx="2" ry="2" fill="none"/>
                <path d="M16 15h.01M18 15h.01M16 17h.01M18 17h.01"/>
              </svg>
            </div>

            <!-- Text -->
            <div class="flex-1 md:text-left text-center">
              <div class="flex justify-center md:justify-start items-center gap-2 mb-2">
                <h3
                  class="font-extrabold text-[#2d3f7b] text-lg"
                  style="font-family: 'Merriweather', serif;"
                >
                  Privacy &amp; Security
                </h3>
                <span class="inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-full font-bold text-[0.6rem] text-emerald-600 uppercase tracking-wider">
                  <span class="inline-block bg-emerald-500 rounded-full w-1.5 h-1.5 animate-pulse"></span>
                  Protected
                </span>
              </div>
              <p class="max-w-2xl text-gray-500 text-sm leading-relaxed">
                Your personal information is always kept private and secure. We do not share your
                details with anyone.
                <span class="font-semibold text-[#2d3f7b]">Important:</span>
                Please avoid adding any personal data in the text area of the order form.
                Only include details related to your academic task.
              </p>
            </div>

            <!-- Shield badge -->
            <div class="hidden lg:flex flex-col items-center gap-1 shrink-0">
              <div class="flex justify-center items-center bg-[#2d3f7b]/8 border border-[#2d3f7b]/10 rounded-full w-14 h-14">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#2d3f7b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <span class="font-bold text-[#2d3f7b]/50 text-[0.6rem] uppercase tracking-widest">SSL Secured</span>
            </div>

          </div>
        </div>
      </div>
    </section>



  <section
    class="bg-[#f0f4ff] px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
    style="background-image: radial-gradient(circle at 90% 50%, rgba(255,255,255,0.05) 0%, transparent 60%);"
  >
    <div class="mx-auto max-w-7xl">

      <!-- ── Header ── -->
      <div class="flex md:flex-row flex-col md:justify-between md:items-end gap-4 mb-10">
        <div>
          <p class="mb-2 font-bold text-[#e8722a] text-[0.7rem] uppercase tracking-widest">
            Insights &amp; Blogs
          </p>
          <h2
            class="font-extrabold text-[#2d3f7b]text-3xl md:text-4xl leading-tight"
            style="font-family: 'Merriweather', serif;"
          >
            Your Go-To Resource for <br class="hidden md:block" />Academic Success
          </h2>
        </div>
        <a
          href="#"
          class="inline-flex items-center self-start md:self-auto gap-2 hover:bg-[#e8722a] px-5 py-2 border border-[#e8722a]/40 rounded-full font-semibold text-[#e8722a] hover:text-white text-sm whitespace-nowrap transition-all duration-300"
        >
          View All Posts
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <!-- ── Cards Grid ── -->
      <div class="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(post, index) in posts"
          :key="index"
          class="group flex flex-col bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all hover:-translate-y-2 duration-300 cursor-pointer"
        >
          <!-- Animated top bar -->
          <div class="bg-[#e8722a] w-full h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

          <!-- Card Body -->
          <div class="flex flex-col flex-1 p-6">

            <!-- Category Tag -->
            <span class="inline-block bg-[#e8722a]/10 mb-4 px-3 py-1 rounded-full w-fit font-bold text-[#e8722a] text-[0.62rem] uppercase tracking-widest">
              {{ post.category }}
            </span>

            <!-- Title (original language kept) -->
            <h3
              class="flex-1 mb-4 font-bold text-[#2d3f7b] text-[0.95rem] group-hover:text-[#e8722a] leading-snug transition-colors duration-300"
              style="font-family: 'Merriweather', serif;"
            >
              {{ post.title }}
            </h3>

            <!-- Footer -->
            <div class="flex justify-between items-center pt-4 border-gray-100 border-t">
              <span class="text-[0.68rem] text-gray-400">{{ post.date }}</span>
              <a
                href="#"
                class="inline-flex items-center gap-1 font-bold text-[#2d3f7b] group-hover:text-[#e8722a] text-xs transition-colors duration-300"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    category: 'Casino',
    title: 'Zažijte vzrušení Ludios Casino: Bonus 2 750 € & 9 000+ her',
   
  },
  {
    category: 'Sports Betting',
    title: 'Ervaar de Ultieme Sensatie bij Casinolab: Een Hub voor Sports Betting en Online Casino Games',
   
  },
  {
    category: 'Strategy',
    title: 'Experience the Thrill of 30Bet: Where Luck Meets Strategy',
   
  },
  {
    category: 'Casino',
    title: 'BDM Bet Login: Descubre el Mundo de Juegos de Casino de Alta Octanaje',
   
  },
]
</script>