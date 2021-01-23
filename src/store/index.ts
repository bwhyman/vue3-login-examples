import { ActionTree, createStore } from "vuex";
import { Menu } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";

export interface State {
  role?: number | null;
  menuList?: Menu[];
}

const state: State = {
  role: null,
  menuList: []
};

const mutations = {
  [types.SET_ROLE](state: State, data: number) {
    state.role = data;
  },
  [types.SET_MENULIST](state: State, data: Menu[]) {
    state.menuList = data;
  }
};

const getters = {
  premission: (state: State) => (level: number[]) =>
    level.some(l => l == state.role)
};
const actions: ActionTree<State, State> = {
  async [types.LOGIN]({ commit }, data: number) {
    // 此处向后端发出登录请求。后端返回token以及加密role，置于sessionstorage
    // 每次请求在header中携带token
    // 并基于role加载对应的角色权限路由/功能列表等信息，也可加载对应的API请求操作
    if (data == 1001) {
      commit(types.SET_ROLE, 4);
      sessionStorage.setItem("role", "4");
      const { setUserRole } = await import("@/role/UserRole.ts");
      const menuList = setUserRole();
      commit(types.SET_MENULIST, menuList);
      router.push("/main");
    }
  }
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
