import { createRouter, createWebHistory } from "vue-router";
import { OrderView, DashboardView, PaymentView } from "../views";
import ConfirmOrder from "../components/ConfirmOrder.vue";
import { useAuthStore } from "../store";
import AuthLogin from "../components/auth/AuthLogin.vue";
import AuthConfirm from "../components/auth/AuthConfirm.vue";

const routes = [
  { path: "/", redirect: { name: "order" } },
  { path: "/order", name: "order", component: OrderView },
  { path: "/confirm-order", name: "confirm-order", component: ConfirmOrder },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/order/:id/pay",
    name: "payment",
    component: PaymentView,
    props: true, // Allows the :id to be passed as a prop to the component
    meta: { requiresAuth: true },
  },
  { path: "/login", name: "login", component: AuthLogin },
  { path: "/auth-confirm", name: "auth-confirm", component: AuthConfirm },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  /**If the user is just landing, try to restore session first
   * This "picks up" the session from the Magic Link URL hash
   */
  if (!auth.user) {
    try {
      await auth.fetchUser();
    } catch (err) {
      console.error("Failed to restore session:", err);
    }
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  /** If route requires auth and we still don't have a user */
  if (requiresAuth && !auth.isLoggedIn) {
    console.warn("Non-admin tried to access admin dashboard");
    await auth.logout();
    return {
      path: "/login",
      query: { returnUrl: to.fullPath },
    };
  }

  /**If user is logged in and tries to go to login page */
  if ((to.name === "login" || to.name === "signup") && auth.isLoggedIn) {
    return { path: "/" };
  }
});

export default router;
