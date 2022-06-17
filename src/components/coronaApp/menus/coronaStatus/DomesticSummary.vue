<template>
  <h3>Domestic Summary</h3>
  <ul class="graph-grid">
    <li>
      <h3>corona Status</h3>
      <ChartGraph :chartOptions="filteredSummary" :key="watchKey0" />
    </li>
    <li>
      <h3>Confirmed VS Deaths</h3>
      <ChartGraph :chartOptions="comparedSummary" :key="watchKey1" />
    </li>
    <li>
      <h3>Deaths VS Recoverd</h3>
      <ChartGraph :chartOptions="recoverdSummary" :key="watchKey2" />
    </li>
  </ul>
</template>

<script>
import ChartGraph from "./charts/ChartGraph";
import CoronaMixin from "@/mixins/coronaMixin";
import Moment from "moment";
export default {
  mixins: [CoronaMixin],
  components: {
    ChartGraph,
  },
  data() {
    return {
      watchKey0: 0,
      watchKey1: 0,
      toMonth: 3,
      summaryData: [],
    };
  },
  computed: {
    filteredSummary() {
      return {
        type: "line",
        labels: this.summaryData.map((item) => {
          // console.log(item);
          return Moment(item.Date).format("YYYY-MM-DD");
        }),
        datasets: [
          {
            label: "Confirmed",
            data: this.summaryData.map((item) => item.Confirmed),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Deaths",
            data: this.summaryData.map((item) => {
              return item.Deaths;
            }),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Recovered",
            data: this.summaryData.map((item) => {
              return item.Recovered;
            }),
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
        ],
      };
    },
    recoverdSummary() {
      const lastMonth = this.summaryData[this.summaryData.length - 1] || {};
      const lastMonthRecovered = lastMonth.Recovered || 0;
      const lastMonthDeaths = lastMonth.Deaths || 0;
      const data = [lastMonthRecovered, lastMonthDeaths];
      return {
        type: "doughnut",
        labels: ["Recovered", "Deaths"],
        datasets: [
          {
            label: "Recovered",
            data: data,
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };
    },
    comparedSummary() {
      const lastMonth = this.summaryData[this.summaryData.length - 1] || {};
      const lastMonthConfirmed = lastMonth.Confirmed || 0;
      const lastMonthDeaths = lastMonth.Deaths || 0;
      const data = [lastMonthConfirmed, lastMonthDeaths];
      return {
        type: "doughnut",
        labels: ["Confirmed", "Deaths"],
        datasets: [
          {
            label: "Confirmed",
            data: data,
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };
    },
  },
  watch: {
    summaryData: {
      handler() {
        this.watchKey0++;
        this.watchKey1++;
        this.watchKey2++;
      },
      deep: true,
    },
  },
  mounted() {
    this.getSummaryData(); // get summary data
  },
  methods: {
    async getSummaryData() {
      const toDay = Moment().format("YYYY-MM-DD"); // get current date
      const fromDay = Moment()
        .subtract(this.toMonth, "months")
        .format("YYYY-MM-DD"); // get date from 3 months ago
      // console.log(`from ${fromDay} to ${toDay}`);
      const params = {
        from: fromDay,
        to: toDay,
      };
      const url = "https://api.covid19api.com/live/country/south-korea";

      const response = await this.fetchCoronaData("get", url, params);
      // console.log(response);
      this.summaryData = this.filterSummarayData(response);
    },
    filterSummarayData(data) {
      const filteredData = [];

      const baseDay = Moment().format("DD");
      // console.log(`baseDay : ${baseDay}`);
      data.forEach((item) => {
        let compareDay = Moment(item.Date).format("DD");
        if (baseDay === compareDay) {
          // console.log(`baseDay, compareDay : ${baseDay}, ${compareDay}`);
          filteredData.push(item);
        }
      });
      console.log(filteredData);
      return filteredData;
    },
  },
};
</script>

<style>
.graph-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;
}
</style>
