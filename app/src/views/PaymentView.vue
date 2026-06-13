<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <!-- Loading State while fetching Order Details from your DB -->
    <div v-if="fetchingOrder" class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#334a97] mx-auto"
      ></div>
      <p class="mt-4 text-gray-500">Loading order details...</p>
    </div>

    <!-- Main Payment Card -->
    <div
      v-else
      class="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
    >
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Complete Payment</h2>
        <p class="text-gray-500 text-sm">Order #{{ order?.order_number }}</p>
      </div>

      <!-- Pricing Summary -->
      <div class="bg-gray-50 rounded-2xl p-5 mb-8">
        <div class="flex justify-between items-center border-t pt-2 mt-2">
          <span class="text-gray-800 font-bold">Total Amount</span>
          <span class="text-2xl font-black text-[#334a97]"
            >${{ order?.total_price }}</span
          >
        </div>
      </div>

      <!-- THE STRIPE TRIGGER BUTTON -->
      <button
        @click="startStripePayment"
        :disabled="loading"
        class="w-full bg-[#334a97] hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-3 disabled:bg-gray-400"
      >
        <span v-if="!loading">Pay Securely with Stripe</span>
        <svg v-else class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </button>

      <p class="text-[10px] text-center text-slate-400 mt-6">
        Payments are processed securely by Stripe. We do not store your card
        details.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/providers/api/axios"; // Your Axios helper

/**VARIABLES */
const route = useRoute();
const router = useRouter();
const order = ref(null);
const fetchingOrder = ref(true);
const loading = ref(false);

/**FUNCTIONS */
/**
 * 1. On Mount, fetch the order from your NestJS backend
 * to show the user the correct price.
 */
onMounted(async () => {
  try {
    const orderId = route.params.id; // From the URL: /order/:id/pay
    const { data } = await api.get(`orders/${orderId}`);   
    order.value = data;
  } catch (err) {
    console.error("Order fetch failed", err);
    router.push("/order"); // Redirect back if order doesn't exist
  } finally {
    fetchingOrder.value = false;
  }
});

/**
 * 2. This function calls NestJS to get the Stripe URL, then redirects the browser.
 */
const startStripePayment = async () => {
  try {
    loading.value = true;

    /**Call your NestJS Controller endpoint */
    const { data } = await api.post(
      `payments/stripe/create-session/${order.value.id}`,
    );

    /**Redirect the browser to Stripe's ultra-secure hosted checkout */
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error("Stripe URL not returned from server");
    }
  } catch (err) {
    console.error("Stripe initialization error", err);
    alert(
      "Payment could not be initialized. Please try again or contact support.",
    );
  } finally {
    loading.value = false;
  }
};
</script>
