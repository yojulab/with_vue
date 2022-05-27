<template>
  <div class="card mb-3">
    <div class="card-header">{{ weather.country }} {{ weather.name }}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <img :src="weather.icon" alt="" /> {{ weather.temperature }} &deg;C
      </li>
      <li class="list-group-item">습도 : {{ weather.humidity }}</li>
      <li class="list-group-item">바람 : {{ weather.wind }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      //   default() {
      //     return {
      //       country: "South Korea",
      //       name: "Seoul",
      //       main: {
      //         temperature: 20,
      //         humidity: 10,
      //       },
      //       wind: {
      //         speed: 1.0,
      //       },
      //       weather: [
      //         {
      //           description: "",
      //         },
      //       ],
      //     };
      //   },
      required: true,
    },
  },
};
</script>

<style></style>
