<template>
  <keep-alive>
    <component :is="currentApp"></component>
  </keep-alive>
</template>

<script>
import WeatherApp from "./components/weatherApp/WeatherApp.vue";
import CoronaApp from "./components/coronaApp/CoronaApp.vue";

export default {
  name: "App",
  data() {
    return {
      currentApp: "CoronaApp", // 0 = WeatherApp, 1 = CoronaApp,
    };
  },
  components: {
    WeatherApp,
    CoronaApp,
  },
};
</script>

<style></style>
