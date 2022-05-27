<template>
  <main class="container">
    <CitiesSelector @selectedCity="displayCity"></CitiesSelector>
    <WeatherList :weatherlist="weatherlist"></WeatherList>
  </main>
</template>

<script>
import CitiesSelector from "./CitiesSelector.vue";
import WeatherList from "./WeatherList.vue";
import weatherMixin from "@/mixins/weatherMixins";

export default {
  mixins: [weatherMixin],
  components: {
    CitiesSelector,
    WeatherList,
  },
  data() {
    return {
      weatherlist: [],
    };
  },
  methods: {
    async displayCity(city) {
      console.log("Receive From Child:", city);
      if (city.selected) {
        const weather = await this.getWeather(city);
        // console.log("weather:", weather);
        this.weatherlist.push(weather);
      } else {
        // this.weatherlist.pop(city);
        const index = this.weatherlist.findIndex((item) => {
          return item.name === city.name;
        });
        this.weatherlist.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
