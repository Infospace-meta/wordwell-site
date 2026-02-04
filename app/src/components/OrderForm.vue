<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold mb-6">Place Your Order</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Subject & Service -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">Service Type</label>
          <select v-model="form.service_type" class="w-full border rounded p-2">
            <option value="Essay">Essay</option>
            <option value="Research Paper">Research Paper</option>
            <option value="Thesis">Thesis</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium">Academic Level</label>
          <select
            v-model="form.academic_level"
            class="w-full border rounded p-2"
          >
            <option value="Undergraduate">Undergraduate</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
      </div>

      <!-- Subject & Deadline -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">Subject / Course</label>
          <input
            v-model="form.subject"
            type="text"
            class="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium">Deadline</label>
          <input
            v-model="form.deadline"
            type="datetime-local"
            class="w-full border rounded p-2"
            required
          />
        </div>
      </div>

      <!-- Pages & Word Count -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium"
            >Pages (275 words/page)</label
          >
          <input
            v-model.number="form.pages"
            type="number"
            min="1"
            class="w-full border rounded p-2"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-500"
            >Estimated Words</label
          >
          <div class="p-2 bg-gray-100 rounded">{{ estimatedWords }} words</div>
        </div>
      </div>

      <!-- Instructions -->
      <div>
        <label class="block text-sm font-medium">Instructions</label>
        <textarea
          v-model="form.instructions"
          rows="4"
          class="w-full border rounded p-2"
        ></textarea>
      </div>

      <!-- File Upload -->
      <div>
        <label class="block text-sm font-medium">Attachments</label>
        <input
          type="file"
          multiple
          @change="handleFileSelection"
          class="w-full text-sm"
        />
        <p v-if="uploading" class="text-blue-500 text-xs">
          Uploading files to Supabase...
        </p>
      </div>

      <!-- Hardcoded User ID for Testing (Deferred Auth) -->
      <div>
        <label class="block text-sm font-medium text-red-500"
          >User ID (Mock for testing)</label
        >
        <input
          v-model="form.user_id"
          type="text"
          class="w-full border border-red-200 rounded p-2"
        />
      </div>

      <!-- Pricing Summary -->
      <div class="p-4 bg-green-50 border border-green-200 rounded">
        <div class="flex justify-between font-bold text-green-800">
          <span>Estimated Total:</span>
          <span>${{ totalCost }}</span>
        </div>
      </div>

      <button
        type="submit"
        :disabled="uploading"
        class="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {{ uploading ? "Processing Files..." : "Submit Order" }}
      </button>
    </form>
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
