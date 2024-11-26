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
    component: () =>
      import("@/components/Sub/ReservateDetail/CalendarReserve.vue"),
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
    component: () =>
      import("@/components/Sub/ReservateDetail/ConfirmReserve.vue"),
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
  {
    path: "/news3",
    name: "NewsDetail3",
    component: () => import("@/components/Sub/NewsDetail/news3.vue"),
  },
  {
    path: "/news4",
    name: "NewsDetail4",
    component: () => import("@/components/Sub/NewsDetail/news4.vue"),
  },
  {
    path: "/news5",
    name: "NewsDetail5",
    component: () => import("@/components/Sub/NewsDetail/news5.vue"),
  },
  {
    path: "/news6",
    name: "NewsDetail6",
    component: () => import("@/components/Sub/NewsDetail/news6.vue"),
  },
  {
    path: "/news7",
    name: "NewsDetail7",
    component: () => import("@/components/Sub/NewsDetail/news7.vue"),
  },
  {
    path: "/news8",
    name: "NewsDetail8",
    component: () => import("@/components/Sub/NewsDetail/news8.vue"),
  },
  {
    path: "/news9",
    name: "NewsDetail9",
    component: () => import("@/components/Sub/NewsDetail/news9.vue"),
  },
  {
    path: "/news10",
    name: "NewsDetail10",
    component: () => import("@/components/Sub/NewsDetail/news10.vue"),
  },
  {
    path: "/news11",
    name: "NewsDetail11",
    component: () => import("@/components/Sub/NewsDetail/news11.vue"),
  },
  {
    path: "/news12",
    name: "NewsDetail12",
    component: () => import("@/components/Sub/NewsDetail/news12.vue"),
  },
  {
    path: "/news13",
    name: "NewsDetail13",
    component: () => import("@/components/Sub/NewsDetail/news13.vue"),
  },
  {
    path: "/news14",
    name: "NewsDetail14",
    component: () => import("@/components/Sub/NewsDetail/news14.vue"),
  },
  {
    path: "/news15",
    name: "NewsDetail15",
    component: () => import("@/components/Sub/NewsDetail/news15.vue"),
  },
  {
    path: "/news16",
    name: "NewsDetail16",
    component: () => import("@/components/Sub/NewsDetail/news16.vue"),
  },
  {
    path: "/news17",
    name: "NewsDetail17",
    component: () => import("@/components/Sub/NewsDetail/news17.vue"),
  },
  {
    path: "/news18",
    name: "NewsDetail18",
    component: () => import("@/components/Sub/NewsDetail/news18.vue"),
  },
  {
    path: "/news19",
    name: "NewsDetail19",
    component: () => import("@/components/Sub/NewsDetail/news19.vue"),
  },
  {
    path: "/news20",
    name: "NewsDetail20",
    component: () => import("@/components/Sub/NewsDetail/news20.vue"),
  },
  {
    path: "/news21",
    name: "NewsDetail21",
    component: () => import("@/components/Sub/NewsDetail/news21.vue"),
  },
  {
    path: "/news22",
    name: "NewsDetail22",
    component: () => import("@/components/Sub/NewsDetail/news22.vue"),
  },
  {
    path: "/news23",
    name: "NewsDetail23",
    component: () => import("@/components/Sub/NewsDetail/news23.vue"),
  },
  {
    path: "/news24",
    name: "NewsDetail24",
    component: () => import("@/components/Sub/NewsDetail/news24.vue"),
  },
  {
    path: "/news25",
    name: "NewsDetail25",
    component: () => import("@/components/Sub/NewsDetail/news25.vue"),
  },
  {
    path: "/news26",
    name: "NewsDetail26",
    component: () => import("@/components/Sub/NewsDetail/news26.vue"),
  },
  {
    path: "/news27",
    name: "NewsDetail27",
    component: () => import("@/components/Sub/NewsDetail/news27.vue"),
  },
  {
    path: "/news28",
    name: "NewsDetail28",
    component: () => import("@/components/Sub/NewsDetail/news28.vue"),
  },
  {
    path: "/news29",
    name: "NewsDetail29",
    component: () => import("@/components/Sub/NewsDetail/news29.vue"),
  },
  {
    path: "/news30",
    name: "NewsDetail30",
    component: () => import("@/components/Sub/NewsDetail/news30.vue"),
  },
  {
    path: "/news31",
    name: "newsdetail31",
    component: () => import("@/components/Sub/NewsDetail/news31.vue"),
  },
  {
    path: "/news32",
    name: "newsdetail32",
    component: () => import("@/components/Sub/NewsDetail/news32.vue"),
  },
  {
    path: "/news33",
    name: "newsdetail33",
    component: () => import("@/components/Sub/NewsDetail/news33.vue"),
  },
  {
    path: "/news34",
    name: "newsdetail34",
    component: () => import("@/components/Sub/NewsDetail/news34.vue"),
  },
  {
    path: "/news35",
    name: "newsdetail35",
    component: () => import("@/components/Sub/NewsDetail/news35.vue"),
  },
  {
    path: "/news36",
    name: "newsdetail36",
    component: () => import("@/components/Sub/NewsDetail/news36.vue"),
  },
  {
    path: "/news37",
    name: "newsdetail37",
    component: () => import("@/components/Sub/NewsDetail/news37.vue"),
  },
  {
    path: "/news38",
    name: "newsdetail38",
    component: () => import("@/components/Sub/NewsDetail/news38.vue"),
  },
  {
    path: "/news39",
    name: "newsdetail39",
    component: () => import("@/components/Sub/NewsDetail/news39.vue"),
  },
  {
    path: "/news40",
    name: "newsdetail40",
    component: () => import("@/components/Sub/NewsDetail/news40.vue"),
  },
  {
    path: "/news41",
    name: "newsdetail41",
    component: () => import("@/components/Sub/NewsDetail/news41.vue"),
  },
  {
    path: "/news42",
    name: "newsdetail42",
    component: () => import("@/components/Sub/NewsDetail/news42.vue"),
  },
  {
    path: "/news43",
    name: "newsdetail43",
    component: () => import("@/components/Sub/NewsDetail/news43.vue"),
  },
  {
    path: "/news44",
    name: "newsdetail44",
    component: () => import("@/components/Sub/NewsDetail/news44.vue"),
  },
  {
    path: "/news45",
    name: "newsdetail45",
    component: () => import("@/components/Sub/NewsDetail/news45.vue"),
  },
  {
    path: "/news46",
    name: "newsdetail46",
    component: () => import("@/components/Sub/NewsDetail/news46.vue"),
  },
  {
    path: "/news47",
    name: "newsdetail47",
    component: () => import("@/components/Sub/NewsDetail/news47.vue"),
  },
  {
    path: "/news48",
    name: "newsdetail48",
    component: () => import("@/components/Sub/NewsDetail/news48.vue"),
  },
  {
    path: "/news49",
    name: "newsdetail49",
    component: () => import("@/components/Sub/NewsDetail/news49.vue"),
  },
  {
    path: "/news50",
    name: "newsdetail50",
    component: () => import("@/components/Sub/NewsDetail/news50.vue"),
  },

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
