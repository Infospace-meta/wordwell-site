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
import { useAuthStore } from "../store";

/**VARIABLES */
const router = useRouter();
const ordersStore = useOrdersStore();
const authStore = useAuthStore();

/**FUNCTIONS */
onMounted(async () => {
  /**Fetch user */
  await authStore.fetchUser();

  console.log("Actual Data:", ordersStore.pendingOrder);

  if (authStore.user && ordersStore.pendingOrder) {
    const payload = {
      ...ordersStore.pendingOrder,
    };

    /**Post order to api */
    const { data, error } = await ordersStore.addOrder(payload);

    if (!error) {
      /**REFRESH SESSION: This pulls the new 'app_metadata' into the local JWT */
      await authStore.refreshSession();

      ordersStore.clearPendingOrder();

      /**Success logic */
      alert("Order created successfully! Order #" + data.order_number);

      /**Redirect to payment (data.id is the newly created Order UUID) */
      router.push({ name: "payment", params: { id: data.id } });

      /**Redirect to dashboard */
      // router.push("/dashboard");
    } else {
      alert("Something went wrong finalizing your order.");
      // router.push("/order");
    }
  } else {
    router.push("/order");
  }
});
</script>
