<template>
  <ul id="items">
    <TodoItem :todoText="todoText"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todoText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
