import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/View/HomeView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/Home/HomeSchedule.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
