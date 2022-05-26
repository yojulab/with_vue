import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeather(city) {
      console.log(process.env);
      const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      const { coord, main, wind, weather } = response.data;
      const _weather = {
        name: response.data.name,
        coord: {
          lon: coord.lon,
          lat: coord.lat,
        },
        temperature: this.temperatureToCelsius(main.temp),
        wind: wind.speed,
        humidity: main.humidity,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      };
      return _weather;
    },
    temperatureToCelsius(temperature) {
      return (temperature - 273.15).toFixed(2);
    },
  },
};

export default weatherMixin;
