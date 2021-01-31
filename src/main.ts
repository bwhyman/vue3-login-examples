import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { SET_MENULIST, SET_ROLE } from "@/store/VuexTypes";

const role = sessionStorage.getItem("role");

if (role) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const user = require("@/role/UserRole.ts");
  const menuList = user.setUserRole();
  store.commit(SET_ROLE, role);
  store.commit(SET_MENULIST, menuList);
}

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
