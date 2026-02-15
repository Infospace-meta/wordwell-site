<template>
  <footer class="bg-gray-100 text-gray-700">
    <!-- Main content area -->
    <div class="mx-auto px-6 lg:px-12 py-16 max-w-7xl">
      <div class="gap-10 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <!-- Column 1: Academic Writing -->
        <div>
          <h3 class="relative mb-8 font-bold text-gray-900 text-lg">
            Academic Writing
            <div class="-bottom-2 left-0 absolute bg-orange-500 w-0 group-hover:w-full h-0.5 transition-all duration-300"></div>
          </h3>
          <ul class="space-y-4">
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Essay Writing</a></li>
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Research Papers</a></li>
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Thesis & Dissertation Help</a></li>
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Literature Reviews</a></li>
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Annotated Bibliographies</a></li>
            <li><a href="#" class="inline-block text-gray-700 hover:text-orange-500 hover:scale-105 transition-all hover:translate-x-2 duration-300">Academic Presentations</a></li>
          </ul>
        </div>

        <!-- Column 2: Assignment Help -->
        <div>
          <h3 class="mb-6 font-bold text-blue-900 text-base">Assignment Help</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Coursework Help</a></li>
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Case Study Help</a></li>
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Lab Report Writing</a></li>
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Programming Assignment Help</a></li>
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Take My Online Class</a></li>
            <li><a href="#" class="text-blue-700 hover:text-orange-500 transition-colors">Take My Online Exam</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact Information -->
        <div>
          <h3 class="mb-6 font-bold text-blue-900 text-base">Contact Information</h3>
          <div class="space-y-3 text-sm">
            <p class="font-semibold text-blue-900">Serving Clients Worldwide</p>
            <p>Phone: <a href="tel:+15633433372" class="text-blue-700 hover:text-orange-500">+1 (563) 343-3372</a></p>
            <p>Email: <a href="mailto:support@wordwellwriters.com" class="text-blue-700 hover:text-orange-500">support@wordwellwriters.com</a></p>
            <p class="font-medium">Live Chat: Available 24/7</p>
          </div>
        </div>

        <!-- Column 4 & 5: Logo and description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <img src="/wordwell-logo.png" alt="WordWell Writers" class="w-auto h-12" />
            
          </div>
          <p class="max-w-md text-gray-600 text-sm leading-relaxed">
            We are your trusted academic partner, delivering original, high-quality essays, research papers & dissertations. With expert writers, fast turnaround, & a commitment to excellence, we help students & professionals achieve their academic goals with confidence.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bg-amber-50/80 border-amber-100 border-t">
      <div class="flex md:flex-row flex-col justify-between items-center gap-6 mx-auto px-6 lg:px-12 py-6 max-w-7xl">
        <!-- Left: WhatsApp CTA + Payment icons -->
        <div class="flex sm:flex-row flex-col items-center gap-4">
          <a href="https://wa.me/15633433372" class="flex items-center gap-2 font-medium text-green-600 hover:text-green-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Talk to a Writing Expert
          </a>
          <div class="flex items-center gap-3">
            <span class="text-gray-400 text-xs">VISA</span>
            <span class="text-gray-400 text-xs">Amex</span>
            <span class="text-gray-400 text-xs">Mastercard</span>
            <span class="text-gray-400 text-xs">PayPal</span>
          </div>
        </div>

        <!-- Center: Copyright -->
        <p class="text-gray-500 text-sm text-center">
          © 2026 - WordWell Writers. All Rights Reserved. Designed by CubiKode
        </p>

        <!-- Right: Social icons -->
        <div class="flex items-center gap-3">
          <a href="https://wa.me/15633433372" class="flex justify-center items-center bg-orange-500 hover:bg-orange-600 rounded-full w-9 h-9 text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="https://web.facebook.com/wordwellintl?_rdc=1&_rdr#" class="flex justify-center items-center bg-orange-500 hover:bg-orange-600 rounded-full w-9 h-9 text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/wordwellintl/" class="flex justify-center items-center bg-orange-500 hover:bg-orange-600 rounded-full w-9 h-9 text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" class="flex justify-center items-center bg-orange-500 hover:bg-orange-600 rounded-full w-9 h-9 text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="flex justify-center items-center bg-orange-500 hover:bg-orange-600 rounded-full w-9 h-9 text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Floating chat button -->
    <a href="https://wa.me/15633433372" class="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-orange-500 hover:bg-orange-600 shadow-lg rounded-full w-14 h-14 text-white hover:scale-110 transition-all">
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      </svg>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
