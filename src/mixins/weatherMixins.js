import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeather(city) {
      const API_KEY = "cbdbbb3a98df1289f73ac00a15f1cd46";
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
