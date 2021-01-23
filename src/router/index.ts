import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    name: "nomatch",
    path: "/:pathMatch(.*)*",
    redirect: { name: "login" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
