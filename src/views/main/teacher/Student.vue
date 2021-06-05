<template>
  <div>
    <h1>学生管理</h1>
    <p>此组件teacher/director角色均可见，粗粒度。</p>
    <br />
    但，右侧编辑/删除按钮，仅director权限可见：
    <button v-if="premission([DIRECTOR])">Edit</button>
    <button v-if="$store.getters.premission([DIRECTOR])">Delete</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { TEACHER, DIRECTOR } from "@/role/Role";
export default defineComponent({
  setup() {
    return {
      TEACHER,
      DIRECTOR
    };
  },
  computed: {
    ...mapGetters(["premission"])
  }
});
</script>
