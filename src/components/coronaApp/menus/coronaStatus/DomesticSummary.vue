<template>
  <h3>Domestic Summary</h3>
  <ul class="graph-grid">
    <li>
      <h3>corona Status</h3>
      <ChartGraph />
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
        filteredData.push(filtered);
        loop_count++;
      }
      // console.log(filteredData);
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
