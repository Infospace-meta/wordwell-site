<template>
  <div class="min-h-screen pb-12">
    <!-- Top Navigation / Header -->
    <header class="bg-white lg:border-b border-slate-200 px-6 py-4 top-20 z-50">
      <div
        class="max-w-6xl mx-auto flex justify-between items-center max-lg:justify-end"
      >
        <h1 class="text-xl max-md:hidden font-bold text-slate-800">
          My Learning Dashboard
        </h1>
        <div class="flex items-center gap-4">
          <router-link
            to="/order"
            class="bg-transparent text-[#334a97] border-2 border-[#334a97] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#334a97] hover:text-white transition"
          >
            + New Order
          </router-link>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 mt-8">
      <!-- Welcome & Stats -->
      <section class="mb-10 max-lg:hidden">
        <h2 class="text-2xl font-bold text-slate-800">
          Welcome back, {{ authStore.profile?.full_name }}!
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div
            class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <p class="text-slate-500 text-sm font-medium">Active Orders</p>
            <p class="text-3xl font-bold text-[#334a97]">
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
            class="text-sm text-[#334a97] hover:underline"
            :disabled="ordersStore.loading"
          >
            <span v-if="!ordersStore.loading">Refresh List</span>
            <span v-else class="animate-pulse">Refreshing...</span>
          </button>
        </div>

        <!-- 1. LOADING STATE -->
        <div
          v-if="ordersStore.loading"
          class="bg-white border border-slate-100 rounded-3xl p-20 text-center shadow-sm"
        >
          <div class="flex flex-col items-center justify-center">
            <!-- Animated Spinner -->
            <svg
              class="animate-spin h-12 w-12 text-[#334a97]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
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
            <h4 class="text-lg font-semibold text-slate-700 mt-4">
              Loading your orders
            </h4>
            <p class="text-slate-400 text-sm italic">
              Connecting to our expert network...
            </p>
          </div>
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
            class="bg-[#334a97] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-800"
            >Get Started Now</router-link
          >
        </div>

        <!-- Orders Table -->
        <div
          v-else
          class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-scroll"
        >
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider"
              >
                <th class="px-6 py-4 font-semibold">Order</th>
                <th class="px-6 py-4 font-semibold">Subject & Service</th>
                <th class="px-6 py-4 font-semibold">Order Files</th>
                <th class="px-6 py-4 font-semibold">Deadline</th>
                <th class="px-6 py-4 font-semibold">Payment Status</th>
                <th class="px-6 py-4 font-semibold">Order Status</th>
                <th class="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="order in ordersStore.orders"
                :key="order.id"
                class="hover:bg-slate-50 transition"
              >
                <!-- ORDER NUMBER -->
                <td class="px-6 py-4 font-bold text-slate-700">
                  #{{ order.order_number }}
                </td>
                <!-- SUBJECT & SERVICE -->
                <td class="px-6 py-4">
                  <p class="text-sm font-semibold text-slate-800">
                    {{ order.subject }}
                  </p>
                  <p class="text-xs text-slate-500">
                    {{ order.service_type }} · {{ order.pages }} pages
                  </p>
                </td>
                <!-- FILE LIST -->
                <td class="px-6 py-4">
                  <div class="flex flex-col gap-1">
                    <button
                      v-for="file in order.files"
                      :key="file.id"
                      @click="generateSecureDownload(file)"
                      class="text-[11px] flex items-center gap-1 hover:text-blue-700 transition w-fit"
                      :class="
                        file.file_type === 'DELIVERABLE'
                          ? 'text-emerald-600 font-bold'
                          : 'text-slate-500'
                      "
                    >
                      <svg
                        class="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      {{ file.file_name }}
                    </button>
                  </div>
                </td>
                <!-- DEADLINE -->
                <td class="px-6 py-4 text-sm text-slate-600">
                  {{ formatDate(order.deadline) }}
                </td>
                <!-- PAYMENT STATUS -->
                <td class="px-6 py-4">
                  <span
                    :class="getStatusClasses(order.payment_status)"
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter"
                  >
                    {{ order.payment_status.split("_")[0] }}
                  </span>
                </td>
                <!-- ORDER STATUS -->
                <td class="px-6 py-4">
                  <span
                    :class="getStatusClasses(order.order_status)"
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter"
                  >
                    {{ order.order_status.replace("_", " ") }}
                  </span>
                </td>
                <!-- ACTIONS -->
                <td class="px-6 py-4 text-right">
                  <router-link
                    v-if="order.payment_status === 'PENDING_PAYMENT'"
                    :to="`/order/${order.id}/pay`"
                    class="text-amber-600 font-bold text-sm hover:underline"
                  >
                    Pay Now
                  </router-link>
                  <button
                    v-else-if="order.order_status === 'COMPLETED'"
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
import { useOrdersStore, useAuthStore } from "@/store";
import { supabase } from "@/providers/supabase";

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
  () => ordersStore.orders.filter((o) => o.order_status === "COMPLETED").length,
);
const pendingPaymentCount = computed(
  () =>
    ordersStore.orders.filter((o) => o.payment_status === "PENDING_PAYMENT")
      .length,
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
    PENDING: "bg-amber-200 text-amber-800",
    IN_PROGRESS: "bg-blue-600 text-blue-800",
    COMPLETED: "bg-emerald-100 text-emerald-700",
    REVISION: "bg-rose-100 text-rose-700",
  };
  return styles[status] || "bg-slate-100 text-slate-700";
};

/**Function for secure downloads */
const generateSecureDownload = async (file) => {
  try {
    // 1. request a signed URL (valid for 60 seconds)
    // Supabase automatically checks if the user's ID matches the folder path in file_url
    const { data, error } = await supabase.storage
      .from("order-attachments")
      .createSignedUrl(file.file_url, 60);

    if (error) {
      if (error.message.includes("Object not found")) {
        alert("File not found. It may have been archived.");
      } else {
        alert(
          "Security Error: You do not have permission to access this file.",
        );
      }
      return;
    }

    // 2. Open in new tab
    window.open(data.signedUrl, "_blank");
  } catch (err) {
    console.error("Download system error:", err);
    alert("An error occurred while fetching the secure link.");
  }
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
