import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../helpers/supabase";

export const useAuthStore = defineStore("auth", () => {
  /**VARIABLES */
  const user = ref(null);
  // const user = ref(useLocalStorage("user", null));
  const profile = ref(null);

  /**ACTIONS */
  /**Function to fetch user */
  async function fetchUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    user.value = session?.user || null;

    if (user.value) {
      /**Fetch the extra details from public.Profile table */
      const { data } = await supabase
        .from("Profile")
        .select("*")
        .eq("id", user.value.id)
        .single();

      profile.value = data;
    }
  }

  return {
    user,
    profile,
    fetchUser,
    isLoggedIn: computed(() => !!user.value),
  };
});
