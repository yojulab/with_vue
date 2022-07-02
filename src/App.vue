<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import TodoListEvents from "./components/todoListEventsApp/todoListEventsApp.vue";
import TodoList from "./components/todoListApp/TodoListApp.vue";
import TodoListApp_JS from "./components/todoListApp_JS/todoListApp_JS.vue";
import WeatherApp from "./components/weatherApp/WeatherApp.vue";
import CoronaApp from "./components/coronaApp/CoronaApp.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "TodoListApp_JS",
    };
  },
  components: {
    TodoList,
    TodoListEvents,
    WeatherApp,
    CoronaApp,
    TodoListApp_JS,
  },
};
</script>

<style></style>
