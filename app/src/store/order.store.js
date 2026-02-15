import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../providers/api/axios";
import { useLocalStorage } from "@vueuse/core";

export const useOrdersStore = defineStore("orders", () => {
  /**STATE */
  const orders = ref([]);
  const loading = ref(false);
  const pendingOrder = ref(useLocalStorage("pendingOrder", null));
  const error = ref(null);

  /**ACTIONS */
  /**Set order form data */
  function setPendingOrder(data) {
    console.log(data);
    pendingOrder.value = JSON.stringify(data);
  }

  /**Clear form data */
  function clearPendingOrder() {
    pendingOrder.value = null;
  }

  /**Add a new order */
  async function addOrder(orderFormData) {
    /**Local variables */
    loading.value = true;
    error.value = null; //reset error on new call

    console.log(orderFormData);

    try {
      const { data } = await api.post("orders", orderFormData);
      //show success notification here
      orders.value.push(data);

      return { data, error: null };
    } catch (err) {
      const apiError =
        err.response?.data?.message || err.message || "An error occurred";
      error.value = apiError;

      console.error("Error adding order:", err);
      return { data: null, error: apiError };
    } finally {
      loading.value = false;
    }
  }

  return {
    orders,
    loading,
    error,
    pendingOrder,
    setPendingOrder,
    clearPendingOrder,
    addOrder,
  };
});
