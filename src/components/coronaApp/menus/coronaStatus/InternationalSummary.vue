<template>
  <div style="margin-top: 20px">
    <el-radio-group v-model="selectedType" size="small">
      <el-radio-button
        v-for="(displayedType, index) in displayedTypes"
        :key="index"
        :label="index"
        >{{ displayedType.label }}</el-radio-button
      >
    </el-radio-group>
  </div>
  <ul>
    <li v-for="(country, idx) in coronaSummaryCountries" :key="idx">
      <!-- <img src="https://placeimg.com/10/10/any" alt="" /> -->
      <img
        :src="require(`@/assets/flags/3x2/${country.CountryCode}.svg`)"
        :alt="country.Country"
      />
      <span>{{ country.Country }}</span>
      <span>{{ country.NewConfirmed }}</span
      >/
      <span>{{ country.TotalConfirmed }}</span>
    </li>
  </ul>
</template>

<script>
import coronaMixin from "@/mixins/coronaMixin.js";
export default {
  mixins: [coronaMixin],
  mounted() {
    this.getCoronaSummary();
  },
  methods: {
    async getCoronaSummary() {
      const url = "https://api.covid19api.com/summary";
      const response = await this.fetchCoronaData("get", url);
      // console.log(response);
      this.coronaSummaryCountries = response.Countries;
    },
  },
  data() {
    return {
      coronaSummaryCountries: [],
      selectedType: 0,
      displayedTypes: [
        {
          name: "NewConfirmed",
          label: "New Confirmed",
          sortedlist: -1,
        },
        {
          name: "TotalConfirmed",
          label: "Total Confirmed",
          sortedlist: 1,
        },
        {
          name: "NewDeaths",
          label: "New Deaths",
          sortedlist: -1,
        },
        {
          name: "TotalDeaths",
          label: "Total Deaths",
          sortedlist: 1,
        },
      ],
    };
  },
  computed: {
    sortedCountries() {
      console.log(this.displayedTypes[this.selectedType]);
      const { name, sortedlist } = this.displayedTypes[this.selectedType];
      let list = [...this.coronaSummaryCountries];
      list.sort((a, b) => {
        return a[name] > b[name] ? sortedlist : -sortedlist;
      });
      return list;
    },
  },
};
</script>

<style></style>
