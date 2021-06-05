import store from "@/store";

export const TEACHER = "fe0f2c";
export const DIRECTOR = "dcce70";
export const ADMIN = "7dab98";

export function setRole(roleId: string) {
  let menuList = [];
  // teacher角色
  if (roleId == TEACHER) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    menuList = require("@/role/TeacherRole").getRoleMenus();
  }

  if (roleId == DIRECTOR) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    menuList = require("@/role/TeacherRole").getRoleMenus();
  }

  // admin角色
  if (roleId == ADMIN) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    menuList = require("@/role/AdminRole").getRoleMenus();
  }
  store.state.menuList = menuList;
}
