import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { fetchWrapper } from "../helpers";
import { post, get } from "../providers/api/main";
import router from "../router";
import { supabase } from "../helpers/supabase";

const baseUrl = `${import.meta.env.VITE_API_URL}`;
const mode = `${import.meta.env.VITE_MODE}`;

export const useAuthStore = defineStore("auth", () => {
  /**VARIABLES */
  const user = ref(null);
  // const user = ref(useLocalStorage("user", null));
  const access_token = ref(useLocalStorage("x-token", null));
  const returnUrl = ref(null);
  const error = ref(null);
  const isLoginModalOpen = ref(false);
  let login;
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

  /**Login method for local instance */
  async function login_local(formData) {
    const username = formData.email;
    const password = formData.password;
    console.log("This is the formData in store", { username, password });
    const fetchedUser = await fetchWrapper
      .post(`${baseUrl}/login`, {
        username,
        password,
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        error.value = err.response ? err.response.data.message : err.message;
      });

    console.log(fetchedUser);

    /**update pinia state */
    user.value = JSON.stringify(fetchedUser);

    /**capture the access token*/
    access_token.value = fetchedUser.token ? fetchedUser.token : null;

    /**Close Login Modal */
    isLoginModalOpen.value = false;

    /**redirect to previous url or default to home page */
    router.push(returnUrl.value || "/");
  }

  /**Login method for remote instance */
  async function login_remote(credentials) {
    const response = await post("login", credentials)
      .then((response) => {
        console.log(response);
        user.value = response.data.user
          ? JSON.stringify(response.data.user)
          : null;

        /**capture the access token*/
        access_token.value = response.data ? response.data.token : null;

        /**Close Login Modal */
        isLoginModalOpen.value = false;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        error.value = err.response ? err.response.data.message : err.message;
      });

    /**redirect to previous url or default to home page */
    router.push(returnUrl.value || "/");
  }

  /** Test API */
  async function test() {
    await get("shops")
      .then((response) => {
        console.log(response);
        // //Logout if forbidden
        // if(response.data.responseStatus === 403){
        //   logout();
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**Logout here */
  function logout() {
    user.value = null;
    access_token.value = null;
    /**Open login modal */
    isLoginModalOpen.value = true;
    /**Navigate to landing page */
    router.push("/");
  }

  /**Identify the login method */
  if (mode == "local") {
    login = login_local;
  } else if (mode == "remote") {
    login = login_remote;
  }

  return {
    user,
    profile,
    returnUrl,
    error,
    isLoginModalOpen,
    test,
    login,
    logout,
    fetchUser,
    isLoggedIn: computed(() => !!user.value),
  };
});
