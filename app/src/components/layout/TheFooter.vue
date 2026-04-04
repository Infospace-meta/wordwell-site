<template>
  <footer class="bg-bg border-t border-border antialiased">
    <!-- Top Section -->
    <div class="mx-auto px-4 py-16 max-w-7xl">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 space-y-10 xl:space-y-0 xl:gap-8 max-lg:text-center"
      >
        <!-- Column 1: Academic Writing -->
        <div class="xl:col-span-2">
          <h4 class="text-h3 text-primary mb-6">Academic Writing</h4>
          <ul class="space-y-3">
            <li v-for="link in academicLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-small text-text-muted hover:text-primary transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Assignment Help -->
        <div class="xl:col-span-2">
          <h4 class="text-h3 text-primary mb-6">Assignment Help</h4>
          <ul class="space-y-3">
            <li v-for="link in assignmentLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-small text-text-muted hover:text-primary transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact Information -->
        <div class="xl:col-span-2">
          <h4 class="text-h3 text-primary mb-6">Contact Information</h4>
          <div class="space-y-4 text-small">
            <p class="text-text-muted tracking-tight">
              Serving Clients Worldwide
            </p>
            <p>
              <span class="text-text-muted">Phone:</span>
              <a href="tel:+15633433372" class="text-primary ml-1"
                >+1 (563) 343-3372</a
              >
            </p>
            <p>
              <span class="text-text-muted">WhatsApp:</span>
              <a href="#" class="text-primary ml-1">+1 (563) 343-3372</a>
            </p>
            <div class="flex flex-col">
              <span class="text-text-muted">Email:</span>
              <a href="mailto:support@wordwellwriters.com" class="text-primary"
                >support@wordwellwriters.com</a
              >
            </div>
            <p>
              <span class="text-text-muted">Live Chat:</span>
              <span class="text-primary ml-1">Available 24/7</span>
            </p>
          </div>
        </div>

        <!-- Column 4: Brand & Text -->
        <div class="space-y-6 col-span-1 xl:col-span-4 w-full">
          <div class="flex items-center">
            <!-- WordWell Logo SVG -->
            <img
              src="@/assets/Logo.png"
              alt="WordWell Logo"
              class="mr-3 w-auto h-14"
            />
          </div>
          <p class="text-small text-text-muted leading-relaxed text-wrap">
            We your trusted academic partner, delivering original, high-quality
            essays, research papers & dissertations. With expert writers, fast
            turnaround, & a commitment to excellence, we help students &
            professionals achieve their academic goals with confidence.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Bar Section -->
    <div class="bg-surface py-6 border-t border-border">
      <div
        class="mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <!-- Payments (Left) -->
        <div class="flex items-center gap-6 grayscale opacity-60">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            class="h-4"
            alt="PayPal"
          />
        </div>

        <!-- Copyright (Center) -->
        <div class="text-small text-text-muted text-center font-medium">
          © 2026 - WordWell Writers. All Rights Reserved. Developed by
          <span
            ><a
              href="https://developersmania.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
              >Developers Mania</a
            ></span
          >.
        </div>

        <!-- Socials (Right) -->
        <div class="flex items-center gap-2">
          <a
            v-for="s in socialLinks"
            :key="s.name"
            :href="s.href"
            class="p-1.5 rounded text-accent hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path :d="s.path" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = 2026;

const academicLinks = [
  { name: "Essay Writing", href: "#" },
  { name: "Research Papers", href: "#" },
  { name: "Thesis & Dissertation Help", href: "#" },
  { name: "Literature Reviews", href: "#" },
  { name: "Annotated Bibliographies", href: "#" },
  { name: "Academic Presentations", href: "#" },
];

const assignmentLinks = [
  { name: "Coursework Help", href: "#" },
  { name: "Case Study Help", href: "#" },
  { name: "Lab Report Writing", href: "#" },
  { name: "Programming Assignment Help", href: "#" },
  { name: "Take My Online Class", href: "#" },
  { name: "Take My Online Exam", href: "#" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    href: "#",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    name: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 0C8.741 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.335.935 20.665.492 19.875.188c-.767-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.055 1.17-.249 1.805-.415 2.227-.216.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.055-1.805-.249-2.227-.415-.562-.216-.96-.477-1.382-.896-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.055-1.17.249-1.805.415-2.227.216-.562.477-.96.896-1.382.419-.419.818-.679 1.381-.896.422-.164 1.056-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "X",
    href: "#",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
];
</script>
-
