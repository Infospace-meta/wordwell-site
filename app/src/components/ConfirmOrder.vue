<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50">
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"
      ></div>
      <h2 class="text-xl font-semibold text-slate-800">
        Finalizing your order...
      </h2>
      <p class="text-slate-500">Please do not close this window.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useOrdersStore } from "../store/order.store";
import { supabase } from "../helpers/supabase";

/**VARIABLES */
const router = useRouter();
const ordersStore = useOrdersStore();

/**FUNCTIONS */
onMounted(async () => {
  /**Supabase automatically sets the session upon redirecting from emal */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && ordersStore.pendingOrder) {
    const payload = {
      ...ordersStore.pendingOrder,
      user_id: user.id,
    };

    const { data, error } = await ordersStore.addOrder(payload);

    if (!error) {
      ordersStore.clearPendingOrder();
      /**Redirect to order page - make it dashboard */
      router.push("/order");
    } else {
      alert("Something went wrong finalizing your order.");
      router.push("/order");
    }
  } else {
    router.push("/order");
  }
});
</script>
