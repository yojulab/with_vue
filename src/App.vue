<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import TodoList from "./components/todoListApp/TodoListApp.vue";
import TodoListEvents from "./components/todoListEventsApp/todoListEventsApp.vue";
import WeatherApp from "./components/weatherApp/WeatherApp.vue";
import CoronaApp from "./components/coronaApp/CoronaApp.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "TodoListEvents",
    };
  },
  components: {
    TodoList,
    TodoListEvents,
    WeatherApp,
    CoronaApp,
  },
};
</script>

<style></style>
