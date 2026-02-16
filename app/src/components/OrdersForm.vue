<template>
  <div class="bg-gray-50 px-4 py-6 min-h-screen">
    <div class="mx-auto max-w-2xl">
      <!-- Header -->
      <div class="mb-6 text-center">
       <p class="mb-3 font-bold text-blue-800 text-xl uppercase tracking-widest">
        Essay Writing & Assignment Help Experts
        </p>
        <p class="text-gray-600 text-sm">Ace Your Assignments with Real Experts! Skilled writers are standing 
          by to deliver plagiarism-free, tailored solutions.</p>
      </div>

      <!-- Form Container -->
      <div class="bg-white shadow-lg p-4 md:p-6 border border-gray-100 rounded-xl">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Full Name -->
          <div>
            <label for="fullName" class="block mb-2 font-semibold text-gray-800 text-sm">
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

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block mb-2 font-semibold text-gray-800 text-sm">
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              placeholder="E.g. +1 563 343 3372"
              class="px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200"
              required
            />
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block mb-2 font-semibold text-gray-800 text-sm">
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

          <!-- Select Service -->
          <div>
            <label for="service" class="block mb-2 font-semibold text-gray-800 text-sm">
              Select Service
            </label>
            <select
              id="service"
              v-model="form.service"
              class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
              required>

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
            <label for="academicLevel" class="block mb-2 font-semibold text-gray-800 text-sm">
              Academic Level
            </label>
            <select
              id="academicLevel"
              v-model="form.academicLevel"
              class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
              required
            >
              <option value="">Academic Level</option>
              <option value="high-school">High School</option>
              <option value="college">College</option>
              <option value="university">University</option>
              <option value="masters">Master's</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <!-- Subject/Course -->
          <div>
            <label for="subject" class="block mb-2 font-semibold text-gray-800 text-sm">
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

          <!-- Instructions -->
          <div>
            <label for="instructions" class="block mb-2 font-semibold text-gray-800 text-sm">
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

          <!-- Number of Pages/Words -->
          <div>
            <label for="pages" class="block mb-2 font-semibold text-gray-800 text-sm">
              Number of Pages/Words
            </label>
            <select
              id="pages"
              v-model="form.pages"
              @change="calculatePrice"
              class="bg-white px-4 py-3 border border-gray-200 focus:border-orange-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-200 w-full text-sm transition-all duration-200 appearance-none"
              required
            >
              <option value="1">1 Page = 275 Words</option>
              <option value="2">2 Pages = 550 Words</option>
              <option value="3">3 Pages = 825 Words</option>
              <option value="4">4 Pages = 1100 Words</option>
              <option value="5">5 Pages = 1375 Words</option>
            </select>
          </div>

          <!-- Deadline -->
          <div>
            <label for="deadline" class="block mb-2 font-semibold text-gray-800 text-sm">
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
            <p class="mt-1 text-gray-500 text-xs">Select your preferred deadline date</p>
          </div>

          <!-- Order Summary -->
          <div class="p-4 border border-orange-200 rounded-lg">
            <label class="block mb-2 font-semibold text-gray-800 text-sm">
              Order Summary
            </label>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 text-sm">Total Price:</span>
              <span class="font-bold text-orange-600 text-xl">{{ formattedPrice }}</span>
            </div>
            <p class="mt-1 text-gray-500 text-xs">Base price: ${{ basePrice }} per page</p>
          </div>

          <!-- File Upload -->
          <div>
            <label class="block mb-2 font-medium text-gray-700 text-sm">
              Upload Files
            </label>
            <div
              class="hover:bg-orange-50 p-4 border-2 border-gray-300 hover:border-orange-400 border-dashed rounded-lg text-center transition-all duration-200 cursor-pointer"
              @click="triggerFileUpload"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
            >
              <input
                ref="fileInput"
                type="file"
                multiple
                @change="handleFileSelect"
                class="hidden"
                accept=".pdf,.doc,.docx,.txt,.rtf"
              />
              <svg class="mx-auto mb-2 w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-gray-600 text-xs">Click or drag files to upload (up to 5 files)</p>
              <p class="mt-1 text-gray-500 text-xs">PDF, DOC, DOCX, TXT, RTF (Max 10MB each)</p>
            </div>
            
            <!-- Uploaded Files List -->
            <div v-if="uploadedFiles.length > 0" class="space-y-2 mt-2">
              <div v-for="(file, index) in uploadedFiles" :key="index" class="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span class="text-gray-700 text-xs">{{ file.name }}</span>
                <button
                  type="button"
                  @click="removeFile(index)"
                  class="text-red-500 hover:text-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex justify-center items-center bg-linear-to-r from-orange-400 hover:from-orange-500 disabled:from-gray-400 to-orange-600 hover:to-orange-700 disabled:to-gray-500 shadow-md hover:shadow-lg px-6 py-3 rounded-lg w-full font-semibold text-white text-sm transition-all duration-200"
            >
              <span v-if="!isSubmitting">Place My Order</span>
              <span v-else class="flex items-center">
                <svg class="mr-3 -ml-1 w-5 h-5 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </div>
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
        deadline: ""
      },
      uploadedFiles: [],
      isSubmitting: false,
      basePrice: 15,
      minDate: new Date().toISOString().split("T")[0]
    };
  },

  computed: {
    formattedPrice() {
      const pages = parseInt(this.form.pages) || 1;
      const price = pages * this.basePrice;
      return `$${price.toFixed(2)}`;
    }
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
        "application/rtf"
      ];

      const validFiles = files.filter(file => {
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
          data: { publicUrl }
        } = supabase.storage
          .from("order-attachments")
          .getPublicUrl(fileName);

        uploaded.push({
          file_url: publicUrl,
          file_name: file.name
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
          files: fileMetadata
        };

        // 2️⃣ If NOT logged in → trigger magic link
        if (!this.authStore.isLoggedIn) {
          this.ordersStore.setPendingOrder(payload);

          const { error } = await supabase.auth.signInWithOtp({
            email: this.form.email,
            options: {
              emailRedirectTo:
                window.location.origin + "/confirm-order",
              data: {
                full_name: this.form.fullName,
                whatsapp_no: this.form.phone
              }
            }
          });

          if (error) throw error;

          alert(
            "Magic link sent! Check your email to verify and complete your order."
          );

          return;
        }

        // 3️⃣ Logged in → send to backend
        const finalPayload = {
          ...payload,
          user_id: this.authStore.user.id
        };

        const { data, error } =
          await this.ordersStore.addOrder(finalPayload);

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
        deadline: ""
      };
      this.uploadedFiles = [];
    }
  }
};
</script>
