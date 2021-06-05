import { ActionTree, createStore } from "vuex";
import { Menu } from "@/role/Menu";
import router from "@/router";
import * as types from "./VuexTypes";
import axios from "@/axios";
import { ResultVO } from "./Response";
import { setRole } from "@/role/Role";

export interface State {
  menuList?: Menu[];
  exception?: string;
}

const state: State = {
  menuList: [],
  exception: ""
};

const getters = {
  premission: () => (level: string[]) =>
    level.some(l => l == sessionStorage.getItem("role"))
};
const actions: ActionTree<State, State> = {
  [types.LOGIN]: async (_, data: any) => {
    // 此处向后端发出登录请求。后端返回token以及加密role，置于sessionstorage
    // 每次请求在header中携带token
    // 并基于role加载对应的角色权限路由/功能列表等信息，也可加载对应的API请求操作
    const resp = await axios.post<ResultVO>("login", data);
    if (resp.data.code == 200) {
      const roleId = resp.headers.role;
      setRole(roleId);
      sessionStorage.setItem("role", roleId);
      sessionStorage.setItem("token", resp.headers.token);
      router.push("/main");
    }
  }
};

export default createStore({
  state: state,
  actions: actions,
  getters: getters
});
