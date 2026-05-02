<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div
      class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center"
    >
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Final Step</h2>
      <p class="text-slate-500 mb-6">
        Complete payment for Order #{{ order?.order_number }}
      </p>

      <div class="bg-indigo-50 rounded-xl p-6 mb-8">
        <p class="text-sm text-indigo-600 font-medium uppercase tracking-wider">
          Amount Due
        </p>
        <p class="text-4xl font-black text-[#334a97]">
          ${{ order?.total_price }}
        </p>
      </div>

      <button
        @click="startPaystackPayment"
        :disabled="loading"
        class="w-full bg-[#334a97] hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-3"
      >
        <span v-if="!loading">Pay Securely with Card</span>
        <span v-else class="animate-pulse">Redirecting to Paystack...</span>
      </button>

      <p class="text-[10px] text-slate-400 mt-4 italic">
        Secured by Paystack. All major international cards accepted.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/providers/api/axios";
import { toast } from "vue-sonner";

const route = useRoute();
const order = ref(null);
const loading = ref(false);

onMounted(async () => {
  const res = await api.get(`orders/${route.params.id}`);
  order.value = res.data;
});

const startPaystackPayment = async () => {
  try {
    loading.value = true;
    // Call our backend to get the Paystack Hosted URL
    const { data } = await api.post(
      `payments/paystack/initialize/${order.value.id}`,
    );

    // REDIRECT the user to Paystack
    window.location.href = data.authorization_url;
  } catch (err) {
    // alert("Could not initialize payment. Please try again.");
    toast.error("Could not initialize payment. Please try again.");
    loading.value = false;
  }
};
</script>
