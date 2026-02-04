<template>
  <div></div>
</template>

<script setup>
import { ref, computed } from "vue";

/**VARIABLES */
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
const handleFileSelection = (event) => {
  selectedFiles.value = Array.from(event.target.files);
};
</script>

<style lang="scss" scoped></style>
