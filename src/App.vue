<template>
  <h2>Main App Vue</h2>
  <button @click="currentMenu = 'TodoListApp_JS'">TodoListApp_JS</button>
  <!-- <button @click="currentMenu = 'TodoList'">TodoList</button> -->
  <!-- <button @click="currentMenu = 'TodoListEvents'">TodoListEvents</button> -->
  <button @click="currentMenu = 'WeatherApp'">WeatherApp</button>
  <button @click="currentMenu = 'CoronaApp'">CoronaApp</button>
  <div>
    currentMenu : {{ currentMenu }}
    <keep-alive>
      <component :is="currentMenu"></component>
    </keep-alive>
  </div>
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
      currentMenu: "",
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

<style scoped>
button {
  padding: 0.3rem;
  margin: 0.3rem;
}
</style>
