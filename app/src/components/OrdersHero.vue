<template>
  <div class="z-5 relative bg-linear-to-r from-[#3c5593] to-[#2f4a8a] -mt-4 px-4 py-40 text-white">
    <!-- LEFT SIDE -->
    <div class="mx-auto max-w-6xl">
      <div class="items-center gap-2 grid grid-cols-1 lg:grid-cols-2">
            
        <div class="-ml-8">
          <h1 class="font-semibold text-5xl md:text-6xl leading-tight">
            Place Your Order <br />
            in Just a Few <br />
            <span class="text-orange-500">Simple Steps</span>
          </h1>
        </div>

        <!-- RIGHT SIDE -->
        <div class="ml-15">
          <!-- Description -->
          <p class="mb-10 max-w-lg text-blue-100 text-lg leading-relaxed">
            Getting started with WordWell Writers is quick, easy, and secure.
            Our ordering process is designed to save you time while ensuring
            we deliver high-quality, customized work.
          </p>

          <!-- CTA Button -->
          <div class="flex flex-wrap gap-4">
            <button class="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full font-semibold transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347"/>
              </svg>
              GET HELP OVER WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Curve -->
    <div class="bottom-0 left-0 absolute w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 150" class="w-full h-24" preserveAspectRatio="none">
        <path fill="#f3f4f6"
          d="M0,80 C360,140 1080,0 1440,80 L1440,150 L0,150 Z">
        </path>
      </svg>
    </div>
  </div>

  <!-- Slot for Content -->
  <div class="bg-gray-50 px-4 py-12">
    <div class="mx-auto max-w-4xl">
      <div class="mb-8 text-center">
        <h2 class="mb-3 font-bold text-gray-900 text-3xl">Place Your Order</h2>
        <p class="text-gray-600 text-lg">Fill in the details below to get started with your academic project</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrdersHero'
}
</script>

