<template>
  <div class="bg-gray-50 px-4 py-6 min-h-screen">
    <div class="mx-auto max-w-2xl">
      <!-- Header -->
      <div class="mb-6 text-center">
        <p
          class="mb-3 font-bold text-blue-800 text-xl uppercase tracking-widest"
        >
          Essay Writing & Assignment Help Experts
        </p>
        <p class="text-gray-600 text-sm">
          Ace Your Assignments with Real Experts! Skilled writers are standing
          by to deliver plagiarism-free, tailored solutions.
        </p>
      </div>

      <!-- Form Container -->
      <div
        class="bg-white shadow-lg p-4 md:p-6 border border-gray-100 rounded-xl"
      >
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- SECTION: Identity (Only show for Guests) -->
          <div v-if="!authStore.isLoggedIn">
            <!-- Full Name -->
            <div>
              <label
                for="fullName"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullName"
                placeholder="Your Name"
                class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
                required
              />
            </div>

            <!-- Email Address -->
            <div>
              <label
                for="email"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="E.g. john@wordwellwriters.com"
                class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
                required
              />
            </div>

            <!-- Phone Number -->
            <div>
              <label
                for="phone"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.whatsapp_no"
                placeholder="E.g. +1 563 343 3372"
                class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
                required
              />
            </div>
          </div>

          <!-- SECTION 1 (Service Details) -->
          <div class="">
            <h3>Service Details</h3>
            <!-- Select Service -->
            <div>
              <label
                for="service"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Select Service
              </label>
              <select
                id="service"
                v-model="form.service_type"
                class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
                required
              >
                <option value="">Select Service</option>
                <option value="essay">Essay Writing</option>
                <option value="research">Research Paper</option>
                <option value="thesis">Thesis & Dissertation</option>
                <option value="article">Homework Help</option>
                <option value="assignment">Assignment Help</option>
                <option value="case-study">Litrature Report</option>
                <option value="lab-report">Editing and Proofreading</option>
                <option value="presentation">Presentation and Reports</option>
                <option value="presentation">Addmission Essays</option>
              </select>
            </div>

            <!-- Academic Level -->
            <div>
              <label
                for="academicLevel"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Academic Level
              </label>
              <select
                id="academicLevel"
                v-model="form.academic_level"
                class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
                required
              >
                <option value="">Academic Level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="masters">Masters</option>
                <option value="PHD">PhD</option>
              </select>
            </div>
          </div>

          <!-- SECTION 2 (Assignment Info) -->
          <div class="">
            <h3>Assignment Info</h3>

            <!-- Subject/Course -->
            <div>
              <label
                for="subject"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Subject / Course
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="E.g. English Literature"
                class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
                required
              />
            </div>

            <!-- Deadline -->
            <div>
              <label
                for="deadline"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                v-model="form.deadline"
                :min="minDate"
                class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
                required
              />
              <p class="mt-1 text-gray-500 text-xs">
                Select your preferred deadline date
              </p>
            </div>

            <!-- Number of Pages/Words -->
            <div>
              <label
                for="pages"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Number of Pages/Words
              </label>
              <input
                v-model="form.pages"
                type="number"
                min="1"
                id="pages"
                class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
                required
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

            <!-- Instructions -->
            <div>
              <label
                for="instructions"
                class="block mb-2 font-semibold text-gray-800 text-sm"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                v-model="form.instructions"
                placeholder="Add specific requirements and guidelines..."
                rows="3"
                class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 resize-y"
                required
              ></textarea>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="p-4 border border-orange-200 rounded-lg">
            <label class="block mb-2 font-semibold text-gray-800 text-sm">
              Order Summary
            </label>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 text-sm">Total Price:</span>
              <span class="font-bold text-orange-600 text-xl">{{
                formattedPrice
              }}</span>
            </div>
            <p class="mt-1 text-gray-500 text-xs">
              Base price: ${{ basePrice }} per page
            </p>
          </div>

          <!-- SECTION 3 (Attachments) -->
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

          <!-- Submit Button -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="uploading"
              class="flex justify-center items-center bg-linear-to-r from-orange-400 hover:from-orange-500 disabled:from-gray-400 to-orange-600 hover:to-orange-700 disabled:to-gray-500 shadow-md hover:shadow-lg px-6 py-3 rounded-lg w-full font-semibold text-white text-sm transition-all duration-200"
            >
              <span v-if="!uploading">Place My Order</span>
              <span v-else class="flex items-center">
                <svg
                  class="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
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
                Processing...
              </span>
            </button>
          </div>
        </form>
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
          <!-- <div class="space-y-2">
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
          </div> -->

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
    </div>
  </div>
