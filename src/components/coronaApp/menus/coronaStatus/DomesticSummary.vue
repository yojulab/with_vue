<template>
  <h3>Domestic Summary</h3>
  <ul class="graph-grid">
    <li>
      <h3>corona Status</h3>
      <ChartGraph :chartOptions="filteredSummaryData" />
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
      caseKey: 0,
      toMonth: 3,
      summaryData: [],
    };
  },
  computed: {
    filteredSummaryData() {
      return {
        type: "line",
        labels: this.summaryData.map((item) => {
          console.log(item[0]);
          return Moment(item[0].Date).format("YYYY-MM-DD");
        }),
        datasets: [
          {
            label: "Confirmed",
            data: this.summaryData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Deaths",
            data: this.summaryData.map((item) => {
              return item.Deaths;
            }),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Recovered",
            data: this.summaryData.map((item) => {
              return item.Recovered;
            }),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };
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
      console.log(`from ${fromDay} to ${toDay}`);
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
      let loop_count = 0;
      while (loop_count <= this.toMonth) {
        const filtered = data.filter((item) => {
          let today = Moment(item.Date).format("YYYY-MM-DD");
          let fromday = Moment()
            .subtract(loop_count, "months")
            .format("YYYY-MM-DD");
          // if (today === fromday) {
          //   console.log(`today, fromday : ${today}, ${fromday}`);
          // }
          return today === fromday;
        });
        console.log(`filtered : ${filtered[0]}`);
        filteredData.push(filtered);
        loop_count++;
      }
      console.log(filteredData);
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
