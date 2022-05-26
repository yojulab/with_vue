<template>
  <WeatherItem
    v-for="(weather, index) in weatherlist"
    :key="index"
    :weather="weather"
  ></WeatherItem>
</template>

<script>
import WeatherItem from "./WeatherItem.vue";
export default {
  components: {
    WeatherItem,
  },
  props: {
    weatherlist: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
