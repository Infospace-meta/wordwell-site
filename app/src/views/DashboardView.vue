<template>
  <div class="min-h-screen bg-slate-50 pb-12">
    <!-- Top Navigation / Header -->
    <header
      class="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10"
    >
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold text-slate-800">My Learning Dashboard</h1>
        <div class="flex items-center gap-4">
          <router-link
            to="/order"
            class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition"
          >
            + New Order
          </router-link>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 mt-8">
      <!-- Welcome & Stats -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-slate-800">
          Welcome back, {{ authStore.profile?.full_name }}!
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div
            class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <p class="text-slate-500 text-sm font-medium">Active Orders</p>
            <p class="text-3xl font-bold text-indigo-600">
              {{ activeOrdersCount }}
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <p class="text-slate-500 text-sm font-medium">Completed</p>
            <p class="text-3xl font-bold text-emerald-600">
              {{ completedOrdersCount }}
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <p class="text-slate-500 text-sm font-medium">Pending Payment</p>
            <p class="text-3xl font-bold text-amber-500">
              {{ pendingPaymentCount }}
            </p>
          </div>
        </div>
      </section>

      <!-- Orders List -->
      <section>
        <div class="flex justify-between items-end mb-6">
          <h3 class="text-lg font-bold text-slate-800">Order History</h3>
          <button
            @click="ordersStore.fetchUserOrders"
            class="text-sm text-indigo-600 hover:underline"
          >
            Refresh List
          </button>
        </div>

        <!-- Empty State -->
        <div
          v-if="ordersStore.orders.length === 0 && !ordersStore.loading"
          class="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center"
        >
          <div
            class="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-slate-800">No orders found</h4>
          <p class="text-slate-500 mt-1 mb-6">
            Ready to ace your next assignment?
          </p>
          <router-link
            to="/order"
            class="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200"
            >Get Started Now</router-link
          >
        </div>

        <!-- Orders Table -->
        <div
          v-else
          class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
        >
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider"
              >
                <th class="px-6 py-4 font-semibold">Order</th>
                <th class="px-6 py-4 font-semibold">Subject & Service</th>
                <th class="px-6 py-4 font-semibold">Deadline</th>
                <th class="px-6 py-4 font-semibold">Status</th>
                <th class="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="order in ordersStore.orders"
                :key="order.id"
                class="hover:bg-slate-50 transition"
              >
                <td class="px-6 py-4 font-bold text-slate-700">
                  #{{ order.order_number }}
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm font-semibold text-slate-800">
                    {{ order.subject }}
                  </p>
                  <p class="text-xs text-slate-500">
                    {{ order.service_type }} · {{ order.pages }} pages
                  </p>
                </td>
                <td class="px-6 py-4 text-sm text-slate-600">
                  {{ formatDate(order.deadline) }}
                </td>
                <td class="px-6 py-4">
                  <span
                    :class="getStatusClasses(order.status)"
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter"
                  >
                    {{ order.status.replace("_", " ") }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <!-- Contextual Actions -->
                  <router-link
                    v-if="order.status === 'PENDING_PAYMENT'"
                    :to="`/order/${order.id}/pay`"
                    class="text-amber-600 font-bold text-sm hover:underline"
                  >
                    Pay Now
                  </router-link>
                  <button
                    v-else-if="order.status === 'COMPLETED'"
                    @click="handleDownload(order)"
                    class="text-emerald-600 font-bold text-sm hover:underline"
                  >
                    Download
                  </button>
                  <span v-else class="text-slate-400 text-sm">In Review</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useOrdersStore, useAuthStore } from "../store";
import { supabase } from "../helpers/supabase";

/**VARIABLES */
const ordersStore = useOrdersStore();
const authStore = useAuthStore();

/**FUNCTIONS */
onMounted(async () => {
  await authStore.fetchUser();
  await ordersStore.fetchUserOrders();
  console.log(ordersStore.orders);
});

/** Computed Stats */
const activeOrdersCount = computed(
  () =>
    ordersStore.orders.filter((o) =>
      ["PAID", "IN_PROGRESS", "REVISION"].includes(o.status),
    ).length,
);
const completedOrdersCount = computed(
  () => ordersStore.orders.filter((o) => o.status === "COMPLETED").length,
);
const pendingPaymentCount = computed(
  () => ordersStore.orders.filter((o) => o.status === "PENDING_PAYMENT").length,
);

/** Helpers */
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusClasses = (status) => {
  const styles = {
    PENDING_PAYMENT: "bg-amber-100 text-amber-700",
    PAID: "bg-blue-100 text-blue-700",
    IN_PROGRESS: "bg-indigo-100 text-indigo-700",
    COMPLETED: "bg-emerald-100 text-emerald-700",
    REVISION: "bg-rose-100 text-rose-700",
  };
  return styles[status] || "bg-slate-100 text-slate-700";
};

const handleDownload = async (order) => {
  // Logic to get Signed URL for the 'DELIVERABLE' file type
  const deliverable = order.files.find((f) => f.file_type === "DELIVERABLE");
  if (!deliverable) return alert("File not ready yet.");

  const { data, error } = await supabase.storage
    .from("order-attachments")
    .createSignedUrl(deliverable.file_url, 60);

  if (data) window.open(data.signedUrl, "_blank");
};
</script>
