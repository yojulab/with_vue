<template>
  <ul id="items">
    <TodoItem
      v-for="(item, index) in todolist"
      :key="index"
      :item="item"
    ></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todolist: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>

<style></style>
