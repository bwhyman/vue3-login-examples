import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { SET_MENULIST, SET_ROLE } from "@/store/VuexTypes";

function init() {
  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
}

const role = sessionStorage.getItem("role");
if (role) {
  import("@/role/UserRole.ts").then(({ setUserRole }) => {
    const menuList = setUserRole();
    store.commit(SET_ROLE, role);
    store.commit(SET_MENULIST, menuList);
    init();
  });
} else {
  init();
}
