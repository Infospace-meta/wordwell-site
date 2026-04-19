<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div
      class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
    >
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-slate-800">Final Step: Payment</h2>
        <p class="text-slate-500 mt-2">Order #{{ order?.order_number }}</p>
      </div>

      <!-- Pricing Breakdown -->
      <div class="bg-slate-50 rounded-xl p-4 mb-8 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-slate-600">Service:</span>
          <span class="font-medium text-slate-800">{{
            order?.service_type
          }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg border-t pt-3">
          <span>Total Amount:</span>
          <span class="text-indigo-600">${{ order?.total_price }}</span>
        </div>
      </div>

      <!-- PayPal Button -->
      <div id="paypal-button-container"></div>

      <!-- Loading Overlay -->
      <div v-if="verifying" class="text-center mt-4">
        <p class="text-indigo-600 font-bold animate-pulse text-sm">
          🚀 Verifying payment with WordWell...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { loadScript } from "@paypal/paypal-js";
import { useOrdersStore } from "@/store/order.store";
import api from "@/providers/api/axios";
import { toast } from "vue-sonner";

/**VARIABLES */
const route = useRoute();
const router = useRouter();
const order = ref(null);
const verifying = ref(false);

/**FUNCTIONS */
onMounted(async () => {
  /**Fetch the specific order details */
  try {
    const res = await api.get(`orders/${route.params.id}`);
    order.value = res.data;
  } catch (err) {
    router.push("/order");
  }

  /**Load PayPal SDK */
  const paypal = await loadScript({
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
  });

  /**Render Buttons */
  paypal
    .Buttons({
      createOrder: async () => {
        /**Call your NestJS backend to initialize the PayPal transaction */
        const res = await api.post(`payments/create/${order.value.id}`);
        return res.data.id; // Returns the PayPal Order ID
      },
      onApprove: async (data) => {
        verifying.value = true;
        try {
          /**Call your NestJS backend to capture and verify the money */
          await api.post(`payments/capture/${data.orderID}`);
          // alert("Payment Successful!");
          toast.success("Payment verified! Redirecting to dashboard...");
          
          router.push("/dashboard");
        } catch (err) {
          // alert("Payment verification failed. Please contact support.");
          toast.error("Payment verification failed. Please contact support.");
        } finally {
          verifying.value = false;
        }
      },
      onError: (err) => {
        // console.error("PayPal Error:", err);
        // alert("An error occurred with PayPal. Please try again.");
        toast.error("An error occurred with PayPal. Please try again.");
      },
    })
    .render("#paypal-button-container");
});
</script>
