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
  {
    path: "/news/1",
    name: "NewsDetail1",
    component: () => import("@/components/Sub/NewsDetail/news1.vue"),
  },
  {
    path: "/news/2",
    name: "NewsDetail2",
    component: () => import("@/components/Sub/NewsDetail/news2.vue"),
  },
  {
    path: "/news/3",
    name: "NewsDetail3",
    component: () => import("@/components/Sub/NewsDetail/news3.vue"),
  },
  {
    path: "/news/4",
    name: "NewsDetail4",
    component: () => import("@/components/Sub/NewsDetail/news4.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