</template>

<script>
import { useOrdersStore, useAuthStore } from "../store";
import { storeToRefs } from "pinia";
import { supabase } from "../helpers/supabase";

export default {
  name: "OrderForm2",

  data() {
    return {
      form: {
        fullName: "",
        phone: "",
        email: "",
        service: "",
        academicLevel: "",
        subject: "",
        instructions: "",
        pages: "1",
        deadline: "",
      },
      uploadedFiles: [],
      isSubmitting: false,
      basePrice: 15,
      minDate: new Date().toISOString().split("T")[0],
    };
  },

  computed: {
    formattedPrice() {
      const pages = parseInt(this.form.pages) || 1;
      const price = pages * this.basePrice;
      return `$${price.toFixed(2)}`;
    },
  },

  async mounted() {
    this.ordersStore = useOrdersStore();
    this.authStore = useAuthStore();

    const { loading } = storeToRefs(this.ordersStore);
    this.isAddingOrder = loading;

    await this.authStore.fetchUser();

    if (this.authStore.isLoggedIn) {
      this.form.fullName = this.authStore.profile?.full_name || "";
      this.form.email = this.authStore.user?.email || "";
      this.form.phone = this.authStore.profile?.whatsapp_no || "";
    }
  },

  methods: {
    calculatePrice() {},

    triggerFileUpload() {
      this.$refs.fileInput.click();
    },

    handleFileSelect(event) {
      const files = Array.from(event.target.files);
      this.addFiles(files);
    },

    handleFileDrop(event) {
      const files = Array.from(event.dataTransfer.files);
      this.addFiles(files);
    },

    addFiles(files) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "application/rtf",
      ];

      const validFiles = files.filter((file) => {
        if (!validTypes.includes(file.type)) {
          alert(`Invalid file type: ${file.name}`);
          return false;
        }

        if (file.size > 10 * 1024 * 1024) {
          alert(`File too large: ${file.name} (Max 10MB)`);
          return false;
        }

        return true;
      });

      const remainingSlots = 5 - this.uploadedFiles.length;
      const filesToAdd = validFiles.slice(0, remainingSlots);

      if (filesToAdd.length < validFiles.length) {
        alert("Maximum 5 files allowed");
      }

      this.uploadedFiles = [...this.uploadedFiles, ...filesToAdd];
    },

    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },

    async uploadFilesToSupabase() {
      const uploaded = [];

      for (const file of this.uploadedFiles) {
        const fileName = `${Date.now()}-${file.name}`;

        const { error } = await supabase.storage
          .from("order-attachments")
          .upload(fileName, file);

        if (error) throw error;

        const {
          data: { publicUrl },
        } = supabase.storage.from("order-attachments").getPublicUrl(fileName);

        uploaded.push({
          file_url: publicUrl,
          file_name: file.name,
        });
      }

      return uploaded;
    },

    async handleSubmit() {
      this.isSubmitting = true;

      try {
        // 1️⃣ Upload files first
        const fileMetadata = await this.uploadFilesToSupabase();

        const payload = {
          full_name: this.form.fullName,
          email: this.form.email,
          whatsapp_no: this.form.phone,
          service_type: this.form.service,
          academic_level: this.form.academicLevel,
          subject: this.form.subject,
          deadline: this.form.deadline,
          pages: parseInt(this.form.pages),
          instructions: this.form.instructions,
          files: fileMetadata,
        };

        // 2️⃣ If NOT logged in → trigger magic link
        if (!this.authStore.isLoggedIn) {
          this.ordersStore.setPendingOrder(payload);

          const { error } = await supabase.auth.signInWithOtp({
            email: this.form.email,
            options: {
              emailRedirectTo: window.location.origin + "/confirm-order",
              data: {
                full_name: this.form.fullName,
                whatsapp_no: this.form.phone,
              },
            },
          });

          if (error) throw error;

          alert(
            "Magic link sent! Check your email to verify and complete your order.",
          );

          return;
        }

        // 3️⃣ Logged in → send to backend
        const finalPayload = {
          ...payload,
          user_id: this.authStore.user.id,
        };

        const { data, error } = await this.ordersStore.addOrder(finalPayload);

        if (error) {
          alert("Error submitting order.");
          return;
        }

        alert("Order created successfully! Order #" + data.order_number);

        this.resetForm();
      } catch (err) {
        console.error("Order submission failed:", err);
        alert("Error submitting order.");
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form = {
        fullName: "",
        phone: "",
        email: "",
        service: "",
        academicLevel: "",
        subject: "",
        instructions: "",
        pages: "1",
        deadline: "",
      };
      this.uploadedFiles = [];
    },
  },
};
</script>
