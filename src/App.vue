<template>
  <div id="nav">
    <router-view />
    <alertdialog />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
const alertdialog = defineAsyncComponent(() =>
  import("@/components/AlertDialog.vue")
);
export default defineComponent({
  components: { alertdialog }
});
</script>
