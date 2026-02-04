<template>
  <div></div>
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

<style lang="scss" scoped></style>
