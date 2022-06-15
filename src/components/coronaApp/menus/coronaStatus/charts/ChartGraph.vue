<template>
  <canvas id="myChart" width="400" height="400" ref="myChart"></canvas>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  mounted() {
    this.drawChart();
  },
  props: {
    chartOptions: {
      type: Object,
      default() {
        return {
          type: "bar",
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        };
      },
    },
  },
  data() {
    return {
      ownChart: null,
    };
  },
  methods: {
    drawChart() {
      const { type, labels, datasets, options } = this.chartOptions;
      const ctx = document.getElementById("myChart").getContext("2d");
      // eslint-disable-next-line no-unused-vars
      this.ownChart = new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: options,
      });
    },
  },
};
</script>

<style></style>
