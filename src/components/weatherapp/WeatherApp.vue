<template>
  <HeaderLayout></HeaderLayout>
  <MainContents></MainContents>
  <FooterLayout></FooterLayout>
</template>

<script>
import HeaderLayout from "./HeaderLayout.vue";
import MainContents from "./MainContents.vue";
import FooterLayout from "./FooterLayout.vue";
export default {
  components: {
    HeaderLayout,
    MainContents,
    FooterLayout,
  },
};
</script>

<style></style>
