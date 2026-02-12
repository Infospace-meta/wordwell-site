<template>
  <div class="min-h-screen bg-slate-50 py-16 px-6">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
      <!-- LEFT SIDE (FORM) -->
      <div
        class="lg:col-span-2 bg-white rounded-2xl shadow-md border border-slate-200 p-10"
      >
        <!-- Header -->
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-slate-800">Place Your Order</h2>
          <p class="text-slate-500 mt-2 text-sm">
            Fill in the details below to submit your request.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-10">
          <!-- SECTION 1 -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">
              Service Details
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Service Type</label
                >
                <select
                  v-model="form.service_type"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="Essay">Essay</option>
                  <option value="Research Paper">Research Paper</option>
                  <option value="Thesis">Thesis</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Academic Level</label
                >
                <select
                  v-model="form.academic_level"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </div>
          </div>

          <!-- SECTION 2 -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">
              Assignment Info
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Subject</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Deadline</label
                >
                <input
                  v-model="form.deadline"
                  type="datetime-local"
                  required
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600">Pages</label>
                <input
                  v-model.number="form.pages"
                  type="number"
                  min="1"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Estimated Words</label
                >
                <div
                  class="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-700"
                >
                  {{ estimatedWords }} words
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-600"
                >Instructions</label
              >
              <textarea
                v-model="form.instructions"
                rows="4"
                class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>
          </div>

          <!-- SECTION 3 -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">
              Attachments
            </h3>

            <div
              class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-500 transition"
            >
              <input
                type="file"
                multiple
                @change="handleFileSelection"
                class="hidden"
                id="fileUpload"
              />
              <label for="fileUpload" class="cursor-pointer text-slate-500">
                Drag & drop files or
                <span class="text-indigo-600 font-medium">browse</span>
              </label>
            </div>

            <p v-if="uploading" class="text-indigo-500 text-sm">
              Uploading files...
            </p>
          </div>

          <!-- SUBMIT -->
          <button
            type="submit"
            :disabled="uploading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-4 rounded-xl disabled:bg-slate-400"
          >
            {{ uploading ? "Processing..." : "Submit Order" }}
          </button>
        </form>
      </div>

      <!-- RIGHT SIDE (SUMMARY) -->
      <div
        class="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-fit sticky top-10"
      >
        <h3 class="text-lg font-semibold text-slate-700 mb-6">Order Summary</h3>

        <div class="space-y-4 text-sm text-slate-600">
          <div class="flex justify-between">
            <span>Pages</span>
            <span>{{ form.pages }}</span>
          </div>

          <div class="flex justify-between">
            <span>Price per page</span>
            <span>$15</span>
          </div>

          <div
            class="border-t pt-4 flex justify-between font-bold text-lg text-slate-800"
          >
            <span>Total</span>
            <span>${{ totalCost }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useOrdersStore } from "../store/order.store";
import { storeToRefs } from "pinia";

/**VARIABLES */
/**Initialize the store */
const ordersStore = useOrdersStore();
const { loading: isAddingOrder } = storeToRefs(ordersStore);

const form = ref({
  service_type: "Essay",
  academic_level: "Undergraduate",
  subject: "",
  deadline: "",
  pages: 1,
  instructions: "",
  user_id: "client-uuid-456", // Matches seeder ID
  files: [],
});

const selectedFiles = ref([]);
const uploading = ref(false);

/**Logic of 275 words per page */
const estimatedWords = computed(() => form.value.pages * 275);

/**Logic for $15 per page (should match backend pricing) */
const totalCost = computed(() => form.value.pages * 15);

/**FUNCTIONS */
/**Function to handle file selection */
const handleFileSelection = (event) => {
  selectedFiles.value = Array.from(event.target.files);
};

/**Function to handle file upload */
const uploadFiles = async () => {
  const uploadedFiles = [];
  for (const file of selectedFiles.value) {
    const fileName = `${Date.now()}-${file.name}`;
    ///////////
  }
};

/**Functio to handle submission */
const handleSubmit = async () => {
  try {
    uploading.value = true;

    /**Upload files to supabase first */
    const fileMetadata = await uploadFiles();
    form.value.files = fileMetadata;

    /**Send payload to server */
    const { data, error: apiError } = await ordersStore.addOrder(form.value);

    /**Handle response based on what store returns */
    if (apiError) {
      alert(
        "Error submitting order: " +
          (apiError.data?.message || "Check console"),
      );
      return;
    }

    /**Success logic */
    alert("Order created successfully! Order #" + data.order_number);
    console.log("Backend Response:", data);

    // Optional: Reset form here if successful
    // form.value = { ...initialValue };
  } catch (err) {
    /**Catch errors from uploadFiles() or unexpected logic crashes */
    console.error("Order Submission Failed:", err);
    alert("Error submitting order. Check console.");
  } finally {
    uploading.value = false;
  }
};
</script>
