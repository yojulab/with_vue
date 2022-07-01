<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import TodoApp from "./components/todoApp/TodoApp.vue";
import WeatherApp from "./components/weatherApp/WeatherApp.vue";
import CoronaApp from "./components/coronaApp/CoronaApp.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "TodoApp",
    };
  },
  components: {
    TodoApp,
    WeatherApp,
    CoronaApp,
  },
};
</script>

<style></style>
