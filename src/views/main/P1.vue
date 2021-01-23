<template>
  <div>
    <h1>P1</h1>
    {{ result }}
    <br />
    <button v-if="premission([3, 4])">Edit</button>
    <br />
    <button v-if="$store.getters.premission([4])">Delete</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  setup() {
    const result = ref("test");
    return {
      result
    };
  },
  computed: {
    ...mapGetters(["premission"])
  }
});
</script>
