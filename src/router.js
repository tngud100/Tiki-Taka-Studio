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
    path: "/intro",
    name: "IntroPage",
    component: () => import("@/View/SubIntroView.vue"),
  },
  {
    path: "/ask",
    name: "AskPage",
    component: () => import("@/View/SubAskView.vue"),
  },
  {
    path: "/studio",
    name: "StudioPage",
    component: () => import("@/View/SubStudioView.vue"),
  },
  {
    path: "/reservate",
    name: "Reservate",
    component: () => import("@/View/SubReservateView.vue"),
  },
  {
    path: "/program",
    name: "ProgramPage",
    component: () => import("@/View/SubProgramView.vue"),
  },
  {
    path: "/events1",
    name: "EventsDetail1",
    component: () => import("@/components/Sub/EventsDetail/events1.vue"),
  },
  {
    path: "/TabletReserveForm",
    name: "TabletReserveForm",
    component: () => import("@/components/Sub/TabletReserveForm.vue"),
  },
  {
    path: "/CalendarReservate",
    name: "CalendarReservate",
    component: () => import("@/components/Sub/ReservateDetail/CalendarReserve.vue"),
  },
  {
    path: "/reservate1",
    name: "ReservateDetail",
    component: () => import("@/components/Sub/ReservateDetail/reservate1.vue"),
  },
  {
    path: "/reservate2",
    name: "ReservateDetail2",
    component: () => import("@/components/Sub/ReservateDetail/reservate2.vue"),
  },
  {
    path: "/reservate3",
    name: "ReservateDetail3",
    component: () => import("@/components/Sub/ReservateDetail/reservate3.vue"),
  },
  {
    path: "/reservate4",
    name: "ReservateDetail4",
    component: () => import("@/components/Sub/ReservateDetail/reservate4.vue"),
  },
  {
    path: "/reservate5",
    name: "ReservateDetail5",
    component: () => import("@/components/Sub/ReservateDetail/reservate5.vue"),
  },
  {
    path: "/reservate6",
    name: "ReservateDetail6",
    component: () => import("@/components/Sub/ReservateDetail/reservate6.vue"),
  },
  {
    path: "/reservateConfirm",
    name: "ReservateConfirmAdmin",
    component: () => import("@/components/Sub/ReservateDetail/ConfirmReserve.vue"),
  },
  {
    path: "/news1",
    name: "NewsDetail1",
    component: () => import("@/components/Sub/NewsDetail/news1.vue"),
  },
  {
    path: "/news2",
    name: "NewsDetail2",
    component: () => import("@/components/Sub/NewsDetail/news2.vue"),
  },
  // {
  //   path: "/news/3",
  //   name: "NewsDetail3",
  //   component: () => import("@/components/Sub/NewsDetail/news3.vue"),
  // },
  // {
  //   path: "/news/4",
  //   name: "NewsDetail4",
  //   component: () => import("@/components/Sub/NewsDetail/news4.vue"),
  // },
  {
    path: "/test",
    name: "TestPageTrash",
    component: () => import("@/components/trash/TestPageTrash.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
