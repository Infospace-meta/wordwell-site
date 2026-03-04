<template>
  <div
    class="max-w-md mx-auto p-10 bg-white rounded-2xl shadow-lg border mt-20"
  >
    <h2 class="text-2xl font-bold mb-4">Complete Your Payment</h2>
    <p class="text-slate-500 mb-6">
      Order #{{ order?.order_number }} - Total: ${{ order?.total_price }}
    </p>

    <!-- PayPal Button Container -->
    <div id="paypal-button-container"></div>

    <div
      v-if="processing"
      class="fixed inset-0 bg-white/80 flex items-center justify-center z-50"
    >
      <p class="animate-pulse font-bold text-indigo-600 text-xl">
        Verifying Transaction...
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { loadScript } from "@paypal/paypal-js";
import api from "@/services/api"; // Your Axios instance
import { useRouter, useRoute } from "vue-router";

/**VARIABLES */
const route = useRoute();
const router = useRouter();
const order = ref(null);
const processing = ref(false);

/**FUNCTIONS */
/**Function to run on load */
onMounted(async () => {
  /**Fetch order details to show price */
  const res = await api.get(`/orders/${route.params.id}`);
  order.value = res.data;

  /**Load PayPal Buttons */
  const paypal = await loadScript({
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
  });

  paypal
    .Buttons({
      createOrder: async () => {
        // Call NestJS to create the PayPal order
        const res = await api.post(`/payments/create/${order.value.id}`);
        return res.id; // The paypal_order_id
      },
      onApprove: async (data) => {
        processing.value = true;
        try {
          /**Call NestJS to capture the payment */
          await api.post(`/payments/capture/${data.orderID}`);
          router.push("/dashboard?status=success");
        } catch (err) {
          alert("Payment verification failed. Contact support.");
        } finally {
          processing.value = false;
        }
      },
    })
    .render("#paypal-button-container");
});
</script>
