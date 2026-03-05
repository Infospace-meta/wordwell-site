import { createRouter, createWebHistory } from "vue-router";
import { OrderView, DashboardView, PaymentView } from "../views";
import ConfirmOrder from "../components/ConfirmOrder.vue";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", redirect: { name: "order" } },
  { path: "/order", name: "order", component: OrderView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
  {
    path: "/order/:id/pay",
    name: "payment",
    component: PaymentView,
    props: true, // Allows the :id to be passed as a prop to the component
  },
  { path: "/confirm-order", name: "confirm-order", component: ConfirmOrder },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

// router.beforeEach(async (to, from) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/", "/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   /**add function to check if user is logged in */
//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     auth.isLoginModalOpen = true;
//     return from.fullPath;
//     // return "/login";
//   }
// });

export default router;
