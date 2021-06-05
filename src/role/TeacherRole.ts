import { RouteRecordRaw } from "vue-router";
import { Menu } from "./Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/Main.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/main/teacher/TeacherHome.vue")
      },
      {
        path: "/teacher/students",
        component: () => import("@/views/main/teacher/Student.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "main" }
  }
];

// ----------------

const menuList: Menu[] = [
  {
    title: "学生管理模块",
    children: [
      {
        title: "学生管理",
        path: "/teacher/students"
      }
    ]
  }
];

// --------------------

export function getRoleMenus() {
  router.removeRoute("nomatch");
  routes.forEach(r => router.addRoute(r));
  return menuList;
}
