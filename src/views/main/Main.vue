<template>
  <div>
    <h1>Main</h1>
    <sidebar />
    <hr />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/main/Sidebar.vue";

export default defineComponent({
  components: { sidebar }
});
</script>
