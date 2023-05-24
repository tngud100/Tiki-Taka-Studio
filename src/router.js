import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/View/HomeView.vue"),
  },
  {
    path: "/news",
    name: "NewsPage",
    component: () => import("@/View/SubNewsView.vue"),
  },
  {
    path: "/events",
    name: "EventsPage",
    component: () => import("@/View/SubEventsView.vue"),
  },
  {
    path: "/ask",
    name: "AskPage",
    component: () => import("@/View/SubAskView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
