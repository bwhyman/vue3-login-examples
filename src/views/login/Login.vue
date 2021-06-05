<template>
  <div>
    <h1>Login</h1>
    <p>teacher: 1001; director: 1002; admin: 2002</p>
    <label>
      <input type="text" v-model="user.number" />
      <br />
      <input type="text" v-model="user.password" />
      <br />
      <button @click="login">login</button>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { LOGIN } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const user = ref({ number: "", password: "" });
    const store = useStore();
    const login = () => {
      store.dispatch(LOGIN, user.value);
    };
    return {
      user,
      login
    };
  }
});
</script>
