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
    /**Get session from supabase */
    const {
      data: { session },
    } = await supabase.auth.getSession();

    /**Set access token to local storage */
    session
      ? localStorage.setItem("x-token", session.access_token)
      : localStorage.removeItem("x-token");

    /**Set user */
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

  /**Function to logout */
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
      return { error };
    }

    /**Reset local state */
    user.value = null;
    profile.value = null;
    return { error: null };
  }

  return {
    user,
    profile,
    fetchUser,
    logout,
    isLoggedIn: computed(() => !!user.value),
  };
});
