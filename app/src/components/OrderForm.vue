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
          <!-- SECTION: Identity (Only show for Guests) -->
          <div v-if="!authStore.isLoggedIn" class="space-y-6">
            <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">
              Your Identity
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600"
                  >Full Name</label
                >
                <input
                  v-model="form.full_name"
                  type="text"
                  required
                  class="w-full rounded-xl border ..."
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-600">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-xl border ..."
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-600"
                >WhatsApp Number</label
              >
              <input
                v-model="form.whatsapp_no"
                type="text"
                placeholder="+254..."
                class="w-full rounded-xl border ..."
              />
            </div>
          </div>

          <!-- Welcome Message for Authenticated Users -->
          <div
            v-else
            class="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-between"
          >
            <div>
              <p class="text-sm text-indigo-700">
                Ordering as <strong>{{ authStore.profile?.full_name }}</strong>
              </p>
              <p class="text-xs text-indigo-500">{{ authStore.user?.email }}</p>
            </div>
            <button
              @click="handleLogout"
              class="text-xs text-red-500 hover:underline"
            >
              Not you? Log out
            </button>
          </div>

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

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-600"
              >Your Email (To receive the finished work)</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="email@example.com"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <!-- SECTION 3 -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">
              Attachments
            </h3>

            <div
              class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-500 transition"
            >
              <!-- File Upload -->
              <div class="m-4">
                <input
                  type="file"
                  multiple
                  @change="handleFileSelection"
                  class="hidden"
                  id="fileUpload"
                />

                <!-- FILE PREVIEW LIST -->
                <ul v-if="selectedFiles.length > 0" class="mt-3 space-y-2">
                  <li
                    v-for="(file, index) in selectedFiles"
                    :key="index"
                    class="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                  >
                    <div class="flex items-center space-x-2 truncate">
                      <span class="text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                      </span>
                      <span class="truncate font-medium text-gray-700">{{
                        file.name
                      }}</span>
                      <span class="text-xs text-gray-400"
                        >({{ formatBytes(file.size) }})</span
                      >
                    </div>

                    <!-- Remove button -->
                    <button
                      type="button"
                      @click="removeFile(index)"
                      class="text-red-400 hover:text-red-600 p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>

                <p
                  v-if="uploading"
                  class="text-blue-500 text-xs mt-2 animate-pulse font-bold"
                >
                  🚀 Uploading files to Supabase...
                </p>
              </div>

              <!-- File upload label -->
              <label for="fileUpload" class="cursor-pointer text-slate-500">
                Drag & drop files or
                <span class="text-indigo-600 font-medium">browse</span>
              </label>
            </div>
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
import { supabase } from "../helpers/supabase";

/**VARIABLES */
/**Initialize the store */
const ordersStore = useOrdersStore();
const { loading: isAddingOrder } = storeToRefs(ordersStore);

/**Order Form */
const form = ref({
  email: "",
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
  const newFiles = Array.from(event.target.files);
  selectedFiles.value = [...selectedFiles.value, ...newFiles];
};

/**Function to remove a file from the list before uploading */
const removeFile = (index) => {
  selectedFiles.value.splice(index, 1);
};

/**Helper to make file sizes readable (KB/MB) */
const formatBytes = (bytes, decimals = 2) => {
  if (!bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**Function to handle file upload */
const uploadFiles = async () => {
  const uploadedFiles = [];

  /**Upload each selected file */
  for (const file of selectedFiles.value) {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("order-attachments")
      .upload(fileName, file);

    if (error) throw error;

    /**Get public URL */
    const {
      data: { publicUrl },
    } = supabase.storage.from("order-attachments").getPublicUrl(fileName);

    uploadedFiles.push({ file_url: publicUrl, file_name: file.name });
  }

  return uploadedFiles;
};

/**Functio to handle submission */
const handleSubmit = async () => {
  try {
    uploading.value = true;

    /**Check if user is already logged in */
    const {
      data: { user },
    } = await supabase.auth.getUser();

    /**Upload files to supabase first (save them before redirect) */
    const fileMetadata = await uploadFiles();
    form.value.files = fileMetadata;

    if (!user) {
      /**If not logged in, save order data to local storage and trigger Magic Link  */
      ordersStore.setPendingOrder(form.value);

      const { error: authError } = await supabase.auth.signInWithOtp({
        email: form.value.email,
        options: {
          emailRedirectTo: window.location.origin + "/confirm-order",
          data: {
            full_name: form.value.full_name,
            whatsapp_no: form.value.whatsapp_no,
          },
        },
      });

      if (authError) throw authError;

      alert(
        "Magic link sent! Check your email to verify and complete your order.",
      );
      return;
    }

    /**Send payload to server */
    const { data, error: apiError } = await ordersStore.addOrder(form.value);

    /**Handle response based on what store returns */
    if (apiError) {
      alert("Error submitting order: " + (apiError || "Check console"));
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
