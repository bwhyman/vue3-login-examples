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
        component: () => import("@/views/main/admin/AdminHome.vue")
      },
      {
        path: "/admin/backup",
        component: () => import("@/views/main/admin/Backup.vue")
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
    title: "系统管理模块",
    children: [
      {
        title: "系统备份管理",
        path: "/admin/backup"
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
