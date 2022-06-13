<template>
  <h3>{{ content.title }}</h3>
  <component :is="componentId"></component>
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {
          title: "",
          index: "",
          path: "",
        };
      },
    },
  },
  data() {
    return {
      componentId: "",
    };
  },
  watch: {
    content: {
      handler: function (val) {
        console.log(val);
        this.componentId = markRaw(
          defineAsyncComponent(() =>
            import(`@/components/coronaApp/${val.path}`)
          )
        );
      },
      deep: true,
    },
  },
};
</script>

<style></style>
