<template>
  <BasicLayout
    @selectedMenu="
      (menu) => {
        content = menu;
      }
    "
  >
    <MainLayout :content="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@/components/coronaApp/layouts/BasicLayout.vue";
import MainLayout from "@/components/coronaApp/layouts/MainLayout.vue";
export default {
  components: {
    BasicLayout,
    MainLayout,
  },
  data() {
    return {
      content: {
        title: "코로나 현황",
        index: "1",
        path: "menus/coronaStatus/MainSummary.vue",
      },
    };
  },
};
</script>

<style></style>
