import { createRouter, createWebHistory } from "vue-router";
import { OrderView, DashboardView, PaymentView } from "@/views";
import ConfirmOrder from "@/components/ConfirmOrder.vue";
import { useAuthStore } from "@/store";
import AuthLogin from "@/components/auth/AuthLogin.vue";
import AuthConfirm from "@/components/auth/AuthConfirm.vue";

// const routes = [
//   { path: '/',             component: () => import('@/views/HomeView.vue') },
//   { path: '/services',     component: () => import('@/views/ServicesView.vue') },
//   { path: '/how-it-works', component: () => import('@/views/HowItWorksView.vue') },
//   { path: '/about',        component: () => import('@/views/AboutView.vue') },
//   { path: '/contact',      component: () => import('@/views/ContactView.vue') },
//   { path: '/order',        component: () => import('@/views/OrderView.vue') },
//   { path: '/login',        component: () => import('@/views/LoginView.vue') },
//   { path: '/register',     component: () => import('@/views/RegisterView.vue') },
//   {
//     path: '/dashboard',
//     component: () => import('@/layouts/DashboardLayout.vue'),
//     meta: { requiresAuth: true },
//     children: [
//       { path: '',        component: () => import('@/views/dashboard/DashboardHome.vue') },
//       { path: 'orders',  component: () => import('@/views/dashboard/OrdersList.vue') },
//       { path: 'orders/:id', component: () => import('@/views/dashboard/OrderDetail.vue') },
//       { path: 'new-order',  component: () => import('@/views/dashboard/NewOrder.vue') },
//       { path: 'payments',   component: () => import('@/views/dashboard/Payments.vue') },
//       { path: 'profile',    component: () => import('@/views/dashboard/Profile.vue') },
//     ]
//   }
// ]

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
