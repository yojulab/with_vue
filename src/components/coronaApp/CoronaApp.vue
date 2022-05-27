<template>
  <div class="common-layout">
    <el-container>
      <el-header><HeaderLayout /></el-header>
      <el-container>
        <el-aside width="200px"><AsideLayout /></el-aside>
        <el-main><MainLayout /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderLayout from "./layouts/HeaderLayout.vue";
import AsideLayout from "./layouts/AsideLayout.vue";
import MainLayout from "./MainLayout.vue";

export default {
  components: {
    HeaderLayout,
    AsideLayout,
    MainLayout,
  },
};
</script>

<style></style>
