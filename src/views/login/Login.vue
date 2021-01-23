<template>
  <div>
    <h1>Login</h1>
    <label>
      number:
      <input type="text" v-model="number" />
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
    const number = ref(null);
    const store = useStore();
    const login = () => {
      store.dispatch(LOGIN, number.value);
    };
    return {
      number,
      login
    };
  }
});
</script>
