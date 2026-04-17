import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutView,
  AssignmentServicesView,
  AttendanceServicesView,
  Process,
  ContactView,
  OrderView,
  DashboardView,
  PaymentView,
} from "@/views";
import { useAuthStore } from "@/store";
import ConfirmOrder from "@/components/order/ConfirmOrder.vue";
import AuthLogin from "@/components/auth/AuthLogin.vue";
import AuthConfirm from "@/components/auth/AuthConfirm.vue";
import WebLayout from "@/layout/WebLayout.vue";
import TermsView from "../views/TermsView.vue";

const routes = [
  {
    path: "/",
    component: WebLayout,
    redirect: { name: "home" },
    children: [
      { path: "", name: "home", component: HomeView },
      { path: "about", name: "about", component: AboutView },
      {
        path: "services",
        name: "services",
        children: [
          {
            path: "assignment",
            name: "assignment-services",
            component: AssignmentServicesView,
          },
          {
            path: "attendance",
            name: "attendance-services",
            component: AttendanceServicesView,
          },
        ],
      },
      { path: "How-it-works", name: "process", component: Process },
      { path: "contact", name: "contact", component: ContactView },
      { path: "order", name: "order", component: OrderView },
    ],
  },
  { path: "/login", name: "login", component: AuthLogin },
  ,
  { path: "/auth-confirm", name: "auth-confirm", component: AuthConfirm },
  { path: "/confirm-order", name: "confirm-order", component: ConfirmOrder },
  { path: "/terms", name: "terms", component: TermsView },
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
];

/**Initialize here */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  /**If the user is just landing, try to restore session first
   * This "picks up" the session from the Magic Link URL hash
   */
  if (!auth.user) {
    try {
      await auth.fetchUser();
    } catch (err) {
      // console.error("Failed to restore session:", err);
    }
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  /** If route requires auth and we still don't have a user */
  if (requiresAuth && !auth.isLoggedIn) {
    // console.warn("Non-admin tried to access admin dashboard");
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
