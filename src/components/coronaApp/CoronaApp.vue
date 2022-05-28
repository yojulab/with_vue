<template>
  <div class="common-layout">
    <el-container>
      <el-header><HeaderLayout /></el-header>
      <el-container>
        <el-aside width="200px"
          ><AsideLayout :isCollapse="isCollapse.value"
        /></el-aside>
        <el-main><MainLayout /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderLayout from "./layouts/HeaderLayout.vue";
import AsideLayout from "./layouts/AsideLayout.vue";
import MainLayout from "./MainLayout.vue";
import useBreakpoint from "@/composables/use_breakpoint.js";
import { computed } from "vue";

export default {
  components: {
    HeaderLayout,
    AsideLayout,
    MainLayout,
  },
  setup() {
    const type = useBreakpoint();
    // console.log("CoronaApp : type ", type.value);

    const isCollapse = computed(() => type.value === "sm");
    console.log("return CoronaApp : isCollapse ", isCollapse.value);
    return {
      isCollapse,
    };
  },
};
</script>

<style></style>
