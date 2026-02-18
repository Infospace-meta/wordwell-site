import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../providers/api/axios";
import { useLocalStorage } from "@vueuse/core";

export const useOrdersStore = defineStore("orders", () => {
  /**STATE */
  const orders = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const pendingOrder = useLocalStorage("pendingOrder", {});

  /**ACTIONS */
  /**Set order form data */
  function setPendingOrder(data) {
    console.log(data);
    pendingOrder.value = data;
  }

  /**Clear form data */
  function clearPendingOrder() {
    pendingOrder.value = {};
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
